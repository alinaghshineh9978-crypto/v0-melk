"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

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
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-32 sm:px-8 sm:pb-40 md:px-12 md:pb-48">
          <div className="mx-auto max-w-2xl">
            {/* Title */}
            <h1 className="mb-2 text-3xl font-light text-white sm:text-4xl md:mb-3 md:text-5xl lg:text-6xl">
              {property.location}
            </h1>

            {/* Specs Grid - 3 Columns with Border Only */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
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

            {/* Address - Below Specs */}
            <div className="mt-8 border-t border-white/20 pt-6 sm:mt-10 sm:pt-8 md:mt-12 md:pt-10">
              <p className="text-xs text-white/60 sm:text-sm">
                {property.caption}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-5 w-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Schedule Visit Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-2xl">
          {/* Section Header */}
          <div className="mb-10 text-center md:mb-14">
            <span className="mb-4 inline-block text-xs tracking-[0.2em] text-muted-foreground">
              بازدید
            </span>
            <h2 className="text-2xl font-light text-foreground sm:text-3xl md:text-4xl">
              هماهنگی جلسه بازدید
            </h2>
            <div className="mx-auto mt-6 h-px w-12 bg-accent" />
          </div>

          {/* Schedule Form */}
          <form className="space-y-5 sm:space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="text-xs text-muted-foreground">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                id="name"
                placeholder="نام شما"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none sm:py-4"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="text-xs text-muted-foreground">
                شماره تماس
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="۰۹۱۲ ۳۳۳ ۳۳۳۳"
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none sm:py-4"
                dir="ltr"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="date" className="text-xs text-muted-foreground">
                  تاریخ بازدید
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none sm:py-4"
                />
              </div>
              <div>
                <label htmlFor="time" className="text-xs text-muted-foreground">
                  ساعت بازدید
                </label>
                <input
                  type="time"
                  id="time"
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none sm:py-4"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="text-xs text-muted-foreground">
                پیام (اختیاری)
              </label>
              <textarea
                id="message"
                placeholder="توضیح یا سوال خاصی..."
                rows={3}
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none sm:py-4"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border-2 border-accent bg-accent py-4 text-xs font-light tracking-[0.15em] text-white transition-all hover:bg-accent/90 sm:text-sm"
            >
              تأیید جلسه بازدید
            </button>
          </form>

          {/* Info Text */}
          <p className="mt-8 text-center text-xs text-muted-foreground sm:text-sm">
            ما تا ۲ ساعت بعد تماس خواهیم گرفت
          </p>
        </div>
      </section>
    </main>
  )
}
