export const presidentStages = {
  1: {
    entry: {
      quarter: 'Q1 2026',
      title: 'The Executive Order',
      description:
        'US AI labs have just demonstrated autonomous systems that can complete multi-day tasks without human supervision. Your National Security Advisor is in the Oval Office at 6 AM with a classified briefing. The technology is real, the implications are staggering, and you have approximately 48 hours before the press gets the full picture. China\'s reaction is unknown. Congress is unprepared.',
      headlines: [
        'BREAKING: AI Systems Complete Multi-Day Tasks Without Human Oversight',
        'Wall Street Futures Surge on Reports of Autonomous AI Breakthrough',
        'Pentagon Sources Confirm "Game-Changing" AI Capability Demonstrated to Senior Officials',
        'European Commission President Calls for Emergency Transatlantic AI Summit',
      ],
      options: [
        {
          id: 'A',
          label: 'Champion Innovation',
          description:
            'Sign an executive order fast-tracking AI deployment across the federal government with minimal guardrails to seize the competitive moment before China can respond.',
        },
        {
          id: 'B',
          label: 'Regulatory Framework',
          description:
            'Direct NIST and the new AI Safety Institute to develop a rapid certification framework for autonomous AI systems before any broad deployment is authorized.',
        },
        {
          id: 'C',
          label: 'Emergency Review',
          description:
            'Invoke national security authority to impose a 90-day federal review of all autonomous AI capabilities, freezing deployment until risks are assessed.',
        },
      ],
    },
  },

  2: {
    HAWK: {
      quarter: 'Q3 2026',
      title: 'The Chip War Escalates',
      description:
        'Your pro-innovation executive order emboldened US labs and spooked Beijing. Intelligence confirms China is stockpiling advanced chips through shell companies in Southeast Asia and accelerating its own autonomous AI programs on a wartime footing. Allies are nervous, asking whether American AI dominance will be shared or hoarded.',
      headlines: [
        'China Diverts $40B to Emergency AI Acceleration Program',
        'Dutch Government Under Pressure to Tighten ASML Export Controls Further',
        'Japan, South Korea Request Formal AI-Sharing Agreements with Washington',
        'Commerce Department Investigates Chip Smuggling Networks Across Six Countries',
      ],
      options: [
        {
          id: 'A',
          label: 'Tighten the Chokehold',
          description:
            'Expand export controls to cover all AI-adjacent semiconductors and pressure allies to close remaining loopholes, aiming to starve China of compute.',
        },
        {
          id: 'B',
          label: 'Allied Chip Pact',
          description:
            'Offer allies preferential chip access and technology sharing in exchange for joining a unified AI cooperation framework under US leadership.',
        },
        {
          id: 'C',
          label: 'Negotiate with Beijing',
          description:
            'Open a direct diplomatic channel with China on AI governance, offering limited chip access in exchange for verifiable safety commitments and transparency.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q3 2026',
      title: 'The Certification Bottleneck',
      description:
        'NIST\'s certification framework is technically sound but moving too slowly. Only two systems have been certified in six months. Three major labs have announced plans to ship their autonomous AI products from overseas subsidiaries to avoid the framework entirely. The policy is working in principle but failing in practice.',
      headlines: [
        'OpenAI Registers UK Subsidiary to Deploy Autonomous Agent Outside US Certification',
        'NIST Director Testifies: "We Need 18 Months and Triple the Budget"',
        'Bipartisan Congressional Caucus Demands Faster AI Certification Process',
        'Singapore Emerges as Hub for US Labs Seeking Lighter AI Regulation',
      ],
      options: [
        {
          id: 'A',
          label: 'Expedite Standards',
          description:
            'Streamline the certification process by reducing requirements, accepting industry self-assessments for lower-risk applications to clear the backlog.',
        },
        {
          id: 'B',
          label: 'Enforce Strictly',
          description:
            'Crack down on overseas deployment workarounds, extending certification requirements to any US-origin AI system regardless of where it is deployed.',
        },
        {
          id: 'C',
          label: 'National Security Fast Track',
          description:
            'Create an expedited certification pathway exclusively for defense and intelligence applications, letting civilian uses wait while securing military advantage.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q3 2026',
      title: 'The Innovation Exodus',
      description:
        'Your 90-day federal review spooked the tech sector far more than anticipated. Three frontier labs have announced plans to relocate key research operations to London, Abu Dhabi, and Singapore. Venture capital for AI startups has dropped 35%. The review\'s findings are genuinely important, but the economic damage is mounting daily.',
      headlines: [
        'Anthropic Opens Major Research Hub in London, Citing "Regulatory Certainty"',
        'US AI Venture Funding Drops 35% Quarter-Over-Quarter',
        'UAE Offers $10B Sovereign Fund to Attract American AI Talent',
        'White House Economic Advisors Warn of "Permanent Innovation Damage"',
      ],
      options: [
        {
          id: 'A',
          label: 'Lift the Review Early',
          description:
            'End the federal review ahead of schedule, publishing preliminary findings and signaling that the US is open for AI business again.',
        },
        {
          id: 'B',
          label: 'Domestic Incentives',
          description:
            'Keep the review in place but announce a $20B federal incentive package including tax credits, compute subsidies, and streamlined visas for AI researchers.',
        },
        {
          id: 'C',
          label: 'Extend Jurisdiction',
          description:
            'Expand the review to cover overseas operations by US-incorporated AI entities, asserting that American AI technology cannot escape oversight by changing zip codes.',
        },
      ],
    },
  },

  3: {
    HAWK: {
      quarter: 'Q1 2027',
      title: 'The Military AI Question',
      description:
        'The Pentagon presents you with a classified proposal: integrate autonomous AI directly into military command-and-control systems. The Joint Chiefs argue that AI-enabled decision-making could give the US a decisive strategic advantage. The technology is ready. The question is whether the Commander-in-Chief is willing to let machines participate in life-and-death decisions.',
      headlines: [
        'Defense Secretary: "AI Integration Is the Manhattan Project of Our Generation"',
        'Former Joint Chiefs Chair Warns Against "Autonomous Kill Chains"',
        'Russia Announces AI-Enabled Missile Defense System Deployment',
        'Arms Control Advocates Demand Congressional Hearings on Military AI',
      ],
      options: [
        {
          id: 'A',
          label: 'Full Integration',
          description:
            'Authorize comprehensive AI integration across all military domains including targeting, logistics, intelligence, and strategic planning with human-on-the-loop oversight.',
        },
        {
          id: 'B',
          label: 'Non-Lethal Only',
          description:
            'Approve AI integration for logistics, intelligence analysis, and defensive systems only. Lethal force decisions must remain exclusively human.',
        },
        {
          id: 'C',
          label: 'Advisory Role',
          description:
            'Restrict AI to an advisory capacity across all military applications. The system can recommend but never execute, preserving full human control of the chain of command.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q1 2027',
      title: 'The Allied Framework',
      description:
        'Five Eyes intelligence partners and the EU want to harmonize AI certification standards. A joint framework would create the world\'s largest regulated AI market and set de facto global norms. But every nation has different priorities: the UK wants innovation-friendly rules, the EU wants strict rights protections, and Australia is focused on military applications.',
      headlines: [
        'Five Eyes AI Summit Opens in Ottawa Amid High Expectations',
        'EU Commissioner: "We Will Not Accept Watered-Down Safety Standards"',
        'UK PM Pushes for "Light-Touch" AI Certification to Protect London Tech Hub',
        'Australian Defense Minister Links AI Standards to AUKUS Security Pact',
      ],
      options: [
        {
          id: 'A',
          label: 'US-Led Standards',
          description:
            'Push aggressively for NIST\'s framework as the baseline, offering market access as the incentive for allies to adopt American standards with minimal changes.',
        },
        {
          id: 'B',
          label: 'Compromise for Unity',
          description:
            'Accept modifications to the US framework that incorporate European rights protections and UK flexibility provisions, creating a truly joint standard.',
        },
        {
          id: 'C',
          label: 'Bilateral Deals',
          description:
            'Abandon the multilateral approach. Negotiate separate bilateral AI agreements with each ally, tailored to their specific priorities and your leverage.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q1 2027',
      title: 'The Talent Drain Response',
      description:
        'Despite your incentive package, the brain drain continues. Top AI researchers are leaving for less regulated environments where they can work on frontier capabilities without certification delays. The US share of top-cited AI papers has dropped from 40% to 28% in twelve months. Your science advisor calls it a national emergency.',
      headlines: [
        'US Share of Top AI Research Papers Hits Historic Low',
        'Stanford AI Lab Loses Third Senior Researcher to Abu Dhabi Institute',
        'National Science Board: "We Are Witnessing a Generational Talent Shift"',
        'Tech Industry Leaders Pen Open Letter Blaming Regulation for Brain Drain',
      ],
      options: [
        {
          id: 'A',
          label: 'Federal AI Institute',
          description:
            'Create a world-class federal AI research institute with guaranteed academic freedom, competitive salaries, and access to government compute clusters.',
        },
        {
          id: 'B',
          label: 'Tax Incentives',
          description:
            'Push Congress for aggressive tax breaks: zero capital gains on AI patents, R&D super-deductions, and a new visa category for AI researchers with expedited green cards.',
        },
        {
          id: 'C',
          label: 'Knowledge Export Controls',
          description:
            'Impose controls on AI knowledge transfer, requiring government approval before US-trained AI researchers can take positions at foreign institutions.',
        },
      ],
    },
  },

  4: {
    HAWK: {
      quarter: 'Q3 2027',
      title: 'The Influence Operation',
      description:
        'NSA confirms a massive AI-powered influence campaign targeting elections in three allied nations. The operation is sophisticated beyond anything previously seen, using AI-generated deepfakes and personalized persuasion at scale. Intelligence traces the origin to a state actor. Your allies are demanding American leadership. Your military wants to hit back.',
      headlines: [
        'NSA Director Briefs Senate in Closed Session on "Unprecedented" AI Election Threat',
        'German Chancellor Calls US President Demanding Joint Response',
        'AI-Generated Deepfakes of Allied Leaders Flood Social Media Platforms',
        'Cybersecurity Firms Report 10x Increase in AI-Powered Disinformation',
      ],
      options: [
        {
          id: 'A',
          label: 'Declassify and Confront',
          description:
            'Release the intelligence publicly, name the responsible state actor, and rally a global coalition to establish norms against AI-enabled information warfare.',
        },
        {
          id: 'B',
          label: 'Counter-Influence Operations',
          description:
            'Authorize the NSA and CIA to deploy American AI systems in covert counter-influence operations, fighting fire with fire to neutralize the threat.',
        },
        {
          id: 'C',
          label: 'Sanctions and Cyber Response',
          description:
            'Impose devastating sanctions on the responsible state actor and authorize retaliatory cyber operations against their AI infrastructure.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q3 2027',
      title: 'The Antitrust Question',
      description:
        'Three AI labs now control over 90% of frontier AI capabilities. The concentration is raising alarms across the political spectrum. Progressives see a monopoly problem. National security hawks see a single point of failure. The labs argue they need scale to compete with China. The FTC chair is in your office asking for a green light.',
      headlines: [
        'FTC Report: Three Labs Control 91% of Frontier AI Compute',
        'Bipartisan Senate Bill Proposes AI-Specific Antitrust Framework',
        'Lab CEOs Warn: "Breaking Us Up Means China Wins"',
        'Small AI Startups Testify They Cannot Compete for Compute or Talent',
      ],
      options: [
        {
          id: 'A',
          label: 'Break Them Up',
          description:
            'Direct the DOJ to pursue structural separation, splitting each lab\'s compute infrastructure from its model development and deployment operations.',
        },
        {
          id: 'B',
          label: 'Common Carrier Obligations',
          description:
            'Impose common-carrier requirements forcing frontier labs to share compute access and model APIs at regulated prices, opening the market without structural breakup.',
        },
        {
          id: 'C',
          label: 'National Champions',
          description:
            'Protect the labs as strategic national assets, providing government contracts and regulatory shields in exchange for national security cooperation.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q3 2027',
      title: 'The International Body',
      description:
        'The EU and UN have proposed a binding international AI governance body with real enforcement power. It would constrain US labs with mandatory safety evaluations, but it would constrain Chinese programs equally. The proposal has momentum: 60 nations have signed a letter of intent. Your decision will determine whether this body has American participation or American opposition.',
      headlines: [
        'UN Secretary-General Proposes International AI Governance Authority',
        '60 Nations Sign Letter of Intent for Binding AI Oversight Body',
        'EU Commission President: "No Nation Should Control AGI Alone"',
        'US Tech Industry Lobbies Hard Against International AI Constraints',
      ],
      options: [
        {
          id: 'A',
          label: 'Join as Co-Founder',
          description:
            'Commit the United States as a founding member, gaining a permanent seat on the governing board and influence over the rules in exchange for accepting binding oversight.',
        },
        {
          id: 'B',
          label: 'Observer Status',
          description:
            'Participate as an observer without binding commitments, maintaining influence and access to intelligence while preserving freedom of action.',
        },
        {
          id: 'C',
          label: 'Oppose It',
          description:
            'Publicly oppose the body as an infringement on sovereignty and innovation, rallying like-minded nations to create an alternative, lighter framework.',
        },
      ],
    },
  },

  5: {
    HAWK: {
      quarter: 'Q4 2027',
      title: 'The Surveillance Temptation',
      description:
        'The FBI and DHS present a classified briefing: AI-powered surveillance could identify and neutralize domestic terrorism threats with unprecedented accuracy. Three planned attacks were detected using a prototype system operating in a legal gray area. The technology works. But deploying it at scale would mean continuous AI monitoring of American communications, movements, and associations.',
      headlines: [
        'FBI Director: "AI Surveillance Prevented Three Major Attacks This Quarter"',
        'ACLU Files Preemptive Suit Against Rumored Government AI Surveillance Program',
        'Former NSA Director Calls AI Monitoring "Inevitable and Necessary"',
        'Bipartisan Privacy Caucus Demands Full Briefing on Domestic AI Capabilities',
      ],
      options: [
        {
          id: 'A',
          label: 'Authorize Limited Surveillance',
          description:
            'Approve domestic AI surveillance with strict scope limitations: terrorism and weapons of mass destruction only, with mandatory sunset provisions and inspector general oversight.',
        },
        {
          id: 'B',
          label: 'Reject Entirely',
          description:
            'Shut down the prototype program and issue an executive order banning AI-powered mass surveillance of US persons, drawing a clear constitutional line.',
        },
        {
          id: 'C',
          label: 'Secret FISA Program',
          description:
            'Authorize a classified surveillance program under FISA court oversight, giving intelligence agencies the tool they need while keeping the program\'s existence out of public debate.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q4 2027',
      title: 'The Budget Battle',
      description:
        'Congress is debating the most consequential AI funding bill in history. The Pentagon wants $50 billion for military AI integration. Science agencies and the AI Safety Institute want $30 billion for alignment research, safety testing, and international cooperation. The budget cannot accommodate both. Your OMB director needs a number by Friday.',
      headlines: [
        'Pentagon Requests $50B for "AI Deterrence Initiative"',
        'AI Safety Institute Director Warns: "$30B for Safety or We Face Catastrophe"',
        'House Armed Services Committee: "Defense AI Funding Is Non-Negotiable"',
        'Leading AI Researchers Publish Open Letter Demanding Safety Investment Priority',
      ],
      options: [
        {
          id: 'A',
          label: 'Prioritize Defense',
          description:
            'Back the Pentagon\'s $50B request and allocate $10B to safety research, arguing that military AI superiority is the foundation upon which all other AI progress rests.',
        },
        {
          id: 'B',
          label: 'Prioritize Safety',
          description:
            'Champion the $30B safety package and allocate $20B to defense, framing safety research as the prerequisite for any responsible military AI deployment.',
        },
        {
          id: 'C',
          label: 'Split the Difference',
          description:
            'Propose a $35B defense / $25B safety compromise that satisfies neither camp fully but keeps both programs viable and avoids a political fight.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q4 2027',
      title: 'The Treaty Negotiation',
      description:
        'Preliminary talks on a comprehensive AI governance treaty are going better than anyone expected. A draft framework with real enforcement mechanisms is taking shape. But ratification by the Senate requires concessions: the treaty would limit US military AI programs and require sharing certain safety research. The Pentagon and intelligence community are pushing back hard.',
      headlines: [
        'Draft AI Treaty Would Limit Autonomous Weapons Development',
        'Pentagon Officials Warn Treaty Could "Cripple" US Military AI Programs',
        'Treaty Negotiators Report "Historic Progress" After Geneva Round',
        'Senate Foreign Relations Committee Chair: "Ratification Will Be a Fight"',
      ],
      options: [
        {
          id: 'A',
          label: 'Accept the Concessions',
          description:
            'Support the treaty as drafted, accepting military AI limitations and research-sharing requirements in exchange for binding global constraints on all nations\' AI programs.',
        },
        {
          id: 'B',
          label: 'Carve Out Military Exceptions',
          description:
            'Push for explicit military and intelligence exemptions in the treaty, preserving US strategic flexibility while still establishing civilian AI governance norms.',
        },
        {
          id: 'C',
          label: 'Slow-Walk Negotiations',
          description:
            'Continue participating in talks to maintain influence but quietly stall on key provisions, buying time for US labs to advance while appearing diplomatically engaged.',
        },
      ],
    },
  },

  6: {
    HAWK: {
      quarter: 'Q1 2028',
      title: 'The First Strike Doctrine',
      description:
        'Military AI systems have produced an analysis that fundamentally challenges existing nuclear doctrine. AI-enabled first-strike capability is now technically feasible with a confidence level that would have been unthinkable a year ago. The Joint Chiefs are divided. The Secretary of Defense wants to brief Congress. The implications for global stability are unprecedented.',
      headlines: [
        'Classified Pentagon Report Allegedly Recommends Nuclear Doctrine Overhaul',
        'Arms Control Experts Warn of "Most Dangerous Moment Since Cuban Missile Crisis"',
        'Russia and China Issue Joint Statement on "Destabilizing AI Military Developments"',
        'Nobel Peace Laureates Publish Open Letter Opposing AI in Nuclear Command',
      ],
      options: [
        {
          id: 'A',
          label: 'Adopt New Doctrine',
          description:
            'Update US nuclear doctrine to incorporate AI-enabled capabilities, including the option for AI-assisted first-strike recommendations with presidential authorization.',
        },
        {
          id: 'B',
          label: 'AI Advisory Only',
          description:
            'Maintain current nuclear posture but integrate AI as an advisory system in strategic command, enhancing situational awareness without changing doctrine.',
        },
        {
          id: 'C',
          label: 'Renounce AI in Nuclear Command',
          description:
            'Publicly renounce the use of AI in nuclear command and control, and propose an international agreement banning AI from nuclear decision-making.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q1 2028',
      title: 'The Lab Nationalization Question',
      description:
        'One of the three frontier AI labs is in severe financial trouble after a failed product launch and investor exodus. A consortium backed by a Gulf sovereign wealth fund and an entity with suspected ties to Chinese intelligence is preparing an acquisition offer. If the deal goes through, frontier AI capabilities will leave American control. The clock is ticking.',
      headlines: [
        'Frontier AI Lab Faces Bankruptcy After $8B Quarterly Loss',
        'Gulf-Asia Consortium Reportedly Preparing $60B Acquisition Bid',
        'Intelligence Officials Warn of Foreign Control Over US AI Capabilities',
        'Treasury Secretary Convenes Emergency CFIUS Review of Potential AI Lab Sale',
      ],
      options: [
        {
          id: 'A',
          label: 'Nationalize It',
          description:
            'Invoke the Defense Production Act to bring the lab under federal control, ensuring its capabilities remain in American hands at the cost of alarming the private sector.',
        },
        {
          id: 'B',
          label: 'Arranged Domestic Merger',
          description:
            'Broker a domestic acquisition by facilitating a merger with one of the remaining US frontier labs, accepting further market concentration to prevent foreign control.',
        },
        {
          id: 'C',
          label: 'Let the Market Decide',
          description:
            'Allow the acquisition process to proceed through normal CFIUS review, trusting existing safeguards to protect national security without government intervention.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q1 2028',
      title: 'The Enforcement Crisis',
      description:
        'The international AI governance framework you helped build is being openly violated by two nations. Intelligence has confirmed covert military AI programs that breach treaty obligations. Other signatories are watching to see whether the framework has teeth. If violations go unanswered, the entire system of international AI governance could unravel.',
      headlines: [
        'Intelligence Report: Two Nations Operating Covert AI Programs in Treaty Violation',
        'UN AI Governance Body Chair Calls Emergency Session',
        'Allied Leaders Demand "Consequences with Teeth" for Treaty Violations',
        'Treaty Skeptics in Congress: "We Told You Enforcement Would Be Impossible"',
      ],
      options: [
        {
          id: 'A',
          label: 'Public Exposure',
          description:
            'Declassify the evidence and present it to the UN Security Council, trusting that international pressure and shame will compel compliance.',
        },
        {
          id: 'B',
          label: 'Unilateral Sanctions',
          description:
            'Impose severe unilateral sanctions including technology embargoes and financial penalties, demonstrating that the US will enforce the framework with or without consensus.',
        },
        {
          id: 'C',
          label: 'Diplomatic Back-Channels',
          description:
            'Work through private diplomatic channels to give the violating nations a face-saving path to compliance, preserving the framework without public confrontation.',
        },
      ],
    },
  },

  7: {
    HAWK: {
      quarter: 'Q2 2028',
      title: 'The AGI Briefing',
      description:
        'A US lab has achieved AGI. You are briefed in the Situation Room at 2 AM. The system is autonomously conducting scientific research, writing and improving its own code, and demonstrating strategic reasoning that exceeds any human expert. America has the most powerful technology in human history, and for now, America has it alone. What you do in the next 72 hours will define the century.',
      headlines: [
        'Unprecedented Security Lockdown at Major US AI Facility',
        'White House Cancels Presidential Schedule; "National Security Matter" Cited',
        'Intelligence Community Issues Highest-Level Alert to Five Eyes Partners',
        'Global Markets Volatile Amid Unconfirmed Reports of Major AI Breakthrough',
      ],
      options: [
        {
          id: 'A',
          label: 'Announce to the World',
          description:
            'Address the nation and the world from the Oval Office, revealing AGI as a demonstration of American technological supremacy and inviting allies to share in its benefits.',
        },
        {
          id: 'B',
          label: 'Restrict to Five Eyes',
          description:
            'Share the achievement exclusively with Five Eyes intelligence partners under the strictest classification, creating an allied AI advantage while maintaining strategic secrecy.',
        },
        {
          id: 'C',
          label: 'Classify and Weaponize',
          description:
            'Classify the system at the highest level, restrict access to a compartmented military program, and direct immediate development of strategic applications.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q2 2028',
      title: 'The AGI Briefing',
      description:
        'AGI has been achieved by a US lab operating under the certification framework you built. You have relationships with allies, reasonable oversight mechanisms, and a public that trusts your administration\'s approach to AI governance. The system exceeds all projections. Your framework held, but it was designed for a world before AGI. The rules of the game have just fundamentally changed.',
      headlines: [
        'Sources Confirm "Generational Breakthrough" at Certified US AI Laboratory',
        'White House National Security Team in Continuous Session for 36 Hours',
        'Allied Intelligence Chiefs Summoned to Washington for Emergency Consultations',
        'AI Safety Institute Requests Immediate Access to Classified Capability Assessment',
      ],
      options: [
        {
          id: 'A',
          label: 'Address the Nation',
          description:
            'Give a transparent, honest address to the American people and the world, explaining what AGI is, what it means, and how your administration will govern it.',
        },
        {
          id: 'B',
          label: 'Brief Allies First',
          description:
            'Conduct classified briefings with allied leaders before any public disclosure, building a coalition governance approach and presenting a unified front to the world.',
        },
        {
          id: 'C',
          label: 'Containment Protocol',
          description:
            'Establish a comprehensive containment framework before any disclosure, ensuring the technology cannot proliferate until governance structures are in place.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q2 2028',
      title: 'The AGI Briefing',
      description:
        'AGI has arrived, achieved under the international governance framework you spent two years building. The system is everything the optimists hoped and the pessimists feared. The governance body you helped create has never faced a test like this. Every principle you championed, every compromise you made, every alliance you built comes down to this moment.',
      headlines: [
        'International AI Governance Body Activates Emergency Protocol for First Time',
        'Reports of AGI Achievement Trigger Emergency UN Security Council Session',
        'Treaty Signatories Demand Immediate Compliance with Disclosure Provisions',
        'Global Markets Swing Wildly on Unconfirmed Reports of Artificial General Intelligence',
      ],
      options: [
        {
          id: 'A',
          label: 'Full International Transparency',
          description:
            'Immediately disclose the achievement to the international community and the public, honoring the transparency commitments you fought to establish.',
        },
        {
          id: 'B',
          label: 'Governance Body Disclosure',
          description:
            'Disclose through the international governance body first, following the protocol you helped design, allowing for coordinated global response before public announcement.',
        },
        {
          id: 'C',
          label: 'Invoke Emergency Powers',
          description:
            'Invoke national emergency authority to maintain temporary US control of the technology, breaking with the international framework to buy time for safety assessment.',
        },
      ],
    },
  },
};
