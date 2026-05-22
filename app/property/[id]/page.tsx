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
    caption: "بالاترین نقطه شهر",
    issue: "۰۱",
    bedrooms: "۴",
    bathrooms: "۳",
    floors: "۲",
    yearBuilt: "۱۴۰۲",
    price: "تماس بگیرید",
    description: "این پنت‌هاوس لوکس در بهترین نقطه نیاوران با چشم‌انداز خیره‌کننده به شهر، ترکیبی بی‌نظیر از معماری مدرن و راحتی را ارائه می‌دهد. فضای داخلی با بهترین متریال‌ها طراحی شده و دارای تراس بزرگ، آشپزخانه مجهز و سیستم هوشمند خانگی است.",
    features: ["تراس اختصاصی", "استخر روی بام", "پارکینگ ۳ ماشین", "آسانسور اختصاصی", "سیستم هوشمند", "انباری بزرگ"],
  },
  {
    id: 2,
    image: "/images/property-2.jpg",
    type: "ویلا",
    location: "شمال، نوشهر",
    area: "۱۲۰۰",
    caption: "آرامش در دل طبیعت",
    issue: "۰۲",
    bedrooms: "۵",
    bathrooms: "۴",
    floors: "۲",
    yearBuilt: "۱۴۰۱",
    price: "تماس بگیرید",
    description: "ویلای رویایی در قلب جنگل‌های سرسبز نوشهر با دسترسی آسان به دریا. این ملک با معماری منحصربه‌فرد و فضای سبز وسیع، مکانی ایده‌آل برای زندگی آرام و لوکس است.",
    features: ["استخر سرپوشیده", "باغ اختصاصی", "سونا و جکوزی", "شومینه", "آلاچیق", "سیستم امنیتی"],
  },
  {
    id: 3,
    image: "/images/property-3.jpg",
    type: "آپارتمان",
    location: "تهران، الهیه",
    area: "۳۲۰",
    caption: "زندگی در قلب شهر",
    issue: "۰۳",
    bedrooms: "۳",
    bathrooms: "۲",
    floors: "۱",
    yearBuilt: "۱۴۰۳",
    price: "تماس بگیرید",
    description: "آپارتمان مدرن در یکی از بهترین برج‌های الهیه با امکانات کامل رفاهی. نورگیری عالی، چشم‌انداز زیبا و دسترسی آسان به مراکز خرید و تفریحی از ویژگی‌های این ملک است.",
    features: ["لابی مجلل", "سالن اجتماعات", "پارکینگ مهمان", "نگهبانی ۲۴ ساعته", "روف گاردن", "باشگاه ورزشی"],
  },
  {
    id: 4,
    image: "/images/property-4.jpg",
    type: "پنت‌هاوس",
    location: "تهران، فرمانیه",
    area: "۵۸۰",
    caption: "سبک زندگی خاص",
    issue: "۰۴",
    bedrooms: "۵",
    bathrooms: "۴",
    floors: "۲",
    yearBuilt: "۱۴۰۲",
    price: "تماس بگیرید",
    description: "پنت‌هاوس دوبلکس در فرمانیه با طراحی داخلی منحصربه‌فرد و متریال درجه یک. سقف بلند، پنجره‌های سرتاسری و تراس بزرگ از ویژگی‌های بارز این ملک لوکس است.",
    features: ["دوبلکس", "تراس ۱۰۰ متری", "آشپزخانه ایتالیایی", "اتاق مستر سوئیت", "اتاق سینما", "وین سلار"],
  },
  {
    id: 5,
    image: "/images/property-5.jpg",
    type: "ویلا",
    location: "کیش",
    area: "۸۵۰",
    caption: "رویای جزیره",
    issue: "۰۵",
    bedrooms: "۶",
    bathrooms: "۵",
    floors: "۲",
    yearBuilt: "۱۴۰۰",
    price: "تماس بگیرید",
    description: "ویلای ساحلی در جزیره کیش با دسترسی مستقیم به ساحل خصوصی. این ملک استثنایی با معماری مدیترانه‌ای و امکانات لوکس، تجربه‌ای بی‌نظیر از زندگی جزیره‌ای ارائه می‌دهد.",
    features: ["ساحل خصوصی", "اسکله قایق", "استخر بی‌نهایت", "باربیکیو", "سوئیت مهمان", "باغ نخل"],
  },
  {
    id: 6,
    image: "/images/property-1.jpg",
    type: "آپارتمان",
    location: "تهران، زعفرانیه",
    area: "۲۸۰",
    caption: "ظرافت در هر جزئیات",
    issue: "۰۶",
    bedrooms: "۳",
    bathrooms: "۲",
    floors: "۱",
    yearBuilt: "۱۴۰۳",
    price: "تماس بگیرید",
    description: "آپارتمان شیک و مدرن در زعفرانیه با طراحی داخلی توسط طراحان مطرح. جزئیات دقیق، متریال باکیفیت و چیدمان هوشمندانه فضا، این ملک را به گزینه‌ای ایده‌آل تبدیل کرده است.",
    features: ["طراحی اختصاصی", "کمد دیواری", "تهویه مرکزی", "کف پارکت", "نورپردازی مدرن", "بالکن شیشه‌ای"],
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
            بازگشت به لیست املاک
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed left-6 top-6 z-50">
        <Link
          href="/#properties"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
        >
          <svg className="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={property.image}
          alt={`${property.type} در ${property.location}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute bottom-0 right-0 w-full px-6 pb-12 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <span className="mb-3 inline-block border border-white/30 px-3 py-1 text-xs tracking-[0.2em] text-white/80">
              {property.type}
            </span>
            <div className="mb-4 flex items-center gap-4">
              {/* Glassmorphism Location Badge */}
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <svg className="h-5 w-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm font-light tracking-wide text-white/90">{property.location}</span>
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-light text-white md:text-5xl lg:text-6xl">
              {property.location}
            </h1>
            <p className="text-lg font-light text-white/70">{property.caption}</p>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-light text-foreground">درباره این ملک</h2>
              <p className="mb-12 text-base leading-relaxed text-muted-foreground">
                {property.description}
              </p>

              {/* Features */}
              <h3 className="mb-6 text-xl font-light text-foreground">امکانات و ویژگی‌ها</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {property.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border-b border-border pb-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8 border border-border p-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <span className="block text-2xl font-light text-foreground">{property.area}</span>
                    <span className="text-xs text-muted-foreground">متر مربع</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-light text-foreground">{property.bedrooms}</span>
                    <span className="text-xs text-muted-foreground">اتاق خواب</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-light text-foreground">{property.bathrooms}</span>
                    <span className="text-xs text-muted-foreground">سرویس</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-light text-foreground">{property.yearBuilt}</span>
                    <span className="text-xs text-muted-foreground">سال ساخت</span>
                  </div>
                </div>

                <div className="h-px w-full bg-border" />

                {/* Price */}
                <div className="text-center">
                  <span className="text-xs tracking-[0.2em] text-muted-foreground">قیمت</span>
                  <p className="mt-2 text-xl font-light text-foreground">{property.price}</p>
                </div>

                <div className="h-px w-full bg-border" />

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href="https://wa.me/989054332799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-accent py-3 text-sm tracking-[0.1em] text-white transition-colors hover:bg-accent/90"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    پیام در واتس‌اپ
                  </a>
                  <a
                    href="tel:+989054332799"
                    className="flex w-full items-center justify-center gap-2 border border-foreground py-3 text-sm tracking-[0.1em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    تماس مستقیم
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
