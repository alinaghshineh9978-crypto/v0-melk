"use client"

import { useState } from "react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validatePhone = (phone: string) => {
    const iranPhoneRegex = /^09\d{9}$/
    if (!phone) return "شماره تماس الزامی است"
    if (!iranPhoneRegex.test(phone)) return "شماره تماس معتبر نیست"
    return ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
    if (error) setError("")
  }

  const handleBlur = () => {
    const phoneError = validatePhone(phone)
    if (phoneError) setError(phoneError)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const phoneError = validatePhone(phone)
    if (phoneError) {
      setError(phoneError)
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="w-full max-w-md">
      {/* Logo / Brand */}
      <div className="mb-12 text-center">
        <Link href="/" className="inline-block">
          <h1 className="text-xl font-light tracking-[0.25em] text-white/90">
            نقشینه
          </h1>
          <p className="mt-2 text-[10px] tracking-[0.2em] text-white/40">
            ESTATES DIVISION
          </p>
        </Link>
      </div>

      {/* Glass Card */}
      <div 
        className="relative p-8 sm:p-10"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 60px 0 oklch(0.72 0.06 80 / 0.08), inset 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.06_80/0.4)] to-transparent" />

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-2xl font-light text-white/90">
                بازیابی رمز عبور
              </h2>
              <p className="mt-3 text-sm font-light text-white/40 leading-relaxed">
                شماره تماس خود را وارد کنید تا کد بازیابی برایتان ارسال شود.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-light text-white/50 mb-3">
                  شماره تماس
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  dir="ltr"
                  className={`w-full bg-white/[0.03] border px-4 py-4 text-sm text-white/90 placeholder-white/20 transition-all focus:outline-none focus:bg-white/[0.05] ${
                    error 
                      ? 'border-red-500/50 focus:border-red-500/70' 
                      : 'border-white/10 focus:border-[oklch(0.72_0.06_80/0.5)]'
                  }`}
                />
                {error && (
                  <p className="mt-2 text-xs text-red-400/80">{error}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full py-4 text-sm font-light tracking-wide text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.72 0.06 80) 0%, oklch(0.65 0.07 75) 100%)',
                  boxShadow: '0 0 30px 0 oklch(0.72 0.06 80 / 0.2)',
                }}
              >
                <span className={`relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  ارسال کد بازیابی
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-6">
            {/* Success Icon */}
            <div 
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, oklch(0.72 0.06 80 / 0.15) 0%, oklch(0.72 0.06 80 / 0.05) 100%)',
                boxShadow: 'inset 0 0 0 1px oklch(0.72 0.06 80 / 0.3)',
              }}
            >
              <svg className="h-8 w-8 text-[oklch(0.72_0.06_80)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <h3 className="text-xl font-light text-white/90 mb-3">
              کد ارسال شد
            </h3>
            <p className="text-sm font-light text-white/40 leading-relaxed mb-8">
              کد بازیابی به شماره{" "}
              <span className="text-white/60" dir="ltr">{phone}</span>
              {" "}ارسال شد.
            </p>

            {/* Resend Link */}
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-light text-[oklch(0.72_0.06_80/0.7)] hover:text-[oklch(0.72_0.06_80)] transition-colors"
            >
              ارسال مجدد کد
            </button>
          </div>
        )}

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-white/30">یا</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Back to Login Link */}
        <p className="text-center text-sm font-light text-white/40">
          رمز عبور را به یاد آوردید؟{" "}
          <Link 
            href="/login" 
            className="text-[oklch(0.72_0.06_80)] hover:text-[oklch(0.80_0.06_80)] transition-colors"
          >
            بازگشت به ورود
          </Link>
        </p>
      </div>
    </div>
  )
}
