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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury Architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Main Title */}
          <h1 className="mb-2 font-serif text-3xl font-light tracking-wide text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Naghshineh Collection
          </h1>
          
          {/* Subtitle */}
          <p
            className={`mb-6 font-serif text-lg font-light tracking-[0.2em] text-white/90 xs:text-xl sm:text-2xl md:text-3xl sm:tracking-[0.3em] sm:mb-8 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Estates Division
          </p>

          {/* Decorative Line */}
          <div
            className={`mx-auto mb-6 h-px w-16 bg-accent sm:mb-8 sm:w-24 transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          {/* Tagline in Persian */}
          <p
            className={`font-sans text-sm font-light leading-relaxed tracking-wide text-white/80 px-4 sm:text-base sm:px-0 md:text-lg lg:text-xl transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            مشاوره و انتخاب املاک لوکس و خاص
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] text-white/60 sm:text-xs">اسکرول</span>
            <div className="h-8 w-px animate-pulse bg-white/40 sm:h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}
