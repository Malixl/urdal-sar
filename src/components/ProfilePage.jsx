import { useEffect, useState } from 'react'
import ParticleBackground from './ParticleBackground'
import AvatarSection from './AvatarSection'
import LogoRow from './LogoRow'
import DescriptionSection from './DescriptionSection'
import ActionButtons from './ActionButtons'
import Footer from './Footer'

export default function ProfilePage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-['Plus_Jakarta_Sans']">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#003366] via-[#001a33] to-[#002244] animate-gradient-shift" />

      {/* Particle effects */}
      <ParticleBackground />

      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-[440px]">
          {/* Glass card container */}
          <div className="glass-card rounded-3xl border border-white/[0.08] bg-white/[0.04] px-6 py-10 shadow-2xl sm:px-8">
            {/* Avatar & Title */}
            <div className={loaded ? 'animate-scale-in delay-0' : 'opacity-0'}>
              <AvatarSection />
            </div>

            {/* Logo row */}
            <div className={loaded ? 'animate-slide-up delay-300' : 'opacity-0'}>
              <LogoRow />
            </div>

            {/* Divider */}
            <div className={loaded ? 'animate-fade-in delay-400' : 'opacity-0'}>
              <div className="mx-auto my-6 h-px w-16 bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent" />
            </div>

            {/* Description */}
            <div className={loaded ? 'animate-slide-up delay-500' : 'opacity-0'}>
              <DescriptionSection />
            </div>

            {/* Buttons */}
            <div className={loaded ? 'animate-slide-up delay-700' : 'opacity-0'}>
              <ActionButtons />
            </div>
          </div>

          {/* Footer */}
          <div className={loaded ? 'animate-fade-in delay-1200' : 'opacity-0'}>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

