export default function RaceVisualization({ usLead, roleId }) {
  const chinaProgress = Math.max(0, Math.min(100, 100 - usLead));
  const usProgress = Math.max(0, Math.min(100, usLead));

  const usAhead = usProgress > chinaProgress;
  const gap = Math.abs(usProgress - chinaProgress);
  const threatLevel = gap <= 10 ? 'CONTESTED' : usAhead ? 'US ADVANTAGE' : 'CN ADVANTAGE';
  const threatColor = gap <= 10 ? '#f59e0b' : usAhead ? '#3b82f6' : '#ef4444';

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-3">
        <span className="data-text text-slate-600 text-[10px] uppercase tracking-[0.15em]">
          Strategic Balance
        </span>
        <span className="data-text text-[10px] font-bold" style={{ color: threatColor }}>
          {threatLevel}
        </span>
      </div>

      <div className="space-y-3">
        {/* US */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className={`data-text text-[11px] font-semibold ${roleId === 'china' ? 'text-slate-500' : 'text-blue-400'}`}>
              USA
            </span>
            <span className="data-text text-slate-500 text-[10px]">{usProgress}</span>
          </div>
          <div className="h-1.5 bg-black/60 border border-slate-800/50 overflow-hidden">
            <div
              className="h-full transition-all duration-800 ease-out"
              style={{
                width: `${usProgress}%`,
                background: 'linear-gradient(90deg, #1e40af, #3b82f6)',
                boxShadow: '0 0 6px rgba(59,130,246,0.2)',
              }}
            />
          </div>
        </div>

        {/* China */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className={`data-text text-[11px] font-semibold ${roleId === 'china' ? 'text-red-400' : 'text-slate-500'}`}>
              PRC
            </span>
            <span className="data-text text-slate-500 text-[10px]">{chinaProgress}</span>
          </div>
          <div className="h-1.5 bg-black/60 border border-slate-800/50 overflow-hidden">
            <div
              className="h-full transition-all duration-800 ease-out"
              style={{
                width: `${chinaProgress}%`,
                background: 'linear-gradient(90deg, #991b1b, #ef4444)',
                boxShadow: '0 0 6px rgba(239,68,68,0.2)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
