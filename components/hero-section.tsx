"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const [stage, setStage] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Staggered cinematic reveal
    const t1 = setTimeout(() => setStage(1), 300)   // image fade
    const t2 = setTimeout(() => setStage(2), 1200)  // brand name
    const t3 = setTimeout(() => setStage(3), 2000)  // subheadline
    const t4 = setTimeout(() => setStage(4), 2600)  // buttons
    const t5 = setTimeout(() => setStage(5), 3200)  // stats + scroll
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout)
  }, [])

  // Parallax mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen md:h-screen h-[92vh] md:h-[100vh] min-h-[700px] w-full overflow-hidden bg-[#0a0a0a]"
    >

      {/* ── Grain texture overlay ───────────────────────── */}
      <div 
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Background image with parallax ───────────────── */}
      <div
        className="absolute inset-0 transition-all duration-[2500ms] ease-out"
        style={{ 
          opacity: stage >= 1 ? 1 : 0,
          transform: `scale(1.08) translate(${(mousePos.x - 0.5) * -12}px, ${(mousePos.y - 0.5) * -12}px)`,
        }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury Estate Architecture"
          fill
          className="object-cover object-center"
          style={{
            filter: "brightness(0.55) contrast(1.05) saturate(0.9)",
          }}
          priority
        />
      </div>

      {/* ── Cinematic overlays ───────────────────────────── */}
      {/* Deep vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      
      {/* Atmospheric fog — bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      
      {/* Subtle warm bloom */}
      <div 
        className="absolute bottom-20 right-20 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ 
          background: "radial-gradient(circle, oklch(0.72 0.06 80 / 0.4), transparent 70%)",
          transform: `translate(${(mousePos.x - 0.5) * 30}px, ${(mousePos.y - 0.5) * 30}px)`,
          transition: "transform 0.8s ease-out",
        }}
      />
      
      {/* Cool ambient light — top left */}
      <div 
        className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ 
          background: "radial-gradient(circle, oklch(0.65 0.03 240 / 0.5), transparent 70%)",
          transform: `translate(${(mousePos.x - 0.5) * -20}px, ${(mousePos.y - 0.5) * -20}px)`,
          transition: "transform 0.8s ease-out",
        }}
      />

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-12 md:px-20 lg:px-28">
        <div className="max-w-4xl">

          {/* Brand wordmark */}
          <div
            className="transition-all duration-[1800ms] ease-out"
            style={{
              opacity: stage >= 2 ? 1 : 0,
              transform: stage >= 2 ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <p
              className="mb-6 font-sans font-light text-white/30"
              style={{ fontSize: "0.65rem", letterSpacing: "0.5em", textTransform: "uppercase" }}
            >
              Exclusive Properties
            </p>
            
            <h1 className="font-serif font-light text-white leading-[1.0]">
              <span 
                className="block"
                style={{ 
                  fontSize: "clamp(2.2rem, 5.5vw, 5rem)", 
                  letterSpacing: "0.18em",
                }}
              >
                NAGHSHINEH
              </span>
              <span 
                className="block text-white/50 mt-2"
                style={{ 
                  fontSize: "clamp(1rem, 2.5vw, 2.2rem)", 
                  letterSpacing: "0.35em",
                }}
              >
                COLLECTION
              </span>
            </h1>

            {/* Thin gold divider */}
            <div 
              className="mt-8 h-px bg-gradient-to-r from-[oklch(0.72_0.06_80/0.7)] to-transparent transition-all duration-[1400ms] ease-out"
              style={{ 
                width: stage >= 2 ? "80px" : "0px",
                transitionDelay: "400ms",
              }}
            />

            {/* Estates Division */}
            <p
              className="mt-6 font-sans font-light text-white/35"
              style={{ fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase" }}
            >
              Estates Division
            </p>
          </div>

          {/* Subheadline */}
          <p
            className="mt-10 max-w-md font-sans font-light text-white/50 leading-relaxed transition-all duration-[1600ms] ease-out"
            style={{
              fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
              letterSpacing: "0.04em",
              opacity: stage >= 3 ? 1 : 0,
              transform: stage >= 3 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            Curated luxury estates across Iran and beyond.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-12 flex flex-wrap items-center gap-5 transition-all duration-[1600ms] ease-out"
            style={{
              opacity: stage >= 4 ? 1 : 0,
              transform: stage >= 4 ? "translateY(0)" : "translateY(25px)",
            }}
          >
            {/* Primary button */}
            <a
              href="#properties"
              className="group relative overflow-hidden border border-white/20 bg-white/[0.03] px-8 py-4 backdrop-blur-sm transition-all duration-500 hover:border-[oklch(0.72_0.06_80/0.5)] hover:bg-white/[0.06]"
            >
              <span 
                className="relative z-10 font-sans font-light text-white/80 transition-colors duration-300 group-hover:text-white"
                style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
              >
                Explore Estates
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            {/* Secondary button */}
            <a
              href="#contact"
              className="group px-2 py-4 transition-all duration-300"
            >
              <span 
                className="font-sans font-light text-white/40 transition-colors duration-300 group-hover:text-white/70"
                style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                Private Consultation
              </span>
              <span className="ml-3 inline-block text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/50">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Floating statistics — bottom right ──────────── */}
      <div
        className="absolute bottom-28 right-8 z-10 hidden flex-col gap-8 md:right-20 lg:flex transition-all duration-[1600ms] ease-out"
        style={{
          opacity: stage >= 5 ? 1 : 0,
          transform: stage >= 5 ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {[
          { value: "150+", label: "Exclusive Listings" },
          { value: "$2.4B", label: "Portfolio Value" },
          { value: "12", label: "Countries" },
        ].map((stat, i) => (
          <div 
            key={stat.label}
            className="border-l border-white/10 pl-5 transition-all duration-300 hover:border-[oklch(0.72_0.06_80/0.4)]"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p 
              className="font-serif font-light text-white/70"
              style={{ fontSize: "1.6rem", letterSpacing: "0.05em" }}
            >
              {stat.value}
            </p>
            <p 
              className="mt-1 font-sans font-light text-white/30"
              style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-[1400ms] ease-out"
        style={{
          opacity: stage >= 5 ? 1 : 0,
          transform: stage >= 5 ? "translateY(0)" : "translateY(15px)",
        }}
      >
        <span
          className="font-sans text-white/25"
          style={{ fontSize: "0.5rem", letterSpacing: "0.35em", textTransform: "uppercase" }}
        >
          Discover
        </span>
        <div className="h-12 w-px overflow-hidden bg-white/10">
          <div
            className="h-full w-full bg-gradient-to-b from-[oklch(0.72_0.06_80/0.6)] to-white/20"
            style={{
              animation: stage >= 5 ? "scrollLine 2.5s ease-in-out infinite" : "none",
            }}
          />
        </div>
      </div>

      {/* ── Bottom edge line ────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
