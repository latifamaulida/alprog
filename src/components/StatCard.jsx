import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function StatCard({ title, sub, value, status, trend, dir, icon: Icon }) {
  const TrendIcon = dir === "up" ? TrendingUp : dir === "flat" ? Minus : TrendingDown;
  const tone = dir === "flat" ? "text-slate-500" : "text-emerald-600";
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-xs text-slate-500">{sub}</p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700"><Icon size={18} /></div>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">{status}</span>
        <span className={`flex items-center gap-1 ${tone}`}><TrendIcon size={14} />{trend}</span>
      </div>
    </div>
  );
}