"use client"

import { useEffect, useRef, useState } from "react"

const categories = [
  {
    id: 1,
    title: "Rent & Lease",
    titleFa: "اجاره",
    subtitle: "فراتر از یک خانه؛ تجربه‌ای از زندگی ممتاز",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Buy & Sell",
    titleFa: "خرید و فروش",
    subtitle: "Signature properties across Iran",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Construction Partnership",
    titleFa: "مشارکت در ساخت",
    subtitle: "Exclusive development opportunities",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="6" x2="15" y2="6" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="9" y1="14" x2="15" y2="14" />
        <line x1="9" y1="18" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Real Estate Investment",
    titleFa: "سرمایه‌گذاری",
    subtitle: "Strategic luxury asset investments",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
]

export function CategorySection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"))
            if (id) {
              setTimeout(() => {
                setVisibleCards((prev) => new Set([...prev, id]))
              }, (id - 1) * 150)
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll("[data-category-card]")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent, cardId: number) => {
    if (hoveredId !== cardId) return
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-32 md:py-40"
    >
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-20">
        <div className="text-center">
          <p
            className="font-sans font-light text-white/30 uppercase mb-4"
            style={{ fontSize: "0.6rem", letterSpacing: "0.4em" }}
          >
            Services
          </p>
          <h2
            className="font-serif font-light text-white/90"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.08em" }}
          >
            Our Expertise
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-[oklch(0.72_0.06_80/0.5)] to-transparent" />
        </div>
      </div>

      {/* Category grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              data-id={category.id}
              data-category-card
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              onMouseMove={(e) => handleMouseMove(e, category.id)}
              className="group relative overflow-hidden transition-all duration-700 ease-out cursor-pointer"
              style={{
                opacity: visibleCards.has(category.id) ? 1 : 0,
                transform: visibleCards.has(category.id)
                  ? "translateY(0)"
                  : "translateY(40px)",
              }}
            >
              {/* Card */}
              <div className="relative border border-white/8 bg-white/[0.02] backdrop-blur-sm p-10 md:p-14 transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.04]">
                
                {/* Glow effect on hover */}
                {hoveredId === category.id && (
                  <div
                    className="pointer-events-none absolute w-[300px] h-[300px] rounded-full transition-opacity duration-500"
                    style={{
                      left: mousePos.x - 150,
                      top: mousePos.y - 150,
                      background: "radial-gradient(circle, oklch(0.72 0.06 80 / 0.08), transparent 70%)",
                      filter: "blur(40px)",
                      opacity: 1,
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-white/25 mb-8 transition-all duration-500 group-hover:text-[oklch(0.72_0.06_80/0.6)] group-hover:scale-110">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif font-light text-white/85 mb-2 transition-colors duration-500 group-hover:text-white"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", letterSpacing: "0.04em" }}
                  >
                    {category.title}
                  </h3>

                  {/* Persian subtitle */}
                  <p
                    className="font-sans text-white/30 mb-4 transition-colors duration-500 group-hover:text-white/45"
                    style={{ fontSize: "0.85rem", letterSpacing: "0.02em" }}
                  >
                    {category.titleFa}
                  </p>

                  {/* English subtitle */}
                  <p
                    className="font-sans font-light text-white/35 leading-relaxed transition-colors duration-500 group-hover:text-white/50"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.06em", maxWidth: "280px" }}
                  >
                    {category.subtitle}
                  </p>

                  {/* CTA Arrow */}
                  <div className="mt-10 flex items-center gap-3">
                    <span
                      className="font-sans font-light text-white/25 uppercase transition-all duration-500 group-hover:text-white/60"
                      style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}
                    >
                      Explore
                    </span>
                    <span className="text-white/20 transition-all duration-500 group-hover:translate-x-3 group-hover:text-[oklch(0.72_0.06_80/0.7)]">
                      →
                    </span>
                  </div>
                </div>

                {/* Corner accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[oklch(0.72_0.06_80/0.5)] to-transparent transition-all duration-700 group-hover:w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand watermark */}
      <div className="mt-24 text-center">
        <p
          className="font-sans font-light text-white/15 uppercase"
          style={{ fontSize: "0.55rem", letterSpacing: "0.5em" }}
        >
          Naghshineh Collection&nbsp;&nbsp;·&nbsp;&nbsp;Estates Division
        </p>
      </div>
    </section>
  )
}
