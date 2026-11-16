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
  {
    id: 'whatsapp',
    label: 'Hubungi Pak Yudha',
    subtitle: 'Kepala URDAL (+62 821-8785-8303)',
    href: 'https://wa.me/6282187858303?text=Halo%20Pak%20Yudha%2C%20saya%20ingin%20berkoordinasi%20dengan%20URDAL%20BASARNAS.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    badge: 'Langsung',
    style: 'whatsapp',
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
              : btn.style === 'outline'
                ? 'border-2 border-[#FF6B00]/45 bg-[#002244]/80 text-white hover:bg-[#FF6B00]/15 hover:border-[#FF6B00]/80 btn-orange-glow backdrop-blur-sm'
                : 'bg-gradient-to-r from-[#20ba59] to-[#25D366] text-white shadow-xl shadow-[#25D366]/25 btn-wa-glow border border-emerald-400/30'
            }
          `}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Icon / Image */}
          <div className={`
            flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl p-1.5 shadow-md
            ${btn.style === 'solid'
              ? 'bg-black/20 border border-white/20'
              : btn.style === 'outline'
                ? 'bg-white/10 border border-[#FF6B00]/30'
                : 'bg-white/20 border border-white/20'
            }
          `}>
            {btn.image ? (
              <img
                src={btn.image}
                alt={btn.label}
                className="h-full w-full object-contain rounded-lg"
              />
            ) : (
              btn.icon
            )}
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
                  : btn.style === 'outline'
                    ? 'bg-[#FF6B00]/20 text-[#FF8C33] border border-[#FF6B00]/30'
                    : 'bg-black/20 text-white'
                }
              `}>
                {btn.badge}
              </span>
            </div>
            <span className={`
              text-[12px] font-medium mt-0.5
              ${btn.style === 'whatsapp' ? 'text-white/80' : btn.style === 'solid' ? 'text-white/85' : 'text-[#94A3B8]'}
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

