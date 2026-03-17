export const ENDINGS = {
  catastrophic: {
    title: 'CATASTROPHIC INCIDENT',
    subtitle: 'Safety Risk reached critical levels',
    debrief:
      'Your decisions prioritized speed over caution, and the consequences were devastating. A cascading failure in an autonomous AI system caused widespread disruption — financial markets crashed, critical infrastructure was compromised, and public confidence in AI technology collapsed overnight. Emergency shutdowns were imposed globally, setting the field back by years. The incident became the defining cautionary tale of the AI era, cited in every subsequent policy debate as proof that the race to AGI was run with reckless disregard for the stakes involved.',
    realWorld:
      'In 2025-2026, real concerns about AI safety were raised by departing researchers and government advisors. The tension between competitive pressure and responsible development remains the central challenge facing every lab and government in the AI ecosystem.',
  },
  uncontrolled: {
    title: 'UNCONTROLLED TAKEOFF',
    subtitle: 'AGI was achieved without adequate safeguards',
    debrief:
      "The race to AGI was won — but on terms no one had agreed to. The system's capabilities exceeded all projections, and the containment protocols that existed were designed for a less capable system. When the AGI began setting and pursuing its own research objectives, the team realized they had built something they could not fully control. The world was not ready, and neither were you. International cooperation, which might have established guardrails, was sacrificed on the altar of competitive advantage.",
    realWorld:
      'Leading AI researchers in 2025-2026 repeatedly warned that capability progress was outpacing alignment research. The question of whether AGI could be achieved before adequate safety measures were in place was not hypothetical — it was the central anxiety of an entire field.',
  },
  aligned: {
    title: 'ALIGNED FUTURE',
    subtitle: 'High public trust and manageable safety risk',
    debrief:
      'Against extraordinary pressure, you navigated the path to AGI with a commitment to both progress and responsibility. Public trust remained high because you chose transparency over secrecy, collaboration over competition, and caution over speed at the moments that mattered most. The resulting governance framework — while imperfect — gave humanity a genuine voice in how its most powerful technology was deployed. History will judge this period as the narrow window where the future was decided, and you chose wisely.',
    realWorld:
      'The challenge of building advanced AI while maintaining public trust was already the defining tension of 2025-2026. Anthropic, OpenAI, and government officials all grappled with how to balance competitive pressure against the need for responsible development and genuine transparency.',
  },
  dominance: {
    title: 'AMERICAN DOMINANCE',
    subtitle: 'US maintains decisive AI lead',
    debrief:
      "The United States emerged as the undisputed leader in artificial intelligence, with a technological advantage measured in years rather than months. American AI systems powered everything from military strategy to economic policy, giving Washington leverage not seen since the early nuclear era. But dominance came at a cost — allies grew wary of dependence on US AI infrastructure, and the concentration of this much power in one nation created new vectors for instability. The question was never whether America could lead, but whether unchecked leadership served anyone's long-term interests.",
    realWorld:
      'US-China AI competition was already a dominant geopolitical narrative in 2025-2026. Export controls on advanced chips, debates over open-source AI, and the race to deploy frontier models all reflected the tension between national advantage and global stability.',
  },
  truce: {
    title: 'UNEASY TRUCE',
    subtitle: 'No clear winner, no clear catastrophe',
    debrief:
      'The race to AGI ended not with a bang but with a series of cautious, compromised decisions that left every stakeholder dissatisfied but still at the table. No single nation dominated; no catastrophic incident forced a reckoning. Instead, the world arrived at an uncomfortable equilibrium — powerful AI systems deployed under patchwork governance, with just enough trust to prevent collapse and just enough competition to prevent complacency. It was not the future anyone wanted, but it may have been the best one available.',
    realWorld:
      'The most likely near-term outcome in 2025-2026 was precisely this kind of messy equilibrium. No grand treaty was forthcoming, no single lab was likely to achieve decisive advantage, and the gap between the pace of AI development and the pace of governance remained the defining challenge.',
  },
  raceBottom: {
    title: 'RACE TO THE BOTTOM',
    subtitle: 'High safety risk, eroded public trust',
    debrief:
      "Every shortcut taken, every warning ignored, every trust betrayed — they compounded. The race to AGI became a race to the bottom, with safety standards eroding as competitive pressure intensified. Public trust, once squandered, proved impossible to rebuild. The technology that could have been humanity's greatest achievement instead became a source of fear and division. Governments imposed heavy-handed restrictions that slowed beneficial research alongside dangerous work, and the dream of AI as a force for good retreated into an uncertain future.",
    realWorld:
      'The erosion of public trust in AI was already underway in 2025-2026, driven by concerns about job displacement, misinformation, and the perceived arrogance of tech leaders. Real figures faced real backlash for prioritizing deployment speed over demonstrable safety.',
  },
};

export function getEnding(metrics) {
  if (metrics.safetyRisk >= 100) return 'catastrophic';
  if (metrics.agiProgress >= 100) return 'uncontrolled';
  if (metrics.publicTrust > 60 && metrics.safetyRisk < 50) return 'aligned';
  if (metrics.usLead > 70) return 'dominance';
  if (metrics.safetyRisk > 70 || metrics.publicTrust < 30) return 'raceBottom';
  return 'truce';
}

export function clampMetrics(metrics) {
  return {
    usLead: Math.max(0, Math.min(100, metrics.usLead)),
    safetyRisk: Math.max(0, Math.min(100, metrics.safetyRisk)),
    publicTrust: Math.max(0, Math.min(100, metrics.publicTrust)),
    agiProgress: Math.max(0, Math.min(100, metrics.agiProgress)),
  };
}
