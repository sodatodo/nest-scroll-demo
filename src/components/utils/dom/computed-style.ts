import { inBrowser } from "../base"
import { createNodesRef, elementUnref } from "./element"

export function getComputedStyle(
  elementOrRef: any,
  computedStyle: string[],
): Promise<CSSStyleDeclaration> {
  const element = elementUnref(elementOrRef)
  if (element) {
    if (inBrowser) {
      return Promise.resolve(window.getComputedStyle(element))
    } else {
      return new Promise<CSSStyleDeclaration>((resolve) => {
        createNodesRef(element)
          .fields(
            {
              computedStyle,
            },
            (result) => resolve(result as CSSStyleDeclaration),
          )
          .exec()
      })
    }
  }

  return Promise.resolve({} as CSSStyleDeclaration)
}
