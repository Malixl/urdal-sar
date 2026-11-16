export default function Footer() {
  return (
    <footer className="mt-8 text-center text-xs text-[#94A3B8]">
      {/* Slogan */}
      <div className="mb-3 flex items-center justify-center gap-2">
        <span className="h-px w-6 bg-white/10"></span>
        <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#FF6B00]">
          Avignam Jagat Samagram
        </span>
        <span className="h-px w-6 bg-white/10"></span>
      </div>

      {/* Emergency Call Badge */}
      <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-semibold text-red-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </span>
        <span>Call Center Darurat SAR: 115 (Bebas Pulsa)</span>
      </div>

      {/* Copyright */}
      <p className="font-medium text-white/50">
        &copy; {new Date().getFullYear()} URDAL &bull; Kantor SAR Gorontalo
      </p>
      <p className="mt-1 text-[10px] text-white/30">
        Badan Nasional Pencarian dan Pertolongan (BASARNAS)
      </p>
    </footer>
  )
}

