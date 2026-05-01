'use client';

export default function AwardPage() {
  // 수상 및 시상식 참석 데이터 (중국어/한국어 병기)
  const awardHistory = [
    { 
      year: "2025", 
      eventZh: "爱奇艺荧光之夜", eventKo: "아이치이 형광의 밤",
      awardZh: "荧光之星", awardKo: "형광의 별 (荧光之星)",
      status: "WINNER" 
    },
    { 
      year: "2025", 
      eventZh: "红果短剧年度大赏", eventKo: "2025 홍궈 숏드라마 연도대상",
      awardZh: "年度TOP 10男演员", awardKo: "올해의 TOP 10 남자 배우",
      status: "WINNER" 
    },
    { 
      year: "2025", 
      eventZh: "东方卫视微短剧品质盛典", eventKo: "동방위성 TV 숏드라마 품질 성전",
      awardZh: "热力先锋剧星", awardKo: "열력선봉 극성 (热力先锋剧星)",
      status: "WINNER" 
    },
    { 
      year: "2024", 
      eventZh: "ELLE #当红派对", eventKo: "ELLE 당홍파티 (당홍표면)",
      awardZh: "当红派对 嘉宾", awardKo: "당홍파티 공식 초청 게스트",
      status: "ATTENDED" 
    },
    { 
      year: "2024", 
      eventZh: "剧查查之夜", eventKo: "쥐차차의 밤",
      awardZh: "年度星耀艺人", awardKo: "올해의 스타 배우 (年度星耀艺人)",
      status: "WINNER" 
    },
    { 
      year: "2024", 
      eventZh: "红果短剧年度大赏", eventKo: "2024 홍궈 숏드라마 어워즈",
      awardZh: "年度大众喜爱男演员", awardKo: "올해의 대중 인기 남자 배우 (TOP 6)",
      status: "WINNER" 
    },
    { 
      year: "2024", 
      eventZh: "第二届短剧金海豹奖", eventKo: "제2회 숏드라마 금해표상 (선전)",
      awardZh: "年度影响力演员", awardKo: "올해의 영향력 있는 배우",
      status: "WINNER" 
    },
    { 
      year: "2023", 
      eventZh: "短剧优选大典", eventKo: "숏드라마 우수 셀렉션 대전",
      awardZh: "最佳男主角", awardKo: "최우수 남주인공 상",
      status: "WINNER" 
    },
    { 
      year: "2022", 
      eventZh: "四川艺术节", eventKo: "제3회 사천 예술제",
      awardZh: "突破表演奖", awardKo: "브레이크스루 연기상",
      status: "WINNER" 
    },
    { 
      year: "2021", 
      eventZh: "校园戏剧节", eventKo: "캠퍼스 드라마 페스티벌",
      awardZh: "最佳男主角", awardKo: "최우수 남주인공 노미네이트",
      status: "NOMINATED" 
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* 헤더 */}
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-[#D4AF37] uppercase mb-2">
            Professional Awards
          </h1>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto md:mx-0"></div>
        </header>

        {/* 하이라이트 섹션 (최근 수상) */}
        <section className="mb-24 bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 aspect-[4/5] bg-zinc-900">
            <img 
              src="/images/image_4b9db9.jpg" 
              alt="Ma Xiaoyu 2025 iQIYI Awards" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] mb-4 text-sm uppercase">Highlight</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              2025 爱奇艺荧光之夜 <br/>
              <span className="text-zinc-400 text-2xl md:text-3xl font-light italic text-zinc-500">iQIYI Awards Night</span>
            </h2>
            <p className="text-xl text-[#D4AF37] mb-8 font-medium">荧光之星 | 형광의 별 수상</p>
            <div className="border-t border-zinc-800 pt-8">
               <p className="text-zinc-500 leading-relaxed text-lg italic font-light">
                "2025년 마샤오위 배우의 글로벌 도약을 증명하는 첫 번째 영광의 기록입니다."
               </p>
            </div>
          </div>
        </section>

        {/* 어워즈 리스트 */}
        <section>
          <h3 className="text-2xl font-bold mb-10 text-zinc-300 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
            Career Timeline
          </h3>

          {/* PC Web (Table) */}
          <div className="hidden md:block overflow-hidden border-t border-zinc-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-950 text-[#D4AF37] text-xs tracking-widest uppercase">
                  <th className="py-6 px-4 font-semibold border-b border-zinc-800">Year</th>
                  <th className="py-6 px-4 font-semibold border-b border-zinc-800">Ceremony (중문/한문)</th>
                  <th className="py-6 px-4 font-semibold border-b border-zinc-800">Award Title (수상 항목)</th>
                  <th className="py-6 px-4 font-semibold border-b border-zinc-800 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {awardHistory.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/50 transition-colors border-b border-zinc-900">
                    <td className="py-8 px-4 text-zinc-500 font-medium">{item.year}</td>
                    <td className="py-8 px-4">
                      <div className="text-zinc-100 font-bold mb-1">{item.eventZh}</div>
                      <div className="text-zinc-500 text-sm font-light">{item.eventKo}</div>
                    </td>
                    <td className="py-8 px-4">
                      <div className="text-[#D4AF37] font-bold mb-1">{item.awardZh}</div>
                      <div className="text-zinc-400 text-sm font-light">{item.awardKo}</div>
                    </td>
                    <td className="py-8 px-4 text-center">
                      <span className={`px-3 py-1 rounded text-[10px] font-bold ${
                        item.status === 'WINNER' ? 'bg-[#D4AF37] text-black' : 
                        item.status === 'ATTENDED' ? 'bg-blue-900/30 text-blue-400 border border-blue-900/50' :
                        'bg-zinc-800 text-zinc-500'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile (Cards) */}
          <div className="md:hidden space-y-6">
            {awardHistory.map((item, idx) => (
              <div key={idx} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#D4AF37] font-bold text-lg">{item.year}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    item.status === 'WINNER' ? 'bg-[#D4AF37] text-black' : 
                    item.status === 'ATTENDED' ? 'bg-blue-400 text-black' :
                    'bg-zinc-800 text-zinc-500'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-zinc-100 font-bold text-lg leading-tight mb-1">{item.eventZh}</p>
                    <p className="text-zinc-500 text-sm font-light">{item.eventKo}</p>
                  </div>
                  <div className="pt-3 border-t border-zinc-800">
                    <p className="text-[#D4AF37] font-bold leading-tight mb-1">{item.awardZh}</p>
                    <p className="text-zinc-400 text-sm font-light">{item.awardKo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}