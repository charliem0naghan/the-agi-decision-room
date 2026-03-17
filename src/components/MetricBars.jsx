import { useEffect, useRef, useState } from 'react';

const METRICS_CONFIG = [
  { key: 'usLead', label: 'US AI Lead', code: 'USLEAD' },
  { key: 'safetyRisk', label: 'Safety Risk', code: 'SFYRSK', inverted: true },
  { key: 'publicTrust', label: 'Public Trust', code: 'PUBTRS' },
  { key: 'agiProgress', label: 'Race to AGI', code: 'AGIPGR' },
];

function getThreatLevel(value, inverted) {
  if (inverted) {
    if (value >= 75) return { color: '#ef4444', level: 'CRITICAL' };
    if (value >= 50) return { color: '#f59e0b', level: 'ELEVATED' };
    if (value >= 25) return { color: '#eab308', level: 'GUARDED' };
    return { color: '#22c55e', level: 'LOW' };
  }
  if (value >= 60) return { color: '#22c55e', level: 'STRONG' };
  if (value >= 35) return { color: '#eab308', level: 'MODERATE' };
  return { color: '#ef4444', level: 'WEAK' };
}

function DeltaIndicator({ delta }) {
  if (!delta || delta === 0) return null;
  const isPositive = delta > 0;
  return (
    <span
      className={`ml-1.5 data-text font-bold ${
        isPositive ? 'text-green-400' : 'text-red-400'
      }`}
    >
      {isPositive ? '+' : ''}{delta}
    </span>
  );
}

export default function MetricBars({ metrics, deltas, roleColor }) {
  const [animatedMetrics, setAnimatedMetrics] = useState(metrics);
  const prevMetrics = useRef(metrics);

  useEffect(() => {
    const start = prevMetrics.current;
    const end = metrics;
    const duration = 800;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedMetrics({
        usLead: Math.round(start.usLead + (end.usLead - start.usLead) * eased),
        safetyRisk: Math.round(start.safetyRisk + (end.safetyRisk - start.safetyRisk) * eased),
        publicTrust: Math.round(start.publicTrust + (end.publicTrust - start.publicTrust) * eased),
        agiProgress: Math.round(start.agiProgress + (end.agiProgress - start.agiProgress) * eased),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
    prevMetrics.current = end;
  }, [metrics]);

  return (
    <div className="w-full max-w-md space-y-4">
      {METRICS_CONFIG.map(({ key, label, code, inverted }) => {
        const value = animatedMetrics[key];
        const { color, level } = getThreatLevel(value, inverted);
        const delta = deltas ? deltas[key] : null;
        const isCritical = inverted ? value >= 75 : value <= 20;

        return (
          <div key={key}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="data-text text-slate-600 text-[10px]">{code}</span>
                <span className="data-text text-slate-400 text-[11px] uppercase">
                  {label}
                </span>
              </div>
              <div className="flex items-center">
                <span
                  className={`data-text text-[10px] font-bold mr-2 ${isCritical ? 'animate-pulse-slow' : ''}`}
                  style={{ color }}
                >
                  {level}
                </span>
                <span className="data-text text-white font-bold text-xs">
                  {value}
                </span>
                <DeltaIndicator delta={delta} />
              </div>
            </div>
            {/* Bar track */}
            <div className="h-1.5 bg-black/60 border border-slate-800/50 overflow-hidden relative">
              {/* Tick marks */}
              <div className="absolute inset-0 flex">
                {[25, 50, 75].map((tick) => (
                  <div
                    key={tick}
                    className="absolute top-0 bottom-0 w-px bg-slate-700/30"
                    style={{ left: `${tick}%` }}
                  />
                ))}
              </div>
              {/* Fill */}
              <div
                className="h-full transition-all duration-800 ease-out relative"
                style={{
                  width: `${value}%`,
                  backgroundColor: color,
                  boxShadow: `0 0 8px ${color}30`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
