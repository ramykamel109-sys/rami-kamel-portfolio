export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  gallery: string[];
  role: string;
  timeline: string;
  tools: string[];
  challenge: string;
  solution: string;
  outcome: string;
  features?: { title: string; description: string; icon: string }[];
  emojis: string[];
}

export const projects: Project[] = [
  {
    id: "mobile-app",
    title: "Nawel Delivery App",
    category: "Mobile App Design",
    description:
      "A seamless food delivery app connecting hungry customers with local restaurants through an intuitive and fast ordering experience.",
    tags: ["iOS", "Android", "Food & Delivery"],
    image: "/images/nawel-case-study.jpg",
    gallery: ["/images/nawel-case-study.jpg"],
    role: "Lead UI/UX Designer",
    timeline: "2 weeks",
    tools: ["Figma", "Principle", "Sketch"],
    challenge:
      "In a highly competitive food delivery market where user expectations are constantly rising, the existing solution suffered from a staggering 68% cart abandonment rate. Complicated checkout flows, lack of personalization, and poor real-time tracking created friction at every step. The challenge was to redesign the entire ordering experience from the ground up — making it faster, smarter, and more delightful — while still handling the complexity of multi-restaurant menus, delivery logistics, and payment processing.",
    solution:
      "We implemented a data-driven progressive disclosure interface that intelligently reveals information as users need it, reducing cognitive load. Smart search with natural language processing and AI-powered recommendations helped users discover restaurants and dishes faster. One-tap reordering for frequent customers and a gesture-based cart system made the checkout flow feel effortless. A real-time GPS tracking system with live ETA updates kept users informed throughout the delivery journey. We introduced a \"Quick Order\" mode for returning customers and built an A/B testing framework to continuously optimize conversion at every funnel step.",
    outcome:
      "The redesign achieved remarkable results: order completion time dropped by 45%, cart abandonment fell from 68% to just 23%, and overall revenue increased by 156%. User retention improved by 78%, support tickets decreased by 67%, and customer satisfaction reached 92%. The average order value increased by 34%, the app achieved a 4.9-star rating, and customer acquisition costs were reduced by 41% — proving that exceptional UX directly drives business growth.",
    emojis: ["🍕", "🍔", "🍜", "🍱", "🥗"],
  },
  {
    id: "dashboard",
    title: "HR Management System",
    category: "Dashboard Design",
    description:
      "A comprehensive HR management platform streamlining employee administration, attendance tracking, payroll management, and performance evaluation.",
    tags: ["Enterprise", "HR System", "Dashboard"],
    image: "/images/hr-main.png",
    gallery: [
      "/images/hr-careers.png",
      "/images/hr-chat.png",
      "/images/hr-inbox.png",
      "/images/hr-attendance.png",
      "/images/hr-training.png",
    ],
    role: "Lead UX Designer",
    timeline: "10 days",
    tools: ["Figma", "Adobe XD", "Miro"],
    challenge:
      "The organization was struggling with fragmented HR systems that cost approximately $450,000 annually in maintenance, integration overhead, and lost productivity. Employee data was scattered across spreadsheets, separate attendance systems, and manual payroll processes. This fragmentation led to data inconsistencies, delayed reporting, and a poor employee experience. The challenge was to consolidate all HR functions into a single, unified platform that could scale from 50 to 5,000+ employees while maintaining intuitive usability for both HR administrators and regular employees.",
    solution:
      "We designed a modular dashboard architecture with nine interconnected modules: Employee Management, Attendance Tracking, Leave Management, Payroll System, Performance Evaluation, Training & Development, Shift Management, Reporting & Analytics, and a Recruitment Portal. Each module features role-based access control, real-time data synchronization, and intelligent automation. The attendance system supports fingerprint, QR code, and biometric verification. The payroll engine automates salary calculations with support for complex deduction rules. We built comprehensive analytics dashboards with drill-down capabilities for data-driven HR decision-making.",
    outcome:
      "Processing time was reduced by 70%, attendance accuracy reached 99.5%, and payroll processing dropped from 5 days to just 4 hours. Employee satisfaction with HR processes increased by 68%, performance evaluation completion rates hit 95%, and the platform successfully scaled to support 500+ employees. The organization achieved $720,000 in annual cost savings plus $340,000 in productivity gains — a total ROI that justified the investment within the first year.",
    features: [
      { title: "Employee Management", description: "Complete employee records, departments, and organizational hierarchy", icon: "👥" },
      { title: "Attendance Tracking", description: "Fingerprint, QR code, and biometric attendance monitoring", icon: "📊" },
      { title: "Leave Management", description: "Request submission, approval workflows, and holiday calendars", icon: "📋" },
      { title: "Payroll System", description: "Automated salary calculations, deductions, and pay slip generation", icon: "💰" },
      { title: "Performance Evaluation", description: "KPI monitoring, employee appraisals, and corrective actions", icon: "📈" },
      { title: "Training & Development", description: "Employee development planning and career progression tracking", icon: "🎓" },
      { title: "Shift Management", description: "Schedule creation, shift assignments, and overtime tracking", icon: "⏰" },
      { title: "Reporting & Analytics", description: "Comprehensive reports for company-level decision making", icon: "📋" },
      { title: "Recruitment Portal", description: "Job postings, candidate tracking, and hiring workflows", icon: "💼" },
    ],
    emojis: ["👥", "📊", "💼", "📈", "⏰", "💰", "📋"],
  },
  {
    id: "webapp",
    title: "Easy Deal Real Estate",
    category: "Web Application",
    description:
      "A comprehensive real estate platform connecting property seekers with their dream homes through seamless booking and browsing experiences.",
    tags: ["Real Estate", "Booking System", "Web Platform"],
    image: "/images/easydeal-main.png",
    gallery: [
      "/images/easydeal-2.png",
      "/images/easydeal-3.png",
      "/images/easydeal-main.png",
    ],
    role: "Lead UI/UX Designer",
    timeline: "2 weeks",
    tools: ["Figma", "Adobe XD", "Miro"],
    challenge:
      "The real estate platform was losing potential buyers due to a fragmented user experience. Property managers spent an average of 23 hours per week on manual coordination — scheduling viewings, answering inquiries, and managing listings through scattered channels. This inefficiency led to a 47% reduction in conversion rates, as potential buyers faced friction at every touchpoint: from searching for properties to scheduling viewings to finalizing deals. The platform needed to serve multiple user types — buyers, renters, property managers, and agents — each with distinct needs and workflows.",
    solution:
      "We designed a multi-sided platform with intelligent search that increased time-on-site by 340%. The appointment booking system reduced coordination overhead by 89% through automated scheduling with calendar integration. Immersive property unit pages with virtual tours, detailed floor plans, and neighborhood analytics helped buyers make informed decisions. We added a careers portal for real estate companies, a content blog for thought leadership, and built a mobile-first responsive design with A/B testing throughout. The property comparison feature and saved search alerts kept users engaged and coming back.",
    outcome:
      "User engagement increased by 85%, average session duration jumped from 2.3 to 8.7 minutes, and booking time dropped from 15 minutes to just 2 minutes. Property viewing conversions improved by 62%, over 45 companies were onboarded to the platform, and B2B revenue reached $180,000. The platform contributed to a $4.6 million increase in total transaction volume — proving that streamlined UX directly correlates with revenue growth in marketplace platforms.",
    features: [
      { title: "Property Listings", description: "Browse stunning properties with advanced search and filters", icon: "🏠" },
      { title: "Appointment Booking", description: "Schedule property viewings in just a few clicks", icon: "🔑" },
      { title: "Unit Details", description: "Comprehensive property information with virtual tours", icon: "🏢" },
      { title: "Careers Portal", description: "Attract top talent with engaging job listings", icon: "🏠" },
      { title: "Blog Section", description: "Share insights and establish thought leadership", icon: "🏡" },
      { title: "Company Portal", description: "Manage properties, appointments, and team members", icon: "🔑" },
    ],
    emojis: ["🏠", "🔑", "🏢", "🏠", "🏡", "🔑"],
  },
  {
    id: "dentist-website",
    title: "SmileCare Dental Clinic",
    category: "Healthcare Web Design",
    description:
      "A modern dental clinic website featuring comprehensive services showcase, patient testimonials, doctor profiles, and intelligent appointment scheduling.",
    tags: ["Healthcare", "Booking System", "Medical Website"],
    image: "/images/dental-main.png",
    gallery: [
      "/images/dental-2.png",
      "/images/dental-3.png",
      "/images/dental-main.png",
    ],
    role: "Lead Product Designer & UX Strategist",
    timeline: "10 days",
    tools: ["Figma", "Adobe XD", "Miro"],
    challenge:
      "The dental clinic was losing $280,000 annually in missed appointment opportunities. 67% of website visitors left without booking, and 40% of appointments required manual phone coordination — creating bottlenecks for both patients and staff. The existing website failed to communicate the clinic's expertise, didn't showcase patient results effectively, and made the booking process unnecessarily complex. In a competitive healthcare market, the clinic needed a digital presence that would build trust instantly and convert visitors into patients.",
    solution:
      "We implemented a trust-first architecture with a hero section featuring credibility metrics: 2,500+ patients treated, 4.9 average rating, and 15+ years of experience. The services portfolio was redesigned with before/after galleries and detailed procedure explanations. Doctor profiles — including Dr. Ebram Mamdouh — were enhanced with credentials, specialties, and patient reviews. We built an intelligent appointment scheduling system with real-time availability, automated reminders, and insurance verification. An educational blog section and patient testimonial carousel reinforced trust and expertise.",
    outcome:
      "Online bookings increased by 156%, generating an additional $94,000 in monthly revenue. 89% of patients cited the website as a key factor in their decision to book. Average booking time dropped to 2.5 minutes, patient trust scores increased by 73%, and the overall UX rating reached 4.8/5.0. The conversion rate improved to 12.8%, contributing to $680,000 in incremental annual revenue — making the website the clinic's most effective patient acquisition channel.",
    emojis: ["🦷", "👩‍⚕️", "👩‍⚕️", "👩‍⚕️"],
  },
];

export const skills = [
  "Figma",
  "Product Strategy",
  "User Research & Analytics",
  "Data-Driven Design",
  "Conversion Optimization",
  "ROI-Focused UX",
  "Stakeholder Management",
  "Design Systems",
  "A/B Testing & Experimentation",
  "Business Metrics Analysis",
  "User Journey Mapping",
  "Market Research",
  "Competitive Analysis",
  "Wireframing & Prototyping",
  "Usability Testing",
  "Adobe XD",
];
