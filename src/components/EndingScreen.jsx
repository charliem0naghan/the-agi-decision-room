import { ENDINGS } from '../gameData';
import MetricBars from './MetricBars';

const TRACK_COLORS = {
  HAWK: { text: 'text-red-400', border: 'border-red-500/20' },
  MODERATE: { text: 'text-amber-400', border: 'border-amber-500/20' },
  DOVE: { text: 'text-blue-400', border: 'border-blue-500/20' },
};

export default function EndingScreen({ endingKey, metrics, role, choices, stageHistory, onRestart }) {
  const ending = ENDINGS[endingKey];
  if (!ending) return null;

  const choiceLabels = { A: 'OPT-A', B: 'OPT-B', C: 'OPT-C' };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="animate-fadeIn max-w-3xl w-full">
        {/* Classification header */}
        <div className="classified-line mb-8" />

        {/* Title */}
        <div className="text-center mb-10">
          <div
            className="data-text tracking-[0.3em] mb-5 flex items-center justify-center gap-3"
            style={{ color: `${role.color}80` }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: role.color }} />
            Simulation Complete &middot; {role.name} &middot; {role.org}
            <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: role.color }} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            {ending.title}
          </h1>
          <p className="text-xl text-slate-500">
            {ending.subtitle}
          </p>
        </div>

        {/* Final metrics */}
        <div className="dossier rounded-lg p-6 mb-8 max-w-md mx-auto">
          <div className="data-text text-amber-600/40 text-[10px] tracking-[0.2em] uppercase mb-4 text-center">
            Final Assessment
          </div>
          <MetricBars metrics={metrics} roleColor={role.color} />
        </div>

        {/* Debrief */}
        <div className="dossier rounded-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="data-text text-amber-600/40 text-[10px] tracking-[0.2em] uppercase">
              Debrief
            </span>
            <span className="data-text text-red-600/25 text-[10px] tracking-[0.15em]">
              TS//SCI//NOFORN
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {ending.debrief}
          </p>
        </div>

        {/* Real world comparison */}
        <div className="terminal rounded-sm p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-1 h-1 bg-green-500/60 animate-pulse-slow" />
            <span className="data-text text-green-500/50 text-[10px] tracking-[0.15em] uppercase">
              Real-World Analysis
            </span>
          </div>
          <p className="text-slate-500 leading-relaxed text-sm">
            {ending.realWorld}
          </p>
        </div>

        {/* Choices recap */}
        <div className="dossier rounded-lg p-6 mb-8">
          <div className="data-text text-amber-600/40 text-[10px] tracking-[0.2em] uppercase mb-4">
            Operative Decision Log
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {choices.map((choice, i) => {
              const history = stageHistory?.[i];
              const trackStyle = history?.track ? TRACK_COLORS[history.track] : null;
              return (
                <div
                  key={i}
                  className={`text-center p-3 border border-slate-800/40 bg-black/20 ${trackStyle?.border || ''}`}
                >
                  <div className="data-text text-slate-600 text-[9px] mb-1">STG-{i + 1}</div>
                  <div className="text-xs font-semibold text-slate-300 leading-tight">
                    {history?.title || `Stage ${i + 1}`}
                  </div>
                  {history?.track && (
                    <div className={`data-text text-[9px] mt-1 ${trackStyle?.text || 'text-slate-500'}`}>
                      {history.track}
                    </div>
                  )}
                  <div
                    className="data-text text-[10px] font-bold mt-1"
                    style={{ color: role.color }}
                  >
                    {choiceLabels[choice]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="classified-line mb-6" />

        {/* Restart */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="px-10 py-3 border font-semibold transition-all duration-200 hover:brightness-125 cursor-pointer data-text text-[13px] tracking-wider uppercase"
            style={{
              borderColor: `${role.color}40`,
              backgroundColor: `${role.color}15`,
              color: role.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${role.color}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${role.color}15`;
            }}
          >
            Run New Simulation
          </button>
        </div>
      </div>
    </div>
  );
}
