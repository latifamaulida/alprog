import { X } from "lucide-react";
import { NAV } from "../data/dashboardData";

export default function Sidebar({ active, setActive, open, close }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden" onClick={close} />}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-emerald-950 text-emerald-50 transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400 text-lg font-bold text-emerald-950">J</div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Kota Batu</p>
              <p className="text-xs text-emerald-300">Portal Data Daerah</p>
            </div>
          </div>
          <button onClick={close} className="lg:hidden" aria-label="Tutup menu"><X size={20} /></button>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {NAV.map(({ label, icon: Icon }) => {
            const on = active === label;
            return (
              <button
                key={label}
                onClick={() => { setActive(label); close(); }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  on ? "bg-emerald-400 text-emerald-950" : "text-emerald-100 hover:bg-emerald-900"
                }`}
              >
                <Icon size={18} /> {label}
              </button>
            );
          })}
        </nav>

        <p className="px-6 py-5 text-xs text-emerald-400">Pemerintah Kota Batu</p>
      </aside>
    </>
  );
}