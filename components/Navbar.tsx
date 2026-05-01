import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고: MAXIAOYU */}
        <Link href="/" className="text-xl font-medium tracking-widest text-white">
          
        </Link>

        {/* 메뉴: 마우스 오버 시 금색(#D4AF37)으로 변경 */}
        <div className="flex gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">HOME</Link>
          <Link href="/filmography" className="hover:text-[#D4AF37] transition-colors">FILMOGRAPHY</Link>
          <Link href="/award" className="hover:text-[#D4AF37] transition-colors">AWARD</Link>
          <Link href="/SNS" className="hover:text-[#D4AF37] transition-colors">SNS</Link>
        </div>
      </div>
    </nav>
  );
}