import { ROLES } from './roles';
import { ENDINGS, getEnding, clampMetrics } from './endings';
import { altmanStages } from './stages/altman';
import { amodeiStages } from './stages/amodei';
import { presidentStages } from './stages/president';
import { chinaStages } from './stages/china';
import { altmanConsequences } from './consequences/altman';
import { amodeiConsequences } from './consequences/amodei';
import { presidentConsequences } from './consequences/president';
import { chinaConsequences } from './consequences/china';

export const TRACKS = {
  HAWK: 'HAWK',
  MODERATE: 'MODERATE',
  DOVE: 'DOVE',
};

export const OPTION_TO_TRACK = {
  A: TRACKS.HAWK,
  B: TRACKS.MODERATE,
  C: TRACKS.DOVE,
};

const ALL_STAGES = {
  altman: altmanStages,
  amodei: amodeiStages,
  president: presidentStages,
  china: chinaStages,
};

const ALL_CONSEQUENCES = {
  altman: altmanConsequences,
  amodei: amodeiConsequences,
  president: presidentConsequences,
  china: chinaConsequences,
};

export const TOTAL_STAGES = 7;

export function getStage(roleId, stageNumber, currentTrack) {
  const track = stageNumber === 1 ? 'entry' : currentTrack;
  return ALL_STAGES[roleId]?.[stageNumber]?.[track];
}

export function getConsequence(roleId, stageNumber, currentTrack, optionId) {
  const track = stageNumber === 1 ? 'entry' : currentTrack;
  return ALL_CONSEQUENCES[roleId]?.[stageNumber]?.[track]?.[optionId];
}

export { ROLES, ENDINGS, getEnding, clampMetrics };
