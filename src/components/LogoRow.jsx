const logos = [
  {
    src: '/images/logo-basarnas.png',
    alt: 'Badan Nasional Pencarian dan Pertolongan (BASARNAS)',
    title: 'BASARNAS',
  },
  {
    src: '/images/logo-sar-nasional.png',
    alt: 'Avignam Jagat Samagram - SAR Nasional',
    title: 'SAR Nasional',
  },
  {
    src: '/images/logo-gorontalo.png',
    alt: 'Kantor SAR Gorontalo',
    title: 'SAR Gorontalo',
  },
]

export default function LogoRow() {
  return (
    <div className="mt-5 flex items-center justify-center gap-4 sm:gap-6">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="logo-row-item group relative flex items-center justify-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm transition-all duration-300 group-hover:border-[#FF6B00]/50 group-hover:bg-[#FF6B00]/10 group-hover:shadow-lg group-hover:shadow-[#FF6B00]/20 sm:h-14 sm:w-14">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-full object-contain filter drop-shadow"
              loading="lazy"
            />
          </div>

          {/* Micro Tooltip */}
          <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 z-20 border border-white/10">
            {logo.title}
          </div>
        </div>
      ))}
    </div>
  )
}

