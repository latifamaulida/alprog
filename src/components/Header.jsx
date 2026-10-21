import { Menu, Search, Bell } from "lucide-react";

export default function Header({ onMenu }) {
  const today = new Intl.DateTimeFormat("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }).format(new Date());

  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-8">
      <div className="flex items-center gap-3">
        <button onClick={onMenu} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden" aria-label="Buka menu">
          <Menu size={20} />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-semibold text-slate-900 sm:text-xl">
            Dashboard Kinerja &amp; Statistik Kota Batu
          </h1>
          <p className="text-sm text-slate-500">{today}</p>
        </div>

        <label className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
          <Search size={16} className="text-slate-400" />
          <input
            type="search"
            placeholder="Cari indikator..."
            className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </label>

        <button className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100" aria-label="Notifikasi">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500" />
        </button>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm font-semibold text-white">AD</div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-medium text-slate-900">Admin Daerah</p>
            <p className="text-xs text-slate-500">Bappeda</p>
          </div>
        </div>
      </div>
    </header>
  );
}