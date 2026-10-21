import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TrendChart from "./components/TrendChart";
import IndicatorTable from "./components/IndicatorTable";
import { STATS, TREND, TABLE } from "./data/dashboardData";

export default function DashboardJombang() {
  const [active, setActive] = useState("Beranda");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">
      <Sidebar active={active} setActive={setActive} open={open} close={() => setOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header onMenu={() => setOpen(true)} />

        <main className="flex-1 space-y-6 p-4 sm:p-8">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Statistik utama">
            {STATS.map((s) => <StatCard key={s.title} {...s} />)}
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-semibold text-slate-900">
                Tren Perkembangan IPM &amp; IKLH Kabupaten Jombang (2020 - 2025)
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-emerald-900" />IPM</span>
                <span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-emerald-400" />IKLH</span>
              </div>
            </div>
            <TrendChart data={TREND} />
          </section>

          <section className="rounded-xl border border-slate-200 bg-white">
            <h2 className="border-b border-slate-100 px-5 py-4 text-base font-semibold text-slate-900 sm:px-6">
              Capaian Indikator Strategis per Sektor di Kabupaten Jombang
            </h2>
            <IndicatorTable rows={TABLE} />
          </section>
        </main>
      </div>
    </div>
  );
}