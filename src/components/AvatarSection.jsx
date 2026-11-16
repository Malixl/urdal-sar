export default function AvatarSection() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Top agency header bar */}
      <div className="mb-6 flex w-full items-center justify-between rounded-full border border-white/10 bg-black/20 px-3.5 py-1.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <img
            src="/images/logo-basarnas.png"
            alt="BASARNAS"
            className="h-6 w-auto object-contain drop-shadow"
          />
          <span className="text-[11px] font-bold tracking-wider text-white">
            BASARNAS
          </span>
        </div>
        <div className="h-3 w-px bg-white/20" />
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8C33]">
            SAR Gorontalo
          </span>
          <img
            src="/images/logo-gorontalo.png"
            alt="SAR Gorontalo"
            className="h-6 w-auto object-contain drop-shadow"
          />
        </div>
      </div>

      {/* Main Avatar with animated glow ring */}
      <div className="relative mb-4">
        {/* Outer pulsing glow */}
        <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-[#FF6B00] via-[#FF8C33] to-[#FF4500] opacity-35 blur-md animate-glow-pulse" />

        {/* Avatar container */}
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#FF6B00] shadow-2xl shadow-[#FF6B00]/40 animate-float sm:h-32 sm:w-32">
          <img
            src="/images/logo-urdal-squad.jpg"
            alt="URDAL Squad Logo"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Live operational status badge */}
        <div className="absolute bottom-1 right-1 flex items-center justify-center rounded-full border-2 border-[#001a33] bg-[#25D366] p-1 shadow-md" title="Siap Melayani">
          <div className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
        </div>
      </div>

      {/* Profile Title */}
      <h1 className="text-[28px] font-extrabold leading-tight tracking-[-0.5px] text-white sm:text-[32px]">
        URDAL SAR
      </h1>

      {/* Role / Subtitle */}
      <div className="mt-1 flex items-center gap-2">
        <span className="h-px w-4 bg-[#FF6B00]/60" />
        <p className="text-[13px] font-bold uppercase tracking-[3px] text-[#FF6B00] sm:text-sm">
          Urusan Dalam
        </p>
        <span className="h-px w-4 bg-[#FF6B00]/60" />
      </div>

      {/* Unit badge */}
      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
        <span className="text-[11px] font-semibold text-orange-200">
          Sub Bagian Umum &bull; Operasional Internal
        </span>
      </div>
    </div>
  )
}

