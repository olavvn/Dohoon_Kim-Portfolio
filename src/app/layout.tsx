import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김도훈 · AI & Data Engineer",
  description: "AI를 실제로 운영되는 시스템까지 연결하는 엔지니어 김도훈의 포트폴리오입니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
