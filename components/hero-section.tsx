"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 200)   // image
    const t2 = setTimeout(() => setStage(2), 900)   // headline
    const t3 = setTimeout(() => setStage(3), 1700)  // sub + buttons
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [])

  return (
    <section className="relative h-[92vh] md:h-screen min-h-[620px] w-full overflow-hidden bg-[#0a0a0a]">

      {/* ── Background ───────────────────────────────────── */}
      <div
        className="absolute inset-0 transition-opacity duration-[2800ms] ease-out"
        style={{ opacity: stage >= 1 ? 1 : 0 }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Naghshineh Collection — Luxury Estate"
          fill
          className="object-cover object-center"
          style={{ filter: "brightness(0.42) saturate(0.7) contrast(1.06)" }}
          priority
        />
      </div>

      {/* ── Single clean overlay ─────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/75" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* ── Cinematic light reflection ───────────────────── */}
      <div
        aria-hidden="true"
        className="hero-light-reflection pointer-events-none absolute inset-y-0 left-0 w-[40%]"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgba(255,251,240,0.028) 40%, rgba(255,251,240,0.05) 50%, rgba(255,251,240,0.028) 60%, transparent 100%)",
          filter: "blur(28px)",
        }}
      />

      {/* ── Content — centered ───────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">

        {/* Stage 2 — Headline block */}
        <div
          className="transition-all duration-[1800ms] ease-out"
          style={{
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? "translateY(0)" : "translateY(32px)",
          }}
        >
          {/* Main title */}
          <h1
            className="font-serif font-light text-white leading-[1.1] uppercase"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.6rem)", letterSpacing: "0.18em" }}
          >
            Naghshineh Collection
          </h1>

          {/* Gold rule */}
          <div className="mx-auto mt-8 mb-8 h-px w-16 bg-gradient-to-r from-transparent via-[oklch(0.72_0.06_80/0.7)] to-transparent" />

          {/* Subline */}
          <p
            className="font-sans font-light text-white/45 uppercase"
            style={{ fontSize: "0.65rem", letterSpacing: "0.48em" }}
          >
            Estates&nbsp;&nbsp;Division
          </p>
        </div>

        {/* Stage 3 — Buttons */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-[1800ms] ease-out"
          style={{
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {/* Primary */}
          <a
            href="#properties"
            className="group relative overflow-hidden border border-white/18 px-10 py-4 backdrop-blur-sm transition-all duration-500 hover:border-white/35 hover:bg-white/5"
          >
            <span
              className="relative z-10 font-sans font-light text-white/75 transition-colors duration-500 group-hover:text-white"
              style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase" }}
            >
              Explore Estates
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/6 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          {/* Secondary */}
          <a
            href="#contact"
            className="group flex items-center gap-4 transition-all duration-500"
          >
            <span
              className="font-sans font-light text-white/35 uppercase transition-colors duration-500 group-hover:text-white/65"
              style={{ fontSize: "0.65rem", letterSpacing: "0.28em" }}
            >
              Private Consultation
            </span>
            <span className="text-white/20 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white/50">
              →
            </span>
          </a>
        </div>

      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-[1600ms] ease-out"
        style={{ opacity: stage >= 3 ? 0.5 : 0 }}
      >
        <div className="h-10 w-px overflow-hidden bg-white/10">
          <div
            className="h-full w-full bg-gradient-to-b from-white/60 to-transparent"
            style={{ animation: "scrollLine 2.5s ease-in-out infinite" }}
          />
        </div>
      </div>

    </section>
  )
}
