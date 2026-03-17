import { ROLES } from '../gameData/roles';

function RoleCard({ role, onSelect }) {
  return (
    <button
      onClick={() => onSelect(role.id)}
      className="group relative w-full text-left rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
      style={{ '--role-color': role.color }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('.dossier-inner').style.borderColor = role.color;
        e.currentTarget.querySelector('.dossier-inner').style.boxShadow = `0 0 30px ${role.color}10, inset 0 1px 0 ${role.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('.dossier-inner').style.borderColor = 'rgba(203, 161, 53, 0.08)';
        e.currentTarget.querySelector('.dossier-inner').style.boxShadow = 'none';
      }}
    >
      <div
        className="dossier-inner p-6 border border-amber-900/8 bg-gradient-to-b from-amber-950/5 to-black/30 transition-all duration-300"
        style={{ borderColor: 'rgba(203, 161, 53, 0.08)' }}
      >
        {/* Top classification bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="data-text text-amber-700/40 text-[10px] uppercase tracking-[0.2em]">
            Personnel Dossier
          </div>
          <div className="data-text text-amber-800/30 text-[10px]">
            CLASSIFIED
          </div>
        </div>

        <div className="flex items-start gap-4">
          {/* Photo placeholder */}
          <div
            className="w-14 h-14 rounded flex items-center justify-center text-xl font-black shrink-0 border"
            style={{
              backgroundColor: `${role.color}08`,
              borderColor: `${role.color}30`,
              color: role.color,
            }}
          >
            {role.name[0]}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors tracking-tight">
              {role.name}
            </h3>
            <div className="data-text mt-0.5" style={{ color: `${role.color}cc` }}>
              {role.org}
            </div>
            <div className="h-px bg-gradient-to-r from-slate-700/50 to-transparent my-3" />
            <p className="text-sm text-slate-500 leading-relaxed">
              {role.description}
            </p>
          </div>
        </div>

        {/* Bottom: access level */}
        <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between">
          <div className="data-text text-slate-600 text-[10px]">
            CLEARANCE: TS//SCI
          </div>
          <div
            className="data-text text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: role.color }}
          >
            Select Operative &rarr;
          </div>
        </div>
      </div>
    </button>
  );
}

export default function RoleSelection({ onSelectRole }) {
  const roles = Object.values(ROLES);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="animate-fadeIn max-w-3xl w-full">
        {/* Classification header */}
        <div className="classified-line mb-8" />

        <div className="text-center mb-12">
          <div className="data-text text-red-500/80 tracking-[0.3em] mb-5 flex items-center justify-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse-slow" />
            CLASSIFIED SIMULATION
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse-slow" />
          </div>
          <h1 className="text-5xl font-black text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            THE AGI DECISION ROOM
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Navigate the most consequential technology race in human history.
            Seven stages. Four metrics. Every choice reshapes the next crisis.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="data-text text-amber-600/50 tracking-[0.2em] mb-5 text-center">
            SELECT YOUR OPERATIVE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} onSelect={onSelectRole} />
            ))}
          </div>
        </div>

        <div className="classified-line mt-8 mb-4" />
        <p className="text-center data-text text-slate-700">
          2026 &ndash; 2028 &middot; All narratives pre-authored &middot; No AI APIs utilized
        </p>
      </div>
    </div>
  );
}
