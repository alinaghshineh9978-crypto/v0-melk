"use client"

import { useEffect, useRef, useState } from "react"

const pillars = [
  {
    index: "01",
    title: "Curated Living",
    body:
      "Every residence we present is chosen for its architecture, its silence, and the quality of life it offers. We do not list properties. We curate environments.",
  },
  {
    index: "02",
    title: "Timeless Architecture",
    body:
      "We believe a home should outlast its moment. Our projects are built with materials that age gracefully, spaces that hold meaning, and details that reward attention.",
  },
  {
    index: "03",
    title: "Investment Integrity",
    body:
      "Every asset in the Naghshineh portfolio is selected for long-term capital preservation — in locations with enduring demand, managed with institutional discipline.",
  },
  {
    index: "04",
    title: "Private Client Experience",
    body:
      "Our clients do not browse listings. They receive a private introduction to a property that has already been filtered, assessed, and aligned with their exact requirements.",
  },
]

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

export function PhilosophySection() {
  const { ref: headRef, visible: headVisible } = useFadeIn(0.2)
  const pillarRefs = pillars.map(() => useFadeIn(0.1))
  const { ref: statementRef, visible: statementVisible } = useFadeIn(0.2)

  return (
    <section className="bg-[#080808] px-6 py-32 sm:px-12 md:px-20 lg:px-32">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div
          ref={headRef}
          className="mb-24 flex flex-col gap-6 transition-all duration-[1200ms] ease-out md:flex-row md:items-end md:justify-between"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(28px)",
          }}
        >
          <div>
            <p
              className="mb-5 font-sans font-light text-white/25 uppercase"
              style={{ fontSize: "0.6rem", letterSpacing: "0.45em" }}
            >
              Our Philosophy
            </p>
            <h2
              className="font-serif font-light text-white leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "0.04em" }}
            >
              The Standard
              <br />
              <span className="text-white/35">We Hold Ourselves To</span>
            </h2>
          </div>

          {/* Animated rule */}
          <div className="hidden md:block">
            <div
              className="h-px bg-gradient-to-l from-transparent to-white/20 transition-all duration-[1600ms] ease-out"
              style={{ width: headVisible ? "180px" : "0px", transitionDelay: "400ms" }}
            />
          </div>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {pillars.map((pillar, i) => {
            const { ref, visible } = pillarRefs[i]
            const isRight = i % 2 === 1
            return (
              <div
                key={pillar.index}
                ref={ref}
                className={`group relative border-t border-white/8 py-12 transition-all duration-[1000ms] ease-out ${
                  isRight ? "md:border-l md:pl-16" : "md:pr-16"
                } ${i >= 2 ? "border-b" : ""}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(22px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* Expanding line on hover */}
                <div
                  className="absolute left-0 top-0 h-px bg-gradient-to-r from-[oklch(0.72_0.06_80/0.6)] to-transparent transition-all duration-500 ease-out"
                  style={{ width: "0%", }}
                >
                  <style>{`
                    .group:hover > div:first-child { width: 60% !important; }
                  `}</style>
                </div>

                {/* Index */}
                <p
                  className="mb-6 font-sans font-light text-white/15 transition-colors duration-500 group-hover:text-[oklch(0.72_0.06_80/0.5)]"
                  style={{ fontSize: "0.58rem", letterSpacing: "0.4em" }}
                >
                  {pillar.index}
                </p>

                {/* Title */}
                <h3
                  className="mb-5 font-serif font-light text-white/80 leading-tight transition-colors duration-500 group-hover:text-white"
                  style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)", letterSpacing: "0.04em" }}
                >
                  {pillar.title}
                </h3>

                {/* Body */}
                <p
                  className="font-sans font-light text-white/35 leading-relaxed transition-colors duration-500 group-hover:text-white/50"
                  style={{ fontSize: "0.85rem", letterSpacing: "0.02em", maxWidth: "38ch" }}
                >
                  {pillar.body}
                </p>

                {/* Arrow indicator */}
                <div className="mt-8 flex items-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="h-px w-6 bg-[oklch(0.72_0.06_80/0.6)] transition-all duration-500 group-hover:w-10" />
                  <span
                    className="font-sans font-light text-[oklch(0.72_0.06_80/0.7)] uppercase"
                    style={{ fontSize: "0.58rem", letterSpacing: "0.35em" }}
                  >
                    Learn More
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Large editorial statement */}
        <div
          ref={statementRef}
          className="mt-32 border-t border-white/8 pt-20 transition-all duration-[1400ms] ease-out"
          style={{
            opacity: statementVisible ? 1 : 0,
            transform: statementVisible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <p
            className="mx-auto max-w-4xl text-center font-serif font-light text-white/20 leading-[1.4]"
            style={{ fontSize: "clamp(1.3rem, 3vw, 2.4rem)", letterSpacing: "0.03em" }}
          >
            &ldquo;We do not sell square metres.
            <br />
            <span className="text-white/45">
              We offer a considered way of living.&rdquo;
            </span>
          </p>
          <p
            className="mx-auto mt-8 block text-center font-sans font-light text-white/20 uppercase"
            style={{ fontSize: "0.58rem", letterSpacing: "0.45em" }}
          >
            Naghshineh Collection — Estates Division
          </p>
        </div>

      </div>
    </section>
  )
}
