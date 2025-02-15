import type { Metadata } from "next";
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: "SiteOne interview app",
  description: "Simple interview app for SiteOne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
