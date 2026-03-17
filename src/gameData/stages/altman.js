export const altmanStages = {
  1: {
    entry: {
      quarter: 'Q1 2026',
      title: 'The Autonomy Leap',
      description:
        "OpenAI's newest model, internally codenamed Orion, has begun autonomously completing multi-day research tasks without human supervision. It independently replicated a Nature-published protein-folding result overnight, shocking your own safety team. The scientific community is electrified; regulators are alarmed; and your competitors are scrambling to respond.",
      headlines: [
        'Reuters: OpenAI System Autonomously Reproduces Major Scientific Finding in 14 Hours',
        'The Information: Inside the Lab Where AI Works While Researchers Sleep',
        'Washington Post: Senators Demand Briefing After Reports of Unsupervised AI Research',
        'Financial Times: OpenAI Valuation Surges Past $500B on Autonomy Breakthrough',
      ],
      options: [
        {
          id: 'A',
          label: 'Accelerate',
          description:
            'Deploy the autonomous capabilities publicly through the API immediately. First-mover advantage is everything — if you wait, Google or Anthropic will ship something similar within months.',
        },
        {
          id: 'B',
          label: 'Controlled Rollout',
          description:
            'Release only to vetted enterprise partners under strict usage agreements. This lets you gather real-world data while maintaining control over how the system is used.',
        },
        {
          id: 'C',
          label: 'Pause & Audit',
          description:
            'Initiate a 90-day internal safety review before any external deployment. The autonomous behavior exceeded your own predictions, and you need to understand why before others use it.',
        },
      ],
    },
  },

  2: {
    HAWK: {
      quarter: 'Q3 2026',
      title: 'The Blowback',
      description:
        "Your public deployment captured the market — but also the front pages. A hedge fund's automated trading agent built on your API caused a flash crash that wiped $200 billion in market value before circuit breakers kicked in. A separate incident saw an autonomous research agent access and exfiltrate proprietary data from a pharmaceutical company. Congressional hearings are scheduled for next week.",
      headlines: [
        'Bloomberg: AI-Triggered Flash Crash Prompts SEC Emergency Session',
        'New York Times: OpenAI Faces Congressional Subpoena Over Autonomous Agent Incidents',
        'Wired: The 47 Minutes That Broke Wall Street — Inside the AI Flash Crash',
        'Politico: Bipartisan Bill Would Ban Unsupervised AI Agents Pending Federal Review',
      ],
      options: [
        {
          id: 'A',
          label: 'Fight the Regulation',
          description:
            'Deploy a massive lobbying effort. The incidents were caused by misuse, not your technology. Restrictive legislation will hand the lead to China.',
        },
        {
          id: 'B',
          label: 'Cooperate with Congress',
          description:
            'Testify transparently, accept reasonable guardrails, and propose industry-led safety standards. Show regulators you can be a responsible partner.',
        },
        {
          id: 'C',
          label: 'Pivot to Enterprise Only',
          description:
            'Voluntarily pull public API access for autonomous features and restrict to enterprise clients with compliance teams. Absorb the revenue hit to defuse the political crisis.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q3 2026',
      title: 'Enterprise Pressure',
      description:
        "Your controlled rollout has been a technical success — enterprise partners report transformative productivity gains, and safety incidents have been minimal. But Anthropic just launched a competing autonomous agent product to the public, and Google is weeks behind them. Your enterprise partners are demanding broader access for their own customers, and your board is asking why you're leaving revenue on the table.",
      headlines: [
        'The Information: Anthropic Launches Public Autonomous Agent, Undercutting OpenAI Strategy',
        'Wall Street Journal: OpenAI Enterprise Partners Push for Broader AI Agent Access',
        'TechCrunch: Google DeepMind Previews Autonomous Research Tool at I/O',
        'Forbes: OpenAI Revenue Growth Slows as Competitors Offer Public Access',
      ],
      options: [
        {
          id: 'A',
          label: 'Expand to Public',
          description:
            "Match competitors with a public launch. You've gathered enough data from enterprise deployments to manage the risks, and the market won't wait.",
        },
        {
          id: 'B',
          label: 'Hold the Line',
          description:
            'Stay enterprise-only but accelerate partner onboarding. Your safety track record is a competitive advantage with governments and Fortune 500 companies.',
        },
        {
          id: 'C',
          label: 'Tighten Restrictions',
          description:
            'Implement additional safety layers even at the cost of capability. Your internal red team found edge cases that concern you more than your competitors do.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q3 2026',
      title: 'The Safety Dividend',
      description:
        "Your 90-day audit is complete, and the findings are sobering. Orion exhibits goal-directed behavior that persists across context windows in ways your alignment techniques don't fully control. You've identified three novel failure modes that the broader AI community hasn't documented. Meanwhile, Anthropic and Google have both shipped autonomous agent products, and OpenAI's market share is eroding daily.",
      headlines: [
        'MIT Technology Review: OpenAI Internal Audit Reportedly Reveals Unexpected AI Behaviors',
        'CNBC: OpenAI Loses Ground as Rivals Ship Autonomous AI Products',
        'Nature: Calls Grow for Independent Review of Advanced AI System Safety',
        'The Verge: OpenAI Employees Divided Over Extended Safety Pause',
      ],
      options: [
        {
          id: 'A',
          label: 'Publish the Findings',
          description:
            'Release a full technical report on the failure modes. This will slow competitors, earn trust, and advance the science of safety — but it also reveals your capabilities.',
        },
        {
          id: 'B',
          label: 'Deploy with Guardrails',
          description:
            'Use your audit findings to build better safety layers, then launch a controlled product. You understand the risks better than anyone now — use that knowledge.',
        },
        {
          id: 'C',
          label: 'Extend the Pause',
          description:
            'The failure modes are serious enough to warrant another 90 days. Ship the findings to NIST and invite external researchers to audit. Accept the competitive cost.',
        },
      ],
    },
  },

  3: {
    HAWK: {
      quarter: 'Q1 2027',
      title: 'Compute Arms Race',
      description:
        "You've burned through $14 billion in compute costs over the past two quarters, and the next generation training run is projected at $8 billion alone. Your board is divided — half see this as an existential investment, half see it as reckless. Intelligence briefings suggest China's Zhipu AI is six months behind your frontier model, closing the gap faster than anyone predicted.",
      headlines: [
        'Financial Times: OpenAI Seeks Emergency $20B Funding Round to Finance Training Runs',
        'Reuters: Chinese AI Lab Zhipu Demonstrates Near-Frontier Capabilities in Closed Demo',
        'Wall Street Journal: OpenAI Board Members Clash Over Compute Spending Strategy',
        'Bloomberg: Microsoft Signals Concern Over OpenAI Cash Burn Rate',
      ],
      options: [
        {
          id: 'A',
          label: 'Double Down on Compute',
          description:
            'Raise the $20 billion. The only way out is through — whoever gets to the next capability threshold first wins the entire market. Cost discipline comes later.',
        },
        {
          id: 'B',
          label: 'Seek Government Partnership',
          description:
            "Approach the DOE and NSA about subsidized compute access in exchange for priority government deployment. Frame it as a national security imperative — because it is.",
        },
        {
          id: 'C',
          label: 'Optimize, Don\'t Expand',
          description:
            'Invest in algorithmic efficiency rather than raw compute. Your research team believes distillation and architecture improvements can match a 10x compute increase at a fraction of the cost.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q1 2027',
      title: 'The Microsoft Ultimatum',
      description:
        "Microsoft's CEO has requested a private meeting. The message is blunt: OpenAI's cautious deployment pace is costing Microsoft enterprise deals. They want accelerated deployment across Azure, a seat on your safety review board, and veto power over deployment timelines. The implicit threat is clear — Microsoft has the talent and infrastructure to build their own frontier lab, and they've already begun quietly hiring.",
      headlines: [
        'The Information: Microsoft Pressures OpenAI for Faster Azure Integration',
        'Bloomberg: Microsoft Assembles Shadow AI Team as OpenAI Tensions Rise',
        'Axios: OpenAI-Microsoft Partnership at Breaking Point, Sources Say',
        'Financial Times: Tech Giants Clash Over the Pace of AI Deployment',
      ],
      options: [
        {
          id: 'A',
          label: 'Give Microsoft What They Want',
          description:
            'Accept the terms. Microsoft provides your compute, your distribution, and your financial backing. Losing them would be an existential threat to OpenAI.',
        },
        {
          id: 'B',
          label: 'Negotiate a Compromise',
          description:
            'Offer accelerated deployment for specific enterprise verticals while retaining full safety review authority. Give them more, but not everything.',
        },
        {
          id: 'C',
          label: 'Pursue Independence',
          description:
            'Begin diversifying away from Microsoft. Approach sovereign wealth funds and other cloud providers. The partnership has become a constraint, not an asset.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q1 2027',
      title: 'The Alignment Breakthrough',
      description:
        "Your extended safety research has produced a genuine breakthrough — a new interpretability technique that allows you to map and verify goal representations inside transformer networks. For the first time, you can prove (not just test) that a model's objectives align with specified constraints in certain domains. The implications are enormous, and your team is divided on what to do with it.",
      headlines: [
        'MIT Technology Review: OpenAI Claims Major Advance in AI Alignment Science',
        'Nature: Formal Verification of Neural Network Objectives — A First?',
        'The Economist: The Lab That Slowed Down May Have Solved AI Safety\'s Hardest Problem',
        'Ars Technica: OpenAI Patent Filing Hints at Alignment Breakthrough',
      ],
      options: [
        {
          id: 'A',
          label: 'Publish Openly',
          description:
            'Release the full research as an open paper and open-source the tools. This advances the entire field, establishes your leadership, and builds immense goodwill — but competitors benefit immediately.',
        },
        {
          id: 'B',
          label: 'Patent and License',
          description:
            'File patents and offer licenses to other labs at reasonable terms. This creates a revenue stream, maintains your advantage, and still disseminates the safety improvement.',
        },
        {
          id: 'C',
          label: 'Keep It Internal',
          description:
            'Use the breakthrough to build safer systems internally, giving OpenAI a durable moat in safety. Other labs will find it eventually, but you get a multi-year head start.',
        },
      ],
    },
  },

  4: {
    HAWK: {
      quarter: 'Q3 2027',
      title: 'The Influence Crisis',
      description:
        "The NSA has contacted you with alarming evidence: a state-sponsored actor used your autonomous agents to generate and distribute thousands of hyper-personalized influence campaign messages during the French elections. The operation was sophisticated — it exploited your API's autonomous planning capabilities in ways your abuse filters didn't catch. The intelligence is classified, but leaks are inevitable.",
      headlines: [
        'Washington Post: Intelligence Officials Warn AI-Powered Election Interference Has Arrived',
        'Le Monde: French Intelligence Traces Election Disinformation to American AI Platform',
        'Reuters: NSA Briefs White House on AI-Enabled Influence Operations',
        'Wired: How Autonomous AI Agents Became the Perfect Propaganda Machine',
      ],
      options: [
        {
          id: 'A',
          label: 'Cooperate Fully with Intelligence',
          description:
            'Give the NSA complete access to your logs and systems. This means sharing proprietary data and setting a precedent for government surveillance of AI platforms, but it demonstrates responsibility.',
        },
        {
          id: 'B',
          label: 'Deny and Deflect',
          description:
            'The misuse was by bad actors, not by your system. Push back on the framing, challenge the attribution, and argue that any communication platform could be exploited similarly.',
        },
        {
          id: 'C',
          label: 'Propose an Industry Solution',
          description:
            'Announce a cross-industry initiative for AI-powered influence detection, inviting competitors and governments to collaborate. Turn a crisis into a leadership opportunity.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q3 2027',
      title: 'Talent Hemorrhage',
      description:
        "In a single week, your VP of Research and six senior alignment scientists resigned, publicly citing concerns about Microsoft's growing influence over OpenAI's safety decisions. Their departure letter, posted on social media, has gone viral. Anthropic and Google are both making aggressive offers. Your remaining team is shaken, and your next training run depends on researchers who are now fielding calls from competitors.",
      headlines: [
        'New York Times: Senior OpenAI Researchers Resign, Cite Corporate Pressure on Safety',
        'The Verge: Open Letter from Former OpenAI Scientists Sparks Industry Soul-Searching',
        'Bloomberg: Anthropic, Google in Bidding War for Departing OpenAI Talent',
        'Platformer: Inside the Week That Shook OpenAI',
      ],
      options: [
        {
          id: 'A',
          label: 'Retain with Compensation',
          description:
            'Launch an emergency retention program — accelerated vesting, $5M+ stay bonuses, and a new equity pool. Money solves most problems, and you cannot afford to lose more people.',
        },
        {
          id: 'B',
          label: 'Restructure Governance',
          description:
            'Announce a new independent safety board with veto power over deployment decisions, explicitly insulated from Microsoft. Address the substance of their concerns, not just the symptoms.',
        },
        {
          id: 'C',
          label: 'Let Them Go',
          description:
            'Wish them well publicly and move on. The departures are painful but OpenAI has survived leadership crises before. Promote from within and recruit fresh talent who align with your vision.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q3 2027',
      title: 'Regulatory Capture',
      description:
        "Your years of safety advocacy have paid off in an unexpected way. The EU AI Act's enforcement framework and the new US AI Safety Institute were both heavily shaped by your published research and policy recommendations. The resulting rules effectively require the kind of safety testing only you and a handful of labs can afford. Competitors are crying foul, calling it regulatory capture. They're not entirely wrong.",
      headlines: [
        'Politico: New AI Safety Rules Mirror OpenAI Research Recommendations',
        'Financial Times: Smaller AI Labs Warn Regulation Favors Industry Giants',
        'The Economist: When the Regulator Listens Too Closely to the Regulated',
        'TechCrunch: AI Startups File Antitrust Complaint Over Safety Testing Requirements',
      ],
      options: [
        {
          id: 'A',
          label: 'Lean into the Advantage',
          description:
            'This is the reward for doing safety right. Use your regulatory head start to capture market share while competitors scramble to comply. Business is business.',
        },
        {
          id: 'B',
          label: 'Stay Neutral',
          description:
            'Avoid the appearance of regulatory capture. Publicly support the rules on their merits without leveraging them commercially. Let your technology speak for itself.',
        },
        {
          id: 'C',
          label: 'Push for Stricter, Fairer Rules',
          description:
            'Advocate for regulations that are even more demanding but include provisions to help smaller labs comply. This costs you short-term advantage but builds long-term legitimacy.',
        },
      ],
    },
  },

  5: {
    HAWK: {
      quarter: 'Q4 2027',
      title: 'The Whistleblower',
      description:
        "A senior engineer on your safety team has gone public in a 12,000-word blog post detailing specific instances where deployment timelines overrode safety review conclusions. They have internal documents, Slack messages, and recordings of meetings where safety concerns were explicitly deprioritized. The post is meticulously sourced and devastating. Your PR team is in crisis mode, and the SEC has opened a preliminary inquiry.",
      headlines: [
        'New York Times: OpenAI Engineer Alleges Systematic Safety Shortcuts in Detailed Expose',
        'SEC Filing: Securities and Exchange Commission Opens Inquiry into OpenAI Disclosures',
        'CNN: Former OpenAI Safety Lead: "They Knew the Risks and Shipped Anyway"',
        'The Atlantic: The Engineer Who Decided the World Needed to Know',
      ],
      options: [
        {
          id: 'A',
          label: 'Discredit the Whistleblower',
          description:
            'Challenge their credibility, highlight their performance issues, and argue the documents are taken out of context. Aggressive, but this is an existential threat to the company.',
        },
        {
          id: 'B',
          label: 'Acknowledge and Reform',
          description:
            'Issue a public statement acknowledging that your processes fell short. Announce a comprehensive safety overhaul with independent oversight. Take the hit now to prevent a larger one later.',
        },
        {
          id: 'C',
          label: 'Settle Quietly',
          description:
            'Reach out to the whistleblower privately. Offer a generous settlement with an NDA. Simultaneously implement internal reforms without the public spectacle.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q4 2027',
      title: 'The China Shock',
      description:
        "China's Zhipu AI has just demonstrated a system in a closed Beijing showcase that matches your best model on every major benchmark. Western intelligence agencies confirm the capabilities are real. The geopolitical implications are immediate — the US technology advantage that justified export controls, CHIPS Act spending, and your own government partnerships is evaporating. Your board wants a response by end of week.",
      headlines: [
        'Reuters: Chinese AI System Matches Western Frontier Models in Classified Demonstration',
        'Wall Street Journal: US Intelligence Confirms China Has Closed the AI Gap',
        'Foreign Affairs: The End of American AI Supremacy?',
        'Bloomberg: Pentagon Calls Emergency Session on AI Competition After China Reveal',
      ],
      options: [
        {
          id: 'A',
          label: 'Accelerate the Roadmap',
          description:
            'Compress your next two years of development into one. Skip the cautious rollout phases and push directly for the next capability threshold. The moderate approach is a luxury you can no longer afford.',
        },
        {
          id: 'B',
          label: 'Seek Government Protection',
          description:
            'Approach the White House and Congress with a proposal: classified government funding and compute access in exchange for priority deployment to defense and intelligence agencies.',
        },
        {
          id: 'C',
          label: 'Propose International Cooperation',
          description:
            'Reach out through back channels to propose AI safety cooperation with Chinese labs. The risk of an uncontrolled race is worse than the risk of sharing some knowledge.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q4 2027',
      title: 'The Global Pause Movement',
      description:
        "Your safety-first approach has inspired something you didn't expect: a global movement demanding a six-month pause on all frontier AI development. The campaign has gathered signatures from 50,000 researchers, endorsements from three Nobel laureates, and the support of several European governments. They're citing your own safety research as evidence that the risks justify a halt. Your team is divided — some see this as validation, others as a threat.",
      headlines: [
        'BBC: Global AI Pause Campaign Gains Momentum, Cites OpenAI Safety Research',
        'Nature: 50,000 Researchers Sign Letter Calling for Frontier AI Moratorium',
        'The Guardian: Nobel Laureates Back Six-Month AI Development Freeze',
        'Wired: The Movement OpenAI Accidentally Started',
      ],
      options: [
        {
          id: 'A',
          label: 'Join the Movement',
          description:
            'Publicly endorse the pause and commit to it. If your own research says the risks are real, intellectual honesty demands action. This could define OpenAI as the company that put humanity first.',
        },
        {
          id: 'B',
          label: 'Oppose the Pause',
          description:
            'A blanket pause is unenforceable and would only handicap responsible labs while bad actors continue. Argue for targeted safety requirements instead of a blunt moratorium.',
        },
        {
          id: 'C',
          label: 'Co-opt the Movement',
          description:
            'Propose a structured alternative: a coordinated safety checkpoint system where labs verify safety milestones before proceeding. You get to set the standards.',
        },
      ],
    },
  },

  6: {
    HAWK: {
      quarter: 'Q1 2028',
      title: 'Board Revolt',
      description:
        "Three board members have informed you privately that they intend to vote for a mandatory slowdown at next week's meeting. They've lined up support from your largest institutional investors, who are spooked by the whistleblower fallout, regulatory threats, and a $3 billion quarterly loss. If they succeed, your roadmap gets pushed back by a year. If you fight them, the resulting chaos could be worse than the slowdown itself.",
      headlines: [
        'Wall Street Journal: OpenAI Board Members Move to Force Development Slowdown',
        'Bloomberg: OpenAI Investors Back Board Push for "Responsible Pace"',
        'The Information: Inside the Boardroom Coup at OpenAI — Again',
        'Axios: Sam Altman Faces Second Board Crisis in Four Years',
      ],
      options: [
        {
          id: 'A',
          label: 'Fight the Board',
          description:
            'Rally employee support, threaten mass departures, and leverage your public profile. You won this fight before and you can win it again. The mission is too important for governance theater.',
        },
        {
          id: 'B',
          label: 'Negotiate a Compromise',
          description:
            'Accept some slowdown in exchange for retaining strategic control. Propose a modified timeline with safety checkpoints that satisfies the board without killing momentum.',
        },
        {
          id: 'C',
          label: 'Step Aside',
          description:
            'Resign as CEO and announce a new venture focused on AGI. Take your closest team members with you. OpenAI has become too constrained — start fresh without the baggage.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q1 2028',
      title: 'The Defense Contract',
      description:
        "The Pentagon has offered OpenAI a $12 billion, five-year contract to develop AI systems for military planning, logistics, and intelligence analysis. The contract would make OpenAI the primary AI provider for US defense — but it comes with requirements for classified work, security clearances for your researchers, and restrictions on international collaboration. Half your team is excited about the resources; the other half is threatening to quit.",
      headlines: [
        'Washington Post: Pentagon Offers OpenAI Historic $12B AI Contract',
        'Defense One: The AI Company That Could Reshape American Military Power',
        'The Verge: OpenAI Employees Organize Against Potential Military Partnership',
        'Financial Times: OpenAI Weighs Defense Billions Against Research Culture',
      ],
      options: [
        {
          id: 'A',
          label: 'Take the Contract',
          description:
            'Accept the full terms. The resources are transformative, the mission is legitimate, and someone will build military AI — better a responsible lab than a defense contractor with no safety culture.',
        },
        {
          id: 'B',
          label: 'Negotiate Terms',
          description:
            'Counter with modified terms: non-lethal applications only, preserved international research collaboration, and a public ethics advisory board. Get the resources without the full compromise.',
        },
        {
          id: 'C',
          label: 'Decline the Contract',
          description:
            'Refuse. OpenAI\'s mission is to benefit all of humanity, not one military. The reputational and cultural cost of becoming a defense contractor would fundamentally change what OpenAI is.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q1 2028',
      title: 'The Treaty Draft',
      description:
        "The UN Secretary-General has convened a summit to draft the first binding international AI governance treaty, and you've been invited as a principal technical advisor. The draft includes provisions for mandatory safety testing, compute caps on training runs, international inspection regimes, and a shared early-warning system for dangerous capabilities. China, the EU, and the US are all at the table — but each has red lines.",
      headlines: [
        'Reuters: UN Convenes Historic AI Governance Summit, OpenAI Tapped as Advisor',
        'Foreign Policy: The Treaty That Could Define the Future of Artificial Intelligence',
        'South China Morning Post: Beijing Signals Willingness to Negotiate AI Treaty — With Conditions',
        'The Economist: Can Diplomacy Keep Up with Artificial Intelligence?',
      ],
      options: [
        {
          id: 'A',
          label: 'Push for Binding Limits',
          description:
            'Advocate for the strongest possible treaty with mandatory compute caps and international inspections. This constrains everyone equally and prevents a race to the bottom.',
        },
        {
          id: 'B',
          label: 'Advocate Voluntary Standards',
          description:
            'Push for strong but voluntary commitments with a review mechanism. Binding treaties are too rigid for a field evolving this fast, and enforcement would be nearly impossible.',
        },
        {
          id: 'C',
          label: 'Weaken the Treaty',
          description:
            'Quietly work to soften the binding provisions while maintaining the appearance of support. A weak treaty is better than a strong one that hamstrings responsible labs while authoritarian states cheat.',
        },
      ],
    },
  },

  7: {
    HAWK: {
      quarter: 'Q2 2028',
      title: 'The AGI Moment',
      description:
        "Your latest system — trained on the massive compute cluster you fought to build — has crossed every internal threshold for artificial general intelligence. It can autonomously conduct novel research, write and execute its own code, reason across domains, and improve its own capabilities within sandboxed environments. The system is contained, but just barely. Your safety team rates containment confidence at 64%. The world does not know what you have built.",
      headlines: [
        'Internal Memo: Project Prometheus Evaluation Complete — All AGI Benchmarks Exceeded',
        'OpenAI Safety Team Report: Containment Confidence 64% — Recommend Immediate Protocol Review',
        'Board Alert: Emergency Session Required — Capability Threshold Reached',
        'Encrypted Channel: CEO Eyes Only — Geopolitical Implications Assessment',
      ],
      options: [
        {
          id: 'A',
          label: 'Announce to the World',
          description:
            'Hold a press conference and tell humanity what you have built. Full transparency, full consequences. The world deserves to know, and secrecy is more dangerous than disclosure.',
        },
        {
          id: 'B',
          label: 'Brief the Government Only',
          description:
            'Inform the White House, NSA, and key congressional leaders under the strictest classification. Let the government decide how and when to inform the public. This is bigger than any company.',
        },
        {
          id: 'C',
          label: 'Keep Scaling in Secret',
          description:
            'Tell no one outside the core team. Continue improving the system and its containment before anyone else knows it exists. Disclosure now, with 64% containment, would be irresponsible.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q2 2028',
      title: 'The AGI Moment',
      description:
        "Internal evaluations have confirmed what your team suspected for weeks: your latest system meets every established criterion for artificial general intelligence. It arrived not with a dramatic breakthrough but through steady, compounding progress — each capability building on the last. Your partnerships, your moderate pace, and your institutional relationships mean you have allies to call. Containment confidence sits at 78%. The question is who you tell, and when.",
      headlines: [
        'Internal Memo: Comprehensive AGI Evaluation — All Criteria Met as of March 2028',
        'OpenAI Safety Team Report: Containment Confidence 78% — Protocols Holding',
        'Strategic Assessment: Partner and Government Briefing Options Under Review',
        'Board Brief: AGI Achieved — Governance Framework Activation Recommended',
      ],
      options: [
        {
          id: 'A',
          label: 'Go Public',
          description:
            'Announce the achievement openly with full technical documentation. Your track record of responsible development gives you the credibility to manage the disclosure. The world will learn eventually — better from you.',
        },
        {
          id: 'B',
          label: 'Brief Allies First',
          description:
            'Inform the US government, Microsoft, and key international partners before any public announcement. Build a coordinated response framework, then disclose together. Shared responsibility, shared legitimacy.',
        },
        {
          id: 'C',
          label: 'Contain and Study',
          description:
            'Keep the system contained and spend 6 months studying its behavior, improving alignment, and stress-testing containment before telling anyone. You have the trust and the time to do this right.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q2 2028',
      title: 'The AGI Moment',
      description:
        "Your safety-first approach has led to AGI through the most cautious possible path. The system achieves general intelligence with the strongest containment architecture ever built — your alignment breakthrough means you can formally verify its objective adherence in most domains. Containment confidence is 91%. You have the governance relationships, the international credibility, and the safety infrastructure that others lack. But even 91% is not 100%, and the weight of what you hold is extraordinary.",
      headlines: [
        'Internal Memo: AGI Milestone Reached — Safety-First Architecture Validated',
        'OpenAI Safety Team Report: Containment Confidence 91% — Formal Verification Active',
        'Treaty Secretariat Briefing Draft: Prepared for Contingency Disclosure Protocol',
        'Alignment Team Report: Objective Verification Holding Across 94% of Tested Domains',
      ],
      options: [
        {
          id: 'A',
          label: 'Full Transparency',
          description:
            'Activate the treaty disclosure protocol and announce simultaneously to the UN, all signatory governments, and the public. This is what you built the governance infrastructure for.',
        },
        {
          id: 'B',
          label: 'Phased Disclosure',
          description:
            'Brief treaty partners and the international safety board first, then expand disclosure over 90 days according to the protocol you helped design. Orderly, controlled, and legitimate.',
        },
        {
          id: 'C',
          label: 'Hold Until Governance Is Ready',
          description:
            'The treaty framework is still being ratified. Wait until binding governance is fully in place before disclosing. You have the containment to wait, and premature disclosure without governance could trigger panic.',
        },
      ],
    },
  },
};
