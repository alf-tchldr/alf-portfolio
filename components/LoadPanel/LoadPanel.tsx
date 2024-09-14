"use client"

import { Fade, Slide } from "react-awesome-reveal"

import { PropsWithChildren } from "react"

type PanelProps = {
  effect?: string
}

export default function LoadPanel({ children, effect = "slide" }: PropsWithChildren<PanelProps>) {
  if (effect == "fade") {
    return (
      <Fade cascade damping={0.4} triggerOnce>
        {children}
      </Fade>
    )
  }

  return (
    <Slide cascade damping={0.4} triggerOnce direction="up" delay={2}>
      {children}
    </Slide>
  )
}
