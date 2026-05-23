"use client"

import { useState } from "react"

export function ScheduleVisitModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    day: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", phone: "", day: "", message: "" })
    onClose()
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
      <div className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-background border border-border p-14 sm:p-16 md:p-20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-8 top-8 flex h-5 w-5 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-foreground leading-tight">
            هماهنگی
          </h2>
          <p className="mt-6 text-xs text-muted-foreground font-light tracking-[0.15em] uppercase">
            برای مشاهدهٔ پروپرتی
          </p>
          <div className="mt-10 h-px w-10 bg-accent" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
          {/* Name Input */}
          <div className="space-y-5">
            <label htmlFor="name" className="block text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-light">
              نام
            </label>
            <input
              type="text"
              id="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-base font-light text-foreground placeholder-transparent focus:border-accent focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="space-y-5">
            <label htmlFor="phone" className="block text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-light">
              تماس
            </label>
            <input
              type="tel"
              id="phone"
              placeholder=""
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-base font-light text-foreground placeholder-transparent focus:border-accent focus:outline-none transition-colors"
              dir="ltr"
              required
            />
          </div>

          {/* Date Input */}
          <div className="space-y-5">
            <label htmlFor="date" className="block text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-light">
              تاریخ
            </label>
            <input
              type="date"
              id="date"
              value={formData.day}
              onChange={(e) => setFormData({ ...formData, day: e.target.value })}
              className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-base font-light text-foreground focus:border-accent focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Message Input */}
          <div className="space-y-5">
            <label htmlFor="message" className="block text-[11px] tracking-[0.25em] text-muted-foreground uppercase font-light">
              پیام
            </label>
            <textarea
              id="message"
              placeholder=""
              rows={2}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-border/60 px-0 py-3 text-base font-light text-foreground placeholder-transparent focus:border-accent focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-accent border border-accent py-4 px-6 text-[11px] font-light tracking-[0.25em] text-white hover:bg-accent/90 transition-colors uppercase"
            >
              ثبت درخواست
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
