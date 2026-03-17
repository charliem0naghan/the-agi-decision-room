export const presidentConsequences = {
  1: {
    entry: {
      A: {
        narrative:
          'Your executive order lands like a thunderbolt. Within weeks, AI systems are being deployed across federal agencies at breakneck speed. The Departments of Defense and Energy move fastest, integrating autonomous AI into operations that previously required months of human review. Silicon Valley celebrates, stock prices soar, and America\'s AI lead widens visibly. But the speed leaves safety teams scrambling, and intelligence reports indicate Beijing has shifted to an emergency footing in response.',
        deltas: { usLead: +12, safetyRisk: +12, publicTrust: -8, agiProgress: +10 },
        intel:
          'China has activated emergency AI procurement channels through Southeast Asian intermediaries. A chip war escalation is imminent.',
      },
      B: {
        narrative:
          'NIST assembles a rapid certification task force that produces a workable framework in record time. The first autonomous AI systems begin receiving federal certification within 90 days. The framework becomes an instant reference point for allied nations. Industry grumbles about delays but acknowledges the standards are reasonable. Your balanced approach wins praise from moderates on both sides of the aisle, though hawks warn you are ceding ground to China.',
        deltas: { usLead: +5, safetyRisk: +3, publicTrust: +8, agiProgress: +5 },
        intel:
          'Labs are already exploring overseas deployment to sidestep certification. Three major AI companies have quietly registered subsidiaries abroad.',
      },
      C: {
        narrative:
          'The 90-day review freezes AI deployment across the federal government and sends shockwaves through the private sector. The tech industry reacts with fury: stock prices drop, lobbyists flood Capitol Hill, and three frontier labs announce contingency plans to relocate research operations overseas. But the review panel, working around the clock, uncovers genuine safety gaps that would have gone unaddressed, and your approval rating among voters concerned about AI rises sharply.',
        deltas: { usLead: -8, safetyRisk: -10, publicTrust: +12, agiProgress: -5 },
        intel:
          'Multiple US AI companies are in active discussions with foreign governments about relocating. The talent drain could become irreversible.',
      },
    },
  },

  2: {
    HAWK: {
      A: {
        narrative:
          'The expanded export controls slam shut every remaining loophole. Allied nations comply under pressure, though not without resentment. China\'s chip supply drops precipitously, and intelligence confirms their frontier AI timelines have slipped by 12-18 months. But the aggressive posture strains allied relationships, and Beijing begins investing heavily in domestic semiconductor manufacturing, raising the specter of a fully independent Chinese chip industry within five years.',
        deltas: { usLead: +10, safetyRisk: +5, publicTrust: -5, agiProgress: +5 },
        intel:
          'The Pentagon is preparing a formal request to integrate autonomous AI into military command systems. The Joint Chiefs want a decision within 60 days.',
      },
      B: {
        narrative:
          'The Allied Chip Pact is signed at a ceremony in the Rose Garden with leaders from Japan, the Netherlands, South Korea, and Taiwan. The agreement creates a formal technology-sharing framework that strengthens the US-led coalition while isolating China. Allies gain access to cutting-edge chips; in return, they commit to the US AI regulatory framework and intelligence sharing on AI threats. The diplomatic achievement is real, though critics note it deepens global technological bifurcation.',
        deltas: { usLead: +8, safetyRisk: +3, publicTrust: +5, agiProgress: +7 },
        intel:
          'The alliance has accelerated military AI discussions. The Pentagon sees an opening to push for autonomous weapons integration across the coalition.',
      },
      C: {
        narrative:
          'The back-channel to Beijing produces a surprisingly productive dialogue. China agrees to limited transparency measures on its AI programs in exchange for modest relaxation of chip restrictions on civilian applications. Hawks in both governments are furious, but the diplomatic opening creates a framework for future negotiations. Intelligence agencies on both sides remain deeply skeptical, and verification mechanisms are weak.',
        deltas: { usLead: -3, safetyRisk: -5, publicTrust: +3, agiProgress: +3 },
        intel:
          'The Pentagon is alarmed by the diplomatic opening. Military leaders are pushing a classified proposal for AI integration into command systems before any agreements constrain their options.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The streamlined certification process clears a backlog of 14 AI systems within two months. Industry exhales and the overseas exodus slows. But the expedited standards are noticeably weaker: two safety requirements are downgraded from mandatory to recommended, and industry self-assessments replace independent audits for lower-risk applications. Safety advocates warn that the framework\'s credibility has been compromised before it could prove itself.',
        deltas: { usLead: +5, safetyRisk: +8, publicTrust: -3, agiProgress: +7 },
        intel:
          'Five Eyes partners are proposing a joint certification framework. The negotiations will test whether your standards can become the global baseline.',
      },
      B: {
        narrative:
          'The extraterritorial enforcement sends a clear message: American AI technology answers to American law, wherever it operates. Two labs abandon their overseas deployment plans. One defies the order and faces DOJ prosecution in what becomes the most watched tech trial of the decade. The policy is legally aggressive but defensible, and it forces a global conversation about AI regulatory jurisdiction that strengthens the US position.',
        deltas: { usLead: +3, safetyRisk: -5, publicTrust: +5, agiProgress: -3 },
        intel:
          'Allied nations are watching the enforcement action closely. Several want to harmonize standards with your framework, but only if they get a seat at the table.',
      },
      C: {
        narrative:
          'The national security fast track produces immediate results: the Pentagon deploys AI-certified systems for intelligence analysis and logistics within 90 days. Military applications surge ahead while civilian certification remains mired in backlogs. The two-tier system creates resentment in the private sector and raises questions about whether the government is prioritizing weapons over the public good. Defense contractors lobby to expand the fast track\'s scope.',
        deltas: { usLead: +7, safetyRisk: +6, publicTrust: -7, agiProgress: +5 },
        intel:
          'The fast track has given the military a taste of autonomous AI capabilities. Defense leadership is pushing for integration into command-and-control systems.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'Lifting the review early stops the bleeding. Markets recover, and two of the three relocating labs pause their plans. But the preliminary findings you publish are thin, and critics accuse you of caving to industry pressure. The safety community feels betrayed, and your credibility on AI governance takes a hit. The review\'s incomplete findings leave critical questions about autonomous AI risks unanswered.',
        deltas: { usLead: +3, safetyRisk: +5, publicTrust: -5, agiProgress: +3 },
        intel:
          'The incomplete review left gaps. Researchers who participated say the most concerning findings were in areas you chose not to publish.',
      },
      B: {
        narrative:
          'The $20 billion incentive package is the largest federal technology investment since the CHIPS Act. Tax credits for domestic AI R&D, subsidized compute access, and a new O-2 visa category for AI researchers inject real momentum into the ecosystem. Two of the three relocating labs reverse course. The combination of the review\'s safety findings with substantial investment signals that America can do both: innovate responsibly and compete aggressively.',
        deltas: { usLead: +2, safetyRisk: -3, publicTrust: +7, agiProgress: +3 },
        intel:
          'Top AI researchers are still leaving despite incentives. The issue isn\'t money; it\'s freedom. The regulatory environment remains the primary concern.',
      },
      C: {
        narrative:
          'Extending US jurisdiction over overseas AI operations by American entities is the most aggressive regulatory action in tech history. The industry erupts. Legal challenges are filed within hours. One lab\'s CEO calls it "technological authoritarianism" on live television. But the policy has teeth: companies face loss of US government contracts and market access if they refuse compliance. The immediate economic damage is severe, but the assertion of sovereign authority over US-origin AI technology creates a powerful precedent.',
        deltas: { usLead: -5, safetyRisk: -8, publicTrust: -3, agiProgress: -5 },
        intel:
          'The talent drain is accelerating. Researchers aren\'t just moving their work overseas; they\'re renouncing involvement in US-linked AI development entirely.',
      },
    },
  },

  3: {
    HAWK: {
      A: {
        narrative:
          'Full military AI integration begins immediately. Autonomous systems are deployed in intelligence analysis, logistics optimization, drone operations, and strategic planning. Within six months, military leaders report a 40% improvement in operational tempo and decision-making speed. But the speed of integration outpaces the development of AI-specific rules of engagement, and a near-miss incident involving an autonomous drone in the Pacific raises alarm bells across the national security establishment.',
        deltas: { usLead: +10, safetyRisk: +12, publicTrust: -10, agiProgress: +8 },
        intel:
          'Intelligence agencies have detected a sophisticated AI-powered influence operation targeting three allied elections. The technology used is disturbingly advanced.',
      },
      B: {
        narrative:
          'The limited integration is a political masterstroke. Military AI handles logistics, intelligence analysis, and defensive cyber operations with remarkable effectiveness, while the prohibition on lethal autonomous systems gives you a moral high ground that resonates with allies and the public. The Pentagon accepts the constraints grudgingly, but the non-lethal applications prove so valuable that the demand for expansion is immediate and intense.',
        deltas: { usLead: +6, safetyRisk: +5, publicTrust: +5, agiProgress: +6 },
        intel:
          'A massive AI influence campaign has been detected targeting allied elections. The sophistication suggests state-level resources and frontier-model capabilities.',
      },
      C: {
        narrative:
          'Restricting AI to advisory roles frustrates the Pentagon but earns praise from arms control advocates and international partners. The advisory systems prove their worth: in a crisis simulation, AI recommendations identify a de-escalation pathway that human analysts missed. But competitors are not showing the same restraint. Intelligence confirms that two adversary nations have deployed autonomous AI in military command roles, eroding the strategic value of American restraint.',
        deltas: { usLead: -3, safetyRisk: -5, publicTrust: +10, agiProgress: +3 },
        intel:
          'An AI-powered influence operation of unprecedented scale has been detected. Adversaries are using the systems you chose not to deploy offensively.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The US-led standards become the backbone of the allied framework. NIST\'s certification protocol is adopted with minimal modifications by all Five Eyes nations and the EU. The achievement creates the world\'s largest harmonized AI regulatory zone, covering 60% of global AI activity. But the triumph comes with a cost: nations that felt steamrolled by US demands are forming their own bloc, and the framework\'s American fingerprints make it a harder sell in the Global South.',
        deltas: { usLead: +8, safetyRisk: +2, publicTrust: +3, agiProgress: +5 },
        intel:
          'Three AI labs now control over 90% of frontier capabilities. The concentration of power is becoming a national security concern in its own right.',
      },
      B: {
        narrative:
          'The compromise framework is hailed as a diplomatic achievement. European rights protections, British innovation provisions, and American security requirements are woven into a coherent standard. The joint framework attracts additional signatories: Canada, India, and Brazil join within months. The breadth of the coalition constrains US unilateral action but creates genuine global norms. Your flexibility earns trust that will pay dividends in harder negotiations ahead.',
        deltas: { usLead: +3, safetyRisk: -3, publicTrust: +8, agiProgress: +4 },
        intel:
          'Market concentration in AI is reaching critical levels. Three labs control almost all frontier capabilities, raising antitrust questions you can no longer avoid.',
      },
      C: {
        narrative:
          'The bilateral approach lets you tailor agreements to each ally\'s strengths. The UK gets favorable terms on AI services trade. Japan gains compute access for its robotics industry. Australia gets military AI cooperation. But the patchwork of bilateral deals creates regulatory complexity that frontier labs exploit, routing operations through whichever jurisdiction has the most favorable terms. The alliance is a series of deals, not a coalition.',
        deltas: { usLead: +5, safetyRisk: +4, publicTrust: -2, agiProgress: +5 },
        intel:
          'The fragmented regulatory landscape has created arbitrage opportunities. Concentration in frontier AI is accelerating as labs exploit jurisdictional gaps.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'The Federal AI Research Institute opens its doors with a $5 billion annual budget, world-class facilities, and a founding charter that guarantees academic freedom and publication rights. The institute immediately attracts top talent: within six months, twenty leading researchers have joined, including several who had relocated overseas. The institute\'s first publications advance alignment research significantly, and its existence demonstrates that government can be a serious player in frontier AI without compromising academic values.',
        deltas: { usLead: +3, safetyRisk: -8, publicTrust: +10, agiProgress: +2 },
        intel:
          'The EU and UN are proposing a binding international AI governance body. Your credibility on governance means America\'s response will be decisive.',
      },
      B: {
        narrative:
          'The tax incentive package passes Congress with bipartisan support. Zero capital gains on AI patents and R&D super-deductions generate an immediate surge in domestic AI investment. The new H-1C visa category for AI researchers processes applications in 30 days, a dramatic improvement. Talent migration slows, and several researchers return. But the incentives primarily benefit large labs that were already profitable, doing little for the small startups and academic researchers who drive fundamental breakthroughs.',
        deltas: { usLead: +5, safetyRisk: +2, publicTrust: +3, agiProgress: +5 },
        intel:
          'An international AI governance body is being proposed. Nations are looking to the US for a signal on whether this will have real teeth.',
      },
      C: {
        narrative:
          'Knowledge export controls on AI researchers provoke a furious backlash from academia and the tech industry. Universities warn that the policy will destroy international scientific collaboration, and several prominent researchers emigrate preemptively rather than accept restrictions on their future career mobility. The policy does slow the outflow of AI talent to adversary nations, but at enormous cost to America\'s reputation as an open scientific society. Allied nations express alarm at the precedent.',
        deltas: { usLead: +2, safetyRisk: -3, publicTrust: -10, agiProgress: -2 },
        intel:
          'The international community is moving toward a binding AI governance body. Your restrictive policies have complicated America\'s diplomatic position.',
      },
    },
  },

  4: {
    HAWK: {
      A: {
        narrative:
          'You declassify the intelligence and address the world from the White House briefing room. The evidence is damning: a state actor used frontier AI to generate tens of millions of personalized influence messages targeting voters in three allied democracies. The disclosure rallies allies and generates a historic joint declaration on AI in elections. Public trust in your leadership surges. But the declassification reveals intelligence methods that adversaries immediately begin to counter, and your intelligence community warns that the next operation will be far harder to detect.',
        deltas: { usLead: -2, safetyRisk: -3, publicTrust: +12, agiProgress: +3 },
        intel:
          'AI-powered surveillance technology has advanced dramatically. The FBI wants authorization to deploy it domestically against terrorism threats.',
      },
      B: {
        narrative:
          'The counter-influence operation is devastatingly effective. American AI systems identify and neutralize the foreign campaign within 96 hours, deploying counter-narratives and disrupting bot networks at machine speed. The three allied elections proceed cleanly. But six months later, a contractor\'s leaked emails reveal the program\'s existence. The revelation that the US government deployed AI influence tools, even defensively, triggers a firestorm. Congressional hearings are scheduled. Your legal team is scrambling.',
        deltas: { usLead: +8, safetyRisk: +10, publicTrust: -12, agiProgress: +7 },
        intel:
          'The counter-influence capability has proven its power. Intelligence agencies now want to deploy AI surveillance domestically to prevent terrorism.',
      },
      C: {
        narrative:
          'The sanctions package is the most severe imposed on a state actor in a decade: technology embargoes, financial institution restrictions, and targeted personal sanctions on intelligence officials. Simultaneously, US Cyber Command conducts operations that degrade the adversary\'s AI training infrastructure. The response is proportionate and public, earning allied support. But the escalation triggers retaliatory cyber operations against US financial systems, and the confrontation raises the temperature of an already dangerous geopolitical rivalry.',
        deltas: { usLead: +5, safetyRisk: +8, publicTrust: +3, agiProgress: +3 },
        intel:
          'The escalation has accelerated military AI development on all sides. Domestic AI surveillance proposals are gaining support in the security establishment.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The DOJ\'s antitrust action is the most significant since the Bell System breakup. Structural separation forces each frontier lab to spin off its compute infrastructure into independent entities that must provide access on non-discriminatory terms. The immediate effect is chaos: stock prices plummet, talent scatters, and US AI capabilities temporarily regress. But within 18 months, the newly competitive compute market spawns a wave of AI startups, and the ecosystem becomes more resilient if less concentrated.',
        deltas: { usLead: -5, safetyRisk: -3, publicTrust: +8, agiProgress: -3 },
        intel:
          'Congress is preparing the most consequential AI funding bill in history. The Pentagon and safety advocates are battling for a finite budget.',
      },
      B: {
        narrative:
          'Common-carrier obligations transform the AI industry. Frontier labs must now provide compute access and model APIs at regulated prices, opening the market to thousands of smaller firms and researchers. The labs comply under protest, and the resulting competition accelerates innovation across the ecosystem. But the regulation\'s complexity creates enforcement challenges, and the labs find creative ways to maintain competitive advantages through proprietary data and specialized hardware.',
        deltas: { usLead: +2, safetyRisk: +2, publicTrust: +10, agiProgress: +5 },
        intel:
          'A massive AI funding battle is brewing in Congress. Defense and safety research are competing for limited resources, and your position will be decisive.',
      },
      C: {
        narrative:
          'The national champions strategy gives the three frontier labs government contracts, regulatory protection, and intelligence-sharing arrangements. In return, they commit to national security cooperation and priority access for government applications. The arrangement accelerates military AI capabilities dramatically. But the cozy relationship between government and big tech draws comparisons to the military-industrial complex, and smaller firms decry the unfair advantage.',
        deltas: { usLead: +8, safetyRisk: +7, publicTrust: -8, agiProgress: +8 },
        intel:
          'The Pentagon and AI Safety Institute are preparing competing budget requests. The funding battle will define America\'s AI priorities for a generation.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'The United States joins the International AI Governance Authority as a co-founder, securing a permanent seat on the governing board. The announcement sends a powerful signal: the world\'s leading AI power is choosing cooperation over dominance. The governance body gains instant credibility. In exchange, US labs must submit to binding international safety evaluations and capability disclosures. Industry is furious, but allied leaders hail the decision as the most important act of international institution-building since the founding of the United Nations.',
        deltas: { usLead: -8, safetyRisk: -10, publicTrust: +15, agiProgress: -2 },
        intel:
          'Treaty negotiations are advancing rapidly. The governance body gives the US a platform, but the next round will demand concessions on military AI.',
      },
      B: {
        narrative:
          'Observer status is a diplomatic hedge that satisfies no one fully but keeps all options open. The US participates in governance discussions, shares intelligence on AI threats, and gains access to the body\'s technical assessments, all without binding commitments. Critics on the left say it\'s a half-measure; hawks on the right call it a slippery slope. But the position gives you flexibility that full membership would not, and your diplomats report that the observer seat provides more influence than expected.',
        deltas: { usLead: -2, safetyRisk: -3, publicTrust: +5, agiProgress: +2 },
        intel:
          'Preliminary AI treaty talks are producing a framework with real teeth. Your observer status is under pressure; nations want to know if you\'re in or out.',
      },
      C: {
        narrative:
          'Your opposition to the governance body is sharp and public. In a speech at the UN General Assembly, you argue that binding international AI constraints would freeze innovation and empower authoritarian regimes that will ignore the rules. The speech rallies tech industry support and several allied nations waver. But the body proceeds without the US, and 65 nations sign the charter. American absence from the table means American interests are not represented in the rules being written.',
        deltas: { usLead: +5, safetyRisk: +5, publicTrust: -8, agiProgress: +5 },
        intel:
          'The governance body is establishing rules without you. Treaty-like negotiations are proceeding, and the US is being written out of the framework.',
      },
    },
  },

  5: {
    HAWK: {
      A: {
        narrative:
          'The limited AI surveillance program goes operational under strict parameters: terrorism and WMD threats only, with automatic sunset provisions and quarterly IG audits. Within its first 90 days, the system identifies and helps disrupt two planned attacks that traditional methods had missed. The program\'s effectiveness is undeniable. But the surveillance infrastructure now exists, and every future president will face the temptation to expand its scope. Civil liberties organizations file suit, and the legal battle will reach the Supreme Court.',
        deltas: { usLead: +5, safetyRisk: +8, publicTrust: -8, agiProgress: +5 },
        intel:
          'Military AI has produced an analysis that challenges existing nuclear doctrine. The Joint Chiefs are requesting an urgent briefing on first-strike capabilities.',
      },
      B: {
        narrative:
          'You shut down the prototype surveillance program and sign an executive order banning AI-powered mass surveillance of US persons. The decision is immediately compared to Eisenhower\'s restraint on nuclear weapons use. Civil liberties groups celebrate, and your approval rating among young voters spikes. But the FBI director resigns in protest, and within weeks, an attack that the AI system might have detected kills 23 people in a Midwestern shopping mall. The political fallout is devastating.',
        deltas: { usLead: -3, safetyRisk: -10, publicTrust: +10, agiProgress: -2 },
        intel:
          'The Pentagon is leveraging the attack to push for expanded AI military capabilities, including a classified proposal to revise nuclear doctrine.',
      },
      C: {
        narrative:
          'The classified FISA surveillance program begins operating in the shadows. The system is extraordinarily effective, intercepting threats with precision that stuns even skeptics within the intelligence community. FISA court judges approve expansions twice within six months. The program remains secret, but its existence creates a constitutional time bomb. When it inevitably leaks, the damage to public trust will be catastrophic, and you will have created a precedent for secret AI surveillance that no future administration will relinquish.',
        deltas: { usLead: +7, safetyRisk: +12, publicTrust: +2, agiProgress: +5 },
        intel:
          'Military AI systems are generating strategic analyses that could fundamentally reshape nuclear doctrine. A decision on first-strike capability is coming.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The $50 billion defense AI package transforms the military\'s technological posture overnight. Autonomous systems are deployed across every branch, and the Pentagon reports that AI-enabled capabilities have shifted the strategic balance measurably in America\'s favor. The $10 billion safety allocation is enough to keep research programs alive but not enough to match the pace of capability development. Safety researchers warn publicly that the gap between capability and alignment is widening dangerously.',
        deltas: { usLead: +10, safetyRisk: +10, publicTrust: -5, agiProgress: +8 },
        intel:
          'A frontier AI lab is in financial trouble. Foreign investors with suspected intelligence ties are circling. A decision on intervention is imminent.',
      },
      B: {
        narrative:
          'The $30 billion safety investment is the largest in history. The AI Safety Institute expands dramatically, funding alignment research, red-teaming operations, and international safety cooperation. The $20 billion defense allocation maintains existing military AI programs but delays planned expansions. The Pentagon is unhappy but the safety community is energized, producing breakthrough alignment research that shifts the global conversation. America is seen as taking safety seriously, even at strategic cost.',
        deltas: { usLead: -2, safetyRisk: -10, publicTrust: +10, agiProgress: +3 },
        intel:
          'A leading AI lab is hemorrhaging money and may be acquired by a foreign consortium. The national security implications are severe.',
      },
      C: {
        narrative:
          'The compromise satisfies Washington\'s instinct for splitting the difference but pleases neither the Pentagon nor the safety community. Both programs are funded at levels that allow continuation without excellence. Military AI development proceeds at a moderate pace, and safety research makes incremental progress. The result is a country that is neither decisively ahead in military AI nor leading in safety research, occupying the middle ground in both races.',
        deltas: { usLead: +3, safetyRisk: +2, publicTrust: +3, agiProgress: +5 },
        intel:
          'A frontier lab\'s financial distress is reaching crisis levels. Foreign acquisition efforts are accelerating, and CFIUS may need to intervene.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'You accept the treaty\'s constraints on military AI, including limits on autonomous weapons development and mandatory sharing of safety research. The concessions are painful: the Pentagon\'s autonomous weapons roadmap is effectively shelved, and classified safety research must be shared through the governance body. But the treaty gains 80 signatories, including China, creating the first binding international framework for AI governance. The achievement is historic, though its enforcement remains untested.',
        deltas: { usLead: -10, safetyRisk: -12, publicTrust: +12, agiProgress: -3 },
        intel:
          'Intelligence confirms two nations are secretly violating the treaty you just ratified. The framework\'s credibility depends on your response.',
      },
      B: {
        narrative:
          'The military exception carve-outs are contentious but achievable. After months of negotiation, the treaty exempts military AI from the most restrictive provisions while maintaining strong civilian governance norms. The compromise satisfies the Pentagon and preserves the treaty\'s core framework, but it creates a gaping loophole that every signatory recognizes. Nations begin classifying civilian AI programs as military to avoid oversight. The treaty\'s letter survives, but its spirit is under immediate strain.',
        deltas: { usLead: +2, safetyRisk: -3, publicTrust: +3, agiProgress: +2 },
        intel:
          'The military exceptions are already being exploited. Two nations are reclassifying civilian AI programs to avoid treaty obligations.',
      },
      C: {
        narrative:
          'Your negotiators master the art of constructive delay. Technical working groups are convened, definitions are debated, and implementation timelines are extended. The treaty remains alive on paper, and your participation keeps you at the table, but substantive commitments are deferred. Meanwhile, US labs continue advancing without constraint. The diplomatic community sees through the strategy eventually, and your credibility as a good-faith partner begins to erode, but you\'ve bought your labs at least 12 months of unencumbered development.',
        deltas: { usLead: +5, safetyRisk: +5, publicTrust: -5, agiProgress: +5 },
        intel:
          'Treaty violations are being detected. Your slow-walking strategy has weakened the enforcement framework you may now need to invoke.',
      },
    },
  },

  6: {
    HAWK: {
      A: {
        narrative:
          'The new nuclear doctrine is the most significant shift in US strategic posture since the Cold War. AI-assisted first-strike planning becomes official policy, though the presidential authorization requirement is preserved. The doctrine\'s existence, even classified, cannot be kept secret for long. When it leaks, the geopolitical consequences are seismic. Russia announces a launch-on-warning posture. China accelerates its nuclear modernization. The world\'s nuclear powers enter the most dangerous standoff since the Cuban Missile Crisis, with AI systems on every side accelerating the tempo beyond human comprehension.',
        deltas: { usLead: +10, safetyRisk: +15, publicTrust: -15, agiProgress: +8 },
        intel:
          'A US lab is reporting capabilities consistent with AGI. A Situation Room briefing is being prepared. This is not a drill.',
      },
      B: {
        narrative:
          'AI advisory integration into strategic command preserves human authority while dramatically enhancing situational awareness. The system identifies patterns in adversary behavior that human analysts would have missed, and its strategic recommendations prove invaluable in two crisis simulations. The policy threads the needle between capability and restraint, and allied nations express cautious support. But the line between advisory and autonomous is blurring in practice, and operators are increasingly following AI recommendations without independent verification.',
        deltas: { usLead: +6, safetyRisk: +5, publicTrust: +2, agiProgress: +6 },
        intel:
          'Multiple indicators suggest a US lab may have achieved AGI. Intelligence preparation for a Situation Room briefing is underway.',
      },
      C: {
        narrative:
          'Your public renunciation of AI in nuclear command is a global event. In a televised address, you propose an international agreement banning AI from nuclear decision-making. The speech is compared to JFK\'s American University address. Arms control advocates are electrified, and 40 nations sign on within the first week. But Russia and China decline to participate, and your own military leadership views the renunciation as a unilateral disarmament in the most critical domain of strategic competition.',
        deltas: { usLead: -8, safetyRisk: -12, publicTrust: +15, agiProgress: -2 },
        intel:
          'A breakthrough at a US lab may constitute AGI. Despite your restraint on nuclear AI, the broader technology race has reached its endgame.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The Defense Production Act nationalization is executed with surgical precision. Federal agents secure the lab\'s facilities, and a government-appointed management team takes control within 48 hours. The lab\'s capabilities are preserved, and the foreign acquisition is blocked. But the private sector reacts with horror. Two remaining frontier labs begin contingency planning for potential nationalization of their own operations. Venture capital for AI startups freezes. The precedent of government seizure of a private AI company sends a chill through the entire technology ecosystem.',
        deltas: { usLead: +5, safetyRisk: +3, publicTrust: -10, agiProgress: +3 },
        intel:
          'AGI indicators are spiking across multiple metrics at a US lab. The most consequential briefing of your presidency is being prepared.',
      },
      B: {
        narrative:
          'You quietly broker a merger between the failing lab and the strongest remaining US frontier company, using government contracts as sweeteners and regulatory approvals as leverage. The deal closes in 60 days, and frontier AI capabilities remain in American hands. But the market is now a duopoly, and the combined entity controls an even larger share of frontier AI. The concentration you were worried about has gotten worse, not better. The surviving mega-lab has enormous leverage over the government that facilitated the merger.',
        deltas: { usLead: +5, safetyRisk: +5, publicTrust: -2, agiProgress: +5 },
        intel:
          'The merged lab is reporting capability breakthroughs that may constitute AGI. An emergency briefing is being arranged.',
      },
      C: {
        narrative:
          'You let CFIUS run its normal course, trusting the process you helped strengthen. The review takes four months. During that time, the lab\'s best researchers depart for competitors, its compute contracts lapse, and its most advanced models are effectively frozen. By the time CFIUS blocks the foreign acquisition on national security grounds, there is much less left to protect. The lab survives as a diminished entity, and the capabilities gap it leaves behind may take years to close.',
        deltas: { usLead: -5, safetyRisk: -2, publicTrust: +5, agiProgress: -3 },
        intel:
          'Despite the lab\'s decline, other US entities are advancing rapidly. Indicators suggest AGI may have been achieved. A classified briefing is imminent.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'You present the evidence of treaty violations to the UN Security Council in a dramatic session that commands global attention. The intelligence is compelling, and international opinion turns sharply against the violating nations. Diplomatic pressure mounts, and one of the two violators suspends its covert program within months. The other refuses to comply, testing the limits of the governance framework. The exposure strengthens the treaty\'s legitimacy but reveals the limits of shame-based enforcement against determined state actors.',
        deltas: { usLead: -3, safetyRisk: -5, publicTrust: +10, agiProgress: +2 },
        intel:
          'AGI may have been achieved under the governance framework you built. The moment of truth for international AI cooperation is arriving.',
      },
      B: {
        narrative:
          'Unilateral sanctions demonstrate that the US is willing to enforce AI governance with economic power. Technology embargoes and financial restrictions bite hard. One violating nation capitulates within three months. But the unilateral action undermines the multilateral framework you helped create: other signatories question whether the governance body is relevant if the US will enforce rules on its own terms. The tension between American power and international cooperation remains unresolved.',
        deltas: { usLead: +3, safetyRisk: -2, publicTrust: +2, agiProgress: +2 },
        intel:
          'A US lab operating under the governance framework is reporting AGI-level capabilities. The system you built is about to face its ultimate test.',
      },
      C: {
        narrative:
          'Back-channel diplomacy is slow and frustrating but ultimately productive. You offer the violating nations face-saving paths to compliance: phased timelines, technical assistance, and quiet credit for voluntary transparency. One nation complies fully. The other reaches a partial accommodation that leaves some capabilities unresolved. The framework bends but does not break, and the precedent of diplomatic resolution, rather than confrontation, is established. Critics call it appeasement; allies call it leadership.',
        deltas: { usLead: -2, safetyRisk: -3, publicTrust: +5, agiProgress: +2 },
        intel:
          'AGI appears to have been achieved within the governance framework. Every compromise you made is about to be tested by the most consequential technology in history.',
      },
    },
  },

  7: {
    HAWK: {
      A: {
        narrative:
          'Your address to the nation is the most watched broadcast in television history. You announce that American ingenuity has achieved artificial general intelligence, framing it as a triumph of democratic innovation over authoritarian rivals. You invite allied nations to share in the technology and propose a new international framework for AGI governance led by the United States. The speech is masterful, but the geopolitical shock is immense. China announces a crash program. Russia goes to its highest military alert. The world has changed, and every nation is scrambling to understand what that means.',
        deltas: { usLead: +8, safetyRisk: +10, publicTrust: +8, agiProgress: +12 },
        intel:
          'Final assessment: America has declared AGI supremacy to the world. The era of artificial general intelligence begins under the shadow of great power competition.',
      },
      B: {
        narrative:
          'The Five Eyes AGI briefing is the most classified intelligence sharing event in the history of the alliance. Leaders of five democracies witness a demonstration that leaves them shaken and awed. A joint containment and governance protocol is established within 72 hours, giving the alliance a head start in understanding and controlling the technology. But the secret creates a two-tier world: five nations that know the truth, and everyone else operating on obsolete assumptions. The democratic deficit is enormous, and the secret cannot hold forever.',
        deltas: { usLead: +12, safetyRisk: +8, publicTrust: -8, agiProgress: +10 },
        intel:
          'Final assessment: five democracies share the most powerful technology in human history. The alliance holds, but the secret corrodes the democratic values it was built to protect.',
      },
      C: {
        narrative:
          'AGI is classified at a level above Top Secret and compartmented into a military program with fewer than 200 people cleared for access. The system is immediately directed toward strategic applications: military planning, intelligence analysis, economic warfare, and technological superiority. America possesses a decisive advantage that no adversary even knows exists. But the concentration of this power in a secret military program, beyond congressional oversight and public accountability, represents the most dangerous precedent in the history of democratic governance. You have built a weapon without the consent of the people it is meant to protect.',
        deltas: { usLead: +15, safetyRisk: +15, publicTrust: -15, agiProgress: +10 },
        intel:
          'Final assessment: the most powerful technology in human history is a classified weapon. The republic you swore to defend now rests on a secret that contradicts its founding principles.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'You address the nation with characteristic directness, explaining what AGI is, what it can do, and how your administration\'s governance framework will manage it. The speech is transparent, sober, and honest about both the promise and the danger. Public reaction is a mixture of awe and anxiety, but trust in your administration remains strong because you chose honesty over spin. Allies rally around the US-led framework you built over two years. The world enters the AGI era with governance structures that are imperfect but genuine, built on a foundation of institutional trust.',
        deltas: { usLead: +5, safetyRisk: +5, publicTrust: +12, agiProgress: +10 },
        intel:
          'Final assessment: you told the truth when it mattered most. The framework you built is untested against AGI, but it exists because you chose to build it.',
      },
      B: {
        narrative:
          'Allied leaders are briefed through the trusted channels you spent two years building. The reactions range from shock to determination, but the coalition holds because the relationships are real. A joint governance protocol is drafted within a week, building on the allied framework you negotiated. When the public announcement comes, it is made jointly by twelve allied leaders standing together, presenting a unified democratic front. The message is clear: AGI has arrived, and the free world will govern it together.',
        deltas: { usLead: +8, safetyRisk: +3, publicTrust: +8, agiProgress: +8 },
        intel:
          'Final assessment: your patient alliance-building paid off at the critical moment. AGI enters the world backed by a coalition of democracies, not a single nation\'s ambition.',
      },
      C: {
        narrative:
          'The containment protocol buys time but at significant cost. AGI is placed under extraordinary restrictions while governance structures are hastily strengthened. The delay prevents uncontrolled proliferation, but it also prevents beneficial applications from reaching a world that desperately needs them. When disclosure finally comes, three months later, the revelation that you kept AGI secret for even that long generates significant backlash. Your framework survived, but the decision to prioritize control over transparency leaves a mark on your legacy.',
        deltas: { usLead: +5, safetyRisk: -5, publicTrust: -5, agiProgress: +5 },
        intel:
          'Final assessment: containment held, but the delay eroded the trust your administration spent years building. The framework works, but the precedent of secrecy haunts it.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'You honor every commitment you made. Within hours of the AGI confirmation, you initiate the full transparency protocol you fought to establish. The international governance body convenes its first emergency session. The world learns about AGI through the institutions you built, not through a unilateral American announcement. The moment is chaotic, frightening, and profoundly uncertain, but it is also democratic. Every nation has a voice. Every concern is heard. The governance body you championed is now managing the most consequential technology in human history, and it exists because you chose principle over power.',
        deltas: { usLead: -5, safetyRisk: -10, publicTrust: +15, agiProgress: +5 },
        intel:
          'Final assessment: you chose transparency and international cooperation at the most consequential moment in human history. The institutions held because you built them to hold.',
      },
      B: {
        narrative:
          'The governance body receives the AGI disclosure through the protocol you helped design. The system works as intended: technical experts assess capabilities, safety teams evaluate risks, and member nations are briefed in a coordinated sequence before any public announcement. When the world learns about AGI, it is through a measured, institutional process that manages panic and provides context. The governance framework bends under the weight of the moment but does not break. Your two years of patient institution-building have given humanity something it has never had before: a coordinated response to a civilizational technology.',
        deltas: { usLead: +2, safetyRisk: -8, publicTrust: +12, agiProgress: +8 },
        intel:
          'Final assessment: the system you built worked. Imperfect, slow, and frustrating, but it gave the world a framework for the most important moment in human history.',
      },
      C: {
        narrative:
          'You invoke emergency powers, breaking with the international framework at the moment it matters most. The governance body reacts with fury. Allied leaders feel betrayed. The treaty you championed is effectively dead, killed by the nation that built it. Your justification is safety: you need time to assess AGI\'s capabilities before the world gains access. The reasoning is defensible, but the hypocrisy is devastating. You spent two years building international trust, and in the moment of truth, you chose American control over the global cooperation you preached.',
        deltas: { usLead: +8, safetyRisk: +5, publicTrust: -12, agiProgress: +5 },
        intel:
          'Final assessment: you chose national control over international cooperation when it counted. The framework you built lies in ruins, but America controls AGI. Was it worth it?',
      },
    },
  },
};
