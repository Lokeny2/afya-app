// import-conditions.ts
import { getCliClient } from "sanity/cli";

const client = getCliClient();

const conditions = [
  {
    _type: "condition",
    title: "Acute Bronchitis",
    description:
      "Inflammation of the bronchial tubes, usually following a viral respiratory illness. Often mistakenly treated with antibiotics when it is viral.",
    symptoms: [
      "Persistent cough producing mucus",
      "Chest tightness",
      "Mild fatigue",
      "Low fever",
    ],
  },
  {
    _type: "condition",
    title: "Migraine",
    description:
      "A neurological condition characterized by intense, debilitating headaches often accompanied by sensory sensitivities.",
    symptoms: [
      "Throbbing headache",
      "Nausea",
      "Sensitivity to light",
      "Sensitivity to sound",
      "Visual disturbances",
    ],
  },
  {
    _type: "condition",
    title: "Contact Dermatitis",
    description:
      "An itchy rash caused by direct contact with a substance or an allergic reaction to it (e.g., poison ivy, certain soaps).",
    symptoms: ["Red rash", "Itching", "Dry skin", "Blisters", "Swelling"],
  },
  {
    _type: "condition",
    title: "Food Poisoning",
    description:
      "Illness caused by eating contaminated food, resulting in rapid gastrointestinal distress.",
    symptoms: [
      "Abdominal cramps",
      "Vomiting",
      "Watery diarrhea",
      "Nausea",
      "Fever",
    ],
  },
  {
    _type: "condition",
    title: "Carpal Tunnel Syndrome",
    description:
      "A medical condition due to compression of the median nerve as it travels through the wrist.",
    symptoms: [
      "Numbness in hand",
      "Tingling in fingers",
      "Hand weakness",
      "Pain radiating up the arm",
    ],
  },
  {
    _type: "condition",
    title: "Primary Insomnia",
    description:
      "Persistent problems falling asleep or staying asleep, unrelated to any other medical condition.",
    symptoms: [
      "Difficulty falling asleep",
      "Waking up during the night",
      "Daytime fatigue",
      "Irritability",
      "Difficulty concentrating",
    ],
  },
  {
    _type: "condition",
    title: "Osteoarthritis",
    description:
      "The most common form of arthritis, affecting joints in the hands, knees, hips, and spine due to wear and tear.",
    symptoms: [
      "Joint pain",
      "Stiffness",
      "Tenderness",
      "Loss of flexibility",
      "Grating sensation",
    ],
  },
  {
    _type: "condition",
    title: "Acute Sinusitis",
    description:
      "Inflammation or swelling of the tissue lining the sinuses, often developing after a cold.",
    symptoms: [
      "Facial pain or pressure",
      "Nasal congestion",
      "Reduced sense of smell",
      "Post-nasal drip",
      "Headache",
    ],
  },
  {
    _type: "condition",
    title: "Urinary Tract Infection (UTI)",
    description:
      "An infection in any part of the urinary system, most commonly involving the bladder and urethra.",
    symptoms: [
      "Strong urge to urinate",
      "Burning sensation during urination",
      "Cloudy urine",
      "Pelvic pain",
    ],
  },
  {
    _type: "condition",
    title: "Hypothyroidism",
    description:
      "A condition in which the thyroid gland does not produce enough thyroid hormone, slowing down metabolism.",
    symptoms: [
      "Fatigue",
      "Weight gain",
      "Cold intolerance",
      "Dry skin",
      "Constipation",
    ],
  },
  {
    _type: "condition",
    title: "Allergic Asthma",
    description:
      "A form of asthma triggered by allergens like pollen, dust mites, or pet dander causing airway constriction.",
    symptoms: [
      "Wheezing",
      "Shortness of breath",
      "Chest tightness",
      "Coughing spells",
    ],
  },
  {
    _type: "condition",
    title: "Plantar Fasciitis",
    description:
      "Inflammation of a thick band of tissue that runs across the bottom of each foot, connecting the heel bone to the toes.",
    symptoms: [
      "Stabbing heel pain",
      "Pain with first steps in the morning",
      "Stiffness in the arch",
    ],
  },
  {
    _type: "condition",
    title: "Vitamin D Deficiency",
    description:
      "Inadequate levels of vitamin D in the body, which can impact bone health and overall energy levels.",
    symptoms: ["Bone pain", "Muscle weakness", "Fatigue", "Mood changes"],
  },
  {
    _type: "condition",
    title: "Acute Ankle Sprain",
    description:
      "An injury to the ligaments surrounding the ankle joint caused by sudden twisting or rolling.",
    symptoms: [
      "Swelling",
      "Bruising",
      "Pain when bearing weight",
      "Limited range of motion",
    ],
  },
  {
    _type: "condition",
    title: "The Juice Cleanse Detox Myth",
    description:
      'A widespread wellness misconception that consuming only fruit and vegetable juices for days "detoxifies" organs. The human liver and kidneys naturally handle all detoxification.',
    symptoms: ["Dizziness", "Low blood sugar", "Fatigue", "Headache"],
  },
  {
    _type: "condition",
    title: "Screen-Induced Digital Eye Strain",
    description:
      "Eye discomfort caused by prolonged focus on digital screens, often worsened by a lack of blinking.",
    symptoms: [
      "Eye fatigue",
      "Dry eyes",
      "Blurred vision",
      "Headache",
      "Neck and shoulder pain",
    ],
  },
  {
    _type: "condition",
    title: "Generalized Anxiety Disorder (Physical Manifestations)",
    description:
      "Chronic, excessive worry accompanied by very real physical symptoms mimicking organic disease.",
    symptoms: [
      "Muscle tension",
      "Restlessness",
      "Rapid heartbeat",
      "Sleep disturbances",
      "Stomach upset",
    ],
  },
  {
    _type: "condition",
    title: "Type 2 Diabetes Mellitus",
    description:
      "A chronic condition that affects the way the body processes blood sugar (glucose), often linked to insulin resistance.",
    symptoms: [
      "Increased thirst",
      "Frequent urination",
      "Unexplained weight loss",
      "Blurred vision",
      "Slow-healing sores",
    ],
  },
  {
    _type: "condition",
    title: "Seasonal Affective Disorder (SAD)",
    description:
      "A type of depression related to changes in seasons, typically starting and ending at about the same times every year.",
    symptoms: [
      "Low energy",
      "Oversleeping",
      "Weight gain",
      "Craving carbohydrates",
      "Feelings of hopelessness",
    ],
  },
  {
    _type: "condition",
    title: "Acute Pharyngitis (Strep Throat vs. Viral Sore Throat)",
    description:
      "Inflammation of the pharynx resulting in a sore throat; can be viral or bacterial (Strep). Misconception: assuming all sore throats require antibiotics.",
    symptoms: [
      "Severe throat pain",
      "Difficulty swallowing",
      "Swollen lymph nodes",
      "Fever",
      "White patches on tonsils",
    ],
  },
];

async function run() {
  console.log("Starting bulk import of health conditions...");
  for (const doc of conditions) {
    const created = await client.create(doc);
    console.log(`Successfully imported: ${created.title}`);
  }
  console.log("All conditions imported successfully!");
}

run().catch((err) => {
  console.error("Import failed:", err);
  process.exit(1);
});
