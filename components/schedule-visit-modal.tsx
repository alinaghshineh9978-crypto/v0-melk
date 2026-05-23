"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function ScheduleVisitModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    day: "",
    message: "",
    agreed: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, agreed: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    if (formData.agreed) {
      setFormData({ name: "", phone: "", day: "", message: "", agreed: false })
      onClose()
      router.push("/#properties")
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-h-[90vh] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-background p-8 sm:p-10 md:p-12">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 sm:right-8 sm:top-8 flex h-6 w-6 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-12 md:mb-14 pr-6">
          <h2 className="text-3xl font-light text-foreground sm:text-4xl md:text-5xl font-serif">
            هماهنگی جلسه بازدید
          </h2>
          <div className="mt-8 h-px w-16 bg-accent" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-xs tracking-[0.1em] text-muted-foreground mb-3">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              id="name"
              placeholder="نام شما را وارد کنید"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:shadow-none sm:py-4"
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-xs tracking-[0.1em] text-muted-foreground mb-3">
              شماره تماس
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="۰۹۱۲ ۳۳۳ ۳۳۳۳"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:shadow-none sm:py-4"
              dir="ltr"
              required
            />
          </div>

          {/* Date - Single Input */}
          <div>
            <label htmlFor="date" className="block text-xs tracking-[0.1em] text-muted-foreground mb-3">
              تاریخ بازدید
            </label>
            <input
              type="date"
              id="date"
              value={formData.day}
              onChange={(e) => setFormData({ ...formData, day: e.target.value })}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:shadow-none sm:py-4"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs tracking-[0.1em] text-muted-foreground mb-3">
              پیام (اختیاری)
            </label>
            <textarea
              id="message"
              placeholder="نظر یا سوال خود را بنویسید..."
              rows={2}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:shadow-none sm:py-4 resize-none"
            />
          </div>

          {/* Agreement Checkbox */}
          <div className="flex gap-3 pt-4">
            <input
              type="checkbox"
              id="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mt-1 h-4 w-4 min-w-4 border border-border bg-background cursor-pointer accent-accent flex-shrink-0"
              required
            />
            <label htmlFor="agreed" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
              من شرایط و ضوابط را می‌پذیرم و آماده بازدید ملک هستم
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={!formData.agreed}
              className="w-full border border-accent bg-accent py-4 text-xs font-light tracking-[0.15em] text-white transition-all hover:bg-accent/90 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed sm:text-sm"
            >
              تأیید و هماهنگی جلسه
            </button>
          </div>
        </form>

        {/* Info Text */}
        <p className="mt-8 text-center text-xs text-muted-foreground sm:mt-10 sm:text-sm">
          ما تا ۲ ساعت بعد برای هماهنگی دقیق‌تر تماس خواهیم گرفت
        </p>
      </div>
    </>
  )
}
