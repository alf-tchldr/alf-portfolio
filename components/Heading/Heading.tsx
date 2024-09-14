"use client"

import FancyText from "@carefully-coded/react-text-gradient"

import { HTMLProps, PropsWithChildren } from "react"
import resolveConfig from "tailwindcss/resolveConfig"
import { DefaultColors } from "tailwindcss/types/generated/colors.js"
import tailwindConfig from "../../tailwind.config.js"

const fullConfig = resolveConfig(tailwindConfig)

export function getHexByName(name: string) {
  var nameParts = name.split("-")

  var colorName = nameParts[0]
  var colorTone = nameParts[1]

  if (colorName && colorTone) {
    if (nameParts.length === 3) {
      colorName = nameParts[0] + "-" + nameParts[1]
      colorTone = nameParts[2]
    }

    var tones = fullConfig.theme.colors[colorName as keyof DefaultColors]
    const value = Object.entries(tones).find(([key]) => key === colorTone)?.[1]

    if (value) {
      return value
    }
  }

  return "#000000"
}

type PanelProps = {
  className?: HTMLProps<HTMLElement>["className"]
  from: string
  to: string
}

export default function Heading({ children, className, from, to }: PropsWithChildren<PanelProps>) {
  return (
    <FancyText
      className={className}
      gradient={{ from: getHexByName(from), to: getHexByName(to), type: "linear" }}
      animate
      animateDuration={5000}
    >
      {children}
    </FancyText>
  )
}
