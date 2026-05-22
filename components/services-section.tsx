"use client"

import { useEffect, useRef, useState } from "react"

const services = [
  {
    id: 1,
    title: "مشاوره املاک لوکس",
    description: "راهنمایی تخصصی در انتخاب و خرید املاک لوکس با توجه به نیازها و سلیقه شما",
  },
  {
    id: 2,
    title: "سرمایه‌گذاری ملکی",
    description: "تحلیل بازار و ارائه فرصت‌های سرمایه‌گذاری پرسود در حوزه املاک",
  },
  {
    id: 3,
    title: "املاک خاص و اختصاصی",
    description: "دسترسی به مجموعه‌ای انحصاری از املاک که در بازار عمومی یافت نمی‌شوند",
  },
  {
    id: 4,
    title: "خدمات مشتریان VIP",
    description: "خدمات ویژه و شخصی‌سازی شده برای مشتریان خاص با بالاترین سطح کیفیت",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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
      id="services"
      className="bg-background px-4 py-16 sm:px-6 md:py-24 lg:py-32 xl:py-40"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div
          className={`mb-10 text-center sm:mb-16 md:mb-24 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="mb-3 inline-block text-xs tracking-[0.2em] text-muted-foreground sm:mb-4">
            خدمات ما
          </span>
          <h2 className="text-2xl font-light text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            آنچه ارائه می‌دهیم
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent sm:mt-6 sm:w-16" />
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group border-b border-border transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex cursor-pointer items-start gap-4 py-6 sm:items-center sm:justify-between sm:gap-8 md:py-10">
                {/* Number */}
                <span className="text-xs text-muted-foreground/50 sm:text-sm">
                  {String(service.id).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`mb-1 text-base font-medium text-foreground transition-colors sm:mb-2 sm:text-lg md:text-xl ${
                      hoveredId === service.id ? "text-accent" : ""
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`max-w-xl text-xs leading-relaxed text-muted-foreground transition-all duration-300 sm:text-sm ${
                      hoveredId === service.id ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className={`hidden h-5 w-5 shrink-0 rotate-180 text-muted-foreground transition-all duration-300 sm:block ${
                    hoveredId === service.id ? "translate-x-1 text-accent" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
