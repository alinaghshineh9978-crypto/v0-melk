"use client"

import { useState } from "react"
import Image from "next/image"

const properties = [
  {
    id: 1,
    image: "/images/property-1.jpg",
    type: "پنت‌هاوس",
    location: "تهران، نیاوران",
    area: "۴۵۰",
    caption: "بالاترین نقطه شهر",
    issue: "۰۱",
  },
  {
    id: 2,
    image: "/images/property-2.jpg",
    type: "ویلا",
    location: "شمال، نوشهر",
    area: "۱۲۰۰",
    caption: "آرامش در دل طبیعت",
    issue: "۰۲",
  },
  {
    id: 3,
    image: "/images/property-3.jpg",
    type: "آپارتمان",
    location: "تهران، الهیه",
    area: "۳۲۰",
    caption: "زندگی در قلب شهر",
    issue: "۰۳",
  },
  {
    id: 4,
    image: "/images/property-4.jpg",
    type: "پنت‌هاوس",
    location: "تهران، فرمانیه",
    area: "۵۸۰",
    caption: "سبک زندگی خاص",
    issue: "۰۴",
  },
  {
    id: 5,
    image: "/images/property-5.jpg",
    type: "ویلا",
    location: "کیش",
    area: "۸۵۰",
    caption: "رویای جزیره",
    issue: "۰۵",
  },
  {
    id: 6,
    image: "/images/property-1.jpg",
    type: "آپارتمان",
    location: "تهران، زعفرانیه",
    area: "۲۸۰",
    caption: "ظرافت در هر جزئیات",
    issue: "۰۶",
  },
]

export function FeaturedProperties() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="properties" className="bg-background">

      {/* ── MOBILE: Magazine Spreads ────────────────────────────── */}
      <div className="md:hidden">
        {/* Mobile section label */}
        <div className="flex items-center justify-between px-5 pb-8 pt-16">
          <span className="text-xs tracking-[0.2em] text-muted-foreground">
            مجموعه منتخب
          </span>
          <span className="text-xs tracking-[0.15em] text-accent">
            نقشینه
          </span>
        </div>

        <div className="space-y-0">
          {properties.map((property, index) => (
            <article key={property.id} className="group relative cursor-pointer">
              {/* Full-bleed cover image */}
              <div className="relative h-[85svh] w-full overflow-hidden bg-muted">
                <Image
                  src={property.image}
                  alt={`${property.type} در ${property.location}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-active:scale-[1.02]"
                  sizes="100vw"
                  priority={index < 2}
                />
                {/* Gradient — bottom-heavy for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Issue number — ghost watermark top-right */}
                <div className="absolute right-5 top-6">
                  <span className="font-serif text-5xl font-light leading-none text-white/20">
                    {property.issue}
                  </span>
                </div>

                {/* Type tag — top-left */}
                <div className="absolute left-5 top-6 border border-white/30 px-2.5 py-1">
                  <span className="text-[10px] tracking-[0.25em] text-white/80">
                    {property.type}
                  </span>
                </div>

                {/* Editorial text block — bottom */}
                <div className="absolute bottom-0 right-0 w-full px-5 pb-8">
                  <p className="mb-3 text-xs tracking-[0.2em] text-white/50">
                    {property.caption}
                  </p>
                  <h3 className="mb-4 text-3xl font-light leading-tight text-white">
                    {property.location}
                  </h3>
                  <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                    <span className="text-sm font-light text-white/60">
                      {property.area} متر مربع
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                    <span className="text-xs tracking-[0.2em] text-accent">
                      مشاهده
                    </span>
                  </div>
                </div>
              </div>

              {index < properties.length - 1 && (
                <div className="h-px w-full bg-border" />
              )}
            </article>
          ))}
        </div>

        {/* Mobile — View All */}
        <div className="flex items-center justify-center py-14">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm tracking-[0.1em] text-foreground transition-colors active:text-accent"
          >
            <span>مشاهده تمام املاک</span>
            <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── DESKTOP: Minimal 3-column grid ──────────────────────── */}
      <div className="hidden px-6 py-24 md:block lg:py-32 xl:py-40">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center md:mb-24">
            <span className="mb-4 inline-block text-xs tracking-[0.2em] text-muted-foreground">
              مجموعه منتخب
            </span>
            <h2 className="text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
              املاک ویژه
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-accent" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
            {properties.map((property) => (
              <article
                key={property.id}
                className="group relative cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredId(property.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={property.image}
                    alt={`${property.type} در ${property.location}`}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out ${
                      hoveredId === property.id ? "scale-105" : "scale-100"
                    }`}
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      hoveredId === property.id ? "bg-foreground/40" : "bg-foreground/0"
                    }`}
                  />
                </div>

                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.15em] text-muted-foreground">
                      {property.type}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {property.area} متر
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground">
                    {property.location}
                  </h3>
                </div>

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredId === property.id ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <span className="border border-white/80 bg-transparent px-6 py-2 text-xs tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-foreground">
                    مشاهده جزئیات
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* View All */}
          <div className="mt-16 text-center md:mt-24">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-sm tracking-[0.1em] text-foreground transition-colors hover:text-accent"
            >
              <span>مشاهده تمام املاک</span>
              <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
