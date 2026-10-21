import { Home, BarChart3, Leaf, GraduationCap, Users, Settings, Wallet, LineChart as LineIcon } from "lucide-react";

export const NAV = [
  { label: "Beranda", icon: Home },
  { label: "Statistik Utama", icon: BarChart3 },
  { label: "Data IKLH", icon: Leaf },
  { label: "Data IPM", icon: GraduationCap },
  { label: "Kependudukan", icon: Users },
  { label: "Pengaturan", icon: Settings },
];

export const STATS = [
  { title: "IPM", sub: "Indeks Pembangunan Manusia", value: "80.35", status: "Sangat Tinggi", trend: "+0.66 dari tahun lalu", dir: "up", icon: GraduationCap },
  { title: "IKLH", sub: "Indeks Kualitas Lingkungan Hidup", value: "75.40", status: "Baik", trend: "Pengelolaan lingkungan", dir: "flat", icon: Leaf },
  { title: "Tingkat Kemiskinan", sub: "Persentase penduduk miskin", value: "3.80%", status: "Menurun", trend: "Terkendali dengan baik", dir: "down-good", icon: Wallet },
  { title: "Pertumbuhan Ekonomi", sub: "Laju pertumbuhan PDRB", value: "5.78%", status: "Stabil", trend: "Sektor pariwisata & pertanian", dir: "flat", icon: LineIcon },
];

export const TREND = [
  { year: 2020, ipm: 76.80, iklh: 74.0 },
  { year: 2021, ipm: 77.35, iklh: 74.2 },
  { year: 2022, ipm: 78.13, iklh: 74.1 },
  { year: 2023, ipm: 79.07, iklh: 74.8 },
  { year: 2024, ipm: 79.69, iklh: 75.0 },
  { year: 2025, ipm: 80.35, iklh: 75.4 },
];

export const TABLE = [
  { name: "Indeks Pembangunan Manusia", opd: "Bappeda", target: "80.00", real: "80.35", ok: true },
  { name: "Indeks Kualitas Lingkungan Hidup", opd: "Dinas Lingkungan Hidup", target: "75.00", real: "75.40", ok: true },
  { name: "Tingkat Kemiskinan", opd: "Dinas Sosial", target: "4.00%", real: "3.80%", ok: true },
  { name: "Laju Pertumbuhan Ekonomi", opd: "Bappeda", target: "5.50%", real: "5.78%", ok: true },
  { name: "Rata-rata Lama Sekolah", opd: "Dinas Pendidikan", target: "9.50 th", real: "9.42 th", ok: false },
  { name: "Angka Harapan Hidup", opd: "Dinas Kesehatan", target: "73.30 th", real: "73.45 th", ok: true },
  { name: "Tingkat Pengangguran Terbuka", opd: "Disnaker", target: "4.50%", real: "4.12%", ok: true },
];