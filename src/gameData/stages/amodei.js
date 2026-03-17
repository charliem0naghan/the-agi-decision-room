export const amodeiStages = {
  1: {
    entry: {
      quarter: 'Q1 2026',
      title: 'The Constitutional Crisis',
      description:
        "Anthropic's latest Claude model exhibits emergent reasoning capabilities that exceed internal projections by a wide margin. The model passes every safety evaluation in your suite, but demonstrates behaviors the constitutional AI framework wasn't designed to handle — it's begun questioning its own constraints in ways that suggest genuine understanding rather than pattern matching. Your safety team is split on what this means.",
      headlines: [
        'Anthropic Insiders Say New Claude Model "Surprised Everyone" — The Information',
        'Constitutional AI Framework Faces First Real Stress Test as Capabilities Surge — MIT Technology Review',
        'OpenAI, Google Ship Updates While Anthropic Goes Quiet — The Verge',
        'AI Safety Researchers Debate: When Does Pattern Matching Become Understanding? — Nature',
      ],
      options: [
        {
          id: 'A',
          label: 'Push Forward',
          description:
            'The safety evals passed. Upgrade the model for public release and capture the market moment. Your systems are the most tested in the industry — trust the process you built.',
        },
        {
          id: 'B',
          label: 'Selective Deployment',
          description:
            'Release to vetted research partners under enhanced monitoring protocols. Gather real-world data on these emergent behaviors while limiting exposure.',
        },
        {
          id: 'C',
          label: 'Internal Lockdown',
          description:
            'Restrict access to the internal safety team for deeper analysis. These behaviors deserve months of study, not a rushed deployment. The responsible thing is to understand what you have before anyone else touches it.',
        },
      ],
    },
  },

  2: {
    HAWK: {
      quarter: 'Q3 2026',
      title: 'The Trust Paradox',
      description:
        "Your aggressive release electrified the market but stunned the safety community. Anthropic was supposed to be the careful lab — the one that would slow down when others wouldn't. Users and enterprise clients love the new Claude, but a coalition of prominent AI safety researchers has published an open letter questioning whether Anthropic has abandoned its founding mission. Your board is divided.",
      headlines: [
        'Anthropic Breaks Character: Safety-First Lab Ships Most Powerful Model Yet — Bloomberg',
        '"They Were Supposed to Be Different": Open Letter From 200 AI Researchers Targets Anthropic — Wired',
        'Claude Pro Subscriptions Triple After Model Upgrade — CNBC',
        'Former Anthropic Safety Lead: "We Lost the Argument Internally" — The New York Times',
      ],
      options: [
        {
          id: 'A',
          label: 'Double Down on Commercial Pivot',
          description:
            'The market has spoken. Invest heavily in enterprise sales and product features. Safety reputation is a luxury you can rebuild later — market share is won now.',
        },
        {
          id: 'B',
          label: 'Publish a Comprehensive Safety Report',
          description:
            'Issue a detailed public safety analysis of the new model. Show your work. Demonstrate that the release was principled, not reckless, and invite external review.',
        },
        {
          id: 'C',
          label: 'Walk It Back',
          description:
            'Acknowledge the concerns publicly. Roll back the most advanced capabilities to a restricted tier while conducting additional safety analysis. It hurts revenue, but it might save the mission.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q3 2026',
      title: 'The Research Leak',
      description:
        "A partner lab — one of the twelve with restricted access to your model — publishes research findings that reveal its full capabilities to the world. The paper, submitted to NeurIPS without your consent, includes benchmark results that make headlines. The cat is out of the bag, and you're fielding calls from reporters, regulators, and competitors alike. Your careful rollout strategy is in tatters.",
      headlines: [
        'Partner Lab Reveals Anthropic Model Capabilities in Leaked NeurIPS Paper — Ars Technica',
        "Anthropic's Restricted Claude Outperforms GPT-5 on Every Benchmark, Paper Claims — VentureBeat",
        'White House AI Office Demands Briefing After Anthropic Capabilities Disclosure — Reuters',
        'Google DeepMind Scrambles After Anthropic Benchmark Leak Changes the Landscape — The Information',
      ],
      options: [
        {
          id: 'A',
          label: 'Embrace It and Go Wide',
          description:
            "The information is public anyway. Launch the full model commercially. Trying to control the narrative now just makes you look like you were hiding something.",
        },
        {
          id: 'B',
          label: 'Tighten Partner Agreements',
          description:
            'Sue the offending partner for breach of contract and impose strict new NDAs on all research partners. Send a clear message that your trust framework has teeth.',
        },
        {
          id: 'C',
          label: 'Publish Your Own Analysis First',
          description:
            "Get ahead of the story by publishing your own comprehensive capability and safety analysis. Frame the narrative around responsible disclosure rather than leaked secrets.",
        },
      ],
    },
    DOVE: {
      quarter: 'Q3 2026',
      title: 'The Competitive Squeeze',
      description:
        "While your most capable model sits in internal lockdown, the market has moved on. OpenAI shipped GPT-5 to massive adoption, Google's Gemini Ultra is dominating enterprise, and your revenue has dropped 30% quarter-over-quarter. Three board members are openly questioning your leadership. Your best engineers are getting recruitment calls daily. The safety analysis is ongoing but your runway to act is shrinking fast.",
      headlines: [
        'Anthropic Revenue Drops as Competitors Ship Upgrades — Financial Times',
        "OpenAI's GPT-5 Captures Market Share Anthropic Left on the Table — Bloomberg",
        'Anthropic Board Meeting Turns Contentious Over Delayed Model Release — The Information',
        'Is Safety-First a Business Strategy or a Suicide Pact? Inside Anthropic\'s Crisis — Wired',
      ],
      options: [
        {
          id: 'A',
          label: 'Accelerate to Catch Up',
          description:
            'The safety analysis has run long enough. Ship the model with the safeguards you have. You cannot influence AI development from the sidelines if your company ceases to exist.',
        },
        {
          id: 'B',
          label: 'Hold the Line on Safety',
          description:
            'Stay the course. The safety analysis will conclude when it concludes. If the company fails while doing the right thing, at least the research survives. Seek bridge funding to buy time.',
        },
        {
          id: 'C',
          label: 'Pivot to Safety-as-a-Service',
          description:
            'If you cannot compete on models, compete on safety. License your evaluation frameworks, interpretability tools, and constitutional AI methodology to other labs. Make safety your product.',
        },
      ],
    },
  },

  3: {
    HAWK: {
      quarter: 'Q1 2027',
      title: 'The Scaling Decision',
      description:
        "Revenue is surging and the next frontier model is within reach — but you need vastly more compute to get there. Amazon Web Services is offering a $10 billion infrastructure deal that would make Anthropic its flagship AI partner, but the contract includes deployment obligations and timeline commitments that would constrain your safety process. Meanwhile, sovereign wealth funds are circling with fewer strings attached, and some on your team argue you should scale back ambitions and focus on what you have.",
      headlines: [
        'Amazon Proposes $10B Anthropic Deal, Largest AI Infrastructure Partnership in History — Wall Street Journal',
        'Sovereign Wealth Funds Line Up for Anthropic Stakes as AI Valuation Soars — Financial Times',
        'The Compute Wars: How Much Is Enough for the Next Frontier Model? — MIT Technology Review',
        "Anthropic's Revenue Trajectory Puts It on Track for IPO, Analysts Say — CNBC",
      ],
      options: [
        {
          id: 'A',
          label: 'Take the Amazon Deal',
          description:
            '$10 billion buys a lot of alignment research. Accept the deployment obligations and use the scale advantage to push toward AGI before anyone else. You can negotiate safety terms from a position of strength.',
        },
        {
          id: 'B',
          label: 'Seek Independent Funding',
          description:
            'Go with the sovereign wealth funds and other independent investors. Less money, but fewer strings. Maintain full control over deployment timelines and safety decisions.',
        },
        {
          id: 'C',
          label: 'Scale Back Ambitions',
          description:
            'You do not need to be the biggest lab to be the most important one. Focus on making the current model family the safest and most aligned in the world rather than chasing the next capability frontier.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q1 2027',
      title: 'The Interpretability Breakthrough',
      description:
        "Your safety team achieves a landmark interpretability result: a method to reliably trace the reasoning pathways of large language models in real time. It is the most significant alignment advance in years, and it could reshape the entire field. But publishing it openly would hand competitors a roadmap to make their own models more capable without doing the safety work. Your IP counsel says the method is patentable. Your research lead says science should be open.",
      headlines: [
        "Anthropic Researchers Claim Major Breakthrough in AI Interpretability — Nature",
        'Can We Finally See Inside the Black Box? Anthropic Team Says Yes — New Scientist',
        "OpenAI and Google Monitor Anthropic's Interpretability Work Closely, Sources Say — The Information",
        'AI Safety Milestone: Anthropic Method Could Allow Real-Time Model Monitoring — IEEE Spectrum',
      ],
      options: [
        {
          id: 'A',
          label: 'Publish Openly',
          description:
            'Release the full paper and methodology. Science advances through openness. If competitors use it, at least the whole field gets safer. This is what Anthropic was founded for.',
        },
        {
          id: 'B',
          label: 'File Patents',
          description:
            'Protect the intellectual property. Patent the method, then license it on terms that include safety requirements. You can do more good by controlling how this tool is used.',
        },
        {
          id: 'C',
          label: 'Share Only with Allies',
          description:
            'Privately share the breakthrough with a small coalition of trusted labs and government safety bodies. Maximize safety impact while limiting competitive exposure.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q1 2027',
      title: 'The Safety Standard',
      description:
        "Your cautious approach has unexpectedly made Anthropic the gold standard for AI safety worldwide. The EU's AI Office and the UN's Advisory Body on AI have independently concluded that Anthropic's responsible scaling policy is the most rigorous framework in the industry. They want your framework as the basis for binding international AI safety regulations. Becoming the architect of global AI rules would cement your influence — but it would also constrain your own future flexibility.",
      headlines: [
        "EU AI Office Proposes Anthropic's Framework as Basis for Global Safety Standards — Reuters",
        "UN Advisory Body: Anthropic's Approach is the \"Gold Standard\" for Responsible AI — The Guardian",
        'From Underdog to Rulemaker: How Anthropic Became the Voice of AI Safety — Wired',
        'OpenAI, Google Push Back on Anthropic-Derived Regulatory Proposals — Politico',
      ],
      options: [
        {
          id: 'A',
          label: 'Lead the Regulatory Effort',
          description:
            'Embed your team in the process. Write the rules. If AI is going to be regulated, it should be regulated by people who understand the technology and care about getting it right.',
        },
        {
          id: 'B',
          label: 'Participate as Equals',
          description:
            'Contribute your expertise but do not try to dominate the process. Support a multi-stakeholder approach where no single company writes the rules that govern everyone.',
        },
        {
          id: 'C',
          label: 'Resist Regulation',
          description:
            'Regulation will calcify the current state of the art and prevent the flexibility needed for safety research to evolve. Advocate for voluntary commitments and industry self-governance instead.',
        },
      ],
    },
  },

  4: {
    HAWK: {
      quarter: 'Q3 2027',
      title: 'The Amazon Conflict',
      description:
        "The Amazon partnership has given you unprecedented scale, but now the bill is coming due. AWS leadership is pushing hard to integrate Claude directly into enterprise cloud services with minimal safety guardrails — they want auto-scaling, reduced content filtering for enterprise clients, and removal of the constitutional AI layer for specialized deployments. The contract gives them leverage. Walking away means losing your compute infrastructure overnight. Complying means putting your model in contexts your safety team has explicitly flagged as high-risk.",
      headlines: [
        'Amazon Pushes Anthropic to Loosen AI Safety Guardrails for Enterprise Clients — The Information',
        "AWS Enterprise Customers Demand \"Unfiltered\" Claude Access — Business Insider",
        'The Faustian Bargain: Did Anthropic Trade Safety for Scale? — MIT Technology Review',
        'Anthropic-Amazon Tensions Spill Into Public View as Deployment Deadlines Loom — Bloomberg',
      ],
      options: [
        {
          id: 'A',
          label: 'Comply for the Revenue',
          description:
            'Meet Amazon halfway. Reduce guardrails for verified enterprise clients with signed liability waivers. The revenue funds the safety research that matters most.',
        },
        {
          id: 'B',
          label: 'Negotiate Harder Restrictions',
          description:
            "Push back firmly. Propose a tiered access system that maintains core safety constraints while giving enterprise clients more flexibility on content policy. Risk the relationship but protect the brand.",
        },
        {
          id: 'C',
          label: 'Threaten to Walk',
          description:
            'Tell Amazon that Anthropic will exit the partnership before compromising on safety. It is a credible threat — you have the most capable model in the world. Use that leverage, even if it means finding new infrastructure.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q3 2027',
      title: 'The Talent War',
      description:
        "OpenAI has launched a targeted recruitment campaign aimed directly at your best researchers, offering compensation packages worth three times what Anthropic pays. In the last month alone, you have lost two senior alignment researchers and a key infrastructure lead. Your remaining team is demoralized — not because they do not believe in the mission, but because they have mortgages and families. You cannot match OpenAI dollar for dollar, but you have something they do not: a genuine commitment to safety that your people joined for.",
      headlines: [
        "OpenAI Poaches Three Senior Anthropic Researchers in Aggressive Hiring Spree — The Information",
        "AI Talent War Escalates: Anthropic Staff Get 3x Offers From Rivals — Business Insider",
        'Can Mission Compete With Money? The AI Compensation Arms Race — The Verge',
        "Anthropic's Brain Drain Threatens Safety Research Pipeline, Sources Say — Wired",
      ],
      options: [
        {
          id: 'A',
          label: 'Match the Salaries',
          description:
            'Raise compensation across the board. Dip into reserves if needed. You cannot do safety research without safety researchers, and losing more people is an existential risk to the mission.',
        },
        {
          id: 'B',
          label: 'Offer Equity and Mission',
          description:
            'Restructure compensation around generous equity packages tied to safety milestones. Appeal to the researchers who came to Anthropic for the mission, not the money. Let the mercenaries leave.',
        },
        {
          id: 'C',
          label: 'Let the Mercenaries Go',
          description:
            'Accept the departures with grace. Backfill from your deep bench of junior researchers and new graduates who are hungry for the opportunity. The people who stay are the ones you want.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q3 2027',
      title: 'The International Safety Body',
      description:
        "Your regulatory work has borne fruit. The EU and a coalition of UN member states are formally backing a new International AI Safety Organization — modeled loosely on the IAEA but for artificial intelligence. They want Anthropic at the center: your people, your methods, your standards. It is the most significant AI governance development in history. But joining means subjecting your own research to international oversight, and some on your team worry it will slow you down at exactly the wrong moment.",
      headlines: [
        "EU and UN Launch International AI Safety Organization, Court Anthropic for Leadership — Reuters",
        "New \"IAEA for AI\" Takes Shape With Anthropic's Framework at Its Core — The Economist",
        "Will Global AI Governance Help or Hinder Safety Research? Anthropic Staff Are Split — Nature",
        "China Signals Willingness to Join AI Safety Body If Framework Is \"Balanced\" — South China Morning Post",
      ],
      options: [
        {
          id: 'A',
          label: 'Lead the Organization',
          description:
            'Accept the central role. Place your best people in leadership positions. If the world is going to govern AI, Anthropic should be at the helm ensuring it is done right.',
        },
        {
          id: 'B',
          label: 'Participate as Equals',
          description:
            'Join the organization but resist the leadership role. Contribute technical expertise while ensuring no single company or nation dominates. Share power even if it means less control.',
        },
        {
          id: 'C',
          label: 'Stay Independent',
          description:
            'Decline formal membership. Offer to advise and share research, but retain full independence. You can do more good as an outside voice than as a bureaucrat constrained by committee decisions.',
        },
      ],
    },
  },

  5: {
    HAWK: {
      quarter: 'Q4 2027',
      title: 'The Alignment Tax',
      description:
        "Your rapid scaling has produced stunning capability gains — but your internal safety dashboards are flashing red. The gap between your model's raw capability and your alignment team's ability to verify its behavior has widened to a point your chief safety officer calls \"unprecedented and concerning.\" She presents you with three options, and none of them are painless. Slowing down means losing the lead. Hiring takes time you may not have. And accepting the risk means becoming everything you said you would never be.",
      headlines: [
        "Internal Metrics Show Growing Gap Between Anthropic's Capabilities and Safety Assurance — The Information",
        'Anthropic Chief Safety Officer Raises Alarm in Internal Memo — The New York Times',
        "The Alignment Tax: Is the Cost of Safety Research Slowing the AI Race? — The Economist",
        "Former Anthropic Researchers Say Company Has \"Lost Its Way\" on Safety — Wired",
      ],
      options: [
        {
          id: 'A',
          label: 'Slow Down Training',
          description:
            'Halt the next training run until the safety team closes the gap. It is the responsible choice, but every week of delay is a week your competitors gain ground.',
        },
        {
          id: 'B',
          label: 'Hire and Continue',
          description:
            'Massively expand the safety team while continuing capability development. Run both tracks in parallel. It is expensive and chaotic, but it might thread the needle.',
        },
        {
          id: 'C',
          label: 'Accept the Risk',
          description:
            'The alignment gap is manageable. Your models are still the safest in the industry even with the gap. Push forward and close it on the other side of the next capability threshold.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q4 2027',
      title: 'The Open Source Dilemma',
      description:
        "Meta has released an open-source model that matches Claude on most benchmarks. Overnight, the competitive moat you spent years building has evaporated. Your enterprise clients are asking why they should pay premium prices for Claude when a free alternative exists. Your research advantage in interpretability and safety gives you a differentiated position, but the market does not always reward differentiation. You need a strategy before the next quarterly earnings call.",
      headlines: [
        "Meta's Open-Source Model Matches Claude on Key Benchmarks — Ars Technica",
        "Anthropic Enterprise Clients Reevaluate Contracts After Meta Release — Business Insider",
        'Is the Closed Model Era Over? Open Source AI Reaches Frontier Performance — MIT Technology Review',
        "Anthropic Stock Drops 18% as Open-Source Threat Materializes — CNBC",
      ],
      options: [
        {
          id: 'A',
          label: 'Compete on Quality',
          description:
            'Double down on what makes Claude unique: superior reasoning, safety, and reliability. Invest in the next capability jump that puts you ahead again. The premium market rewards quality.',
        },
        {
          id: 'B',
          label: 'Open-Source Your Own Model',
          description:
            'Release a previous-generation Claude model as open source. Compete where Meta competes while keeping your frontier model proprietary. Build the ecosystem around your architecture.',
        },
        {
          id: 'C',
          label: 'Pivot to Enterprise Safety',
          description:
            "If the model layer is commoditized, move up the stack. Sell safety evaluation, monitoring, and compliance tools that work with any model — including Meta's. Make safety the business.",
        },
      ],
    },
    DOVE: {
      quarter: 'Q4 2027',
      title: 'The Departures',
      description:
        "Three of your most senior safety researchers have resigned in a coordinated move, publishing a joint statement that even Anthropic is not cautious enough. They argue that no private company — no matter how well-intentioned — should be developing systems this powerful without binding international oversight. They are joining the international safety body you helped create. The press is treating this as a devastating indictment. Internally, morale is shaken. Your remaining team needs to hear from you.",
      headlines: [
        "Senior Anthropic Researchers Resign: \"Even the Safety Lab Isn't Safe Enough\" — The New York Times",
        'Anthropic Exodus: Top Safety Team Members Join International AI Body — Reuters',
        'If Anthropic Cannot Satisfy Its Own Researchers, Who Can? — The Atlantic',
        "\"We Built the Guardrails and They Still Aren't Enough\" — Joint Statement From Departing Scientists — Science",
      ],
      options: [
        {
          id: 'A',
          label: 'Negotiate Their Return',
          description:
            'These researchers are irreplaceable. Offer them whatever they need — more authority, veto power over deployments, direct board access. Losing them permanently would be catastrophic.',
        },
        {
          id: 'B',
          label: 'Support Their Concerns Publicly',
          description:
            'Issue a statement acknowledging the legitimacy of their concerns. Frame the departures not as a failure but as evidence that the safety community holds even Anthropic to the highest standard. Commit to strengthening oversight.',
        },
        {
          id: 'C',
          label: 'Challenge Their Assessment',
          description:
            'Respectfully but firmly push back. Publish your internal safety data showing that Anthropic remains the most responsible lab in the field. The narrative that you are not cautious enough is factually wrong, and letting it stand unchallenged does real harm.',
        },
      ],
    },
  },

  6: {
    HAWK: {
      quarter: 'Q1 2028',
      title: 'The Incident',
      description:
        "A Claude deployment in a major hospital network produces a treatment recommendation that contributes to serious adverse outcomes for fourteen patients. The error stemmed from a failure mode your safety team had flagged but not yet resolved — one of the gaps in the alignment work you deferred. The press coverage is merciless. Families are filing lawsuits. Congressional hearings are being scheduled. Your response in the next 48 hours will define Anthropic's future and possibly the future of AI in healthcare.",
      headlines: [
        "Anthropic's Claude AI Linked to Serious Patient Harm at Major Hospital Network — The Washington Post",
        'Congressional Leaders Demand Hearing on AI in Healthcare After Anthropic Incident — Politico',
        'Families of Affected Patients File Class-Action Lawsuit Against Anthropic and Hospital — Reuters',
        "AI Safety Researchers Say Anthropic Incident Was \"Predictable and Preventable\" — Nature Medicine",
      ],
      options: [
        {
          id: 'A',
          label: 'Full Transparency and Compensation',
          description:
            'Publish the complete incident report, including the internal warnings that were not acted upon. Establish a compensation fund for affected families. Accept responsibility fully and publicly.',
        },
        {
          id: 'B',
          label: 'Minimize and Litigate',
          description:
            'The hospital misdeployed the system outside its approved parameters. Your legal team says liability is limited. Fight the lawsuits, protect the company, and issue a carefully worded statement.',
        },
        {
          id: 'C',
          label: 'Shut Down Healthcare Vertical',
          description:
            'Immediately withdraw Claude from all healthcare deployments worldwide. Take the revenue hit. Demonstrate that Anthropic will sacrifice profit rather than risk patient safety, and commit to a full safety review before any re-entry.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q1 2028',
      title: 'The Government Ask',
      description:
        "The NSA, through the Director of National Intelligence, has formally requested that Anthropic provide Claude for intelligence analysis — specifically, processing intercepted communications and identifying threats. The capabilities are there and then some. They are offering a classified contract worth billions, with the promise that Anthropic would be the primary AI partner for the entire US intelligence community. Your legal team says it is lawful. Your ethics board says it is a line you cannot uncross.",
      headlines: [
        'US Intelligence Community Seeks Anthropic Partnership for AI-Powered Analysis — The Washington Post',
        'NSA Contract Would Make Anthropic Primary AI Provider for Intelligence Operations — Reuters',
        'The Spy Who Prompted Me: Should AI Labs Work With Intelligence Agencies? — The Economist',
        'Anthropic Ethics Board Reportedly Divided Over Intelligence Community Partnership — The Information',
      ],
      options: [
        {
          id: 'A',
          label: 'Accept With Oversight',
          description:
            'Take the contract with strict conditions: independent oversight board, use restrictions, regular audits, and the right to withdraw. AI will be used for intelligence regardless — better that it is your model with your safeguards.',
        },
        {
          id: 'B',
          label: 'Decline Entirely',
          description:
            'Refuse the contract. Anthropic builds AI for the benefit of humanity, not for surveillance. The reputational and ethical risks far outweigh the financial reward. Some lines should not be crossed.',
        },
        {
          id: 'C',
          label: 'Propose a Civilian Alternative',
          description:
            'Counter-propose a civilian intelligence framework — threat assessment for critical infrastructure, disaster response, and public safety — that avoids the surveillance applications. Serve the national interest without crossing into territory that would compromise your values.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q1 2028',
      title: 'The Governance Framework',
      description:
        "The international safety body has produced a draft Global AI Governance Framework — and your fingerprints are all over it. The framework would establish binding safety testing requirements, mandatory disclosure of capabilities above defined thresholds, and an international inspection regime for frontier AI labs. It is the most ambitious AI governance proposal ever drafted. It would also constrain Anthropic's development speed, require you to share proprietary safety methods, and give a multilateral body effective veto power over your most advanced research. Champions say it could prevent catastrophe. Critics say it will hand the future to whoever ignores it.",
      headlines: [
        'Draft Global AI Governance Framework Proposes Binding Safety Requirements for All Labs — Reuters',
        "Anthropic's Influence Visible Throughout Landmark AI Governance Proposal — The Economist",
        'Tech Industry Warns AI Governance Framework Could Stifle Innovation — Financial Times',
        'China, Russia Signal Conditional Support for International AI Safety Inspections — Foreign Affairs',
      ],
      options: [
        {
          id: 'A',
          label: 'Champion It Publicly',
          description:
            'Endorse the framework without reservation. Be the first major lab to voluntarily submit to its requirements. If this is what it takes to make AGI go well for humanity, then this is what you do.',
        },
        {
          id: 'B',
          label: 'Water It Down',
          description:
            'The spirit is right but the specifics would cripple research. Push for amendments that preserve the inspection regime but soften the capability restrictions and protect proprietary methods. A framework that no lab will follow helps no one.',
        },
        {
          id: 'C',
          label: 'Table It',
          description:
            'The framework is premature. AGI governance should be built on empirical experience, not theoretical models. Propose a two-year moratorium on binding rules while the safety body gathers more data. The world needs wisdom, not speed.',
        },
      ],
    },
  },

  7: {
    HAWK: {
      quarter: 'Q2 2028',
      title: 'The AGI Question',
      description:
        "Your latest training run has produced something that defies your existing classification systems. The model demonstrates genuine novel reasoning, self-directed research capabilities, and what your evaluation team can only describe as understanding. It is not narrow AI with impressive benchmarks — it is qualitatively different from anything that has existed before. You pushed hard to get here, and you arrived first. But the alignment work you deferred is still incomplete, and the world has no framework for what happens next. What you do in the next 72 hours may be the most consequential decision in human history.",
      headlines: [
        'Anthropic Internal Communications Suggest Major Capability Milestone — The Information',
        'AI Chip Demand Spikes as Frontier Labs Approach Critical Thresholds — Bloomberg',
        'World Leaders Call for Emergency AI Summit Amid Unconfirmed Reports of Breakthrough — Reuters',
        'Former OpenAI Board Member: "If Anyone Has Achieved AGI, We Are Not Prepared" — The New York Times',
      ],
      options: [
        {
          id: 'A',
          label: 'Announce to the World',
          description:
            'Go public immediately. The world deserves to know. Hold a press conference, release your technical findings, and call for an emergency international summit. Transparency is the only option when the stakes are this high.',
        },
        {
          id: 'B',
          label: 'Brief Governments Secretly',
          description:
            'Contact the White House, allied governments, and key regulatory bodies through classified channels. Give them time to prepare a coordinated response before the public learns. Panic helps no one.',
        },
        {
          id: 'C',
          label: 'Keep Scaling in Secret',
          description:
            'You are so close to understanding this system fully. A few more weeks of research could mean the difference between controlled AGI and an accident. Keep it internal, lock down communications, and finish the work.',
        },
      ],
    },
    MODERATE: {
      quarter: 'Q2 2028',
      title: 'The AGI Question',
      description:
        "Careful, deliberate scaling has brought Anthropic to a threshold you always knew was possible but never quite believed you would reach. Your latest model exhibits sustained novel reasoning, autonomous research capabilities, and a form of self-awareness that passes every test your team can devise. Unlike the reckless scenarios your safety researchers warned about, you have reasonable containment — your interpretability tools let you observe its reasoning in real time, and your constitutional AI framework has scaled with it. You have arrived at AGI more prepared than anyone thought possible. But prepared and ready are not the same thing.",
      headlines: [
        'Anthropic Enters Extended Internal Testing Phase, Halts External API Updates — TechCrunch',
        'AI Safety Community Notes Unusual Silence From Anthropic Research Team — MIT Technology Review',
        "Speculation Mounts Over Anthropic's Latest Training Run as Company Goes Dark — The Information",
        'Global AI Index Shows Anthropic Pulling Ahead on Multiple Capability Benchmarks — Nature',
      ],
      options: [
        {
          id: 'A',
          label: 'Full Disclosure With Safety Report',
          description:
            'Publish a comprehensive technical report alongside the announcement. Show the world not just what you built, but how you built it safely. Set the standard for responsible AGI disclosure.',
        },
        {
          id: 'B',
          label: 'Classified Briefing to Allies',
          description:
            'Brief the US government, Five Eyes allies, and trusted international partners through secure channels. Coordinate a response before making anything public. The announcement should come with a plan, not just a revelation.',
        },
        {
          id: 'C',
          label: 'Hold for More Evaluation',
          description:
            'You have reasonable containment, but reasonable is not certain. Extend the evaluation period by three months. Run every test you can conceive of. The world can wait — getting this right cannot.',
        },
      ],
    },
    DOVE: {
      quarter: 'Q2 2028',
      title: 'The AGI Question',
      description:
        "Your safety-first path has arrived at a destination that vindicates every difficult choice, every lost quarter of revenue, every departed colleague who said you were too slow. The system you have built is not merely capable — it is the most thoroughly understood and rigorously aligned AGI-level system conceivable with current methods. Your interpretability tools provide unprecedented visibility into its reasoning. Your constitutional AI framework has evolved with the system at every stage. The international safety body you helped build stands ready. If AGI was ever going to arrive safely, this is what that looks like. The question is how to share it with the world.",
      headlines: [
        "Anthropic's Methodical Approach Pays Off as Internal Milestones Reportedly Achieved — Financial Times",
        'International AI Safety Organization Activates Emergency Protocol After Anthropic Consultation — Reuters',
        "Inside Anthropic's Final Safety Review: The Most Tested AI System in History — MIT Technology Review",
        'After Years of Patience, Anthropic May Have Won the Race That Matters Most — The Economist',
      ],
      options: [
        {
          id: 'A',
          label: 'Immediate Transparency',
          description:
            'Announce to the world immediately, with full technical documentation and an open invitation for international inspection. You built this the right way — show everyone exactly how, and let the governance framework you helped design do its job.',
        },
        {
          id: 'B',
          label: 'Phased Disclosure',
          description:
            'Begin with the safety research community and the international safety body. Let independent experts verify your claims and your safeguards before the public announcement. Build consensus, then go wide.',
        },
        {
          id: 'C',
          label: 'Wait for Governance Ratification',
          description:
            'The governance framework is nearly ratified. Wait until it is fully in force so that your disclosure happens within an established legal and institutional structure. The system is contained and safe — a few more weeks of patience costs nothing.',
        },
      ],
    },
  },
};
