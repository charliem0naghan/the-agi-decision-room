export default function NewsTicker({ headlines }) {
  const doubled = [...headlines, ...headlines];

  return (
    <div className="w-full bg-black/80 border-y border-amber-900/15 overflow-hidden py-2 relative">
      {/* SIGINT label */}
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center pl-3 pr-4 bg-gradient-to-r from-black via-black/95 to-transparent">
        <span className="data-text text-amber-600/50 text-[10px] tracking-[0.15em] uppercase">
          SIGINT Wire
        </span>
      </div>
      <div className="animate-ticker flex whitespace-nowrap pl-28">
        {doubled.map((headline, i) => (
          <span key={i} className="inline-flex items-center mx-8">
            <span className="inline-block w-1 h-1 bg-amber-500/60 mr-3 animate-pulse-slow" />
            <span className="data-text text-[11px] text-slate-400 tracking-wide">
              {headline}
            </span>
            <span className="data-text text-slate-700 ml-8">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
