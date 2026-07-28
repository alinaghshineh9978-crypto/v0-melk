"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  })
  const [errors, setErrors] = useState<{ phone?: string; password?: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const validatePhone = (phone: string) => {
    const iranPhoneRegex = /^09\d{9}$/
    if (!phone) return "شماره تماس الزامی است"
    if (!iranPhoneRegex.test(phone)) return "شماره تماس معتبر نیست"
    return ""
  }

  const validatePassword = (password: string) => {
    if (!password) return "رمز عبور الزامی است"
    if (password.length < 6) return "رمز عبور باید حداقل ۶ کاراکتر باشد"
    return ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
    
    // Clear error on change
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: "" }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    let error = ""
    if (id === "phone") error = validatePhone(value)
    if (id === "password") error = validatePassword(value)
    if (error) setErrors(prev => ({ ...prev, [id]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const phoneError = validatePhone(formData.phone)
    const passwordError = validatePassword(formData.password)
    
    if (phoneError || passwordError) {
      setErrors({ phone: phoneError, password: passwordError })
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    router.push("/")
  }

  return (
    <div className="w-full max-w-md">
      {/* Logo / Brand */}
      <div className="mb-12 text-center">
        <Link href="/" className="inline-block">
          <h1 className="font-serif text-2xl font-light tracking-[0.18em] text-white/90">
            Naghshineh Collection
          </h1>
          <div className="mx-auto mt-3 h-px w-10 bg-gradient-to-r from-transparent via-[oklch(0.72_0.06_80/0.6)] to-transparent" />
          <p className="mt-3 text-[9px] tracking-[0.35em] text-white/35 uppercase">
            Estates Division
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

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-light text-white/90">
            ورود به حساب کاربری
          </h2>
          <p className="mt-3 text-sm font-light text-white/40">
            خوش آمدید. لطفاً وارد شوید.
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
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              dir="ltr"
              className={`w-full bg-white/[0.03] border px-4 py-4 text-sm text-white/90 placeholder-white/20 transition-all focus:outline-none focus:bg-white/[0.05] ${
                errors.phone 
                  ? 'border-red-500/50 focus:border-red-500/70' 
                  : 'border-white/10 focus:border-[oklch(0.72_0.06_80/0.5)]'
              }`}
            />
            {errors.phone && (
              <p className="mt-2 text-xs text-red-400/80">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-xs font-light text-white/50 mb-3">
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
              className={`w-full bg-white/[0.03] border px-4 py-4 text-sm text-white/90 placeholder-white/20 transition-all focus:outline-none focus:bg-white/[0.05] ${
                errors.password 
                  ? 'border-red-500/50 focus:border-red-500/70' 
                  : 'border-white/10 focus:border-[oklch(0.72_0.06_80/0.5)]'
              }`}
            />
            {errors.password && (
              <p className="mt-2 text-xs text-red-400/80">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <Link 
              href="/forgot-password" 
              className="text-xs font-light text-white/40 hover:text-[oklch(0.72_0.06_80)] transition-colors"
            >
              فراموشی رمز عبور
            </Link>
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
              ورود
            </span>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-white/30">یا</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm font-light text-white/40">
          حساب کاربری ندارید؟{" "}
          <Link 
            href="/signup" 
            className="text-[oklch(0.72_0.06_80)] hover:text-[oklch(0.80_0.06_80)] transition-colors"
          >
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  )
}
