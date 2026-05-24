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

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-24 sm:px-14 md:px-24 lg:px-32">
        <div className="max-w-2xl">

          {/* Headline */}
          <div
            className="transition-all duration-[1800ms] ease-out"
            style={{
              opacity: stage >= 2 ? 1 : 0,
              transform: stage >= 2 ? "translateY(0)" : "translateY(32px)",
            }}
          >
            <h1 className="font-serif font-light leading-none text-white">
              <span
                className="block"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.2rem)", letterSpacing: "0.15em" }}
              >
                NAGHSHINEH
              </span>
              <span
                className="block mt-2 text-white/45"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2rem)", letterSpacing: "0.38em" }}
              >
                COLLECTION
              </span>
            </h1>

            {/* Divider */}
            <div
              className="mt-8 h-px bg-gradient-to-r from-[oklch(0.72_0.06_80/0.65)] to-transparent transition-all duration-[1600ms] ease-out"
              style={{
                width: stage >= 2 ? "60px" : "0px",
                transitionDelay: "300ms",
              }}
            />

            {/* Estates Division */}
            <p
              className="mt-5 font-sans font-light text-white/30"
              style={{ fontSize: "0.58rem", letterSpacing: "0.45em", textTransform: "uppercase" }}
            >
              Estates&nbsp;&nbsp;Division
            </p>
          </div>

          {/* Subline + Buttons */}
          <div
            className="transition-all duration-[1800ms] ease-out"
            style={{
              opacity: stage >= 3 ? 1 : 0,
              transform: stage >= 3 ? "translateY(0)" : "translateY(24px)",
            }}
          >
            {/* Description */}
            <p
              className="mt-10 font-sans font-light text-white/40 leading-relaxed"
              style={{ fontSize: "clamp(0.82rem, 1.2vw, 0.95rem)", letterSpacing: "0.05em", maxWidth: "30rem" }}
            >
              Curated luxury estates across Iran and beyond.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap items-center gap-8">

              {/* Primary */}
              <a
                href="#properties"
                className="group relative overflow-hidden border border-white/18 px-9 py-4 backdrop-blur-sm transition-all duration-500 hover:border-white/35 hover:bg-white/5"
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
                className="group flex items-center gap-4 transition-all duration-400"
              >
                <span
                  className="font-sans font-light text-white/35 transition-colors duration-400 group-hover:text-white/65"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase" }}
                >
                  Private Consultation
                </span>
                <span className="text-white/20 transition-all duration-400 group-hover:translate-x-1.5 group-hover:text-white/50">
                  →
                </span>
              </a>

            </div>
          </div>
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
