"use client"

import { useState, useEffect, useRef } from "react"

const propertySubLinks = [
  { label: "خرید", href: "#properties" },
  { label: "فروش", href: "#properties" },
  { label: "رهن", href: "#properties" },
  { label: "اجاره", href: "#properties" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 py-4 shadow-sm backdrop-blur-sm"
            : "bg-transparent py-6"
        }`}
      >
        {/* Top auth bar — desktop only */}
        <div className="hidden md:flex items-center justify-end px-6 pb-3 border-b border-current/10">
          <div className="mx-auto flex max-w-7xl w-full items-center justify-end">
            <div className="flex items-center gap-4">
              <a
                href="/login"
                className={`text-xs tracking-[0.15em] transition-colors ${
                  scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-white/90 hover:text-white"
                }`}
              >
                ورود
              </a>
              <a
                href="/signup"
                className={`px-3 py-1.5 text-xs tracking-[0.15em] transition-all ${
                  scrolled
                    ? "border border-accent bg-accent text-white hover:bg-accent/90"
                    : "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                }`}
              >
                ثبت‌نام
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span
              className={`font-serif text-lg tracking-wide transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Naghshineh
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] transition-colors ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              ESTATES
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {/* املاک with dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-xs tracking-[0.15em] transition-colors ${
                  scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <a href="#properties">املاک</a>
                {/* Chevron */}
                <svg
                  className={`h-3 w-3 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute right-0 top-full pt-3 transition-all duration-200 ${
                  dropdownOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div
                  className={`min-w-[120px] border py-2 ${
                    scrolled
                      ? "border-border bg-background"
                      : "border-white/20 bg-black/70 backdrop-blur-md"
                  }`}
                >
                  {propertySubLinks.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-5 py-2.5 text-xs tracking-[0.1em] transition-colors ${
                        scrolled
                          ? "text-foreground hover:text-accent hover:bg-muted/50"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#about"
              className={`text-xs tracking-[0.15em] transition-colors ${
                scrolled
                  ? "text-foreground hover:text-accent"
                  : "text-white/90 hover:text-white"
              }`}
            >
              درباره ما
            </a>
            <a
              href="#services"
              className={`text-xs tracking-[0.15em] transition-colors ${
                scrolled
                  ? "text-foreground hover:text-accent"
                  : "text-white/90 hover:text-white"
              }`}
            >
              خدمات
            </a>
            <a
              href="#contact"
              className={`text-xs tracking-[0.15em] transition-colors ${
                scrolled
                  ? "text-foreground hover:text-accent"
                  : "text-white/90 hover:text-white"
              }`}
            >
              تماس
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-12 w-12 items-center justify-center md:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="باز کردن منو"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-6 transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                } ${scrolled ? "bg-foreground" : "bg-white"}`}
              />
              <span
                className={`block h-px w-6 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                } ${scrolled ? "bg-foreground" : "bg-white"}`}
              />
              <span
                className={`block h-px w-6 transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                } ${scrolled ? "bg-foreground" : "bg-white"}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-8">
          {/* املاک with sub-links accordion */}
          <div className="flex w-full max-w-xs flex-col items-center">
            <button
              onClick={() => setMobilePropertiesOpen((v) => !v)}
              className="flex items-center gap-2 text-2xl font-light text-foreground transition-colors hover:text-accent active:text-accent"
            >
              <span>املاک</span>
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobilePropertiesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Sub-links */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobilePropertiesOpen ? "mt-4 max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                {propertySubLinks.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={() => { setMenuOpen(false); setMobilePropertiesOpen(false) }}
                    className="text-base font-light text-muted-foreground transition-colors hover:text-accent active:text-accent"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Auth buttons for mobile — top of menu */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-light text-foreground transition-colors hover:text-accent active:text-accent"
            >
              ورود
            </a>
            <a
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 border border-accent bg-accent text-white text-xs tracking-[0.15em] transition-all hover:bg-accent/90"
            >
              ثبت‌نام
            </a>
          </div>

          {/* Thin divider */}
          <div className="h-px w-16 bg-border mb-6" />

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-light text-foreground transition-colors hover:text-accent active:text-accent"
          >
            درباره ما
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-light text-foreground transition-colors hover:text-accent active:text-accent"
          >
            خدمات
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-light text-foreground transition-colors hover:text-accent active:text-accent"
          >
            تماس
          </a>

          {/* Thin divider */}
          <div className="h-px w-16 bg-border mt-4" />
        </nav>
      </div>
    </>
  )
}
