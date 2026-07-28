import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { CategorySection } from "@/components/category-section"
import { ProjectsSection } from "@/components/projects-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - Full Screen */}
      <HeroSection />

      {/* Featured Properties Section */}
      <section id="properties">
        <FeaturedProperties />
      </section>

      {/* Category Section */}
      <CategorySection />

      {/* Signature Projects */}
      <ProjectsSection />

      {/* Brand Philosophy */}
      <PhilosophySection />

      {/* About the Brand Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
