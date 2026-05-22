"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-card px-4 py-16 sm:px-6 md:py-24 lg:py-32 xl:py-40"
    >
      <div className="mx-auto max-w-6xl">
        {/* Editorial Layout */}
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Image */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted sm:aspect-[3/4]">
              <Image
                src="/images/property-4.jpg"
                alt="Luxury Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-3 -start-3 h-16 w-16 border border-accent/30 sm:-bottom-4 sm:-start-4 sm:h-24 sm:w-24" />
          </div>

          {/* Right Column - Text */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <div
              className={`transition-all duration-1000 delay-200 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <span className="mb-4 inline-block text-xs tracking-[0.2em] text-muted-foreground sm:mb-6">
                درباره ما
              </span>

              <h2 className="mb-6 text-2xl font-light leading-relaxed text-foreground sm:mb-8 sm:text-3xl md:text-4xl lg:text-5xl">
                فلسفه
                <br />
                <span className="text-accent">نقشینه</span>
              </h2>

              <div className="h-px w-12 bg-accent sm:w-16" />
            </div>

            <div
              className={`mt-6 space-y-4 sm:mt-8 sm:space-y-6 transition-all duration-1000 delay-400 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                مجموعه نقشینه با رویکردی متفاوت در صنعت املاک لوکس، تجربه‌ای منحصربه‌فرد از مشاوره و انتخاب ملک ارائه می‌دهد. ما معتقدیم که هر ملک، روایتی است از سبک زندگی.
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                تیم متخصص ما با دانش عمیق از بازار املاک و درک نیازهای مشتریان خاص، شما را در مسیر یافتن ملک رویایی‌تان همراهی می‌کند.
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                از ویلاهای ساحلی تا پنت‌هاوس‌های شهری، ما گلچینی از بهترین املاک را برای شما فراهم کرده‌ایم.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:mt-12 sm:gap-8 sm:pt-8 transition-all duration-1000 delay-600 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div>
                <span className="text-xl font-light text-foreground sm:text-2xl md:text-3xl">+۱۵</span>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground">سال تجربه</p>
              </div>
              <div>
                <span className="text-xl font-light text-foreground sm:text-2xl md:text-3xl">+۵۰۰</span>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground">ملک فروخته‌شده</p>
              </div>
              <div>
                <span className="text-xl font-light text-foreground sm:text-2xl md:text-3xl">+۲۰۰</span>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground">مشتری راضی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
