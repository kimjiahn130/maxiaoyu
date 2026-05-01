'use client';

export default function FilmographyPage() {
  const projects = [
    // 2026년 & 미방영
    { year: "2026", date: "미정", titleZh: "囚鸟之恋", titleKo: "수조지련", role: "-", partner: "손천심", type: "주연" },
    { year: "2026", date: "미정", titleZh: "心花路放", titleKo: "심화로방", role: "-", partner: "장초훤", type: "주연" },
    { year: "2026", date: "03.28", titleZh: "许你万丈光芒好", titleKo: "허니만장광망호", role: "육팅샤오", partner: "장초훤", type: "주연" },
    { year: "2026", date: "03.12", titleZh: "心动决定", titleKo: "심동결정", role: "육침", partner: "장초훤", type: "주연" },
    { year: "2026", date: "02.25", titleZh: "华丽的缰绳", titleKo: "화려한 강정", role: "로익", partner: "호원군", type: "주연" },
    { year: "2026", date: "01.14", titleZh: "陷落京霓", titleKo: "함락경예", role: "조종란", partner: "위인", type: "주연" },
    

    // 2025년
    { year: "2025", date: "08.04", titleZh: "他好野", titleKo: "타호야", role: "치항", partner: "상운결", type: "주연" },
    { year: "2025", date: "07.08", titleZh: "临时的天堂", titleKo: "임시적천당", role: "쿤타이", partner: "마추원", type: "주연" },
    { year: "2025", date: "05.19", titleZh: "痴人之爱", titleKo: "치인지애", role: "-", partner: "왕격격", type: "주연" },
    { year: "2025", date: "03.15", titleZh: "欢迎入局", titleKo: "환영입국", role: "심위", partner: "장초훤", type: "주연" },
    { year: "2025", date: "02.10", titleZh: "相爱就在给家时", titleKo: "상애취재급가시", role: "-", partner: "호원군", type: "주연" },
    { year: "2025", date: "01.05", titleZh: "黑月光挺白月光", titleKo: "흑월광정백월광", role: "-", partner: "위인", type: "주연" },
    { year: "2025", date: "-", titleZh: "清风只有你", titleKo: "청풍지유니", role: "-", partner: "손천심", type: "주연" },
    { year: "2025", date: "-", titleZh: "如梦醒时", titleKo: "여몽성시", role: "-", partner: "장초훤", type: "주연" },
    { year: "2025", date: "-", titleZh: "难你不可", titleKo: "난니불가", role: "-", partner: "호원군", type: "주연" },
    { year: "2025", date: "-", titleZh: "你是我的深渊", titleKo: "니시아적심연", role: "-", partner: "위인", type: "주연" },

    // 2024년
    { year: "2024", date: "12.20", titleZh: "花非花雾非雾", titleKo: "화비화무비무", role: "-", partner: "장초훤", type: "주연" },
    { year: "2024", date: "11.15", titleZh: "在美好的时光遇见你", titleKo: "재미호적시광우견니", role: "-", partner: "호원군", type: "주연" },
    { year: "2024", date: "10.02", titleZh: "只是赌性太霸道", titleKo: "지시도성태파도", role: "-", partner: "위인", type: "주연" },
    { year: "2024", date: "08.14", titleZh: "晨星", titleKo: "신성", role: "-", partner: "장초훤", type: "주연" },
    { year: "2024", date: "07.01", titleZh: "不能抹杀的过去", titleKo: "불능말살적과거", role: "-", partner: "호원군", type: "주연" },
    { year: "2024", date: "05.20", titleZh: "爱在三秋", titleKo: "애재삼추", role: "-", partner: "위인", type: "주연" },
    { year: "2024", date: "04.12", titleZh: "他命中注定", titleKo: "타명중주정", role: "-", partner: "손천심", type: "주연" },
    { year: "2024", date: "03.05", titleZh: "致命攻略", titleKo: "치명공략", role: "-", partner: "마추원", type: "주연" },
    { year: "2024", date: "01.20", titleZh: "最后的告白", titleKo: "최후적고백", role: "-", partner: "장초훤", type: "주연" },

    // 2023년
    { year: "2023", date: "12.10", titleZh: "有你在平安", titleKo: "유니재평안", role: "-", partner: "호원군", type: "주연" },
    { year: "2023", date: "11.02", titleZh: "我们在一起", titleKo: "아문재일기", role: "-", partner: "장초훤", type: "주연" },
    { year: "2023", date: "10.25", titleZh: "星星坠入梦", titleKo: "성성추입몽", role: "-", partner: "위인", type: "주연" },
    { year: "2023", date: "09.18", titleZh: "只是我爱你", titleKo: "지시아애니", role: "-", partner: "장초훤", type: "주연" },
    { year: "2023", date: "08.15", titleZh: "你是我的独家罪", titleKo: "니시아적독가정죄", role: "-", partner: "장초훤", type: "주연" },
    { year: "2023", date: "07.22", titleZh: "他不是爱你", titleKo: "타부시아애니", role: "-", partner: "호원군", type: "주연" },
    { year: "2023", date: "06.01", titleZh: "秘心", titleKo: "비심", role: "-", partner: "호원군", type: "주연" },
    { year: "2023", date: "05.12", titleZh: "最有我的心", titleKo: "최유아적심", role: "-", partner: "위인", type: "주연" },
    { year: "2023", date: "04.14", titleZh: "情人不可欺", titleKo: "정인불가기", role: "-", partner: "위인", type: "주연" },
    { year: "2023", date: "03.08", titleZh: "我们的爱情", titleKo: "아문적애정", role: "-", partner: "장초훤", type: "주연" },
    { year: "2023", date: "02.14", titleZh: "爱有多心", titleKo: "애유다심", role: "-", partner: "호원군", type: "주연" },
    { year: "2023", date: "01.05", titleZh: "再见爱情", titleKo: "재견애정", role: "-", partner: "위인", type: "주연" },

    // 2022년
    { year: "2022", date: "12.24", titleZh: "爱的告别", titleKo: "애적고별", role: "-", partner: "호원군", type: "주연" },
    { year: "2022", date: "11.20", titleZh: "无非我的全部", titleKo: "무비시아적전부", role: "-", partner: "장초훤", type: "조연" },
    { year: "2022", date: "10.15", titleZh: "深爱的你", titleKo: "심애적니", role: "-", partner: "장초훤", type: "조연" },
    { year: "2022", date: "09.05", titleZh: "她是我的定制", titleKo: "타시아적정죄", role: "-", partner: "호원군", type: "조연" },
    { year: "2022", date: "08.12", titleZh: "情花", titleKo: "정화", role: "-", partner: "위인", type: "조연" },
    { year: "2022", date: "07.01", titleZh: "爱的选择", titleKo: "애적선택", role: "-", partner: "장초훤", type: "조연" },
    { year: "2022", date: "05.20", titleZh: "我们的时光", titleKo: "아문적시광", role: "-", partner: "호원군", type: "조연" },
    { year: "2022", date: "04.14", titleZh: "爱在一起", titleKo: "애재일기", role: "-", partner: "위인", type: "조연" },
    { year: "2022", date: "03.02", titleZh: "爱的奇迹", titleKo: "애적기적", role: "-", partner: "장초훤", type: "조연" },
    { year: "2022", date: "01.10", titleZh: "只是我的爱", titleKo: "지시아적애", role: "-", partner: "호원군", type: "조연" }
  ];

  const varietyHistory = [
    {
      year: "2024",
      titleZh: "《当红派对》", titleKo: "엘르(ELLE) 당홍파티",
      role: "공식 초청 게스트 / 레드카펫",
      platform: "ELLE China"
    },
    {
      year: "2024",
      titleZh: "《红果短剧年度大赏》", titleKo: "홍궈 숏드라마 연도대상",
      role: "TOP 10 아티스트 초청 출연",
      platform: "Hongguo / Douyin"
    },
    {
      year: "2023",
      titleZh: "《微短剧金剧奖》", titleKo: "숏드라마 금극상 페스티벌",
      role: "부문별 게스트 및 홍보 활동",
      platform: "Douyin"
    },
    {
      year: "2021",
      titleZh: "《校园戏剧节》", titleKo: "캠퍼스 드라마 페스티벌",
      role: "메인 연극 무대 주연",
      platform: "Offline"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* 드라마 필모그래피 섹션 */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 border-b-2 border-[#D4AF37] pb-2 inline-block text-[#D4AF37]">
            FILMOGRAPHY
          </h1>
          <p className="text-gray-400 mt-4 italic text-sm md:text-base">배우 마소우의 모든 발자취를 기록합니다.</p>
        </div>

        <div className="overflow-x-auto mb-24 bg-zinc-950/50 rounded-xl border border-zinc-900 p-2 md:p-4">
          <table className="w-full text-left border-collapse table-fixed md:table-auto">
            <thead>
              <tr className="border-b-2 border-zinc-800 text-[#D4AF37] text-xs md:text-lg uppercase tracking-wider">
                <th className="py-4 px-2 w-[15%] md:w-auto">연도</th>
                <th className="py-4 px-2 hidden md:table-cell">방영일</th>
                <th className="py-4 px-2 w-[65%] md:w-[40%]">제목</th>
                <th className="py-4 px-2 hidden md:table-cell">역할</th>
                <th className="py-4 px-2 hidden md:table-cell">상대 배우</th>
                <th className="py-4 px-2 w-[20%] md:w-auto text-right md:text-left text-[10px] md:text-lg">구분</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((item, index) => (
                <tr key={index} className="border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors group">
                  <td className="py-4 px-2 font-mono text-zinc-500 text-xs md:text-base">{item.year}</td>
                  <td className="py-4 px-2 font-mono text-zinc-600 text-sm hidden md:table-cell">{item.date}</td>
                  <td className="py-4 px-2">
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-100 group-hover:text-[#D4AF37] text-sm md:text-lg leading-tight">
                        {item.titleKo}
                      </span>
                      <span className="text-zinc-500 text-[10px] md:text-xs font-light mt-1">
                        {item.titleZh}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-zinc-400 text-sm hidden md:table-cell">{item.role}</td>
                  <td className="py-4 px-2 text-zinc-500 text-sm hidden md:table-cell">{item.partner}</td>
                  <td className="py-4 px-2 text-right md:text-left">
                    <span className={`px-2 py-0.5 rounded-[4px] text-[9px] md:text-xs font-medium ${item.type === '주연' ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20' : 'bg-zinc-800 text-zinc-500'}`}>
                      {item.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 예능 및 이벤트 섹션 (하늘색 테마) */}
        <section className="bg-zinc-950 p-6 md:p-12 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
          {/* 장식용 배경 요소 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFFF]/5 blur-[100px] -z-10"></div>
          
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00BFFF] uppercase tracking-tighter mb-2">
              Variety & Events
            </h2>
            <div className="h-1 w-16 bg-[#00BFFF]"></div>
            <p className="text-zinc-500 mt-4 text-sm md:text-base font-light">
              마샤오위 배우의 공식 예능 및 페스티벌 출연 기록입니다.
            </p>
          </div>

          {/* 데스크탑 테이블 (웹) */}
          <div className="hidden md:block overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[#00BFFF] text-xs tracking-[0.2em] uppercase border-b border-zinc-800">
                  <th className="py-5 px-4 font-semibold">Year</th>
                  <th className="py-5 px-4 font-semibold">Program / Event</th>
                  <th className="py-5 px-4 font-semibold">Activity</th>
                  <th className="py-5 px-4 font-semibold text-right">Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                {varietyHistory.map((item, idx) => (
                  <tr key={idx} className="group hover:bg-[#00BFFF]/5 transition-all">
                    <td className="py-8 px-4 text-zinc-500 font-medium">{item.year}</td>
                    <td className="py-8 px-4">
                      <div className="text-xl font-bold text-zinc-100 group-hover:text-[#00BFFF] transition-colors mb-1">
                        {item.titleZh}
                      </div>
                      <div className="text-sm text-zinc-500 font-light">{item.titleKo}</div>
                    </td>
                    <td className="py-8 px-4 text-zinc-400 font-light">{item.role}</td>
                    <td className="py-8 px-4 text-right">
                       <span className="text-[#00BFFF] text-xs font-bold border border-[#00BFFF]/30 px-3 py-1 rounded-full bg-[#00BFFF]/5 uppercase">
                        {item.platform}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 모바일 카드 리스트 (모바일) */}
          <div className="md:hidden space-y-6">
            {varietyHistory.map((item, idx) => (
              <div key={idx} className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#00BFFF] opacity-70"></div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#00BFFF] font-black text-lg">{item.year}</span>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-widest">{item.platform}</span>
                </div>
                <div className="space-y-1 mb-4">
                  <p className="text-xl font-bold text-zinc-100 leading-tight">{item.titleZh}</p>
                  <p className="text-sm text-zinc-500 font-light">{item.titleKo}</p>
                </div>
                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}