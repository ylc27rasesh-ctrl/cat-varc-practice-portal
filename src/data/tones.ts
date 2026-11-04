export interface Tone {
  tone: string;
  meaning: string;
  synonyms: string[];
  examples: string[];
}

export const tones: Tone[] = [
  { tone: "Analytical", meaning: "Breaking a subject into parts and examining them logically, without taking sides.", synonyms: ["dissecting", "systematic", "methodical", "diagnostic"], examples: [
    "The report separates the scheme into its intent, its financing and its delivery chain, and tests each link against the data before allowing itself a conclusion.",
    "Rather than praise or blame the policy, the author asks which of its four assumptions the evidence actually supports.",
    "The argument is taken apart like a clock: every gear labelled, every spring accounted for, and the reader is shown why it kept the wrong time."
  ] },
  { tone: "Objective", meaning: "Neutral and fact-based; the author keeps personal feeling out of the account.", synonyms: ["impartial", "dispassionate", "detached", "unbiased"], examples: [
    "The judgment occupies six pages: three for the petitioner's case, three for the respondent's, and the author's own view appears nowhere.",
    "Rainfall fell 14 percent, reservoir levels fell 31 percent, and sowing fell 9 percent; the article presents the numbers and stops."
  ] },
  { tone: "Critical", meaning: "Finding fault with a subject after judging it against a standard.", synonyms: ["censorious", "fault-finding", "disapproving", "unfavourable"], examples: [
    "The corridor was announced with fanfare, but its traffic projections have never survived contact with an actual rush hour.",
    "Whatever the report's intentions, a method that excludes the poorest districts cannot claim to measure national poverty.",
    "The scheme deserves credit for its reach, but reach is not the question; the question is whether anyone is better off, and on that it is silent."
  ] },
  { tone: "Laudatory", meaning: "Expressing praise and admiration for the subject.", synonyms: ["commendatory", "approving", "complimentary", "acclamatory"], examples: [
    "Few institutions have done more with less: the clinic now vaccinates forty villages on a budget smaller than one city hospital's laundry bill.",
    "Her translations did not merely carry the poems across languages; they gave an entire literature a second life."
  ] },
  { tone: "Eulogistic", meaning: "Formally praising someone, usually the dead or the departing, often at length.", synonyms: ["panegyrical", "encomiastic", "tributary", "venerating"], examples: [
    "He leaves behind no memoir, for he wrote his life in other people's chances: the school he built, the weavers he organised, the river he fought to keep alive.",
    "To list her medals is to miss her; the true record is a generation of athletes who believed the track belonged to them."
  ] },
  { tone: "Sarcastic", meaning: "Saying the opposite of what is meant, in order to mock.", synonyms: ["mocking", "caustic", "snide", "derisive"], examples: [
    "What a triumph of planning: the expressway that takes forty minutes to save you twenty.",
    "How generous of the airline to sell us the seats and then, as a separate favour, the right to sit in them.",
    "We are fortunate to have a ministry that measures poverty so creatively; at this rate it will abolish wealth instead."
  ] },
  { tone: "Sardonic", meaning: "Grimly or scornfully mocking, with a darker edge than simple sarcasm.", synonyms: ["cynical", "scornful", "mordant", "wry"], examples: [
    "The committee on delays has delayed its report, which may be the most honest finding it could have produced.",
    "He promised to drain the swamp and has since been named its official tour guide.",
    "The dictator has announced free elections, and his victory is already being congratulated."
  ] },
  { tone: "Ironic", meaning: "Drawing attention to the gap between what is said or expected and what is the case.", synonyms: ["paradoxical", "wry", "tongue-in-cheek", "sardonic"], examples: [
    "The fire station, it must be recorded, burned down.",
    "A seminar on attention spans was postponed because the delegates found it too long.",
    "The safety inspector, who had certified the lift that morning, took the stairs."
  ] },
  { tone: "Satirical", meaning: "Using ridicule, exaggeration or irony to expose folly or vice.", synonyms: ["lampooning", "mocking", "parodic", "burlesque"], examples: [
    "The ministry has solved the housing crisis by reclassifying anyone with a doorway as adequately housed.",
    "Under phase two of the transparency drive, the minutes of the transparency drive will be made available on request, in triplicate, after a short wait of some years.",
    "To combat water scarcity, the state has issued taps without pipes, and has been photographed doing so."
  ] },
  { tone: "Cynical", meaning: "Believing and conveying that people act only from self-interest.", synonyms: ["distrustful", "jaundiced", "sceptical", "misanthropic"], examples: [
    "The inquiry will find no one responsible, because that is what inquiries are for.",
    "The minister's sudden interest in farmers' welfare coincides, purely by chance, with the sowing of votes.",
    "Do not ask whether the charity's new hospital will open; ask whose name will be on the gate."
  ] },
  { tone: "Sceptical", meaning: "Doubting a claim and asking for its evidence, without rejecting it outright.", synonyms: ["doubtful", "questioning", "dubious", "unconvinced"], examples: [
    "The app claims ten million users, but counting downloads is not counting users, and counting users is not counting readers.",
    "Before crediting the scheme with falling crime, we might ask what crime was doing before the scheme existed.",
    "It is possible the diet works, but the study that says so was funded, conducted and celebrated by the diet."
  ] },
  { tone: "Incredulous", meaning: "Unable or unwilling to believe what is being claimed; open disbelief.", synonyms: ["disbelieving", "astonished", "unbelieving", "staggered"], examples: [
    "The bridge, we are asked to believe, collapsed of old age at the age of four.",
    "The official explanation requires us to accept that the cameras failed, the registers vanished and the witnesses misremembered, all on the same afternoon.",
    "The entire archive was lost in a fire to which, the records show, the fire brigade was never called."
  ] },
  { tone: "Optimistic", meaning: "Expecting favourable outcomes and emphasising hopeful signs.", synonyms: ["hopeful", "sanguine", "confident", "buoyant"], examples: [
    "The rains were late but arrived in earnest, and with sowing recovering in every district, the season can still be saved.",
    "If the trial's early results hold, a disease that took decades to understand may take only years to defeat."
  ] },
  { tone: "Guardedly optimistic", meaning: "Hopeful but hedged; seeing promise while naming the risks.", synonyms: ["cautiously hopeful", "conditionally positive", "tempered", "circumspect"], examples: [
    "The ceasefire has held for a month, which is encouraging, though two of its three monitoring posts are not yet staffed.",
    "Enrolment is up and dropout is down; whether learning has followed is the question the next survey must answer before we celebrate."
  ] },
  { tone: "Pessimistic", meaning: "Expecting the worst and dwelling on unfavourable possibilities.", synonyms: ["gloomy", "despondent", "defeatist", "fatalistic"], examples: [
    "Every monsoon now arrives as a negotiation the city is bound to lose.",
    "The reservoir will fill, the allocations will be disputed, the crops will fail in the usual order, and next year's plan will call this year's an aberration."
  ] },
  { tone: "Alarmist", meaning: "Exaggerating danger and urging urgent fear.", synonyms: ["scaremongering", "panicky", "catastrophising", "ominous"], examples: [
    "If this aquifer falls another metre, the district will not face hardship; it will face exodus, and no camp will be ready.",
    "We are sleepwalking into a decade in which antibiotics stop working in ordinary surgery, and we are scheduling conferences about it."
  ] },
  { tone: "Ominous", meaning: "Suggesting that something bad is about to happen.", synonyms: ["foreboding", "portentous", "menacing", "baleful"], examples: [
    "The market was quiet that quarter, quiet the way water is quiet before it disappears down a crack.",
    "No one has resigned yet, which in this ministry is usually the last thing that happens before everyone does."
  ] },
  { tone: "Indignant", meaning: "Angry at something perceived as unjust.", synonyms: ["resentful", "aggrieved", "affronted", "incensed"], examples: [
    "A pensioner must produce a certificate to prove she is alive, while the contractor who owes the exchequer crores certifies himself.",
    "The school lost its roof in May; by September the file requesting repairs had gathered four more signatures than the school has teachers.",
    "There are rules for the poor and rulings for the rich, and the author is angry in the right direction."
  ] },
  { tone: "Outraged", meaning: "Openly furious at a violation; stronger and hotter than indignant.", synonyms: ["incensed", "furious", "inflamed", "scandalised"], examples: [
    "Someone signed the certificate. Someone approved the lift. Someone must now stand up and say their name.",
    "This is not a lapse to be noted in a report; it is a betrayal of every family that drank from that well, and it must be answered for.",
    "A man is dead because a signature cost too much, and the file calls it an administrative delay."
  ] },
  { tone: "Scathing", meaning: "Severely and bitingly critical.", synonyms: ["withering", "searing", "devastating", "brutal"], examples: [
    "Seldom has so much public money purchased so little public good with so much public applause.",
    "One admires the consistency: every year the same targets, every year the same excuses, and the only thing delivered on time is the press release."
  ] },
  { tone: "Caustic", meaning: "Bitterly sharp in criticism; burning rather than merely cutting.", synonyms: ["corrosive", "acerbic", "biting", "stinging"], examples: [
    "The department's efficiency drive has, to its credit, doubled: it now loses files in half the time.",
    "The committee's report is remarkable for containing, on every page, exactly what its sponsors paid for.",
    "The minister calls it a pilot project; pilots, at least, are expected to get off the ground."
  ] },
  { tone: "Acerbic", meaning: "Sharp and sour in manner; cutting wit aimed at a target.", synonyms: ["tart", "acid", "astringent", "pungent"], examples: [
    "The lecture was advertised as brisk, and it was, in the sense that a lemon is brisk.",
    "He does not argue so much as season: every reply is tart and every concession is served with vinegar."
  ] },
  { tone: "Vituperative", meaning: "Harsh, abusive condemnation; the rhetoric of attack.", synonyms: ["abusive", "denunciatory", "scurrilous", "vitriolic"], examples: [
    "The column spends eleven hundred words on the rival's ancestry, his tailor and his motives, and none on his argument.",
    "This is not criticism but a bill of attainder: the man is a fraud, his degrees are wallpaper and his supporters are a mob with letterheads.",
    "The opponent is a liar by page one and a traitor by page three; analysis never gets a hearing."
  ] },
  { tone: "Polemical", meaning: "Arguing aggressively for one side of a controversy.", synonyms: ["contentious", "combative", "argumentative", "disputatious"], examples: [
    "Every paragraph advances one proposition and bayonets every alternative: that the market, and only the market, can price water fairly.",
    "She does not review the opposing case; she arraigns it, witness by witness."
  ] },
  { tone: "Dismissive", meaning: "Treating a subject as unworthy of serious consideration.", synonyms: ["contemptuous", "offhand", "perfunctory", "disdainful"], examples: [
    "The objection is disposed of in a footnote, which is more than the author thinks it deserves.",
    "Thirty years of fieldwork are waved away as anecdote, while a survey of twelve experts is promoted to consensus.",
    "The district's weaving tradition is covered in a single clause, and the clause is 'and so on'."
  ] },
  { tone: "Condescending", meaning: "Speaking from implied superiority; talking down to the subject or reader.", synonyms: ["patronising", "supercilious", "paternalistic", "snobbish"], examples: [
    "Readers unfamiliar with economics, by which the author means everyone but the author, may need the concept of price explained slowly.",
    "One almost admires the patience with which the report informs teachers that children learn.",
    "The glossary kindly explains rain for the benefit of villagers who live under it."
  ] },
  { tone: "Derisive", meaning: "Expressing ridicule; treating the subject as laughable.", synonyms: ["jeering", "scoffing", "mocking", "taunting"], examples: [
    "The slogan was 'Never Again', printed on a banner above the same machinery that failed again.",
    "It is hard to say which drew more laughter, the robot that could not open the door or the minister who could not open the robot.",
    "The new app digitised the queue, which it did by moving the queue to a loading screen."
  ] },
  { tone: "Didactic", meaning: "Intended to instruct; teaching a lesson, sometimes tediously.", synonyms: ["instructive", "educational", "moralising", "pedagogic"], examples: [
    "The moral of the bridge, the author insists, is maintenance, and he will not let the story end until the lesson is written out.",
    "Every folktale in the collection concludes with a paragraph telling the reader precisely what to conclude."
  ] },
  { tone: "Pedantic", meaning: "Over-concerned with minor rules and details; showing off learning.", synonyms: ["nitpicking", "hairsplitting", "punctilious", "bookish"], examples: [
    "The essay pauses to establish that the quotation is from 1847 and not 1848, though nothing in the argument depends on the year.",
    "He footnotes the comma. Not the claim, mind you; the comma."
  ] },
  { tone: "Sober", meaning: "Serious, restrained and free of exaggeration.", synonyms: ["grave", "solemn", "measured", "subdued"], examples: [
    "Three hundred and twelve people died. The author writes the number plainly, without adjectives, and moves to what must change.",
    "There is no rhetoric here, only a ledger: what was promised, what was delivered and the distance between.",
    "The facts are grim and are stated grimly, once, without the comfort of a single flourish."
  ] },
  { tone: "Measured", meaning: "Carefully weighed; neither overstating nor understating.", synonyms: ["balanced", "temperate", "calibrated", "moderate"], examples: [
    "The reform is neither the triumph its authors claim nor the failure its critics need; it is a half-kept promise, and the arithmetic shows which half.",
    "On balance, the data justify two of the paper's four claims, and the author says exactly that, no more."
  ] },
  { tone: "Tentative", meaning: "Uncertain and provisional; advancing claims with hesitation.", synonyms: ["hesitant", "provisional", "cautious", "conjectural"], examples: [
    "The correlation may, if the sampling holds up, point to something worth a second study.",
    "It is too early to call this a trend, but it is perhaps not too early to ask whether it is one.",
    "The sample is small and the period is short, and the author is careful to say so before saying anything else."
  ] },
  { tone: "Speculative", meaning: "Reasoning from incomplete evidence toward what might be true.", synonyms: ["conjectural", "hypothetical", "suppositional", "exploratory"], examples: [
    "If the harbour silted before the drought, the city's granaries may have been emptied by geography rather than mismanagement; the ruins cannot say, but they invite the question.",
    "One can imagine a version of events in which the letter arrived too late; whether it did is beyond the evidence, though not beyond wondering.",
    "Perhaps the coins were offerings rather than wages; the site keeps its counsel, and the author is willing to guess."
  ] },
  { tone: "Wry", meaning: "Dryly humorous, often at the absurdity of a grim situation.", synonyms: ["dry", "ironic", "droll", "deadpan"], examples: [
    "Attendance at the honesty workshop was excellent; the biscuits, however, were stolen.",
    "The committee has agreed to meet quarterly to discuss why it never meets.",
    "The manual on clear writing runs to four hundred pages."
  ] },
  { tone: "Facetious", meaning: "Treating serious matters with inappropriate or deliberate levity.", synonyms: ["flippant", "jocular", "frivolous", "glib"], examples: [
    "Asked about the flood damage, the minister praised the nation's swimmers.",
    "On the bright side, the fish have never enjoyed better access to the business district.",
    "Asked for the casualty figures, the spokesperson offered instead some exciting news about the gift shop."
  ] },
  { tone: "Whimsical", meaning: "Playfully fanciful, following odd and charming turns of thought.", synonyms: ["capricious", "quaint", "fanciful", "quirky"], examples: [
    "The lamppost on Chapel Road has outlasted four mayors and fully deserves a pension.",
    "Every map of the town should mark the bench where all arguments, by ancient local convention, are settled over tea.",
    "The town's pigeons hold, by long custom, the right of way at the fountain, and the mayor yields to them like everyone else."
  ] },
  { tone: "Nostalgic", meaning: "Longing sentimentally for a past time.", synonyms: ["wistful", "reminiscent", "yearning", "evocative"], examples: [
    "There was a cinema here once, with wooden seats and a fan that squeaked in the sad parts, and half the town's first dates were negotiated under it.",
    "The old timetable still hangs in the station, and some of us still read it, though the trains it promises retired with our fathers.",
    "We did not know then that we were happy; we only knew the evening, the radio and the smell of rain on the courtyard."
  ] },
  { tone: "Melancholic", meaning: "Gently or deeply sad; dwelling in sorrow.", synonyms: ["sorrowful", "mournful", "pensive", "gloomy"], examples: [
    "The mill closed in 1998, and the town has been quietly rehearsing its absence ever since.",
    "On winter evenings the colony's windows light one by one, and there are fewer each year.",
    "The letters are tied with string in the order they arrived, and the last of them has never been answered."
  ] },
  { tone: "Elegiac", meaning: "Mourning something lost or passing; the tone of a lament.", synonyms: ["plaintive", "lamenting", "funereal", "valedictory"], examples: [
    "This is the last telegram office in the province, and when it closes an entire grammar of urgency will have no home.",
    "We are saying goodbye not to a building but to a way of gathering, and the author knows it and grieves without hurry."
  ] },
  { tone: "Wistful", meaning: "Sad in a light, yearning way, for what cannot be had or returned.", synonyms: ["longing", "pensive", "regretful", "nostalgic"], examples: [
    "The children's special still runs in the photographs, and one catches oneself checking the platform on the way to work.",
    "She writes of the orchard as of a letter she meant to answer and didn't.",
    "There is a swing in the garden that no one uses now, and the author mentions it once, which is enough."
  ] },
  { tone: "Ambivalent", meaning: "Holding two opposed feelings or judgments at once and not resolving them.", synonyms: ["conflicted", "torn", "equivocal", "undecided"], examples: [
    "The dam powers a million homes and drowned a valley of villages; the author praises it in one paragraph and mourns it in the next, and refuses to choose.",
    "I want the factory to come and I want it never to come, and both wants are honest.",
    "Half of the author is at the ribbon-cutting and the other half is at the funeral, and both halves are quoted."
  ] },
  { tone: "Partisan", meaning: "Committed to one side of a dispute and arguing its case.", synonyms: ["biased", "factional", "one-sided", "prejudiced"], examples: [
    "The chronicle counts the ruling party's achievements to the last mile of road and the opposition's record to the last riot, and never the twain shall meet.",
    "For the author, the question is never what the policy does but whose policy it is."
  ] },
  { tone: "Dogmatic", meaning: "Asserting beliefs as settled fact, closed to counter-evidence.", synonyms: ["doctrinaire", "rigid", "authoritarian", "uncompromising"], examples: [
    "There is one path to development, the author declares, and deviation from it is not error but heresy.",
    "No evidence is admitted that does not arrive already agreeing.",
    "Questions are not answered here; they are corrected."
  ] },
  { tone: "Pragmatic", meaning: "Judging ideas by their practical effects rather than their principles.", synonyms: ["practical", "realistic", "hard-headed", "utilitarian"], examples: [
    "The question is not whether the scheme is elegant but whether the grain reaches the warehouse before the rain does.",
    "Judge the pilot by its invoices and its attendance registers, not by its intentions."
  ] },
  { tone: "Utopian", meaning: "Imagining an ideal world; hopeful to the edge of practicality.", synonyms: ["idealistic", "visionary", "quixotic", "dreaming"], examples: [
    "Imagine a city with no queues, no locks and no hunger; the author not only imagines it but draws its bus routes.",
    "In the world this essay builds, work is chosen, water is common and the word 'deserving' has been retired."
  ] },
  { tone: "Conciliatory", meaning: "Trying to pacify or reconcile opposed parties.", synonyms: ["appeasing", "placatory", "mollifying", "peaceable"], examples: [
    "Both sides are right about the wound and wrong about the remedy, and the author says so to each, gently.",
    "Before asking the unions and the board to sit down, the author grants each the truth of its grievance."
  ] },
  { tone: "Apologetic", meaning: "Expressing regret or defending oneself against implied criticism.", synonyms: ["regretful", "contrite", "self-excusing", "exculpatory"], examples: [
    "Before the evidence is heard, the author explains why the decision had to be taken, and the explanation has the sound of a door being closed from the inside.",
    "It was, the report insists, the only option available, and it insists before anyone has asked."
  ] },
  { tone: "Reverential", meaning: "Showing deep respect verging on awe.", synonyms: ["venerating", "worshipful", "deferential", "awed"], examples: [
    "One does not so much read the old master's manuscripts as visit them, and the author's prose removes its shoes.",
    "The archive keeps her letters in acid-free boxes, and the essay handles them the same way."
  ] },
  { tone: "Exasperated", meaning: "Irritated past patience by repeated folly or failure.", synonyms: ["frustrated", "irritated", "nettled", "wearied"], examples: [
    "This is the fourth announcement of the same bridge, and one would like to know, plainly, what was wrong with the first three.",
    "Again the same task force, the same terms of reference and the same deadline, and again we are asked to call it progress.",
    "How many committees must a pothole attend before it is filled? The author has stopped counting and started shouting."
  ] },
  { tone: "Resigned", meaning: "Accepting something unwelcome without further resistance.", synonyms: ["stoical", "submissive", "acquiescent", "fatalistic"], examples: [
    "The library will close, as libraries do, and this one at least lasted longer than most.",
    "The protest is over; the petitions are filed where petitions go, and the town has gone back to fetching water."
  ] },
  { tone: "Earnest", meaning: "Deeply sincere and serious, without irony.", synonyms: ["sincere", "heartfelt", "solemn", "zealous"], examples: [
    "The author believes, plainly and on the page, that one honest officer can change a district, and offers the district that changed.",
    "There is no wink in this essay; it asks, in full seriousness, that we keep our promises to children."
  ] },
  { tone: "Impassioned", meaning: "Filled with strong feeling; arguing from the heart as well as the head.", synonyms: ["fervent", "ardent", "passionate", "vehement"], examples: [
    "The river is not a resource to be priced but a relative to be defended, and the author pleads for it in sentences that rise like the river itself.",
    "Every statistic here is a name, and the author will not let the reader pass a single one in comfort."
  ] },
  { tone: "Vehement", meaning: "Forceful and intense in expression.", synonyms: ["forceful", "emphatic", "fierce", "violent"], examples: [
    "The verdict is denounced in a single paragraph that never once lowers its voice.",
    "No, the author repeats, no and no again; the scheme was wrong in conception, wrong in execution and wrong in its accounting."
  ] },
  { tone: "Strident", meaning: "Loud, harsh and insistent in pressing a point.", synonyms: ["shrill", "grating", "hectoring", "clamorous"], examples: [
    "The accusation is repeated in capital letters, as if volume were evidence.",
    "Every sentence ends in an exclamation mark, and by the third page the reader is being hectored rather than persuaded."
  ] },
  { tone: "Incisive", meaning: "Cutting straight to the core of a matter with clarity.", synonyms: ["penetrating", "trenchant", "sharp", "keen"], examples: [
    "In two sentences the author disposes of the confusion that three reports were written to maintain.",
    "The whole debate turns on one number, and the author finds it, names it and checks it."
  ] },
  { tone: "Trenchant", meaning: "Vigorous and sharply effective in criticism or analysis.", synonyms: ["incisive", "mordant", "biting", "forceful"], examples: [
    "The compromise is called what it is: a method by which both sides agreed to lose slowly.",
    "The policy's defenders are answered with a single, sharp question they have spent a decade avoiding."
  ] },
  { tone: "Mordant", meaning: "Bitingly critical with a dark, caustic humour.", synonyms: ["caustic", "biting", "corrosive", "sardonic"], examples: [
    "The city's flood plan works beautifully in the years when it does not rain.",
    "Congratulations are due: the mortality figures have improved ever since the worst-hit district was removed from the survey."
  ] },
  { tone: "Forensic", meaning: "Examining evidence with cold, precise, courtroom-like thoroughness.", synonyms: ["meticulous", "exacting", "clinical", "scrupulous"], examples: [
    "The minister's three statements are laid side by side, and each contradiction is dated.",
    "Every figure in the report is traced to its source, and two of the sources, on inspection, do not exist."
  ] },
  { tone: "Clinical", meaning: "Cool, efficient and emotionally detached in treatment.", synonyms: ["detached", "analytical", "cold", "dispassionate"], examples: [
    "The famine's progression is described district by district in the tone of a lab report.",
    "The failure is dissected without sympathy or anger: cause, mechanism, consequence, cost."
  ] },
  { tone: "Mock-heroic", meaning: "Treating a trivial subject in grand, epic style to comic effect.", synonyms: ["burlesque", "parodic", "mock-epic", "inflated"], examples: [
    "The canteen's switch from tea to coffee is narrated as a fall of empire, complete with omens and a grieving chorus of clerks.",
    "Thus ended the reign of the old stapler, whose loss the office mourned in the traditional manner: a memo."
  ] }
];
