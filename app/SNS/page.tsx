export default function SNSPage() {
  const snsList = [
    { 
      platform: "Weibo (微博)", 
      id: "马小宇Mx", 
      detail: "Official Weibo Account", 
      link: "https://weibo.com/u/7801971461" 
    },
    { 
      platform: "Douyin (抖音)", 
      id: "马小宇", 
      detail: "ID: mxiaoyu0816", 
      link: "https://v.douyin.com/wnnDNk0cxu8/" 
    },
    { 
      platform: "Xiaohongshu (小红书)", 
      id: "马小宇", 
      detail: "207.6K Likes & Saves", 
      link: "https://xhslink.com/m/57kRLrXVYsi" 
    },
    { 
      platform: "Instagram", 
      id: "maxiaoyu_tichy", 
      detail: "Official Instagram Account", 
      link: "https://www.instagram.com/maxiaoyu_tichy" 
    },
    { 
      platform: "TikTok", 
      id: "Woody", 
      detail: "@woodytichy", 
      link: "https://www.tiktok.com/@woodytichy?_r=1&_t=ZS-95zvqs6ZLFM" 
    }
  ];

  return (
    // 아까 말씀드린 대로 pb-20이 포함된 36행을 유지해 주세요!
    <main className="min-h-screen bg-black text-white pt-32 md:pt-40 px-6 pb-20 font-normal">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-12 border-b border-[#D4AF37] pb-4 tracking-[0.2em] text-[#D4AF37]">
          OFFICIAL SNS
        </h2>

        <div className="grid grid-cols-1 gap-y-6">
          {snsList.map((sns, index) => (
            <a 
              key={index} 
              href={sns.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-white/10 rounded-lg hover:border-[#D4AF37] transition-all duration-300 bg-zinc-900/30"
            >
              <div>
                <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-widest mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {sns.platform}
                </p>
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                  <p className="text-xl md:text-2xl font-medium">
                    {sns.id}
                  </p>
                  <p className="text-zinc-500 text-sm font-light mt-1">
                    {sns.detail}
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-widest font-medium">
                VISIT PROFILE →
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
  