import { useState, useCallback } from 'react';
import { ROLES, TOTAL_STAGES, OPTION_TO_TRACK, getStage, getConsequence, getEnding, clampMetrics } from './gameData';
import RoleSelection from './components/RoleSelection';
import StageScreen from './components/StageScreen';
import ConsequenceCard from './components/ConsequenceCard';
import EndingScreen from './components/EndingScreen';

const PHASES = {
  ROLE_SELECT: 'ROLE_SELECT',
  STAGE: 'STAGE',
  CONSEQUENCE: 'CONSEQUENCE',
  ENDING: 'ENDING',
};

export default function App() {
  const [phase, setPhase] = useState(PHASES.ROLE_SELECT);
  const [roleId, setRoleId] = useState(null);
  const [stageNumber, setStageNumber] = useState(1);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [deltas, setDeltas] = useState(null);
  const [currentConsequence, setCurrentConsequence] = useState(null);
  const [currentStage, setCurrentStage] = useState(null);
  const [choices, setChoices] = useState([]);
  const [stageHistory, setStageHistory] = useState([]);
  const [endingKey, setEndingKey] = useState(null);

  const role = roleId ? ROLES[roleId] : null;

  const handleSelectRole = useCallback((id) => {
    const r = ROLES[id];
    setRoleId(id);
    setMetrics({ ...r.startingMetrics });
    setStageNumber(1);
    setCurrentTrack(null);
    setChoices([]);
    setStageHistory([]);
    setDeltas(null);
    setCurrentStage(null);
    setCurrentConsequence(null);
    setPhase(PHASES.STAGE);
  }, []);

  const handleDecision = useCallback((optionId) => {
    const stage = getStage(roleId, stageNumber, currentTrack);
    setCurrentStage(stage);

    const consequence = getConsequence(roleId, stageNumber, currentTrack, optionId);

    const newMetrics = clampMetrics({
      usLead: metrics.usLead + consequence.deltas.usLead,
      safetyRisk: metrics.safetyRisk + consequence.deltas.safetyRisk,
      publicTrust: metrics.publicTrust + consequence.deltas.publicTrust,
      agiProgress: metrics.agiProgress + consequence.deltas.agiProgress,
    });

    setDeltas(consequence.deltas);
    setMetrics(newMetrics);
    setChoices((prev) => [...prev, optionId]);
    setStageHistory((prev) => [...prev, { title: stage.title, quarter: stage.quarter, track: currentTrack }]);

    const newTrack = OPTION_TO_TRACK[optionId];
    setCurrentTrack(newTrack);

    if (newMetrics.safetyRisk >= 100) {
      setCurrentConsequence({ ...consequence, earlyEnding: 'catastrophic' });
    } else if (newMetrics.agiProgress >= 100 && stageNumber < TOTAL_STAGES) {
      setCurrentConsequence({ ...consequence, earlyEnding: 'uncontrolled' });
    } else {
      setCurrentConsequence(consequence);
    }

    setPhase(PHASES.CONSEQUENCE);
  }, [stageNumber, roleId, metrics, currentTrack]);

  const handleContinue = useCallback(() => {
    if (currentConsequence?.earlyEnding) {
      setEndingKey(currentConsequence.earlyEnding);
      setPhase(PHASES.ENDING);
      return;
    }

    if (stageNumber >= TOTAL_STAGES) {
      setEndingKey(getEnding(metrics));
      setPhase(PHASES.ENDING);
      return;
    }

    setStageNumber((prev) => prev + 1);
    setDeltas(null);
    setCurrentConsequence(null);
    setCurrentStage(null);
    setPhase(PHASES.STAGE);
  }, [stageNumber, metrics, currentConsequence]);

  const handleRestart = useCallback(() => {
    setPhase(PHASES.ROLE_SELECT);
    setRoleId(null);
    setStageNumber(1);
    setCurrentTrack(null);
    setMetrics(null);
    setDeltas(null);
    setCurrentConsequence(null);
    setCurrentStage(null);
    setChoices([]);
    setStageHistory([]);
    setEndingKey(null);
  }, []);

  const displayStage = phase === PHASES.CONSEQUENCE && currentStage
    ? currentStage
    : (roleId ? getStage(roleId, stageNumber, currentTrack) : null);

  return (
    <div className="min-h-screen bg-[#060810]">
      {/* Top bar — classified header */}
      {phase !== PHASES.ROLE_SELECT && phase !== PHASES.ENDING && role && (
        <div className="border-b border-amber-900/20 bg-black/60 backdrop-blur-sm px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="data-text text-amber-600/80 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: role.color }} />
              <span className="text-amber-500/60">OPERATOR:</span>
              <span className="text-slate-300">{role.name}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">{role.org}</span>
            </div>
          </div>
          <div className="data-text text-amber-700/50 uppercase">
            TS//SCI//NOFORN &mdash; AGI Decision Room
          </div>
        </div>
      )}

      {phase === PHASES.ROLE_SELECT && (
        <RoleSelection onSelectRole={handleSelectRole} />
      )}

      {phase === PHASES.STAGE && metrics && displayStage && (
        <StageScreen
          stage={displayStage}
          stageNumber={stageNumber}
          totalStages={TOTAL_STAGES}
          metrics={metrics}
          deltas={deltas}
          roleColor={role.color}
          roleId={roleId}
          currentTrack={currentTrack}
          onDecision={handleDecision}
        />
      )}

      {phase === PHASES.CONSEQUENCE && currentConsequence && displayStage && (
        <>
          <StageScreen
            stage={displayStage}
            stageNumber={stageNumber}
            totalStages={TOTAL_STAGES}
            metrics={metrics}
            deltas={deltas}
            roleColor={role.color}
            roleId={roleId}
            currentTrack={currentTrack}
            onDecision={() => {}}
          />
          <ConsequenceCard
            consequence={currentConsequence}
            onContinue={handleContinue}
            isLastStage={stageNumber >= TOTAL_STAGES || !!currentConsequence.earlyEnding}
            roleColor={role.color}
          />
        </>
      )}

      {phase === PHASES.ENDING && endingKey && (
        <EndingScreen
          endingKey={endingKey}
          metrics={metrics}
          role={role}
          choices={choices}
          stageHistory={stageHistory}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
