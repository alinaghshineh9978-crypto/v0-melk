"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    index: "01",
    name: "Naghshineh Residences",
    location: "Tehran, Elahiyeh",
    status: "Under Construction",
    statusActive: true,
    description:
      "A collection of 12 bespoke residences defined by raw concrete, warm stone, and uninterrupted city panoramas.",
    image: "/images/project-1.jpg",
    year: "2025",
  },
  {
    id: 2,
    index: "02",
    name: "Pardis Tower",
    location: "Tehran, Zafaraniyeh",
    status: "Available",
    statusActive: false,
    description:
      "An 18-storey landmark designed around light, verticality, and the quiet luxury of considered space.",
    image: "/images/project-2.jpg",
    year: "2024",
  },
  {
    id: 3,
    index: "03",
    name: "Villa Saman",
    location: "Isfahan, Private Estate",
    status: "Sold Out",
    statusActive: false,
    description:
      "A singular estate on one hectare. Travertine, water, and silence composed into one residence.",
    image: "/images/project-3.jpg",
    year: "2023",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  // Alternate layout: odd cards have image right, even have image left
  const imageRight = index % 2 === 0

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 1000ms ease-out ${index * 150}ms, transform 1000ms ease-out ${index * 150}ms`,
      }}
    >
      {/* Thin top rule */}
      <div
        className="h-px bg-white/8 mb-0 overflow-hidden"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />

      <div
        className={`group flex flex-col md:flex-row ${imageRight ? "md:flex-row-reverse" : ""} min-h-[480px] lg:min-h-[560px]`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Image panel — 55% */}
        <div className="relative w-full md:w-[55%] overflow-hidden bg-[#0d0d0d]" style={{ minHeight: "300px" }}>
          <div
            ref={imageRef}
            className="absolute inset-0"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 1400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              style={{
                filter: "brightness(0.62) contrast(1.06) saturate(0.7)",
              }}
            />
          </div>

          {/* Subtle mouse-follow glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-700"
            style={{
              opacity: hovered ? 1 : 0,
              background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,248,220,0.06) 0%, transparent 60%)`,
            }}
          />

          {/* Edge gradient toward text panel */}
          <div
            className={`absolute inset-y-0 w-1/3 pointer-events-none ${
              imageRight ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l"
            } from-[#080808] to-transparent`}
          />

          {/* Project index — watermark */}
          <span
            className="absolute bottom-6 font-serif text-white/[0.06] select-none pointer-events-none leading-none"
            style={{
              fontSize: "clamp(4rem, 10vw, 9rem)",
              letterSpacing: "-0.02em",
              left: imageRight ? "auto" : "1.5rem",
              right: imageRight ? "1.5rem" : "auto",
              bottom: "0.5rem",
              lineHeight: 1,
            }}
          >
            {project.index}
          </span>
        </div>

        {/* Text panel — 45% */}
        <div
          className={`relative flex flex-col justify-center bg-[#080808] w-full md:w-[45%] px-10 py-14 md:px-14 lg:px-20`}
        >
          {/* Status pill */}
          <div className="mb-8 flex items-center gap-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: project.statusActive
                  ? "oklch(0.72 0.06 80)"
                  : "rgba(255,255,255,0.25)",
              }}
            />
            <span
              className="font-sans font-light uppercase"
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.38em",
                color: project.statusActive
                  ? "oklch(0.72 0.06 80 / 0.9)"
                  : "rgba(255,255,255,0.3)",
              }}
            >
              {project.status}
            </span>
            <span
              className="ml-auto font-sans font-light text-white/15"
              style={{ fontSize: "0.58rem", letterSpacing: "0.15em" }}
            >
              {project.year}
            </span>
          </div>

          {/* Project name */}
          <h3
            className="font-serif font-light text-white leading-[1.05]"
            style={{
              fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)",
              letterSpacing: "0.04em",
            }}
          >
            {project.name}
          </h3>

          {/* Location */}
          <p
            className="mt-3 font-sans font-light text-white/30 uppercase"
            style={{ fontSize: "0.62rem", letterSpacing: "0.28em" }}
          >
            {project.location}
          </p>

          {/* Thin divider */}
          <div
            className="my-8 h-px"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,0.1), transparent)",
              width: hovered ? "80px" : "48px",
              transition: "width 600ms ease-out",
            }}
          />

          {/* Description */}
          <p
            className="font-sans font-light text-white/45 leading-relaxed"
            style={{ fontSize: "0.82rem", letterSpacing: "0.02em", maxWidth: "26rem" }}
          >
            {project.description}
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#contact"
              className="group/cta inline-flex items-center gap-4 transition-all duration-300"
            >
              <span
                className="font-sans font-light text-white/35 uppercase transition-colors duration-300 group-hover/cta:text-white/70"
                style={{ fontSize: "0.62rem", letterSpacing: "0.3em" }}
              >
                View Project
              </span>
              <span
                className="inline-block text-white/20 transition-all duration-500 group-hover/cta:translate-x-2 group-hover/cta:text-white/55"
              >
                →
              </span>
            </a>
          </div>

          {/* Corner accent */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "2rem",
              right: imageRight ? "auto" : "2rem",
              left: imageRight ? "2rem" : "auto",
              width: hovered ? "32px" : "20px",
              height: hovered ? "32px" : "20px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              borderRight: imageRight ? "none" : "1px solid rgba(255,255,255,0.1)",
              borderLeft: imageRight ? "1px solid rgba(255,255,255,0.1)" : "none",
              transition: "width 500ms ease-out, height 500ms ease-out",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.2 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#080808]">

      {/* Section header */}
      <div
        ref={headerRef}
        className="px-8 sm:px-14 md:px-24 lg:px-32 pt-28 pb-20"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p
              className="font-sans font-light text-white/25 uppercase mb-5"
              style={{ fontSize: "0.58rem", letterSpacing: "0.42em" }}
            >
              Signature Developments
            </p>
            <h2
              className="font-serif font-light text-white leading-none"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.4rem)", letterSpacing: "0.06em" }}
            >
              Selected Projects
            </h2>
          </div>

          <p
            className="font-sans font-light text-white/30 leading-relaxed md:max-w-xs"
            style={{ fontSize: "0.78rem", letterSpacing: "0.03em" }}
          >
            Each development is a considered act of architecture — built for those who understand the difference.
          </p>
        </div>
      </div>

      {/* Project cards */}
      <div className="divide-y-0">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Section footer */}
      <div
        className="flex items-center justify-between px-8 sm:px-14 md:px-24 lg:px-32 py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span
          className="font-sans font-light text-white/15 uppercase"
          style={{ fontSize: "0.55rem", letterSpacing: "0.4em" }}
        >
          Naghshineh Collection · Estates Division
        </span>
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 transition-all duration-300"
        >
          <span
            className="font-sans font-light text-white/25 uppercase transition-colors duration-300 group-hover:text-white/55"
            style={{ fontSize: "0.58rem", letterSpacing: "0.3em" }}
          >
            All Projects
          </span>
          <span className="text-white/15 transition-all duration-400 group-hover:translate-x-1.5 group-hover:text-white/40">→</span>
        </a>
      </div>

    </section>
  )
}
