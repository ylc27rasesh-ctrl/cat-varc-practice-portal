export interface VAQuestion {
  id: number;
  type: 'Inference' | 'Assumption' | 'Strengthen' | 'Weaken';
  stimulus: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  difficulty: 'Moderate' | 'Hard';
}

export const questions: VAQuestion[] = [
  {
    id: 1,
    type: 'Inference',
    stimulus: `Cities that have introduced congestion pricing have typically seen air quality improve within the first year. Opponents of Delhi's proposed congestion charge argue that because Delhi's pollution is driven substantially by crop burning in neighbouring states, the charge will fail to clean Delhi's air.`,
    question: "Which of the following can be inferred from the statements above?",
    options: [
      "Congestion pricing has never improved air quality in any city",
      "Delhi's air quality is worse than that of cities that introduced congestion pricing",
      "The opponents believe that a congestion charge addresses only vehicle-related pollution within the city",
      "Crop burning in neighbouring states is the sole cause of Delhi's pollution"
    ],
    answer: 2,
    explanation: "The opponents' argument presumes the charge affects only in-city vehicle emissions, which is why they cite an external source it cannot touch. Option A contradicts the first sentence; options B and D go beyond anything stated.",
    difficulty: 'Moderate'
  },
  {
    id: 2,
    type: 'Assumption',
    stimulus: `A leading EdTech firm announced it will replace its recorded video lectures with live AI tutors that adapt to each student's pace. The CEO justified the move: 'Students who learn at their own pace retain more, so our completion rates will rise.'`,
    question: "The CEO's argument assumes which of the following?",
    options: [
      "AI tutors are cheaper to operate than producing recorded lectures",
      "Higher retention of material leads to higher course completion rates",
      "Students prefer live tutors to recorded lectures",
      "The firm's competitors will not adopt similar technology"
    ],
    answer: 1,
    explanation: "The argument moves from 'learn at own pace, retain more' to 'completion rates will rise'. That inference requires a link between retention and completion, which is exactly what option B supplies. Cost, preference and competitors are not required by the reasoning.",
    difficulty: 'Moderate'
  },
  {
    id: 3,
    type: 'Weaken',
    stimulus: `Health authorities in a coastal district noted that households using RO water purifiers had significantly fewer cases of waterborne disease than households relying on municipal taps. They concluded that distributing subsidised RO purifiers would reduce disease across the district.`,
    question: "Which of the following, if true, most weakens the health authorities' conclusion?",
    options: [
      "RO purifiers remove beneficial minerals along with contaminants",
      "Households that bought RO purifiers were on average wealthier and also had access to better sanitation and healthcare",
      "Municipal water in the district fails safety tests more often than state standards allow",
      "Some households maintain their purifiers poorly, reducing effectiveness"
    ],
    answer: 1,
    explanation: "The conclusion rests on a correlation between purifier use and less disease. Option B supplies a confounding variable: the same households have better sanitation and healthcare, which could account for the outcome without purifiers. Options A and D are side-effects that do not break the link; option C supports intervention.",
    difficulty: 'Moderate'
  },
  {
    id: 4,
    type: 'Strengthen',
    stimulus: `A state government claims its new direct-benefit-transfer system has eliminated leakages in the fertiliser subsidy, pointing to a 30 percent fall in subsidy outgo since the system's introduction.`,
    question: "Which of the following, if true, most strengthens the government's claim?",
    options: [
      "Farmers' union surveys report higher satisfaction with the new system",
      "Fertiliser consumption per hectare remained constant while the number of registered beneficiary accounts receiving duplicate payments fell sharply",
      "The state's fertiliser imports declined over the same period",
      "Other states are considering adopting the same system"
    ],
    answer: 1,
    explanation: "The claim is that leakage, not usage, fell. Option B shows consumption steady while duplicate payments collapsed, directly tying the outgo fall to eliminated leakage. Satisfaction surveys and imitation by other states do not establish leakage reduction; falling imports could indicate lower usage instead.",
    difficulty: 'Hard'
  },
  {
    id: 5,
    type: 'Inference',
    stimulus: `In the decade since a metro city made its bus fleet entirely electric, average commute times have risen by 12 percent, even as the fleet's emissions fell to near zero. Transport economists note that the buses' long charging cycles have forced a reduction in peak-hour frequency.`,
    question: "Which of the following is most strongly supported by the statements above?",
    options: [
      "Electric buses are slower than diesel buses",
      "The environmental gains from electrification were offset by higher emissions from private vehicles",
      "Operational constraints of the new fleet may have contributed to longer commutes",
      "The city should have expanded its metro rail instead"
    ],
    answer: 2,
    explanation: "The passage links reduced peak frequency, caused by charging cycles, to rising commute times, which supports option C's hedged claim. Option A confuses speed with frequency; option B asserts an offset that is not measured; option D is a recommendation the data cannot support.",
    difficulty: 'Moderate'
  },
  {
    id: 6,
    type: 'Assumption',
    stimulus: `A venture capitalist defended her fund's exclusive focus on founders under thirty: 'Every transformative technology company of the last fifty years was founded by someone in their twenties, so youth is where the outsized returns are.'`,
    question: "The venture capitalist's argument depends on assuming that:",
    options: [
      "founders over thirty are incapable of building technology companies",
      "the pattern among past transformative companies will persist into the period in which the fund invests",
      "young founders work longer hours than older founders",
      "the fund's limited partners prefer young founders"
    ],
    answer: 1,
    explanation: "The argument projects a historical pattern onto future investments; without the assumption that the pattern persists, past founding ages are irrelevant to where future returns lie. The other options assert more than the argument needs.",
    difficulty: 'Hard'
  },
  {
    id: 7,
    type: 'Weaken',
    stimulus: `An economics columnist argues: 'India's quick-commerce sector, which promises ten-minute grocery delivery, is fundamentally unsound. Its dark stores lose money on every order, and no amount of scale can fix a business that loses money on each unit it sells.'`,
    question: "Which of the following, if true, most weakens the columnist's argument?",
    options: [
      "Several quick-commerce firms have recently raised large funding rounds",
      "In comparable retail formats, per-order losses narrowed and then turned positive as order density per store rose, because fixed store costs were spread over more deliveries",
      "Customers report high satisfaction with ten-minute delivery",
      "Grocery margins in India are thinner than in most other markets"
    ],
    answer: 1,
    explanation: "The columnist's premise is that per-unit losses are structural, immune to scale. Option B shows per-order economics improving with density precisely because scale spreads fixed costs, attacking the premise directly. Funding rounds and satisfaction do not address unit economics; thin margins support the columnist.",
    difficulty: 'Hard'
  },
  {
    id: 8,
    type: 'Strengthen',
    stimulus: `A linguistics professor argues that the dominance of English in Indian higher education harms first-generation students: 'Students schooled in regional languages consistently underperform in English-medium entrance examinations, even in subjects like mathematics where language should be peripheral.'`,
    question: "Which of the following, if true, most strengthens the professor's argument?",
    options: [
      "Regional-language schools often have fewer resources than English-medium schools",
      "When the same mathematics examination was administered in translation to a matched sample, the performance gap between regional-language and English-medium students narrowed by more than half",
      "English proficiency correlates strongly with income in urban India",
      "Most competitive examinations in India are offered only in English and Hindi"
    ],
    answer: 1,
    explanation: "The professor claims the language of instruction itself handicaps students in even non-verbal subjects. A controlled translation experiment in which the gap narrows isolates language as the cause, directly strengthening the argument. Option A offers an alternative explanation, which weakens rather than strengthens.",
    difficulty: 'Hard'
  },
  {
    id: 9,
    type: 'Inference',
    stimulus: `A study of civil services found that officers who had served in the districts were significantly more likely to be rated effective administrators than officers who had spent their careers in state capitals. The study's authors caution that postings are not assigned randomly.`,
    question: "Which of the following is best supported by the study and its authors' caution?",
    options: [
      "District service makes officers better administrators",
      "The observed link between district service and effectiveness may reflect which officers are chosen for district postings rather than the effect of the postings themselves",
      "Officers in state capitals are less talented than those in districts",
      "Posting assignments in the civil services are arbitrary"
    ],
    answer: 1,
    explanation: "The caution about non-random assignment flags selection effects: effectiveness might cause the posting rather than result from it. Option B captures exactly that. Option A ignores the caution; options C and D overstate or misstate it.",
    difficulty: 'Hard'
  },
  {
    id: 10,
    type: 'Assumption',
    stimulus: `A municipal corporation plans to halve its landfill waste by making household composting mandatory, with fines for non-compliance. 'Every household produces compostable waste,' the commissioner said, 'so mandatory composting will cut what reaches the landfill.'`,
    question: "The commissioner's plan assumes which of the following?",
    options: [
      "Households have the space and means to compost their compostable waste",
      "Fines are the best way to change household behaviour",
      "Home composting improves the soil in urban gardens",
      "Neighbouring municipalities will adopt similar rules"
    ],
    answer: 0,
    explanation: "The inference from 'every household produces compostable waste' to 'mandatory composting will cut landfill waste' requires that households can actually compost, which option A states. Options B and C are not required for the inference, and option D is extraneous.",
    difficulty: 'Moderate'
  },
  {
    id: 11,
    type: 'Weaken',
    stimulus: `A recruitment platform reports that job postings requiring 'excellent communication skills in English' attract three times as many applicants as equivalent postings without the phrase. It concludes that candidates are strongly drawn to roles that emphasise communication.`,
    question: "Which of the following, if true, most calls the platform's conclusion into question?",
    options: [
      "Postings with the phrase were disproportionately for higher-paying roles in metropolitan cities",
      "Some applicants do not read job descriptions carefully",
      "The platform's user base has grown rapidly",
      "Roles emphasising teamwork are also popular among applicants"
    ],
    answer: 0,
    explanation: "The conclusion attributes the applicant surplus to the phrase. Option A offers an alternative cause: those postings were better-paid metro roles, which attract applicants regardless of wording. The other options do not break the attribution.",
    difficulty: 'Moderate'
  },
  {
    id: 12,
    type: 'Inference',
    stimulus: `Between 2015 and 2025, the share of Indian households with air conditioners doubled, while the average electricity consumed per air-conditioned household fell. Manufacturers attribute the decline to stricter efficiency standards; power utilities credit the shift to inverter compressors, which the standards mandated.`,
    question: "Which of the following is best supported by the information above?",
    options: [
      "Efficiency standards caused the entire decline in consumption per household",
      "Total residential electricity consumption for cooling necessarily fell over the decade",
      "The decline in per-household consumption may be explained by technology adopted in response to regulation",
      "Inverter compressors are cheaper to manufacture than conventional ones"
    ],
    answer: 2,
    explanation: "The two attributions are compatible: standards mandated the technology that reduced consumption, and option C states only that modest combined claim. Option A overclaims causation; option B confuses per-household decline with total consumption, which could rise with twice as many households; option D is unsupported.",
    difficulty: 'Hard'
  },
  {
    id: 13,
    type: 'Strengthen',
    stimulus: `A historian argues that the 1918 influenza pandemic hastened the acceptance of germ theory among the Indian public: 'After 1918, municipalities that had resisted sanitation reform on grounds of cost began funding drainage and water projects at unprecedented levels.'`,
    question: "Which of the following, if true, most strengthens the historian's argument?",
    options: [
      "The 1918 pandemic killed more people in India than in any other country",
      "Municipalities that suffered the heaviest influenza mortality were the first and the most generous funders of sanitation projects",
      "Sanitation technology improved considerably after 1918",
      "Germ theory had been accepted in European medical schools decades before 1918"
    ],
    answer: 1,
    explanation: "The argument links the pandemic to the funding shift. If the worst-hit municipalities funded first and most, the pandemic is tied to the behaviour by dosage, which strongly supports causation. Better technology (option C) offers a rival explanation; options A and D are not relevant to the municipal response.",
    difficulty: 'Hard'
  },
  {
    id: 14,
    type: 'Assumption',
    stimulus: `An investor newsletter argues: 'Gold will underperform equities over the next decade. In every ten-year period since 1980 when real interest rates were positive, equities beat gold, and central banks now signal that real rates will stay positive.'`,
    question: "The newsletter's argument assumes that:",
    options: [
      "central banks' signals about future policy are a reliable guide to actual future real rates",
      "gold has never outperformed equities in any decade",
      "equities are always riskier than gold",
      "inflation will remain low for the next decade"
    ],
    answer: 0,
    explanation: "The historical regularity is conditional on real rates staying positive; to carry the conclusion, the signal that they will stay positive must be dependable, which is option A. Option D is close but not required: low inflation is neither necessary nor sufficient for positive real rates. Options B and C are extreme claims the argument does not need.",
    difficulty: 'Hard'
  },
  {
    id: 15,
    type: 'Weaken',
    stimulus: `A state education department credits its free laptop scheme for a rise in Class 12 pass rates, noting that pass rates rose from 74 to 81 percent in the three years after laptops were distributed to all government-school students.`,
    question: "Which of the following, if true, most weakens the department's claim?",
    options: [
      "Many students use the laptops primarily for entertainment",
      "Over the same three years, the state's evaluation board moved to a lenient grading rubric and lowered the pass mark for two subjects",
      "Private schools in the state, which received no laptops, saw pass rates rise by a similar margin",
      "Teacher vacancies in the state remained high throughout the period"
    ],
    answer: 1,
    explanation: "Option B attacks causation directly: the measured outcome was made easier to achieve, so the rise need not reflect learning at all. Option C is also relevant, but private schools may differ systematically from government schools, making the comparison weaker than the rubric change, which applies to the very measure cited. Options A and D do not break the link.",
    difficulty: 'Hard'
  },
  {
    id: 16,
    type: 'Inference',
    stimulus: `A famous venture studio advertises that 40 percent of the startups it has launched are still operating after five years, a survival rate it calls 'double the industry norm'. The studio's model involves providing founders with capital, staff and a ready-made business plan.`,
    question: "If the statements are true, which of the following can be properly inferred?",
    options: [
      "The industry norm for five-year startup survival is about 20 percent",
      "The studio's model causes higher survival rates",
      "Founders who join venture studios are less talented than independent founders",
      "Most startups fail within their first year"
    ],
    answer: 0,
    explanation: "If 40 percent is double the norm, the norm is about 20 percent; that is arithmetic on the studio's own claim. The causal claim in option B outruns the data, option C is unsupported, and option D is consistent with but not entailed by the statements.",
    difficulty: 'Moderate'
  },
  {
    id: 17,
    type: 'Strengthen',
    stimulus: `A traffic safety researcher argues that Delhi's odd-even vehicle rationing did not meaningfully reduce crashes: 'Total crashes in rationing months were statistically indistinguishable from crashes in non-rationing months.'`,
    question: "Which of the following, if true, most strengthens the researcher's argument?",
    options: [
      "During rationing months, average speeds on arterial roads were no higher than in other months",
      "Rationing reduced total vehicle-kilometres travelled by roughly a quarter, while crashes per vehicle-kilometre rose slightly",
      "Public transport ridership increased during rationing months",
      "Most crashes in Delhi involve two-wheelers, which were exempt from rationing"
    ],
    answer: 1,
    explanation: "The researcher claims rationing did not reduce crashes. Option B shows exposure fell sharply yet the crash rate per unit of exposure rose, meaning the policy was worse than neutral per kilometre driven, powerfully supporting the conclusion. Option D partially explains the aggregate but leaves open that car crashes fell; option A is consistent but weak.",
    difficulty: 'Hard'
  },
  {
    id: 18,
    type: 'Assumption',
    stimulus: `A university dean defends replacing take-home essays with in-class handwritten examinations: 'AI tools can now produce excellent essays, so we can no longer trust that take-home work measures the student's own ability.'`,
    question: "The dean's reasoning assumes that:",
    options: [
      "handwritten in-class examinations measure student ability at least as accurately as take-home essays did before AI tools existed",
      "students will not find ways to use AI tools during in-class examinations",
      "all students currently use AI tools for their essays",
      "employers value examination results more than essays"
    ],
    answer: 1,
    explanation: "The move to in-class exams restores trustworthy measurement only if AI assistance is actually excluded there, which is option B. Option A compares formats' validity, which the argument does not require; options C and D are unnecessary extremes or irrelevancies.",
    difficulty: 'Moderate'
  },
  {
    id: 19,
    type: 'Weaken',
    stimulus: `A fintech CEO argues: 'Our credit-scoring algorithm, which uses mobile-phone metadata, is fairer than traditional credit scores because it gives loans to millions who have no formal credit history.'`,
    question: "Which of the following, if true, most weakens the CEO's claim that the algorithm is fairer?",
    options: [
      "Traditional credit scoring excludes anyone without a repayment history",
      "The algorithm approves loans at systematically higher interest rates for borrowers from poorer regions, who are also the most likely to lack credit histories",
      "Mobile-phone penetration in rural areas has risen sharply",
      "The firm's loan default rate is lower than the industry average"
    ],
    answer: 1,
    explanation: "The fairness claim rests on inclusion of the previously excluded. Option B shows the included group is charged systematically worse terms along a dimension of disadvantage, undercutting 'fairer' even though inclusion is real. Option A supports the claim's premise; options C and D are irrelevant to fairness.",
    difficulty: 'Hard'
  },
  {
    id: 20,
    type: 'Inference',
    stimulus: `In a famous experiment, diners at a buffet with plates two inches smaller in diameter served themselves roughly 20 percent less food and reported equal satisfaction. The researchers concluded that plate size is a powerful, unnoticed lever on consumption.`,
    question: "Which of the following is most strongly supported by the passage?",
    options: [
      "Diners were unaware that their plates were smaller",
      "Reducing plate sizes in restaurants would reduce food waste",
      "Perceptions of how much one has eaten are influenced by contextual cues such as plate size",
      "Smaller plates cause people to eat more slowly"
    ],
    answer: 2,
    explanation: "Equal satisfaction despite 20 percent less food supports the claim that perceived intake is shaped by context like plate size. Option A is about awareness, which the passage does not establish; option B adds a waste prediction not tested; option D introduces eating speed, which is unmeasured.",
    difficulty: 'Moderate'
  },
  {
    id: 21,
    type: 'Assumption',
    stimulus: `A district administration announced it will raise immunisation coverage by sending reminder messages to parents' phones, citing a pilot in which reminded parents were 15 percent more likely to complete their children's vaccination schedules.`,
    question: "The district's plan rests on which of the following assumptions?",
    options: [
      "The pilot's participants are representative of the district's parents in the factors that determine response to reminders",
      "Reminders are cheaper than door-to-door vaccination drives",
      "Parents who ignore reminders are opposed to vaccination",
      "Mobile phone ownership is universal in the district"
    ],
    answer: 0,
    explanation: "Generalising from a pilot to the district requires that the pilot's results transfer, which is option A. The plan does not need reminders to be the cheapest method, does not presume resisters are ideological, and does not require universal ownership, only enough reach.",
    difficulty: 'Moderate'
  },
  {
    id: 22,
    type: 'Weaken',
    stimulus: `A popular science writer claims: 'Bilingual children are better at multitasking. Studies show that bilinguals outperform monolinguals on tasks that require switching between rules, because managing two languages exercises the brain's control systems.'`,
    question: "Which of the following, if true, most weakens the writer's claim?",
    options: [
      "Some bilingual children struggle with vocabulary in both languages",
      "In the cited studies, bilingual children were largely drawn from immigrant families whose higher motivation and parental involvement independently predict executive-function performance",
      "Rule-switching tasks are poor measures of real-world multitasking",
      "Adults who learn a second language also show gains on rule-switching tasks"
    ],
    answer: 1,
    explanation: "The causal chain runs from bilingualism through exercised control systems to better switching. Option B supplies a confounder, family background, that could produce the correlation without the claimed mental exercise. Option C attacks measurement rather than the causal claim; options A and D are consistent with or irrelevant to it.",
    difficulty: 'Hard'
  },
  {
    id: 23,
    type: 'Inference',
    stimulus: `After a coastal city invested heavily in sea walls, flood damage during the next major storm was lower than in the previous storm a decade earlier. However, total spending on disaster recovery, including maintenance of the walls and higher insurance premiums in the protected zone, exceeded the savings from the avoided damage.`,
    question: "Which of the following is best supported by the statements above?",
    options: [
      "The sea walls were not worth building",
      "Lower storm damage does not by itself establish that protective investment was economically justified",
      "The previous storm a decade earlier was more severe",
      "Insurance premiums in the city rose because of the sea walls"
    ],
    answer: 1,
    explanation: "The passage separates avoided damage from total cost and finds the latter higher, which supports the general caution in option B. Option A overreaches, since future storms and non-monetary benefits are unconsidered; options C and D assert causes the passage does not give.",
    difficulty: 'Moderate'
  },
  {
    id: 24,
    type: 'Strengthen',
    stimulus: `An agricultural economist argues that India's millet revival is demand-led rather than subsidy-led: 'Consumption of millets rose fastest in urban districts where millet procurement prices received no special support.'`,
    question: "Which of the following, if true, most strengthens the economist's argument?",
    options: [
      "Millet production is heavily subsidised in several southern states",
      "In the districts cited, millet consumption continued to rise after a health-trend campaign ended, while in comparable districts without rising consumption, no such campaign had run",
      "Urban consumers perceive millets as healthier than refined grains",
      "International Year of Millets campaigns increased global awareness"
    ],
    answer: 1,
    explanation: "The argument separates demand from price support. Option B shows demand rising without support and absent where consumption did not rise, tightening the demand-side attribution with a comparison. Perceptions (option C) describe a motive but do not test the subsidy claim; options A and D are consistent with either side.",
    difficulty: 'Hard'
  },
  {
    id: 25,
    type: 'Assumption',
    stimulus: `A corporate trainer advises: 'To make meetings shorter, remove the chairs. In our workshops, teams that held standing meetings finished in half the time with decisions of equal quality.'`,
    question: "The trainer's advice assumes which of the following?",
    options: [
      "The time saved in standing meetings is not lost later in revisiting poorly considered decisions",
      "Standing is physically possible for all meeting participants",
      "People think faster when they stand",
      "Most corporate meetings are longer than necessary"
    ],
    answer: 0,
    explanation: "The workshop evidence shows equal decision quality at the time; the advice to shorten real meetings assumes the speed is genuine and not deferred, which is option A. Option B is a practical condition, not something the reasoning relies on; options C and D are not required.",
    difficulty: 'Moderate'
  },
  {
    id: 26,
    type: 'Weaken',
    stimulus: `A city police department credits its new predictive-policing software for a 20 percent drop in burglaries, noting that the software directs patrols to blocks where past incidents cluster.`,
    question: "Which of the following, if true, most undermines the department's attribution of the drop to the software?",
    options: [
      "Burglary rates also fell in cities without such software",
      "In the same period, a widely publicised sting operation had led to the arrest of an organised burglary ring responsible for a large share of the city's break-ins",
      "The software's vendor claims accuracy of over 90 percent",
      "Some officers distrust algorithmic patrol assignments"
    ],
    answer: 1,
    explanation: "Option B supplies a specific alternative cause accounting for a large share of the outcome, a stronger challenge than the general trend in options A, which leaves open that the software still caused this city's larger drop. Vendor claims and officer sentiment are irrelevant to attribution.",
    difficulty: 'Hard'
  },
  {
    id: 27,
    type: 'Inference',
    stimulus: `A museum found that visitors who received an audio guide spent longer in each gallery but reported remembering less of what they saw than visitors who explored unaided. The museum's director observed that attention, not time, seems to be the scarce resource in galleries.`,
    question: "Which of the following is most strongly supported by the passage?",
    options: [
      "Audio guides reduce the educational value of museum visits",
      "Spending longer in a gallery does not guarantee greater retention of its contents",
      "Visitors who explore unaided are more intelligent",
      "Museums should stop providing audio guides"
    ],
    answer: 1,
    explanation: "The finding is that more time accompanied less retention, which directly supports option B's modest claim. Options A and D generalise beyond the data, and option C is baseless.",
    difficulty: 'Moderate'
  },
  {
    id: 28,
    type: 'Strengthen',
    stimulus: `A public policy scholar argues that fines are a poor tool for disciplining taxi aggregators: 'Companies treat the fines as a cost of doing business, passing them to consumers in higher fares, while the practices that attract fines continue unchanged.'`,
    question: "Which of the following, if true, most strengthens the scholar's argument?",
    options: [
      "The total value of fines levied on aggregators has risen each year",
      "After a city made repeated violations grounds for suspending an aggregator's operating licence, complaint rates against aggregators in that city fell by half",
      "Consumers are largely unaware of the fines paid by aggregators",
      "Taxi fares in the city have risen faster than inflation"
    ],
    answer: 1,
    explanation: "The argument is that fines fail because they are priced in. Evidence that a non-monetary penalty, licence suspension, changed behaviour where fines did not supports the claim that fines specifically are ineffective. Rising fines and fares are consistent with the argument but do not test the mechanism as directly.",
    difficulty: 'Hard'
  },
  {
    id: 29,
    type: 'Assumption',
    stimulus: `A health ministry justifies taxing sugar-sweetened beverages: 'Mexico's soda tax cut purchases of taxed drinks by an average of 7 percent in two years. India's consumption patterns are similar, so a comparable tax here will yield comparable public-health benefits.'`,
    question: "The ministry's argument assumes which of the following?",
    options: [
      "Reduced purchases of taxed drinks translate into improved health outcomes rather than substitution toward equally unhealthy untaxed products",
      "Mexico's tax was politically popular",
      "India's beverage industry will not reformulate its products",
      "Sugar consumption in India is higher than in Mexico"
    ],
    answer: 0,
    explanation: "The conclusion is about public-health benefits, but the evidence is about purchases. The argument needs a bridge from lower purchases to better health, which substitution could sever; option A supplies it. Popularity, reformulation and relative consumption levels are not required.",
    difficulty: 'Hard'
  },
  {
    id: 30,
    type: 'Weaken',
    stimulus: `An education minister defends a steep cut in university research grants: 'Our universities produce thousands of papers that nobody reads. Redirecting grant money to teaching will serve students better than funding unread research.'`,
    question: "Which of the following, if true, most weakens the minister's case?",
    options: [
      "Some university research papers are cited thousands of times",
      "Universities with stronger research output attract better faculty, and their students outperform peers on independent assessments",
      "Most students say they value teaching quality over research prestige",
      "The private sector funds a growing share of research in other countries"
    ],
    answer: 1,
    explanation: "The minister assumes research spending does not serve students. Option B links research strength to faculty quality and student outcomes, showing the two goals are coupled rather than competing. Option A addresses readership, not the student-benefit claim; options C and D are consistent with the minister's case.",
    difficulty: 'Hard'
  },
  {
    id: 31,
    type: 'Inference',
    stimulus: `A railway ministry proudly reported that punctuality had improved for the fifth straight year, with trains arriving on average nine minutes closer to schedule than five years ago. A passenger association responded that over the same period, the scheduled journey times on major routes had been lengthened by fifteen minutes.`,
    question: "Which of the following is best supported by the exchange?",
    options: [
      "Trains are faster than they were five years ago",
      "The punctuality gains claimed by the ministry may reflect relaxed schedules rather than improved operations",
      "The passenger association opposes railway modernisation",
      "Nine minutes is an insignificant improvement"
    ],
    answer: 1,
    explanation: "If scheduled times were padded by fifteen minutes while arrivals improved by nine, the metric can improve without any true operational gain, which is option B. The passage does not establish actual speed, the association's broader views, or a significance judgment.",
    difficulty: 'Moderate'
  },
  {
    id: 32,
    type: 'Assumption',
    stimulus: `A startup founder predicts: 'Our vernacular-language AI tutor will dominate the market. It speaks eleven Indian languages, and there are hundreds of millions of students who prefer learning in their mother tongue.'`,
    question: "The founder's prediction depends on assuming that:",
    options: [
      "students who prefer learning in their mother tongue will find that preference decisive in choosing a tutoring product",
      "the tutor's translations are perfectly accurate",
      "competitors cannot build multilingual tutors",
      "the market for English-medium tutoring will shrink"
    ],
    answer: 0,
    explanation: "From 'many prefer their mother tongue' to 'we will dominate', the argument needs the preference to translate into purchase decisions, which is option A. Perfect accuracy, competitor inability and English-market decline are all stronger than the argument requires.",
    difficulty: 'Moderate'
  },
  {
    id: 33,
    type: 'Weaken',
    stimulus: `An economic adviser argues that India's semiconductor fabrication push will succeed where earlier electronics manufacturing drives stalled: 'The government has committed production-linked incentives, land and power at scale. The missing ingredient was always commitment, and that is now supplied.'`,
    question: "Which of the following, if true, most weakens the adviser's argument?",
    options: [
      "Semiconductor fabrication requires ultrapure water in enormous quantities",
      "Global experience shows fabrication success depends less on subsidies than on dense ecosystems of specialised suppliers, tool vendors and experienced process engineers, which take a decade or more to build",
      "Several countries have announced their own chip incentive programmes",
      "The earlier electronics drives were smaller in scale"
    ],
    answer: 1,
    explanation: "The adviser claims commitment was the missing ingredient. Option B asserts the true bottleneck is an ecosystem that money cannot quickly buy, attacking the causal premise directly. Water requirements and foreign programmes are obstacles but do not rebut the commitment thesis as cleanly; option D supports the adviser.",
    difficulty: 'Hard'
  },
  {
    id: 34,
    type: 'Strengthen',
    stimulus: `A sports scientist argues that India's recent Olympic medal gains owe more to private coaching academies than to government sports schools: 'Most recent medallists trained at private academies for the majority of their developmental years.'`,
    question: "Which of the following, if true, most strengthens the scientist's argument?",
    options: [
      "Government sports schools receive more funding per athlete than private academies",
      "Athletes who moved from government schools to private academies improved their national rankings within two seasons, while comparable athletes who stayed showed no such improvement",
      "Private academies employ several former Olympic coaches",
      "Participation in district-level sport has risen steadily"
    ],
    answer: 1,
    explanation: "A within-athlete comparison showing improvement after switching, against a matched group that stayed, isolates the academies' effect and upgrades a mere correlation into evidence of contribution. Funding levels, coach pedigrees and participation trends do not test the causal claim.",
    difficulty: 'Hard'
  },
  {
    id: 35,
    type: 'Inference',
    stimulus: `A newspaper investigated a celebrated charity and found that 60 percent of donations went to administrative salaries, yet the charity's programmes measurably reduced child malnutrition in the districts where it operated. Donors interviewed were divided: half called the overhead unconscionable, half called the results worth the cost.`,
    question: "Which of the following is best supported by the passage?",
    options: [
      "The charity is fraudulent",
      "Judgments about a charity's quality can depend on whether one weights its costs or its outcomes",
      "Administrative salaries at charities should be capped by law",
      "The donors who objected to overhead were unaware of the results"
    ],
    answer: 1,
    explanation: "The donors agree on the facts and divide on the standard of evaluation, which is exactly option B. Fraud is not established, the legal cap is a prescription the passage does not support, and donors' awareness is not reported.",
    difficulty: 'Moderate'
  },
  {
    id: 36,
    type: 'Assumption',
    stimulus: `A logistics company argues it should be allowed to operate delivery drones in cities: 'Our drones have logged a million autonomous flight hours abroad with a safety record exceeding that of delivery scooters, so permitting them here will make urban deliveries safer.'`,
    question: "The company's argument assumes that:",
    options: [
      "the safety record achieved abroad would persist under this country's air traffic, weather and urban density conditions",
      "delivery scooters are the most dangerous vehicles on urban roads",
      "drone deliveries will be cheaper than scooter deliveries",
      "regulators abroad were competent"
    ],
    answer: 0,
    explanation: "The argument transports a foreign safety record into a domestic prediction, which requires the conditions to be sufficiently similar, as option A states. Relative danger of scooters, cost and foreign regulators' competence are not load-bearing.",
    difficulty: 'Moderate'
  },
  {
    id: 37,
    type: 'Weaken',
    stimulus: `A tech columnist declares: 'The era of the smartphone is ending. Sales of smartphones fell for the second consecutive year, while shipments of AI-powered wearable devices doubled.'`,
    question: "Which of the following, if true, most weakens the columnist's claim?",
    options: [
      "Wearable devices still depend on paired smartphones for most of their computing and connectivity",
      "Younger consumers replace their phones more often than older consumers",
      "Smartphone profit margins remain higher than wearable margins",
      "Some analysts predict augmented-reality glasses will eventually replace phones"
    ],
    answer: 0,
    explanation: "The claim is that the smartphone era is ending, with wearables as the successor. If wearables are accessories tethered to phones rather than substitutes, rising wearable shipments are evidence of the phone's centrality, not its demise. The other options do not address the substitution thesis.",
    difficulty: 'Moderate'
  },
  {
    id: 38,
    type: 'Strengthen',
    stimulus: `An urban planner argues that Bengaluru's traffic problem is primarily a land-use problem: 'Commuting times grew fastest in corridors where offices and housing were permitted to develop far apart, and slowest where mixed-use zoning kept them interleaved.'`,
    question: "Which of the following, if true, most strengthens the planner's argument?",
    options: [
      "Bengaluru's vehicle registrations have doubled in a decade",
      "In corridors that later adopted mixed-use zoning, commuting-time growth decelerated relative to similar corridors that did not change their zoning",
      "Other Indian cities with mixed-use zoning also suffer severe congestion",
      "Metro rail expansion has reduced traffic on several corridors"
    ],
    answer: 1,
    explanation: "A before-after comparison within corridors that changed zoning, against unchanged comparators, tests the land-use claim directly. Vehicle growth and metro effects are consistent with many explanations; other cities' congestion does not isolate zoning.",
    difficulty: 'Hard'
  },
  {
    id: 39,
    type: 'Inference',
    stimulus: `A software firm abolished performance rankings and saw resignations among its highest-rated engineers triple, while resignations among average performers fell by half. The firm's HR head concluded that rankings had been functioning as a retention tool for top performers.`,
    question: "Which of the following is most strongly supported?",
    options: [
      "Abolishing rankings was a mistake",
      "Whatever else rankings did, they appear to have contributed to keeping top-rated engineers at the firm",
      "Average performers disliked rankings more than top performers did",
      "The firm's top engineers left to found startups"
    ],
    answer: 1,
    explanation: "The post-abolition divergence in resignations supports the HR head's modest causal reading for top performers, which is option B. Whether abolition was a mistake overall requires weighing both groups, which the passage cannot settle; preferences and destinations are unreported.",
    difficulty: 'Moderate'
  },
  {
    id: 40,
    type: 'Assumption',
    stimulus: `A bank's strategy head argues: 'We should close half our rural branches. Rural customers have adopted mobile banking at record rates, and most branch transactions can now be completed on our app.'`,
    question: "The strategy head's recommendation assumes which of the following?",
    options: [
      "The services rural customers use branches for but cannot complete on the app are not important enough to those customers to justify the branches' cost",
      "All rural customers own smartphones",
      "Mobile networks in rural areas are perfectly reliable",
      "Competitor banks are also closing rural branches"
    ],
    answer: 0,
    explanation: "The move from 'most transactions are digital' to 'close half the branches' requires that the residual branch-only needs are dispensable, which option A captures. Universal smartphone ownership and perfect networks are stronger than needed; competitors are irrelevant.",
    difficulty: 'Hard'
  },
  {
    id: 41,
    type: 'Weaken',
    stimulus: `A ministry white paper concludes that work-from-home has made India's tech workers more productive: 'Output per employee at firms permitting remote work is 15 percent higher than at firms that require office attendance.'`,
    question: "Which of the following, if true, most weakens the white paper's conclusion?",
    options: [
      "Remote workers report longer working hours",
      "Firms that permit remote work are disproportionately large, well-capitalised companies that were more productive than office-requiring firms before remote work existed",
      "Some employees find home environments distracting",
      "Office rents have fallen in technology hubs"
    ],
    answer: 1,
    explanation: "The conclusion infers remote work raises productivity from a cross-firm comparison. Option B reverses the causation: already-productive firms are the ones that can permit remote work, so the 15 percent gap need not be caused by the policy. The other options are compatible with the conclusion.",
    difficulty: 'Moderate'
  },
  {
    id: 42,
    type: 'Inference',
    stimulus: `A coastal state's tourism department advertised its beaches with the slogan 'Unspoiled'. International arrivals rose by a third, and within three years the district's coral cover had declined measurably, its freshwater table had fallen, and room rates had tripled, driving older family-run guesthouses out of business.`,
    question: "Which of the following is best supported by the passage?",
    options: [
      "The slogan was false advertising",
      "The qualities that attract tourists to a destination can be destroyed by the tourism they attract",
      "The state should ban international tourists",
      "Coral decline was caused by guesthouse closures"
    ],
    answer: 1,
    explanation: "The sequence links marketed unspoiledness to ecological and social damage from the resulting influx, which is the generalisation in option B. The slogan may have been true when coined; the ban and the reversed causation in option D are unsupported.",
    difficulty: 'Moderate'
  },
  {
    id: 43,
    type: 'Assumption',
    stimulus: `A hospital chain defends its prices: 'Our heart-surgery packages cost 40 percent more than the charitable hospital across town, but our survival rates are five percentage points higher. Patients are paying for outcomes, not overheads.'`,
    question: "The chain's defence assumes that:",
    options: [
      "the difference in survival rates reflects the quality of care rather than differences in the patients each hospital treats",
      "heart surgery is the most profitable service at the chain",
      "patients can easily compare survival rates across hospitals",
      "the charitable hospital receives government subsidies"
    ],
    answer: 0,
    explanation: "The defence reads the survival gap as purchased quality. If the chain simply treats lower-risk patients, the gap is selection, not care, so the argument requires option A. Profitability, comparability and subsidies are not essential to the reasoning.",
    difficulty: 'Hard'
  },
  {
    id: 44,
    type: 'Strengthen',
    stimulus: `A fisheries scientist warns that the recent practice of releasing juvenile fish into depleted rivers is counterproductive: 'Stocked rivers show no recovery in wild fish populations five years on.'`,
    question: "Which of the following, if true, most strengthens the scientist's warning?",
    options: [
      "Stocking programmes are popular with fishing communities",
      "Juvenile fish raised in hatcheries lack the predator-avoidance behaviours of wild-raised fish, and survive in rivers at a fraction of the rate assumed when the programmes were designed",
      "River depletion is caused mainly by sand mining",
      "Some rivers recovered without any stocking"
    ],
    answer: 1,
    explanation: "Option B supplies a mechanism explaining the failure the scientist reports, converting correlation into supported causation. Popularity does not bear on effectiveness; sand mining offers an alternative cause of depletion, not of restocking failure; unstocked recoveries are consistent but less directly probative.",
    difficulty: 'Hard'
  },
  {
    id: 45,
    type: 'Inference',
    stimulus: `When a national park banned private vehicles and introduced electric shuttle buses, sightings of the park's tigers near tourist routes fell by half. Wildlife biologists offered two readings: the tigers had withdrawn from the noisier edges of their habitat, or they had merely become harder to spot from the slower, more crowded shuttles.`,
    question: "Which of the following is best supported by the passage?",
    options: [
      "The vehicle ban harmed the tigers",
      "A change in observed wildlife sightings need not indicate a change in wildlife",
      "Electric shuttles are worse for the environment than private vehicles",
      "Tigers prefer quiet habitats"
    ],
    answer: 1,
    explanation: "The two rival readings share the lesson that observation depends on the observer's method, which is option B's modest claim. The passage cannot settle which reading is true, so options A and D outrun it; option C contradicts the evident intent of the policy without support.",
    difficulty: 'Moderate'
  },
  {
    id: 46,
    type: 'Assumption',
    stimulus: `A streaming platform plans to commission only sequels and adaptations next year: 'Original series are a lottery. Our adaptations of bestselling novels retain subscribers at twice the rate of original productions.'`,
    question: "The platform's plan assumes which of the following?",
    options: [
      "The retention advantage of adaptations will persist as their share of the platform's catalogue grows",
      "Bestselling novels are easy to acquire",
      "Subscribers prefer familiar stories to unfamiliar ones in every genre",
      "Original series are never profitable"
    ],
    answer: 0,
    explanation: "The observed advantage comes from adaptations chosen selectively; scaling them to the whole catalogue assumes the edge survives dilution, which is option A. Acquisition ease, universal genre preferences and the impossibility of profitable originals are all stronger than required.",
    difficulty: 'Hard'
  },
  {
    id: 47,
    type: 'Weaken',
    stimulus: `A real-estate analyst argues: 'Office property values in Mumbai's business district will keep rising. Vacancy rates have fallen every quarter for two years, and rents are at record highs.'`,
    question: "Which of the following, if true, most weakens the analyst's projection?",
    options: [
      "Several multinational tenants have signed long leases in the district",
      "Much of the fall in vacancy reflects large firms consolidating into fewer floors as hybrid work becomes permanent, and several new office towers are scheduled to add supply next year",
      "Residential property values in the district have also risen",
      "Interest rates have remained stable"
    ],
    answer: 1,
    explanation: "The projection reads falling vacancy as durable demand growth. Option B reframes the fall as consolidation, shrinking demand per tenant, and adds coming supply, attacking both legs of the optimism. Long leases (option A) support the analyst; residential prices and rates are peripheral.",
    difficulty: 'Hard'
  },
  {
    id: 48,
    type: 'Strengthen',
    stimulus: `A nutritionist claims that the rise in childhood myopia in Indian cities is driven by reduced outdoor time rather than by screens: 'The steepest rises in myopia have occurred in cities where children's daily outdoor play has fallen below an hour, regardless of how much screen time those children report.'`,
    question: "Which of the following, if true, most strengthens the nutritionist's claim?",
    options: [
      "Myopia rates are lower in rural areas",
      "In a trial, children randomly assigned an extra hour of daily outdoor play developed myopia at lower rates than controls with identical screen exposure",
      "Screen brightness settings have improved over the decade",
      "Parents of myopic children report high screen use"
    ],
    answer: 1,
    explanation: "A randomised trial holding screen exposure constant and varying outdoor time isolates the outdoor variable, providing the cleanest support for the nutritionist's attribution. Rural rates and parental reports do not separate the two candidates; brightness settings are a red herring.",
    difficulty: 'Hard'
  },
  {
    id: 49,
    type: 'Inference',
    stimulus: `A chess federation replaced knockout tournaments with round-robin leagues. Upset victories by lower-rated players fell sharply, and sponsors complained that the drama had gone out of the game, even as the federation noted that the final standings now reflected players' true strength far more reliably.`,
    question: "Which of the following is best supported by the passage?",
    options: [
      "Knockout formats are unfair to lower-rated players",
      "Formats that maximise the chance of upsets and formats that best measure skill are not the same",
      "Sponsors should have no say in tournament design",
      "Round-robin leagues are cheaper to organise"
    ],
    answer: 1,
    explanation: "The passage shows fewer upsets alongside more reliable measurement, so the two goals diverge, which is option B. Fairness to underdogs, sponsors' rights and costs are not addressed.",
    difficulty: 'Moderate'
  },
  {
    id: 50,
    type: 'Weaken',
    stimulus: `A development economist argues that cash transfers to women reduce household poverty more than equivalent transfers to men: 'In trial villages, transfers given to mothers raised child nutrition and school attendance far more than transfers given to fathers.'`,
    question: "Which of the following, if true, most weakens the economist's argument for preferring transfers to women?",
    options: [
      "In the trial villages, mothers who received transfers were more likely to be literate than fathers who received them",
      "Cash transfers are cheaper to administer than in-kind subsidies",
      "In trial districts where transfers were labelled 'children's allowance', fathers spent them on children at the same rates as mothers did",
      "Men in the trial villages earned more on average than women"
    ],
    answer: 2,
    explanation: "The policy conclusion is that the recipient's identity drives the outcome. Option C shows that if a simple label makes fathers spend identically, the design of the transfer, not the gender of the recipient, carries the effect, undercutting the case for gender targeting. Option A offers a confound, but literacy differences between recipient groups are speculative without more evidence.",
    difficulty: 'Hard'
  }
];
