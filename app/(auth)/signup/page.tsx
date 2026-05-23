"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<{
    fullName?: string
    phone?: string
    password?: string
    confirmPassword?: string
  }>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateFullName = (name: string) => {
    if (!name) return "نام و نام خانوادگی الزامی است"
    if (name.length < 3) return "نام باید حداقل ۳ کاراکتر باشد"
    return ""
  }

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

  const validateConfirmPassword = (confirmPassword: string, password: string) => {
    if (!confirmPassword) return "تکرار رمز عبور الزامی است"
    if (confirmPassword !== password) return "رمز عبور مطابقت ندارد"
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
    if (id === "fullName") error = validateFullName(value)
    if (id === "phone") error = validatePhone(value)
    if (id === "password") error = validatePassword(value)
    if (id === "confirmPassword") error = validateConfirmPassword(value, formData.password)
    if (error) setErrors(prev => ({ ...prev, [id]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const fullNameError = validateFullName(formData.fullName)
    const phoneError = validatePhone(formData.phone)
    const passwordError = validatePassword(formData.password)
    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.password)
    
    if (fullNameError || phoneError || passwordError || confirmPasswordError) {
      setErrors({
        fullName: fullNameError,
        phone: phoneError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      })
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    router.push("/login")
  }

  return (
    <div className="w-full max-w-md">
      {/* Logo / Brand */}
      <div className="mb-10 text-center">
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

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-light text-white/90">
            ایجاد حساب کاربری
          </h2>
          <p className="mt-3 text-sm font-light text-white/40">
            به خانواده نقشینه بپیوندید
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-light text-white/50 mb-3">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="نام کامل خود را وارد کنید"
              className={`w-full bg-white/[0.03] border px-4 py-4 text-sm text-white/90 placeholder-white/20 transition-all focus:outline-none focus:bg-white/[0.05] ${
                errors.fullName 
                  ? 'border-red-500/50 focus:border-red-500/70' 
                  : 'border-white/10 focus:border-[oklch(0.72_0.06_80/0.5)]'
              }`}
            />
            {errors.fullName && (
              <p className="mt-2 text-xs text-red-400/80">{errors.fullName}</p>
            )}
          </div>

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
              placeholder="حداقل ۶ کاراکتر"
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

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-xs font-light text-white/50 mb-3">
              تکرار رمز عبور
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="رمز عبور را تکرار کنید"
              className={`w-full bg-white/[0.03] border px-4 py-4 text-sm text-white/90 placeholder-white/20 transition-all focus:outline-none focus:bg-white/[0.05] ${
                errors.confirmPassword 
                  ? 'border-red-500/50 focus:border-red-500/70' 
                  : 'border-white/10 focus:border-[oklch(0.72_0.06_80/0.5)]'
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-xs text-red-400/80">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Terms */}
          <p className="text-xs font-light text-white/30 leading-relaxed">
            با ثبت‌نام، شما{" "}
            <Link href="/terms" className="text-[oklch(0.72_0.06_80/0.7)] hover:text-[oklch(0.72_0.06_80)] transition-colors">
              شرایط و قوانین
            </Link>
            {" "}را می‌پذیرید.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="relative w-full py-4 text-sm font-light tracking-wide text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group mt-2"
            style={{
              background: 'linear-gradient(135deg, oklch(0.72 0.06 80) 0%, oklch(0.65 0.07 75) 100%)',
              boxShadow: '0 0 30px 0 oklch(0.72 0.06 80 / 0.2)',
            }}
          >
            <span className={`relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              ثبت‌نام
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

        {/* Login Link */}
        <p className="text-center text-sm font-light text-white/40">
          حساب کاربری دارید؟{" "}
          <Link 
            href="/login" 
            className="text-[oklch(0.72_0.06_80)] hover:text-[oklch(0.80_0.06_80)] transition-colors"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  )
}
