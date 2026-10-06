export default function InfoItem({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 break-words text-sm leading-5 text-slate-800">
        {value || "Not available"}
      </p>
    </div>
  );
}
