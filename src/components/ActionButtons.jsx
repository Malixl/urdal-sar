const buttons = [
  {
    id: 'siabos',
    label: 'SIABOS',
    subtitle: 'Aplikasi Absen',
    href: 'https://siabos.freedev.app/login',
    image: '/images/logo-korps-garuda.png',
    badge: 'Absensi',
    style: 'solid',
  },
  {
    id: 'siar',
    label: 'SIAR',
    subtitle: 'Aplikasi Inventaris',
    href: 'https://script.google.com/macros/s/AKfycbwRWMP2cQG4xP-R2LbldDF9z0bm5DTt7NKd9cL6I7E/dev',
    image: '/images/logo-urdal-squad.jpg',
    badge: 'Logistik',
    style: 'outline',
  },
]

export default function ActionButtons() {
  return (
    <div className="mt-8 flex flex-col gap-3.5">
      {buttons.map((btn, index) => (
        <a
          key={btn.id}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            btn-hover-scale group relative flex items-center gap-4 rounded-2xl px-5 py-4 
            transition-all duration-300 min-h-[68px]
            ${btn.style === 'solid'
              ? 'bg-gradient-to-r from-[#FF6B00] via-[#FF7711] to-[#FF8C33] text-white shadow-xl shadow-[#FF6B00]/25 btn-orange-glow border border-orange-400/30'
              : 'border-2 border-[#FF6B00]/45 bg-[#002244]/80 text-white hover:bg-[#FF6B00]/15 hover:border-[#FF6B00]/80 btn-orange-glow backdrop-blur-sm'
            }
          `}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Icon / Image */}
          <div className={`
            flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl p-1.5 shadow-md
            ${btn.style === 'solid'
              ? 'bg-black/20 border border-white/20'
              : 'bg-white/10 border border-[#FF6B00]/30'
            }
          `}>
            <img
              src={btn.image}
              alt={btn.label}
              className="h-full w-full object-contain rounded-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-extrabold tracking-tight leading-tight">
                {btn.label}
              </span>
              <span className={`
                rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider
                ${btn.style === 'solid'
                  ? 'bg-white/25 text-white'
                  : 'bg-[#FF6B00]/20 text-[#FF8C33] border border-[#FF6B00]/30'
                }
              `}>
                {btn.badge}
              </span>
            </div>
            <span className={`
              text-[12px] font-medium mt-0.5
              ${btn.style === 'solid' ? 'text-white/85' : 'text-[#94A3B8]'}
            `}>
              {btn.subtitle}
            </span>
          </div>

          {/* Arrow with Pulse */}
          <div className="ml-auto flex items-center justify-center h-8 w-8 rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
            <svg className="h-4 w-4 opacity-80" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  )
}

