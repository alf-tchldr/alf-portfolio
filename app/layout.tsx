import { Dosis, Jost, Roboto_Mono } from "next/font/google"
import "styles/custom.css"
import "styles/tailwind.css"

import { PHProvider } from "./providers"

const callout = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-jost",
})

const callout2 = Dosis({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-dosis",
  style: ["normal"],
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  style: ["normal", "italic"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${callout.variable} ${callout2.variable} ${roboto_mono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/imgs/LogoTypeColour.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <PHProvider>
        <body>{children}</body>
      </PHProvider>
    </html>
  )
}
