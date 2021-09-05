import { getSystemInfo, useReady } from "@tarojs/taro"
import { useState } from "react"

const INITIAL_RECT: SystemRect = {
  screenHeight: 0,
  screenWidth: 0,
  windowHeight: 0,
  windowWidth: 0,
}

export interface SystemRect {
  screenHeight: number
  screenWidth: number
  windowHeight: number
  windowWidth: number
}

export function getSystemRect(): Promise<SystemRect> {
  return getSystemInfo().then(({ screenHeight, screenWidth, windowHeight, windowWidth }) => ({
    screenHeight,
    screenWidth,
    windowHeight,
    windowWidth,
  }))
}

export function useSystemRect(): SystemRect {
  const [rect, setRect] = useState<SystemRect>(INITIAL_RECT)
  useReady(() => getSystemRect().then(setRect))
  return rect
}
