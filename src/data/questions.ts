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
      "The opponents believe that a congestion charge addresses only vehicle-related pollution within the city",
      "Congestion pricing has never improved air quality in any city",
      "Delhi's air quality is worse than that of cities that introduced congestion pricing",
      "Crop burning in neighbouring states is the sole cause of Delhi's pollution"
    ],
    answer: 0,
    explanation: "The opponents' argument presumes the charge affects only in-city vehicle emissions, which is why they cite an external source it cannot touch. Option B contradicts the first sentence; options C and D go beyond anything stated.",
    difficulty: 'Moderate'
  },
  {
    id: 2,
    type: 'Assumption',
    stimulus: `A leading EdTech firm announced it will replace its recorded video lectures with live AI tutors that adapt to each student's pace. The CEO justified the move: 'Students who learn at their own pace retain more, so our completion rates will rise.'`,
    question: "The CEO's argument assumes which of the following?",
    options: [
      "AI tutors are cheaper to operate than producing recorded lectures",
      "Students prefer live tutors to recorded lectures",
      "The firm's competitors will not adopt similar technology",
      "Higher retention of material leads to higher course completion rates"
    ],
    answer: 3,
    explanation: "The argument moves from 'learn at own pace, retain more' to 'completion rates will rise'. That inference requires a link between retention and completion, which is exactly what option D supplies. Cost, preference and competitors are not required by the reasoning.",
    difficulty: 'Moderate'
  },
  {
    id: 3,
    type: 'Weaken',
    stimulus: `Health authorities in a coastal district noted that households using RO water purifiers had significantly fewer cases of waterborne disease than households relying on municipal taps. They concluded that distributing subsidised RO purifiers would reduce disease across the district.`,
    question: "Which of the following, if true, most weakens the health authorities' conclusion?",
    options: [
      "Households that bought RO purifiers also had better sanitation and healthcare access",
      "RO purifiers remove beneficial minerals along with contaminants",
      "Municipal water in the district fails safety tests more often than state standards permit",
      "Some households maintain their purifiers poorly, which reduces how well they work"
    ],
    answer: 0,
    explanation: "The conclusion rests on a correlation between purifier use and less disease. Option A supplies a confounding variable: the same households have better sanitation and healthcare, which could account for the outcome without purifiers. Options B and D are side-effects that do not break the link; option C supports intervention.",
    difficulty: 'Moderate'
  },
  {
    id: 4,
    type: 'Strengthen',
    stimulus: `A state government claims its new direct-benefit-transfer system has eliminated leakages in the fertiliser subsidy, pointing to a 30 percent fall in subsidy outgo since the system's introduction.`,
    question: "Which of the following, if true, most strengthens the government's claim?",
    options: [
      "Farmers' union surveys report higher satisfaction with the new system",
      "The state's fertiliser imports declined over the same period",
      "Fertiliser use per hectare stayed constant while duplicate beneficiary payments fell sharply",
      "Other states are considering adopting the same system as this state"
    ],
    answer: 2,
    explanation: "The claim is that leakage, not usage, fell. Option C shows consumption steady while duplicate payments collapsed, directly tying the outgo fall to eliminated leakage. Satisfaction surveys and imitation by other states do not establish leakage reduction; falling imports could indicate lower usage instead.",
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
      "The city should have expanded its metro rail instead",
      "Operational constraints of the new fleet may have contributed to longer commutes"
    ],
    answer: 3,
    explanation: "The passage links reduced peak frequency, caused by charging cycles, to rising commute times, which supports option D's hedged claim. Option A confuses speed with frequency; option B asserts an offset that is not measured; option C is a recommendation the data cannot support.",
    difficulty: 'Moderate'
  },
  {
    id: 6,
    type: 'Assumption',
    stimulus: `A venture capitalist defended her fund's exclusive focus on founders under thirty: 'Every transformative technology company of the last fifty years was founded by someone in their twenties, so youth is where the outsized returns are.'`,
    question: "The venture capitalist's argument depends on assuming that:",
    options: [
      "the pattern among past transformative companies will persist into the period in which the fund invests",
      "founders over thirty are incapable of building technology companies",
      "young founders work longer hours than older founders",
      "the fund's limited partners prefer young founders"
    ],
    answer: 0,
    explanation: "The argument projects a historical pattern onto future investments; without the assumption that the pattern persists, past founding ages are irrelevant to where future returns lie. The other options assert more than the argument needs.",
    difficulty: 'Hard'
  },
  {
    id: 7,
    type: 'Weaken',
    stimulus: `An economics columnist argues: 'India's quick-commerce sector, which promises ten-minute grocery delivery, is fundamentally unsound. Its dark stores lose money on every order, and no amount of scale can fix a business that loses money on each unit it sells.'`,
    question: "Which of the following, if true, most weakens the columnist's argument?",
    options: [
      "Comparable retail formats saw per-order losses turn positive as store order volumes rose",
      "Several quick-commerce firms have recently raised large funding rounds from global investors",
      "Customers report high satisfaction with ten-minute delivery in the cities served",
      "Grocery margins in India are thinner than in most other large markets"
    ],
    answer: 0,
    explanation: "The columnist's premise is that per-unit losses are structural, immune to scale. Option A shows per-order economics improving with density precisely because scale spreads fixed costs, attacking the premise directly. Funding rounds and satisfaction do not address unit economics; thin margins support the columnist.",
    difficulty: 'Hard'
  },
  {
    id: 8,
    type: 'Strengthen',
    stimulus: `A linguistics professor argues that the dominance of English in Indian higher education harms first-generation students: 'Students schooled in regional languages consistently underperform in English-medium entrance examinations, even in subjects like mathematics where language should be peripheral.'`,
    question: "Which of the following, if true, most strengthens the professor's argument?",
    options: [
      "Regional-language schools often have fewer resources than English-medium schools do",
      "English proficiency correlates strongly with household income in urban India",
      "A matched sample's performance gap narrowed by over half when the same maths exam was given in translation",
      "Most competitive examinations in India are offered only in English and Hindi"
    ],
    answer: 2,
    explanation: "The professor claims the language of instruction itself handicaps students, even in non-verbal subjects. A controlled translation experiment in which the gap narrows isolates language as the cause. The resources option offers an alternative explanation, which weakens the claim.",
    difficulty: 'Hard'
  },
  {
    id: 9,
    type: 'Inference',
    stimulus: `A study of civil services found that officers who had served in the districts were significantly more likely to be rated effective administrators than officers who had spent their careers in state capitals. The study's authors caution that postings are not assigned randomly.`,
    question: "Which of the following is best supported by the study and its authors' caution?",
    options: [
      "The observed link between district service and effectiveness may reflect which officers are chosen for district postings rather than the effect of the postings themselves",
      "District service makes officers better administrators",
      "Officers in state capitals are less talented than those in districts",
      "Posting assignments in the civil services are arbitrary"
    ],
    answer: 0,
    explanation: "The caution about non-random assignment flags selection effects: effectiveness might cause the posting rather than result from it. Option A captures exactly that. Option B ignores the caution; options C and D overstate or misstate it.",
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
      "Some applicants do not read job descriptions carefully",
      "Postings with the phrase were disproportionately for higher-paying roles in metropolitan cities",
      "The platform's user base has grown rapidly",
      "Roles emphasising teamwork are also popular among applicants"
    ],
    answer: 1,
    explanation: "The conclusion attributes the applicant surplus to the phrase. Option B offers an alternative cause: those postings were better-paid metro roles, which attract applicants regardless of wording. The other options do not break the attribution.",
    difficulty: 'Moderate'
  },
  {
    id: 12,
    type: 'Inference',
    stimulus: `Between 2015 and 2025, the share of Indian households with air conditioners doubled, while the average electricity consumed per air-conditioned household fell. Manufacturers attribute the decline to stricter efficiency standards; power utilities credit the shift to inverter compressors, which the standards mandated.`,
    question: "Which of the following is best supported by the information above?",
    options: [
      "Efficiency standards caused the entire decline in consumption per household",
      "The decline in per-household consumption may be explained by technology adopted in response to regulation",
      "Total residential electricity consumption for cooling necessarily fell over the decade",
      "Inverter compressors are cheaper to manufacture than conventional ones"
    ],
    answer: 1,
    explanation: "The two attributions are compatible: standards mandated the technology that reduced consumption, and option B states only that modest combined claim. Option A overclaims causation; option C confuses per-household decline with total consumption, which could rise with twice as many households; option D is unsupported.",
    difficulty: 'Hard'
  },
  {
    id: 13,
    type: 'Strengthen',
    stimulus: `A historian argues that the 1918 influenza pandemic hastened the acceptance of germ theory among the Indian public: 'After 1918, municipalities that had resisted sanitation reform on grounds of cost began funding drainage and water projects at unprecedented levels.'`,
    question: "Which of the following, if true, most strengthens the historian's argument?",
    options: [
      "The 1918 pandemic killed more people in India than in any other country",
      "Sanitation technology improved considerably in the years after 1918",
      "Germ theory had been accepted in European medical schools decades before 1918",
      "The worst-hit municipalities were the earliest and most generous funders of sanitation"
    ],
    answer: 3,
    explanation: "The argument links the pandemic to the funding shift. If the worst-hit municipalities funded first and most, the pandemic is tied to the behaviour by dosage, which strongly supports causation. Better technology (option B) offers a rival explanation; options A and C are not relevant to the municipal response.",
    difficulty: 'Hard'
  },
  {
    id: 14,
    type: 'Assumption',
    stimulus: `An investor newsletter argues: 'Gold will underperform equities over the next decade. In every ten-year period since 1980 when real interest rates were positive, equities beat gold, and central banks now signal that real rates will stay positive.'`,
    question: "The newsletter's argument assumes that:",
    options: [
      "gold has never outperformed equities in any decade",
      "central banks' signals about future policy are a reliable guide to actual future real rates",
      "equities are always riskier than gold",
      "inflation will remain low for the next decade"
    ],
    answer: 1,
    explanation: "The historical regularity is conditional on real rates staying positive; to carry the conclusion, the signal that they will stay positive must be dependable, which is option B. Option D is close but not required: low inflation is neither necessary nor sufficient for positive real rates. Options A and C are extreme claims the argument does not need.",
    difficulty: 'Hard'
  },
  {
    id: 15,
    type: 'Weaken',
    stimulus: `A state education department credits its free laptop scheme for a rise in Class 12 pass rates, noting that pass rates rose from 74 to 81 percent in the three years after laptops were distributed to all government-school students.`,
    question: "Which of the following, if true, most weakens the department's claim?",
    options: [
      "Many students use the laptops mainly for entertainment rather than study",
      "Private schools in the state, which received no laptops, already had pass rates above 90 percent",
      "Teacher vacancies in the state remained high throughout the period",
      "The evaluation board moved to a lenient rubric and lowered the pass mark in two subjects"
    ],
    answer: 3,
    explanation: "Option D attacks causation directly: the measure itself became easier to meet, so the rise need not reflect learning at all. Option B compares levels of pass rates, not the change, and so does not touch the claim. Options A and C describe weaknesses in the scheme that do not break the link between laptops and the rise.",
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
      "Average arterial road speeds during rationing months were no higher than in other months",
      "Public transport ridership rose during rationing months",
      "Rationing cut vehicle-kilometres by about a quarter, yet crashes per vehicle-kilometre rose slightly",
      "Delhi's registered vehicle count rose steadily over the decade"
    ],
    answer: 2,
    explanation: "The researcher claims rationing did not reduce crashes. Option C shows exposure fell sharply yet the crash rate per unit of exposure rose, so the policy looks worse than neutral per kilometre driven. Option A is consistent with the claim but adds little. Options B and D do not bear on crashes.",
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
      "Traditional credit scoring excludes almost anyone without a prior repayment history on record",
      "Mobile-phone penetration in rural areas has risen sharply over the past five years",
      "The firm's loan default rate is lower than the industry average across its portfolio",
      "The algorithm charges systematically higher rates to borrowers from poorer regions, who are the most likely to lack credit histories"
    ],
    answer: 3,
    explanation: "The fairness claim rests on inclusion of the previously excluded. Option D shows the included group is charged systematically worse terms along a dimension of disadvantage, undercutting 'fairer' even though inclusion is real. Option A supports the claim's premise; options B and C are irrelevant to fairness.",
    difficulty: 'Hard'
  },
  {
    id: 20,
    type: 'Inference',
    stimulus: `In a famous experiment, diners at a buffet with plates two inches smaller in diameter served themselves roughly 20 percent less food and reported equal satisfaction. The researchers concluded that plate size is a powerful lever on consumption.`,
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
      "Reminders are cheaper than door-to-door vaccination drives",
      "Parents who ignore reminders are opposed to vaccination",
      "Mobile phone ownership is universal in the district",
      "The pilot's participants are representative of the district's parents in the factors that determine response to reminders"
    ],
    answer: 3,
    explanation: "Generalising from a pilot to the district requires that the pilot's results transfer, which is option D. The plan does not need reminders to be the cheapest method, does not presume resisters are ideological, and does not require universal ownership, only enough reach.",
    difficulty: 'Moderate'
  },
  {
    id: 22,
    type: 'Weaken',
    stimulus: `A popular science writer claims: 'Bilingual children are better at multitasking. Studies show that bilinguals outperform monolinguals on tasks that require switching between rules, because managing two languages exercises the brain's control systems.'`,
    question: "Which of the following, if true, most weakens the writer's claim?",
    options: [
      "Some bilingual children struggle with vocabulary in both of their languages",
      "Bilingual children in the studies came mostly from families with high parental involvement, itself linked to better executive function",
      "Several of the studies of bilingual children were conducted in schools in a single city",
      "Adults who learn a second language also show gains on rule-switching tasks"
    ],
    answer: 1,
    explanation: "The causal chain runs from bilingualism, through exercised control systems, to better switching. Option B supplies a confounder, family background, that could produce the gap without the claimed mental exercise. Option C names a feature of the studies that says nothing about their results. Options A and D are consistent with the claim or irrelevant to it.",
    difficulty: 'Hard'
  },
  {
    id: 23,
    type: 'Inference',
    stimulus: `After a coastal city invested heavily in sea walls, flood damage during the next major storm was lower than in the previous storm a decade earlier. However, total spending on disaster recovery, including maintenance of the walls and higher insurance premiums in the protected zone, exceeded the savings from the avoided damage.`,
    question: "Which of the following is best supported by the statements above?",
    options: [
      "The sea walls were not worth building",
      "The previous storm a decade earlier was more severe",
      "Lower storm damage does not by itself establish that protective investment was economically justified",
      "Insurance premiums in the city rose because of the sea walls"
    ],
    answer: 2,
    explanation: "The passage separates avoided damage from total cost and finds the latter higher, which supports the general caution in option C. Option A overreaches, since future storms and non-monetary benefits are unconsidered; options B and D assert causes the passage does not give.",
    difficulty: 'Moderate'
  },
  {
    id: 24,
    type: 'Strengthen',
    stimulus: `An agricultural economist argues that India's millet revival is demand-led rather than subsidy-led: 'Consumption of millets rose fastest in urban districts where millet procurement prices received no special support.'`,
    question: "Which of the following, if true, most strengthens the economist's argument?",
    options: [
      "Millet production is heavily subsidised in several southern states of India",
      "Millet consumption kept rising in districts where price support was later withdrawn",
      "Urban households spend a larger share of their income on food than rural households do",
      "International Year of Millets campaigns increased global awareness of the grain"
    ],
    answer: 1,
    explanation: "The argument separates demand from price support. Option B shows consumption continuing to rise when support is removed, which is what a demand-led revival predicts. Options A and D are consistent with either account, and option C does not bear on the subsidy question.",
    difficulty: 'Hard'
  },
  {
    id: 25,
    type: 'Inference',
    stimulus: `Over five years, a state's public libraries extended evening hours and added free Wi-Fi. Membership rose by 35 percent, but the number of books borrowed per member fell. Library staff say most of the new members are students who come to study their own material in the reading rooms.`,
    question: "All of the following can be inferred from the information above EXCEPT:",
    options: [
      "The extended hours caused the total number of books borrowed across the state to decline.",
      "Some of the growth in membership has not been accompanied by more book borrowing.",
      "The fall in borrowing per member does not, by itself, show that the libraries are being used less.",
      "Evening hours and Wi-Fi may have drawn in users who rarely borrow books."
    ],
    answer: 0,
    explanation: "Membership grew 35 percent while borrowing per member fell. Total borrowing could therefore have fallen, stayed flat or even risen, and nothing links any change to the extended hours. The other three statements are cautious readings the facts allow. This is the EXCEPT format, which CAT also uses in its inference questions.",
    difficulty: 'Hard'
  },
  {
    id: 26,
    type: 'Weaken',
    stimulus: `A city police department credits its new predictive-policing software for a 20 percent drop in burglaries, noting that the software directs patrols to blocks where past incidents cluster.`,
    question: "Which of the following, if true, most undermines the department's attribution of the drop to the software?",
    options: [
      "Residential burglary is a small share of all property crime in the city",
      "The software vendor claims accuracy of over 90 percent in predicting hotspots",
      "A sting operation had meanwhile led to the arrest of a ring behind a large share of break-ins",
      "Some officers say they distrust algorithmic patrol assignments"
    ],
    answer: 2,
    explanation: "Option C supplies a specific alternative cause that could account for a large share of the fall. Option A says nothing about the drop, option B is a vendor claim and option D reports sentiment. None of these bears on attribution.",
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
    type: 'Inference',
    stimulus: `After a rule required restaurants to display calorie counts, a study of 400 outlets found that average calories per order fell by 3 percent at chain restaurants and did not change at standalone restaurants. Several chains also reformulated dishes to cut calories around the time the rule came in. Standalone restaurants made no menu changes.`,
    question: "Which one of the following can be most reasonably inferred?",
    options: [
      "The fall at chain restaurants may be partly due to menu changes rather than to customers choosing differently.",
      "Displaying calorie counts lowers the calories ordered at all restaurants.",
      "Customers of standalone restaurants ignore calorie counts.",
      "Food at chain restaurants is generally healthier than food at standalone restaurants."
    ],
    answer: 0,
    explanation: "Two things changed at chains at the same time, labels and recipes, so the fall cannot be credited wholly to customer behaviour. The claim about all restaurants generalises, the claim that standalone customers ignore labels reads 'no change in orders' as indifference, and the comparison of healthiness is not something the study measures.",
    difficulty: 'Moderate'
  },
  {
    id: 29,
    type: 'Inference',
    stimulus: `A survey of 2,000 first-year MBA students found that those who had worked for at least two years before joining reported higher stress during placement season than those who came straight from college. The same experienced students were, however, more likely to receive multiple offers.`,
    question: "Which one of the following can be most reasonably inferred from the survey?",
    options: [
      "Work experience makes candidates more employable but also more anxious.",
      "Students who come straight from college are less ambitious about placements.",
      "Among the surveyed students, higher stress during placements did not stop experienced students from getting more offers.",
      "Stress during placement season reduces the number of offers a student receives."
    ],
    answer: 2,
    explanation: "The survey only reports two co-occurring facts, and the correct option restates them without adding a cause. The claim that experience causes both outcomes is a causal leap, the claim about stress lowering offers reverses the stated relation without evidence, and ambition is never measured.",
    difficulty: 'Moderate'
  },
  {
    id: 30,
    type: 'Weaken',
    stimulus: `An education minister defends a steep cut in university research grants: 'Our universities produce thousands of papers that nobody reads. Redirecting grant money to teaching will serve students better than funding unread research.'`,
    question: "Which of the following, if true, most weakens the minister's case?",
    options: [
      "Some university research papers are cited thousands of times by other scholars",
      "Most students say they value teaching quality over the research prestige of their university",
      "The private sector funds a growing share of university research in other countries",
      "Universities with stronger research output attract better faculty, and their students score higher on independent tests"
    ],
    answer: 3,
    explanation: "The minister assumes research spending does not serve students. Option D links research strength to faculty quality and student outcomes, showing the two goals are coupled rather than competing. Option A addresses readership, not the student-benefit claim; options B and C are consistent with the minister's case.",
    difficulty: 'Hard'
  },
  {
    id: 31,
    type: 'Inference',
    stimulus: `A railway ministry proudly reported that punctuality had improved for the fifth straight year, with trains arriving on average nine minutes closer to schedule than five years ago. A passenger association responded that over the same period, the scheduled journey times on major routes had been lengthened by fifteen minutes.`,
    question: "Which of the following is best supported by the exchange?",
    options: [
      "Trains are faster than they were five years ago",
      "The passenger association opposes railway modernisation",
      "The punctuality gains claimed by the ministry may reflect relaxed schedules rather than improved operations",
      "Nine minutes is an insignificant improvement"
    ],
    answer: 2,
    explanation: "If scheduled times were padded by fifteen minutes while arrivals improved by nine, the metric can improve without any true operational gain, which is option C. The passage does not establish actual speed, the association's broader views, or a significance judgment.",
    difficulty: 'Moderate'
  },
  {
    id: 32,
    type: 'Inference',
    stimulus: `Critics say short-video platforms have shrunk attention spans. A psychologist replies that every new medium, from the novel to television, drew the same complaint, and that measured attention on long tasks such as reading has shown no consistent decline across generations. What has changed, she suggests, is the number of tempting alternatives available at any moment.`,
    question: "The psychologist would most likely agree with which one of the following?",
    options: [
      "Short-video platforms are harmless to concentration.",
      "Complaints about new media are always baseless.",
      "Difficulty in sustaining attention may owe more to abundant distractions than to a reduced capacity to attend.",
      "Reading long texts holds attention better than watching short videos."
    ],
    answer: 2,
    explanation: "She denies a decline in capacity and points to a rise in distractions, which the correct option expresses. The claim that the platforms are harmless overreaches, 'always baseless' stretches 'drew the same complaint', and she never compares reading with video.",
    difficulty: 'Moderate'
  },
  {
    id: 33,
    type: 'Weaken',
    stimulus: `An economic adviser argues that India's semiconductor fabrication push will succeed where earlier electronics manufacturing drives stalled: 'The government has committed production-linked incentives, land and power at scale. The missing ingredient was always commitment, and that is now supplied.'`,
    question: "Which of the following, if true, most weakens the adviser's argument?",
    options: [
      "Fabrication success depends on dense supplier and engineering ecosystems that take a decade or more to build",
      "Semiconductor fabrication requires ultrapure water in very large quantities every day",
      "Several other countries have announced their own incentive programmes for chip making",
      "The earlier electronics manufacturing drives were smaller in scale than the current one"
    ],
    answer: 0,
    explanation: "The adviser claims commitment was the missing ingredient. Option A asserts the true bottleneck is an ecosystem that money cannot quickly buy, attacking the causal premise directly. Water requirements and foreign programmes are obstacles but do not rebut the commitment thesis as cleanly; option D supports the adviser.",
    difficulty: 'Hard'
  },
  {
    id: 34,
    type: 'Inference',
    stimulus: `In a city where taxi fares are fixed by law, drivers report that their earnings per hour are highest on rainy days and lowest on clear afternoons, although fares are the same on both. Ride requests roughly double when it rains.`,
    question: "Which one of the following best explains the drivers' reports?",
    options: [
      "Drivers work longer hours when it rains.",
      "Passengers tip more generously when it rains.",
      "With more requests, drivers spend less time idle between rides, so their earnings per hour rise even though fares are fixed.",
      "Fixed fares guarantee that earnings are the same every day."
    ],
    answer: 2,
    explanation: "Earnings per hour depend on fare per ride and on how many rides fit in an hour. Fares are fixed, but doubled demand shortens idle time, which explains the gap. Longer hours would not change earnings per hour, tips are not mentioned, and the last option contradicts the drivers' reports.",
    difficulty: 'Moderate'
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
    type: 'Inference',
    stimulus: `A city's metro authority reserved the first coach on every train for women. A year later it reported that complaints of harassment on trains had fallen by 40 percent. A commuter group points out that the authority counted complaints received on its helpline, and that the helpline number was changed halfway through the year.`,
    question: "Which one of the following is best supported by the information above?",
    options: [
      "Incidents of harassment on the metro fell by about 40 percent.",
      "The women-only coach has failed to reduce harassment.",
      "The authority altered its figures deliberately to show success.",
      "The reported 40 percent fall is weak evidence that incidents of harassment fell, because what was counted may have changed with the helpline."
    ],
    answer: 3,
    explanation: "The authority measured complaints, not incidents, and the channel for complaints changed. So the fall may reflect reporting, not harassment, which is the careful reading. Accepting the 40 percent as a fall in incidents ignores this. The claims that the coach has failed or that the authority altered figures go beyond the commuter group's point, which questions the measure.",
    difficulty: 'Hard'
  },
  {
    id: 37,
    type: 'Inference',
    stimulus: `Folklorists in a coastal community found the same flood story told with three endings: villagers are saved by a boatman, by a goddess, or by the sea's retreat. Older residents mostly tell the boatman version, and younger residents increasingly tell the sea's-retreat version. Residents who have moved to the city tell all three interchangeably.`,
    question: "Which one of the following is best supported by the information above?",
    options: [
      "The goddess version is the oldest of the three.",
      "The boatman in the story was a real person.",
      "Which version is told appears to vary with generation, and seems less fixed for people living away from the community.",
      "Younger residents have stopped believing in the goddess."
    ],
    answer: 2,
    explanation: "The facts give a generational pattern and a looser pattern among those who left, which the correct option states. Nothing dates the goddess version, nothing speaks to the boatman's reality, and a version being told less says nothing about belief.",
    difficulty: 'Moderate'
  },
  {
    id: 38,
    type: 'Inference',
    stimulus: `Researchers who reviewed sixty years of court records in one country found that harsher sentencing laws were followed by fewer reported thefts over the next two years, but the effect had disappeared by the fifth year. Police budgets rose during the same period.`,
    question: "All of the following are consistent with the findings above EXCEPT:",
    options: [
      "The short-term fall in thefts may have had causes other than the harsher laws.",
      "Harsher sentencing laws have been shown never to deter theft.",
      "The data do not demonstrate any lasting deterrent effect of harsher laws.",
      "Reported thefts and actual thefts may differ."
    ],
    answer: 1,
    explanation: "The findings show a short-lived fall followed by no effect, with a rival cause in the form of larger police budgets. They cannot show that harsher laws never deter, since a two-year fall was observed. The other three statements are all things the data leave open or support.",
    difficulty: 'Hard'
  },
  {
    id: 39,
    type: 'Inference',
    stimulus: `A software firm abolished performance rankings and saw resignations among its highest-rated engineers triple, while resignations among average performers fell by half. The firm's HR head concluded that rankings had been functioning as a retention tool for top performers.`,
    question: "Which of the following is most strongly supported?",
    options: [
      "Whatever else rankings did, they appear to have contributed to keeping top-rated engineers at the firm",
      "Abolishing rankings was a mistake",
      "Average performers disliked rankings more than top performers did",
      "The firm's top engineers left to found startups"
    ],
    answer: 0,
    explanation: "The post-abolition divergence in resignations supports the HR head's modest causal reading for top performers, which is option A. Whether abolition was a mistake overall requires weighing both groups, which the passage cannot settle; preferences and destinations are unreported.",
    difficulty: 'Moderate'
  },
  {
    id: 40,
    type: 'Inference',
    stimulus: `Historians note that the monsoon let sailors predict wind direction by season, so ships from Gujarat reached East Africa in winter and returned in summer. Trading communities therefore settled for months at ports on both coasts, and merchants who could not travel with the monsoon hired local agents.`,
    question: "All of the following can be inferred from the passage EXCEPT:",
    options: [
      "Seasonal winds shaped when voyages could take place.",
      "Some merchants relied on agents because their own timing did not fit the wind pattern.",
      "Traders stayed at ports for long periods partly because of the sailing calendar.",
      "The monsoon made voyages between Gujarat and East Africa safer than voyages in any other sea."
    ],
    answer: 3,
    explanation: "The passage says the monsoon made sailing predictable. It says nothing about safety, and nothing comparing the route with any other sea. The other three options follow directly from the winds, the months-long stays and the hiring of agents.",
    difficulty: 'Hard'
  },
  {
    id: 41,
    type: 'Inference',
    stimulus: `A hospital found that patients discharged on Fridays were readmitted within a week more often than patients discharged on other days. Fewer pharmacists and social workers are on duty at the hospital over weekends.`,
    question: "All of the following are consistent with the information above EXCEPT:",
    options: [
      "Friday discharges are readmitted solely because the hospital is understaffed on weekends.",
      "Weekend staffing may affect the support patients get after discharge.",
      "Patients discharged on Fridays may be sicker on average than other patients.",
      "Readmission rates may differ by the day of discharge."
    ],
    answer: 0,
    explanation: "The data permit staffing as one explanation but do not exclude others, such as sicker patients. 'Solely' turns a possible cause into the only cause, which the facts cannot support. The remaining options are all open possibilities.",
    difficulty: 'Hard'
  },
  {
    id: 42,
    type: 'Inference',
    stimulus: `A coastal state's tourism department advertised its beaches with the slogan 'Unspoiled'. International arrivals rose by a third, and within three years the district's coral cover had declined measurably, its freshwater table had fallen, and room rates had tripled, driving older family-run guesthouses out of business.`,
    question: "Which of the following is best supported by the passage?",
    options: [
      "The slogan was false advertising",
      "The state should ban international tourists",
      "The qualities that attract tourists to a destination can be destroyed by the tourism they attract",
      "Coral decline was caused by guesthouse closures"
    ],
    answer: 2,
    explanation: "The sequence links marketed unspoiledness to ecological and social damage from the resulting influx, which is the generalisation in option C. The slogan may have been true when coined; the ban and the reversed causation in option D are unsupported.",
    difficulty: 'Moderate'
  },
  {
    id: 43,
    type: 'Inference',
    stimulus: `Two cities of similar size tried to cut plastic bag use. City P charged five rupees per bag, and use of single-use bags fell by 70 percent. City Q banned single-use bags and fined shopkeepers, and use of single-use bags fell by 50 percent, though sales of thicker reusable plastic bags in City Q rose sharply.`,
    question: "Which one of the following is best supported by the information above?",
    options: [
      "Charging for bags is more effective than banning them in every city.",
      "The 50 percent fall in single-use bags in City Q may overstate the fall in City Q's total plastic use.",
      "Shopkeepers in City Q resisted the ban more than shopkeepers in City P.",
      "Residents of City P care more about the environment than residents of City Q."
    ],
    answer: 1,
    explanation: "The rise in thicker reusable bags suggests that some plastic use shifted rather than disappeared, which the correct option says. Generalising from two cities, inventing shopkeeper resistance and inventing resident attitudes all go beyond the data.",
    difficulty: 'Hard'
  },
  {
    id: 44,
    type: 'Inference',
    stimulus: `Early economists left household work out of national income because it earns no wage. Later scholars observed that if a family hires a cook and a nanny, their pay is counted in national income, but if a family member does the same tasks nothing is recorded. National income, they argued, partly measures how many activities have moved into the market, not how much is produced.`,
    question: "The scholars' reasoning most strongly supports which one of the following inferences?",
    options: [
      "Households produce more than markets do.",
      "A rise in measured national income can occur without any rise in actual output.",
      "Household work should be paid a wage by the state.",
      "Hiring domestic help is wasteful for families."
    ],
    answer: 1,
    explanation: "If tasks shift from unpaid family work to paid work, the same output is newly counted, so measured income rises without more being produced. Comparing households with markets, proposing a wage for household work and calling hiring wasteful all go beyond the scholars' reasoning.",
    difficulty: 'Hard'
  },
  {
    id: 45,
    type: 'Inference',
    stimulus: `When a national park banned private vehicles and introduced electric shuttle buses, sightings of the park's tigers near tourist routes fell by half. Wildlife biologists offered two readings: the tigers had withdrawn from the noisier edges of their habitat, or they had merely become harder to spot from the slower, more crowded shuttles.`,
    question: "Which of the following is best supported by the passage?",
    options: [
      "The vehicle ban harmed the tigers",
      "Electric shuttles are worse for the environment than private vehicles",
      "Tigers prefer quiet habitats",
      "A change in observed wildlife sightings need not indicate a change in wildlife"
    ],
    answer: 3,
    explanation: "The two rival readings share the lesson that observation depends on the observer's method, which is option D's modest claim. The passage cannot settle which reading is true, so options A and C outrun it; option B contradicts the evident intent of the policy without support.",
    difficulty: 'Moderate'
  },
  {
    id: 46,
    type: 'Inference',
    stimulus: `An airline reports that its on-time arrival rate rose from 72 to 85 percent after it lengthened the scheduled flight time on its busiest routes by ten minutes. Passenger surveys show no change in satisfaction with punctuality.`,
    question: "Which one of the following is most strongly suggested by the information above?",
    options: [
      "Lengthening scheduled times made the aircraft fly faster.",
      "The improved on-time rate may reflect easier targets rather than faster actual journeys.",
      "Passengers do not care whether flights arrive on time.",
      "The airline's operational efficiency has declined."
    ],
    answer: 1,
    explanation: "A flight counts as on time against its schedule. If the schedule gets ten minutes longer, more flights qualify without any change in actual speed. Aircraft flying faster and passengers not caring about punctuality are not supported, and a decline in efficiency has no support either way.",
    difficulty: 'Moderate'
  },
  {
    id: 47,
    type: 'Inference',
    stimulus: `After a fourth operator entered a country's mobile market, data prices fell by 30 percent in the first year. In the next two years prices stopped falling, even though the new operator's subscriber base kept growing. Two older operators merged in the third year.`,
    question: "Which one of the following is the most reasonable reading of the information above?",
    options: [
      "A new entrant has no lasting effect on prices.",
      "Prices will begin to rise again in the fourth year.",
      "The new operator has been unprofitable.",
      "The merger may have weakened the competitive pressure that the new entrant had created."
    ],
    answer: 3,
    explanation: "Prices stopped falling after the merger while the entrant kept growing, so a reduction in competition is a plausible reading. 'No lasting effect' overstates, a forecast of rising prices goes beyond the data, and nothing is said about the entrant's profit.",
    difficulty: 'Hard'
  },
  {
    id: 48,
    type: 'Inference',
    stimulus: `Vernacular newspapers in colonial India often carried advertisements for imported soaps in readers' own languages, using local deities and proverbs. Scholars suggest these advertisements did more than sell a product: they taught readers that foreign goods could sit comfortably within familiar moral worlds.`,
    question: "Which one of the following is LEAST supported by the scholars' view?",
    options: [
      "Advertisers adapted their messages to the cultural references of readers.",
      "Vernacular newspapers refused to carry advertisements written in English.",
      "Advertising can shape attitudes to a product beyond persuading people to buy it.",
      "Readers were encouraged to see imported goods as compatible with their own values."
    ],
    answer: 1,
    explanation: "Nothing in the scholars' view concerns newspapers refusing English advertisements. The other three options restate what the scholars say about adaptation, wider influence and compatibility with local values.",
    difficulty: 'Moderate'
  },
  {
    id: 49,
    type: 'Inference',
    stimulus: `A chess federation replaced knockout tournaments with round-robin leagues. Upset victories by lower-rated players fell sharply, and sponsors complained that the drama had gone out of the game, even as the federation noted that the final standings now reflected players' true strength far more reliably.`,
    question: "Which of the following is best supported by the passage?",
    options: [
      "Formats that maximise the chance of upsets and formats that best measure skill are not the same",
      "Knockout formats are unfair to lower-rated players",
      "Sponsors should have no say in tournament design",
      "Round-robin leagues are cheaper to organise"
    ],
    answer: 0,
    explanation: "The passage shows fewer upsets alongside more reliable measurement, so the two goals diverge, which is option A. Fairness to underdogs, sponsors' rights and costs are not addressed.",
    difficulty: 'Moderate'
  },
  {
    id: 50,
    type: 'Inference',
    stimulus: `'A translation is never a mere carrying across of meaning,' writes a critic. 'A translator who renders every idiom literally produces a text no reader can trust. A translator who replaces every idiom with a local equivalent produces a text no reader can place. Good translation lives in the decisions between these two failures.'`,
    question: "The critic would most likely agree with which one of the following?",
    options: [
      "Literal translation is preferable to adaptation.",
      "Translators should avoid idioms altogether.",
      "Local equivalents make a translated text more trustworthy.",
      "A translator's skill lies in judging when to keep the source's flavour and when to adapt it."
    ],
    answer: 3,
    explanation: "The critic calls both extremes failures and locates quality in the decisions between them, which the correct option states. Preferring literal translation or local equivalents each endorses one extreme, and avoiding idioms ignores the point that they must be handled.",
    difficulty: 'Moderate'
  }
];
