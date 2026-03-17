import NewsTicker from './NewsTicker';
import MetricBars from './MetricBars';
import RaceVisualization from './RaceVisualization';

const TRACK_LABELS = {
  HAWK: { label: 'HAWK', color: '#ef4444' },
  MODERATE: { label: 'MODERATE', color: '#f59e0b' },
  DOVE: { label: 'DOVE', color: '#3b82f6' },
};

export default function StageScreen({ stage, stageNumber, totalStages, metrics, deltas, roleColor, roleId, currentTrack, onDecision }) {
  const trackInfo = currentTrack ? TRACK_LABELS[currentTrack] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <NewsTicker headlines={stage.headlines} />

      <div className="flex-1 flex flex-col lg:flex-row gap-8 p-6 lg:p-10 max-w-7xl mx-auto w-full">
        {/* Left sidebar — metrics panel */}
        <div className="lg:w-72 shrink-0 space-y-4">
          <div className="dossier rounded-lg p-5">
            <div className="data-text text-amber-600/40 text-[10px] tracking-[0.2em] uppercase mb-4">
              Global Status Monitor
            </div>
            <MetricBars metrics={metrics} deltas={deltas} roleColor={roleColor} />
          </div>
          <div className="dossier rounded-lg p-5">
            <RaceVisualization usLead={metrics.usLead} roleId={roleId} />
          </div>
        </div>

        {/* Center — crisis briefing */}
        <div className="flex-1 flex flex-col">
          <div className="animate-fadeIn">
            {/* Stage header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="data-text px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] border"
                style={{
                  borderColor: `${roleColor}30`,
                  backgroundColor: `${roleColor}08`,
                  color: roleColor,
                }}
              >
                Stage {stageNumber}/{totalStages}
              </div>
              <div className="data-text text-slate-600 text-[11px]">
                {stage.quarter}
              </div>
              {trackInfo && (
                <div
                  className="data-text px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] border"
                  style={{
                    borderColor: `${trackInfo.color}25`,
                    backgroundColor: `${trackInfo.color}08`,
                    color: `${trackInfo.color}aa`,
                  }}
                >
                  {trackInfo.label} Track
                </div>
              )}
              <div className="flex-1" />
              <div className="data-text text-slate-700 text-[10px] hidden lg:block">
                BRIEFING DOC
              </div>
            </div>

            {/* Crisis briefing card */}
            <div className="dossier rounded-lg p-8 mb-8 relative">
              <div className="absolute top-4 right-4 data-text text-amber-800/20 text-[9px] tracking-[0.2em]">
                CLASSIFIED
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                {stage.title}
              </h2>
              <div className="h-px bg-gradient-to-r from-amber-900/20 to-transparent mb-4" />
              <p className="text-slate-400 leading-relaxed text-[15px]">
                {stage.description}
              </p>
            </div>

            {/* Decision options */}
            <div className="space-y-3">
              <div className="data-text text-amber-600/40 text-[10px] tracking-[0.2em] uppercase mb-3">
                Decision Required
              </div>
              {stage.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onDecision(option.id)}
                  className="w-full text-left p-5 border border-slate-800/50 bg-black/30 hover:bg-slate-900/60 transition-all duration-200 group cursor-pointer rounded-sm"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${roleColor}50`;
                    e.currentTarget.style.boxShadow = `inset 2px 0 0 ${roleColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(30,41,59,0.5)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0 data-text border"
                      style={{
                        borderColor: `${roleColor}30`,
                        color: roleColor,
                        backgroundColor: `${roleColor}08`,
                      }}
                    >
                      {option.id}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {option.label}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
