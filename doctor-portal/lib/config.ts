// Edit this file to update every doctor-specific detail across the site.

export const doctor = {
  name: "Dr. Shivesh Kumar",
  credentials: "MD, PGDC, PGDE — Consultant Cardiologist",
  clinic: "EasyMyCare Clinic, Dwarka, New Delhi",
  tagline: "14+ years of cardiology care, now easier to reach.",
  bio: `Dr. Shivesh Kumar is a consultant cardiologist with over 14 years of
clinical experience, practicing at EasyMyCare Clinic in Dwarka, New Delhi.
He combines evidence-based cardiac care with modern digital tools to make
diagnosis, follow-up, and referrals simpler for patients and referring
physicians alike.`,
  photoUrl: "/doctor-photo.jpg", // replace with an actual photo in /public
  whatsappNumber: "919999999999", // country code + number, no + or spaces
  youtubeChannelUrl: "https://www.youtube.com/@DrShiveshKumar", // replace with real channel URL
  blogUrl: "https://easymycare.com/blog", // replace with real blog URL, or keep posts below
};

export const procedures = [
  { name: "ECG (Electrocardiogram)", description: "Quick resting heart rhythm and electrical activity assessment." },
  { name: "TMT (Treadmill Test)", description: "Exercise stress test to evaluate heart performance under exertion." },
  { name: "2D Echocardiography (Echo)", description: "Ultrasound imaging of heart structure and function." },
  { name: "Stress Echo", description: "Echocardiography combined with exercise or medication-induced stress." },
  { name: "DSE (Dobutamine Stress Echo)", description: "Pharmacological stress echo for patients unable to exercise." },
  { name: "CAG (Coronary Angiography)", description: "Catheter-based imaging of coronary arteries to detect blockages." },
  { name: "Holter Monitoring", description: "24–48 hour continuous ECG recording for rhythm disorders." },
  { name: "Cardiac Consultation", description: "Comprehensive evaluation, diagnosis, and management planning." },
];

export const blogPosts = [
  {
    title: "Understanding Your ECG Report",
    summary: "A plain-language walkthrough of what the numbers and waves on a routine ECG actually mean.",
    url: "https://easymycare.com/blog/understanding-ecg",
  },
  {
    title: "When Do You Need a Stress Test?",
    summary: "TMT vs Stress Echo vs DSE — how cardiologists decide which stress test fits which patient.",
    url: "https://easymycare.com/blog/stress-test-guide",
  },
  {
    title: "Living Well After a Cardiac Event",
    summary: "Practical, evidence-based guidance on recovery, diet, and follow-up care.",
    url: "https://easymycare.com/blog/life-after-cardiac-event",
  },
];

export const referralReasons = [
  "Second Opinion",
  "ECG",
  "TMT",
  "DSE",
  "Stress Echo",
  "Echo",
  "CAG",
  "Other",
] as const;
