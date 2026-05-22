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
            <h1 className="mb-3 text-3xl font-light text-white sm:text-4xl md:mb-4 md:text-5xl lg:text-6xl">
              {property.location}
            </h1>

            {/* Subtitle */}
            <p className="mb-6 text-sm text-white/70 sm:mb-8 sm:text-base md:mb-10">
              {property.caption}
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="flex flex-col">
                <span className="text-xl font-light text-white sm:text-2xl">
                  {property.bedrooms}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-white/60 sm:text-xs">
                  اتاق خواب
                </span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="flex flex-col">
                <span className="text-xl font-light text-white sm:text-2xl">
                  {property.bathrooms}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-white/60 sm:text-xs">
                  سرویس
                </span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="flex flex-col">
                <span className="text-xl font-light text-white sm:text-2xl">
                  {property.area}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-white/60 sm:text-xs">
                  متر مربع
                </span>
              </div>
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

      {/* Contact Section */}
      <section className="px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="space-y-4 sm:space-y-5">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/989054332799"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-accent bg-accent py-4 text-sm font-light tracking-[0.1em] text-white transition-all hover:bg-accent/90 sm:py-5 sm:text-base"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              پیام در واتس‌اپ
            </a>

            {/* Call CTA */}
            <a
              href="tel:+989054332799"
              className="flex items-center justify-center gap-3 border-2 border-foreground py-4 text-sm font-light tracking-[0.1em] text-foreground transition-all hover:bg-foreground hover:text-background sm:py-5 sm:text-base"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              تماس مستقیم
            </a>

            {/* Back Link */}
            <Link
              href="/#properties"
              className="flex items-center justify-center gap-2 border-2 border-border py-4 text-sm font-light tracking-[0.1em] text-foreground transition-all hover:border-foreground sm:py-5 sm:text-base"
            >
              <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              بازگشت به لیست فایل‌ها
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
