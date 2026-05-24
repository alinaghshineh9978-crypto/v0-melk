"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    // Staggered reveal: image first, then each text layer
    const t1 = setTimeout(() => setStage(1), 200)   // image + overlay
    const t2 = setTimeout(() => setStage(2), 900)   // brand name
    const t3 = setTimeout(() => setStage(3), 1500)  // divider
    const t4 = setTimeout(() => setStage(4), 1900)  // tagline
    const t5 = setTimeout(() => setStage(5), 2500)  // scroll indicator
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">

      {/* ── Background image ───────────────────────────── */}
      <div
        className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
        style={{ opacity: stage >= 1 ? 1 : 0 }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury Architecture"
          fill
          className="object-cover object-center scale-[1.04]"
          style={{
            filter: "blur(0.5px) brightness(0.72)",
            transition: "transform 8s ease-out",
          }}
          priority
        />
      </div>

      {/* ── Layered overlays for cinematic depth ────────── */}
      {/* Base dark veil */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Bottom atmospheric fog */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      {/* Side vignettes */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/30 to-transparent" />
      {/* Warm gold atmospheric bloom — bottom right */}
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-[oklch(0.72_0.06_80/0.06)] blur-3xl" />

      {/* ── Content — bottom-left editorial positioning ── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end px-8 pb-24 sm:px-14 sm:pb-28 md:px-20 md:pb-32">

        {/* Brand name */}
        <h1
          className="font-serif font-light text-white leading-[1.05] transition-all duration-[1400ms] ease-out"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
            letterSpacing: "0.04em",
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? "translateY(0)" : "translateY(22px)",
          }}
        >
          Naghshineh
          <br />
          <span className="text-white/80">Collection</span>
        </h1>

        {/* Gold divider */}
        <div
          className="mt-6 mb-6 h-px bg-gradient-to-r from-[oklch(0.72_0.06_80/0.8)] via-[oklch(0.72_0.06_80/0.4)] to-transparent transition-all duration-[1200ms] ease-out"
          style={{
            width: stage >= 3 ? "6rem" : "0rem",
            opacity: stage >= 3 ? 1 : 0,
          }}
        />

        {/* Persian tagline */}
        <p
          className="font-sans font-light text-white/60 transition-all duration-[1400ms] ease-out"
          style={{
            fontSize: "clamp(0.8rem, 1.6vw, 1.05rem)",
            letterSpacing: "0.08em",
            opacity: stage >= 4 ? 1 : 0,
            transform: stage >= 4 ? "translateY(0)" : "translateY(14px)",
          }}
        >
          مشاوره و انتخاب املاک لوکس و خاص
        </p>

        {/* Estates label */}
        <p
          className="mt-1 font-sans font-light text-white/35 transition-all duration-[1400ms] ease-out"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            opacity: stage >= 4 ? 1 : 0,
            transform: stage >= 4 ? "translateY(0)" : "translateY(14px)",
            transitionDelay: "120ms",
          }}
        >
          Estates Division
        </p>
      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-[1200ms] ease-out"
        style={{
          opacity: stage >= 5 ? 1 : 0,
          transform: stage >= 5 ? "translateY(0)" : "translateY(10px)",
        }}
      >
        <span
          className="text-white/40"
          style={{ fontSize: "0.6rem", letterSpacing: "0.28em" }}
        >
          SCROLL
        </span>
        <div className="h-10 w-px overflow-hidden bg-white/15">
          <div
            className="h-full w-full bg-white/50"
            style={{
              animation: stage >= 5 ? "scrollLine 2s ease-in-out infinite" : "none",
            }}
          />
        </div>
      </div>
    </section>
  )
}
