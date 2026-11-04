export interface PassageQuestion {
  q: string;
  options: string[];
  answer: number; // 0-based index into options
  explanation: string;
}

export interface Passage {
  id: number;
  title: string;
  region: 'India' | 'International';
  month: 'May 2026' | 'June 2026' | 'July 2026';
  event: string;
  sources: string;
  text: string[];
  questions: PassageQuestion[];
}

export const passages: Passage[] = [
  {
    id: 1,
    title: "One Law for All? Assam and the UCC Debate",
    region: 'India',
    month: 'May 2026',
    event: "Assam Assembly passes the Uniform Civil Code Bill, 27 May 2026",
    sources: "The Hindu (27 May 2026): https://www.thehindu.com/news/national/assam/assam-assembly-passes-uniform-civil-code-bill/article71028836.ece | ThePrint (27 May 2026): https://theprint.in/india/assam-assembly-passes-uniform-civil-code-bill-oppn-terms-it-bjps-political-agenda/2943452/",
    text: [
      `When the Assam Assembly passed its Uniform Civil Code Bill by a voice vote on 27 May 2026, the state became the third in India, after Uttarakhand and Gujarat, to legislate a common civil framework for marriage, divorce, inheritance and live-in relationships. The Bill bans polygamy, makes registration of live-in relationships mandatory, and exempts Scheduled Tribes, who constitute about 12.45 percent of the state's population. Supporters hailed it as a stride toward legal equality; the opposition walked a familiar line, calling it the ruling party's political agenda dressed as reform.`,
      `The constitutional anchor of the debate is Article 44, a Directive Principle that asks the state to endeavour toward a uniform civil code. Yet the same Constitution treats Directive Principles as non-justiciable aspirations, not enforceable commands, and places personal law at the sensitive intersection of religious freedom and state power. The result is a peculiar Indian equilibrium: the goal is celebrated in principle and contested in every particular. Each state that legislates a code claims to fulfil the framers' vision; each exemption it carves out concedes that uniformity, in practice, is a negotiated settlement rather than a fiat.`,
      `Assam's tribal exemption deserves closer reading than it usually gets. Critics on one side argue that a code which exempts a substantial minority is uniform in name only. Defenders reply that the exemption is precisely what makes the project constitutional, since the Sixth Schedule and tribal autonomy provisions were designed to insulate customary law from majoritarian standardisation. Both readings are partially right, and that is the point. A uniform code in a plural society is less a destination than a method of bargaining about which differences the law will continue to see.`,
      `There is also a federal question that the celebratory coverage tends to skip. Family law sits on the Concurrent List, which means states can legislate subject to central law, and a patchwork of state codes could emerge well before any national one. If Uttarakhand, Gujarat and Assam produce three materially different 'uniform' codes, the country may end up with neither uniformity nor the old pluralism, but a third thing: jurisdictional arbitrage in intimate life, where the law of marriage depends on which side of a state border a couple registers. The Bill's defenders reply that every Indian law is a negotiated settlement in this sense; the uniform criminal code coexists with state-specific policing, and no one calls that settlement broken. The analogy is weaker than it looks: criminal law does not sort citizens by creed. Whether that outcome counts as reform depends less on legal logic than on what one thinks the project was ever for.`
    ],
    questions: [
      {
        q: "The author's primary purpose in the passage is to:",
        options: [
          "argue that the Assam UCC Bill is unconstitutional because it exempts Scheduled Tribes",
          "analyse the Assam UCC Bill as an instance of the negotiated, contested nature of legal uniformity in India",
          "urge Parliament to replace state-level codes with a single national uniform civil code",
          "defend the opposition's claim that the Bill is merely electoral politics"
        ],
        answer: 1,
        explanation: "The passage neither condemns nor celebrates the Bill outright. It examines the constitutional basis, the meaning of the tribal exemption, and the federal implications to show that uniformity is a negotiated bargain. Options A, C and D each take a side the author explicitly refuses to settle."
      },
      {
        q: "Which of the following, if true, would most weaken the concern raised in the final paragraph?",
        options: [
          "The Supreme Court has held that Directive Principles always override fundamental rights in matters of personal law",
          "The central government is drafting legislation that would make state-level civil codes subordinate to a single national framework",
          "Most couples in India are unaware that personal laws differ across states",
          "The Assam Bill was passed by a voice vote rather than a division"
        ],
        answer: 1,
        explanation: "The final paragraph worries that divergent state codes will produce jurisdictional arbitrage rather than uniformity. A binding national framework subordinating state codes would directly remove that risk. The other options do not address the patchwork problem."
      },
      {
        q: "It can be inferred from the passage that the author regards Article 44 as:",
        options: [
          "a constitutional anomaly that should be repealed",
          "a legally enforceable mandate that successive governments have ignored",
          "an aspirational provision whose non-justiciable character shapes how the uniformity debate unfolds",
          "evidence that the framers opposed religious personal law"
        ],
        answer: 2,
        explanation: "The passage states that Article 44 is a Directive Principle and that Directive Principles are non-justiciable aspirations, and describes the resulting equilibrium in which the goal is celebrated in principle but contested in practice. This matches option C. The author does not call for repeal, does not treat it as enforceable, and does not impute opposition to personal law to the framers."
      }
    ]
  },
  {
    id: 2,
    title: "Digging for Leverage: The India-US Critical Minerals Pact",
    region: 'India',
    month: 'May 2026',
    event: "India and the US sign a Strategic Critical Minerals Cooperation Framework, 26 May 2026",
    sources: "US Embassy in India (26 May 2026): https://in.usembassy.gov/united-states-and-india-sign-strategic-critical-minerals-cooperation-framework/ | Economic Times (26 May 2026): https://economictimes.indiatimes.com/news/economy/foreign-trade/india-us-seal-critical-minerals-and-rare-earths-pact-amid-global-supply-chain-race/articleshow/131322410.cms",
    text: [
      `On 26 May 2026, India and the United States signed a Strategic Critical Minerals Cooperation Framework covering the supply, mining and processing of critical minerals and rare earths. The agreement arrives at a moment when the phrase 'critical minerals' has quietly become the twenty-first century's oil: lithium, cobalt, nickel and the seventeen rare earth elements sit inside everything from electric vehicle batteries and wind turbines to precision-guided munitions and semiconductor fabrication. Whoever controls their supply chains holds a veto over the energy transition and, increasingly, over defence production.`,
      `The structural problem the pact tries to answer is concentration. China dominates not the mining but the processing of rare earths, refining a commanding share of global output, and has shown a willingness to weaponise that position through export controls. For India, which imports nearly all of its rare earth requirements despite holding meaningful deposits of its own, the vulnerability is double: it depends on a strategic rival for inputs, and its own reserves remain underexploited because mining them is capital-intensive, environmentally contentious and technologically demanding. A framework with Washington promises capital, technology and a market for alternative supply chains that bypass Beijing.`,
      `Sceptics point out that frameworks are not refineries. India has announced mineral agreements with a rotating cast of partners, from Australia to Argentina, and the gap between memorandum and magnet factory has historically been measured in decades. Environmental clearances, land acquisition and the absence of downstream processing industry mean that even accelerated projects face long gestation. There is also an asymmetry embedded in the partnership: the United States wants diversified supply for its own industries, and India's role in that design could easily settle into that of a raw-material appendage, shipping oxides out and importing value-added products back, reproducing the colonial trade pattern in green clothing.`,
      `Yet the pact's significance may lie less in tonnes than in alignment. Critical minerals have become the grammar through which middle powers negotiate their place in a bifurcating technological order. By signing, India signals that its strategic autonomy will be exercised through coalitions of capability rather than splendid isolation. The fine print matters here. The framework commits both sides to coordination on mining, processing and recycling, but it appropriates no money and relaxes no regulation; its obligations are hortatory until ministries translate them into auctions, clearances and priced power. Whether that signal matures into an actual processing ecosystem will depend on the unglamorous work of environmental regulation, power pricing and skills policy. The framework, in other words, is best read not as a solution but as a down payment on an industrial policy India has not yet fully written.`
    ],
    questions: [
      {
        q: "The phrase 'reproducing the colonial trade pattern in green clothing' (paragraph 3) suggests that the author fears India might:",
        options: [
          "become environmentally degraded by unregulated mining",
          "export raw minerals while importing expensive finished goods, gaining little value domestically",
          "be colonised economically by China rather than the United States",
          "fail to meet its climate commitments under the Paris Agreement"
        ],
        answer: 1,
        explanation: "The author explicitly describes the risk of India shipping oxides out and importing value-added products back, which is the classic raw-material appendage pattern. The phrase is about value capture, not environmental damage, Chinese dominance, or climate targets."
      },
      {
        q: "Which of the following is an assumption underlying the argument in paragraph 2 that the pact addresses India's vulnerability?",
        options: [
          "India's rare earth deposits are the largest in Asia",
          "Partnership with the United States can actually deliver the capital, technology and markets needed to build alternative supply chains",
          "China will never relax its export controls on rare earths",
          "India's environmental clearance process is faster than that of the United States"
        ],
        answer: 1,
        explanation: "Paragraph 2 argues the pact answers the vulnerability because it promises capital, technology and a market. That argument assumes the promises can translate into functioning supply chains. The other options are either unsupported claims or not required by the argument."
      },
      {
        q: "The author's attitude toward the critical minerals pact is best described as:",
        options: ["unqualified enthusiasm", "cautious, recognising strategic value while doubting near-term industrial outcomes", "dismissive, treating it as a public-relations exercise", "hostile, viewing it as a surrender of sovereignty"],
        answer: 1,
        explanation: "The author credits the pact with signalling value and a plausible answer to supply-chain concentration, while stressing the long record of unfulfilled frameworks and missing industrial policy. This is qualified optimism, not enthusiasm, dismissal or hostility."
      }
    ]
  },
  {
    id: 3,
    title: "The Long Handover in Karnataka",
    region: 'India',
    month: 'June 2026',
    event: "D.K. Shivakumar sworn in as Karnataka's 25th Chief Minister, 3 June 2026",
    sources: "The Hindu (3 June 2026): https://www.thehindu.com/news/national/karnataka/dk-shivakumar-sworn-in-as-25th-chief-minister-of-karnataka/article71057097.ece | Indian Express (3 June 2026): https://indianexpress.com/article/cities/bangalore/dk-shivakumar-sworn-in-karnataka-chief-minister-siddaramaiah-son-yathindra-cabinet-10722751/",
    text: [
      `When D.K. Shivakumar took oath as Karnataka's twenty-fifth chief minister on 3 June 2026, Constitution in hand, the ceremony closed one of the more protracted successions in recent state politics. Siddaramaiah's resignation on 28 May had followed months of open speculation about a power-sharing understanding dating to the government's formation, and the interregnum was filled with the theatre Indian political transitions now demand: loyalist headcounts, Delhi consultations, and carefully choreographed silence from the principals. G. Parameshwara's appointment as deputy chief minister completed the balancing act.`,
      `The episode illustrates a structural feature of Indian party politics that formal analysis often misses. Chief ministerial tenure in large states is increasingly governed not by constitutional convention but by intra-party contracts, negotiated at the moment of victory and litigated in public thereafter. Such contracts solve a real problem: they allow parties to assemble coalitions of ambition that a single hierarchy cannot contain. But they convert governance into an ongoing referendum on the succession question, in which every administrative decision is read as positioning, and the incumbent governs with one eye on the calendar.`,
      `The costs are not merely atmospheric. Karnataka's administration spent the better part of a year fielding questions about who would occupy the chair rather than what would be done from it. Investor sentiment in Bengaluru, welfare delivery schedules and bureaucratic initiative all bend, however subtly, around perceived lame-duck periods. Shivakumar's maiden briefing, announcing a 'Yuva Yuga' package and free bus passes for students, was notable precisely because it was an attempt to reassert policy as the subject of politics. Whether the gesture endures will depend on how completely the succession question has actually been settled.`,
      `There is a wider lesson about institutional design. Parliamentary systems concentrate executive survival in the legislature's confidence, but they are silent on the choreography of internal replacement. As political parties across the spectrum confront the same arithmetic of multiple power centres and fixed terms, the Karnataka template of negotiated rotation, with its drama and its transaction costs, is likely to be repeated rather than repudiated. The costs are not only administrative. A government that spends its first years negotiating its own survival governs with one eye on the capital's power corridors rather than on the state's irrigation backlog and urban transport deficits, both of which figured in the mandate now being rotated. The state's voters, who delivered a mandate to a party rather than to an individual, might reasonably ask whether they consented to the contract struck in their name.`
    ],
    questions: [
      {
        q: "The central argument of the passage is that:",
        options: [
          "D.K. Shivakumar's elevation was unconstitutional",
          "negotiated intra-party succession contracts have become a recurring feature of Indian state politics, with real governance costs",
          "Siddaramaiah's resignation was forced by poor welfare delivery",
          "voters should elect chief ministers directly to avoid succession drama"
        ],
        answer: 1,
        explanation: "The passage treats the Karnataka handover as an illustration of a structural pattern: tenure governed by intra-party contracts, with costs to administration and policy focus. Options A and C are unsupported; option D is a remedy the author never proposes."
      },
      {
        q: "The author mentions the 'Yuva Yuga' package primarily to:",
        options: [
          "praise the new government's welfare priorities",
          "illustrate an attempt to redirect political attention from succession back to policy",
          "criticise the fiscal irresponsibility of free bus passes",
          "show that deputy chief ministers control policy announcements"
        ],
        answer: 1,
        explanation: "The passage says the announcement was notable as an attempt to reassert policy as the subject of politics. The author is neutral on the package's merits; the point is what the gesture was for."
      },
      {
        q: "Which of the following, if true, would most strengthen the claim in paragraph 3 that perceived lame-duck periods carry administrative costs?",
        options: [
          "Karnataka's GDP growth exceeded the national average during the transition year",
          "A study finds that state-level project clearances slow measurably in the two quarters preceding an anticipated chief ministerial change",
          "Several other states have changed chief ministers mid-term without public controversy",
          "Bureaucrats in Karnataka are insulated from political transfers by statute"
        ],
        answer: 1,
        explanation: "Direct empirical evidence that clearances slow before anticipated successions would substantiate the claimed administrative cost. Option A cuts the other way; options C and D do not address the mechanism."
      }
    ]
  },
  {
    id: 4,
    title: "The Third CDS and the Unfinished Revolution",
    region: 'India',
    month: 'May 2026',
    event: "General N.S. Raja Subramani takes charge as India's third Chief of Defence Staff, 31 May 2026",
    sources: "PIB (31 May 2026): https://www.pib.gov.in/PressReleasePage.aspx?PRID=2267339&lang=1&reg=3 | The Hindu (31 May 2026): https://www.thehindu.com/news/national/general-subramani-takes-charge-as-new-chief-of-defence-staff/article71043826.ece",
    text: [
      `General N.S. Raja Subramani's assumption of office as India's third Chief of Defence Staff on 31 May 2026 was, on the surface, a routine succession. His stated priorities, integration and indigenous capability, are by now the settled vocabulary of the office. Yet the very smoothness of the handover invites a harder question: six years after the post was created, has the institution of the CDS delivered the jointness it was invented to produce, or has it merely added a fourth star to an unreformed structure?`,
      `The case for the office was always organisational. Modern war is fought across land, sea, air, space and spectrum simultaneously, and a military whose services plan, procure and train separately will fight as a committee. The CDS was meant to be the single point of military advice to the political leadership and the engine of theatre commands that would replace seventeen single-service commands with a handful of integrated ones. The first incumbent carried the reform's founding energy; the second consolidated the Department of Military Affairs; the third inherits the hardest part, which is not design but consent.`,
      `Consent is hard because theatre commands ask each service to surrender something real. The Air Force, with the smallest fleet and the doctrine of centralised control of air power, has been the most articulate sceptic, arguing that dividing scarce air assets among geographical theatres would fritter away the flexibility that is air power's whole advantage. The Navy worries about being reduced to a coastal adjunct of continental commands. The Army, with the most to gain in institutional weight, has been the most enthusiastic. These are not mere turf anxieties; they are genuine doctrinal disagreements about how India would actually fight, and a CDS who treats them as obstructionism rather than argument will fail.`,
      `The deeper test, though, is political. Jointness abroad has historically been imposed by civilian law, from Goldwater-Nichols onward, over service objection. In India the reform has proceeded by consensus, which is slower but sturdier. General Subramani's emphasis on indigenous capability suggests an awareness that integration is not only about command charts: a military that cannot equip itself cannot plan independently, whatever its wiring diagram. The appointment itself broke no new ground, which is precisely the point: the office has survived its creation and acquired a succession. Institutions are built less by founding acts than by unremarkable transfers, and a third incumbent who treats the post as normal consolidates it more than a charismatic founder could. The measure of the third CDS will not be the speed with which theatre commands are announced, but whether, when they are, the services fight for them rather than against them.`
    ],
    questions: [
      {
        q: "The author's attitude toward the theatre command reform is best described as:",
        options: [
          "supportive of its goals but insistent that doctrinal objections be engaged rather than overridden",
          "convinced it will fail because of inter-service rivalry",
          "critical of the consensus approach as unnecessarily slow",
          "indifferent, since command structure does not affect combat outcomes"
        ],
        answer: 0,
        explanation: "The author endorses the rationale for jointness, calls service objections genuine doctrinal disagreements rather than turf anxiety, and warns against treating them as obstructionism. The consensus approach is described as slower but sturdier, which rules out option C."
      },
      {
        q: "It can be inferred that the author considers Goldwater-Nichols relevant because it shows that:",
        options: [
          "American military reforms are always superior to Indian ones",
          "jointness reforms elsewhere were legislated by civilians over service resistance, unlike India's consensual route",
          "theatre commands were invented in the United States",
          "political leadership should never interfere in military organisation"
        ],
        answer: 1,
        explanation: "The passage cites Goldwater-Nichols as an example of jointness imposed by civilian law over service objection, contrasting it with India's consensus path. The inference concerns the method of reform, not superiority, invention, or non-interference."
      },
      {
        q: "Which of the following, if true, would most weaken the author's suggestion that indigenous capability is integral to integration?",
        options: [
          "Several allied militaries fight effectively in joint commands while importing most of their major weapons platforms",
          "India's defence exports have risen steadily over the past decade",
          "The Department of Military Affairs has accelerated procurement decisions",
          "General Subramani previously served as Vice Chief of Army Staff"
        ],
        answer: 0,
        explanation: "The author argues a military that cannot equip itself cannot plan independently, tying jointness to indigenous capability. Evidence that import-dependent militaries achieve effective jointness severs that link. The other options are consistent with, or irrelevant to, the claim."
      }
    ]
  },
  {
    id: 5,
    title: "A Deficit with Many Fathers",
    region: 'India',
    month: 'May 2026',
    event: "RBI annual report shows FY26 balance of payments deficit of $30.8 billion, a six-fold rise",
    sources: "Outlook Money (31 May 2026): https://www.outlookmoney.com/news/indias-balance-of-payments-deficit-rise-by-over-6-times-to-308-billion-in-fy26-says-rbi-annual-report | The Hindu (29 May 2026): https://www.thehindu.com/business/Economy/rbi-data-shows-why-the-government-is-concerned-about-dollars-flowing-out-of-india/article71037228.ece",
    text: [
      `Buried in the Reserve Bank of India's annual report at the end of May 2026 was a number that deserves more attention than it received: India's balance of payments swung to a deficit of $30.8 billion in 2025-26, roughly six times the previous year's figure. The balance of payments is an unloved statistic, less dramatic than the rupee's daily level and less political than the fiscal deficit, but it is the most complete ledger of how an economy transacts with the world, and a swing of this size is a story about how India is financing its growth.`,
      `The composition matters more than the headline. A current account deficit driven by strong imports of capital goods is the familiar price of investment-led growth, comfortably funded when capital flows are eager. The anxiety flagged in contemporary commentary is different: dollars appear to be leaving faster through financial channels even as the real economy's external position remains manageable. Portfolio investors repricing Indian risk, multinational treasury operations, and the global dollar cycle that followed the Iran war's oil shock all contributed to an outflow that reserves had to absorb.`,
      `This is where the deficit becomes a policy problem rather than an accounting identity. India holds formidable reserves, but reserves are insurance, not income; spending them to defend a level of the rupee is a choice with an actuarial limit. The alternative, letting the exchange rate adjust, exports the adjustment to every importer of crude, edible oil and electronics, which is to say to the consumer price index. The RBI's traditional answer, accumulating reserves in good times and spending them in bad, presumes that the bad times are cyclical. A six-fold deterioration in a single year tests whether the cycle is the right metaphor.`,
      `None of this amounts to a crisis, and the alarmist framing some commentary adopted is unwarranted for an economy with India's reserve cover and growth rate. The composition of the deficit matters as much as its size. A shortfall financed by durable foreign direct investment behaves very differently from one financed by flighty portfolio flows, and the year's mix leaned uncomfortably toward the latter. But the number is a reminder that India's integration with global finance has outrun the depth of its own capital markets. The durable fix is not administrative control of outflows, which history shows to be self-defeating, but the slower work of making domestic assets worth holding through the cycle: deeper bond markets, predictable taxation, and an export base broad enough that the current account does not hinge on the price of a single imported fuel.`
    ],
    questions: [
      {
        q: "The passage suggests that the author views India's use of foreign exchange reserves as:",
        options: [
          "an unsustainable policy that should be abandoned immediately",
          "a legitimate but limited instrument whose use assumes the outflow is temporary",
          "evidence that the rupee is overvalued",
          "the primary cause of the balance of payments deficit"
        ],
        answer: 1,
        explanation: "The author calls reserves insurance, not income, and notes that the strategy of spending reserves in bad times presumes the bad times are cyclical. This matches option B. The author neither demands abandonment nor blames reserves for the deficit."
      },
      {
        q: "Which of the following is assumed in the argument that deeper domestic capital markets are the durable fix?",
        options: [
          "Foreign portfolio investors are irrational in their assessment of Indian risk",
          "The depth and attractiveness of domestic assets influence whether capital stays through adverse cycles",
          "India's export base will never diversify beyond petroleum-linked products",
          "Administrative controls on capital are unconstitutional in India"
        ],
        answer: 1,
        explanation: "The recommended fix assumes that making domestic assets worth holding will reduce the tendency of capital to flee in bad times, which is option B. The author explicitly calls controls self-defeating but not unconstitutional, and does not claim investors are irrational."
      },
      {
        q: "The author's tone toward the $30.8 billion deficit figure is best described as:",
        options: ["alarmed", "measured concern without alarmism", "dismissive", "triumphant"],
        answer: 1,
        explanation: "The author says the figure deserves attention and tests policy assumptions, while explicitly rejecting crisis framing for an economy with India's reserve cover. That is measured concern."
      }
    ]
  },
  {
    id: 6,
    title: "Chairing the Fractured Table: India's BRICS Moment",
    region: 'India',
    month: 'June 2026',
    event: "India hosts the BRICS National Security Advisers' meeting in New Delhi, 22-23 June 2026",
    sources: "News on Air (23 June 2026): https://newsonair.gov.in/16th-brics-national-security-advisers-meeting-held-in-new-delhi-nsas-discuss-global-security-challenges/ | New Indian Express (23 June 2026): https://www.newindianexpress.com/india/2026/Jun/23/brics-security-advisers-back-stronger-cooperation-on-terrorism-cyber-risks-doval-welcomes-hormuz-opening",
    text: [
      `When National Security Adviser Ajit Doval chaired the BRICS security advisers' meeting in New Delhi on 22-23 June 2026, the optics were deliberately unremarkable: a working session of officials from a grouping that prefers process to drama. Yet the meeting's subtext was anything but routine. India holds the 2026 BRICS chairship at a moment when the group is simultaneously expanding, courted and doubted, and when its two most consequential members are locked in a border relationship best described as armed wariness. That Doval used the conclave to welcome the reopening of the Strait of Hormuz captures the oddity of the moment: a security dialogue whose most urgent subject was a crisis its members had no common position on.`,
      `BRICS has always been an unusual animal, an acronym in search of a purpose that gradually acquired one. Its original rationale was economic: a club of large emerging markets under-represented in the Bretton Woods inheritance. Its newer rationale is civilisational: a venue where countries unwilling to enrol in either the American alliance system or the Chinese alternative can transact without choosing. The expansion of recent years has deepened both the appeal and the incoherence, adding members whose rivalries with one another are at least as intense as their shared complaint against the West.`,
      `India's chairmanship strategy, visible in the NSA meeting and the parallel energy ministers' conclave in Gurugram, is to make the group useful at the level of function rather than grand strategy. Energy for all, counter-terrorism working groups, health networks: these are the unglamorous currencies in which a heterogeneous group can actually trade. The approach mirrors India's broader multi-alignment, which treats blocs as instruments rather than identities. Critics call this having it both ways; defenders reply that in a fragmented order, the ability to sit at every table is itself a capability.`,
      `The limits of the model were nonetheless on display. A security dialogue that cannot address the security crises consuming its members' neighbourhoods, from Hormuz to the Himalayan frontier, is a forum for reassurance rather than resolution. India's test through 2026 will be whether chairing the table lets it set any part of the agenda that matters to it, particularly on terrorism and on China's assertiveness, or whether the chairship becomes a year of well-catered neutrality. There is value, to be sure, in a room where rivals must keep talking: the New Delhi meeting produced working-level channels on critical minerals and maritime security that outlast the communique. The mistake is to mistake the plumbing for the architecture. The honest answer is that BRICS was never designed to bear that weight, and New Delhi knows it.`
    ],
    questions: [
      {
        q: "The author's primary purpose is to:",
        options: [
          "urge India to exit BRICS in favour of Western groupings",
          "assess what India's BRICS chairship can realistically achieve given the group's internal contradictions",
          "describe the agenda of the June 2026 NSA meeting in detail",
          "argue that BRICS expansion has made the group more coherent"
        ],
        answer: 1,
        explanation: "The passage weighs the group's rationale, India's functional chairmanship strategy, and the limits exposed by crises the group cannot address. It neither counsels exit nor claims expansion brought coherence; the meeting's detail is a peg, not the purpose."
      },
      {
        q: "The phrase 'an acronym in search of a purpose that gradually acquired one' implies that BRICS:",
        options: [
          "was created as a security alliance and later became an economic bloc",
          "began as an analytical label and developed into a grouping with a genuine, if contested, rationale",
          "has failed to find any purpose and remains a talking shop",
          "was named by its member governments at a founding summit"
        ],
        answer: 1,
        explanation: "BRICS originated as an investment-bank acronym and became an actual grouping; the author then describes the purposes it acquired. The author does not call it purposeless, does not describe it as a security alliance, and the naming detail contradicts option D."
      },
      {
        q: "Which of the following, if true, would most strengthen the critics' view, as described in paragraph 3, of India's multi-alignment?",
        options: [
          "India's functional initiatives in BRICS produce working groups that meet regularly but adopt no binding commitments",
          "The BRICS energy ministers' meeting in Gurugram adopts a theme of universal energy access",
          "India simultaneously participates in Quad and BRICS ministerial meetings in the same week",
          "Several BRICS members abstain on a UN resolution India considers vital to its security interests"
        ],
        answer: 3,
        explanation: "The critics' view is that multi-alignment amounts to having it both ways without real influence. Evidence that fellow members desert India on a security question it deems vital directly supports the charge that sitting at every table buys no real backing. Option A is about process, option B is neutral, and option C merely restates the practice."
      }
    ]
  },
  {
    id: 7,
    title: "Fire on the Ground, Ambition in Orbit",
    region: 'India',
    month: 'June 2026',
    event: "ISRO test-fires the SE2000 semi-cryogenic engine power head at record thrust, late June 2026",
    sources: "ISRO: https://www.isro.gov.in/ISRO_successfully_conducted_hot_test_of_Semicryogenic_Engine.html | CNBC-TV18 (27 June 2026): https://www.cnbctv18.com/india/science/isro-fires-up-next-generation-rocket-engine-at-record-thrust-level-19933361.htm",
    text: [
      `In the last week of June 2026, engineers at ISRO's Propulsion Complex at Mahendragiri fired the power head of the SE2000 semi-cryogenic engine to a record thrust level, the eighth in a series of hot tests of what will eventually be a 175-tonne-class engine burning refined kerosene and liquid oxygen. The event made a day's news and passed. That is a pity, because the test marks a hinge in the quietest and most consequential transition in Indian spaceflight: the move from the workhorse propulsion of the twentieth century to engines that could make heavier, cheaper and eventually reusable Indian rockets possible.`,
      `To understand why semi-cryogenic propulsion matters, consider what it replaces. India's heaviest rocket, the LVM3, flies its core stage on Vikas engines burning unsymmetrical dimethylhydrazine, a storable but toxic and comparatively inefficient propellant inherited from an earlier technological era. Kerosene-lox engines deliver more thrust per unit of propellant, cost less per kilogram, and avoid the handling hazards of hypergolics. The SE2000 is designed to replace the L110 core of the LVM3, lifting the rocket's payload to geostationary orbit by roughly half again. In the unforgiving arithmetic of launch economics, where price per kilogram decides commercial relevance, that is the difference between a national asset and a competitive product.`,
      `The programme also carries a strategic lesson about how deep technology actually gets built. India has worked on semi-cryogenic propulsion for the better part of two decades, through technology-denial regimes, funding squeezes and the quiet departure of easier milestones. The recent test cadence suggests the long maturation is approaching its payoff, but engine development is a domain where the last ten percent of the work reliably takes half the time. A power head is not a full engine, a full engine is not a stage, and a stage is not a flight. Each transition has consumed years for every spacefaring nation, and there is no reason to expect India to be exempt.`,
      `What has changed is the ecosystem around the engine. Private launch startups now orbit the same talent pool, global customers are searching for launch capacity outside the American and Chinese duopoly, and the government's own reforms have opened procurement to industry. A proven SE2000 would arrive into a market far more receptive than the one in which the programme began. The test at Mahendragiri was, in that sense, less an ending than a down payment: evidence that the patient capital of a public space programme can still produce the hardware on which a commercial future will stand.`
    ],
    questions: [
      {
        q: "The author's claim that the SE2000 could make the LVM3 'a competitive product' rather than merely 'a national asset' rests on the assumption that:",
        options: [
          "the LVM3 currently has no commercial customers",
          "price per kilogram to orbit is a decisive factor in the commercial launch market",
          "kerosene is cheaper than hydrazine in all markets",
          "reusable rockets will soon make all expendable rockets obsolete"
        ],
        answer: 1,
        explanation: "The passage states that in launch economics price per kilogram decides commercial relevance, and links the engine's payload gain to competitiveness. The argument assumes this market logic; it does not assume the LVM3 has no customers, nor universal fuel-price claims, nor imminent obsolescence of expendables."
      },
      {
        q: "Which of the following, if true, would most strengthen the author's caution that the programme's hardest transitions may still lie ahead?",
        options: [
          "ISRO has conducted eight hot tests of the power head without a reported failure",
          "In comparable foreign programmes, the interval from first power-head test to first flight of a new engine stage exceeded five years",
          "Private Indian startups have announced engines in the same thrust class",
          "The L110 core stage has flown reliably for over a decade"
        ],
        answer: 1,
        explanation: "Historical evidence that the power-head-to-flight path takes many years elsewhere directly supports the warning that the remaining transitions consume years. Successful tests so far (option A) mildly cut the other way; options C and D are irrelevant to the timeline claim."
      },
      {
        q: "It can be inferred from the passage that the author regards public funding of space propulsion as:",
        options: [
          "an outdated model that private capital should replace",
          "patient capital whose results can enable a later commercial ecosystem",
          "justified only when it produces immediate commercial returns",
          "the primary obstacle to India's launch ambitions"
        ],
        answer: 1,
        explanation: "The closing paragraph describes the test as a down payment and public programme capital as patient capital producing hardware for a commercial future. The author does not advocate replacement by private capital nor demand immediate returns."
      }
    ]
  },
  {
    id: 8,
    title: "The Exam That Broke the System's Patience",
    region: 'India',
    month: 'July 2026',
    event: "NEET-UG paper-leak crisis: minister resigns, anti-leak law tightened, Nilekani task force formed (20-26 July 2026)",
    sources: "Frontline, The Hindu (25 July 2026): https://frontline.thehindu.com/politics/dharmendra-pradhan-resigns-cockroach-janta-party-neet/article71265726.ece | Economic Times (25 July 2026): https://economictimes.indiatimes.com/news/india/dharmendra-pradhan-resigns-after-neet-protests-what-was-the-medical-entrance-exam-controversy-all-about/articleshow/132622847.cms",
    text: [
      `By the time Dharmendra Pradhan resigned as Union Education Minister on 25 July 2026, the sequence had acquired the grim rhythm of ritual. The NEET-UG paper leak, weeks of student agitation culminating in a 'Sansad Chalo' march that met batons and tear gas at Jantar Mantar, and a government that accepted the protesters' demands within hours of the resignation. Pralhad Joshi took charge of the ministry; a task force on examination reforms under Nandan Nilekani was announced; and the Cabinet cleared an amendment to the Public Examinations Act raising the ceiling to ten years in prison and ten crore rupees in fines, with fast-track courts and sixty-day investigations.`,
      `The crisis deserves to be read as more than a policing failure. A high-stakes, single-window examination is an extraordinary institution: it compresses the aspirations of millions of families into one morning, and its legitimacy rests entirely on the belief that the morning is fair. Leaks corrode that belief in a way that no re-examination can fully repair, because the damage is distributional and invisible. Honest candidates cannot know how many ranks they lost to dishonest ones, and that unknowability is precisely the injury. When students say the system is rigged, they are not making a claim about one paper; they are withdrawing consent from the meritocratic story the state tells about itself.`,
      `The government's response mixes the necessary with the theatrical. Severe punishment and fast investigation address the supply side of leaks, and a task force led by the architect of Aadhaar signals that the real fix is infrastructural: encrypted digital delivery, distributed printing, on-demand testing. The technology to make question papers that cannot leak in bulk has existed for years; what has been missing is the institutional will to rebuild examinations around it. Whether a task force changes that depends on a less photogenic variable: whether the testing agencies, which are among the largest examination operations on earth, can be re-engineered without disrupting the annual cycle that millions of admissions depend on.`,
      `There is, finally, a harder question the crisis leaves untouched. Even a perfectly secure NEET would remain a single elimination event sorting two million candidates for a fixed pool of seats, a design that guarantees desperation and therefore guarantees a market for fraud. Punishing the fraud is just; reducing the desperation is reform. The resignation satisfied the street. It did not, and could not, answer the question of why so much of a young Indian's future must ride on one morning at all.`
    ],
    questions: [
      {
        q: "The author argues that the deepest damage caused by examination paper leaks is that they:",
        options: [
          "force expensive re-examinations across the country",
          "destroy candidates' ability to trust that outcomes are fair, in a way that cannot be quantified or repaired",
          "embarrass the government internationally",
          "benefit only a small number of wealthy candidates"
        ],
        answer: 1,
        explanation: "Paragraph 2 argues the injury is distributional and invisible: honest candidates cannot know how many ranks they lost, and that unknowability corrodes consent to the meritocratic story. This matches option B; the other options are either minor or absent from the argument."
      },
      {
        q: "Which of the following, if true, would most weaken the author's suggestion in paragraph 4 that the single-exam design itself breeds fraud?",
        options: [
          "Countries using multiple-attempt, computer-based admission tests report rates of organised examination fraud comparable to those in India",
          "The price paid for leaked papers rises sharply when the examination is held only once a year",
          "Coaching institutes in Kota have expanded enrolment every year for a decade",
          "The NEET syllabus was recently aligned with state board curricula"
        ],
        answer: 0,
        explanation: "The author claims the single-exam design itself guarantees a market for fraud. If countries using multiple-attempt, computer-based designs show comparable fraud rates, the design cannot be the decisive cause, which weakens the claim. Option B supports the design link; options C and D are irrelevant."
      },
      {
        q: "The author's attitude toward the appointment of the Nilekani task force is best described as:",
        options: ["dismissive of its members", "hopeful that technology alone will solve the problem", "conditionally positive, contingent on institutional follow-through", "opposed to digital examination delivery"],
        answer: 2,
        explanation: "The author calls the appointment a signal that the real fix is infrastructural and notes the technology exists, but stresses that success depends on re-engineering testing agencies without disrupting the admissions cycle. That is conditional approval."
      }
    ]
  },
  {
    id: 9,
    title: "Thirty-Eight Chairs for Ninety-Two Thousand Cases",
    region: 'India',
    month: 'July 2026',
    event: "Monsoon Session opens 20 July 2026; during the session the government brings a Bill to raise Supreme Court strength from 34 to 38 judges",
    sources: "The Hindu (20 July 2026): https://www.thehindu.com/news/national/whats-the-agenda-for-the-monsoon-session-explained/article71243886.ece | LiveLaw (Bill content): https://www.livelaw.in/top-stories/lok-sabha-passes-bill-to-increase-strength-of-supreme-court-judges-including-cji-from-34-to-38-544083",
    text: [
      `When Parliament's Monsoon Session opened on 20 July 2026 with a crowded legislative agenda, one item carried the most revealing arithmetic. The Supreme Court (Number of Judges) Amendment Bill, brought during the session, proposed raising the sanctioned strength of the apex court from thirty-four to thirty-eight judges. Behind the modest addition stood a less modest number: over 92,000 cases pending before the Court as of 1 January 2026. Four more judges against that backlog is a gesture whose symbolism runs ahead of its arithmetic, and the gap between the two is where the real debate about Indian judicial reform lives.`,
      `The case for expansion is straightforward and true as far as it goes. India's judge-to-population ratio remains among the lowest in the world, and every credible commission since the Law Commission's early reports has recommended a large increase in judicial strength at every level. The Supreme Court sits at the apex of a pyramid of crores of pending cases, and its own docket has been transformed by the constitutionalisation of almost every public question; the Court is asked to decide not merely disputes but the terms on which the country is governed. Thirty-four judges, however learned, cannot give timely attention to that demand.`,
      `Yet the history of judicial expansion teaches an uncomfortable lesson: strength increases have reliably failed to reduce pendency. Each addition is absorbed by rising institution of cases, by the lengthening of hearings, and by the gravitational pull of an appellate culture in which every interim order can travel upward. The reasons are structural. India litigates more per judge than comparable systems; the state is the largest litigant and the slowest to settle; and case management, the unglamorous discipline of listing, bunching and limiting oral argument, remains decades behind the expansion of rights. Adding judges without changing the machinery that feeds them is like widening a road to cure congestion: the new capacity fills with the traffic the old capacity was deterring.`,
      `None of this argues against the Bill itself, which few in the House are expected to oppose. It argues against the complacency of treating the Bill as an answer. The reforms that would actually move the 92,000 figure are known and mostly unglamorous: filling sanctioned vacancies on time, disciplining government litigation, investing in case-flow management, and asking hard questions about what belongs in the Supreme Court at all. Judicial capacity, like defence capability, is not a number on a sanctioned-strength table; it is the product of strength and system. India has been better at legislating the first than building the second.`
    ],
    questions: [
      {
        q: "The author's comparison of judicial expansion to widening a road (paragraph 3) is intended to show that:",
        options: [
          "road congestion and case pendency are both unsolvable",
          "new judicial capacity tends to be consumed by the demand it suppresses, so expansion alone cannot clear backlogs",
          "the government should invest in transport infrastructure before courts",
          "judges, like drivers, respond rationally to incentives"
        ],
        answer: 1,
        explanation: "The analogy is induced demand: new capacity fills with traffic the old capacity was deterring. The author applies it to argue that added judges get absorbed by rising filings and longer hearings unless the machinery changes. The author does not claim the problem is unsolvable."
      },
      {
        q: "Which of the following is an assumption behind the author's claim that the four-judge increase is 'a gesture whose symbolism runs ahead of its arithmetic'?",
        options: [
          "The Supreme Court's pendency will fall automatically as the economy grows",
          "The marginal effect of four additional judges is small relative to a backlog of over 92,000 cases",
          "The Bill was introduced for electoral reasons",
          "Most pending cases before the Court are frivolous"
        ],
        answer: 1,
        explanation: "The symbolism-over-arithmetic claim assumes the increment is tiny compared to the backlog. The author never imputes electoral motive, never predicts automatic improvement, and never calls the docket frivolous."
      },
      {
        q: "It can be inferred that the author believes the reforms most likely to reduce the Supreme Court's backlog are those that:",
        options: [
          "increase the sanctioned strength of the higher judiciary at the fastest possible rate",
          "attack the inflow and processing of cases, not merely the number of judges",
          "transfer the bulk of the Court's docket to a newly created constitutional court",
          "give the executive the final word on judicial appointments"
        ],
        answer: 1,
        explanation: "The author lists disciplining government litigation, case-flow management and timely filling of vacancies as the reforms that would actually move the backlog, and argues that capacity is the product of strength and system. Rapid expansion alone is what the passage argues against; options C and D are not supported anywhere."
      }
    ]
  },
  {
    id: 10,
    title: "Fuel for Thought: India's Airline Bailout by Another Name",
    region: 'India',
    month: 'June 2026',
    event: "India approves a $1 billion aviation fuel support fund as Iran-war-driven fuel costs hit airlines, 3 June 2026",
    sources: "Reuters (3 June 2026): https://www.reuters.com/world/india/india-cabinet-approves-1-billion-aviation-fuel-price-fund-2026-06-03/ | S&P Global (4 June 2026): https://www.spglobal.com/energy/en/news-research/latest-news/crude-oil/060426-india-approves-fund-to-shield-refiners-airlines-from-surging-jet-fuel-costs",
    text: [
      `In June 2026, as the Iran war's shockwaves moved through global oil markets, the Indian government approved a support fund of about one billion US dollars for the airline industry, structured as interest-free advances to oil companies to hold down aviation turbine fuel prices. The design was telling. Rather than writing cheques to airlines, the state chose to subsidise the fuel supply chain itself, an arrangement that says much about how India manages the intersection of strategic shocks and politically sensitive prices.`,
      `The rationale is not difficult to reconstruct. Aviation turbine fuel accounts for close to half of an Indian carrier's operating cost, and its price in India is inflated further by state taxes that make it among the most expensive in the world. Indian airlines, which operate on margins that would embarrass a kirana store, faced a squeeze they could neither absorb nor pass fully to passengers in a brutally price-sensitive market. Letting the market clear would have meant fare spikes in an election-sensitive year and, quite possibly, another high-profile airline failure in a sector that has buried several. The package bought price stability at the pump, and with it, political quiet.`,
      `But the choice of instrument deserves scrutiny. Channelling support through oil companies as interest-free advances is, in effect, a deferred subsidy: the fiscal cost is real but displaced in time and dispersed across public-sector balance sheets, keeping it out of the headline deficit conversation. This is a well-worn Indian technique, and its cost is opacity. When support flows through intermediaries rather than budgets, legislatures lose the ability to weigh it against alternatives, and the beneficiaries, passengers, airlines and oil companies alike, can each plausibly claim they received nothing. Accountability diffuses exactly in proportion to the cleverness of the design.`,
      `The episode also exposes a deeper strategic vulnerability that no subsidy can fix. India imports the overwhelming bulk of its crude, and a war two thousand kilometres away can force a billion-dollar domestic intervention within weeks. Electric aviation is decades from relevance; sustainable aviation fuel is years from scale. The durable answers are unglamorous: strategic reserves, diversified supply contracts, rationalised fuel taxation, and an airline industry consolidated enough to withstand shocks without public rescue. There is also a competitive question the package papers over. India effectively has a two-carrier market; a subsidy that flows through fuel costs flows disproportionately to the largest balance sheets, entrenching the very concentration that leaves the system fragile whenever oil spikes. A package that stabilises fares for a season is defensible on its own terms. It should not be mistaken for an energy policy.`
    ],
    questions: [
      {
        q: "The author calls the support package 'a deferred subsidy' primarily because it:",
        options: [
          "will never actually be paid out to any party",
          "carries a real fiscal cost that is shifted in time and hidden from the headline deficit",
          "is given as cash directly to airlines after a delay",
          "must be repaid by passengers through future fares"
        ],
        answer: 1,
        explanation: "The passage defines the deferral precisely: the cost is real but displaced in time and dispersed across public-sector balance sheets, out of the deficit conversation. It is neither unpaid nor cash to airlines, and repayment by passengers is not claimed."
      },
      {
        q: "Which of the following most strengthens the author's argument that the package's design undermines accountability?",
        options: [
          "Interest-free advances to oil companies do not require parliamentary approval as a separate budget head",
          "Airlines publicly welcomed the package as adequate compensation",
          "Global aviation turbine fuel prices fell in July 2026",
          "India's strategic petroleum reserve covers ninety days of imports"
        ],
        answer: 0,
        explanation: "The accountability argument is that routing support through intermediaries removes it from legislative scrutiny. Confirming that such advances escape the normal budget approval process directly substantiates that mechanism. The other options are beside the point."
      },
      {
        q: "It can be inferred that the author regards the support fund as:",
        options: [
          "an indefensible bailout of a failing industry",
          "defensible as short-term stabilisation but no substitute for structural energy policy",
          "proof that India's aviation sector is fundamentally unviable",
          "a model that should be extended to all fuel consumers"
        ],
        answer: 1,
        explanation: "The author explicitly calls the package defensible on its own terms while warning it should not be mistaken for an energy policy. This matches option B exactly; the other options misstate the position."
      }
    ]
  },
  {
    id: 11,
    title: "A Private Ticket to Orbit",
    region: 'India',
    month: 'July 2026',
    event: "Skyroot Aerospace's Vikram-1 reaches orbit, India's first private orbital launch, 18 July 2026",
    sources: "SpaceNews (18 July 2026): https://spacenews.com/skyroot-aerospace-reaches-orbit-on-first-vikram-1-launch/ | ISRO: https://www.isro.gov.in/First%5Fprivate%5Forbital%5Flaunch%5Flifts%5Ffrom%5FSriharikota.html",
    text: [
      `At Sriharikota on 18 July 2026, a rocket built not by the state but by a startup rose from the spaceport and put its payload into a 450-kilometre orbit. Skyroot Aerospace's Vikram-1, on a mission the company named Aagaman, made India only the third country whose private industry has achieved orbital launch, after the United States and China. For a space programme that spent six decades as a government monopoly, the sight of a privately built orbital rocket leaving the same soil as the PSLV was a genuine threshold, and the commentary that followed correctly identified it as the arrival of a new era. The more interesting question is what the new era will actually require.`,
      `The achievement's significance is institutional before it is technological. The rocket itself is modest by the standards of the market it enters; orbital launch has been routine for state agencies for half a century. What is not routine is the proof that India's regulatory opening, the creation of IN-SPACe, the transfer of technology, the leasing of state facilities, can carry a private firm from incorporation to orbit. Every country that has built a commercial launch sector has discovered that the scarce input is not engineering talent, which is abundant, but a state willing to let private actors fail at public expense until they succeed at their own. India's willingness, long doubted, is now demonstrated.`,
      `The economics ahead are less romantic than the imagery. The global small-launch market is crowded with well-funded American competitors, a resurgent Chinese commercial sector, and the brutal arithmetic of a business where a single failure can erase a year of revenue. Vikram-1's orbit is a proof of concept, not a business model. The company and its rivals must now do the unglamorous work of cadence: launching reliably, quarterly then monthly, at prices that make Indian private launch a rational choice for the world's constellation builders. Reliability is a statistical property, and statistics require repetition.`,
      `None of this diminishes July 18. It locates it. The historical parallel is not Apollo but the early years of commercial aviation, when the proof that private flight was possible preceded by decades the proof that it was profitable. India has decided, sensibly, that it would rather host its share of that future than buy launch services from someone else's. The rocket has shown it can reach orbit. The industry must now show it can reach orbit again, and again, and on schedule. That is a harder kind of launch.`
    ],
    questions: [
      {
        q: "The author invokes early commercial aviation primarily to argue that:",
        options: [
          "private spaceflight will follow a long path from technical proof to commercial viability",
          "air travel was also pioneered in India",
          "orbital rockets will soon be as safe as aeroplanes",
          "government monopolies always give way to private enterprise"
        ],
        answer: 0,
        explanation: "The passage draws the parallel explicitly: proof that private flight was possible preceded by decades the proof it was profitable. The point is the long gap between demonstration and viability, not safety, national pride in aviation, or an iron law of privatisation."
      },
      {
        q: "According to the passage, the critical contribution of the Indian state to the Vikram-1 milestone was:",
        options: [
          "direct funding of Skyroot's entire development cost",
          "creating the regulatory and infrastructural conditions under which a private firm could reach orbit",
          "selecting the 450-kilometre orbit for the mission",
          "guaranteeing customers for the company's future launches"
        ],
        answer: 1,
        explanation: "The passage credits IN-SPACe, technology transfer and leased facilities: the state's role was enabling, not financing the whole programme, choosing the orbit, or guaranteeing demand."
      },
      {
        q: "Which of the following, if true, would most weaken the author's caution that Vikram-1 is 'a proof of concept, not a business model'?",
        options: [
          "Vikram-1's maiden flight placed its payload precisely in the intended orbit",
          "Skyroot reports a signed manifest of paying customers sufficient to cover costs for its next twelve launches",
          "Several foreign small-launch companies have recently ceased operations",
          "IN-SPACe has approved additional private launch startups"
        ],
        answer: 1,
        explanation: "A booked, cost-covering launch manifest is direct evidence of a functioning business model, cutting against the caution. Precision on one flight (option A) is still proof of concept; competitors failing (option C) and more entrants (option D) do not establish Skyroot's economics."
      }
    ]
  },
  {
    id: 12,
    title: "A Shot Against the Monsoon Fever",
    region: 'India',
    month: 'July 2026',
    event: "CDSCO approves Qdenga, India's first dengue vaccine, for ages 4 to 60 (21 July 2026)",
    sources: "The Hindu (21 July 2026): https://www.thehindu.com/sci-tech/health/cdsco-clears-recombinant-live-attenuated-dengue-vaccine-for-ages-4-to-60-years/article71247951.ece | PIB (21 July 2026): https://www.pib.gov.in/PressReleasePage.aspx?PRID=2286883&lang=1&reg=48",
    text: [
      `The drug regulator's approval of Qdenga on 21 July 2026 made India the latest and largest country to license a dengue vaccine, authorising Takeda's two-dose vaccine for everyone from age four to sixty, across all four viral serotypes. For a disease that India records in the hundreds of thousands of cases a year, and that every monsoon pushes through cities with near-perfect regularity, a licensed vaccine reads like a deliverance. The history of dengue immunisation, however, counsels a more careful reading: this is a virus that has humbled vaccine science before, and the distance between approval and impact is measured in epidemiology, not enthusiasm.`,
      `The scientific difficulty is the virus's structure. Dengue circulates as four distinct serotypes, and immunity to one does not protect against the others; worse, a first infection can render a second, with a different serotype, more severe through a mechanism called antibody-dependent enhancement, in which sub-neutralising antibodies help the virus enter cells. A vaccine that mimics an incomplete first infection risks priming recipients for worse disease, which is precisely what sank the world's first licensed dengue vaccine, restricted after evidence that it raised hospitalisation risk in those never previously infected. Qdenga's design, built on a dengue-2 backbone with elements of the other serotypes, was engineered to escape that trap, and its trials, conducted across endemic countries including India's neighbours, supported protection without that penalty.`,
      `Approval, though, is where public health questions begin. India already knows what its dengue control programme is: vector control, surveillance and seasonal exhortation, chronically outrun by urbanisation and the adaptability of Aedes aegypti. A vaccine does not replace that programme; it adds a layer whose value depends on coverage, cost and confidence. Each is uncertain. The vaccine's place in the immunisation schedule, its price in the private market where it will first appear, and public willingness to accept a new vaccine in a post-pandemic climate of hesitancy will determine whether July's approval becomes next decade's public-health success or another licensed intervention that never found its population.`,
      `The deeper significance may be regulatory. India's drug approval system, long criticised as either sluggish or supine, processed a complex, globally developed vaccine for the world's largest endemic burden with reasonable dispatch. If the same machinery now produces a credible rollout strategy, with surveillance strong enough to watch for the rare harms that only mass use reveals, the episode could mark a maturation in how India absorbs medical innovation. The vaccine's first approval is a headline. Its pharmacovigilance will be the story.`
    ],
    questions: [
      {
        q: "The passage suggests that antibody-dependent enhancement is dangerous because it:",
        options: [
          "prevents any vaccine from being developed against dengue",
          "allows partial immunity to worsen a subsequent infection rather than prevent it",
          "causes the virus to mutate into new serotypes",
          "makes the first dengue infection more severe than later ones"
        ],
        answer: 1,
        explanation: "The passage explains that sub-neutralising antibodies can help the virus enter cells, making a second infection with a different serotype more severe. It is a reason vaccine design is hard, not a reason vaccines are impossible, and it concerns second infections being worse."
      },
      {
        q: "Which of the following would most strengthen the author's cautious stance on the vaccine's likely impact?",
        options: [
          "Qdenga's trials demonstrated efficacy against all four serotypes",
          "In other countries, uptake of newly introduced adult and adolescent vaccines has frequently fallen short of the coverage needed to change disease burden",
          "India's urban population is projected to grow over the next decade",
          "Takeda has priced the vaccine competitively in Southeast Asian markets"
        ],
        answer: 1,
        explanation: "The author's caution rests on coverage, cost and confidence determining whether approval becomes impact. Evidence that new vaccine uptake often falls short of the threshold needed to change burden directly supports the caution. Trial efficacy (option A) and competitive pricing (option D) push the other way."
      },
      {
        q: "The author's tone toward the CDSCO's handling of the approval is best described as:",
        options: ["scornful", "appreciative of its dispatch, while reserving judgment on the rollout", "indifferent", "alarmed at its speed"],
        answer: 1,
        explanation: "The author describes the approval as processed with reasonable dispatch and calls it a potential maturation of regulatory machinery, while insisting the rollout and pharmacovigilance remain the real test."
      }
    ]
  },
  {
    id: 13,
    title: "The Deal That Lasted a Fortnight",
    region: 'International',
    month: 'June 2026',
    event: "US-Iran initial peace deal signed 17 June 2026; ceasefire collapses by early July",
    sources: "AP (17 June 2026): https://apnews.com/article/iran-us-israel-war-oil-deal-june-17-2026-19652f4611b704c0a991bf1f5bc9a4b9 | July collapse: Reuters/Al Jazeera reports, July 2026 (via Wikipedia Current Events Portal)",
    text: [
      `On 17 June 2026, in what both capitals described as an initial agreement to end their war, President Trump and President Pezeshkian signed a deal whose terms read like a wish list from each side's opening bid. Iran would dilute its stockpile of highly enriched uranium and reaffirm that it would not seek nuclear weapons; the United States would terminate all types of sanctions, immediately restoring Iran's freedom to sell oil; the Strait of Hormuz would reopen; and a three-hundred-billion-dollar reconstruction plan would follow. The hardest question, the permanent status of Iran's nuclear programme, was deferred to a further negotiation with a sixty-day clock. Within a fortnight, the United States was conducting fresh airstrikes, Iranian projectiles were falling on Bahrain and Kuwait, and Trump was declaring the ceasefire over while insisting that negotiations could continue.`,
      `The collapse should not have surprised anyone who has watched limited wars end in the missile age. The deal was not a settlement; it was an armistice drafted as a press release, trading Iran's most verifiable concession, the uranium stockpile, against America's most reversible one, sanctions that can be reimposed by signature. Each side therefore held an incentive to pocket the early gains and re-litigate the terms from a position of restored leverage. Iran, selling oil again, could afford brinkmanship over the nuclear file. The United States, having banked the diplomatic headline, could afford to enforce its interpretation by air. A bargain in which both parties retain the means and the motive to defect is not peace; it is a pause with good branding.`,
      `The deeper structural problem is that the war never had a shared object. For Washington, the conflict was about the nuclear programme; for Tehran, it was about regime survival and regional standing; for Israel, whose strikes on Lebanon continued through the ceasefire, it was about a different enemy altogether. Agreements that paper over incompatible war aims do not fail because of bad faith, though there was plenty of that. They fail because each signatory is answering a different question, and the document is silent on the questions that matter most. The sixty-day window for the nuclear file was not a detail; it was the whole negotiation, postponed.`,
      `What the episode does establish is the shape of the new normal: war and negotiation conducted simultaneously, in public, with markets pricing the oscillation in real time. Gold rose on reports of the deal's approach and fell back as it frayed; tanker insurance priced each communiqué. For the rest of the world, and especially for energy importers like India, the lesson is that the Hormuz risk premium is not an episode but a structural feature of the decade, to be managed rather than awaited out.`
    ],
    questions: [
      {
        q: "The author calls the June 17 agreement 'an armistice drafted as a press release' because:",
        options: [
          "it was never signed by both presidents",
          "its core exchange paired a verifiable Iranian concession with an easily reversible American one, leaving both sides free to defect",
          "the text was released to the media before being finalised",
          "it was written by public relations officials rather than diplomats"
        ],
        answer: 1,
        explanation: "The passage explains the phrase: Iran's concession was verifiable and banked, America's was reversible by signature, so each retained means and motive to re-litigate. The agreement was signed; the phrase is about incentive structure, not drafting process."
      },
      {
        q: "Which of the following is an assumption underlying the argument in paragraph 3?",
        options: [
          "Israel was a formal signatory to the June 17 agreement",
          "A durable peace agreement requires some resolution of the parties' underlying and divergent war aims",
          "Economic sanctions are always more effective than military action",
          "Iran never intended to honour the agreement from the outset"
        ],
        answer: 1,
        explanation: "Paragraph 3 argues the deal failed because each signatory was answering a different question and the document was silent on what mattered most. That argument assumes durable agreements must address the parties' fundamental aims. The passage does not claim Israel signed, does not compare sanctions with force, and blames structure rather than Iranian intent alone."
      },
      {
        q: "The author's advice to energy-importing countries like India is best summarised as:",
        options: [
          "await the final US-Iran nuclear settlement before making energy policy",
          "treat the Strait of Hormuz risk premium as a lasting condition to be managed, not a temporary episode",
          "stop importing oil from the Gulf entirely",
          "invest in gold as a hedge against geopolitical shocks"
        ],
        answer: 1,
        explanation: "The final sentence states the lesson explicitly: the Hormuz risk premium is a structural feature of the decade, to be managed rather than awaited out. Options A and C contradict the passage; option D confuses a market observation with advice."
      }
    ]
  },
  {
    id: 14,
    title: "The World's Most Expensive Thirty-Three Kilometres",
    region: 'International',
    month: 'July 2026',
    event: "Strait of Hormuz crisis: tankers struck, 6,000 seafarers stranded, shipping designated a warzone (July 2026)",
    sources: "Anadolu Agency/IMO (8 July 2026): https://www.aa.com.tr/en/economy/nearly-6-000-seafarers-stranded-in-gulf-as-hormuz-attacks-continue-imo/3990805 | OHCHR (24 July 2026): https://www.ohchr.org/en/press-briefing-notes/2026/07/stranded-hormuz-seafarers-abandoned-months-sea",
    text: [
      `In the first week of July 2026, a Qatari LNG tanker took projectile hits near the Strait of Hormuz and was left stranded off Oman; the International Maritime Organization's chief reported six thousand seafarers trapped in the waterway; and the shipping industry's own bodies renewed their designation of the strait as a warzone, a classification that doubles mariners' pay and prices their risk into every voyage. The strait, thirty-three kilometres across at its narrowest, was once again doing what it does every few years: reminding the world that a fifth of its traded oil and a third of its seaborne gas squeeze through a corridor one act of escalation away from closure.`,
      `The economics of chokepoints are poorly understood because they violate intuitions built on commodity markets. Oil is fungible, the textbooks say; a barrel not taken from the Gulf can be bought elsewhere. But the strait's leverage lies not in the oil itself but in the simultaneity. When flows through Hormuz are threatened, there is no alternative route for the volumes involved, no surge capacity in pipelines or alternative ports sufficient to substitute, and no inventory large enough to outwait a prolonged closure. The price response is therefore not proportional to the oil actually lost; it prices the possibility of loss, which is why tanker insurance and gold move before a single barrel fails to arrive.`,
      `The human layer of the crisis is easier to miss. The six thousand stranded seafarers are not abstractions of logistics; they are crews, largely from India, the Philippines and other labour-supplying countries, anchored in a declared warzone while diplomats negotiate over their heads. The industry's response, danger pay and designation protocols, is a rational market answer that also quietly concedes the point: the global economy insures the risk rather than removing it, and the insurance is paid, in part, by the people least able to refuse the voyage.`,
      `Strategically, the July crisis confirmed that Hormuz has become a recurring instrument rather than an exceptional one. Iran's calibrated harassment of shipping, matched by American escorts and strikes, is now a routine grammar of coercion, in which the strait is squeezed to extract concessions elsewhere and released to signal goodwill. Insurance markets priced the lesson before governments absorbed it: war-risk premiums for Gulf transits, which had settled after earlier crises, quadrupled within weeks and stayed elevated after the strait reopened, a standing tax on every barrel and container that no diplomatic communique could rebate. For importing nations, the implication is uncomfortable: the premium is structural, diversification is a decade-long project, and the thirty-three kilometres will set the price of their complacency, every year, until the alternatives exist.`
    ],
    questions: [
      {
        q: "According to the passage, the Strait of Hormuz's economic leverage derives mainly from:",
        options: [
          "the superior quality of Gulf crude",
          "the absence of any timely substitute for the simultaneous volume of oil and gas that passes through it",
          "Iran's legal sovereignty over the entire waterway",
          "the high insurance premiums charged in the Gulf region"
        ],
        answer: 1,
        explanation: "The passage argues that because there is no alternative route, surge capacity or inventory adequate for the simultaneous volumes at risk, prices move on the possibility of loss. Quality, sovereignty and premiums are not the mechanism described."
      },
      {
        q: "Which of the following, if true, would most weaken the author's claim that the Hormuz risk premium is structural?",
        options: [
          "Gold prices fell sharply when the June 17 deal was announced",
          "A newly commissioned pipeline network carries the majority of Gulf crude exports to ports outside the strait",
          "Mariners' unions have demanded triple pay for Hormuz transits",
          "The United States has increased its naval presence in the Gulf"
        ],
        answer: 1,
        explanation: "The structural-premium claim rests on the lack of alternative routes for Gulf volumes. A pipeline network moving most exports outside the strait would remove precisely that condition. Falling gold on deal news (option A) shows sensitivity, not structure's absence; options C and D do not address the supply-route claim."
      },
      {
        q: "The author's discussion of stranded seafarers serves primarily to:",
        options: [
          "argue that seafaring should be automated to remove humans from warzones",
          "show that the costs of the crisis are socialised onto workers least able to refuse them",
          "criticise the International Maritime Organization for inaction",
          "demonstrate that India and the Philippines should withdraw their nationals from Gulf shipping"
        ],
        answer: 1,
        explanation: "The passage uses the seafarers to make the distributional point that the market insures the risk rather than removing it, and the insurance is paid partly by those least able to refuse the voyage. No policy prescription about automation or withdrawal is made."
      }
    ]
  },
  {
    id: 15,
    title: "The Maestro and the Myth of the Omniscient Central Banker",
    region: 'International',
    month: 'June 2026',
    event: "Alan Greenspan, Federal Reserve chairman 1987-2006, dies at 100 (22 June 2026)",
    sources: "Reuters (22 June 2026): https://www.reuters.com/world/us/alan-greenspan-economist-longtime-head-federal-reserve-dies-100-nbc-news-reports-2026-06-22/ | BBC (22 June 2026): https://www.bbc.com/news/articles/cjer7x7yl12o",
    text: [
      `Alan Greenspan, who died on 22 June 2026 at the age of a hundred, chaired the United States Federal Reserve for nearly two decades, through the crash of 1987, the long boom of the 1990s, the dot-com bust and the gathering of the storm that broke two years after he left office. For much of that tenure he was treated, in the phrase that became biography, as the Maestro: the central banker whose eyebrow could move markets and whose Delphic testimony was parsed like scripture. His death closes the life of the most consequential monetary policymaker of the modern era, and reopens the argument his career never settled.`,
      `The case for Greenspan is the case for the Great Moderation. He inherited a Federal Reserve still proving its anti-inflation credentials and bequeathed one whose credibility was so complete that inflation expectations barely moved through wars, shocks and booms. He understood, earlier than most economists, that productivity growth from information technology had changed the economy's speed limit, and he resisted tightening against that insight, to the benefit of millions of workers. His handling of the 1987 crash, supplying liquidity against panic, wrote the playbook that successors used in 2008 and 2020.`,
      `The case against him is that the playbook became a permission slip. The 'Greenspan put', the market's conviction that the Fed would always cushion asset prices, taught a generation of financiers that risk was underwritten. His faith in the self-correcting capacity of financial markets, which he maintained with the serenity of ideology, left derivatives and mortgage securitisation unsupervised in the years when supervision mattered most. And his famous concession before Congress in 2008, that he had found a flaw in the model of how the world works, was both intellectually honourable and an indictment: the flaw had been visible, and pointed out, for years, to those not committed to overlooking it.`,
      `The honest verdict is that Greenspan's career is less a personal story than a parable about central banking itself. The institution demands that one committee, armed with imperfect data and one blunt instrument, steer an economy of hundreds of millions of agents. Periods of success breed the belief that the steersman sees the road; Greenspan's era bred that belief more than any other. The twenty-first century has punished it repeatedly. To remember the Maestro accurately is to hold both truths: that credibility is a central bank's only real capital, and that the moment it is mistaken for omniscience, the capital is already being spent.`
    ],
    questions: [
      {
        q: "The 'Greenspan put', as described in the passage, refers to:",
        options: [
          "an option contract Greenspan personally traded",
          "the market's belief that the Federal Reserve would intervene to support asset prices in a downturn",
          "Greenspan's policy of raising interest rates pre-emptively",
          "a congressional act that guaranteed bank deposits"
        ],
        answer: 1,
        explanation: "The passage defines it as the market's conviction that the Fed would always cushion asset prices, which taught financiers that risk was underwritten. It is a metaphor from options trading, not an actual contract."
      },
      {
        q: "Which of the following, if true, would most weaken the criticism that Greenspan's oversight philosophy contributed to the 2008 crisis?",
        options: [
          "Greenspan publicly acknowledged a flaw in his ideological model in 2008",
          "The Federal Reserve lacked statutory authority over the mortgage securitisation practices most implicated in the crisis",
          "Inflation remained low throughout Greenspan's tenure",
          "Several European central banks adopted similar light-touch approaches"
        ],
        answer: 1,
        explanation: "The criticism presumes the Fed could and should have supervised the relevant practices. Showing it lacked statutory authority over them undercuts the attribution of blame. The concession (option A) is consistent with the criticism; low inflation and foreign imitation do not address the oversight claim."
      },
      {
        q: "The 'parable about central banking' the author draws from Greenspan's career is that:",
        options: [
          "central banks should be abolished in favour of rules-based policy",
          "credibility is essential, but mistaking it for omniscience destroys it",
          "only economists with market experience should lead central banks",
          "inflation targeting is the sole defensible monetary framework"
        ],
        answer: 1,
        explanation: "The final paragraph states both truths: credibility is a central bank's only real capital, and mistaking it for omniscience spends that capital. The author does not recommend abolition, staffing criteria, or a specific framework."
      }
    ]
  },
  {
    id: 16,
    title: "The King of the North Moves South",
    region: 'International',
    month: 'July 2026',
    event: "Andy Burnham becomes Prime Minister of the United Kingdom (19-20 July 2026)",
    sources: "Reuters (17-20 July 2026): https://www.reuters.com/world/uk/defeat-downing-street-rise-fall-return-andy-burnham-2026-07-17/ | BBC (20 July 2026): https://www.bbc.co.uk/news/articles/c80nln7zgp7o",
    text: [
      `Andy Burnham's arrival in Downing Street in July 2026, vowing to rewire Britain and end years of instability, completed one of the more unlikely journeys in modern British politics. A cabinet minister of the New Labour era, twice defeated for the party leadership, Burnham had rebuilt himself as Mayor of Greater Manchester, the 'King of the North', governing a city-region with an authority and an approval that Westminster's denizens could only envy. That a politician exiled from national office returned to claim its summit, on the back of Keir Starmer's collapse, says as much about the condition of British government as about the man.`,
      `Burnham's appeal rests on a paradox he has cultivated carefully: he is simultaneously the insurgent and the institution. To northern voters, he is the mayor who fought London for their buses and their hospitals, who made devolution feel like delivery rather than an administrative experiment. To a Labour establishment that had lost its compass, he offers what neither the party's left nor its centrists could supply: a credible story about place, told in an accent that does not sound like a focus group. His promise to end instability is audacious precisely because British politics has produced five prime ministers in a decade; the country is exhausted by its own churn, and exhaustion is a powerful electoral argument for anyone plausible.`,
      `The governing problem he inherits is that the sources of instability are structural, not personal. Britain's productivity has stagnated since 2008; its public services are rationed by waiting list; its devolution settlement is a half-built house, powerful mayors in England's cities bolted onto the most centralised fiscal system in the developed world. Burnham's own record suggests he understands this: his decade in Manchester was an extended argument that places cannot be governed well from desks in Whitehall. But a prime minister who believes in devolution must now decide whether to give away powers that prime ministers, once in office, have historically discovered reasons to retain.`,
      `The precedent to watch is not Burnham's mayoralty but the fate of every leader who has promised to end an era of chaos. Stability is a property of institutions and economics, not of personalities, and the forces that consumed his predecessors, fiscal constraint, a fragmented electorate, an unforgiving media cycle, have not retired with Starmer. The King of the North has moved south. The question that will define his government is whether he means to govern the centre as he governed Manchester, by distributing power, or whether the centre will govern him, as it has everyone else.`
    ],
    questions: [
      {
        q: "The author describes Burnham as 'simultaneously the insurgent and the institution' because he:",
        options: [
          "has never held elected office before becoming prime minister",
          "combines an anti-Westminster, place-based appeal with establishment credentials from the New Labour era",
          "plans to abolish the monarchy while serving as prime minister",
          "leads a party that has never been in government"
        ],
        answer: 1,
        explanation: "The passage grounds the paradox in his dual identity: a New Labour cabinet minister who rebuilt himself as a northern devolutionist fighting London. The other options contradict the passage."
      },
      {
        q: "Which of the following is an assumption in the argument that 'exhaustion is a powerful electoral argument for anyone plausible'?",
        options: [
          "British voters prefer charismatic leaders to competent ones",
          "Voters weary of political churn will respond favourably to a credible promise of stability",
          "Burnham is the only plausible leader in British politics",
          "Keir Starmer's collapse was caused by foreign policy failures"
        ],
        answer: 1,
        explanation: "The argument links the country's exhaustion with churn to the potency of Burnham's promise, assuming that weary voters reward a credible offer of stability. It does not assume he is the only plausible leader or anything about the cause of Starmer's fall."
      },
      {
        q: "The author's view of Burnham's promise to 'end years of instability' is best described as:",
        options: [
          "confident that he will succeed where his predecessors failed",
          "sceptical, on the grounds that instability is produced by structural forces that outlast personalities",
          "dismissive of the promise as meaningless rhetoric",
          "supportive, because his mayoral record proves he can deliver it"
        ],
        answer: 1,
        explanation: "The author calls the promise audacious and stresses that stability is a property of institutions and economics, not personalities, with the forces that consumed his predecessors still active. That is scepticism about the promise, while crediting his record, so option B fits better than option C."
      }
    ]
  },
  {
    id: 17,
    title: "A Ceasefire Measured in Hours",
    region: 'International',
    month: 'May 2026',
    event: "A three-day Russia-Ukraine ceasefire is punctured by drone strikes on Kharkiv (8-9 May 2026)",
    sources: "Kyiv Independent (9 May 2026): https://kyivindependent.com/russian-drone-strikes-apartment-building-in-kharkiv-less-than-24-hours-into-ceasefire/ | RBC-Ukraine (9 May 2026): https://newsukraine.rbc.ua/news/russia-hits-ukrainian-kharkiv-amid-ceasefire-1778359821.html",
    text: [
      `The announcement, in early May 2026, of a three-day ceasefire between Russia and Ukraine was received with the scepticism that four years of war have taught even the hopeful. It took less than a day to vindicate: the governor of Kharkiv Oblast reported a Russian drone striking a residential building as the truce began. The episode was minor against the war's ledger of destroyed cities, but it crystallised the conflict's current phase, in which ceasefires function less as steps toward peace than as instruments of the fighting itself.`,
      `Short truces in long wars serve purposes that have little to do with ending them. They allow ammunition to be moved, positions to be re-surveyed, conscripts to be rotated and international opinion to be managed. For the side with the deeper arsenal, a pause is a logistical gift; for the side dependent on external supply, it is an opportunity to plead its case in the capitals where its survival is budgeted. Both Moscow and Kyiv have learned to perform receptiveness to negotiation as a form of competitive diplomacy, aimed less at each other than at Washington, Brussels and Beijing. The drone over Kharkiv was not an aberration from the ceasefire; it was a message sent within it.`,
      `The war's material logic has also settled into something durable and grim. Russia's strategy of attrition, trading shells and drones for Ukrainian lives, territory and morale, depends on outlasting a coalition whose members must re-ratify their support through their own electoral cycles. Ukraine's strategy of survival depends on converting Western matériel into enough cost imposed on Russia to make the war's continuation a choice Moscow regrets. Neither strategy is designed to produce a decisive year; both are designed to produce a tolerable stalemate. The result is a conflict that neither escalates nor resolves, punctuated by truces whose brevity is itself a datum.`,
      `For European security, the meaning of Kharkiv is that the planning horizon has changed. A war once discussed in terms of victory and defeat is now discussed in terms of management: of borders that will not soon be recognised, of rearmament programmes that assume a hostile Russia for a generation, and of an American guarantee whose reliability is a subject of open doubt in European capitals. Three days was never going to be enough to end such a war. Its real function was to show everyone, once more, what kind of war it has become.`
    ],
    questions: [
      {
        q: "The author argues that short ceasefires in the Russia-Ukraine war primarily serve to:",
        options: [
          "build momentum toward a comprehensive peace settlement",
          "allow both sides to regroup logistically and to perform willingness to negotiate for outside audiences",
          "protect civilians in contested cities",
          "test each side's military readiness for escalation"
        ],
        answer: 1,
        explanation: "Paragraph 2 describes truces as logistical gifts and as competitive diplomacy aimed at Washington, Brussels and Beijing. The author explicitly denies they are steps toward peace; civilian protection and readiness-testing are not the functions described."
      },
      {
        q: "Which of the following best captures the meaning of the claim that the drone strike 'was not an aberration from the ceasefire; it was a message sent within it'?",
        options: [
          "The strike was accidental and unrelated to the truce",
          "Violations are part of how the parties negotiate and signal resolve during truces",
          "Ukraine staged the strike to discredit Russia",
          "The ceasefire was never formally agreed"
        ],
        answer: 1,
        explanation: "The sentence argues that strikes during truces are instrumental signalling within the negotiation process, not departures from it. The passage supports only this reading; options A, C and D introduce claims it does not make."
      },
      {
        q: "Which of the following, if true, would most strengthen the author's claim that both strategies are designed to produce 'a tolerable stalemate'?",
        options: [
          "Neither side has altered its declared territorial demands in over a year",
          "Russian forces capture a major city in a surprise offensive",
          "Ukraine's parliament passes a law banning negotiations with Russia",
          "European governments announce new ten-year rearmament programmes"
        ],
        answer: 0,
        explanation: "A year of frozen demands is consistent with both sides settling into management rather than resolution. A major Russian breakthrough (option B) would undercut the stalemate claim; the other options concern single actors and do not bear on both strategies."
      }
    ]
  },
  {
    id: 18,
    title: "The Sahel's Slow Unravelling",
    region: 'International',
    month: 'May 2026',
    event: "JNIM militants overrun a base near Tessalit abandoned by Malian troops and Russia's Africa Corps (May 2026)",
    sources: "AP (1 May 2026): https://apnews.com/article/rebels-mali-capture-tessalit-azawad-liberation-front-ad322075647daeda4332d71e1a102631 | France 24 (1 May 2026): https://www.france24.com/en/tessalit-army-base-taken-by-rebels",
    text: [
      `In May 2026, fighters of Jama'at Nusrat al-Islam wal-Muslimin, al-Qaeda's Sahelian affiliate, took over a military base outside Tessalit in Mali's Kidal region after it was abandoned by Malian troops and Russia's Africa Corps, and called on Malians to rise against the junta and impose sharia law. A remote base changing hands in the desert is easy to dismiss as a skirmish. It is better read as a marker of one of the least covered and most consequential strategic retreats of the decade: the failure, in sequence, of France, the United Nations and now Russia to hold the Sahel.`,
      `The pattern rewards attention because it refutes the idea that the problem was the intervenor. France's decade-long Operation Barkhane killed militant leaders by the score and lost the country anyway, expelled by a junta that promised Russia would succeed where Paris had failed. The Wagner Group, and its successor Africa Corps, arrived with fewer scruples and no better results: the insurgency has spread from Mali's north into its centre and south, into Burkina Faso and Niger, and toward the coastal states of West Africa, which now face infiltration their armies are not built to repel. The base at Tessalit, abandoned rather than lost in battle, is the perfect emblem: the state's presence is not being defeated so much as evaporating.`,
      `What the jihadists understand, and their opponents repeatedly forget, is that they are not fighting for territory but for governance. JNIM and its rivals embed in the gaps the state has left, arbitrating disputes, taxing trade, punishing and protecting, until the population's relationship with the insurgency is older and more reliable than its relationship with Bamako. Military operations that kill fighters without contesting that governance are mowing grass. The junta's wager that foreign firepower could substitute for political reconstruction has now been made twice, with two different patrons, and has failed the same way twice.`,
      `The implications extend well beyond Mali. A jihadist-governed Sahel would sit astride migration routes to Europe, uranium and gold supply chains, and the soft underbelly of West Africa's coastal democracies, whose stability underwrites a quarter-billion people's economies. The junta's legitimacy rests on a promise of restored security it cannot keep; each lost base narrows the territory it administers while widening the zone from which the insurgency draws recruits, a self-defeating arithmetic that military rule has repeated across the region for a decade. The international response, having run through French counter-terrorism, UN peacekeeping and Russian mercenaries, is now out of theories and short of attention, as the world's security bandwidth is consumed by larger wars. Tessalit is what a region looks like when it falls off the agenda.`
    ],
    questions: [
      {
        q: "The author's primary purpose in discussing the sequence of French, UN and Russian interventions is to:",
        options: [
          "rank the three intervenors by military effectiveness",
          "show that the Sahel's collapse reflects a failure of political strategy common to all intervenors, not the choice of patron",
          "argue that only an African-led intervention can succeed",
          "demonstrate that jihadist groups cannot be defeated militarily anywhere"
        ],
        answer: 1,
        explanation: "The passage stresses that the junta made the same wager with two patrons and failed the same way twice, because firepower cannot substitute for governance. The author does not rank patrons, prescribe an African-led force, or make a universal claim about defeating jihadists."
      },
      {
        q: "The phrase 'mowing grass' (paragraph 3) implies that counter-insurgency operations in the Sahel:",
        options: [
          "are conducted mostly in agricultural areas",
          "suppress the insurgency temporarily without addressing the conditions that regenerate it",
          "have permanently reduced the militants' ranks",
          "are too infrequent to matter"
        ],
        answer: 1,
        explanation: "The metaphor describes killing fighters while leaving the alternative governance untouched, so the problem regrows. It is about the futility of force without political contest, not frequency, terrain, or permanent reduction."
      },
      {
        q: "Which of the following is an assumption behind the author's claim that insurgents are 'fighting for governance'?",
        options: [
          "Populations under insurgent influence weigh the reliability of order and services, not only ideology, in choosing allegiance",
          "The Malian state has never provided any services in the north",
          "JNIM's long-term goal is to contest national elections",
          "Foreign governments are unaware of the insurgents' methods"
        ],
        answer: 0,
        explanation: "The governance claim rests on the idea that arbitration, taxation and protection build durable allegiance more than ideology does. The passage does not claim the state never served the north, that JNIM seeks elections, or that foreign capitals are ignorant."
      }
    ]
  },
  {
    id: 19,
    title: "Forty-Eight Teams and One Reckoning",
    region: 'International',
    month: 'July 2026',
    event: "Spain win the 2026 FIFA World Cup, beating Argentina 1-0 in the final on 19 July 2026",
    sources: "FIFA (19 July 2026): https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/spain-argentina-final-report-highlights | AP (19 July 2026): https://apnews.com/article/argentina-spain-world-cup-final-score-messi-fccc26aa12d9226e63d06b601b770617",
    text: [
      `When Spain lifted the World Cup at MetLife Stadium on 19 July 2026, having edged Argentina 1-0 in extra time, the tournament closed with an image engineered for history: Lionel Messi, in tears at the end of his last World Cup, passing the crown to a Spanish side that had controlled the final with the patience of a team playing a different century's football. Spain's second title was deserved on the football. But the 2026 World Cup will be remembered less for its football than for what it revealed about the collision between the world's game and the politics of its richest host.`,
      `The expanded 48-team format, FIFA's bet that more is more, delivered its promise of novelty: Egypt reached a knockout round for the first time, and the early weeks produced the democratic carnival the format's architects promised. It also produced the predictable dilution, dead rubbers and mismatches, and a 104-match sprawl that tested the attention even of devotees. The commercial verdict, measured in broadcast and sponsorship income, will be declared a triumph; the sporting verdict is more equivocal, and the two verdicts' divergence is the story of modern football's governance.`,
      `The tournament's sharper legacy, though, is political. The United States denied visas to members of several national delegations, converting the border into a selection instrument; and the president's personal intervention to overturn a suspension for an American forward, the first such reversal in the history of FIFA's automatic sanction system, collapsed any pretence that the game's rules stand above the host's politics. FIFA, which has spent decades insisting that government interference in football is grounds for expulsion, found in 2026 that the principle is negotiable when the interfering government is the one writing the cheques. The lesson was not lost on football's smaller nations, who are routinely sanctioned for far less.`,
      `What remains is the paradox that keeps the World Cup intact. The expansion to forty-eight teams was dismissed in advance as dilution, and the group stage obliged with a run of one-sided fixtures; yet the knockouts produced a density of close contests that quieted much of the criticism, and the final itself stayed scoreless until the hundred and sixth minute. For four weeks the tournament demonstrated, at unprecedented scale, both the corruption of international sport by power and the thing that survives the corruption: a final played by twenty-two athletes that a billion people watched with their breath held. Spain were worthy champions; Messi's tears were real. Whether the institution that owns those moments can remain worthy of them is the question 2026 leaves to 2030.`
    ],
    questions: [
      {
        q: "The author's attitude toward the 48-team expansion is best described as:",
        options: [
          "wholly celebratory of its inclusiveness",
          "acknowledging its inclusive gains while questioning its sporting costs",
          "demanding a return to a 16-team format",
          "indifferent to the format's effects"
        ],
        answer: 1,
        explanation: "The passage credits the format with novelty and a democratic carnival while noting dilution, dead rubbers and sprawl, and calls the commercial and sporting verdicts divergent. That is qualified assessment, not celebration, rejection, or indifference."
      },
      {
        q: "The author cites the overturning of the American forward's suspension primarily to argue that:",
        options: [
          "FIFA's disciplinary code is too rigid and needs reform",
          "the principle that football is insulated from government interference was subordinated to the host's power",
          "the United States was unfairly favoured by referees throughout the tournament",
          "Article 27 of the disciplinary code should be abolished"
        ],
        answer: 1,
        explanation: "The passage presents the reversal as the collapse of FIFA's pretence that its rules stand above the host's politics, noting the double standard applied to smaller nations. The author is not arguing about the code's rigidity, refereeing, or abolition."
      },
      {
        q: "Which of the following, if true, would most weaken the author's suggestion that visa denials politicised the tournament?",
        options: [
          "Visa denials for sports delegations have occurred at previous World Cups hosted by other countries",
          "All denied delegation members were later shown to have failed standard, pre-existing security screening applied uniformly to all visitors",
          "The denied delegations' teams all advanced further than expected",
          "FIFA fined the United States for the denials"
        ],
        answer: 1,
        explanation: "The author's charge is that the border was used as a selection instrument. If the denials were the product of uniformly applied pre-existing screening, the charge of political conversion loses its basis. Prior occurrence elsewhere (option A) does not rebut the claim about 2026's effect; options C and D are beside the point."
      }
    ]
  },
  {
    id: 20,
    title: "Two Hundred and Fifty Years of an Argument",
    region: 'International',
    month: 'July 2026',
    event: "The United States marks the Semiquincentennial of the Declaration of Independence (4 July 2026)",
    sources: "PBS NewsHour (4 July 2026): https://www.pbs.org/newshour/nation/fireworks-heat-hot-dogs-and-politics-america-celebrates-its-250th-birthday | America250: https://250.gov/celebration/salute-to-america-250-celebration-and-fireworks",
    text: [
      `On 4 July 2026, the United States celebrated the two-hundred-and-fiftieth anniversary of the Declaration of Independence with the full inventory of American ritual: parades, fleet weeks, presidential oratory, and fireworks over the Mall. Semiquincentennial is an ugly word for an awkward occasion. The republic that turned 250 in 2026 is wealthier and more powerful than any state in history, and is simultaneously engaged in a rolling argument, conducted in its courts, its campuses and its streets, about whether the promises of 1776 were achievements, aspirations or advertisements.`,
      `Anniversaries of this kind are never really about the past. The Bicentennial of 1976 arrived in the wake of Vietnam and Watergate, and functioned as a collective decision to feel better; its planners understood that the point was reconciliation, not history. The Sesquicentennial of 1926, staged under Coolidge, was a complacent pageant for a country that believed its questions answered. Each commemoration tells the celebrants who they are by selecting which founders, which wars and which wrongs are admitted to the official story, and 2026's observances were no exception, contested in advance by those who wanted the anniversary to be a festival of the founding and those who wanted it to be a reckoning with the founding's exclusions.`,
      `The honest difficulty is that the Declaration contains both truths without resolution. The claim that all men are created equal was written by a slaveholder and has functioned, ever since, as both the republic's founding hypocrisy and its most effective instrument of self-correction: the sentence to which abolitionists, suffragists and civil-rights marchers all appealed against the republic's own practice. A nation that celebrates the sentence while editing out the struggle over it has learned nothing; one that reduces the sentence to the struggle has forgotten why the struggle won.`,
      `What the 250th actually measured, beneath the pageantry, is the country's remaining confidence in its own continuity. The commemoration itself was choreographed to avoid the argument: military pageantry on the Mall, a presidential address heavier on destiny than on history, and rival observances in Philadelphia that read the founding documents as an indictment of the present rather than a celebration of the past. Polls taken around the anniversary found Americans prouder of their country's past than persuaded of its future, and the gap between those two sentiments is the real state of the union. Empires do not usually fall at their anniversaries; they merely discover, in the effort of celebration, how much of the original conviction is left. The fireworks were spectacular. The argument they briefly illuminated is the more durable inheritance.`
    ],
    questions: [
      {
        q: "The author's claim that the Declaration's central sentence was 'both the republic's founding hypocrisy and its most effective instrument of self-correction' rests on the assumption that:",
        options: [
          "the founders intended the sentence to apply to enslaved people",
          "an ideal that a society fails to live up to can still be wielded by its members to force reform",
          "hypocrisy is always politically productive",
          "the abolition of slavery was inevitable once the Declaration was signed"
        ],
        answer: 1,
        explanation: "The passage describes how abolitionists and civil-rights marchers appealed to the sentence against the republic's practice, which assumes an unrealised ideal can still be an effective reform instrument. The author does not claim original intent, a general law about hypocrisy, or inevitability."
      },
      {
        q: "The comparison of the 1976 and 1926 commemorations serves primarily to:",
        options: [
          "show that American anniversaries have always been politically controversial",
          "illustrate that commemorations function as statements about the present, selecting what the nation wants to believe about itself",
          "prove that the Bicentennial was more successful than the Sesquicentennial",
          "argue that anniversaries should be abolished"
        ],
        answer: 1,
        explanation: "The two prior anniversaries are used to support the claim that such occasions are never really about the past: 1976 sought reconciliation, 1926 expressed complacency. Controversy (option A) is not the point made about both."
      },
      {
        q: "Which of the following, if true, would most weaken the author's closing suggestion about a gap between pride in the past and confidence in the future?",
        options: [
          "Attendance at the 2026 celebrations exceeded all forecasts",
          "In the same polling, large majorities of young Americans said they expected their country to be stronger in 2076 than it is today",
          "The fireworks display was the largest in the nation's history",
          "Foreign leaders sent congratulatory messages for the anniversary"
        ],
        answer: 1,
        explanation: "The author's closing claim rests on polling that found pride in the past exceeding belief in the future. Polling showing the young strongly expect a stronger future directly contradicts the gap. Attendance and fireworks do not measure the sentiment in question."
      }
    ]
  },
  {
    id: 21,
    title: "Ankara: The Alliance Hears the Unthinkable",
    region: 'International',
    month: 'July 2026',
    event: "At the Ankara NATO summit, Trump renews his push to acquire Greenland and floats removing US troops from Europe (July 2026)",
    sources: "CNBC (7 July 2026): https://www.cnbc.com/2026/07/07/trump-nato-summit-greenland-us-troops-europe.html | Reuters (8 July 2026): https://www.reuters.com/business/aerospace-defense/nato-leaders-meet-ankara-after-trump-rekindles-disputes-over-iran-greenland-2026-07-08/",
    text: [
      `NATO summits are choreographed to produce photographs of unity, and the Ankara summit of July 2026 will be remembered for the moment the choreography failed. President Trump used the occasion to renew his call for the United States to take control of Greenland, an autonomous territory of Denmark, a founding NATO member, and to suggest that American troops could be withdrawn from Europe over the dispute. The prime ministers of Greenland and Denmark replied that the island is not for sale. An alliance built on the premise that an attack on one is an attack on all spent its summit contemplating the spectacle of its leading member applying territorial pressure on one of its own.`,
      `The Greenland obsession is usually reported as eccentricity, which is a mistake. The island sits astride the shortest polar routes between North America and Europe, hosts the early-warning infrastructure of American missile defence, and holds rare earth deposits whose value rises with every year of the minerals race. A strategist can construct a perfectly rational case for why Washington covets it. What is not rational is the method: treating an ally's territory as an acquisition target converts a legitimate strategic interest into a test of alliance loyalty, and tests of loyalty, once administered, are failed by definition, because they announce that the guarantor's protection has become conditional.`,
      `That conditionality is the summit's real legacy. NATO's deterrence has never rested primarily on troop numbers; it rests on the adversary's belief that Article 5 would be honoured automatically. Every signal that the guarantee is negotiable, contingent on purchases, payments or territorial indulgence, subtracts from that belief without adding a single soldier. European governments, which have spent years being lectured about burden-sharing, heard in Ankara something different: not a demand that they pay more for the common defence, but a suggestion that the common defence itself is a service that can be withdrawn.`,
      `The probable consequence is already visible in outline: a Europe that begins, seriously and at last, to plan for a security order in which the American guarantee is a variable rather than a constant. That is not the end of NATO, whose machinery and habits will grind on. It is something quieter and more significant: the beginning of the end of the assumption on which the post-1945 West was built. Alliances rarely die in dramatic ruptures. They die when their members start hedging, and Ankara gave every finance ministry in Europe a reason to start.`
    ],
    questions: [
      {
        q: "The author argues that tests of loyalty 'are failed by definition' because:",
        options: [
          "allies always refuse such tests on principle",
          "administering the test itself announces that the guarantor's protection is conditional, eroding the deterrence it was meant to prove",
          "Denmark is too small to satisfy American demands",
          "NATO's founding treaty forbids loyalty tests"
        ],
        answer: 1,
        explanation: "The passage's logic is self-referential: making protection conditional on a test destroys the automaticity on which deterrence rests, regardless of the test's outcome. It is not about Danish capacity, allied principle, or treaty text."
      },
      {
        q: "Which of the following would most weaken the author's claim that the Ankara summit subtracted from deterrence?",
        options: [
          "Russia reduced its military exercises near NATO borders in the months following the summit",
          "European defence spending rose after the summit",
          "Greenland's government offered the United States expanded basing rights while refusing any sale",
          "American public opinion strongly supports remaining in NATO"
        ],
        answer: 2,
        explanation: "If Greenland offered expanded basing, Washington's underlying strategic interest could be met through ordinary alliance cooperation, undercutting the claim that the episode signalled conditional protection with deterrent costs. Fewer Russian exercises (option A) is consistent with many causes; higher European spending (option B) is exactly the hedging the author predicts; opinion polls (option D) do not address allied perception."
      },
      {
        q: "It can be inferred that the author views European 'burden-sharing' demands as:",
        options: [
          "wholly illegitimate pressure on sovereign states",
          "distinct from, and less destabilising than, the suggestion that the American guarantee itself can be withdrawn",
          "the main cause of NATO's decline",
          "a pretext invented at the Ankara summit"
        ],
        answer: 1,
        explanation: "The author contrasts years of burden-sharing lectures with the new and more corrosive suggestion that the guarantee is a withdrawable service. The first is old pressure; the second is the novel danger. The author does not call burden-sharing illegitimate or a pretext."
      }
    ]
  },
  {
    id: 22,
    title: "Fifty Percent: The Unravelling of North America",
    region: 'International',
    month: 'July 2026',
    event: "The US imposes additional 50% tariffs on Canadian goods; Carney vows to intensify trade talks (20 July 2026)",
    sources: "Reuters (20 July 2026): https://www.reuters.com/business/us-imposes-new-50-tariffs-canadian-products-2026-07-20/ | AP (20 July 2026): https://apnews.com/article/trump-canada-50-tariff-autos-alcohol-cheese-ca268ef24992b16695954c4c2e5eae6a",
    text: [
      `On 20 July 2026, President Trump signed proclamations under Section 338 of the Tariff Act of 1930 imposing additional 50 percent tariffs on a swathe of Canadian goods, citing Canada's discriminatory treatment of American products. Ottawa's new government under Mark Carney responded with restrained fury and a vow to intensify trade talks. The number deserves a pause: fifty percent is not a negotiating tariff but a wall, and it was erected against the United States' largest customer, closest ally and partner in the most integrated bilateral economic relationship on earth.`,
      `The legal instrument chosen tells its own story. Section 338 is a Depression-era authority, a relic of the Smoot-Hawley period that empowers the president to penalise countries deemed to discriminate against American commerce, and its resurrection is part of a broader pattern in which the tools of the 1930s are dusted off to dismantle the order built to repudiate them. The tariff is less a trade measure than a constitutional one: it asserts that the executive, citing discrimination it has defined for itself, can restructure a continental economy by proclamation, with the courts and Congress left to catch up.`,
      `The economic logic is no sounder than the legal architecture is novel. The United States and Canada do not merely trade with each other; they manufacture together, with automotive and energy supply chains crossing the border half a dozen times before a product is finished. A 50 percent tariff on Canadian goods is, in large part, a tax on American producers' inputs and American consumers' purchases, and its incidence will fall predictably on the border states and industrial Midwest whose workers it is advertised to protect. Retaliation, when it matures, will be targeted at the constituencies least able to absorb it, as Canadian countermeasures have been designed to be for a decade.`,
      `The deeper casualty is the concept of a North American economic space. The USMCA, renegotiated in Trump's first term as the model for managed trade, has been reduced in practice to a document both sides cite and neither relies on. Canada has already signalled its long-term answer: diversification toward Europe and Asia, energy and minerals diplomacy with other buyers, and the slow uncoupling of a relationship that took eighty years to build. Tariffs can be lifted by the next signature. The discovery by Canadians that their largest market is an unreliable one cannot be unlearned, and that discovery, not the duty rate, is the durable legacy of July 2026.`
    ],
    questions: [
      {
        q: "The author describes the 50% tariff as 'less a trade measure than a constitutional one' because it:",
        options: [
          "was authorised by a constitutional amendment",
          "asserts sweeping executive power over the economy by proclamation, marginalising Congress and the courts",
          "violates the Canadian constitution",
          "was immediately struck down by the Supreme Court"
        ],
        answer: 1,
        explanation: "The passage's point is about the balance of power within the US system: the executive restructures a continental economy by proclamation while other branches catch up. No amendment, Canadian constitution, or court ruling is involved."
      },
      {
        q: "Which of the following is an assumption in the argument that the tariff will burden the very workers it is advertised to protect?",
        options: [
          "American workers do not support the tariff",
          "Border-state and Midwestern economies are deeply integrated with Canadian supply chains, so tariffs on Canadian goods raise their costs",
          "Canada will not retaliate against the tariffs",
          "The automotive industry is headquartered in the Midwest"
        ],
        answer: 1,
        explanation: "The argument's mechanism runs through integrated supply chains raising input and consumer costs in precisely those regions. The passage does not claim to know workers' opinions, rules out retaliation (it predicts it), or need the location of headquarters."
      },
      {
        q: "The author's central warning about the long-term consequence of the tariffs is that:",
        options: [
          "Canada will default on its sovereign debt",
          "the tariffs can never be legally reversed",
          "Canada's strategic discovery that its largest market is unreliable will outlast any removal of the duties",
          "the USMCA will be formally terminated within the year"
        ],
        answer: 2,
        explanation: "The final paragraph distinguishes the reversible instrument from the irreversible lesson: Canada's diversification and uncoupling. Default, permanence of the tariffs, and formal termination are not claimed."
      }
    ]
  },
  {
    id: 23,
    title: "The War the World Filed Away",
    region: 'International',
    month: 'July 2026',
    event: "ACLED reports over 100,000 killed in Myanmar's civil war since the 2021 coup (July 2026)",
    sources: "France 24 (1 July 2026): https://www.france24.com/en/asia-pacific/20260701-myanmar-mourns-as-post-coup-conflict-death-toll-hits-100-000 | DVB (1 July 2026): https://english.dvb.no/death-toll-in-myanmar-surpasses-100000-since-2021-coup/",
    text: [
      `Some time in the first half of 2026, by the careful count of the Armed Conflict Location and Event Data Project, the number of people killed in Myanmar's civil war since the military seized power in February 2021 crossed one hundred thousand. The figure, reported in July, attracted a fraction of the attention given to any single week of the Middle East's wars. That asymmetry is not merely a media failure; it is a clue to how the international system allocates concern, and Myanmar's tragedy is precisely that it has become strategically ignorable.`,
      `The war itself has long since ceased to resemble the junta's script. The generals who seized power expected a restive but governable country; they got a nationwide insurgency in which ethnic armed organisations and the post-coup resistance, uneasy allies bound by a common enemy, have stripped the military of most border regions and much of the countryside. The junta's answer has been the air: unable to hold territory, it bombs it. Village airstrikes like the one in Falam Township in May, which killed six civilians, are not aberrations but the residue of a state that has lost the ground war and retains only the means of punishment.`,
      `The hundred thousand figure conceals a second, slower catastrophe. Millions displaced, an economy halved, a generation's schooling interrupted, and a health system so degraded that treatable diseases are again fatal. Wars of this kind do not end so much as sediment: the weapons disperse, the armed economies of the borderlands, jade, timber, drugs, scam compounds, become self-sustaining, and the state that eventually emerges inherits a country of militias. Myanmar's neighbours understand this, which is why ASEAN's impotence on the file is not indifference but dread: there is no regional actor with the leverage or the will to impose an outcome.`,
      `The lesson the world will eventually draw from Myanmar is an old one it keeps declining to learn. The hundred-thousand figure is almost certainly an undercount, assembled from verified incident reports in a country where communications blackouts hide entire campaigns; the monitors themselves caution that their methodology privileges what can be documented over what occurred. Attention is the currency in which humanitarian response is financed, and attention follows strategy, not suffering. A war without a superpower patron, a fleet, or a chokepoint must make do with counting its dead in reports that policy desks never open. ACLED's hundred thousand are as dead as any war's. It is the living, in the displacement camps of the borderlands, who are waiting to discover whether being ignorable is survivable.`
    ],
    questions: [
      {
        q: "The author argues that Myanmar has become 'strategically ignorable' because it:",
        options: [
          "lacks the features, such as superpower patrons or critical chokepoints, that make conflicts command international attention",
          "has been deliberately excluded from ASEAN",
          "has banned all foreign journalists",
          "poses a direct military threat to its neighbours"
        ],
        answer: 0,
        explanation: "The closing paragraph states that attention follows strategy, not suffering, and lists the absence of a superpower patron, fleet or chokepoint as Myanmar's disqualifications. ASEAN exclusion, press bans and threats to neighbours are not claimed."
      },
      {
        q: "The author's description of the junta's airstrikes as 'the residue of a state that has lost the ground war' implies that:",
        options: [
          "the airstrikes are effective at regaining territory",
          "air power is being used as punishment in place of the territorial control the military can no longer exercise",
          "the resistance has no air defences of any kind",
          "the junta will imminently collapse"
        ],
        answer: 1,
        explanation: "The sentence links bombing to the inability to hold territory: air attack substitutes for governance and control. It implies nothing about effectiveness in regaining territory, the completeness of resistance air defences, or imminent collapse."
      },
      {
        q: "Which of the following, if true, would most weaken the author's claim about how international attention is allocated?",
        options: [
          "Myanmar's civil war receives more front-page coverage than the conflict in Yemen",
          "A landlocked African conflict with no strategic resources receives sustained UN Security Council attention and a large peacekeeping mandate",
          "Donations to humanitarian appeals are higher for wars in Europe than for wars in Asia",
          "ACLED's methodology for counting casualties has been criticised by statisticians"
        ],
        answer: 1,
        explanation: "The claim is that attention follows strategic interest rather than suffering. A counterexample, sustained high-level attention to a strategically unimportant conflict, directly challenges it. Option C supports the claim; option A is a relative comparison that does not rebut the general mechanism; option D attacks the death count, not the attention thesis."
      }
    ]
  },
  {
    id: 24,
    title: "El Fasher, Again",
    region: 'International',
    month: 'July 2026',
    event: "UN fact-finding mission reports mass killings and atrocities by the RSF in El Fasher, North Darfur (July 2026)",
    sources: "OHCHR (8 July 2026): https://www.ohchr.org/en/press-releases/2026/07/sudan-mass-killings-abductions-and-gang-rape-carried-out-el-fasher | Reuters (8 July 2026): https://www.reuters.com/world/africa/un-probe-says-mass-killings-rapes-abductions-starvation-by-sudan-force-amount-2026-07-08/",
    text: [
      `The United Nations fact-finding mission's report on El Fasher, released in July 2026, documents what the siege of North Darfur's capital looked like from inside: mass killings, the abduction of women and girls, mass gang rape, and starvation imposed as a method of war by the Rapid Support Forces. The vocabulary is the vocabulary of Darfur twenty years ago, and that is the point that should shame everyone reading it. The world has already held the tribunals, issued the arrest warrants and sworn the oath of 'never again' for precisely this place and precisely these crimes. El Fasher is what 'never again' looks like in practice.`,
      `The mechanism of repetition is worth naming, because it is not amnesia. The diplomats who drafted the resolutions on Darfur in the 2000s are the professional ancestors of those drafting them now; the file never closed. What changed is the ecology of impunity. The RSF is not a rebel force operating beyond reach but a paramilitary network integrated into regional finance, funded by gold and sustained by external patrons who supply its weapons and purchase its services. Sanctions and warrants target individuals; networks metabolise them. The international architecture of accountability, built for a world in which states were the criminals, is structurally mismatched to perpetrators who are simultaneously militia, corporation and cartel.`,
      `Sudan's wider war has produced the world's largest displacement crisis with a fraction of the diplomatic effort expended on conflicts a tenth its size. The reasons are familiar: no great-power interest demands resolution, the patrons of both sides are courted rather than coerced, and African institutions that might lead are starved of the resources that follow only strategic priority. The result is a division of labour in which the UN documents, the agencies relieve and nobody stops. Documentation without enforcement, the El Fasher report's own genre, has become the acceptable substitute for protection.`,
      `None of this is an argument against the report; the record matters, and tribunals sometimes convene decades later on the strength of such files. It is an argument about what the report's reception proves. A civilisation's commitments are measured not by the oaths it swears after atrocities it failed to prevent, but by the cost it is willing to bear while prevention is still possible. On that measure, El Fasher is not only a crime scene in Sudan. It is a finding about the rest of the world, delivered, appropriately, in the passive voice.`
    ],
    questions: [
      {
        q: "The author's primary purpose in the passage is to:",
        options: [
          "call for the immediate abolition of the UN fact-finding mission",
          "use the El Fasher report to examine why international accountability mechanisms fail against networked, state-adjacent perpetrators",
          "provide a detailed chronology of the siege of El Fasher",
          "compare the death tolls of the two Darfur crises"
        ],
        answer: 1,
        explanation: "The passage moves from the report to the 'ecology of impunity' that lets such crimes repeat, arguing the architecture of accountability is mismatched to networked perpetrators. It neither calls for abolishing documentation nor centres chronology or toll comparison."
      },
      {
        q: "The phrase 'networks metabolise them' (paragraph 2) means that sanctions and warrants:",
        options: [
          "strengthen the targeted individuals' resolve",
          "are absorbed and circumvented by organisations structured as militia, business and cartel at once",
          "cause networks to dissolve rapidly",
          "apply only to corporations, not individuals"
        ],
        answer: 1,
        explanation: "The metaphor describes how a hybrid paramilitary-commercial network absorbs individual-targeted measures without structural effect. It is about circumvention by structure, not resolve, dissolution, or scope of application."
      },
      {
        q: "Which of the following, if true, would most strengthen the author's argument that documentation has become a substitute for protection?",
        options: [
          "The ICC has issued more arrest warrants for Sudanese commanders than for any other conflict",
          "In the months after similar past reports on Sudan, no new enforcement measures were adopted by the Security Council while humanitarian appeals remained underfunded",
          "The RSF has denied the report's findings",
          "Sudan's neighbours have increased border security"
        ],
        answer: 1,
        explanation: "The substitution claim is that documenting atrocities replaces acting to stop them. A pattern in which reports are followed by no enforcement and underfunded relief is direct evidence of that substitution. Warrants (option A) are more documentation of a legal kind; denial and border security do not address the substitution."
      }
    ]
  },
  {
    id: 25,
    title: "An Island in the Dark: Cuba's Grid Gives Way",
    region: 'International',
    month: 'July 2026',
    event: "Cuba's national grid collapses repeatedly, with three island-wide blackouts in a fortnight and protests in Havana, 6-14 July 2026",
    sources: "Reuters (6 July 2026): https://www.reuters.com/business/energy/cubas-national-electric-grid-collapses-reason-unknown-2026-07-06/ | AP (14 July 2026): https://apnews.com/article/cuba-blackout-oil-embargo-trump-44f447bb5da48391c1199627ab11cc08",
    text: [
      `When Cuba's national electricity grid collapsed on 6 July 2026, plunging the island into a nationwide blackout, the immediate cause was officially unknown. The structural cause was no mystery at all. A grid that depends on imported fuel a country cannot pay for, running on plants decades past their maintenance lives, does not fail by accident; it fails by arithmetic. Within a fortnight a third island-wide collapse had struck and protests had broken out across Havana, and the blackouts had become what blackouts in Cuba always become: a verdict on the state itself.`,
      `The arithmetic has been deteriorating for years. Cuba's thermal plants burn poor-quality domestic crude and imported oil that once flowed steadily from Venezuela, a lifeline that has thinned as that country's own production decayed. Sanctions constrict the island's access to fuel markets, shipping insurance and the foreign exchange needed for spare parts, while tourism, the last reliable dollar earner, shrinks as the power cuts themselves drive visitors away. Each failure tightens the circle: no electricity means no tourism receipts, no receipts mean no fuel, no fuel means no electricity.`,
      `What distinguishes the 2026 crisis from earlier ones is the thinning of the state's margin for response. In previous collapses the government could count on a stoicism earned by the health and education systems, and on the safety valve of emigration, which has carried away a large share of the population in recent years. But the emigrants are disproportionately the young and skilled, the same people who maintain plants and staff clinics, so the safety valve drains the very capacity the state needs to recover. Foreign operators read the same signs: within the year, Canada's Sherritt International had suspended mining and Blue Diamond Resorts had folded its sixty-two properties, each withdrawal shaving another slice from the foreign exchange the grid requires.`,
      `It is tempting to read the blackouts as a parable about sanctions alone, or about socialism alone, and both readings flatten the machinery of the failure. Sanctions raised the price of every input; the domestic model left the country with little to sell the world but nickel, doctors and beaches; and deferred maintenance converted scarcity into physical decay. The lights will come back on, as they have before. The question the third blackout poses is harder: whether a system can keep restoring power while steadily losing the people, the fuel and the credit that make restoration possible.`
    ],
    questions: [
      {
        q: "The author's primary purpose in the passage is to:",
        options: ["attribute the July blackouts solely to the effect of American sanctions",
          "explain the blackouts as the visible symptom of interacting structural failures rather than a technical accident",
          "chronicle the outbreak of public protests in Havana in July 2026",
          "urge foreign companies to resume their operations on the island"],
        answer: 1,
        explanation: "The passage reads the grid collapse as the arithmetic of fuel, foreign exchange, maintenance and emigration interacting. Option A names one factor the author explicitly calls insufficient on its own; option C treats evidence as the subject; option D is an appeal the author never makes."
      },
      {
        q: "It can be inferred from the passage that the author regards foreign exchange as:",
        options: ["a secondary concern compared with the technical state of the power plants",
          "irrelevant to tourism, which depends only on visitor demand",
          "the binding constraint that links Cuba's fuel supply, maintenance backlog and tourism revenues into one circle",
          "a problem that emigration helps to solve"],
        answer: 2,
        explanation: "Each thread of the passage runs through foreign exchange: fuel must be bought with it, spare parts require it, tourism no longer earns it, and emigration drains the capacity to recover it. Options A and B contradict the machinery described; option D is the reverse of the safety-valve argument."
      },
      {
        q: "Which of the following, if true, would most weaken the author's claim that the blackouts reflect structural incapacity rather than a recoverable shock?",
        options: ["Cuban households have adapted to the outages with private generators and rechargeable lamps",
          "Within a year, Cuba secures a durable multi-year fuel arrangement, completes overdue maintenance on its largest plants, and logs no further island-wide failures",
          "American officials state that sanctions are not aimed at Cuba's electricity supply",
          "Other Caribbean states experienced localised power outages during the same summer"],
        answer: 1,
        explanation: "A durable fuel arrangement plus completed maintenance plus a full year without collapse would falsify the claim of structural incapacity directly. Option A describes coping, which the structural account predicts; option C is a statement of intent that does not lower input costs; option D is an irrelevant comparison."
      }
    ]
  }
];
