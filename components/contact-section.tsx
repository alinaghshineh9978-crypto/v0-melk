"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-card px-4 py-16 sm:px-6 md:py-24 lg:py-32 xl:py-40"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div
          className={`mb-10 text-center sm:mb-16 md:mb-24 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="mb-3 inline-block text-xs tracking-[0.2em] text-muted-foreground sm:mb-4">
            تماس با ما
          </span>
          <h2 className="text-2xl font-light text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            در خدمت شماییم
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent sm:mt-6 sm:w-16" />
        </div>

        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Contact Form */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs text-muted-foreground">
                  نام و نام خانوادگی
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="h-12 border-border/50 bg-background text-base focus:border-accent focus:ring-accent sm:h-auto sm:text-sm"
                  placeholder="نام شما"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs text-muted-foreground">
                  شماره تماس
                </label>
                <Input
                  id="phone"
                  type="tel"
                  dir="ltr"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  className="h-12 border-border/50 bg-background text-base text-left focus:border-accent focus:ring-accent sm:h-auto sm:text-sm"
                  placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs text-muted-foreground">
                  پیام شما
                </label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="min-h-[100px] resize-none border-border/50 bg-background text-base focus:border-accent focus:ring-accent sm:min-h-[120px] sm:text-sm"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-primary text-base text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground active:bg-accent sm:h-auto sm:text-sm"
              >
                ارسال پیام
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`order-1 flex flex-col justify-center space-y-6 sm:space-y-8 lg:order-2 transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div>
              <h3 className="mb-3 text-lg font-light text-foreground sm:mb-4 sm:text-xl">
                راه‌های ارتباطی
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                برای مشاوره رایگان و اطلاعات بیشتر درباره املاک، با ما در تماس باشید.
              </p>
            </div>

            <div className="space-y-3 border-t border-border pt-6 sm:space-y-4 sm:pt-8">
              {/* Phone Call */}
              <a
                href="tel:+989054332799"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-accent active:text-accent sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">تماس مستقیم</span>
                  <span className="text-sm" dir="ltr">۰۹۰۵ ۴۳۳ ۲۷۹۹</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/989054332799"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-accent active:text-accent sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">پیام در واتس‌اپ</span>
                  <span className="text-sm" dir="ltr">۰۹۰۵ ۴۳۳ ۲۷۹۹</span>
                </div>
              </a>

              {/* Instagram - Placeholder for when ready */}
              <a
                href="https://instagram.com/naghshineh_collection"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-accent active:text-accent sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">اینستاگرام</span>
                  <span className="text-sm" dir="ltr">@naghshineh_collection</span>
                </div>
              </a>
            </div>

            {/* Note */}
            <div className="border-t border-border pt-6 sm:pt-8">
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                برای مشاوره تخصصی و بازدید از املاک، با ما تماس بگیرید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
