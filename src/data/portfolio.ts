import type {
  PersonalInfo,
  Experience,
  Project,
  Research,
  SkillCategory,
  Education,
  Certificate,
  Achievement,
  SocialLink,
  NavItem,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "M. Ridho Naufal Dwinanda Pakpahan",
  firstName: "M. Ridho Naufal",
  lastName: "Dwinanda Pakpahan",
  monogram: "RN",
  title: "Junior Web Developer & Cyber Security Enthusiast",
  headline: [
    "Junior Web Developer",
    "Penelaah Teknis Kebijakan",
    "Cyber Security Analyst & Pentester",
    "Cloud Computing & AI Specialist",
  ],
  summary:
    "Lulusan S1 Teknik Informatika Universitas Ahmad Dahlan berpredikat Cumlaude (IPK 3.54/4.00). Berpengalaman sebagai Penelaah Teknis Kebijakan di Biro Perencanaan Kementerian Komunikasi dan Digital RI dalam pengembangan proyek website berbasis AI LLM untuk review dokumen TOR & RAB, serta Junior Web Developer Intern di Diskominfostaper Kab. Karimun dalam membangun Sistem Buku Tamu Digital. Memiliki kompetensi mendalam di Web Development, Cyber Security & Penetration Testing, Cloud Computing (GCP), Database Management, dan Artificial Intelligence.",
  email: "ridhopakpahan@gmail.com",
  phone: "085229989866",
  phoneUrl: "https://wa.me/6285229989866",
  location: "Kab. Karimun, Kepulauan Riau / D.I. Yogyakarta",
  address: "Jl Bhakti No.34 Bukit Senang RT 002/ RW 006 Tanjung Balai Kota",
  availability: "Terbuka untuk Peluang Kerja & Kolaborasi",
  githubUrl: "#",
  linkedinUrl: "#",
  profileImage: "/profile.jpg",
  cvUrl: "/cv-mridho.pdf",
};

export const navItems: NavItem[] = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Proyek", href: "#projects" },
  { label: "Riset", href: "#research" },
  { label: "Keahlian", href: "#skills" },
  { label: "Pendidikan", href: "#education" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Prestasi", href: "#achievement" },
  { label: "Kontak", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    id: "kemkomdigi-intern",
    role: "Penelaah Teknis Kebijakan (Digitalisasi Perencanaan dan Kemitraan)",
    organization: "Biro Perencanaan Kementerian Komunikasi dan Digital RI",
    location: "Kota Adm. Jakarta Pusat, DKI Jakarta, Indonesia",
    period: "September 2026 - Maret 2027",
    description:
      "Peserta Maganghub Batch 2 yang berfokus pada digitalisasi perencanaan dan kemitraan, serta terlibat dalam perancangan dan pengembangan aplikasi berbasis AI LLM untuk otomasi review dokumen pemerintah.",
    responsibilities: [
      "Membantu digitalisasi perencanaan dan penganggaran project kementerian",
      "Membuat dan mengembangkan project Website berbasis AI LLM untuk review Dokumen TOR dan RAB",
      "Menelaah aspek teknis kebijakan digitalisasi perencanaan dan kemitraan",
      "Berkolaborasi dengan tim perencana dalam optimalisasi integrasi data dan efisiensi birokrasi",
    ],
    type: "work",
  },
  {
    id: "lab-assistant",
    role: "Asisten Laboratorium Praktikum Sistem Terdistribusi",
    organization: "Laboratorium Informatika Universitas Ahmad Dahlan",
    location: "Kab. Bantul, D.I. Yogyakarta, Indonesia",
    period: "Maret 2026 - Juli 2026",
    description:
      "Membantu dosen dan memfasilitasi mahasiswa dalam pelaksanaan praktikum sistem terdistribusi, memahami konsep arsitektur jaringan, client-server, dan implementasi distributed computing.",
    responsibilities: [
      "Membantu dosen mengawasi jalannya praktikum Sistem Terdistribusi",
      "Mendampingi praktikan atau mahasiswa praktikum memahami konsep serta implementasi sistem terdistribusi",
      "Membimbing mahasiswa dalam pemecahan masalah (troubleshooting) kode dan arsitektur sistem",
    ],
    type: "academic",
  },
  {
    id: "junior-web-developer",
    role: "Junior Web Developer Intern",
    organization: "Diskominfostaper Kabupaten Karimun",
    location: "Kab. Karimun, Kepulauan Riau, Indonesia",
    period: "Agustus 2025 - November 2025",
    description:
      "Mengembangkan Sistem Informasi Buku Tamu Digital berbasis website di Bidang TIK untuk memodernisasi pencatatan data tamu kedinasan.",
    responsibilities: [
      "Membuat Sistem Buku Tamu Digital Berbasis Website dengan menerapkan arsitektur CRUD",
      "Mengintegrasikan fitur filter data tamu dinamis per tahun dan per bulan",
      "Merancang, membangun, dan mengelola database data tamu kedinasan",
      "Mengintegrasikan fitur ekspor rekapitulasi data tamu ke format file PDF",
    ],
    type: "internship",
  },
  {
    id: "esport-manager",
    role: "Manager Esport Divisi Game PUBG Mobile",
    organization: "Esport Universitas Ahmad Dahlan",
    location: "D.I. Yogyakarta, Indonesia",
    period: "2024",
    description:
      "Memimpin divisi game PUBGM UAD, menyusun strategi latihan, mengelola roster pemain, dan berhasil membawa tim meraih prestasi Juara 3 Nasional.",
    responsibilities: [
      "Memimpin operasional dan manajemen roster divisi PUBG Mobile UAD",
      "Menyusun jadwal latihan, strategi kompetisi, dan evaluasi performa pemain",
      "Membawa tim Esport UAD meraih Juara 3 Turnamen PMKC (Pubg Mobile Kalijaga Championship) 2024",
    ],
    type: "organization",
  },
];

export const projects: Project[] = [
  {
    id: "ai-tor-rab-review",
    title: "Website Review Dokumen TOR & RAB Berbasis AI LLM",
    category: "AI & Web Application",
    organization: "Biro Perencanaan Kementerian Komunikasi dan Digital RI",
    description:
      "Platform web cerdas berbasis Artificial Intelligence Large Language Model (AI LLM) yang dirancang untuk mempercepat dan memvalidasi proses telaah dokumen Term of Reference (TOR) serta Rencana Anggaran Biaya (RAB) perencanaan proyek kementerian secara otomatis dan akurat.",
    features: [
      "AI LLM Assisted Document Review",
      "Analisis Keselarasan TOR & RAB",
      "Digitalisasi Perencanaan & Penganggaran",
      "Validasi Kelayakan Anggaran Otomatis",
      "Dashboard Pemantauan Dokumen",
    ],
    repositoryUrl: "#",
    liveDemoUrl: "#",
    imageUrl: "/projects/tor-rab-ai.svg",
  },
  {
    id: "digital-guest-book",
    title: "Sistem Informasi Buku Tamu Digital",
    category: "Web Application",
    organization: "Diskominfostaper Kabupaten Karimun",
    description:
      "Sistem informasi buku tamu digital berbasis web yang diterapkan di Dinas Komunikasi, Informatika, Statistik dan Persandian Kab. Karimun untuk mempermudah pencatatan, pengarsipan, penyaringan, dan pelaporan kunjungan dinas secara paperless.",
    features: [
      "Implementasi CRUD Lengkap",
      "Filter Data Tamu Per Bulan & Per Tahun",
      "Fitur Cetak & Ekspor Laporan PDF",
      "Manajemen Database Terstruktur",
      "Pencarian & Arsip Tamu Instan",
    ],
    repositoryUrl: "#",
    liveDemoUrl: "#",
    imageUrl: "/projects/guest-book.svg",
  },
  {
    id: "web-pentest-research",
    title: "Analisis Keamanan Website Melalui Penetration Testing",
    category: "Cyber Security & Research",
    organization: "Tugas Akhir S1 Teknik Informatika UAD",
    description:
      "Pengujian dan analisis penetrasi mendalam pada aplikasi web institusi untuk mendeteksi celah kerentanan keamanan informasi, menguji ketahanan server terhadap exploit, serta merumuskan rekomendasi penanganan sesuai standar OWASP.",
    features: [
      "Vulnerability Assessment & Scanning",
      "Penetration Testing Methodology",
      "Web Application Security Hardening",
      "Analisis Risiko & Laporan Rekomendasi",
    ],
    repositoryUrl: "#",
    liveDemoUrl: "#",
    imageUrl: "/projects/pentest.svg",
  },
];

export const research: Research[] = [
  {
    id: "security-analysis",
    title: "Website Security Analysis Using Penetration Testing",
    target: "Website SMAN 1 Pundong",
    field: "Keamanan Informasi (Information Security)",
    focus: [
      "Penetration Testing",
      "Web Application Security",
      "Vulnerability Assessment",
      "Security Analysis & Hardening",
    ],
    description:
      "Melakukan penelitian tugas akhir di bidang Keamanan Informasi, khususnya Penetration Testing untuk menganalisis keamanan aplikasi website, menguji postur pertahanan terhadap eksploitasi celah, dan merancang skema mitigasi proteksi data.",
    year: "2025 - 2026",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "web-development",
    title: "Web & Software Development",
    icon: "Code",
    skills: [
      "Web Developer",
      "PHP Developer",
      "Building Website",
      "CRUD Development",
      "Database Management",
      "Frontend & Backend",
    ],
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Pentesting",
    icon: "Shield",
    skills: [
      "Cyber Security Analyst",
      "Network Security Analyst",
      "Pentester",
      "Web Application Security",
      "Mobile Application Security",
      "Security Research",
      "Network Analyst",
    ],
  },
  {
    id: "ai-cloud",
    title: "AI & Cloud Computing",
    icon: "Cloud",
    skills: [
      "Artificial Intelligence (AI)",
      "Large Language Models (LLM)",
      "Google Cloud Platform (GCP)",
      "Cloud Computing",
      "Machine Learning",
      "Sistem Terdistribusi",
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    icon: "Database",
    skills: [
      "Analisis Data",
      "Data Analyst",
      "Data Visualisasi",
      "Pemrosesan Data",
      "Big Data",
      "Data Entry",
    ],
  },
  {
    id: "competencies",
    title: "Core Competencies",
    icon: "Cpu",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Communication",
      "Adaptability",
      "Team Leadership",
      "Policy Technical Review",
    ],
  },
];

export const education: Education[] = [
  {
    id: "uad",
    institution: "Universitas Ahmad Dahlan",
    degree: "S1 - Teknik Informatika",
    field: "Fakultas Teknologi Industri | Kab. Bantul, D.I. Yogyakarta",
    period: "2022 - 2026",
    gpa: "3.54",
    gpaScale: "4.00",
    predicate: "Cumlaude",
    description:
      "Lulus dengan predikat Cumlaude. Berfokus pada Web Development, Keamanan Informasi, Cloud Computing, dan Sistem Terdistribusi. Berpengalaman sebagai Asisten Laboratorium Praktikum.",
  },
  {
    id: "sman-1-karimun",
    institution: "SMAN 1 Karimun",
    degree: "SMA / Sederajat",
    field: "MIPA (Matematika dan Ilmu Pengetahuan Alam) | Kab. Karimun, Kepulauan Riau",
    period: "2020 - 2022",
    gpa: "82.32",
    gpaScale: "100",
    description:
      "Menyelesaikan pendidikan tingkat menengah atas jurusan IPA dengan nilai akhir rata-rata 82.32.",
  },
];

export const certificates: Certificate[] = [
  {
    id: "toefl",
    title: "Sertifikat TOEFL Ahmad Dahlan Language Center",
    issuer: "Ahmad Dahlan Language Center (ADLC)",
    year: "Juni 2026 - Juni 2027",
    validity: "Juni 2026 - Juni 2027",
    url: "/certificates/toefl.pdf",
    type: "certification",
  },
  {
    id: "k3-cert",
    title: "Pelatihan Awareness Dasar K3 (Keselamatan dan Kesehatan Kerja)",
    issuer: "Ahmad Dahlan Training Center (ADTC)",
    year: "Agustus 2026 - Agustus 2030",
    validity: "Agustus 2026 - Agustus 2030",
    url: "/certificates/k3.pdf",
    type: "certification",
  },
  {
    id: "qhse-cert",
    title: "Pelatihan Awareness QHSE (Quality, Health, Safety, and Environment)",
    issuer: "Ahmad Dahlan Training Center (ADTC)",
    year: "Agustus 2026 - Agustus 2030",
    validity: "Agustus 2026 - Agustus 2030",
    url: "/certificates/qhse.pdf",
    type: "certification",
  },
  {
    id: "data-analytics",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "Oktober 2026",
    url: "/certificates/data-analytics.pdf",
    type: "certification",
  },
  {
    id: "k3-training",
    title: "Metodologi Pelatihan - Awareness Dasar K3",
    issuer: "Ahmad Dahlan Training Center (ADTC)",
    year: "Agustus 2026 - Agustus 2030",
    validity: "Agustus 2026 - Agustus 2030",
    url: "/certificates/k3.pdf",
    type: "training",
  },
  {
    id: "qhse-training",
    title: "Metodologi Pelatihan - Awareness QHSE",
    issuer: "Ahmad Dahlan Training Center (ADTC)",
    year: "Agustus 2026 - Agustus 2030",
    validity: "Agustus 2026 - Agustus 2030",
    url: "/certificates/qhse.pdf",
    type: "training",
  },
  {
    id: "seminar-kepemimpinan",
    title: "Seminar Nasional Kepemimpinan: Kekuatan Gen Z dalam Evolusi Politik Digital",
    issuer: "Ilmu Komunikasi Universitas Ahmad Dahlan",
    year: "Juli 2025",
    url: "/certificates/seminar-kepemimpinan.pdf",
    type: "training",
  },
];

export const achievements: Achievement[] = [
  {
    id: "pubg-championship",
    title: "Juara 3 (3rd Place)",
    event: "PUBG Mobile Kalijaga Championship (PMKC)",
    year: "2024",
    context:
      "Sebagai Manager Esport Divisi Game PUBGM, berhasil membawa tim Esport Universitas Ahmad Dahlan meraih Juara 3 pada turnamen nasional PMKC.",
    rank: "3rd Place",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:ridhopakpahan@gmail.com",
    icon: "Mail",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/6285229989866",
    icon: "Phone",
  },
  {
    platform: "LinkedIn",
    url: "#",
    icon: "Linkedin",
  },
  {
    platform: "GitHub",
    url: "#",
    icon: "Github",
  },
];
