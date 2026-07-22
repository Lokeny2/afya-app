// import-data.ts
import { getCliClient } from "sanity/cli";

const client = getCliClient();

const conditions = [
  {
    _type: "condition",
    title: "Breast Cancer",
    category: "major",
    description:
      "A heterogeneous group of malignancies typically originating in the ductal or lobular epithelium of the mammary tissue, characterized by uncontrolled cellular growth and potential for lymphatic metastasis.",
    symptoms: [
      "New palpable lumps in the breast or underarm",
      "Skin dimpling or puckering",
      "Nipple retraction or inversion",
      "Redness, scaling, or thickening of the nipple or breast skin",
      "Unusual nipple discharge other than breast milk",
    ],
    riskFactors: [
      "Genetic mutations (BRCA1, BRCA2, PALB2)",
      "Family history of breast or ovarian cancer",
      "Advanced age",
      "Personal history of dense breast tissue",
      "Obesity and physical inactivity",
      "Long-term use of hormone replacement therapy",
    ],
    earlyWarningSigns: [
      "Changes in the size or shape of the breast",
      "A localized area of pain that does not resolve with the menstrual cycle",
      "A lump that feels different from the surrounding tissue",
    ],
    diagnosticOverview:
      "Initial evaluation typically involves diagnostic mammography, ultrasound, or MRI; definitive diagnosis is confirmed via tissue biopsy to evaluate tumor grade and hormone receptor status (ER, PR, HER2).",
    screeningGuidelines:
      "Women at average risk should begin annual mammography at age 40; high-risk individuals (e.g., those with a BRCA mutation or first-degree relative) may initiate screening as early as age 30 with annual adjunct MRI.",
    mythBusting:
      "It is a common myth that surgery or needle biopsies cause cancer to spread; surgeons follow strict protocols to prevent 'seeding.' Additionally, antiperspirants and underwire bras have no proven link to breast cancer risk.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Lung Cancer",
    category: "major",
    description:
      "The most lethal malignancy globally, lung cancer typically involves bronchogenic carcinoma and often remains asymptomatic until the disease has reached advanced stages.",
    symptoms: [
      "Persistent cough that does not go away",
      "Hemoptysis (coughing up blood)",
      "Chest pain that worsens with deep breathing or coughing",
      "Hoarseness",
      "Recurrent respiratory infections like pneumonia",
    ],
    riskFactors: [
      "Current or former long-term tobacco use",
      "Exposure to secondhand smoke",
      "Exposure to radon gas or asbestos",
      "Occupational exposure to carcinogens",
      "Personal or family history of lung disease",
    ],
    earlyWarningSigns: [
      "New onset of shortness of breath during exertion",
      "Unexplained weight loss",
      "Persistent fatigue",
      "A cough lasting more than three weeks",
    ],
    diagnosticOverview:
      "Clinical evaluation includes Low-Dose Computed Tomography (LDCT) imaging, sputum cytology, and tissue biopsy; molecular testing for genetic markers (EGFR, ALK) often guides targeted therapy.",
    screeningGuidelines:
      "Annual LDCT is recommended for adults aged 50–80 with a 20 pack-year smoking history who currently smoke or have quit within the last 15 years.",
    mythBusting:
      "Many believe 'light' or 'low-tar' cigarettes reduce risk, but they often lead to deeper inhalation of carcinogens. Furthermore, while urban pollution is a factor, smoking remains the dominant cause of lung cancer in the majority of cases.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Colorectal Cancer",
    category: "major",
    description:
      "A malignancy of the large intestine or rectum that frequently arises from adenomatous polyps, which can be identified and removed during screening to prevent cancer development.",
    symptoms: [
      "Persistent changes in bowel habits (diarrhea or constipation)",
      "Rectal bleeding or blood in the stool",
      "Dark, tarry, or black stools",
      "Abdominal cramping or persistent gas pain",
      "A feeling that the bowel does not empty completely",
    ],
    riskFactors: [
      "Age (45 years or older)",
      "Obesity",
      "Diets high in red or processed meats",
      "Personal or family history of polyps or colorectal cancer",
      "Chronic inflammatory bowel diseases like Crohn's or ulcerative colitis",
    ],
    earlyWarningSigns: [
      "Unexplained iron-deficiency anemia",
      "Unintentional weight loss",
      "Persistent bloating lasting more than two weeks",
    ],
    diagnosticOverview:
      "Visual inspection through colonoscopy is the gold standard; other methods include flexible sigmoidoscopy, CT colonography, and stool-based tests (FIT, gFOBT, or mt-sDNA).",
    screeningGuidelines:
      "Average-risk adults should begin regular screening at age 45. Preferred methods include a colonoscopy every 10 years or annual high-sensitivity stool-based testing.",
    mythBusting:
      "A dangerous misconception is that you only need screening if you have symptoms; however, colorectal cancer is most treatable when found through screening before any symptoms appear.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Type 2 Diabetes",
    category: "major",
    description:
      "A progressive metabolic disorder characterized by peripheral insulin resistance and beta-cell dysfunction, leading to chronically elevated blood glucose levels and systemic vascular damage.",
    symptoms: [
      "Excessive thirst (polydipsia)",
      "Frequent urination, especially at night (polyuria)",
      "Blurred vision",
      "Tingling or numbness in hands or feet",
      "Extreme fatigue",
    ],
    riskFactors: [
      "Overweight or obesity (BMI >25)",
      "Physical inactivity",
      "Family history of diabetes",
      "History of gestational diabetes",
      "Specific ethnic backgrounds (African American, Hispanic/Latino, Native American)",
    ],
    earlyWarningSigns: [
      "Pre-diabetes (A1C levels between 5.7% and 6.4%)",
      "Slow-healing wounds or sores",
      "Frequent skin, gum, or bladder infections",
    ],
    diagnosticOverview:
      "Diagnosis is confirmed via A1C testing, fasting plasma glucose tests, or oral glucose tolerance tests; routine monitoring of blood pressure and lipids is essential.",
    screeningGuidelines:
      "Adults should be screened every 3 years starting at age 35, or earlier for those with significant risk factors such as a high BMI.",
    mythBusting:
      "Eating sugar does not directly cause diabetes, though high-sugar diets contribute to obesity, which is a major risk factor. Additionally, requiring insulin does not mean you have 'failed' at management; Type 2 is progressive and may require insulin over time.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Hypertension",
    category: "major",
    description:
      "Also known as the 'silent killer,' hypertension is a chronic elevation of arterial blood pressure that strains the heart and damages vessels, often without causing symptoms.",
    symptoms: [
      "Typically asymptomatic",
      "Severe cases: Headaches, shortness of breath, or nosebleeds",
    ],
    riskFactors: [
      "High sodium (salt) intake",
      "Obesity and lack of physical activity",
      "Excessive alcohol consumption",
      "Chronic stress",
      "Family history of early heart disease",
    ],
    earlyWarningSigns: [
      "Pre-hypertension readings (120-139/80-89 mmHg)",
      "History of gestational hypertension during pregnancy",
    ],
    diagnosticOverview:
      "Diagnosed through multiple blood pressure readings taken over several weeks; home monitoring can help rule out 'white coat' hypertension.",
    screeningGuidelines:
      "All adults should have their blood pressure checked at least annually; those under 40 with normal readings and no risk factors may be checked every 3–5 years.",
    mythBusting:
      "It is a myth that you can 'feel' when your blood pressure is high; the only way to know is through a physical test. Furthermore, medication should not be stopped once levels return to normal, as the medication is often the cause of that normalization.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Coronary Artery Disease (CAD)",
    category: "major",
    description:
      "The most common form of heart disease, CAD occurs when major blood vessels supplying the heart become narrowed or blocked by plaque buildup (atherosclerosis).",
    symptoms: [
      "Angina (chest pressure or tightness)",
      "Shortness of breath",
      "Nausea or 'indigestion' sensations",
      "Cold sweats",
      "Pain in the neck, jaw, or left arm",
    ],
    riskFactors: [
      "High LDL cholesterol",
      "Smoking and tobacco use",
      "High blood pressure and diabetes",
      "Obesity and sedentary lifestyle",
      "Family history of early heart disease",
    ],
    earlyWarningSigns: [
      "Dizziness or fatigue during exertion",
      "Atypical palpitations",
      "Decreased stamina during exercise",
    ],
    diagnosticOverview:
      "Evaluated using EKG/ECG, exercise stress testing, echocardiography, and coronary calcium scoring via CT scan.",
    screeningGuidelines:
      "Traditional risk factors (cholesterol, blood pressure) should be checked every 4–6 years starting at age 20.",
    mythBusting:
      "A common misconception is that heart disease only affects the elderly; however, plaque buildup can begin in childhood, and risk factors are increasingly common in young and middle-aged adults.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Cervical Cancer",
    category: "major",
    description:
      "A malignancy of the cervix almost exclusively caused by persistent infection with high-risk strains of the Human Papillomavirus (HPV).",
    symptoms: [
      "Abnormal vaginal bleeding (after sex, between periods, or after menopause)",
      "Unusual vaginal discharge that may be watery, bloody, or have a foul odor",
      "Pelvic pain or pain during intercourse",
    ],
    riskFactors: [
      "Persistent high-risk HPV infection",
      "Smoking",
      "Weakened immune system (HIV or immunosuppressants)",
      "Long-term oral contraceptive use",
      "Multiple full-term pregnancies",
    ],
    earlyWarningSigns: [
      "Early stages are typically asymptomatic",
      "Subtle changes in discharge or unexplained pelvic discomfort",
    ],
    diagnosticOverview:
      "Screening involves the Pap test (cytology) and HPV DNA/RNA testing; abnormal results are followed up with colposcopy and tissue biopsy.",
    screeningGuidelines:
      "Screening should begin at age 21 with a Pap test every 3 years. From ages 30 to 65, women can transition to primary HPV testing or co-testing every 5 years.",
    mythBusting:
      "It is a myth that you don't need screening if you've been vaccinated for HPV; the vaccine protects against the most common types but not all. Also, cervical cancer is not restricted by gender identity; anyone born with a cervix requires screening.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Prostate Cancer",
    category: "major",
    description:
      "A malignant growth of the prostate gland, often progressing slowly, making 'shared decision-making' critical for management.",
    symptoms: [
      "Difficulty starting or stopping urination",
      "Weak or interrupted urinary flow",
      "Frequent nighttime urination (nocturia)",
      "Blood in the urine or semen",
      "Painful ejaculation",
    ],
    riskFactors: [
      "Advanced age",
      "African-American heritage",
      "Family history of prostate cancer",
      "Genetic predispositions (BRCA1/2 or Lynch syndrome)",
    ],
    earlyWarningSigns: [
      "Subtle increases in urinary frequency",
      "A 'weak' stream, though early stages are often entirely asymptomatic",
    ],
    diagnosticOverview:
      "Screening involves the Prostate-Specific Antigen (PSA) blood test and Digital Rectal Exam (DRE); confirmation requires transrectal ultrasound-guided biopsy.",
    screeningGuidelines:
      "Men at average risk should discuss screening with their provider at age 50. High-risk men (African Americans or those with a first-degree relative diagnosed early) should begin this discussion at age 40 or 45.",
    mythBusting:
      "A high PSA level does not always mean cancer; it can be elevated by inflammation (prostatitis) or benign enlargement (BPH). Informed choice is essential to avoid over-treatment of slow-growing tumors.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Alzheimer’s Disease",
    category: "major",
    description:
      "A fatal neurodegenerative disease characterized by amyloid plaques and tau tangles, resulting in the death of brain cells and progressive cognitive decline.",
    symptoms: [
      "Forgetting recently learned information",
      "Difficulty solving problems or planning",
      "Confusion with time or place",
      "Withdrawal from work or social activities",
      "Changes in mood or personality",
    ],
    riskFactors: [
      "Advanced age",
      "Genetics (APOE4 gene)",
      "History of head injuries",
      "Cardiovascular risk factors like hypertension and diabetes",
    ],
    earlyWarningSigns: [
      "Subtle changes in speech complexity",
      "Loss of sense of smell",
      "Difficulty managing complex financial tasks",
      "Apathy",
    ],
    diagnosticOverview:
      "Evaluation involves cognitive testing, neurological exams, brain imaging (MRI/PET), and emerging fluid biomarkers (blood or CSF) to detect amyloid and tau proteins.",
    screeningGuidelines:
      "While there is no universal screening, an annual cognitive assessment is recommended for adults over 65 during wellness visits.",
    mythBusting:
      "Memory loss is not a 'natural' part of aging; while minor forgetfulness occurs, Alzheimer's involves cellular death. Also, Alzheimer's and dementia are not the same; dementia is an umbrella term for symptoms, while Alzheimer's is a specific disease.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Melanoma",
    category: "major",
    description:
      "The most dangerous form of skin cancer, arising from pigment-producing melanocytes, with a high potential for rapid metastasis.",
    symptoms: [
      "A mole that changes in size, shape, or color",
      "A sore that does not heal",
      "Pigment spreading from the border of a spot into surrounding skin",
      "Redness or new swelling beyond the border of a mole",
    ],
    riskFactors: [
      "History of blistering sunburns",
      "High UV exposure (sun or tanning beds)",
      "Fair skin, light eyes, and red or blond hair",
      "Having more than 50 moles",
      "Family history of melanoma",
    ],
    earlyWarningSigns: [
      "The ABCDE signs: Asymmetry, Border irregularity, Color variation, Diameter >6mm, and Evolving change",
    ],
    diagnosticOverview:
      "Clinical dermatoscopic evaluation and full-thickness excisional biopsy; sentinel lymph node biopsy is used for staging deeper tumors.",
    screeningGuidelines:
      "Regular skin self-exams to monitor for new or changing lesions; annual professional skin exams are recommended for high-risk individuals.",
    mythBusting:
      "It is a myth that only fair-skinned people get melanoma; individuals with darker skin tones are also at risk and may develop melanoma in less obvious areas like the palms, soles, or under the nails.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "COPD (Chronic Obstructive Pulmonary Disease)",
    category: "major",
    description:
      "A group of progressive lung diseases, including emphysema and chronic bronchitis, that cause airflow blockage and difficulty breathing.",
    symptoms: [
      "Chronic cough, sometimes called a 'smoker's cough'",
      "Increased mucus production (sputum)",
      "Wheezing",
      "Chest tightness",
    ],
    riskFactors: [
      "Cigarette smoking (current or former)",
      "Long-term exposure to secondhand smoke or air pollution",
      "Occupational exposure to dust, fumes, and chemicals",
      "Alpha-1 antitrypsin deficiency (genetic)",
    ],
    earlyWarningSigns: [
      "Shortness of breath during mild activity (like climbing stairs)",
      "Feeling 'winded' more easily than peers",
      "Frequent respiratory infections",
    ],
    diagnosticOverview:
      "Diagnosis requires spirometry (a lung function test) to measure airflow; chest X-rays or CT scans may be used to evaluate lung structure.",
    screeningGuidelines:
      "Targeted screening via spirometry is recommended for current or former smokers over age 40 who report respiratory symptoms.",
    mythBusting:
      "Many people dismiss COPD symptoms as just 'getting older' or 'being out of shape,' but early detection can significantly slow disease progression and improve quality of life.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Asthma",
    category: "common",
    description:
      "A chronic condition characterized by airway inflammation and bronchospasm (narrowing) in response to various triggers.",
    symptoms: [
      "Shortness of breath",
      "Chest tightness",
      "Wheezing on exhalation",
      "Coughing that is worse at night or in the early morning",
    ],
    riskFactors: [
      "Family history of asthma",
      "Personal history of allergies (hay fever, eczema)",
      "Obesity",
      "Exposure to occupational irritants (smoke, fumes, dust)",
    ],
    earlyWarningSigns: [
      "Frequent dry coughing",
      "Decreased exercise endurance",
      "A longer recovery time following a respiratory infection",
    ],
    diagnosticOverview:
      "Confirmed through detailed medical history, physical exams, and pulmonary function tests (spirometry), often including a bronchodilator response test.",
    screeningGuidelines:
      "Symptom-based evaluation during annual physicals; focuses on identifying triggers and establishing a personalized Asthma Action Plan.",
    mythBusting:
      "It is a myth that asthma is 'all in the mind'; it is a physical inflammatory condition. Additionally, asthma is not strictly a childhood disease; adult-onset asthma is common and often linked to obesity.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Osteoarthritis",
    category: "common",
    description:
      "A serious, painful disease of the entire joint—including bone, cartilage, and ligaments—rather than just simple 'wear and tear'.",
    symptoms: [
      "Joint pain during or after activity",
      "Joint stiffness first thing in the morning or after resting",
      "Clicking or popping sounds (crepitus) when bending",
      "Swelling around the joint",
      "Muscle weakness and joint instability",
    ],
    riskFactors: [
      "Aging (typically over 50)",
      "Obesity",
      "Prior joint injury (e.g., torn ACL)",
      "Repetitive joint stress from sports or occupation",
      "Family history",
    ],
    earlyWarningSigns: [
      "Mild stiffness that resolves with movement",
      "Joint 'giving out' or buckling",
      "Pain in the groin or buttocks (indicating hip OA)",
    ],
    diagnosticOverview:
      "Clinical evaluation includes medical history, physical exams to assess range of motion, X-rays to show joint space narrowing, and MRIs for soft tissue evaluation.",
    screeningGuidelines:
      "Joint health assessment should be part of annual physicals, particularly for patients with a high BMI or history of joint trauma.",
    mythBusting:
      "Cracking your knuckles does not cause osteoarthritis. Furthermore, 'rest' is not the cure; movement is 'medicine' for joints, and regular exercise is essential for management.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Pancreatic Cancer",
    category: "major",
    description:
      "A highly aggressive malignancy often diagnosed at late stages due to the pancreas's deep anatomical location and the vague nature of early symptoms.",
    symptoms: [
      "Abdominal pain radiating to the back",
      "Loss of appetite",
      "Jaundice (yellowing of eyes/skin)",
      "Dark urine and itchy skin",
      "Changes in stool (oily or light-colored)",
    ],
    riskFactors: [
      "Smoking",
      "Long-standing Type 2 diabetes",
      "Chronic pancreatitis",
      "Obesity and high-fat diets",
      "Family history and specific genetic mutations (BRCA2, Lynch syndrome)",
    ],
    earlyWarningSigns: [
      "Painless jaundice",
      "Sudden onset of diabetes after age 50",
      "Deep, persistent back pain that does not change with position",
    ],
    diagnosticOverview:
      "Multi-phasic CT or MRI/MRCP imaging; endoscopic ultrasound (EUS) with fine-needle aspiration; and CA 19-9 as a supportive biomarker.",
    screeningGuidelines:
      "There is no standard screening for the general population. Surveillance programs involving annual EUS and MRI are reserved for high-risk individuals with known genetic predispositions.",
    mythBusting:
      "It is a myth that back pain is always musculoskeletal; in the case of pancreatic cancer, back pain can be caused by the tumor pressing on nerves deep in the abdomen.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Sleep Hygiene",
    category: "wellness",
    description:
      "The collection of behavioral habits and environmental settings required for consistent, high-quality, and restorative sleep.",
    symptoms: [],
    riskFactors: [],
    earlyWarningSigns: [
      "Difficulty concentrating",
      "Daytime sleepiness and irritability",
      "Excessive reliance on caffeine",
      "Frequent waking during the night",
    ],
    diagnosticOverview:
      "Assessed via self-reported sleep diaries and actigraphy; clinical polysomnography (sleep study) may be used if a disorder like apnea is suspected.",
    screeningGuidelines:
      "Most adults require 7–9 hours of sleep. Guidelines include maintaining a consistent wake time and avoiding screens 30–60 minutes before bed.",
    mythBusting:
      "The belief that some adults 'only need 5 hours' of sleep is largely a myth; true short-sleepers are extremely rare, and most people claiming this are chronically sleep-deprived.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Physical Activity",
    category: "wellness",
    description:
      "The integration of aerobic, strength, and flexibility exercises into daily life to reduce the risk of 13 types of cancer and manage chronic conditions.",
    symptoms: [],
    riskFactors: [],
    earlyWarningSigns: [
      "Shortness of breath during mild activity",
      "Muscle weakness",
      "Joint stiffness after short periods of sitting",
    ],
    diagnosticOverview:
      "Evaluated through physical fitness assessments, including aerobic capacity (VO2 max), grip strength, and body composition analysis.",
    screeningGuidelines:
      "A minimum of 150 minutes of moderate-intensity aerobic activity per week, plus muscle-strengthening activities on 2 or more days per week.",
    mythBusting:
      "Exercise does not have to be intense to be effective; even 10-minute bouts of brisk walking provide significant cumulative health benefits.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Nutritional Balance",
    category: "wellness",
    description:
      "A dietary pattern focused on whole, minimally processed foods to regulate blood sugar, reduce systemic inflammation, and provide essential micronutrients.",
    symptoms: [],
    riskFactors: [],
    earlyWarningSigns: [
      "Mid-afternoon energy crashes",
      "Persistent cravings for high-sugar foods",
      "Frequent bloating",
      "Brittle hair or nails",
    ],
    diagnosticOverview:
      "Nutritional assessment including BMI, waist-to-hip ratio, and blood tests to identify vitamin or mineral deficiencies (e.g., Vitamin D, B12, Iron).",
    screeningGuidelines:
      "Prioritize a variety of colorful fruits and vegetables, lean proteins, and complex carbohydrates (whole grains) daily.",
    mythBusting:
      "The myth that 'sugar feeds cancer' directly is misleading; while sugar does not make cancer grow faster, high-sugar diets lead to obesity, which is a significant and proven cancer risk factor.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Mental Wellbeing",
    category: "wellness",
    description:
      "A state of emotional and psychological health that enables an individual to cope with normal life stresses and manage cortisol levels.",
    symptoms: [],
    riskFactors: [],
    earlyWarningSigns: [
      "Prolonged feelings of irritability or sadness",
      "Withdrawal from social connections",
      "Difficulty concentrating",
      "Changes in sleep or appetite",
    ],
    diagnosticOverview:
      "Screening uses validated tools such as the PHQ-9 for depression and GAD-7 for anxiety, alongside clinical interviews.",
    screeningGuidelines:
      "Daily practice of stress-reduction techniques (mindfulness or meditation) and regular engagement in meaningful social activities.",
    mythBusting:
      "Mental health issues are not a sign of 'weakness' or a character flaw; they are biological and environmental conditions that require professional care and evidence-based treatment.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Hydration",
    category: "wellness",
    description:
      "Maintaining adequate fluid intake to support biological functions, nutrient transport, and cognitive homeostasis.",
    symptoms: [],
    riskFactors: [],
    earlyWarningSigns: [
      "Dark-colored urine (pale straw is ideal)",
      "Dry mouth and mild headaches",
      "Persistent 'brain fog' or fatigue",
    ],
    diagnosticOverview:
      "Tracking of daily fluid intake against body weight, activity level, and monitoring of urine color.",
    screeningGuidelines:
      "Drink primarily water throughout the day; adjust intake based on climate, physical exertion, and overall health status.",
    mythBusting:
      "The '8 glasses a day' rule is a myth; fluid needs vary greatly by individual. Additionally, caffeinated beverages like coffee do count toward your daily hydration goals.",
    showClinicalDisclaimer: true,
  },
  {
    _type: "condition",
    title: "Chronic Kidney Disease",
    category: "major",
    description:
      "A gradual loss of kidney function over time, typically resulting from poorly controlled diabetes or hypertension.",
    symptoms: [
      "Nausea and vomiting",
      "Persistent itching",
      "Muscle cramps",
      "Swelling in the ankles and feet",
    ],
    riskFactors: [
      "Diabetes (Type 1 or 2)",
      "High blood pressure",
      "Heart disease",
      "Family history of kidney failure",
    ],
    earlyWarningSigns: [
      "Foamy urine (indicating protein leakage)",
      "More frequent nighttime urination",
      "Edema (puffiness) around the eyes in the morning",
    ],
    diagnosticOverview:
      "Uses the eGFR blood test to measure filtration rate and the uACR urine test to detect protein leakage.",
    screeningGuidelines:
      "Annual eGFR and uACR testing is recommended for all individuals with diabetes or hypertension.",
    mythBusting:
      "It is a myth that kidney disease only affects the elderly; because risk factors like Type 2 diabetes are appearing in younger people, young adults are increasingly vulnerable to CKD.",
    showClinicalDisclaimer: true,
  },
];

async function run() {
  console.log(
    "Starting bulk import of comprehensive medical and wellness data...",
  );
  for (const doc of conditions) {
    const created = await client.create(doc);
    console.log(
      `Successfully imported: ${created.title} (${created.category})`,
    );
  }
  console.log("All 21 entries imported successfully!");
}

run().catch((err) => {
  console.error("Import failed:", err);
  process.exit(1);
});
