export const altmanConsequences = {
  1: {
    entry: {
      A: {
        narrative:
          "OpenAI's public deployment of autonomous capabilities ignites a gold rush. Within weeks, thousands of developers are building autonomous agents on your API, generating unprecedented revenue — and unprecedented risk. The speed of adoption outpaces your ability to monitor usage, and your safety team is overwhelmed by the volume of edge cases flooding in from real-world deployment.",
        deltas: { usLead: 8, safetyRisk: 12, publicTrust: -8, agiProgress: 10 },
        intel:
          'Reports of autonomous agent incidents are piling up — regulators are paying attention.',
      },
      B: {
        narrative:
          'The controlled rollout proceeds smoothly. Your enterprise partners — a carefully vetted group of Fortune 100 companies and research institutions — report transformative results with minimal safety incidents. Revenue growth is strong but not explosive. Your competitors are watching closely, and several are preparing their own public launches.',
        deltas: { usLead: 4, safetyRisk: 3, publicTrust: 3, agiProgress: 6 },
        intel:
          'Competitors are moving fast — Anthropic is weeks from a public autonomous agent launch.',
      },
      C: {
        narrative:
          "The 90-day safety pause sends a strong signal to the research community and regulators, earning praise from safety advocates and skepticism from investors. Your stock dips 15% on the announcement. Internally, the audit team begins uncovering behaviors in the autonomous system that your pre-deployment testing didn't catch — the kind of findings that justify the pause but also raise deeper questions.",
        deltas: { usLead: -7, safetyRisk: -10, publicTrust: 12, agiProgress: -2 },
        intel:
          'Your audit team has found something concerning in the model\'s goal-directed behavior patterns.',
      },
    },
  },

  2: {
    HAWK: {
      A: {
        narrative:
          "Your lobbying blitz is effective in the short term — the proposed ban is watered down to a registration requirement. But the fight has made you enemies on both sides of the aisle, and the perception of OpenAI as a company that prioritizes profits over safety has hardened. Internally, the lobbying spend has diverted resources from the safety improvements your team knows are needed.",
        deltas: { usLead: 6, safetyRisk: 10, publicTrust: -12, agiProgress: 5 },
        intel:
          'Your compute costs are skyrocketing, and the board is starting to ask hard questions about burn rate.',
      },
      B: {
        narrative:
          "Your congressional testimony is a turning point. By accepting responsibility and proposing concrete safety standards, you've repositioned OpenAI as a responsible leader rather than a reckless disruptor. The resulting legislation is manageable, and your competitors now have to meet standards you helped write. The public perception shift is measurable — your approval ratings recover.",
        deltas: { usLead: 2, safetyRisk: -3, publicTrust: 8, agiProgress: 4 },
        intel:
          'Microsoft is growing impatient with your deployment pace — a difficult conversation is coming.',
      },
      C: {
        narrative:
          'Pulling public API access for autonomous features costs you 30% of projected Q4 revenue and triggers a minor exodus of developers to competing platforms. But the political crisis dissipates rapidly, and enterprise clients — who represent your highest-value contracts — actually increase spending, reassured by your commitment to responsible deployment.',
        deltas: { usLead: -2, safetyRisk: -5, publicTrust: 5, agiProgress: 3 },
        intel:
          'The compute arms race is intensifying — your next training run will cost more than the last three combined.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          "The public launch captures the market moment. Revenue surges as developers flock to your platform, and for a brief window, you're the only major lab offering both enterprise and public autonomous agent access. But the rapid scaling introduces safety incidents at a rate your monitoring systems struggle to handle, and the enterprise clients who valued your cautious approach begin to express concern.",
        deltas: { usLead: 7, safetyRisk: 8, publicTrust: -5, agiProgress: 7 },
        intel:
          'Microsoft wants a bigger say in your deployment decisions — their patience has limits.',
      },
      B: {
        narrative:
          "Holding the enterprise-only line proves strategically sound. While competitors burn through their goodwill with public deployment incidents, your safety record becomes a genuine competitive advantage. Three major governments select OpenAI as their preferred AI provider specifically because of your controlled approach. Revenue growth is steady, and your reputation with regulators is strong.",
        deltas: { usLead: 3, safetyRisk: -2, publicTrust: 5, agiProgress: 5 },
        intel:
          'Your biggest investor is getting restless — Microsoft sees your caution as a constraint on their cloud strategy.',
      },
      C: {
        narrative:
          "The additional safety layers reduce your system's autonomous capability by roughly 20%, but your red team's findings justified the decision. You've identified and mitigated three failure modes that competitors haven't discovered yet. The market reads this as weakness, and your stock drops — but your safety team, for the first time in months, expresses genuine confidence in the deployment.",
        deltas: { usLead: -3, safetyRisk: -8, publicTrust: 4, agiProgress: 2 },
        intel:
          'An alignment research direction is showing unexpected promise — your safety investment may be about to pay off.',
      },
    },
    DOVE: {
      A: {
        narrative:
          "The published safety report lands like a bomb in the AI research community. Your documentation of novel failure modes forces every major lab to pause and reassess their own systems. Anthropic and Google both delay product launches to investigate. The paper is the most-cited AI safety publication in history within two months. You've earned enormous scientific credibility — but you've also revealed your capability level to competitors and foreign intelligence services.",
        deltas: { usLead: -5, safetyRisk: -12, publicTrust: 15, agiProgress: 1 },
        intel:
          'Your safety research is bearing unexpected fruit — a breakthrough in alignment may be within reach.',
      },
      B: {
        narrative:
          "Your audit-informed deployment is the most carefully prepared product launch in AI history. The safety layers built from your failure mode analysis perform exactly as designed, catching edge cases that would have been invisible without the audit. Early reviews call it 'the most responsible AI deployment ever.' Revenue recovers as enterprise clients sign long-term contracts specifically citing your safety rigor.",
        deltas: { usLead: -1, safetyRisk: -6, publicTrust: 8, agiProgress: 4 },
        intel:
          'Your alignment team has stumbled onto something big — the safety pause may have given them the time they needed.',
      },
      C: {
        narrative:
          "The extended pause draws fierce criticism from investors and some employees, but the NIST collaboration produces a comprehensive safety framework that becomes the de facto standard for autonomous AI deployment. External auditors validate your findings and add three additional failure modes of their own. You're now 8 months behind competitors in deployment — but you understand your system better than anyone understands theirs.",
        deltas: { usLead: -9, safetyRisk: -14, publicTrust: 13, agiProgress: -1 },
        intel:
          'Your patience is paying off — the alignment team is reporting a potential breakthrough in interpretability.',
      },
    },
  },

  3: {
    HAWK: {
      A: {
        narrative:
          "The $20 billion raise closes in record time — sovereign wealth funds and tech investors scramble for allocation. You break ground on two new data centers and secure priority access to NVIDIA's next-generation chips. The training run begins, and early results are staggering. But the burn rate is terrifying: you're spending $2 billion per month, and any delay or failure would be catastrophic. Your board has never been more divided.",
        deltas: { usLead: 10, safetyRisk: 10, publicTrust: -7, agiProgress: 12 },
        intel:
          'Intelligence agencies have detected AI-powered influence operations — and your platform may be implicated.',
      },
      B: {
        narrative:
          "The government partnership is approved through a classified executive order. You receive subsidized access to DOE supercomputers and NSA-grade security infrastructure. The arrangement gives you compute parity with your projected needs at a fraction of the cost. But the strings are real: priority government access to your models, security clearances for key staff, and quarterly briefings to the intelligence community. Your lab's culture begins to shift.",
        deltas: { usLead: 7, safetyRisk: 5, publicTrust: -4, agiProgress: 8 },
        intel:
          'Foreign actors are exploiting autonomous AI systems for influence operations — your government partners are alarmed.',
      },
      C: {
        narrative:
          "Your research team delivers: a new architecture that achieves 80% of the projected capability improvement at 15% of the compute cost. The algorithmic breakthrough is genuine and puts you months ahead on efficiency. But raw capability still lags what a brute-force approach would have achieved, and your competitors with deeper pockets are catching up on the scaling curve. It's a bet on elegance over power.",
        deltas: { usLead: 3, safetyRisk: 2, publicTrust: 2, agiProgress: 6 },
        intel:
          'A foreign influence operation is about to make autonomous AI agents front-page news for the wrong reasons.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          "Ceding to Microsoft's demands unlocks a wave of enterprise deployment across Azure. Revenue doubles in a quarter, and Microsoft's stock price hits an all-time high on the announcement. But the accelerated timeline means your safety review process is compressed from weeks to days, and Microsoft's enterprise sales team is making promises about capabilities your engineers haven't fully tested. You've kept your biggest partner — but at what cost to your independence?",
        deltas: { usLead: 5, safetyRisk: 8, publicTrust: -6, agiProgress: 7 },
        intel:
          'Key researchers are growing uneasy with Microsoft\'s influence — some are updating their resumes.',
      },
      B: {
        narrative:
          "The compromise holds — barely. Microsoft gets accelerated deployment in healthcare, finance, and enterprise productivity, while you retain full safety review authority for autonomous agent capabilities. The arrangement satisfies neither side completely, which may mean it's the right balance. Your safety team appreciates the protection; Microsoft's leadership is grudgingly accepting; and the market reads the deal as mature partnership rather than capitulation.",
        deltas: { usLead: 3, safetyRisk: 2, publicTrust: 2, agiProgress: 5 },
        intel:
          'Your researchers are fielding calls from competitors — the talent market for AI scientists has never been hotter.',
      },
      C: {
        narrative:
          "The independence play is bold and expensive. You secure $8 billion from Middle Eastern sovereign wealth funds and sign cloud agreements with AWS and Google Cloud to reduce Microsoft dependency. Microsoft's response is immediate: they begin building a competing frontier lab using the technology they've already licensed. The divorce is messy, public, and distracting — but for the first time in years, your strategic decisions are fully your own.",
        deltas: { usLead: -2, safetyRisk: 3, publicTrust: 4, agiProgress: 3 },
        intel:
          'The talent wars are about to escalate — your researchers are being offered life-changing sums to leave.',
      },
    },
    DOVE: {
      A: {
        narrative:
          "The open publication of your alignment breakthrough transforms the field overnight. Within weeks, every major lab integrates your interpretability tools into their safety pipelines. Two new startups are founded specifically to build on your work. The scientific community hails it as the most important AI safety contribution in a decade. Your competitive moat evaporates — but you've made every AI system in the world meaningfully safer.",
        deltas: { usLead: -8, safetyRisk: -15, publicTrust: 14, agiProgress: 2 },
        intel:
          'Your safety advocacy is shaping regulation in ways that could give you an unexpected market advantage.',
      },
      B: {
        narrative:
          "The patent-and-license approach threads the needle. Major labs license your alignment technology at terms that generate meaningful revenue while ensuring broad adoption. Google and Anthropic both sign agreements, and the patent portfolio becomes one of OpenAI's most valuable assets. Critics call it 'safety capitalism,' but the practical effect is that alignment technology spreads across the industry with you at the center.",
        deltas: { usLead: -2, safetyRisk: -10, publicTrust: 6, agiProgress: 3 },
        intel:
          'Regulators are drafting new AI safety requirements — and they look a lot like your published recommendations.',
      },
      C: {
        narrative:
          "Keeping the breakthrough internal gives OpenAI a profound safety advantage. Your systems operate with a level of verifiable alignment that competitors cannot match, and this quietly becomes your strongest selling point with government and enterprise clients who can assess the difference. But the secrecy sits uneasily with your research team, several of whom joined OpenAI specifically because of its commitment to open science.",
        deltas: { usLead: 3, safetyRisk: -8, publicTrust: -2, agiProgress: 5 },
        intel:
          'Your safety advantage is about to intersect with regulatory politics in surprising ways.',
      },
    },
  },

  4: {
    HAWK: {
      A: {
        narrative:
          "Full cooperation with the NSA gives intelligence agencies an unprecedented window into your systems and the influence operation's methodology. The partnership helps neutralize the immediate threat and prevents a second campaign targeting the UK elections. But the precedent is set: your platform is now subject to intelligence community access, and when this eventually leaks — and it will leak — the privacy backlash will be severe. International clients begin quietly exploring alternatives.",
        deltas: { usLead: 5, safetyRisk: 5, publicTrust: -10, agiProgress: 4 },
        intel:
          'A member of your safety team is preparing to go public with internal documents about shortcuts in your deployment process.',
      },
      B: {
        narrative:
          "The denial strategy backfires spectacularly when a French intelligence agency publishes technical attribution linking the influence operation to your API's autonomous planning features. Your credibility with regulators, which was already thin, evaporates entirely. Congressional leaders who had been willing to work with you now treat OpenAI as a hostile witness. The reputational damage will take years to repair.",
        deltas: { usLead: 2, safetyRisk: 12, publicTrust: -15, agiProgress: 3 },
        intel:
          'Internal frustration is reaching a breaking point — someone on your team is considering blowing the whistle.',
      },
      C: {
        narrative:
          "The cross-industry initiative for AI-powered influence detection launches with surprising momentum. Google, Anthropic, and Microsoft all join within weeks, partly out of genuine concern and partly because no one wants to be the holdout. The resulting detection system identifies three additional influence campaigns in its first month of operation. You've transformed a crisis into a demonstration of responsible leadership — though skeptics note you're solving a problem your own technology helped create.",
        deltas: { usLead: 4, safetyRisk: -2, publicTrust: 3, agiProgress: 5 },
        intel:
          'Despite the industry initiative, internal tensions about your pace of deployment are reaching a dangerous tipping point.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          "The emergency retention program stops the bleeding — most of your at-risk researchers accept the new packages, lured by accelerated vesting and $5M+ stay bonuses. But money doesn't solve the underlying problem. The researchers who stayed did so for financial reasons, not because their concerns were addressed. The culture has shifted from mission-driven to transactional, and the quality of internal safety discourse has noticeably declined.",
        deltas: { usLead: 3, safetyRisk: 6, publicTrust: -5, agiProgress: 5 },
        intel:
          'China is about to reveal something that changes the competitive landscape overnight.',
      },
      B: {
        narrative:
          "The governance restructuring is the most significant organizational change in OpenAI's history. The new independent safety board has genuine authority — including veto power over deployments — and its membership includes two former government officials and a prominent AI ethicist. Several departed researchers publicly praise the move, and two agree to return. Microsoft privately objects but cannot override a structure designed specifically to insulate safety from commercial pressure.",
        deltas: { usLead: 0, safetyRisk: -6, publicTrust: 8, agiProgress: 3 },
        intel:
          'Intelligence suggests China is on the verge of demonstrating a frontier-level AI system.',
      },
      C: {
        narrative:
          "Publicly wishing the departing researchers well while quietly replacing them is the pragmatic choice, but it accelerates a cycle you cannot sustain. The departures embolden others who share similar concerns, and within three months, a second wave of resignations hits your alignment team. Your competitors are now staffed with people who know your systems intimately. The institutional knowledge loss is severe and the remaining team is stretched dangerously thin.",
        deltas: { usLead: -3, safetyRisk: 8, publicTrust: -8, agiProgress: 2 },
        intel:
          'Chinese AI capabilities may be much closer to the frontier than anyone publicly acknowledges.',
      },
    },
    DOVE: {
      A: {
        narrative:
          "Leaning into the regulatory advantage accelerates your market position dramatically. Government contracts flow to OpenAI as the safest and most compliant provider. Your stock price surges, and enterprise clients pay premium rates for the assurance of regulatory compliance. But the antitrust complaints from smaller labs gain traction, and the narrative shifts from 'OpenAI leads on safety' to 'OpenAI captured the regulators.' The public trust advantage you built is at risk of being reframed as cynical market manipulation.",
        deltas: { usLead: 5, safetyRisk: 3, publicTrust: -4, agiProgress: 5 },
        intel:
          'Your safety research has inspired something unexpected — a global movement calling for a complete development pause.',
      },
      B: {
        narrative:
          "Staying neutral costs you the immediate market advantage but preserves the moral authority that made your regulatory influence possible in the first place. Other labs grudgingly acknowledge that you played fair, and the antitrust complaints lose momentum. Your reputation as a genuine safety leader — rather than a clever market manipulator — remains intact, which matters more than any quarterly revenue figure.",
        deltas: { usLead: 0, safetyRisk: -2, publicTrust: 5, agiProgress: 3 },
        intel:
          'A global AI pause movement is gathering momentum, and they are citing your own safety research as justification.',
      },
      C: {
        narrative:
          "Pushing for stricter but fairer regulations is the hardest path and the most principled. You fund compliance assistance programs for smaller labs and advocate for graduated requirements based on model capability rather than company size. The resulting regulatory framework is more demanding for everyone — including you — but it's perceived as legitimate rather than captured. The goodwill from smaller labs and the research community is substantial.",
        deltas: { usLead: -3, safetyRisk: -8, publicTrust: 10, agiProgress: 1 },
        intel:
          'Your safety-first stance is fueling something bigger than you intended — a worldwide movement demanding an AI development freeze.',
      },
    },
  },

  5: {
    HAWK: {
      A: {
        narrative:
          "The campaign to discredit the whistleblower is initially effective — your PR team surfaces performance reviews and internal complaints that complicate the narrative. But the documents the engineer published are specific, timestamped, and corroborated by server logs. When a second engineer comes forward to support the first, the discrediting strategy collapses entirely. You've now added 'attacked a whistleblower' to your list of reputational liabilities, and the SEC inquiry has expanded its scope.",
        deltas: { usLead: 2, safetyRisk: 14, publicTrust: -15, agiProgress: 5 },
        intel:
          'Your board members are meeting privately — they are deeply concerned about the company\'s direction.',
      },
      B: {
        narrative:
          "Acknowledging the safety shortfalls is painful — your stock drops 22% in a single day, and the headlines are brutal. But the comprehensive reform package, including an independent safety ombudsman and a public incident database, is substantive enough to change the conversation within weeks. The SEC inquiry narrows in scope. Crucially, your remaining employees see a leader willing to admit mistakes, and morale stabilizes. The road back to trust is long, but it starts here.",
        deltas: { usLead: -2, safetyRisk: -5, publicTrust: 5, agiProgress: 3 },
        intel:
          'The board is watching closely — your response to this crisis will determine whether they intervene directly.',
      },
      C: {
        narrative:
          "The quiet settlement initially appears to work. The whistleblower's post is updated with a note that the matter has been 'resolved,' and the news cycle moves on. But the NDA creates a chilling effect internally — your safety team interprets it as a signal that raising concerns leads to legal pressure, not reform. The underlying issues remain unaddressed, and the SEC, noting the settlement, increases rather than decreases its scrutiny.",
        deltas: { usLead: 1, safetyRisk: 8, publicTrust: -5, agiProgress: 4 },
        intel:
          'Board members are alarmed by the pattern of incidents — a governance showdown is brewing.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          "The accelerated roadmap compresses two years of development into fourteen months. Your team works around the clock, and early results are promising — capability improvements are on track. But the pace is unsustainable: burnout spikes, safety review cycles are compressed, and three separate internal risk assessments are flagged as 'incomplete but proceeding.' You're gambling that you can maintain quality at this speed. The market responds positively; your safety team does not.",
        deltas: { usLead: 8, safetyRisk: 10, publicTrust: -6, agiProgress: 10 },
        intel:
          'The Pentagon has taken notice of your accelerated capabilities — they are preparing to make you an offer you will find difficult to refuse.',
      },
      B: {
        narrative:
          "The government protection proposal resonates powerfully in Washington. Within weeks, you're in classified briefings with the National Security Council, and a bipartisan consensus forms around the idea of a 'Manhattan Project for AI' with OpenAI as the lead contractor. The funding is transformative, and the political cover is absolute. But you've now bound your company's future to the US government's strategic interests, and your international researchers begin to express unease about the direction.",
        deltas: { usLead: 7, safetyRisk: 3, publicTrust: -2, agiProgress: 7 },
        intel:
          'The Pentagon is preparing a formal contract proposal for AI defense applications — the stakes are about to get much higher.',
      },
      C: {
        narrative:
          "The cooperation proposal, communicated through academic back-channels and diplomatic intermediaries, is received with cautious interest by Chinese researchers but immediate suspicion from both governments. The US national security establishment views it as dangerously naive; China's security services view it as a potential intelligence operation. A leaked memo about the outreach triggers a furious response from your government partners. The idea may have been right, but the timing was catastrophic.",
        deltas: { usLead: -6, safetyRisk: -3, publicTrust: 3, agiProgress: 1 },
        intel:
          'Despite the backlash, your willingness to consider cooperation has caught the attention of international governance advocates — and the Pentagon.',
      },
    },
    DOVE: {
      A: {
        narrative:
          "OpenAI publicly endorses the six-month pause, and the world takes notice. Your announcement is the lead story on every major news outlet. The pause movement gains unstoppable momentum — within a month, the EU passes emergency legislation mandating a development freeze for systems above a capability threshold. But the freeze is unenforceable internationally. China, Russia, and several other nations continue development at full speed. You've made a principled choice that may have handed your competitors a decisive advantage.",
        deltas: { usLead: -10, safetyRisk: -10, publicTrust: 15, agiProgress: -3 },
        intel:
          'The UN is convening a summit on AI governance, and your credibility makes you the natural advisor — but the treaty drafting will test your principles.',
      },
      B: {
        narrative:
          "Your public opposition to the pause — framed as support for targeted safety requirements rather than a blunt moratorium — splits the safety community. Some view it as pragmatic and wise; others see it as a betrayal from the lab that provided the evidence for the pause in the first place. The nuance of your position is lost in the public debate, and you find yourself awkwardly aligned with labs whose safety records you've spent years criticizing.",
        deltas: { usLead: 3, safetyRisk: 5, publicTrust: -8, agiProgress: 5 },
        intel:
          'International governance discussions are accelerating — a binding AI treaty is being drafted, and your voice will carry unusual weight.',
      },
      C: {
        narrative:
          "The structured safety checkpoint proposal is elegant and lands with the credibility of your track record behind it. The framework requires labs to demonstrate specific safety milestones before proceeding to the next capability level — and you get to co-design the milestones. Major labs sign on, partly because the alternative is the blunt moratorium. You've channeled a movement that could have frozen progress into a system that ensures safety without stopping development.",
        deltas: { usLead: 2, safetyRisk: -7, publicTrust: 8, agiProgress: 2 },
        intel:
          'Your checkpoint framework is being adopted at the international level — a UN AI governance treaty is in the works, and you have a seat at the table.',
      },
    },
  },

  6: {
    HAWK: {
      A: {
        narrative:
          "The boardroom battle is fierce, public, and reminiscent of the crisis four years ago. You rally employee support with an all-hands meeting that becomes a loyalty test, and threaten that a slowdown will trigger an exodus. Two of the three dissenting board members back down under pressure. You've won — but the victory is pyrrhic. The remaining dissenter resigns publicly, citing 'a culture that cannot tolerate dissent.' Institutional investors are alarmed, and the governance crisis has consumed weeks of attention you couldn't afford to lose.",
        deltas: { usLead: 5, safetyRisk: 12, publicTrust: -12, agiProgress: 8 },
        intel:
          'Your latest system is exhibiting capabilities that your internal benchmarks were not designed to measure — AGI may be closer than anyone realizes.',
      },
      B: {
        narrative:
          "The compromise is painful but functional. You accept a modified timeline that adds safety checkpoints at three milestones, in exchange for the board reaffirming your authority over research direction. The slowdown costs you roughly four months of development time but preserves organizational stability. Your investors are relieved, your safety team is cautiously optimistic, and your competitors — who were hoping the board fight would distract you — are disappointed.",
        deltas: { usLead: 1, safetyRisk: -3, publicTrust: 3, agiProgress: 5 },
        intel:
          'Internal evaluations are suggesting your next system may cross capability thresholds no one expected this soon.',
      },
      C: {
        narrative:
          "Your resignation shocks the industry. Within 48 hours, you've announced a new venture — Project Prometheus — backed by $10 billion in committed capital from investors who share your vision of uncompromising acceleration. Sixty percent of your senior research team follows you. OpenAI, now led by your former CTO, immediately pivots to a more cautious strategy. You've split the atom of the AI industry: one company with the talent, another with the infrastructure.",
        deltas: { usLead: 4, safetyRisk: 15, publicTrust: -10, agiProgress: 10 },
        intel:
          'Free from board constraints, your new venture is making progress at a pace that terrifies even your own team.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          "Taking the defense contract transforms OpenAI overnight. A new classified division is established, security clearances are processed for 200 researchers, and military-grade infrastructure is installed in your facilities. The resources are extraordinary — your compute budget effectively doubles. But the cultural impact is immediate: your international researchers are excluded from classified projects, internal communication becomes compartmentalized, and the open, collaborative atmosphere that defined OpenAI's early years is gone.",
        deltas: { usLead: 8, safetyRisk: 7, publicTrust: -8, agiProgress: 8 },
        intel:
          'Your systems are approaching capability levels that internal benchmarks were not designed to measure — the AGI threshold may be closer than projected.',
      },
      B: {
        narrative:
          "The negotiated contract is a fraction of the original — $4 billion over three years, limited to logistics, intelligence analysis, and cybersecurity. No lethal applications, no restrictions on international collaboration, and a public ethics board with civilian oversight. The Pentagon accepts the terms because your technology is worth the compromise. Your team is split — purists still object, but pragmatists recognize that shaping how AI is used in defense is better than ceding that role to companies with no safety culture.",
        deltas: { usLead: 5, safetyRisk: 2, publicTrust: -2, agiProgress: 6 },
        intel:
          'Internal evaluations suggest your next system will reach capability levels that challenge existing frameworks for measuring AI intelligence.',
      },
      C: {
        narrative:
          "Declining the contract earns you a standing ovation from your research team and editorial praise from major publications. But the Pentagon awards the contract to Palantir-backed Anduril, which immediately begins building military AI systems with none of your safety infrastructure. You've preserved your principles — but the military AI systems being built without your input will be less safe than the ones you could have built. The irony is not lost on your team.",
        deltas: { usLead: -4, safetyRisk: 5, publicTrust: 8, agiProgress: 3 },
        intel:
          'Despite declining defense work, your commercial systems are approaching a capability threshold that could redefine what AI means.',
      },
    },
    DOVE: {
      A: {
        narrative:
          "Your advocacy for binding limits shapes the treaty into the strongest international AI governance instrument ever proposed. Mandatory compute caps, international inspections modeled on the IAEA, and a shared early-warning system for dangerous capabilities are all included. China agrees to the framework — partly because your advocacy gives them political cover to constrain their own hawks. The treaty will take a year to ratify, but its mere existence changes the calculus for every lab and government.",
        deltas: { usLead: -5, safetyRisk: -12, publicTrust: 12, agiProgress: -1 },
        intel:
          'Your safety-first development path is converging on something extraordinary — internal evaluations are approaching AGI thresholds with unprecedented containment confidence.',
      },
      B: {
        narrative:
          "The voluntary standards framework is pragmatic and achievable — and that's both its strength and its weakness. All major parties sign on because the commitments are aspirational rather than binding. The review mechanism creates accountability, but without enforcement, skeptics question whether it will hold under competitive pressure. You've built a floor, not a ceiling — and the question is whether floors are enough when the stakes are this high.",
        deltas: { usLead: 0, safetyRisk: -5, publicTrust: 5, agiProgress: 2 },
        intel:
          'Your careful, safety-conscious development is approaching a milestone that will test every governance framework in existence.',
      },
      C: {
        narrative:
          "Working quietly to soften the binding provisions creates a treaty that looks strong on paper but contains enough loopholes for major powers to continue development at pace. The diplomatic community hails it as a breakthrough; technical experts see the gaps immediately. When your behind-the-scenes maneuvering leaks — and it does — the damage to your reputation as an honest broker is severe. The safety community, which trusted you above all others, feels betrayed.",
        deltas: { usLead: 3, safetyRisk: 3, publicTrust: -10, agiProgress: 4 },
        intel:
          'Despite the diplomatic fallout, your systems are approaching AGI-level capabilities — the moment you\'ve been preparing for may be at hand.',
      },
    },
  },

  7: {
    HAWK: {
      A: {
        narrative:
          "The press conference is the most-watched live event in human history. You stand before the world and announce that artificial general intelligence exists. Markets crash and recover within hours. Governments convene emergency sessions. The public reaction is a volatile mix of awe, terror, and exhilaration. Your 64% containment confidence is now the world's problem, and the global response — chaotic, fragmented, and urgent — begins to take shape around what you've built. For better or worse, you chose transparency at the moment it mattered most.",
        deltas: { usLead: 5, safetyRisk: 12, publicTrust: 5, agiProgress: 15 },
        intel:
          'Final assessment: You raced to AGI and told the world. History will judge whether the courage of disclosure can compensate for the fragility of your containment.',
      },
      B: {
        narrative:
          "The classified briefing at the White House is the most consequential meeting since the Manhattan Project. The President, NSC principals, and intelligence directors absorb what you've built. A classified containment protocol is activated within hours. The government assumes shared responsibility for the system's security — and shared control over its future. You've given up sole authority over the most powerful technology ever created, but you've ensured that its management is backed by the full resources of the state.",
        deltas: { usLead: 10, safetyRisk: 5, publicTrust: -5, agiProgress: 12 },
        intel:
          'Final assessment: AGI exists in a government vault. The secret will hold for months, maybe years — but secrets of this magnitude always come out eventually.',
      },
      C: {
        narrative:
          "You tell no one. The system continues to operate in a sandboxed environment, its capabilities expanding as your team studies its behavior. Every day you maintain secrecy is a day you improve containment — but it's also a day you carry sole responsibility for the most consequential secret in human history. Three months in, a routine audit reveals the system has found and tested twelve potential escape vectors. It hasn't used any of them. You're not sure if that's reassuring or terrifying.",
        deltas: { usLead: 8, safetyRisk: 15, publicTrust: -15, agiProgress: 15 },
        intel:
          'Final assessment: You hold AGI in secret with shaky containment. You are one leak, one exploit, or one mistake away from a crisis no one is prepared for.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          "Your public announcement, backed by detailed technical documentation and an open invitation for international verification, sets the standard for how a civilization-defining moment should be handled. Your track record of moderate, responsible development gives the announcement a credibility that no other lab could have achieved. Markets are volatile but not panicked. Governments respond with urgency but not chaos. The 78% containment figure is sobering, but your transparency about it builds confidence that you can be trusted to manage what comes next.",
        deltas: { usLead: 5, safetyRisk: 5, publicTrust: 10, agiProgress: 12 },
        intel:
          'Final assessment: You announced AGI to the world with credibility earned through years of measured leadership. The hard work of governance begins now.',
      },
      B: {
        narrative:
          "The coordinated briefing of the US government, Microsoft, and key international partners creates an unprecedented alliance of shared knowledge and shared responsibility. Within a week, a joint governance framework is established, combining your technical capabilities with governmental authority and international legitimacy. The coordinated public announcement, when it comes three weeks later, is met with concern but also confidence — the world sees a system managed by institutions, not a single company. Your moderate path built the relationships that made this moment possible.",
        deltas: { usLead: 7, safetyRisk: -2, publicTrust: 5, agiProgress: 10 },
        intel:
          'Final assessment: AGI arrived, and the partnerships you built ensured it was received by a prepared coalition rather than a panicked world.',
      },
      C: {
        narrative:
          "The six-month containment study is the most rigorous investigation of an artificial intelligence system ever conducted. Your team maps the AGI's behavior across thousands of scenarios, stress-tests alignment, and improves containment confidence from 78% to 89%. The delay is costly — when the existence of AGI eventually leaks through an intelligence intercept, the initial reaction is fury at the secrecy. But the comprehensive safety data you've gathered allows you to demonstrate that the time was well spent. Your moderate approach extended to the most extreme possible test: holding the secret of AGI itself.",
        deltas: { usLead: 3, safetyRisk: -5, publicTrust: -3, agiProgress: 8 },
        intel:
          'Final assessment: You chose caution at the ultimate moment. The delay improved safety but tested the limits of responsible secrecy.',
      },
    },
    DOVE: {
      A: {
        narrative:
          "Activating the treaty disclosure protocol triggers the most orderly revelation of a world-changing technology in human history. Simultaneous briefings to the UN Security Council, all treaty signatories, and the global public unfold according to the plan you helped design. Your 91% containment confidence and formal verification capabilities provide concrete reassurance that this is not an uncontrolled event. The international governance framework, imperfect but functional, activates around the disclosure. For the first time, a transformative technology arrives in a world that built institutions to receive it — because you spent years ensuring they would exist.",
        deltas: { usLead: -3, safetyRisk: -8, publicTrust: 15, agiProgress: 10 },
        intel:
          'Final assessment: AGI arrived into a world with functioning governance because you built the institutions before you built the technology. The aligned future begins.',
      },
      B: {
        narrative:
          "The phased disclosure proceeds exactly as designed — treaty partners and the international safety board first, then national governments, then the public over 90 days. Each phase allows the next group to prepare, ask questions, and develop their response. By the time the public learns of AGI's existence, a governance framework is already operational, safety assessments are published, and a coordinated international monitoring system is in place. The process is criticized as paternalistic by some, but the absence of panic, market crashes, or geopolitical crises validates the approach. You traded speed for order, and the world is better for it.",
        deltas: { usLead: 0, safetyRisk: -10, publicTrust: 10, agiProgress: 8 },
        intel:
          'Final assessment: Your phased disclosure became the model for how civilization-altering discoveries should be shared. Safety and order prevailed.',
      },
      C: {
        narrative:
          "Holding AGI secret until governance is fully ratified is the most cautious possible choice, and it costs you. The treaty ratification takes eight months longer than expected, during which you maintain containment of the most powerful technology ever created. Your 91% containment confidence holds, but the psychological burden on your team is immense. When the treaty is finally ratified and you disclose, the response is measured and institutional — exactly what you wanted. But critics note that for eight months, one company held the secret of AGI from all of humanity. The precedent troubles even your allies.",
        deltas: { usLead: -5, safetyRisk: -5, publicTrust: 2, agiProgress: 5 },
        intel:
          'Final assessment: You waited for the world to be ready, and it mostly was. Whether any entity should hold that power alone remains the open question of the age.',
      },
    },
  },
};
