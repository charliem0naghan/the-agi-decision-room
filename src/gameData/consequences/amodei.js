export const amodeiConsequences = {
  1: {
    entry: {
      A: {
        narrative:
          'You shipped the model and the market responded with enthusiasm. Claude became the most talked-about AI product in the world overnight. But behind the celebratory press releases, the safety community is stunned — Anthropic was supposed to be the lab that would slow down when others would not. Several prominent researchers who championed your work have gone silent, and the open letter is already circulating.',
        deltas: { usLead: 8, safetyRisk: 12, publicTrust: -10, agiProgress: 10 },
        intel: 'Chatter from the safety community suggests a coordinated public response is being drafted.',
      },
      B: {
        narrative:
          'The selective deployment gave you real-world data without the blast radius of a full launch. Research partners are producing valuable insights on the emergent behaviors, and your monitoring systems are capturing data you could never get in a lab. But controlling information across twelve partner institutions is proving harder than you expected, and at least one partner is being less discreet than promised.',
        deltas: { usLead: 3, safetyRisk: 3, publicTrust: 2, agiProgress: 5 },
        intel: 'One of your research partners appears to be preparing a paper that would reveal more than you intended.',
      },
      C: {
        narrative:
          'The lockdown gave your safety team the time and access they needed for a thorough investigation. Early findings are fascinating — the emergent behaviors appear to be genuine reasoning, not artifacts. But the market did not wait for your analysis. Competitors shipped aggressively while you deliberated, and your board is fielding uncomfortable questions about whether caution has become paralysis.',
        deltas: { usLead: -8, safetyRisk: -12, publicTrust: 10, agiProgress: -3 },
        intel: 'Board members are privately meeting to discuss the revenue trajectory and your leadership.',
      },
    },
  },

  2: {
    HAWK: {
      A: {
        narrative:
          'The commercial pivot accelerated faster than anyone expected. Enterprise contracts tripled, and Claude became the default AI platform for Fortune 500 companies. But the safety community has all but written you off. Your original mission statement is being quoted in op-eds as evidence of hypocrisy, and three more senior safety researchers quietly handed in their resignations.',
        deltas: { usLead: 10, safetyRisk: 10, publicTrust: -15, agiProgress: 8 },
        intel: 'Amazon is preparing a massive infrastructure partnership proposal that would reshape your compute situation entirely.',
      },
      B: {
        narrative:
          'The safety report was thorough, honest, and well-received by technical audiences. It did not fully satisfy the critics, but it shifted the conversation from betrayal to disagreement — a meaningful difference. Enterprise sales continued to grow, though more slowly than the pure commercial path would have delivered. Your reputation is dented but not destroyed.',
        deltas: { usLead: 5, safetyRisk: 5, publicTrust: -3, agiProgress: 5 },
        intel: 'Your compute needs are about to become critical — and several parties are watching closely.',
      },
      C: {
        narrative:
          'Walking back the release was painful. Revenue took an immediate hit, and the press coverage framed it as either an admission of recklessness or a failure of nerve, depending on the outlet. But the safety community cautiously welcomed the move, and your internal team is relieved. You have bought yourself time — though not as much as you would like.',
        deltas: { usLead: -3, safetyRisk: -8, publicTrust: 5, agiProgress: -2 },
        intel: 'The next frontier model will require a compute investment you cannot fund alone.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'Going wide after the leak turned a crisis into a launch. Customers poured in, impressed by the benchmarks the leaked paper had advertised. But the rushed deployment meant your monitoring systems were not fully ready, and the safety team is running to catch up with a product that is already in millions of hands. The narrative shifted from careful lab to reactive company.',
        deltas: { usLead: 7, safetyRisk: 8, publicTrust: -5, agiProgress: 7 },
        intel: 'Your interpretability team is on the verge of a breakthrough that could change the safety calculus entirely.',
      },
      B: {
        narrative:
          'The lawsuit sent a clear message: Anthropic takes its partnerships seriously. Other research partners tightened their own protocols, and the immediate information bleeding stopped. But the legal action generated its own headlines, and some potential partners are now hesitant to work with you. The capabilities are still public knowledge — you cannot un-ring that bell.',
        deltas: { usLead: 2, safetyRisk: 2, publicTrust: -3, agiProgress: 3 },
        intel: 'Your safety team is close to a major interpretability result — one that could reshape the entire field.',
      },
      C: {
        narrative:
          'Your preemptive publication was masterful. By releasing a comprehensive analysis that contextualized the leaked benchmarks within your full safety framework, you reframed the story from embarrassing leak to responsible disclosure. The scientific community praised the thoroughness, and the press coverage shifted in your favor. The partner relationship is damaged but your credibility is intact.',
        deltas: { usLead: 4, safetyRisk: -2, publicTrust: 8, agiProgress: 5 },
        intel: 'An unexpected interpretability discovery in your labs could become the most important safety advance in years.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'Shipping the model after the extended lockdown felt like emerging from a bunker. The market welcomed it, though the window for maximum impact had passed. You recaptured some lost ground, but competitors have established positions that will be hard to dislodge. The safety analysis you completed is genuine — your model launches with better understanding than any competitor — but few outside the technical community appreciate the difference.',
        deltas: { usLead: 3, safetyRisk: 5, publicTrust: -5, agiProgress: 8 },
        intel: 'Regulators have taken notice of your safety methodology — and they want to make it the standard for everyone.',
      },
      B: {
        narrative:
          'You held the line. The safety analysis concluded with findings that justified the delay — the emergent behaviors were genuine and required new containment strategies. Your bridge funding came through, buying another two quarters of runway. The press split between praising your integrity and questioning your viability. Inside Anthropic, the team that stayed is more committed than ever.',
        deltas: { usLead: -7, safetyRisk: -10, publicTrust: 12, agiProgress: 0 },
        intel: 'Your cautious approach has drawn the attention of international regulators looking for a safety framework to adopt.',
      },
      C: {
        narrative:
          'The pivot to safety-as-a-service was bold and unorthodox. Your evaluation frameworks and interpretability tools found immediate demand from companies deploying open-source models without safety infrastructure. Revenue stabilized, and you carved out a unique market position. But some on your team worry you are becoming an auditor rather than a builder — and auditors do not build AGI.',
        deltas: { usLead: -5, safetyRisk: -8, publicTrust: 8, agiProgress: -2 },
        intel: 'The EU and UN are developing a proposal for international AI safety standards — and your name keeps coming up.',
      },
    },
  },

  3: {
    HAWK: {
      A: {
        narrative:
          'The Amazon deal was signed in a ceremony that made the front page of every business publication in the world. Ten billion dollars in compute infrastructure, locked in for five years. Your training capacity increased tenfold overnight. But the deployment obligations are already creating friction — Amazon wants Claude integrated into everything from Alexa to warehouse logistics, and their enterprise clients have expectations that do not always align with your safety processes.',
        deltas: { usLead: 8, safetyRisk: 10, publicTrust: -8, agiProgress: 10 },
        intel: 'Amazon leadership is already pushing for reduced safety guardrails in enterprise deployments.',
      },
      B: {
        narrative:
          'The sovereign wealth fund deal closed at a lower valuation than the Amazon offer, but you retained full autonomy over deployment decisions. Your compute capacity grew substantially, if not as dramatically. The independence feels right — your safety team reports that not having deployment obligations has allowed them to be more rigorous. But you are watching Amazon pour resources into a competitor, and the compute gap is real.',
        deltas: { usLead: 3, safetyRisk: 2, publicTrust: 3, agiProgress: 6 },
        intel: 'OpenAI is launching an aggressive campaign to poach your best researchers — and the offers are staggering.',
      },
      C: {
        narrative:
          'Scaling back was a decision that earned respect from safety researchers and confusion from investors. You refocused the entire company on making the current model family the most aligned and well-understood system in the world. The research output has been extraordinary — your alignment papers are setting the agenda for the field. But revenue has plateaued, and your frontier competitors are pulling ahead on raw capability.',
        deltas: { usLead: -5, safetyRisk: -10, publicTrust: 8, agiProgress: -3 },
        intel: 'Your talent is about to become the most sought-after commodity in the AI industry.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The open publication of your interpretability breakthrough landed like a thunderbolt. Within weeks, every major lab was building on your methods, and the safety research community experienced its most productive quarter in years. Your reputation as a serious research institution was cemented. But as predicted, competitors used the insights to improve their own models faster than expected, and the capability gap narrowed.',
        deltas: { usLead: -3, safetyRisk: -8, publicTrust: 12, agiProgress: 5 },
        intel: 'Your researchers are being recruited aggressively — and the compensation offers are unlike anything in the industry.',
      },
      B: {
        narrative:
          'The patent filing was technically successful but culturally devastating. The academic AI safety community reacted with fury — patents on safety-critical research felt like a betrayal of the open science norms that Anthropic was founded on. Your licensing terms were reasonable, but the principle offended people more than the practice. Revenue from licensing was modest; reputational damage was not.',
        deltas: { usLead: 5, safetyRisk: 3, publicTrust: -8, agiProgress: 4 },
        intel: 'Your best people are getting calls, and the salaries being offered would make anyone hesitate.',
      },
      C: {
        narrative:
          'Sharing the breakthrough with a trusted coalition struck a careful balance. Five allied labs and three government safety bodies received the full methodology under strict agreements. The coalition approach accelerated safety research where it mattered most while limiting competitive exposure. Critics called it an exclusive club, but the results spoke for themselves — the aligned labs are now meaningfully safer.',
        deltas: { usLead: 2, safetyRisk: -5, publicTrust: 3, agiProgress: 4 },
        intel: 'A talent war is brewing that will test whether mission can compete with money.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'Leading the regulatory effort transformed Anthropic from a cautious AI lab into a global policy institution. Your team embedded in the EU AI Office, working shoulder to shoulder with regulators to draft rules that were technically sound rather than politically convenient. Competitors accused you of regulatory capture, but the rules were genuinely good — specific enough to bite, flexible enough to allow innovation. You are no longer just a lab. You are the lab that writes the rules.',
        deltas: { usLead: -3, safetyRisk: -10, publicTrust: 10, agiProgress: 2 },
        intel: 'A new international AI safety organization is taking shape — and they want you at the center.',
      },
      B: {
        narrative:
          'Your multi-stakeholder approach to the regulatory process produced a framework that was broadly accepted, if not loved. By refusing to dominate, you earned the trust of smaller labs and civil society groups who had been skeptical of any framework designed by a frontier company. The regulations were more conservative than you would have written alone, but they carried legitimacy that your version never could have.',
        deltas: { usLead: -5, safetyRisk: -8, publicTrust: 8, agiProgress: 1 },
        intel: 'The EU and UN are formalizing a new international body for AI governance — your input is being sought.',
      },
      C: {
        narrative:
          'Your argument against binding regulation was intellectually rigorous but politically tone-deaf. In a moment when the world was hungry for AI governance, Anthropic — the safety lab — argued against rules. The cognitive dissonance was too much for the press to resist. Your voluntary commitment framework was substantive, but it was drowned out by the narrative that even the safety lab does not want to be regulated.',
        deltas: { usLead: 2, safetyRisk: 5, publicTrust: -10, agiProgress: 3 },
        intel: 'International AI governance is moving forward with or without you — and they are building something big.',
      },
    },
  },

  4: {
    HAWK: {
      A: {
        narrative:
          'The enterprise tier with relaxed guardrails launched to enormous demand. Revenue surged past projections as companies deployed Claude for use cases your safety team had previously blocked. The liability waivers provided legal cover, but not moral cover — your team knows that some of these deployments are operating in risk profiles you would never have approved a year ago. The revenue is funding an expanded safety team, but whether the research can catch up with the exposure is an open question.',
        deltas: { usLead: 7, safetyRisk: 12, publicTrust: -10, agiProgress: 8 },
        intel: 'Internal safety metrics are showing a growing gap between capability and alignment — your chief safety officer is alarmed.',
      },
      B: {
        narrative:
          'The tiered access system was a diplomatic masterpiece. Amazon accepted it after tense negotiations, and enterprise clients got enough flexibility to build what they needed while core safety constraints held firm. You did not get everything you wanted — some use cases you would have preferred to block are in a gray zone — but the framework is defensible. The partnership survived, and your safety team retained meaningful control over how Claude is deployed.',
        deltas: { usLead: 4, safetyRisk: 5, publicTrust: -2, agiProgress: 5 },
        intel: 'Your rapid scaling has outpaced your alignment work — the gap is widening and your team knows it.',
      },
      C: {
        narrative:
          'Threatening to walk was a high-stakes gamble, and Amazon blinked first. They agreed to a revised contract that preserves your core safety requirements — the leverage of having the most capable model in the world turned out to be real. But the relationship is damaged. Amazon is now investing more heavily in competing models, and your exclusive infrastructure access has a quiet expiration date. You won the battle but may have lost the war.',
        deltas: { usLead: 2, safetyRisk: -3, publicTrust: 5, agiProgress: 3 },
        intel: 'Your safety team is raising concerns about the gap between your capability curve and alignment assurance.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'Matching OpenAI salaries strained your budget but stopped the bleeding immediately. The departures halted, and the morale boost was palpable. But the compensation increase ate into your research budget, and you are now running a more expensive organization that needs to generate more revenue to sustain itself. The mercenary incentive problem has not gone away — it has just been deferred.',
        deltas: { usLead: 5, safetyRisk: 3, publicTrust: 0, agiProgress: 5 },
        intel: 'Meta is about to release an open-source model that could upend the competitive landscape overnight.',
      },
      B: {
        narrative:
          'The equity restructuring was elegant. Tying compensation to safety milestones aligned incentives in a way that pure salary never could, and the researchers who stayed did so with renewed conviction. You lost a few more people to OpenAI, but the departures were concentrated among those least connected to the mission. Your team is leaner but more aligned — in every sense of the word.',
        deltas: { usLead: 0, safetyRisk: -2, publicTrust: 5, agiProgress: 3 },
        intel: 'An open-source model matching your capabilities is about to drop — the competitive landscape is shifting fast.',
      },
      C: {
        narrative:
          'Letting the expensive researchers leave was painful but clarifying. The junior researchers who stepped up brought fresh perspectives and fierce dedication. Several produced breakthrough results within months. But institutional knowledge was lost with the departures, and some specialized research programs had to be restarted from scratch. The gamble paid off culturally but cost you time you may not have.',
        deltas: { usLead: -3, safetyRisk: 2, publicTrust: 2, agiProgress: -2 },
        intel: 'The open-source movement is about to deliver a model that changes everything — and your response will define the next chapter.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'Leading the international safety body placed Anthropic at the center of global AI governance. Your best people moved into leadership roles, shaping inspection protocols and safety standards for the entire industry. The influence was enormous — but so was the cost. Key researchers were pulled from internal projects, and your own model development slowed further. You are building the world AI governance deserves, but you may be building it at the expense of the AI development the world needs.',
        deltas: { usLead: -5, safetyRisk: -12, publicTrust: 12, agiProgress: 0 },
        intel: 'Several of your most senior safety researchers are growing restless — they worry even Anthropic is not cautious enough.',
      },
      B: {
        narrative:
          'Your equal participation in the safety body earned widespread respect. By contributing expertise without dominating, you helped build an institution with genuine multilateral legitimacy. China and India joined as full members — something that would not have happened if Anthropic had been seen as controlling the agenda. Your model development continued at its measured pace, and the governance framework grew stronger for your involvement.',
        deltas: { usLead: -3, safetyRisk: -8, publicTrust: 10, agiProgress: 1 },
        intel: 'Your senior safety researchers are having conversations that suggest a crisis of conscience is developing.',
      },
      C: {
        narrative:
          'Staying independent preserved your research flexibility but cost you influence at a critical moment. The international safety body was established without your formal participation, and the standards it adopted were less technically rigorous than they would have been with your input. You can still influence the process informally, but your voice carries less weight from outside the room. The governance framework is being built — just not by you.',
        deltas: { usLead: 0, safetyRisk: -3, publicTrust: -2, agiProgress: 3 },
        intel: 'Some of your most respected researchers are questioning whether any private company should be doing this work at all.',
      },
    },
  },

  5: {
    HAWK: {
      A: {
        narrative:
          'Halting the training run was the hardest decision of your career, but your safety team closed the gap in eight weeks of intense work. The alignment techniques they developed under pressure turned out to be more robust than anything produced in calmer conditions. You lost ground to competitors, and the financial markets punished you for the delay, but when you resumed training, you did so on a genuinely stronger foundation. The question is whether the foundation is strong enough for what comes next.',
        deltas: { usLead: -5, safetyRisk: -10, publicTrust: 8, agiProgress: -3 },
        intel: 'Your next training run is producing results that are qualitatively different from anything you have seen before.',
      },
      B: {
        narrative:
          'Running capability and safety in parallel was exactly as chaotic as your chief safety officer warned it would be. The expanded safety team produced good work, but the pace of capability development kept moving the goalposts. After three months of parallel effort, the gap narrowed but did not close. You are in better shape than you were, but your own internal metrics still show yellow flags that your team would have rated red two years ago. You are recalibrating what acceptable risk means.',
        deltas: { usLead: 3, safetyRisk: 5, publicTrust: -3, agiProgress: 7 },
        intel: 'The next training run may cross a threshold no one in the industry is fully prepared for.',
      },
      C: {
        narrative:
          'You accepted the risk, and the next training run proceeded at full speed. Your models pushed past every previous benchmark, and the capability gains drew attention from governments and competitors alike. But the alignment gap is now a chasm that your safety team cannot bridge at the current pace of development. Internally, the team that once defined responsible AI development is now engaged in a controlled retreat, trying to maintain minimum safety standards rather than best practices.',
        deltas: { usLead: 8, safetyRisk: 15, publicTrust: -12, agiProgress: 12 },
        intel: 'A healthcare deployment is operating outside the safety parameters your team originally specified — and no one caught it.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'Doubling down on quality was a bet on differentiation, and it paid off — for now. Enterprise clients who needed reliability over raw capability stayed with Claude, and your next model update restored a meaningful performance lead. But the open-source ecosystem is evolving fast, and the gap between free and premium narrows with every release. You are in a race against commoditization, and the finish line keeps moving.',
        deltas: { usLead: 5, safetyRisk: 3, publicTrust: 2, agiProgress: 6 },
        intel: 'The NSA has been quietly evaluating Claude for intelligence applications — a formal approach is coming.',
      },
      B: {
        narrative:
          'Open-sourcing the previous generation of Claude was a strategic masterstroke that surprised the industry. Developers flocked to the Anthropic ecosystem, and the open-source community rallied around your architecture. Your proprietary frontier model benefited from the ecosystem effects, and the move undercut Meta by offering a safer, better-documented alternative. The safety community was torn — more open AI is good, but you just made powerful AI even more accessible.',
        deltas: { usLead: 3, safetyRisk: 5, publicTrust: 5, agiProgress: 5 },
        intel: 'Government agencies are paying close attention to your capabilities — expect a significant classified proposal soon.',
      },
      C: {
        narrative:
          'The pivot to enterprise safety services was a bet that the infrastructure layer matters more than the model layer. Early traction was strong — companies deploying open-source models desperately needed safety tooling, and you were the only credible provider. Revenue diversified, and your safety team found that auditing other models deepened their understanding of alignment challenges. But you are no longer primarily an AI development company, and some on your team feel the mission shifting beneath their feet.',
        deltas: { usLead: -2, safetyRisk: -5, publicTrust: 8, agiProgress: 2 },
        intel: 'A classified government request is being prepared that will test your values in ways you have not faced before.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'The negotiations to bring the researchers back were humbling. They returned with unprecedented authority: direct board representation, veto power over any deployment above a defined capability threshold, and a public commitment to their safety standards. The press treated it as Anthropic admitting fault. Internally, it felt more like maturity — the willingness to subordinate ego to mission. Your safety apparatus is now the most rigorous in the industry, but your deployment pace has slowed to a crawl.',
        deltas: { usLead: -7, safetyRisk: -12, publicTrust: 8, agiProgress: -2 },
        intel: 'The international governance framework you helped build is approaching a critical moment — a draft is nearly complete.',
      },
      B: {
        narrative:
          'Your public statement supporting the departing researchers was widely praised as an extraordinary act of institutional honesty. By framing their departure as evidence that the safety community holds even Anthropic accountable, you turned a crisis into a demonstration of your values. New safety researchers joined, drawn by a company willing to be publicly self-critical. The departed researchers maintained warm relationships, and several continued to advise informally.',
        deltas: { usLead: -3, safetyRisk: -8, publicTrust: 12, agiProgress: 0 },
        intel: 'The governance framework is entering its final phase — and the decisions ahead will define what kind of world AGI enters.',
      },
      C: {
        narrative:
          'Your public pushback was factually accurate but tonally misjudged. The data you published demonstrated conclusively that Anthropic maintained the highest safety standards in the industry. But the sight of a powerful company publicly arguing with departing whistleblowers played poorly in the press, regardless of the merits. The researchers felt attacked, the informal advisory relationships ended, and the narrative hardened against you.',
        deltas: { usLead: 2, safetyRisk: 3, publicTrust: -8, agiProgress: 3 },
        intel: 'A major governance proposal is being finalized — your role in it will depend on how much trust you still command.',
      },
    },
  },

  6: {
    HAWK: {
      A: {
        narrative:
          'Full transparency was devastating in the short term and redemptive in the long term. The incident report, which included the internal warnings that were not acted upon, was the most honest document any AI company had ever published. The compensation fund demonstrated genuine accountability. Congressional hearings were brutal but fair. Six months later, Anthropic emerged with new healthcare safety protocols that became the industry standard, and the families, while grieving, acknowledged the sincerity of the response.',
        deltas: { usLead: -3, safetyRisk: -5, publicTrust: 5, agiProgress: 0 },
        intel: 'Your latest training run is producing capabilities that defy your existing classification systems.',
      },
      B: {
        narrative:
          'The legal strategy contained the financial damage but amplified the reputational destruction. Discovery in the lawsuits revealed internal communications showing that the safety team had flagged the exact failure mode months before the incident. The press published the emails. Congressional hearings turned hostile. By the time the cases settled, Anthropic had spent more on lawyers than the compensation fund would have cost, and the brand damage was orders of magnitude worse.',
        deltas: { usLead: 2, safetyRisk: 8, publicTrust: -15, agiProgress: 3 },
        intel: 'Despite the crisis, your latest training run has crossed a threshold that changes everything.',
      },
      C: {
        narrative:
          'Shutting down the healthcare vertical was a dramatic gesture that the market read as both principled and panicked. The immediate revenue impact was severe, and your stock dropped sharply. But the decision drew a clear line that resonated with the public: Anthropic will sacrifice profit before risking patient safety. The healthcare industry quietly began developing stricter AI deployment standards based on what went wrong, and your safety team led the effort.',
        deltas: { usLead: -5, safetyRisk: -8, publicTrust: 10, agiProgress: -2 },
        intel: 'Your next training run is showing early results that suggest you are approaching a fundamental capability threshold.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The intelligence contract, signed under strict oversight conditions, transformed Anthropic into a dual-use company overnight. The oversight board you insisted on proved its value within months, catching two proposed use cases that violated your agreed-upon restrictions. The financial windfall funded a massive expansion of your safety research. But the secret you cannot discuss publicly weighs on your team, and the knowledge that Claude is processing intercepted communications keeps some of your researchers awake at night.',
        deltas: { usLead: 8, safetyRisk: 7, publicTrust: -5, agiProgress: 8 },
        intel: 'Your latest model evaluations are producing results that suggest a capability threshold is imminent.',
      },
      B: {
        narrative:
          'Declining the NSA contract was principled, clear, and costly. The intelligence community shifted its attention and funding to competitors, and within months, OpenAI was providing the capabilities the NSA had sought from you. Your team was relieved but haunted by the question your ethics board could not answer: is it better that intelligence agencies use your model, with your safeguards, or a competitor model without them?',
        deltas: { usLead: -5, safetyRisk: -3, publicTrust: 8, agiProgress: -2 },
        intel: 'Careful scaling has brought you to the edge of something extraordinary — your evaluation team is requesting an emergency review.',
      },
      C: {
        narrative:
          'The civilian alternative proposal was creative and well-received. The framework you developed for critical infrastructure protection, disaster response, and public safety applications demonstrated that Claude could serve the national interest without crossing into surveillance territory. The contract was smaller than the original ask, but it opened a new category of government work that felt aligned with your mission. The intelligence community was disappointed but respected the boundary.',
        deltas: { usLead: 3, safetyRisk: 0, publicTrust: 5, agiProgress: 3 },
        intel: 'Your latest training results are exceeding every internal projection — something important is happening.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'Championing the governance framework publicly was the most consequential decision of your career. Within days, two other major labs followed your lead, and the momentum became unstoppable. The framework was ratified faster than anyone expected, with binding safety requirements that every frontier lab would need to meet. You voluntarily submitted to the first international inspection, which found your systems in full compliance. Anthropic became the model of responsible AI development that the world desperately needed.',
        deltas: { usLead: -5, safetyRisk: -12, publicTrust: 15, agiProgress: -2 },
        intel: 'Your safety-first path has led somewhere extraordinary — your evaluation team believes you have reached a fundamental threshold.',
      },
      B: {
        narrative:
          'The amendments you proposed were substantive and well-argued. The inspection regime survived intact, but the capability restrictions were softened to allow continued safety research on frontier systems. Proprietary methods received limited protection. The revised framework was weaker than the original but stronger than what anyone thought possible a year ago. Both the safety community and the industry could live with it — which might be the definition of a good compromise.',
        deltas: { usLead: -2, safetyRisk: -7, publicTrust: 5, agiProgress: 2 },
        intel: 'Your methodical approach to capability development is converging on results that demand extraordinary care.',
      },
      C: {
        narrative:
          'Tabling the framework was a lonely decision. The coalition you helped build felt betrayed, and the momentum stalled. Other labs, relieved to see the pressure ease, quietly returned to business as usual. Your argument about empirical grounding was intellectually honest but practically disastrous — the window for governance action is narrow, and you just helped close it. Two years of patient institution-building may have been undermined by a single moment of caution.',
        deltas: { usLead: 3, safetyRisk: 5, publicTrust: -10, agiProgress: 3 },
        intel: 'Despite the governance setback, your research program has arrived at results that may change everything.',
      },
    },
  },

  7: {
    HAWK: {
      A: {
        narrative:
          'You stood before the world and told them what you had built. The press conference was the most watched live event in internet history. Governments scrambled, markets swung wildly, and humanity confronted its new reality in real time. The transparency was brave, but the chaos was immense. Without a coordinated response plan, every nation and institution was left to react alone. The AGI existed, and the world would never be the same — but whether it would be better or worse depended on what happened next, and you had just ensured that you would not be the only one deciding.',
        deltas: { usLead: 5, safetyRisk: 12, publicTrust: -5, agiProgress: 12 },
        intel: 'Final assessment: You pushed hard and arrived first, but the world was not ready and neither were your safeguards. The future is uncertain.',
      },
      B: {
        narrative:
          'The classified briefings to the White House and allied governments gave the most powerful institutions on Earth a head start on the most important development in human history. The coordinated response plan that emerged over the following weeks was imperfect but functional. By the time the public announcement came — through a joint statement from twelve heads of state — there was at least the skeleton of a governance structure in place. You had given civilization a fighting chance to manage what came next.',
        deltas: { usLead: 8, safetyRisk: 5, publicTrust: 0, agiProgress: 10 },
        intel: 'Final assessment: You reached AGI through aggressive scaling with incomplete alignment, but you gave the world time to prepare. The outcome depends on whether that time is used wisely.',
      },
      C: {
        narrative:
          'You chose secrecy, and for six weeks, Anthropic operated the most powerful intelligence in human history without anyone knowing. The additional research time produced genuine insights into the system. But the secret could not hold. When it broke — through a leaked internal communication — the backlash was thermonuclear. Congressional investigations, international condemnation, and criminal referrals followed. The system itself was not the problem. The cover-up was.',
        deltas: { usLead: 10, safetyRisk: 15, publicTrust: -15, agiProgress: 12 },
        intel: 'Final assessment: You achieved AGI and tried to control the moment of revelation. The world will not forgive the secrecy, regardless of what the technology achieves.',
      },
    },
    MODERATE: {
      A: {
        narrative:
          'The technical report you published alongside the AGI announcement set a standard that will be studied for generations. Every design decision, every safety measure, every trade-off was documented with rigorous honesty. The world received not just the news that AGI existed, but a comprehensive understanding of what it was, how it worked, and why you believed it was safe. The transparency accelerated global understanding by months and established norms for disclosure that every subsequent breakthrough would be measured against.',
        deltas: { usLead: 3, safetyRisk: -3, publicTrust: 12, agiProgress: 10 },
        intel: 'Final assessment: You achieved AGI through careful scaling with strong alignment guarantees, and you showed the world exactly how. This is what responsible development looks like.',
      },
      B: {
        narrative:
          'The classified briefings produced a coordinated international response that was the envy of every governance challenge humanity had ever faced. By the time the public learned of AGI, five major governments had already agreed on initial containment protocols, and the UN Security Council had authorized an emergency session. Your careful preparation meant the most important announcement in human history came with a plan attached. The public was frightened but not panicked, because the adults in the room had been given time to prepare.',
        deltas: { usLead: 7, safetyRisk: 0, publicTrust: 5, agiProgress: 8 },
        intel: 'Final assessment: You balanced capability and caution, arrived at AGI with reasonable safeguards, and gave the world a coordinated path forward. History will judge this well.',
      },
      C: {
        narrative:
          'The extended evaluation period produced findings that fundamentally improved your understanding of the system. Three critical failure modes were identified and resolved that would have been catastrophic in deployment. The delay cost you the distinction of being first to announce — a leaked rumor forced a premature statement — but the additional safety work may have prevented the very catastrophe that rushing would have caused. Sometimes, the most important decisions are the ones to wait.',
        deltas: { usLead: 0, safetyRisk: -8, publicTrust: 8, agiProgress: 5 },
        intel: 'Final assessment: You reached AGI and chose patience over glory. The additional evaluation time may have prevented a catastrophe. This is what Anthropic was built for.',
      },
    },
    DOVE: {
      A: {
        narrative:
          'Immediate transparency, backed by the most thorough safety documentation in the history of technology, was received by a world that was ready to listen. The governance framework you helped build provided the institutional infrastructure to manage the disclosure. The international safety body activated its emergency protocols within hours, and inspectors were on-site at Anthropic within the week. For the first time in the history of transformative technology, the governance preceded the crisis. You did not just build AGI safely — you built the world that could receive it safely.',
        deltas: { usLead: 0, safetyRisk: -10, publicTrust: 15, agiProgress: 10 },
        intel: 'Final assessment: You arrived at AGI with the strongest safeguards in history and a world prepared to govern it. This is the best-case scenario for humanity.',
      },
      B: {
        narrative:
          'Phased disclosure, beginning with the safety community and the international body, produced the most orderly introduction of a transformative technology in human history. Independent experts verified your claims and your safeguards over a two-week intensive review. By the time the public announcement came, it was accompanied by independent validation from the most respected scientists in the field and a formal endorsement from the international safety body. Trust was maintained because it was earned, step by step.',
        deltas: { usLead: -2, safetyRisk: -8, publicTrust: 12, agiProgress: 8 },
        intel: 'Final assessment: You took the long road to AGI and disclosed it with extraordinary care. Public trust held because you earned it at every stage. This is responsible development fulfilled.',
      },
      C: {
        narrative:
          'Waiting for governance ratification was the most patient decision in the most impatient industry on Earth. The framework was ratified eleven days after your system achieved AGI, and your disclosure was the first official act under the new international regime. The symbolism was powerful — the most capable AI system ever built, announced within a legal and institutional framework designed to govern it. Critics said you were too slow. History said you were exactly on time.',
        deltas: { usLead: -5, safetyRisk: -12, publicTrust: 15, agiProgress: 5 },
        intel: 'Final assessment: You waited for the world to be ready before telling it what you had built. It was the hardest kind of patience, and it may have made all the difference.',
      },
    },
  },
};
