import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Runs before paint so a saved light theme doesn't flash dark first.
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.add("light")}catch(e){}`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0E0E0C",
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
      "Web Developer | Cyber Security Enthusiast | AI Enthusiast | Security Researcher",
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
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${mono.variable} font-sans`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
