function StatusBadge({ ok }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
        ok ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
      }`}
    >
      {ok ? "Tercapai" : "Proses"}
    </span>
  );
}

export default function IndicatorTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            {["Nama Indikator", "Sektor/OPD", "Target RPJMD", "Realisasi", "Status"].map((h) => (
              <th key={h} className="px-5 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r.name} className="hover:bg-slate-50">
              <td className="px-5 py-3.5 font-medium text-slate-900">{r.name}</td>
              <td className="px-5 py-3.5 text-slate-600">{r.opd}</td>
              <td className="px-5 py-3.5 text-slate-600">{r.target}</td>
              <td className="px-5 py-3.5 font-semibold text-slate-900">{r.real}</td>
              <td className="px-5 py-3.5"><StatusBadge ok={r.ok} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}