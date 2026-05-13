import type { Metadata } from 'next'
import './globals.css'
// Core styles (includes fonts, root, mains, techmain, responsives, tablet etc.)
import '@/styles/masters.css'
// Menu/nav styles
import '@/styles/menu.css'
// Page-specific styles for The Next Tech summit
import '@/styles/theNextTech.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Next Tech 1.0 | Masters Union AI Summit 2026',
  description: "Join India's premier AI Summit 2026. Connect with top founders, explore the AI Expo, and attend the prestigious Awards. Secure your Early Bird spot. Register!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        
        {/* Core Libraries */}
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="afterInteractive" />
        
        {/* Custom Scripts */}
        <Script src="/assets/js/sliders.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
