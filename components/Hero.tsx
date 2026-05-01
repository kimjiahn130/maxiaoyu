export default function Hero() {
  return (
    <section className="relative h-[65vh] flex items-end justify-center overflow-hidden bg-black pb-16"> 
      {/* 배경 이미지 설정: 얼굴이 잘 보이도록 위치 유지 */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_25%] z-0 opacity-60"
        style={{ backgroundImage: "url('/images/main.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* 텍스트 영역: 아래로 더 내리고 폰트 굵기 조정 */}
      <div className="relative z-10 text-center mb-6"> 
        <h1 className="text-4xl md:text-5xl font-normal tracking-widest text-white mb-3">
          MA XIAO YU
        </h1>
        <p className="text-base md:text-lg text-[#D4AF37] font-light tracking-[0.4em] uppercase">
          CHINESE ACTOR
        </p>
      </div>
    </section>
  );
}