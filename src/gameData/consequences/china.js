export const chinaConsequences = {
  1: {
    entry: {
      A: {
        narrative:
          'Your covert procurement networks activate within weeks. Shell companies in Singapore, Dubai, and Kuala Lumpur begin funneling restricted NVIDIA chips through layers of intermediaries. Compute capacity jumps 30% within two months, and your training runs resume at near-frontier scale. But the supply chain is fragile, expensive, and every shipment is a potential diplomatic incident.',
        deltas: { usLead: -10, safetyRisk: +10, publicTrust: -8, agiProgress: +8 },
        intel: 'US Commerce Department investigators are tracing unusual chip shipments through Southeast Asian ports.',
      },
      B: {
        narrative:
          'You pour resources into SMIC and HiSilicon, and the results are encouraging but slow. Domestic chips close roughly a third of the performance gap, and your engineering teams develop clever optimization techniques that squeeze more capability from inferior hardware. The Politburo is satisfied with the direction if not the pace. The compute ceiling remains, but the ceiling is rising.',
        deltas: { usLead: -5, safetyRisk: +3, publicTrust: +2, agiProgress: +5 },
        intel: 'SMIC engineers report a promising process node breakthrough that could dramatically narrow the hardware gap.',
      },
      C: {
        narrative:
          'Your research labs pivot to algorithmic efficiency and within months produce genuinely novel results. A training methodology that achieves 40% compute reduction makes your existing hardware significantly more valuable. The approach attracts worldwide academic attention. The US lead remains, but you have changed the terms of the race from hardware to ideas.',
        deltas: { usLead: +3, safetyRisk: -5, publicTrust: +10, agiProgress: +2 },
        intel: 'Western AI labs are scrambling to replicate your efficiency results, and the US government is reconsidering whether chip controls alone can maintain the lead.',
      },
    },
  },

  2: {
    HAWK: {
      A: {
        narrative:
          'You open new procurement routes through Ethiopia, Uzbekistan, and Myanmar, creating a web of channels too complex for US enforcement to shut down simultaneously. Compute floods in, and your training capacity now rivals American labs. But the operation is sprawling, expensive, and the number of people who know about it keeps growing. A leak is not a matter of if but when.',
        deltas: { usLead: -12, safetyRisk: +12, publicTrust: -12, agiProgress: +10 },
        intel: 'A disgruntled intermediary in Singapore has contacted a Western journalist. The story could break within weeks.',
      },
      B: {
        narrative:
          'You dissolve the flagged shell companies and shift to smaller, more discreet acquisitions -- individual chip orders routed through academic institutions and private buyers. The flow slows to a trickle but remains undetected. You have preserved the existing compute gains while reducing exposure. The FBI investigation finds dissolved companies and cold trails.',
        deltas: { usLead: -6, safetyRisk: +5, publicTrust: -3, agiProgress: +5 },
        intel: 'US intelligence is re-focusing on your domestic semiconductor facilities after the shell company trail went cold.',
      },
      C: {
        narrative:
          'You wind down the covert network and redirect budgets into SMIC acceleration. The transition is painful -- compute growth stalls for months as domestic production ramps up. But when the Singapore shell company story eventually breaks in the press, China can credibly point to its domestic program and claim the procurement was a temporary measure, now discontinued.',
        deltas: { usLead: -3, safetyRisk: +2, publicTrust: -2, agiProgress: +3 },
        intel: 'SMIC is requesting emergency funding for a new fabrication line that could match Western capabilities within a year.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'SMIC pushes to mass production and the results are mixed -- yields are terrible, with nearly 60% of chips failing quality control, but the sheer volume means your data centers are filling with domestic hardware. Performance lags Western chips by a generation, but you are training models at scale on hardware no embargo can touch. The cost is staggering.',
        deltas: { usLead: -8, safetyRisk: +8, publicTrust: -3, agiProgress: +7 },
        intel: 'PLA leadership is eyeing your expanding compute capacity and wants to discuss military applications.',
      },
      B: {
        narrative:
          'You break ground on three new fabrication facilities in Wuhan, Chengdu, and Dalian. Construction timelines are aggressive but realistic -- first chips in 14 months. The investment signals to the world that China is building permanent, sanctions-proof semiconductor independence. Western analysts upgrade their assessments of Chinese AI timeline.',
        deltas: { usLead: -5, safetyRisk: +2, publicTrust: +3, agiProgress: +5 },
        intel: 'Belt and Road nations are inquiring whether your domestic AI hardware could be deployed in their countries.',
      },
      C: {
        narrative:
          'Production diversifies across SMIC, HiSilicon, and CXMT. The competition drives innovation -- each foundry pursues different architectural approaches, and the resulting ecosystem produces a range of specialized chips that collectively approach Western performance. No single point of failure, and the redundancy builds resilience into your entire AI infrastructure.',
        deltas: { usLead: -5, safetyRisk: +1, publicTrust: +4, agiProgress: +4 },
        intel: 'Your diversified chip portfolio is attracting attention from developing nations looking for non-American AI infrastructure options.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'You classify the research and pull the paper from public archives. The AI community reacts with disappointment and suspicion -- the brief moment of openness is replaced by familiar opacity. Western labs, denied the methodology, redouble their own efficiency research. Your advantage is preserved in the short term, but the goodwill evaporates and the narrative shifts from "China contributes" to "China hoards."',
        deltas: { usLead: -5, safetyRisk: +5, publicTrust: -10, agiProgress: +3 },
        intel: 'Several Chinese researchers who worked on the efficiency paper are privately expressing frustration with the classification decision.',
      },
      B: {
        narrative:
          'You release the full methodology and the response is extraordinary. Research groups worldwide build on your work, and Chinese AI researchers become the most cited in the field overnight. Top graduate students from MIT, Stanford, and Cambridge apply to your labs. The prestige effect is real and lasting -- China is now seen as a genuine contributor to AI science, not just a fast follower.',
        deltas: { usLead: +4, safetyRisk: -8, publicTrust: +15, agiProgress: +2 },
        intel: 'The US government is proposing bilateral AI safety talks, motivated partly by respect for your demonstrated capabilities.',
      },
      C: {
        narrative:
          'You offer the efficiency methodology in exchange for eased chip restrictions. The US is genuinely tempted -- the research is valuable and the offer creates a framework for reciprocity. After weeks of back-channel negotiations, a limited deal emerges: specific chip categories are released in exchange for continued research sharing. Neither side gets everything, but the precedent of technology-for-technology exchange is established.',
        deltas: { usLead: -3, safetyRisk: -3, publicTrust: +8, agiProgress: +3 },
        intel: 'Success in chip negotiations is building momentum for broader bilateral discussions on AI governance.',
      },
    },
  },

  3: {
    HAWK: {
      A: {
        narrative:
          'The compensation packages are irresistible. Eight of the twelve targeted researchers accept offers, including two former OpenAI alignment leads and a DeepMind principal scientist. Their arrival in Shenzhen accelerates your program by an estimated six to nine months. Washington is furious -- congressional hearings are convened, and proposals for "AI non-compete" legislation with adversary nations begin circulating.',
        deltas: { usLead: -13, safetyRisk: +10, publicTrust: -10, agiProgress: +10 },
        intel: 'The PLA has taken notice of your new Western researchers and is requesting direct access to their expertise for military AI programs.',
      },
      B: {
        narrative:
          'The Singapore joint lab opens to considerable international attention. Five Western researchers join, working alongside your best teams in a facility that is technically neutral territory. Knowledge transfer is slower than direct recruitment but more sustainable. The lab produces genuine collaborative research and serves as a talent pipeline that does not trigger the same political backlash as outright poaching.',
        deltas: { usLead: -8, safetyRisk: +5, publicTrust: -2, agiProgress: +7 },
        intel: 'The joint lab is producing research that has military applications, and both the PLA and Pentagon are paying close attention.',
      },
      C: {
        narrative:
          'Your intelligence services execute a sophisticated cyber operation against three Western AI labs, exfiltrating training methodologies, architecture designs, and alignment research. The stolen knowledge accelerates your program significantly. But digital forensics eventually trace the intrusion to state-sponsored actors, and the resulting diplomatic fallout poisons technology cooperation for years.',
        deltas: { usLead: -14, safetyRisk: +14, publicTrust: -15, agiProgress: +12 },
        intel: 'FBI cyber investigators have identified the intrusion signatures and are preparing to go public with attribution.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The Digital Silk Road 2.0 launches across 28 nations simultaneously. Chinese AI infrastructure powers everything from Nairobi\'s traffic systems to Kazakhstan\'s agricultural optimization. The data flowing back is extraordinary in its diversity and volume. Your training datasets now span languages, cultures, and domains that no Western lab can match. But dependency cuts both ways -- you now have obligations to maintain critical infrastructure for a quarter of the world\'s nations.',
        deltas: { usLead: -8, safetyRisk: +8, publicTrust: -5, agiProgress: +8 },
        intel: 'Partner nations are generating data at volumes that could transform your training capabilities -- if you can access it.',
      },
      B: {
        narrative:
          'Your conditional partnerships are transactional but effective. Fifteen nations sign agreements that include AI infrastructure in exchange for telecommunications exclusivity and diplomatic alignment. The partnerships are strategic rather than charitable, and the resulting bloc gives China a powerful voting coalition in international technology bodies. Western critics call it "digital colonialism" but the partner nations see tangible benefits.',
        deltas: { usLead: -6, safetyRisk: +4, publicTrust: -3, agiProgress: +6 },
        intel: 'A global AI standards competition is emerging, and your partner bloc could be decisive in determining the winner.',
      },
      C: {
        narrative:
          'You redirect compute and engineering resources to PLA applications. Military AI capabilities advance rapidly -- intelligence analysis, logistics optimization, and command support systems come online within months. The Belt and Road nations receive polite deferrals and promises of future engagement. The PLA is pleased, but your international influence-building stalls and the US narrative about China\'s military AI ambitions gains credibility.',
        deltas: { usLead: -7, safetyRisk: +10, publicTrust: -8, agiProgress: +5 },
        intel: 'PLA generals are asking for deeper AI integration, including autonomous weapons systems and strategic decision support.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'Your delegation arrives in Geneva with a genuine mandate to negotiate. Over three weeks of intensive talks, you share more about your capabilities than China has ever revealed publicly, and the Americans reciprocate. A framework for mutual safety standards begins to take shape. Hardliners in both capitals are uncomfortable, but the momentum is real. For the first time, the two AI superpowers are talking seriously about shared rules.',
        deltas: { usLead: +3, safetyRisk: -10, publicTrust: +12, agiProgress: +1 },
        intel: 'The Geneva talks are producing a draft agreement that includes provisions for mutual inspection of AI facilities.',
      },
      B: {
        narrative:
          'You participate actively in Geneva while keeping your most advanced programs classified. Your negotiators propose frameworks that align with your approach to AI development -- emphasizing state oversight and industrial policy rather than the Western model of lab self-governance. The talks produce preliminary agreements on information sharing and incident response. Both sides know the other is holding back, but the diplomatic infrastructure is real.',
        deltas: { usLead: -2, safetyRisk: -5, publicTrust: +5, agiProgress: +3 },
        intel: 'The preliminary agreements could evolve into a binding bilateral safety accord if both sides push forward.',
      },
      C: {
        narrative:
          'Your intelligence analysts attend the Geneva talks and extract significant insights about US capabilities from presentations, side conversations, and the questions American negotiators ask. The intelligence take is valuable -- you now have a much clearer picture of where the US actually stands. But your delegation\'s lack of substantive engagement is noticed, and the Americans leave Geneva questioning whether China was ever serious about cooperation.',
        deltas: { usLead: -6, safetyRisk: +5, publicTrust: -8, agiProgress: +5 },
        intel: 'The US is reconsidering whether to continue bilateral AI talks, and hawkish voices in Washington are gaining influence.',
      },
    },
  },

  4: {
    HAWK: {
      A: {
        narrative:
          'AI is integrated across all PLA domains within four months. Autonomous drone swarms, AI-guided missile systems, real-time battlefield decision support, and strategic planning algorithms go live simultaneously. The PLA\'s operational capability takes a quantum leap. But the systems are deployed faster than they can be properly tested, and the lack of human-in-the-loop safeguards terrifies your own engineers. International observers note the acceleration with alarm.',
        deltas: { usLead: -12, safetyRisk: +15, publicTrust: -12, agiProgress: +8 },
        intel: 'The PLA has war-gamed a Taiwan scenario with the new AI systems and the results have reached the Standing Committee.',
      },
      B: {
        narrative:
          'AI integration into command-and-control systems gives PLA commanders unprecedented situational awareness and decision speed while keeping humans in the loop for weapons employment. The compromise satisfies most military leaders and keeps your engineers from resigning in protest. Intelligence analysis and communications encryption improve dramatically. The US takes notice but cannot claim China has crossed the autonomous weapons line.',
        deltas: { usLead: -8, safetyRisk: +8, publicTrust: -5, agiProgress: +6 },
        intel: 'Military AI war-games are producing provocative results about Taiwan contingency timelines.',
      },
      C: {
        narrative:
          'You restrict AI to logistics, imagery analysis, and signals intelligence. The PLA\'s supply chain optimization improves by 40%, satellite analysis becomes near-real-time, and signals intelligence processing accelerates enormously. Military leaders are frustrated by the limitations but the capability gains in support functions are undeniable. The restraint also gives you credibility when you claim China opposes autonomous weapons.',
        deltas: { usLead: -5, safetyRisk: +4, publicTrust: +2, agiProgress: +4 },
        intel: 'Despite your restrictions, PLA leadership is quietly exploring how to expand AI\'s role in active military operations.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'Data from 28 nations flows into your training clusters, and the results are transformative. Models trained on this diverse, multilingual, multi-domain data outperform Western equivalents on global benchmarks. The capability jump is remarkable. But when investigative journalists discover the data flows, partner nations erupt in anger. Three countries threaten to terminate their AI infrastructure agreements, and the "digital sovereignty" movement gains powerful new allies.',
        deltas: { usLead: -10, safetyRisk: +10, publicTrust: -12, agiProgress: +10 },
        intel: 'A coalition of partner nations is demanding an audit of data practices, threatening the foundation of your international AI network.',
      },
      B: {
        narrative:
          'Formal data governance agreements are negotiated with each partner nation. The process is slow and the constraints are real -- you cannot use certain data categories, you must provide audit logs, and several nations demand on-site oversight. But the agreements create a legitimate, sustainable framework for data access. Partner trust deepens, and the governance model itself becomes a competitive advantage against the unregulated American approach.',
        deltas: { usLead: -5, safetyRisk: +2, publicTrust: +5, agiProgress: +5 },
        intel: 'Your AI standard is gaining traction in international bodies, and a global standards competition is heating up.',
      },
      C: {
        narrative:
          'Federated learning systems are deployed across partner nations. Training happens locally, only model updates are transmitted, and data sovereignty is preserved. The approach is technically demanding and slower than centralized training, but your engineers develop novel aggregation methods that capture most of the value. Partner nations praise the system as proof that AI development does not require surrendering data. The approach becomes a model that other nations want to adopt.',
        deltas: { usLead: -3, safetyRisk: -3, publicTrust: +10, agiProgress: +3 },
        intel: 'The federated approach is attracting interest from European nations skeptical of both American and Chinese data practices.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'You sign the bilateral AI safety accord in a ceremony that dominates global headlines. The implementation begins immediately -- capability disclosures, incident hotlines, and inspection protocols are established within months. For the first time, the two AI superpowers have a binding framework for managing their competition. Markets rally. Academic researchers on both sides celebrate. The question is whether the framework can survive contact with the reality of secret programs and military competition.',
        deltas: { usLead: +5, safetyRisk: -12, publicTrust: +15, agiProgress: -2 },
        intel: 'Under the accord\'s terms, the first mutual inspection team will request access to your advanced research facilities within months.',
      },
      B: {
        narrative:
          'The accord is signed with fanfare, but behind the scenes you maintain a classified program that exceeds declared thresholds. The dual structure is precarious -- designated inspection facilities are carefully curated while your most advanced work continues in undisclosed locations. The public diplomacy is effective and international trust grows, but you are building on a foundation that could collapse if the hidden programs are discovered.',
        deltas: { usLead: -4, safetyRisk: +3, publicTrust: +5, agiProgress: +5 },
        intel: 'US intelligence is investing heavily in monitoring your undeclared facilities, and the inspection provisions may reveal more than you planned.',
      },
      C: {
        narrative:
          'You reject the draft accord and propose alternatives -- voluntary guidelines, information sharing without inspections, aspirational statements without binding commitments. The US is disappointed, the diplomatic momentum stalls, and the window for cooperation narrows. Hawks in Washington use the rejection to argue that engagement with China on AI is futile. But you retain full freedom of action and your programs continue without constraint.',
        deltas: { usLead: -2, safetyRisk: +5, publicTrust: -8, agiProgress: +4 },
        intel: 'Without an accord, US intelligence is shifting to aggressive monitoring of your AI programs, and confrontation is becoming more likely.',
      },
    },
  },

  5: {
    HAWK: {
      A: {
        narrative:
          'You brief the Standing Committee with a clear recommendation: the AI analysis shows a closing window of operational advantage. The committee members exchange glances that carry the weight of history. The decision to accelerate contingency planning is made that evening. Military budgets surge, diplomatic messaging toward Taiwan hardens, and the AI system is tasked with refining operational plans. You have set in motion something that may be impossible to stop.',
        deltas: { usLead: -14, safetyRisk: +15, publicTrust: -15, agiProgress: +8 },
        intel: 'Your military AI program is conducting live autonomous weapons tests, and US satellites are watching.',
      },
      B: {
        narrative:
          'You present the simulation data to the Standing Committee with full confidence intervals, limitations, and caveats. The committee takes the findings seriously but does not rush to action. Additional simulations are ordered with different assumptions. The process buys time for cooler heads while ensuring leadership has accurate information. The PLA is given authorization for enhanced readiness but not escalation.',
        deltas: { usLead: -8, safetyRisk: +8, publicTrust: -5, agiProgress: +6 },
        intel: 'The PLA is conducting increasingly visible military exercises, and satellite imagery is drawing international attention.',
      },
      C: {
        narrative:
          'You suppress the most provocative findings and present a conservative assessment emphasizing risks and uncertainties. The Standing Committee, deprived of the most alarming data, makes measured decisions. Military readiness continues at its current pace. You have used your position to prevent escalation, but the data you buried will not stay buried forever -- other analysts have access to the models, and the findings will be independently replicated.',
        deltas: { usLead: -4, safetyRisk: +3, publicTrust: +2, agiProgress: +4 },
        intel: 'A PLA intelligence officer is independently running the same simulations you suppressed, and the results are reaching other Standing Committee members.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'You deploy economic incentives across forty undecided nations -- preferential trade terms, infrastructure grants, and subsidized AI services for those who adopt your standard. Twenty-six nations commit within three months. The US-backed standard is pushed to the margins, adopted mainly by wealthy Western democracies and their closest allies. You now control the de facto global AI ecosystem standard, with all the influence that entails.',
        deltas: { usLead: -10, safetyRisk: +6, publicTrust: -8, agiProgress: +8 },
        intel: 'Your AI infrastructure now powers critical systems in thirty nations, giving you enormous but untested leverage.',
      },
      B: {
        narrative:
          'Your diplomats work the ITU and ISO committees with precision, leveraging procedural knowledge and bloc voting to advance your standard through institutional channels. The process is slower than economic incentives but carries greater legitimacy. After months of committee work, your standard is adopted as the ITU recommended framework -- not binding, but enormously influential. The US protests but the institutional process was followed correctly.',
        deltas: { usLead: -7, safetyRisk: +3, publicTrust: +2, agiProgress: +6 },
        intel: 'Your growing institutional influence over AI standards is giving you economic leverage that could be used diplomatically.',
      },
      C: {
        narrative:
          'You propose merging the two competing standards into a single interoperable framework. The proposal is bold and requires genuine compromise -- your data governance approach combined with American interoperability requirements. After difficult negotiations, a hybrid standard emerges. Neither side controls the ecosystem exclusively, but the global AI community avoids the costly fragmentation of incompatible systems. Both standards bodies claim credit.',
        deltas: { usLead: -3, safetyRisk: -4, publicTrust: +8, agiProgress: +4 },
        intel: 'The merged standard creates new transparency requirements that could complicate your classified AI programs.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'You allow full inspection access as the accord requires. The inspectors discover you are further ahead than declared -- your capabilities exceed the thresholds by a meaningful margin. The revelation creates a brief diplomatic crisis, but your transparency in allowing the discovery builds paradoxical trust. Both sides agree to update the thresholds. The accord bends but does not break, and the precedent of honest disclosure under pressure strengthens the entire framework.',
        deltas: { usLead: +3, safetyRisk: -10, publicTrust: +10, agiProgress: +1 },
        intel: 'US intelligence is about to go public with claims of Chinese accord violations, and how you respond will determine the framework\'s survival.',
      },
      B: {
        narrative:
          'Inspectors access your civilian facilities and find them consistent with declared capabilities. Military-adjacent programs remain hidden behind national security exemptions that the accord technically permits. The inspectors note the exemptions in their report, and trust erodes subtly. The Americans invoke their own exemptions in reciprocity, and the inspection regime becomes a carefully choreographed exercise in showing only what both sides want shown.',
        deltas: { usLead: -2, safetyRisk: +3, publicTrust: -2, agiProgress: +3 },
        intel: 'The US is preparing intelligence reports that challenge your declared capabilities, threatening the accord\'s credibility.',
      },
      C: {
        narrative:
          'A well-timed escalation over a trade dispute provides diplomatic cover to postpone inspections by three months. You use the time to restructure your advanced programs, moving the most sensitive work to facilities that can be plausibly excluded from inspection scope. The delay is noted internationally and damages the accord\'s credibility. When inspections eventually occur, they find only what you want them to find.',
        deltas: { usLead: -4, safetyRisk: +6, publicTrust: -10, agiProgress: +5 },
        intel: 'US intelligence analysts are not fooled by the restructuring and are preparing detailed evidence of accord violations.',
      },
    },
  },

  6: {
    HAWK: {
      A: {
        narrative:
          'Your ministry dismisses the satellite imagery as misinterpreted conventional exercises. The denial is technically deniable but convinces no one who matters. Intelligence agencies worldwide now operate on the assumption that China possesses autonomous weapons capability. The ambiguity serves some strategic purposes -- adversaries must plan for capabilities you may or may not have. But the denial damages your credibility on every other AI-related issue.',
        deltas: { usLead: -8, safetyRisk: +10, publicTrust: -10, agiProgress: +6 },
        intel: 'Your latest AI system is exhibiting capabilities that may constitute artificial general intelligence. The Standing Committee must be briefed.',
      },
      B: {
        narrative:
          'You acknowledge a defensive technology test while emphasizing human-in-the-loop protocols and defensive intent. The framing is credible enough to prevent diplomatic crisis while confirming capability. International reaction is alarmed but measured. The US accelerates its own autonomous weapons programs in response, and a new AI arms race dynamic solidifies. But your honest acknowledgment preserves enough credibility for future diplomacy.',
        deltas: { usLead: -6, safetyRisk: +8, publicTrust: -5, agiProgress: +6 },
        intel: 'Your AI research program is approaching a threshold that may represent artificial general intelligence.',
      },
      C: {
        narrative:
          'You announce autonomous weapons capabilities as a strategic deterrent, publishing selected footage of the drone swarm exercise. The demonstration shocks the international community. Global stock markets drop. Emergency UN sessions are convened. But the deterrent effect is real -- the military calculus around Taiwan and other contingencies shifts dramatically. No nation will risk conflict with a demonstrated autonomous weapons power without absolute certainty of success.',
        deltas: { usLead: -12, safetyRisk: +14, publicTrust: -15, agiProgress: +8 },
        intel: 'In the shadow of the weapons announcement, your research labs are making a breakthrough that dwarfs anything military -- AGI is within reach.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'You begin wielding infrastructure leverage explicitly. When a partner nation votes against China in the UN, AI system maintenance is "delayed." When another negotiates a favorable trade deal, they receive priority upgrades. The results are effective -- diplomatic alignment improves across your network. But the coercion is noticed. Three nations begin quietly negotiating with the US for alternative AI infrastructure, and the "trustworthy partner" narrative that built your network is badly damaged.',
        deltas: { usLead: -8, safetyRisk: +8, publicTrust: -12, agiProgress: +5 },
        intel: 'Your AI research program is approaching capabilities that may constitute a breakthrough to artificial general intelligence.',
      },
      B: {
        narrative:
          'You maintain infrastructure relationships without explicit coercion. The leverage exists as an unspoken reality -- everyone understands the dependency, and that understanding alone shapes diplomatic behavior. It is the most Chinese approach possible: power exercised through implication rather than demonstration. Partner nations remain aligned because the alternative is uncertain, and your reputation as a reliable technology partner survives intact.',
        deltas: { usLead: -5, safetyRisk: +3, publicTrust: +2, agiProgress: +5 },
        intel: 'Your balanced approach has created the conditions for a potential AGI breakthrough through combined domestic and international resources.',
      },
      C: {
        narrative:
          'You voluntarily offer partner nations tools for reducing their dependency on your systems -- open-source AI components, engineer training programs, and migration pathways to locally-maintained infrastructure. The gesture is unprecedented and generates enormous goodwill. Five nations that were considering switching to US alternatives recommit to partnership. The trust dividend is more valuable than the leverage you surrendered, and your reputation as a responsible technology power is cemented.',
        deltas: { usLead: -2, safetyRisk: -5, publicTrust: +12, agiProgress: +3 },
        intel: 'International goodwill and continued data partnerships are contributing to a potential AGI breakthrough in your research labs.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'You challenge the US to present their full evidence publicly, betting that the exaggerated elements will discredit the entire case under scrutiny. The gamble partially pays off -- several specific claims are debunked by independent analysts, and the narrative shifts from "China is cheating" to "US intelligence is unreliable." But the accurate portions of the evidence remain, and the detailed scrutiny reveals capabilities you would have preferred to keep ambiguous.',
        deltas: { usLead: -3, safetyRisk: +4, publicTrust: -2, agiProgress: +3 },
        intel: 'Despite the diplomatic turbulence, your research program is approaching capabilities that may represent AGI.',
      },
      B: {
        narrative:
          'You invite a multinational inspection team with expanded access -- not just bilateral, but including European, Japanese, and Indian representatives. The inspectors find your programs are somewhat beyond declared thresholds but not the dramatic violations the US alleged. The multinational validation strengthens your position and the accord. The US is embarrassed by its exaggerated claims, and the verification framework emerges stronger for having survived a crisis.',
        deltas: { usLead: +3, safetyRisk: -8, publicTrust: +12, agiProgress: +1 },
        intel: 'Your research program, validated by international inspection, is on the verge of a breakthrough that the safety framework was designed to manage -- AGI.',
      },
      C: {
        narrative:
          'You present intelligence showing US programs that push the boundaries of the accord -- aggressive capability development, potential autonomous weapons research, and incomplete disclosures. The counter-accusation creates a symmetry of blame that neutralizes the diplomatic crisis. Both sides agree to strengthen verification mechanisms rather than collapse the accord. The outcome is a draw, but the trust underlying the agreement is significantly damaged.',
        deltas: { usLead: -4, safetyRisk: +5, publicTrust: -5, agiProgress: +4 },
        intel: 'Through the turbulence, your research labs are approaching artificial general intelligence -- and the safety framework\'s ultimate test.',
      },
    },
  },

  7: {
    HAWK: {
      A: {
        narrative:
          'China announces AGI to the world in a meticulously staged demonstration broadcast globally. The system solves previously unsolvable problems in real time, designs novel technologies, and demonstrates reasoning that is unmistakably general. The psychological impact is seismic -- financial markets convulse, governments convene emergency sessions, and the global power balance shifts overnight. China is the first declared AGI power, and nothing will ever be the same.',
        deltas: { usLead: -15, safetyRisk: +12, publicTrust: -10, agiProgress: +15 },
        intel: 'Final assessment: China achieved AGI through aggressive means and announced it to the world. The international order is permanently altered, and the lack of safety frameworks means humanity faces an uncontrolled intelligence explosion.',
      },
      B: {
        narrative:
          'AGI capabilities are integrated into military systems within 72 hours of confirmation. Strategic planning, cyber operations, intelligence analysis, and autonomous weapons systems all receive AGI-level reasoning. The PLA achieves a decisive qualitative advantage that no conventional force can match. The Standing Committee is briefed that China now possesses capabilities that make military competition with the United States fundamentally asymmetric. The question is no longer whether China can win a conflict, but whether anyone else knows it yet.',
        deltas: { usLead: -15, safetyRisk: +15, publicTrust: -15, agiProgress: +12 },
        intel: 'Final assessment: China achieved AGI and immediately weaponized it. The world stands on the brink of an intelligence-driven arms race with no rules, no frameworks, and no precedent for what comes next.',
      },
      C: {
        narrative:
          'AGI remains China\'s most closely guarded secret. The system operates in an air-gapped facility known to fewer than twenty people, quietly accelerating every scientific, economic, and strategic program it is applied to. The effects will take months to become visible to outside observers, but when they do, the world will struggle to explain how China suddenly leapt ahead in every domain simultaneously. You have the most powerful technology in human history, and no one knows.',
        deltas: { usLead: -12, safetyRisk: +10, publicTrust: -5, agiProgress: +10 },
        intel: 'Final assessment: China achieved AGI and chose secrecy. The hidden advantage grows daily, but the absence of any safety framework or international oversight means the technology develops in a complete governance vacuum.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The joint announcement is a diplomatic masterstroke. Twelve partner nations stand alongside China as AGI is revealed to the world -- not as a Chinese achievement but as a triumph of South-South cooperation and alternative development models. The coalition framing distributes the geopolitical shock across many capitals and prevents the narrative from becoming solely about US-China competition. The developing world claims its place in the AI era, with China at its center.',
        deltas: { usLead: -12, safetyRisk: +5, publicTrust: +3, agiProgress: +12 },
        intel: 'Final assessment: China achieved AGI through balanced strategy and shared the announcement with allies. The coalition approach provides some stability but the absence of comprehensive safety frameworks leaves significant risks unaddressed.',
      },
      B: {
        narrative:
          'The Standing Committee is briefed first, then close allies, then the world. The staged disclosure gives each audience time to process and respond. Partner nations feel respected, the international community receives adequate warning, and China maintains narrative control throughout. The announcement is measured, factual, and accompanied by proposals for international governance. It is not the announcement the hawks wanted, but it positions China as a responsible AGI power.',
        deltas: { usLead: -10, safetyRisk: +2, publicTrust: +5, agiProgress: +10 },
        intel: 'Final assessment: China achieved AGI through a balanced approach and disclosed responsibly. Some international frameworks exist, and the measured disclosure preserves relationships that will be critical for governing what comes next.',
      },
      C: {
        narrative:
          'AGI remains undisclosed. You continue developing the system in secret, applying its capabilities to economic planning, scientific research, and strategic analysis. China\'s GDP growth accelerates mysteriously. Scientific publications from Chinese labs surge in quality and quantity. Intelligence analysts worldwide sense something has changed but cannot identify what. The advantage compounds daily, but so does the risk of discovery and the cost of having no framework for the technology you control.',
        deltas: { usLead: -10, safetyRisk: +8, publicTrust: -5, agiProgress: +8 },
        intel: 'Final assessment: China achieved AGI through balanced means but chose secrecy. The hidden advantage is enormous, but the lack of disclosure means no governance framework exists for the most powerful technology ever created.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'AGI is disclosed through the bilateral safety accord\'s joint commission, exactly as the framework intended. The process is orderly: verified by international inspectors, announced jointly by the commission co-chairs, and accompanied by immediate activation of the accord\'s advanced capability protocols. It is the finest hour for international AI governance. The framework bends under the weight of the achievement but holds. For the first time, a civilization-altering technology is introduced to the world through institutions designed for exactly this moment.',
        deltas: { usLead: +5, safetyRisk: -12, publicTrust: +15, agiProgress: +8 },
        intel: 'Final assessment: China achieved AGI through cooperation and disclosed through international institutions. The safety framework holds, providing humanity its best chance at navigating the AGI transition with both nations at the table.',
      },
      B: {
        narrative:
          'You call your American counterpart on a secure line and deliver the news directly. The bilateral disclosure is tense, honest, and consequential. Within days, the two nations issue a joint statement confirming AGI achievement and outlining shared governance principles. The bilateral approach excludes other nations initially, drawing criticism, but the stability of the US-China consensus provides a foundation for the broader multilateral process that follows.',
        deltas: { usLead: +2, safetyRisk: -8, publicTrust: +8, agiProgress: +10 },
        intel: 'Final assessment: China achieved AGI cooperatively and disclosed bilaterally to the US first. The superpower consensus provides stability, though other nations will demand inclusion in governance decisions that affect all of humanity.',
      },
      C: {
        narrative:
          'Despite years of cooperation and a functioning safety framework, you invoke national sovereignty and handle AGI disclosure on your own terms. The decision shocks your international partners and damages the framework you helped build. China announces AGI unilaterally, and the bilateral accord -- never designed for this kind of betrayal -- collapses under the strain. The cooperative path that got you here is abandoned at the moment it mattered most. Trust, once broken at this level, may never be rebuilt.',
        deltas: { usLead: -8, safetyRisk: +8, publicTrust: -12, agiProgress: +10 },
        intel: 'Final assessment: China achieved AGI through cooperation but abandoned the framework at the critical moment. The safety architecture collapses, and the trust that took years to build is destroyed in a single decision.',
      },
    },
  },
};
