"use client"

import { useState } from "react"

export function ScheduleVisitModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    day: "",
    month: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", phone: "", day: "", month: "", message: "" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-background p-6 sm:p-8 md:p-12">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted transition-colors"
        >
          <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-10 md:mb-12">
          <span className="mb-2 inline-block text-xs tracking-[0.2em] text-accent">بازدید</span>
          <h2 className="text-3xl font-light text-foreground sm:text-4xl md:text-5xl">
            هماهنگی جلسه بازدید
          </h2>
          <div className="mt-6 h-px w-12 bg-accent" />
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

          {/* Date - Day & Month */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <div>
              <label htmlFor="day" className="block text-xs tracking-[0.1em] text-muted-foreground mb-3">
                روز
              </label>
              <input
                type="number"
                id="day"
                placeholder="۱ تا ۳۱"
                min="1"
                max="31"
                value={formData.day}
                onChange={handleChange}
                className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:shadow-none sm:py-4"
                dir="ltr"
                required
              />
            </div>
            <div>
              <label htmlFor="month" className="block text-xs tracking-[0.1em] text-muted-foreground mb-3">
                ماه
              </label>
              <select
                id="month"
                value={formData.month}
                onChange={handleChange}
                className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:shadow-none sm:py-4"
                required
              >
                <option value="" disabled>
                  انتخاب ماه
                </option>
                <option value="01">فروردین</option>
                <option value="02">اردیبهشت</option>
                <option value="03">خرداد</option>
                <option value="04">تیر</option>
                <option value="05">مرداد</option>
                <option value="06">شهریور</option>
                <option value="07">مهر</option>
                <option value="08">آبان</option>
                <option value="09">آذر</option>
                <option value="10">دی</option>
                <option value="11">بهمن</option>
                <option value="12">اسفند</option>
              </select>
            </div>
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
              className="w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:shadow-none sm:py-4"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full border border-accent bg-accent py-4 text-xs font-light tracking-[0.15em] text-white transition-all hover:bg-accent/90 focus:outline-none sm:text-sm"
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
