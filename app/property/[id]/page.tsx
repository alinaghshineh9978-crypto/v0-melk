"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ScheduleVisitModal } from "@/components/schedule-visit-modal"

const properties = [
  {
    id: 1,
    image: "/images/property-1.jpg",
    type: "پنت‌هاوس",
    location: "تهران، نیاوران",
    area: "۴۵۰",
    bedrooms: "۴",
    bathrooms: "۳",
    price: "۲۲ میلیارد",
    caption: "بالاترین نقطه شهر",
  },
  {
    id: 2,
    image: "/images/property-2.jpg",
    type: "ویلا",
    location: "شمال، نوشهر",
    area: "۱۲۰۰",
    bedrooms: "۵",
    bathrooms: "۴",
    price: "۳۵ میلیارد",
    caption: "آرامش در دل طبیعت",
  },
  {
    id: 3,
    image: "/images/property-3.jpg",
    type: "آپارتمان",
    location: "تهران، الهیه",
    area: "۳۲۰",
    bedrooms: "۳",
    bathrooms: "۲",
    price: "۱۵ میلیارد",
    caption: "زندگی در قلب شهر",
  },
  {
    id: 4,
    image: "/images/property-4.jpg",
    type: "پنت‌هاوس",
    location: "تهران، فرمانیه",
    area: "۵۸۰",
    bedrooms: "۵",
    bathrooms: "۴",
    price: "۲۸ میلیارد",
    caption: "سبک زندگی خاص",
  },
  {
    id: 5,
    image: "/images/property-5.jpg",
    type: "ویلا",
    location: "کیش",
    area: "۸۵۰",
    bedrooms: "۶",
    bathrooms: "۵",
    price: "۴۲ میلیارد",
    caption: "رویای جزیره",
  },
  {
    id: 6,
    image: "/images/property-1.jpg",
    type: "آپارتمان",
    location: "تهران، زعفرانیه",
    area: "۲۸۰",
    bedrooms: "۳",
    bathrooms: "۲",
    price: "۱۲ میلیارد",
    caption: "ظرافت در هر جزئیات",
  },
]

export default function PropertyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const params = useParams()
  const propertyId = Number(params.id)
  const property = properties.find((p) => p.id === propertyId)

  if (!property) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-light text-foreground">ملک یافت نشد</h1>
          <Link href="/#properties" className="text-sm text-accent hover:underline">
            بازگشت به لیست فایل‌ها
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed right-6 top-6 z-50">
        <Link
          href="/#properties"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>
      </div>

      {/* Hero Section - Full Screen Image with Overlay */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={property.image}
          alt={`${property.type} در ${property.location}`}
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/20" />

        {/* Type Badge */}
        <div className="absolute left-6 top-20 sm:left-8 sm:top-24 md:left-12 md:top-28">
          <div className="border border-white/40 px-3 py-1 sm:px-4 sm:py-1.5">
            <span className="text-[10px] tracking-[0.3em] text-white sm:text-xs">
              {property.type}
            </span>
          </div>
        </div>

        {/* Hero Content - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col px-6 pb-8 sm:px-8 sm:pb-10 md:px-12 md:pb-12">
          <div className="mx-auto w-full max-w-2xl">
            {/* Title - Top */}
            <h1 className="mb-auto text-3xl font-light text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {property.location}
            </h1>

            {/* Address */}
            <div className="mb-8 mt-auto sm:mb-10 md:mb-12">
              <p className="text-xs text-white/60 sm:text-sm">
                {property.caption}
              </p>
            </div>

            {/* Specs Grid - Bottom */}
            <div className="border-t border-white/20 pt-6 sm:pt-8 md:pt-10">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {/* Bedrooms */}
                <div className="flex flex-col items-center border-r border-white/20 pr-3 text-center sm:pr-4 md:pr-5">
                  <span className="text-[9px] tracking-[0.2em] text-white/60 sm:text-[10px]">
                    اتاق خواب
                  </span>
                  <span className="mt-3 text-2xl font-light text-white sm:mt-4 sm:text-3xl md:text-4xl">
                    {property.bedrooms}
                  </span>
                </div>

                {/* Price */}
                <div className="flex flex-col items-center border-l border-r border-white/20 px-3 text-center sm:px-4 md:px-5">
                  <span className="text-[9px] tracking-[0.2em] text-white/60 sm:text-[10px]">
                    قیمت
                  </span>
                  <span className="mt-3 text-sm font-light text-white sm:mt-4 sm:text-base md:text-lg">
                    {property.price}
                  </span>
                </div>

                {/* Area */}
                <div className="flex flex-col items-center border-l border-white/20 pl-3 text-center sm:pl-4 md:pl-5">
                  <span className="text-[9px] tracking-[0.2em] text-white/60 sm:text-[10px]">
                    متر مربع
                  </span>
                  <span className="mt-3 text-2xl font-light text-white sm:mt-4 sm:text-3xl md:text-4xl">
                    {property.area}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-5 w-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Schedule Visit Section */}
      <section className="relative px-6 py-20 sm:px-8 sm:py-24 md:px-12 md:py-32 overflow-hidden">
        {/* Background design elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/3 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-4 inline-block text-xs tracking-[0.2em] text-muted-foreground">
              قدم بعدی
            </span>
            <h2 className="font-sans text-2xl font-light text-foreground sm:text-3xl md:text-4xl">
              علاقه‌مند به بازدید هستید؟
            </h2>
            <div className="mx-auto mt-6 h-px w-12 bg-accent/50" />
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid grid-cols-3 gap-4 sm:mb-16 sm:gap-6">
            {/* Feature 1 */}
            <div 
              className="group relative p-4 text-center transition-all duration-300 sm:p-6"
              style={{
                boxShadow: '0 0 0 1px oklch(0.72 0.06 80 / 0.15)'
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <svg className="mx-auto mb-3 h-6 w-6 text-accent/70 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[10px] font-light text-muted-foreground sm:text-xs">پاسخ‌گویی سریع</span>
            </div>

            {/* Feature 2 */}
            <div 
              className="group relative p-4 text-center transition-all duration-300 sm:p-6"
              style={{
                boxShadow: '0 0 0 1px oklch(0.72 0.06 80 / 0.15)'
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <svg className="mx-auto mb-3 h-6 w-6 text-accent/70 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[10px] font-light text-muted-foreground sm:text-xs">مشاوره تخصصی</span>
            </div>

            {/* Feature 3 */}
            <div 
              className="group relative p-4 text-center transition-all duration-300 sm:p-6"
              style={{
                boxShadow: '0 0 0 1px oklch(0.72 0.06 80 / 0.15)'
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <svg className="mx-auto mb-3 h-6 w-6 text-accent/70 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[10px] font-light text-muted-foreground sm:text-xs">بازدید حضوری</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative w-full overflow-hidden py-5 text-sm font-light tracking-[0.15em] text-white transition-all duration-500 sm:py-6 sm:text-base"
              style={{
                background: 'linear-gradient(135deg, oklch(0.72 0.06 80) 0%, oklch(0.65 0.07 75) 100%)',
                boxShadow: '0 0 30px 0 oklch(0.72 0.06 80 / 0.25)'
              }}
            >
              <span className="relative z-10">هماهنگی جلسه بازدید</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            
            {/* Corner accents */}
            <div className="absolute -left-1 -top-1 h-3 w-px bg-accent" />
            <div className="absolute -left-1 -top-1 h-px w-3 bg-accent" />
            <div className="absolute -right-1 -top-1 h-3 w-px bg-accent" />
            <div className="absolute -right-1 -top-1 h-px w-3 bg-accent" />
            <div className="absolute -bottom-1 -left-1 h-3 w-px bg-accent" />
            <div className="absolute -bottom-1 -left-1 h-px w-3 bg-accent" />
            <div className="absolute -bottom-1 -right-1 h-3 w-px bg-accent" />
            <div className="absolute -bottom-1 -right-1 h-px w-3 bg-accent" />
          </div>

          {/* Info text */}
          <p className="mt-8 text-center text-xs font-light text-muted-foreground sm:mt-10">
            کارشناسان ما ظرف ۲ ساعت با شما تماس خواهند گرفت
          </p>
        </div>
      </section>

      {/* Schedule Visit Modal */}
      <ScheduleVisitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
