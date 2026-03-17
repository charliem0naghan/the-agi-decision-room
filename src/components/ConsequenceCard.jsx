export default function ConsequenceCard({ consequence, onContinue, isLastStage, roleColor }) {
  if (!consequence) return null;

  const { narrative, deltas, intel } = consequence;

  const deltaEntries = [
    { key: 'usLead', label: 'US LEAD', value: deltas.usLead },
    { key: 'safetyRisk', label: 'SFY RISK', value: deltas.safetyRisk },
    { key: 'publicTrust', label: 'PUB TRUST', value: deltas.publicTrust },
    { key: 'agiProgress', label: 'AGI PROG', value: deltas.agiProgress },
  ].filter(d => d.value !== 0);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="animate-slideInUp max-w-2xl w-full bg-[#0a0c14] border border-amber-900/15 shadow-2xl overflow-hidden">
        {/* Top classification strip */}
        <div className="px-6 py-2 border-b border-amber-900/10 flex items-center justify-between bg-black/60">
          <div className="data-text text-amber-700/40 text-[10px] tracking-[0.2em] uppercase">
            Consequence Assessment
          </div>
          <div className="data-text text-red-600/30 text-[10px] tracking-[0.15em]">
            TS//SCI
          </div>
        </div>

        {/* Role color accent line */}
        <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${roleColor}40, transparent)` }} />

        <div className="p-8">
          {/* Narrative */}
          <p className="text-slate-300 leading-relaxed mb-6 text-[15px]">
            {narrative}
          </p>

          {/* Metric deltas */}
          <div className="flex flex-wrap gap-2 mb-6">
            {deltaEntries.map(({ key, label, value }) => {
              const isNegativeOutcome = value > 0
                ? key === 'safetyRisk'
                : key !== 'safetyRisk';
              return (
                <div
                  key={key}
                  className={`px-3 py-1.5 border data-text text-[11px] font-bold tracking-wider ${
                    isNegativeOutcome
                      ? 'border-red-500/20 text-red-400 bg-red-500/5'
                      : 'border-green-500/20 text-green-400 bg-green-500/5'
                  }`}
                >
                  {label}: {value > 0 ? '+' : ''}{value}
                </div>
              );
            })}
          </div>

          {/* Intel report */}
          <div className="terminal rounded-sm p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-1 h-1 bg-green-500/60 animate-pulse-slow" />
              <span className="data-text text-green-500/50 text-[10px] tracking-[0.15em] uppercase">
                Intel Assessment
              </span>
            </div>
            <p className="data-text text-[12px] text-slate-400 leading-relaxed" style={{ fontWeight: 400 }}>
              {intel}
            </p>
          </div>

          {/* Continue button */}
          <button
            onClick={onContinue}
            className="w-full py-3 border font-semibold text-white transition-all duration-200 hover:brightness-125 cursor-pointer data-text text-[13px] tracking-wider uppercase"
            style={{
              borderColor: `${roleColor}40`,
              backgroundColor: `${roleColor}15`,
              color: roleColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${roleColor}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${roleColor}15`;
            }}
          >
            {isLastStage ? 'View Final Assessment' : 'Proceed to Next Stage'}
          </button>
        </div>
      </div>
    </div>
  );
}
