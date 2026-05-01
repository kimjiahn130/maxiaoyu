import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-normal overflow-x-hidden">
      <Hero />

      {/* PROFILE SECTION: 오와 열 및 간격 최적화 */}
      <section className="max-w-6xl mx-auto py-12 md:py-32 px-4 md:px-6">
        <div className="bg-zinc-950 p-6 md:p-16 rounded-2xl md:rounded-3xl border border-zinc-900 shadow-2xl relative overflow-hidden">
          
          <div className="mb-10 md:mb-16">
            <h2 className="text-xl md:text-3xl font-medium text-[#D4AF37] uppercase tracking-[0.2em] mb-4">
              Profile
            </h2>
            <div className="h-[1px] w-full bg-[#D4AF37]/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-24 lg:gap-x-32">
            
            {/* 1열: 성명, 국적, 민족, 출신지 */}
            <div className="space-y-8 md:space-y-12">
              {[
                { label: "Name", value: "마소우 (马小宇)" },
                { label: "Nationality", value: "중국 (China)" },
                { label: "Ethnicity", value: "한족 (Han)" },
                { label: "From", value: "안후이성 (安徽省)" }
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">{item.label}</p>
                  <div className="h-[1px] w-full bg-zinc-800 mb-3"></div>
                  <p className="text-lg md:text-xl font-bold text-zinc-100">{item.value}</p>
                </div>
              ))}
            </div>

            {/* 2열: 학력, 생일, MBTI */}
            <div className="space-y-8 md:space-y-12">
              {[
                { label: "Education", value: "사천영화텔레비전대학 공연예술전공" },
                { label: "Birth / Zodiac", value: "1997. 08. 16 / 사자자리" },
                { label: "MBTI", value: "INFJ" }
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">{item.label}</p>
                  <div className="h-[1px] w-full bg-zinc-800 mb-3"></div>
                  <p className="text-base md:text-lg text-zinc-200 leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>

            {/* 3열: 키와 몸무게 */}
            <div className="space-y-8 md:space-y-12">
              {[
                { label: "Height", value: "190cm" },
                { label: "Weight", value: "80kg" }
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">{item.label}</p>
                  <div className="h-[1px] w-full bg-zinc-800 mb-3"></div>
                  <p className="text-lg md:text-xl font-semibold text-zinc-100">{item.value}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER: 웹 화면 글자 크기 대폭 확대 및 밸런스 조정 */}
      <footer className="w-full bg-black py-24 md:py-36 px-6 border-t border-zinc-900/50">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* 1. 응원 문구 (웹에서 더 크게 보이도록 수정) */}
          <div className="text-center mb-14 md:mb-20 space-y-4 md:space-y-6 w-full">
            <p className="text-[11px] md:text-lg lg:text-xl text-zinc-300 font-light tracking-tight md:tracking-normal break-keep leading-relaxed">
              이 페이지는 배우 마소우(马小宇)를 응원하는 마음으로 제작되었습니다.
            </p>
            <p className="text-[9px] md:text-xs text-zinc-600 font-mono tracking-[0.2em] md:tracking-[0.4em] uppercase">
              © 2026 MAXIAOYU.KR. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* 2. 제작자 정보 (안안 案안 폰트 및 크기 밸런스 조정) */}
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <p className="text-zinc-600 text-[9px] md:text-xs tracking-[0.4em] uppercase font-medium">
              Designed & Developed by
            </p>
            <div className="flex items-center gap-3">
              <span className="text-base md:text-2xl font-light text-zinc-300 tracking-tight font-sans">
                안안 <span className="text-zinc-300/80 ml-1 font-normal text-sm md:text-xl">案案</span>
              </span>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}