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
 * `TSTypeLiteral` and `TSInterfaceBody` — it ignores `ImportDeclaration` and
 * `ExportNamedDeclaration`, even though `@stylistic/object-curly-newline`
 * already treats their braces the same way it treats object literals. This
 * rule fills that gap: one named specifier per line, same options/behaviour
 * as `function-declaration-argument-newline`.
 */
const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce line breaks between named specifiers of an import or export declaration',
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
      missingLineBreak: 'There should be a line break after this specifier.',
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

    function checkSpecifiers(specifierNodes: any[], checker: Checker) {
      for (let i = 1; i < specifierNodes.length; i++) {
        const prevSpecifierToken = sourceCode.getLastToken(specifierNodes[i - 1])
        const currentSpecifierToken = sourceCode.getFirstToken(specifierNodes[i])

        if (checker.check(prevSpecifierToken, currentSpecifierToken)) {
          const tokenBefore = sourceCode.getTokenBefore(currentSpecifierToken, { includeComments: true })
          const hasLineCommentBefore = tokenBefore?.type === 'Line'

          context.report({
            node: specifierNodes[i - 1],
            loc: {
              start: tokenBefore!.loc.end,
              end: currentSpecifierToken.loc.start,
            },
            messageId: checker.messageId,
            fix: hasLineCommentBefore ? null : checker.createFix(currentSpecifierToken, tokenBefore),
          })
        }
      }
    }

    function check(specifierNodes: any[]) {
      if (specifierNodes.length < 2) return

      if (option === 'never') {
        checkSpecifiers(specifierNodes, checkers.unexpected)
        return
      }

      if (option === 'always') {
        checkSpecifiers(specifierNodes, checkers.missing)
        return
      }

      // consistent
      const firstOnSameLine = isTokenOnSameLine(
        sourceCode.getLastToken(specifierNodes[0]),
        sourceCode.getFirstToken(specifierNodes[1]),
      )
      checkSpecifiers(specifierNodes, firstOnSameLine ? checkers.unexpected : checkers.missing)
    }

    return {
      ImportDeclaration: node =>
        check(node.specifiers.filter((specifier: any) => specifier.type === 'ImportSpecifier')),
      ExportNamedDeclaration: node =>
        check(node.specifiers.filter((specifier: any) => specifier.type === 'ExportSpecifier')),
    }
  },
}

export default rule
