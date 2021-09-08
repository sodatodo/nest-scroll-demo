import isNumber from "lodash/isNumber"
import isArray from 'lodash/isArray'
import forEach from 'lodash/forEach'
import * as requestAnimationFrame from "raf"

export function cancelRaf(rafId: number | number[]) {
  if (isNumber(rafId)) {
    requestAnimationFrame.cancel(rafId)
  } else if (isArray(rafId)) {
    forEach(rafId, cancelRaf)
  }
}

export function raf(cb: FrameRequestCallback) {
  // @ts-ignore
  return requestAnimationFrame.default(cb)
}

export function doubleRaf(cb: FrameRequestCallback): [number, number] {
  const rafIds: [number, number] = [0, 0]
  rafIds[1] = raf(() => {
    rafIds[0] = raf(cb)
  })
  return rafIds
}
