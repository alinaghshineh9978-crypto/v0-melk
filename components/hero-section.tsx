"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Layer 1 — blurred depth background */}
      <div className="absolute inset-0 scale-125">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover blur-2xl brightness-50"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Layer 2 — sharp image for depth */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury property at golden hour"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Layer 3 — cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div className="text-center">
          {/* Brand label */}
          <p
            className={`mb-4 text-xs tracking-[0.35em] text-white/50 uppercase transition-all duration-1000 delay-100 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Naghshineh Collection
          </p>

          {/* Main Persian headline */}
          <h1
            className={`font-sans text-4xl font-light leading-tight text-white xs:text-5xl sm:text-6xl md:text-7xl transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            املاک لوکس
            <br />
            <span className="text-white/60">در اوج انتخاب</span>
          </h1>

          {/* Decorative gold line */}
          <div
            className={`mx-auto my-6 h-px w-16 bg-accent sm:my-8 sm:w-24 transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          {/* Persian tagline */}
          <p
            className={`font-sans text-sm font-light leading-relaxed text-white/60 px-4 sm:text-base sm:px-0 transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            مشاوره و انتخاب املاک لوکس و خاص
          </p>

          {/* CTA buttons */}
          <div
            className={`mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 transition-all duration-1000 delay-600 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="#properties"
              className="w-full max-w-[180px] bg-white px-6 py-3 text-center text-xs tracking-[0.15em] text-foreground transition-colors hover:bg-white/90 active:bg-white/80 sm:w-auto"
            >
              مشاهده فایل‌ها
            </a>
            <a
              href="#contact"
              className="w-full max-w-[180px] border border-white/30 px-6 py-3 text-center text-xs tracking-[0.15em] text-white transition-colors hover:bg-white/10 active:bg-white/20 sm:w-auto"
            >
              تماس با مشاور
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] text-white/40 sm:text-xs">اسکرول</span>
            <div className="h-8 w-px animate-pulse bg-white/30 sm:h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}
