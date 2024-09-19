"use client"

import { keyframes } from "@emotion/react"
import { Fade, Reveal } from "react-awesome-reveal"

import { PropsWithChildren } from "react"

type PanelProps = {
  effect?: string
  faster?: boolean
}

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export default function LoadPanel({ children, effect = "slide", faster = false }: PropsWithChildren<PanelProps>) {
  if (effect === "fade") {
    return (
      <Fade cascade damping={0.4} triggerOnce>
        {children}
      </Fade>
    )
  }

  return (
    <Reveal
      triggerOnce
      keyframes={customAnimation}
      cascade
      damping={faster ? 0.4 : 0.0}
      duration={faster ? 400 : 1000}
      delay={faster ? 0 : 2}
    >
      {children}
    </Reveal>
  )
}
