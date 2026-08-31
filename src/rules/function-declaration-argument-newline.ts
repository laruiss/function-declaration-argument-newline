import type { Rule } from 'eslint'

type Option = 'always' | 'never' | 'consistent'

function isTokenOnSameLine(left: { loc: any }, right: { loc: any }): boolean {
  return left.loc.end.line === right.loc.start.line
}

interface Checker {
  messageId: 'unexpectedLineBreak' | 'missingLineBreak'
  check: (prevToken: any, currentToken: any) => boolean
  createFix: (token: any, tokenBefore: any) => Rule.ReportFixer
}

/**
 * Definition-side counterpart to `@stylistic/function-call-argument-newline`,
 * which only covers call arguments, not the params of the function being
 * declared. Mirrors its options/behaviour so it slots in next to it.
 */
const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce line breaks between parameters of a function definition',
    },
    fixable: 'whitespace',
    schema: [
      {
        type: 'string',
        enum: ['always', 'never', 'consistent'],
      },
    ],
    messages: {
      unexpectedLineBreak: 'There should be no line break here.',
      missingLineBreak: 'There should be a line break after this parameter.',
    },
  },
  create(context) {
    const option: Option = (context.options[0] as Option) ?? 'always'
    const sourceCode: any = context.sourceCode

    const checkers: Record<'unexpected' | 'missing', Checker> = {
      unexpected: {
        messageId: 'unexpectedLineBreak',
        check: (prevToken, currentToken) => !isTokenOnSameLine(prevToken, currentToken),
        createFix: (token, tokenBefore) => fixer =>
          fixer.replaceTextRange([tokenBefore.range[1], token.range[0]], ' '),
      },
      missing: {
        messageId: 'missingLineBreak',
        check: (prevToken, currentToken) => isTokenOnSameLine(prevToken, currentToken),
        createFix: (token, tokenBefore) => fixer =>
          fixer.replaceTextRange([tokenBefore.range[1], token.range[0]], '\n'),
      },
    }

    function checkParams(paramNodes: any[], checker: Checker) {
      for (let i = 1; i < paramNodes.length; i++) {
        const prevParamToken = sourceCode.getLastToken(paramNodes[i - 1])
        const currentParamToken = sourceCode.getFirstToken(paramNodes[i])

        if (checker.check(prevParamToken, currentParamToken)) {
          const tokenBefore = sourceCode.getTokenBefore(currentParamToken, { includeComments: true })
          const hasLineCommentBefore = tokenBefore?.type === 'Line'

          context.report({
            node: paramNodes[i - 1],
            loc: {
              start: tokenBefore!.loc.end,
              end: currentParamToken.loc.start,
            },
            messageId: checker.messageId,
            fix: hasLineCommentBefore ? null : checker.createFix(currentParamToken, tokenBefore),
          })
        }
      }
    }

    function check(paramNodes: any[]) {
      if (paramNodes.length < 2) return

      if (option === 'never') {
        checkParams(paramNodes, checkers.unexpected)
        return
      }

      if (option === 'always') {
        checkParams(paramNodes, checkers.missing)
        return
      }

      // consistent
      const firstOnSameLine = isTokenOnSameLine(
        sourceCode.getLastToken(paramNodes[0]),
        sourceCode.getFirstToken(paramNodes[1]),
      )
      checkParams(paramNodes, firstOnSameLine ? checkers.unexpected : checkers.missing)
    }

    return {
      FunctionDeclaration: node => check(node.params),
      FunctionExpression: node => check(node.params),
      ArrowFunctionExpression: node => check(node.params),
    }
  },
}

export default rule
