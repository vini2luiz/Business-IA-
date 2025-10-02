// Import all available fonts for AI usage
import { Inter, Roboto, Open_Sans, Source_Code_Pro, Fira_Code, JetBrains_Mono } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
})

export const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})
