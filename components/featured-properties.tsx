"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const properties = [
  {
    id: 1,
    image: "/images/property-1.jpg",
    type: "پنت‌هاوس",
    location: "تهران، نیاوران",
    area: "۴۵۰",
    caption: "بالاترین نقطه شهر",
  },
  {
    id: 2,
    image: "/images/property-2.jpg",
    type: "ویلا",
    location: "شمال، نوشهر",
    area: "۱۲۰۰",
    caption: "آرامش در دل طبیعت",
  },
  {
    id: 3,
    image: "/images/property-3.jpg",
    type: "آپارتمان",
    location: "تهران، الهیه",
    area: "۳۲۰",
    caption: "زندگی در قلب شهر",
  },
  {
    id: 4,
    image: "/images/property-4.jpg",
    type: "پنت‌هاوس",
    location: "تهران، فرمانیه",
    area: "۵۸۰",
    caption: "سبک زندگی خاص",
  },
  {
    id: 5,
    image: "/images/property-5.jpg",
    type: "ویلا",
    location: "کیش",
    area: "۸۵۰",
    caption: "رویای جزیره",
  },
  {
    id: 6,
    image: "/images/property-1.jpg",
    type: "آپارتمان",
    location: "تهران، زعفرانیه",
    area: "۲۸۰",
    caption: "ظرافت در هر جزئیات",
  },
]

export function FeaturedProperties() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="properties" className="bg-background">

      {/* ── MOBILE: Horizontal Scroll ────────────────────────────── */}
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

        <div className="overflow-x-auto">
          <div className="flex gap-5 px-5 pb-8">
            {properties.map((property, index) => (
              <Link href={`/property/${property.id}`} key={property.id}>
                <article className="group relative cursor-pointer flex-shrink-0 w-72">
                  {/* Cover image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={property.image}
                      alt={`${property.type} در ${property.location}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-active:scale-[1.02]"
                      sizes="288px"
                      priority={index < 2}
                    />
                    {/* Gradient — subtle bottom overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Type tag — top-right */}
                    <div className="absolute right-3 top-3 border border-white/30 px-2.5 py-1">
                      <span className="text-[10px] tracking-[0.25em] text-white/80">
                        {property.type}
                      </span>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                      <p className="mb-2 text-xs tracking-[0.2em] text-white/50">
                        {property.caption}
                      </p>
                      <div className="mb-3 flex items-center gap-1.5">
                        <svg className="h-4 w-4 flex-shrink-0 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="text-sm font-light text-white">
                          {property.location}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 border-t border-white/20 pt-3">
                        <span className="text-xs font-light text-white/60">
                          {property.area} متر
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                        <span className="text-xs tracking-[0.2em] font-semibold text-accent">
                          مشاهده
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end gap-3 border-t border-border px-5 pt-8">
          <a
            href="/properties"
            className="flex items-center gap-2 text-xs tracking-[0.15em] text-accent hover:text-accent/80 transition-colors"
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
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-10">
            {properties.map((property) => (
              <Link href={`/property/${property.id}`} key={property.id}>
                <article
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
                      <span className="text-xs text-muted-foreground">
                        {property.area} متر
                      </span>
                      <span className="text-xs tracking-[0.15em] text-muted-foreground">
                        {property.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <svg className="h-4 w-4 flex-shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h3 className="text-sm font-medium text-foreground">
                        {property.location}
                      </h3>
                    </div>
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
              </Link>
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
