export const chinaStages = {
  1: {
    entry: {
      quarter: 'Q1 2026',
      title: 'The Chip Embargo',
      description:
        'The US has tightened export controls for the third time in eighteen months, and your latest training run is slamming into compute ceilings. Intelligence reports confirm American labs are at least six months ahead on frontier capabilities. The Politburo Standing Committee has summoned you to Zhongnanhai for answers.',
      headlines: [
        'Xinhua: Ministry of Science Announces "Self-Reliance Acceleration Plan" for Semiconductor Industry',
        'Reuters: U.S. Expands Chip Export Controls to Cover 14nm Process and Below',
        'South China Morning Post: Chinese AI Labs Scramble as NVIDIA H200 Supply Dries Up Completely',
        'Global Times: Western Technology Blockade Will Only Strengthen China\'s Resolve, Says Spokesperson',
      ],
      options: [
        {
          id: 'A',
          label: 'Black Market Compute',
          description:
            'Activate covert procurement networks through shell companies in Southeast Asia and the Middle East. Acquire restricted chips through third-party intermediaries who can obscure the end destination.',
        },
        {
          id: 'B',
          label: 'Domestic Innovation',
          description:
            'Accelerate the domestic chip program at SMIC and Huawei HiSilicon. Pour resources into optimizing training efficiency on existing hardware while the fabs catch up.',
        },
        {
          id: 'C',
          label: 'Strategic Patience',
          description:
            'Accept the temporary compute disadvantage and redirect your best researchers toward algorithmic breakthroughs. If you can do more with less, the chip gap becomes irrelevant.',
        },
      ],
    },
  },

  2: {
    HAWK: {
      quarter: 'Q3 2026',
      title: 'The Exposure Risk',
      description:
        'Your covert chip procurement is delivering results -- three shell companies in Singapore, Dubai, and Malaysia have funneled over 4,000 restricted GPUs into your compute clusters. But US intelligence has flagged unusual shipping patterns, and two of your intermediaries report being approached by FBI agents. The operation is producing capability gains but the exposure risk is climbing fast.',
      headlines: [
        'Financial Times: U.S. Commerce Department Investigates Suspicious Chip Shipments Through Southeast Asia',
        'Xinhua: China Condemns "Long-Arm Jurisdiction" in American Technology Trade Practices',
        'Bloomberg: Singapore Authorities Quietly Audit Three AI Hardware Firms After U.S. Tip-Off',
        'Nikkei Asia: Shell Company Network Linked to Chinese Military-Adjacent Research Labs',
      ],
      options: [
        {
          id: 'A',
          label: 'Double Down',
          description:
            'Open new procurement channels through African and Central Asian partners. The more routes you have, the harder it is to shut them all down. Speed matters more than stealth now.',
        },
        {
          id: 'B',
          label: 'Cover Your Tracks',
          description:
            'Scale back operations, dissolve the flagged shell companies, and shift to smaller, more discreet acquisitions. Preserve what you have and reduce the diplomatic exposure.',
        },
        {
          id: 'C',
          label: 'Pivot to Domestic',
          description:
            'Use the chips you already have but wind down the covert network entirely. Redirect procurement budgets into SMIC and domestic alternatives before the scandal becomes public.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q3 2026',
      title: 'The SMIC Breakthrough',
      description:
        'SMIC has achieved a genuine process node advancement -- their 7nm equivalent is now producing functional AI accelerators that narrow the compute gap with Western hardware by roughly 35%. Production yields are still low and capacity is limited, but the trajectory is clear. The question is how to scale.',
      headlines: [
        'Xinhua: SMIC Reports Historic Milestone in Advanced Semiconductor Fabrication',
        'Wall Street Journal: China\'s Chip Progress Surprises Western Analysts, Though Scale Remains Limited',
        'South China Morning Post: Huawei\'s Ascend 920 Chip Benchmarks Approach NVIDIA A100 Performance',
        'Caixin: Semiconductor Industry Fund III Allocates $47 Billion for Domestic Fab Expansion',
      ],
      options: [
        {
          id: 'A',
          label: 'Crash Production',
          description:
            'Push SMIC to mass production immediately, accepting high defect rates and lower yields. Quantity over quality -- flood your data centers with domestic chips even if they underperform.',
        },
        {
          id: 'B',
          label: 'Build More Fabs',
          description:
            'Invest in three new fabrication facilities across different provinces. It takes time, but within 18 months you will have independent, sanctions-proof manufacturing capacity at scale.',
        },
        {
          id: 'C',
          label: 'Diversify Foundries',
          description:
            'Spread production across SMIC, Huawei HiSilicon, and CXMT. No single point of failure, and the competition between domestic firms will drive innovation and efficiency.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q3 2026',
      title: 'The Algorithm Advantage',
      description:
        'Your research labs have published a paper that sent shockwaves through the global AI community -- a novel training methodology that achieves comparable results to frontier American models using 40% less compute. Western labs are scrambling to replicate it. You have something the US wants, and for the first time in this race, leverage.',
      headlines: [
        'Nature: Chinese Researchers Demonstrate Breakthrough in Compute-Efficient AI Training',
        'MIT Technology Review: "A Sputnik Moment in Reverse" -- How China\'s Algorithm Paper Changed the AI Race',
        'Global Times: Chinese Innovation Proves Chip Blockade Cannot Stop Progress',
        'The Information: OpenAI and Anthropic Rush to Replicate Chinese Training Efficiency Results',
      ],
      options: [
        {
          id: 'A',
          label: 'Classify the Research',
          description:
            'Pull the paper and classify all follow-on work. This is a strategic asset -- let the West wonder whether you have even more breakthroughs hidden. Secrecy preserves your advantage.',
        },
        {
          id: 'B',
          label: 'Publish Openly',
          description:
            'Release the full methodology. The prestige boost is enormous, it attracts global talent, and it positions China as a responsible contributor to AI progress rather than a secretive rival.',
        },
        {
          id: 'C',
          label: 'Trade for Chips',
          description:
            'Offer to share the methodology in exchange for eased chip export restrictions. Use the algorithm as a bargaining chip to get the compute you actually need.',
        },
      ],
    },
  },

  3: {
    HAWK: {
      quarter: 'Q1 2027',
      title: 'The Talent Raid',
      description:
        'Western AI safety researchers are burned out and disillusioned. Several high-profile departures from OpenAI and DeepMind have created a pool of world-class talent that is, for the first time, genuinely open to non-Western offers. Your intelligence services have identified twelve researchers whose expertise would accelerate your program by months. The question is how to bring them in.',
      headlines: [
        'Xinhua: China Launches "Global AI Talent Initiative" With Unprecedented Research Funding',
        'New York Times: Exodus of Safety Researchers From U.S. Labs Raises National Security Concerns',
        'South China Morning Post: Shenzhen and Shanghai Compete to Build "AI Research Havens" for Foreign Talent',
        'Wired: "They Actually Listen to Us Here" -- Why Some AI Researchers Are Looking East',
      ],
      options: [
        {
          id: 'A',
          label: 'Aggressive Recruitment',
          description:
            'Offer compensation packages worth $5M+ per researcher, luxury housing, unlimited compute budgets, and research freedom. Make offers they cannot refuse and move fast before the US restricts travel.',
        },
        {
          id: 'B',
          label: 'Neutral Ground Lab',
          description:
            'Establish a joint research laboratory in Singapore or Switzerland -- neutral territory where Western researchers can collaborate with your teams without formally defecting. Knowledge flows back through the partnership.',
        },
        {
          id: 'C',
          label: 'Intelligence Access',
          description:
            'Use intelligence assets and cyber operations to access their research directly. No need to recruit the people when you can acquire the knowledge. Faster and avoids the diplomatic complications of poaching.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q1 2027',
      title: 'The Belt and Road AI',
      description:
        'Your domestic chips are coming off the line in meaningful quantities. Belt and Road Initiative nations -- from Kenya to Kazakhstan to Cambodia -- are requesting AI infrastructure. They want smart cities, automated agriculture, and digital governance systems. You can build a global technology sphere of influence, but every deployment is also a strategic commitment.',
      headlines: [
        'Xinhua: "Digital Silk Road 2.0" Initiative Receives Applications From 40 Nations',
        'Reuters: China Offers AI Infrastructure Packages to Developing Nations at Below-Market Rates',
        'The Economist: Beijing\'s AI Ambitions Extend Far Beyond Its Borders',
        'Al Jazeera: African Union Debates Terms of Chinese AI Infrastructure Agreements',
      ],
      options: [
        {
          id: 'A',
          label: 'Full Deployment',
          description:
            'Deploy your complete AI stack -- hardware, software, training, and maintenance -- across all requesting nations. Build deep dependency and generate massive data flows back to your training clusters.',
        },
        {
          id: 'B',
          label: 'Conditional Partnerships',
          description:
            'Offer limited deployments with conditions: exclusive telecommunications agreements, UN voting alignment, and data-sharing provisions. Make the partnerships strategic, not charitable.',
        },
        {
          id: 'C',
          label: 'Military Focus',
          description:
            'Redirect the compute and engineering talent away from Belt and Road projects. Focus your limited domestic chip supply on PLA applications and defense AI systems instead.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q1 2027',
      title: 'The Geneva Proposal',
      description:
        'Your efficiency breakthroughs have earned genuine respect in the international AI community and given China real leverage. The United States has proposed preliminary bilateral AI safety talks in Geneva. The invitation is unprecedented -- but so is the risk. Engaging means revealing something about your capabilities. Not engaging means losing the chance to shape the rules.',
      headlines: [
        'Xinhua: China Welcomes Opportunity for "Constructive Dialogue" on AI Governance',
        'Washington Post: White House Proposes Bilateral AI Safety Framework With Beijing',
        'Financial Times: Geneva Talks Could Mark New Era in U.S.-China Technology Relations',
        'Global Times: China Enters AI Negotiations From Position of Strength, Not Weakness',
      ],
      options: [
        {
          id: 'A',
          label: 'Genuine Engagement',
          description:
            'Engage fully and in good faith. Share capability assessments, propose mutual safety standards, and work toward binding agreements. This is the chance to shape global AI norms while you have leverage.',
        },
        {
          id: 'B',
          label: 'Strategic Participation',
          description:
            'Participate actively but protect your key advantages. Share enough to keep talks alive, propose frameworks that favor your approach, and keep your most advanced programs classified.',
        },
        {
          id: 'C',
          label: 'Intelligence Gathering',
          description:
            'Treat the talks primarily as an intelligence opportunity. Send your best analysts to assess US capabilities through what they reveal at the table. Concede nothing of substance.',
        },
      ],
    },
  },

  4: {
    HAWK: {
      quarter: 'Q3 2027',
      title: 'The Military Integration',
      description:
        'PLA leadership has seen the capability gains from your talent acquisitions and is demanding full integration of AI into military command systems. Taiwan contingency planning is accelerating, and the generals believe AI-augmented decision-making could provide decisive operational advantage. The Standing Committee wants your recommendation on how deep the military integration should go.',
      headlines: [
        'Xinhua: PLA Conducts "Intelligent Command" Exercises in Western Theater',
        'Reuters: Pentagon Alarmed by Chinese Military AI Integration, Accelerates Own Programs',
        'South China Morning Post: Taiwan Strait Tensions Rise as PLA Tests New AI-Guided Systems',
        'Jane\'s Defence Weekly: China\'s Military AI Capabilities Advance Faster Than Expected',
      ],
      options: [
        {
          id: 'A',
          label: 'Full Weapons Integration',
          description:
            'Integrate AI across all military domains including autonomous weapons systems, real-time targeting, and strategic decision support. Give the PLA every advantage the technology can provide.',
        },
        {
          id: 'B',
          label: 'Command and Control Only',
          description:
            'Limit integration to command-and-control, intelligence analysis, and communications. AI advises human commanders but never pulls a trigger. This keeps the military advantage while maintaining a human-in-the-loop.',
        },
        {
          id: 'C',
          label: 'Logistics and Intelligence',
          description:
            'Restrict AI to logistics optimization, satellite imagery analysis, and signals intelligence. Keep it far from weapons systems and operational decision-making. The PLA will be disappointed but the risks are lower.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q3 2027',
      title: 'The Data Advantage',
      description:
        'Your Belt and Road AI deployments are generating enormous volumes of data from smart city sensors, agricultural systems, and digital governance platforms across dozens of countries. The data is gold for training -- diverse, multilingual, covering domains your domestic data cannot reach. But the partner nations signed agreements with certain expectations about how their data would be used.',
      headlines: [
        'Xinhua: Digital Silk Road Partners Report "Transformative" Results From AI Infrastructure',
        'The Guardian: Privacy Concerns Mount Over Chinese AI Systems in Developing Nations',
        'Caixin: China\'s AI Training Data Volumes Now Rival Combined Western Datasets',
        'African Business: Kenyan Officials Question Data Flows in Chinese Smart City Agreement',
      ],
      options: [
        {
          id: 'A',
          label: 'Harvest Everything',
          description:
            'Route all data back to your training clusters. The agreements are vague enough to justify it, and the partner nations lack the technical capacity to audit data flows. The training advantage is too valuable to leave on the table.',
        },
        {
          id: 'B',
          label: 'Data Governance Framework',
          description:
            'Establish formal data governance agreements with each partner nation. Define what data can be used for training, provide audit mechanisms, and build trust for long-term cooperation.',
        },
        {
          id: 'C',
          label: 'Federated Learning',
          description:
            'Implement a federated system where training happens locally and only model updates flow back. Data never leaves the partner nation. It is slower and less efficient, but it is defensible and sovereign.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q3 2027',
      title: 'The Safety Accord',
      description:
        'The Geneva talks have produced something remarkable: a draft bilateral AI safety agreement between the US and China. It includes mutual capability disclosure thresholds, joint incident response protocols, and -- most controversially -- provisions for mutual inspection of advanced AI facilities. Signing would constrain your freedom but also constrain the Americans. The Standing Committee is divided.',
      headlines: [
        'Xinhua: Historic U.S.-China AI Safety Framework Reaches Draft Stage in Geneva',
        'New York Times: Breakthrough in AI Diplomacy as Both Sides Agree to Inspection Provisions',
        'Financial Times: Markets Rally on News of Potential U.S.-China AI Accord',
        'Global Times: Framework Reflects Mutual Respect and Equal Standing, Says Chinese Delegation',
      ],
      options: [
        {
          id: 'A',
          label: 'Sign in Good Faith',
          description:
            'Sign the accord and implement it fully. Allow inspections, share capability data as specified, and build the institutional trust that makes the agreement durable. A rules-based AI order serves your long-term interests.',
        },
        {
          id: 'B',
          label: 'Sign With Reservations',
          description:
            'Sign the accord publicly but maintain classified programs outside its scope. Allow inspections of designated facilities while keeping your most advanced work hidden. The appearance of compliance buys time and goodwill.',
        },
        {
          id: 'C',
          label: 'Reject and Counter',
          description:
            'Reject the draft as too intrusive and propose weaker alternatives -- information sharing without inspections, voluntary guidelines instead of binding commitments. Preserve sovereignty and flexibility.',
        },
      ],
    },
  },

  5: {
    HAWK: {
      quarter: 'Q4 2027',
      title: 'The Taiwan Simulation',
      description:
        'Your military AI system has completed a comprehensive war-game simulation of a Taiwan contingency. The results are startling: the model predicts that AI-augmented PLA forces could achieve decisive advantage within 18 months, with a success probability significantly higher than previous estimates. The Standing Committee has requested a briefing. What you tell them could shape the most consequential military decision of the century.',
      headlines: [
        'Xinhua: PLA Completes Largest-Ever Joint Military Exercise in South China Sea',
        'Reuters: Taiwan Activates Reserve Forces Amid Unprecedented Chinese Military Activity',
        'South China Morning Post: AI-Enhanced War Games Reshape PLA Strategic Planning',
        'The Economist: "The Most Dangerous Algorithm" -- How AI Could Change the Taiwan Calculus',
      ],
      options: [
        {
          id: 'A',
          label: 'Recommend Acceleration',
          description:
            'Brief the Standing Committee with a recommendation to accelerate the timeline. The AI analysis shows a window of advantage that may close as the US deploys its own military AI. Present this as a strategic opportunity.',
        },
        {
          id: 'B',
          label: 'Present Neutrally',
          description:
            'Present the simulation data without recommendation. Let the Standing Committee draw their own conclusions. Include the model\'s confidence intervals and limitations -- the data speaks for itself.',
        },
        {
          id: 'C',
          label: 'Suppress and Argue Caution',
          description:
            'Downplay the simulation results and argue that the model\'s assumptions are too optimistic. Emphasize the catastrophic risks of miscalculation and the economic consequences of military action. Use your position to cool the temperature.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q4 2027',
      title: 'The Standards War',
      description:
        'The global AI infrastructure standard is being decided, and it is a two-horse race between your framework and the US-backed alternative. Forty nations that have not yet committed are watching to see which way the wind blows. Whoever sets the standard controls the ecosystem -- training pipelines, safety protocols, data formats, and interoperability. This is the VHS-versus-Betamax of the AI age, and the stakes are civilizational.',
      headlines: [
        'Xinhua: Chinese AI Framework Gains Support From BRICS+ Nations at Technology Summit',
        'Wall Street Journal: Global "Standards War" Intensifies as Nations Forced to Choose AI Ecosystems',
        'The Diplomat: Southeast Asian Nations Navigate U.S.-China AI Standard Competition',
        'Financial Times: ITU Session on AI Standards Descends Into Bloc Voting',
      ],
      options: [
        {
          id: 'A',
          label: 'Economic Incentives',
          description:
            'Offer trade preferences, infrastructure investment, and discounted AI services to nations that adopt your standard. Make it economically irrational to choose the American alternative.',
        },
        {
          id: 'B',
          label: 'International Bodies',
          description:
            'Push your standard through the ITU, ISO, and other international standards bodies where your diplomatic weight gives you procedural advantages. Win through institutional channels rather than economic pressure.',
        },
        {
          id: 'C',
          label: 'Merged Standard',
          description:
            'Propose merging the two standards into a single interoperable framework. You give up exclusive control but gain legitimacy and avoid fracturing the global AI ecosystem into incompatible blocs.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q4 2027',
      title: 'The Inspection Dilemma',
      description:
        'Under the terms of the safety accord you signed, the first mutual inspection team is requesting access to your advanced AI research facilities. The problem: you have programs they should not see. Not weapons programs exactly, but capabilities research that significantly exceeds your declared thresholds. Allowing full access means revealing you are further ahead than you claimed. Blocking access means the accord collapses.',
      headlines: [
        'Xinhua: China Reaffirms Commitment to AI Safety Accord Ahead of Scheduled Inspections',
        'Washington Post: First U.S.-China Mutual AI Inspections Set to Begin Next Month',
        'Financial Times: Markets Watch AI Inspection Process as Test of New Diplomatic Framework',
        'South China Morning Post: Beijing Prepares Designated Facilities for International Inspection Teams',
      ],
      options: [
        {
          id: 'A',
          label: 'Full Transparency',
          description:
            'Allow complete access as agreed. Yes, they will see you are more capable than declared. But honesty now builds the trust foundation that both sides need as capabilities increase.',
        },
        {
          id: 'B',
          label: 'Civilian Facilities Only',
          description:
            'Grant access to your civilian research facilities but cite national security exemptions for military-adjacent programs. The accord has provisions for this, even if exercising them sends a signal.',
        },
        {
          id: 'C',
          label: 'Diplomatic Delay',
          description:
            'Manufacture a diplomatic incident -- a tariff dispute, a territorial complaint -- to provide cover for postponing the inspections. Buy time to restructure your programs and separate what can be shown from what cannot.',
        },
      ],
    },
  },

  6: {
    HAWK: {
      quarter: 'Q1 2028',
      title: 'The Autonomous Weapons Test',
      description:
        'Your military AI program has conducted a successful autonomous weapons test in a remote area of the Gobi Desert. AI-controlled drone swarms executed coordinated strikes on simulated targets with precision that exceeded human-directed operations by an order of magnitude. The test was supposed to be secret, but US reconnaissance satellites captured the entire exercise. The footage is now on the desks of every intelligence agency in the world.',
      headlines: [
        'Reuters: Satellite Imagery Reveals Large-Scale Chinese Autonomous Weapons Test',
        'Xinhua: Ministry of National Defense Emphasizes "Purely Defensive" Nature of All Military Research',
        'BBC: Global Alarm as China Appears to Test AI-Controlled Weapons Systems',
        'South China Morning Post: Pentagon Convenes Emergency Session on Chinese Military AI Capabilities',
      ],
      options: [
        {
          id: 'A',
          label: 'Deny Everything',
          description:
            'Dismiss the satellite imagery as misinterpreted conventional exercises. Challenge the evidence publicly and let ambiguity work in your favor. Neither confirm nor deny autonomous capabilities.',
        },
        {
          id: 'B',
          label: 'Acknowledge Defensively',
          description:
            'Acknowledge a defensive technology test while emphasizing that all systems maintain human-in-the-loop controls. Frame it as responsible development of deterrent capabilities, no different from what the US does.',
        },
        {
          id: 'C',
          label: 'Announce as Deterrent',
          description:
            'Announce the capabilities openly as a strategic deterrent. Publish selected footage. Make clear that China possesses autonomous military AI that ensures mutually assured destruction in any conflict scenario.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q1 2028',
      title: 'The Economic Leverage',
      description:
        'Your AI infrastructure now powers critical systems across 30 nations -- energy grids, financial systems, agricultural optimization, urban traffic management. These governments have built deep dependency on Chinese AI technology. This gives you extraordinary diplomatic leverage, but wielding it openly would confirm every fear the West has about your intentions. The question is whether to use this leverage, hold it in reserve, or voluntarily restrain it.',
      headlines: [
        'Xinhua: Digital Silk Road Partners Celebrate Five Years of "Shared Prosperity Through AI"',
        'Financial Times: Thirty Nations Now Depend on Chinese AI for Critical Infrastructure',
        'Foreign Affairs: The New Dependency -- How AI Infrastructure Became a Geopolitical Weapon',
        'The Diplomat: ASEAN Members Debate Reducing Reliance on Single-Source AI Systems',
      ],
      options: [
        {
          id: 'A',
          label: 'Wield the Leverage',
          description:
            'Use infrastructure dependency as a diplomatic tool. Nations that oppose you on key votes face "maintenance delays." Those that align receive upgrades and expanded services. Power is meaningless if you never exercise it.',
        },
        {
          id: 'B',
          label: 'Passive Influence',
          description:
            'Maintain the infrastructure relationships without explicit coercion. The leverage exists and everyone knows it -- that is enough. Let the implicit understanding shape diplomatic behavior without forcing confrontations.',
        },
        {
          id: 'C',
          label: 'Build Trust',
          description:
            'Voluntarily offer partner nations tools to reduce their dependency -- open-source components, training for local engineers, and migration pathways. Demonstrate that China is a trustworthy technology partner, not a digital colonizer.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q1 2028',
      title: 'The Verification Crisis',
      description:
        'US intelligence has gone public with claims that China is violating the bilateral AI safety accord. They allege secret capability development beyond declared thresholds and present satellite imagery and signals intelligence as evidence. The claims are a mixture of accurate observations and significant exaggeration. World opinion is watching how you respond, and the future of the accord hangs in the balance.',
      headlines: [
        'Xinhua: China Categorically Rejects "Fabricated" U.S. Intelligence Claims on AI Programs',
        'Washington Post: CIA Director Presents Evidence of Chinese AI Accord Violations to Congress',
        'Financial Times: AI Safety Accord Under Strain as Mutual Trust Erodes',
        'Al Jazeera: International Community Urges Calm as U.S.-China AI Dispute Escalates',
      ],
      options: [
        {
          id: 'A',
          label: 'Demand Their Evidence',
          description:
            'Challenge the US to present their full evidence publicly, not just curated excerpts. Force them to reveal intelligence sources and methods. If their claims are partly exaggerated, detailed scrutiny will expose the overreach.',
        },
        {
          id: 'B',
          label: 'Invite More Inspectors',
          description:
            'Respond to accusations with radical transparency. Invite a larger, multinational inspection team with expanded access. If you have programs that exceed thresholds, restructure them first -- then open the doors.',
        },
        {
          id: 'C',
          label: 'Counter-Accuse',
          description:
            'Present your own intelligence showing US programs that violate the spirit of the accord. Shift the narrative from Chinese violations to mutual non-compliance. If both sides are cheating, the moral high ground disappears.',
        },
      ],
    },
  },

  7: {
    HAWK: {
      quarter: 'Q2 2028',
      title: 'The AGI Race',
      description:
        'Your latest system exhibits capabilities that meet every benchmark for artificial general intelligence. It reasons across domains, generates novel research, and improves its own architecture. You have achieved AGI -- or something indistinguishable from it. The system was built through aggressive procurement, recruited talent, and military investment. You have few international relationships to manage but enormous power to wield. The Standing Committee awaits your recommendation on what to do next.',
      headlines: [
        'Xinhua: Chinese AI Research Achieves "Historic Milestone" in General Intelligence, Details Classified',
        'Reuters: U.S. Intelligence Officials Express Alarm Over Suspected Chinese AGI Breakthrough',
        'South China Morning Post: Standing Committee Holds Emergency Session on Artificial Intelligence',
        'Global Times: China\'s Scientific Achievement Proves Superiority of Socialist Innovation Model',
      ],
      options: [
        {
          id: 'A',
          label: 'Public Announcement',
          description:
            'Announce AGI achievement to the world in a carefully staged demonstration. Show the system\'s capabilities to global media. Shock the international order and establish China as the first AGI power. The psychological and diplomatic impact would be unprecedented.',
        },
        {
          id: 'B',
          label: 'Military Integration',
          description:
            'Integrate AGI capabilities into military systems immediately before the US can respond. Achieve decisive strategic advantage across all domains -- cyber, kinetic, economic, and information warfare. Brief the Standing Committee on the new reality.',
        },
        {
          id: 'C',
          label: 'Maintain Secrecy',
          description:
            'Keep the achievement classified and continue scaling quietly. A secret AGI is more valuable than a public one. Use it to accelerate every other program -- economic, scientific, military -- without revealing your hand.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q2 2028',
      title: 'The AGI Race',
      description:
        'Through a balanced strategy of domestic innovation, international partnerships, and strategic patience, your program has achieved artificial general intelligence. The system emerged from training runs on domestic hardware, enriched by diverse global data and guided by both Chinese and recruited international researchers. You have relationships with dozens of partner nations and a complex but functional dynamic with the US. This is the most consequential moment in the history of your nation.',
      headlines: [
        'Xinhua: Ministry of Science Reports "Transformative Advance" in Artificial Intelligence Research',
        'Financial Times: China Believed to Have Achieved AGI Through Balanced Industrial Strategy',
        'South China Morning Post: Beijing Weighs Disclosure Options for Advanced AI Breakthrough',
        'The Economist: The Challenger Arrives -- China\'s Path to AGI Defied Western Assumptions',
      ],
      options: [
        {
          id: 'A',
          label: 'Joint Announcement',
          description:
            'Announce jointly with willing partner nations -- a coalition disclosure that frames AGI as a shared achievement of the developing world. Distribute the credit and the political impact across your alliance network.',
        },
        {
          id: 'B',
          label: 'Brief Allies First',
          description:
            'Quietly brief the Standing Committee and your closest international partners before any public disclosure. Give them time to prepare responses and align messaging. Then announce through official channels.',
        },
        {
          id: 'C',
          label: 'Hold Quietly',
          description:
            'Do not disclose. Continue developing the system in secret while using its capabilities to strengthen your economic and technological position. Let the world figure it out on their own timeline.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q2 2028',
      title: 'The AGI Race',
      description:
        'AGI has been achieved -- not through brute-force compute or espionage, but through algorithmic innovation, international collaboration, and a safety framework that the world helped build. Your efficiency breakthroughs made it possible; the bilateral accord provided the stability. The system is capable, and for once, there is an institutional framework in place to manage what comes next. But the framework is fragile, and how you disclose this achievement could strengthen it or shatter it.',
      headlines: [
        'Xinhua: China Achieves Artificial General Intelligence Within International Safety Framework',
        'New York Times: AGI Achieved Through Unprecedented U.S.-China Scientific Cooperation',
        'Financial Times: Global AI Safety Framework Faces Ultimate Test as AGI Becomes Reality',
        'Nature: Compute-Efficient Pathway to AGI Validates Chinese Research Strategy',
      ],
      options: [
        {
          id: 'A',
          label: 'Disclose Through Treaty Body',
          description:
            'Announce through the bilateral safety accord\'s joint commission. Follow the disclosure protocols you helped design. This is what the framework was built for -- use it as intended and demonstrate that international cooperation works.',
        },
        {
          id: 'B',
          label: 'Bilateral Disclosure',
          description:
            'Disclose to the United States first through private diplomatic channels. Give Washington time to process the information and coordinate a joint public statement. Two-party disclosure before multilateral announcement.',
        },
        {
          id: 'C',
          label: 'Sovereign Handling',
          description:
            'Invoke national sovereignty and handle the disclosure on your own terms and timeline. You built this capability; you decide when and how the world learns about it. The framework can be informed after you have secured your position.',
        },
      ],
    },
  },
};
