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
  if (afterColon) {
    return (
      <p
        className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 hover:cursor-pointer"
        onClick={() => openInNewTab(link)}
      >
        <span className="text-mosque-100 font-bold capitalize">{beforeColon}:</span>{" "}
        <span className="block font-medium capitalize">{afterColon}</span>
      </p>
    )
  }

  return (
    <p
      className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 hover:cursor-pointer"
      onClick={() => openInNewTab(link)}
    >
      <span className="font-semibold capitalize">{beforeColon}</span>{" "}
    </p>
  )
}
