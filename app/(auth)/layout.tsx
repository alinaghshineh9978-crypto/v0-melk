import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ورود | مجموعه نقشینه",
  description: "ورود به پنل کاربری مجموعه نقشینه - املاک لوکس",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[oklch(0.08_0_0)]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Warm gold ambient glow - top right */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[oklch(0.72_0.06_80/0.08)] blur-[120px]" />
        
        {/* Subtle gold ambient glow - bottom left */}
        <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-[oklch(0.72_0.06_80/0.05)] blur-[150px]" />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.08_0_0)_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Brand watermark - bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase">
          Naghshineh Collection
        </p>
      </div>
    </div>
  )
}
