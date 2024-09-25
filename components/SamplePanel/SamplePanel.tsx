"use client"

import { PropsWithChildren } from "react"

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer")
}

type PanelProps = {
  beforeColon: string
  afterColon?: string
  link: string
}

export default function SamplePanel({ beforeColon, afterColon, link }: PropsWithChildren<PanelProps>) {
  var elementId: string = beforeColon.toLowerCase().split(" ").join("-") + "-link"

  if (afterColon) {
    return (
      <p
        id={elementId}
        className="sample-double-link my-4 rounded-lg border-y-3 border-mosque-100 p-2 hover:cursor-pointer hover:border-mosque-700 hover:bg-gradient-to-br hover:from-mosque-700 hover:to-mosque-900"
        onClick={() => openInNewTab(link)}
      >
        <span className="font-bold capitalize text-mosque-100">{beforeColon}:</span>{" "}
        <span className="block font-medium capitalize">{afterColon}</span>
      </p>
    )
  }

  return (
    <p
      id={elementId}
      className="sample-link my-4 rounded-lg border-y-3 border-mosque-100 p-2 hover:cursor-pointer hover:border-mosque-700 hover:bg-gradient-to-br hover:from-mosque-700 hover:to-mosque-900"
      onClick={() => openInNewTab(link)}
    >
      <span className="font-semibold capitalize">{beforeColon}</span>{" "}
    </p>
  )
}
