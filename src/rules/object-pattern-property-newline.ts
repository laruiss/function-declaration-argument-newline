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
 * `@stylistic/object-property-newline` only listens to `ObjectExpression`,
 * `TSTypeLiteral` and `TSInterfaceBody` — it ignores `ObjectPattern`, even
 * though `@stylistic/object-curly-newline` already treats a destructured
 * pattern's braces the same way it treats object literal braces. This rule
 * fills that gap: one destructured property per line, same options/behaviour
 * as `function-declaration-argument-newline` and `import-specifier-newline`.
 */
const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce line breaks between properties of a destructured object pattern',
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
      missingLineBreak: 'There should be a line break after this property.',
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

    function checkProperties(propertyNodes: any[], checker: Checker) {
      for (let i = 1; i < propertyNodes.length; i++) {
        const prevPropertyToken = sourceCode.getLastToken(propertyNodes[i - 1])
        const currentPropertyToken = sourceCode.getFirstToken(propertyNodes[i])

        if (checker.check(prevPropertyToken, currentPropertyToken)) {
          const tokenBefore = sourceCode.getTokenBefore(currentPropertyToken, { includeComments: true })
          const hasLineCommentBefore = tokenBefore?.type === 'Line'

          context.report({
            node: propertyNodes[i - 1],
            loc: {
              start: tokenBefore!.loc.end,
              end: currentPropertyToken.loc.start,
            },
            messageId: checker.messageId,
            fix: hasLineCommentBefore ? null : checker.createFix(currentPropertyToken, tokenBefore),
          })
        }
      }
    }

    function check(propertyNodes: any[]) {
      if (propertyNodes.length < 2) return

      if (option === 'never') {
        checkProperties(propertyNodes, checkers.unexpected)
        return
      }

      if (option === 'always') {
        checkProperties(propertyNodes, checkers.missing)
        return
      }

      // consistent
      const firstOnSameLine = isTokenOnSameLine(
        sourceCode.getLastToken(propertyNodes[0]),
        sourceCode.getFirstToken(propertyNodes[1]),
      )
      checkProperties(propertyNodes, firstOnSameLine ? checkers.unexpected : checkers.missing)
    }

    return {
      ObjectPattern: node => check(node.properties),
    }
  },
}

export default rule
