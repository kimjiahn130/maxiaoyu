import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MA XIAO YU_马小宇",
  description: "Dedicated to actor Ma Xiao-yu",
  // 카톡이나 SNS 공유용 제목을 아래에 한 번 더 적어주는 거예요
  openGraph: {
    title: "MA XIAO YU_马小宇",
    description: "Dedicated to actor Ma Xiao-yu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
