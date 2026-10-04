import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080B12",
};

export const metadata: Metadata = {
  title: "M. Ridho Naufal Dwinanda Pakpahan | Web Developer & Cyber Security",
  description:
    "Personal portfolio of M. Ridho Naufal Dwinanda Pakpahan - Informatics Engineering graduate specializing in web development, cybersecurity, penetration testing, and cloud computing.",
  keywords: [
    "Web Developer",
    "Cyber Security",
    "Penetration Testing",
    "Security Research",
    "Cloud Computing",
    "Google Cloud Platform",
    "Database Management",
    "Data Processing",
    "Junior Web Developer",
    "Frontend Developer",
    "Fullstack Developer",
  ],
  authors: [
    {
      name: "M. Ridho Naufal Dwinanda Pakpahan",
    },
  ],
  openGraph: {
    title: "M. Ridho Naufal Dwinanda Pakpahan | Web Developer & Cyber Security",
    description:
      "Informatics Engineering graduate focused on web development, cybersecurity, cloud technologies, and building reliable digital solutions.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Ridho Naufal Dwinanda Pakpahan",
    description:
      "Web Developer | Cyber Security Enthusiast | Security Researcher",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <div className="relative min-h-screen bg-background text-text-primary">
          <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/5 via-transparent to-accent-cyan/5" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
          </div>
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
