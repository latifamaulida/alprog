export default function TrendChart({ data }) {
  const W = 640, H = 280, P = { t: 20, r: 20, b: 36, l: 44 };
  const min = 64, max = 78;
  const x = (i) => P.l + (i * (W - P.l - P.r)) / (data.length - 1);
  const y = (v) => P.t + ((max - v) / (max - min)) * (H - P.t - P.b);
  const path = (k) => data.map((d, i) => `${i ? "L" : "M"}${x(i)},${y(d[k])}`).join(" ");
  const ticks = [64, 67, 70, 73, 76];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Grafik tren IPM dan IKLH 2020 sampai 2025">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={P.l} x2={W - P.r} y1={y(t)} y2={y(t)} stroke="#e2e8f0" />
          <text x={P.l - 8} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#64748b">{t}</text>
        </g>
      ))}
      {data.map((d, i) => (
        <text key={d.year} x={x(i)} y={H - 12} textAnchor="middle" fontSize="11" fill="#64748b">{d.year}</text>
      ))}
      <path d={path("ipm")} fill="none" stroke="#064e3b" strokeWidth="2.5" strokeLinejoin="round" />
      <path d={path("iklh")} fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinejoin="round" />
      {data.map((d, i) => (
        <g key={i}>
          <circle cx={x(i)} cy={y(d.ipm)} r="4" fill="#064e3b"><title>{`IPM ${d.year}: ${d.ipm}`}</title></circle>
          <circle cx={x(i)} cy={y(d.iklh)} r="4" fill="#34d399"><title>{`IKLH ${d.year}: ${d.iklh}`}</title></circle>
        </g>
      ))}
      <text x={x(data.length - 1)} y={y(data[data.length - 1].ipm) - 10} textAnchor="end" fontSize="12" fontWeight="600" fill="#064e3b">{data[data.length - 1].ipm}</text>
      <text x={x(data.length - 1)} y={y(data[data.length - 1].iklh) + 20} textAnchor="end" fontSize="12" fontWeight="600" fill="#059669">{data[data.length - 1].iklh}</text>
    </svg>
  );
}