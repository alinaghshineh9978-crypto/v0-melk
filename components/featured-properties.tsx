"use client"

import { useState, useRef } from "react"
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
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Touch gesture state
  const touchStartXRef = useRef(0)
  const touchStartYRef = useRef(0)
  const touchStartTimeRef = useRef(0)
  const touchCurrentXRef = useRef(0)
  const axisLockedRef = useRef<'none' | 'horizontal' | 'vertical'>('none')
  const isDraggingRef = useRef(false)
  const [dragOffset, setDragOffset] = useState(0)

  const goTo = (index: number) => {
    if (index < 0 || index >= properties.length) return
    setCurrentIndex(index)
  }

  const nextSlide = () => goTo(currentIndex + 1)
  const prevSlide = () => goTo(currentIndex - 1)

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStartXRef.current = touch.clientX
    touchStartYRef.current = touch.clientY
    touchCurrentXRef.current = touch.clientX
    touchStartTimeRef.current = Date.now()
    axisLockedRef.current = 'none'
    isDraggingRef.current = false
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!e.touches?.[0]) return
    
    const touch = e.touches[0]
    const dx = touch.clientX - touchStartXRef.current
    const dy = touch.clientY - touchStartYRef.current
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)

    // Lock axis after 10px movement (prevents accidental triggers)
    if (axisLockedRef.current === 'none' && (absDx > 10 || absDy > 10)) {
      // Require 1.5:1 ratio for horizontal lock (more reliable detection)
      if (absDx > absDy * 1.5) {
        axisLockedRef.current = 'horizontal'
        isDraggingRef.current = true
        // Only preventDefault for horizontal swipes
        if (e.cancelable) {
          e.preventDefault()
        }
      } else {
        axisLockedRef.current = 'vertical'
      }
    }

    // Only handle horizontal swipes
    if (axisLockedRef.current === 'horizontal') {
      if (e.cancelable) {
        e.preventDefault()
      }
      touchCurrentXRef.current = touch.clientX
      
      // Calculate drag offset as percentage of viewport for smooth visual feedback
      const containerWidth = (e.currentTarget as HTMLElement)?.offsetWidth || window.innerWidth
      const dragPercent = (dx / containerWidth) * 100
      
      // Add resistance at edges
      const isAtStart = currentIndex === 0 && dx > 0
      const isAtEnd = currentIndex === properties.length - 1 && dx < 0
      const resistance = (isAtStart || isAtEnd) ? 0.25 : 1
      
      setDragOffset(dragPercent * resistance)
    }
  }

  const handleTouchEnd = () => {
    if (axisLockedRef.current !== 'horizontal' || !isDraggingRef.current) {
      setDragOffset(0)
      axisLockedRef.current = 'none'
      isDraggingRef.current = false
      return
    }

    const dx = touchCurrentXRef.current - touchStartXRef.current
    const elapsed = Date.now() - touchStartTimeRef.current
    const velocity = elapsed > 0 ? Math.abs(dx) / elapsed : 0 // px per ms, guard against division

    // Thresholds for swipe detection
    const minDistance = 50 // minimum pixels to trigger swipe
    const velocityThreshold = 0.3 // fast swipe threshold (px/ms)
    const shortSwipeDistance = 25 // shorter distance allowed for fast swipes

    // Determine if swipe should trigger
    const isFastSwipe = velocity > velocityThreshold && Math.abs(dx) > shortSwipeDistance
    const isLongSwipe = Math.abs(dx) > minDistance

    if (isFastSwipe || isLongSwipe) {
      if (dx < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    // Reset drag state
    setDragOffset(0)
    axisLockedRef.current = 'none'
    isDraggingRef.current = false
  }

  const handleTouchCancel = () => {
    setDragOffset(0)
    axisLockedRef.current = 'none'
    isDraggingRef.current = false
  }

  return (
    <section id="properties" className="relative bg-background overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient accent overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/3 rounded-full blur-2xl" />
        
        {/* Minimal geometric lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent/10 to-transparent" />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
      {/* ── MOBILE: Full-width Carousel with Arrows ────────────────────────────── */}
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

        {/* Carousel container */}
        <div className="relative">
          {/* Viewport — clips the track, no scroll */}
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            {/* Track — moves via transform, includes drag offset for live feedback */}
            <div
              className={`flex will-change-transform ${
                isDraggingRef.current ? '' : 'transition-transform duration-400 ease-out'
              }`}
              style={{ 
                transform: `translateX(calc(${currentIndex * 100}% + ${dragOffset}%))`,
                transitionTimingFunction: dragOffset === 0 ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
              }}
            >
              {properties.map((property, index) => (
                <div key={property.id} className="w-full flex-shrink-0 px-5">
                  <Link href={`/property/${property.id}`}>
                    <article className="group relative cursor-pointer">
                    {/* Cover image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <Image
                        src={property.image}
                        alt={`${property.type} در ${property.location}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-active:scale-[1.02]"
                        sizes="100vw"
                        priority={index < 2}
                      />
                      {/* Gradient — subtle bottom overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Gold highlight — top edge glow */}
                      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[oklch(0.72_0.06_80/0.18)] to-transparent" />

                      {/* Type tag — top-left */}
                      <div className="absolute left-3 top-3 border border-white/30 bg-black/20 px-2.5 py-1 backdrop-blur-sm">
                        <span className="text-[10px] tracking-[0.25em] text-white/90">
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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between px-5 pt-6">
            {/* Arrow Right (Previous - RTL) */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="flex h-10 w-10 items-center justify-center border border-accent/30 text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {properties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-1.5 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 bg-accent' 
                      : 'w-1.5 bg-accent/30 hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Left (Next - RTL) */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === properties.length - 1}
              className="flex h-10 w-10 items-center justify-center border border-accent/30 text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end gap-3 border-t border-border px-5 py-8 mt-6">
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

      {/* ── DESKTOP: Horizontal Scroll ──────────────────────── */}
      <div className="hidden md:block">
        <div className="px-6 py-24 lg:py-32 xl:py-40">
          <div className="mx-auto max-w-full">
            {/* Section Header */}
            <div className="mb-20 text-center md:mb-28">
              <span className="mb-4 inline-block text-xs tracking-[0.2em] text-muted-foreground">
                مجموعه منتخب
              </span>
              <h2 className="text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
                املاک ویژه
              </h2>
              <div className="mx-auto mt-8 h-px w-16 bg-accent" />
            </div>

            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto pb-8">
              <div className="flex gap-10 lg:gap-16 px-2 pb-4">
                {properties.map((property, index) => (
                  <Link href={`/property/${property.id}`} key={property.id}>
                    <article
                      className="group relative cursor-pointer flex-shrink-0 w-[340px] lg:w-[400px] overflow-hidden transition-all duration-500"
                      style={{
                        boxShadow: hoveredId === property.id
                          ? '0 0 40px 0 oklch(0.72 0.06 80 / 0.18), 0 0 0 1px oklch(0.72 0.06 80 / 0.35)'
                          : '0 0 0 1px oklch(0.72 0.06 80 / 0.12)'
                      }}
                      onMouseEnter={() => setHoveredId(property.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-muted p-2">
                        {/* Inner border frame */}
                        <div className="absolute inset-2 z-10 border border-accent/20 pointer-events-none transition-colors duration-500 group-hover:border-accent/50" />

                        <Image
                          src={property.image}
                          alt={`${property.type} در ${property.location}`}
                          fill
                          className={`object-cover transition-transform duration-700 ease-out p-2 ${
                            hoveredId === property.id ? "scale-105" : "scale-100"
                          }`}
                          sizes="400px"
                        />

                        {/* Gold top highlight */}
                        <div className="absolute inset-x-2 top-2 z-10 h-24 bg-gradient-to-b from-[oklch(0.72_0.06_80/0.20)] to-transparent pointer-events-none" />

                        {/* Hover overlay */}
                        <div
                          className={`absolute inset-2 z-10 transition-all duration-500 ${
                            hoveredId === property.id ? "bg-foreground/35" : "bg-foreground/0"
                          }`}
                        />

                        {/* Hover CTA */}
                        <div
                          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ${
                            hoveredId === property.id ? "opacity-100" : "pointer-events-none opacity-0"
                          }`}
                        >
                          <span className="border border-accent/80 bg-black/30 px-6 py-2 text-xs tracking-[0.2em] text-white backdrop-blur-sm">
                            مشاهده جزئیات
                          </span>
                        </div>
                      </div>

                      {/* Card info */}
                      <div className="px-4 py-4 space-y-3 bg-background">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {property.area} متر
                          </span>
                          <span className="text-[10px] tracking-[0.2em] text-accent/80 border border-accent/20 px-2 py-0.5">
                            {property.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 border-t border-accent/10 pt-3">
                          <svg className="h-4 w-4 flex-shrink-0 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <h3 className="text-sm font-light text-foreground">
                            {property.location}
                          </h3>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
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
      </div>
      </div>

    </section>
  )
}
