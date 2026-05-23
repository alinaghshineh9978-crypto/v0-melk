"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">

      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury Architecture"
          fill
          className="object-cover object-center scale-[1.03]"
          priority
          quality={95}
        />
      </div>

      {/* ── Cinematic layered overlays ── */}
      {/* Base darkening — heavier for editorial depth */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Bottom-up atmospheric fog */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Side vignettes for cinematic framing */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/30 to-transparent" />

      {/* Subtle warm gold atmospheric light — top right */}
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[oklch(0.72_0.06_80/0.06)] blur-[120px]" />

      {/* ── Content ── */}
      <div className="relative z-10 flex h-full flex-col justify-between px-8 pb-10 pt-32 sm:px-12 sm:pb-14 md:px-16 md:pb-16 lg:px-24">

        {/* Top label */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <span className="text-[10px] tracking-[0.35em] text-white/40 sm:text-xs">
            NAGHSHINEH — COLLECTION
          </span>
        </div>

        {/* Main editorial content — bottom aligned */}
        <div className="max-w-3xl">

          {/* Persian supporting line — above headline */}
          <p
            className={`mb-5 font-sans text-xs font-light tracking-[0.25em] text-white/45 transition-all duration-1000 delay-100 ease-out sm:mb-6 sm:text-sm ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            مجموعه منتخب نقشینه
          </p>

          {/* Main serif headline */}
          <h1
            className={`mb-6 font-serif font-light leading-[1.05] text-white transition-all duration-1000 delay-200 ease-out sm:mb-8 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            Naghshineh
            <br />
            <span className="text-white/70">Estates Division</span>
          </h1>

          {/* Accent rule */}
          <div
            className={`mb-7 h-px w-10 bg-accent transition-all duration-1000 delay-350 ease-out sm:mb-8 sm:w-14 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ transformOrigin: "right" }}
          />

          {/* Persian tagline */}
          <p
            className={`mb-10 max-w-xs font-sans text-sm font-light leading-[1.9] text-white/55 transition-all duration-1000 delay-450 ease-out sm:mb-12 sm:max-w-sm sm:text-base ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            انتخاب و مشاوره در بهترین
            <br />
            املاک خاص و لوکس
          </p>

          {/* CTA Row */}
          <div
            className={`flex items-center gap-8 transition-all duration-1000 delay-550 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Primary CTA */}
            <Link
              href="#properties"
              className="group relative border border-white/25 px-7 py-3.5 text-xs font-light tracking-[0.18em] text-white/90 transition-all duration-400 hover:border-accent/60 hover:text-white sm:px-9 sm:py-4 sm:text-sm"
            >
              {/* Subtle hover fill */}
              <span className="absolute inset-0 bg-white/0 transition-all duration-400 group-hover:bg-white/[0.04]" />
              <span className="relative">مشاهده مجموعه</span>
            </Link>

            {/* Ghost link */}
            <Link
              href="#contact"
              className="flex items-center gap-3 text-xs font-light tracking-[0.15em] text-white/40 transition-colors duration-300 hover:text-white/70 sm:text-sm"
            >
              <span>تماس با ما</span>
              <span className="h-px w-5 bg-current opacity-60" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ease-out sm:bottom-14 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-[0.3em] text-white/25">SCROLL</span>
            <div className="relative h-10 w-px overflow-hidden bg-white/10 sm:h-14">
              <div className="absolute inset-x-0 top-0 h-1/2 animate-[scrollLine_2s_ease-in-out_infinite] bg-white/40" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
