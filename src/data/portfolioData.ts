import { CandidateProfile, Project, SkillCategory, Experience, Education, AuditItem } from '../types';

export const candidateProfile: CandidateProfile = {
  fullName: "Hadi Ayoub",
  desiredTitle: "Junior Full-Stack Developer",
  level: "Junior",
  soughtOpportunity: "CDI / Stage / Freelance",
  location: "Beni Mellal, Morocco",
  mobilityZone: "National Mobility (All Morocco)",
  availability: "Immediate",
  shortBio: "Passionate Full-Stack Developer skilled in React, Spring Boot, and Node.js, looking for opportunities to design modern, high-performance web applications.",
  longBio: "Creative and curious Full Stack Developer who transforms complex ideas into practical, reliable web solutions. Fast learner who develops expertise through real-world software engineering, bold initiative, and constant code refinement.",
  emails: {
    primary: "a.hadi@enaa.ma",
    secondary: "Ayoubhadi312@gmail.com"
  },
  phone: "+212 670211432",
  cvUrl: "https://docs.google.com/document/d/1dAoeN-4yXrYV_7v82K91EG_iRKnmlKRxRQlhePkHEu4/edit?usp=sharing",
  cvLastUpdated: "August 2025",
  linkedInUrl: "https://linkedin.com/in/ayoubhadi-pro",
  gitHubUrl: "https://github.com/Ayoub717542",
  generalDemoUrl: "https://magenta-entremet-131f7e.netlify.app/",
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Fluent" },
    { language: "French", proficiency: "Intermediate" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "healthcare-app",
    name: "HealthCare Management Application",
    category: "Full-Stack",
    isFeatured: true,
    context: "Personal project developed to digitize and streamline healthcare management workflows for medical practices.",
    problem: "Healthcare clinics struggle with paper-based scheduling, patient record security, and inefficient appointment dispatching.",
    solution: "Designed and built a full-stack RESTful platform enabling medical staff to manage patient histories, doctor availability, appointments, and medical files with secure authentication and fast caching.",
    targetAudience: "Healthcare providers, clinic staff, doctors, and patients.",
    features: [
      "Patient profile management & medical record tracking",
      "Doctor schedule & appointment booking system",
      "JWT-authenticated endpoints & role-based access control",
      "Redis memory caching for instant response times",
      "Interactive React dashboard with responsive UI",
      "Automated unit testing with Mockito & Spring Test",
      "Dockerized container execution"
    ],
    technologies: [
      { name: "Spring Boot", role: "Core Backend Framework" },
      { name: "Spring Security & JWT", role: "Authentication & Authorization" },
      { name: "Spring Data JPA & Hibernate", role: "ORM & Data Access" },
      { name: "Redis", role: "In-memory Caching" },
      { name: "React", role: "Frontend Interactive SPA" },
      { name: "HTML5 / CSS3", role: "Responsive UI Layouts" },
      { name: "Docker", role: "Containerization" },
      { name: "Swagger / OpenAPI", role: "API Specification" },
      { name: "Mockito", role: "Backend Unit Testing" }
    ],
    personalContribution: [
      "Designed and implemented RESTful API endpoints for medical dossiers and appointment scheduling.",
      "Configured Spring Security filter chains with stateless JWT token authorization.",
      "Integrated Redis caching layer to optimize heavy medical data queries.",
      "Developed responsive React components for appointment calendar views.",
      "Wrote Mockito test suites to achieve reliable backend code coverage."
    ],
    challengesAndSolutions: [
      {
        challenge: "Slow query responses when fetching complete patient medical histories.",
        solution: "Implemented Redis cache headers for frequently requested data structures, reducing database load."
      },
      {
        challenge: "Securing patient records based on role credentials.",
        solution: "Enforced Spring Security method-level annotations (@PreAuthorize) and strict JWT claim validation."
      }
    ],
    resultsAndMetrics: [
      "Sub-50ms API response time with Redis caching enabled.",
      "Fully documented OpenAPI/Swagger endpoints ready for third-party integrations.",
      "Complete Docker container setup for single-command deployment."
    ],
    limitationsAndFutureWork: [
      "Add real-time SMS/email notifications for appointment reminders.",
      "Integrate tele-consultation video streaming module."
    ],
    githubUrl: "https://github.com/Ayoub717542",
    demoUrl: "https://magenta-entremet-131f7e.netlify.app/",
    realizedDate: "2024 - 2025",
    isTeamProject: false
  },
  {
    id: "mini-boutique",
    name: "Mini Boutique – E-Commerce App",
    category: "Frontend",
    isFeatured: false,
    context: "Personal project created for boutique retail shops needing a clean, lightweight web storefront.",
    problem: "Small physical stores lack simple web interfaces to present product catalogs and facilitate mobile shopping carts without heavy CMS bloat.",
    solution: "Created an agile, fast single-page React interface that showcases products with responsive filtering and smooth cart interaction.",
    targetAudience: "Small retail businesses and online shoppers.",
    features: [
      "Responsive product catalog grid",
      "Dynamic search and category filtering",
      "Real-time cart addition, removal, and quantity calculation",
      "Smooth modern styling with CSS3 & Tailwind principles",
      "Optimized Vite build pipeline"
    ],
    technologies: [
      { name: "React.js", role: "UI Component Architecture" },
      { name: "JavaScript (ES6+)", role: "Client Logic" },
      { name: "HTML5 & CSS3", role: "Semantic Layout & Styling" },
      { name: "Vite", role: "Development & Build Bundler" }
    ],
    personalContribution: [
      "Architected state management for shopping cart synchronization.",
      "Crafted mobile-first CSS rules for seamless viewports.",
      "Optimized DOM rendering performance with React functional hooks."
    ],
    challengesAndSolutions: [
      {
        challenge: "Maintaining cart state persistence across user tab updates.",
        solution: "Implemented local state synchronization hooks with browser storage fallback."
      }
    ],
    resultsAndMetrics: [
      "Lighthouse 95+ score for Performance and Best Practices.",
      "Zero external UI framework dependencies for lightweight asset size."
    ],
    limitationsAndFutureWork: [
      "Integrate Stripe/PayPal payment gateway mock sandbox.",
      "Add backend REST connection for order history processing."
    ],
    githubUrl: "https://github.com/Ayoub717542",
    realizedDate: "2024",
    isTeamProject: false
  },
  {
    id: "fleetflow-api",
    name: "FleetFlow – Delivery Management API",
    category: "Backend API",
    isFeatured: true,
    context: "Backend architecture project designed for delivery and logistics tracking dispatchers.",
    problem: "Delivery companies struggle with tracking drivers, vehicle assignments, and real-time status changes across fleet operations.",
    solution: "Developed a robust Java Spring REST API managing clients, drivers, fleet vehicles, and multi-stage delivery status workflows.",
    targetAudience: "Logistics dispatchers, fleet managers, and delivery mobile client apps.",
    features: [
      "Complete CRUD for Drivers, Vehicles, Clients & Deliveries",
      "Real-time status transition management (Pending -> Dispatched -> In Transit -> Delivered)",
      "MapStruct entity-DTO mapping for zero model leakage",
      "Spring Security endpoint protection",
      "Swagger interactive API documentation",
      "Dockerized container setup"
    ],
    technologies: [
      { name: "Spring Boot", role: "Application Engine" },
      { name: "Spring Data JPA", role: "Database Persistence" },
      { name: "Spring Security", role: "Role Access Protection" },
      { name: "MapStruct", role: "High-performance DTO Mapper" },
      { name: "Docker", role: "Container Environment" },
      { name: "Swagger / OpenAPI", role: "API Specification" }
    ],
    personalContribution: [
      "Designed clean relational database schemas for Fleet entities.",
      "Implemented MapStruct mappers to convert domain models into concise DTO payloads.",
      "Built status validation logic preventing invalid state transitions."
    ],
    challengesAndSolutions: [
      {
        challenge: "Avoiding circular references between Driver and Vehicle entities during JSON serialization.",
        solution: "Leveraged MapStruct custom mappings and decoupled DTO records."
      }
    ],
    resultsAndMetrics: [
      "Clean separation of concern following SOLID software principles.",
      "100% Swagger documented endpoints."
    ],
    limitationsAndFutureWork: [
      "Add WebSocket support for live GPS location streaming.",
      "Build React dispatcher dashboard UI."
    ],
    githubUrl: "https://github.com/Ayoub717542",
    realizedDate: "2024",
    isTeamProject: false
  },
  {
    id: "spplyflow-logistics",
    name: "SpplyFlow – Logistics Management API",
    category: "Logistics",
    isFeatured: false,
    context: "Personal project focusing on supply chain logistics and warehouse inventory dispatching.",
    problem: "Supply chains require rigorous tracking of freight parcels, warehouse routing, and carrier assignments.",
    solution: "Engineered a scalable Spring Boot REST service handling supply allocations, shipment verification, and delivery lifecycle events.",
    targetAudience: "Supply chain managers, warehouse operators, and logistics partners.",
    features: [
      "Supply batch tracking & parcel assignment",
      "Driver & route optimization records",
      "Role-restricted access control via Spring Security",
      "MapStruct transformation pipeline",
      "Docker Compose environment setup"
    ],
    technologies: [
      { name: "Spring Boot", role: "Microservice Framework" },
      { name: "Spring Data JPA", role: "ORM Persistence Layer" },
      { name: "Spring Security", role: "Access Control" },
      { name: "MapStruct", role: "Model Mapping" },
      { name: "Docker", role: "Deployment Packaging" },
      { name: "Swagger", role: "API Specs" }
    ],
    personalContribution: [
      "Architected backend domain logic and JPA repository queries.",
      "Configured Docker Compose files for database and application containerization."
    ],
    challengesAndSolutions: [
      {
        challenge: "Ensuring database consistency across concurrent shipment status updates.",
        solution: "Utilized JPA optimistic locking and transaction boundary management."
      }
    ],
    resultsAndMetrics: [
      "Modular backend architecture easy to scale or break into microservices."
    ],
    limitationsAndFutureWork: [
      "Integrate barcode/QR code scanning endpoint."
    ],
    githubUrl: "https://github.com/Ayoub717542",
    realizedDate: "2024",
    isTeamProject: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    description: "Core languages used to build server logic, user interfaces, and database queries.",
    skills: ["Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    description: "Building responsive, modern, user-centered web interfaces.",
    skills: ["React.js", "Tailwind CSS", "Thymeleaf", "Vite", "JavaScript Web APIs"]
  },
  {
    title: "Backend & API Architecture",
    iconName: "Server",
    description: "Engineering robust, secure REST APIs and microservice patterns.",
    skills: [
      "Spring Boot",
      "Spring Security",
      "JWT Authentication",
      "Spring Data JPA",
      "Hibernate ORM",
      "MapStruct",
      "Maven",
      "RESTful API Design"
    ]
  },
  {
    title: "Data & Caching",
    iconName: "Database",
    description: "Database design, relational queries, and high-performance memory storage.",
    skills: ["MySQL", "PostgreSQL", "Redis Cache", "JPA / Hibernate"]
  },
  {
    title: "DevOps, Cloud & Tools",
    iconName: "Cpu",
    description: "Containerization, version control, CI/CD, and API testing tools.",
    skills: [
      "Docker",
      "Docker Compose",
      "Git & GitHub",
      "CI/CD (GitHub Actions)",
      "Cloud Deployment (Render)",
      "Linux CLI",
      "Postman",
      "Swagger / OpenAPI",
      "VS Code",
      "IntelliJ IDEA",
      "Figma"
    ]
  },
  {
    title: "Methodologies & Best Practices",
    iconName: "Workflow",
    description: "Professional software delivery processes and standards.",
    skills: [
      "Agile Software Development",
      "Scrum Methodology",
      "Unit Testing (Mockito)",
      "REST API Standards",
      "Clean Code & SOLID"
    ]
  }
];

export const experienceData: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "Company (Web Agency / IT Services)",
    location: "Beni Mellal, Morocco",
    period: "July 2024 – August 2024",
    type: "Internship",
    description: "Created responsive, accessible web interfaces in HTML, CSS, and JavaScript, strengthening front-end development standards and client-facing integration skills.",
    keyAchievments: [
      "Developed responsive layouts optimized across mobile, tablet, and desktop viewports.",
      "Implemented dynamic client-side interactions and DOM manipulation scripts.",
      "Collaborated with senior developers to align UI layouts with design mockups."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"]
  }
];

export const educationData: Education[] = [
  {
    degree: "Computer Development Training (Full Stack Java)",
    institution: "École Numérique Ahmed AL HANSALI",
    location: "Morocco",
    period: "Sept. 2025 – Present"
  },
  {
    degree: "DTS Computer Development (Diplôme de Technicien Spécialisé)",
    institution: "Institut BILLGATES",
    location: "Beni Mellal, Morocco",
    period: "2022 – 2024"
  },
  {
    degree: "Bachelor Degree in English Studies – Linguistics",
    institution: "Sultan Moulay Slimane University",
    location: "Beni Mellal, Morocco",
    period: "2020 – 2023"
  },
  {
    degree: "Baccalauréat in Human Sciences",
    institution: "Ibn Sina High School",
    location: "Beni Mellal, Morocco",
    period: "Sept 2019 – June 2020"
  }
];

export const step1AuditTable: AuditItem[] = [
  {
    id: "identity",
    field: "Full Name & Professional Identity",
    source: "Prompt Master & CV PDF",
    status: "validated",
    inconsistencyNote: "Identified as Hadi Ayoub (or Ayoub Hadi). Primary title: Développeur Full-Stack Junior.",
    actionRequired: "Set display name 'Hadi Ayoub' with title 'Junior Full-Stack Developer'."
  },
  {
    id: "email",
    field: "Professional Email Address",
    source: "Prompt Master (a.hadi@enaa.ma) vs CV PDF (Ayoubhadi312@gmail.com)",
    status: "to_verify",
    inconsistencyNote: "Two different emails present: a.hadi@enaa.ma in prompt master text vs Ayoubhadi312@gmail.com in CV PDF.",
    actionRequired: "Display both primary (academic/institutional) and secondary email to ensure reachability."
  },
  {
    id: "location",
    field: "City & Mobility Zone",
    source: "Prompt Master & CV PDF",
    status: "validated",
    inconsistencyNote: "Located in Beni Mellal. National mobility across all Morocco.",
    actionRequired: "Display Beni Mellal + National Morocco mobility."
  },
  {
    id: "cv_link",
    field: "CV Document Link",
    source: "Prompt Master",
    status: "available",
    inconsistencyNote: "Link provided points to a editable/viewable Google Doc rather than a direct .pdf file download.",
    actionRequired: "Provide direct Google Doc link with clear 'Consult / Download CV' buttons."
  },
  {
    id: "github_projects",
    field: "GitHub Projects List",
    source: "Prompt Master & CV PDF",
    status: "available",
    inconsistencyNote: "4 projects specified: HealthCare, Mini Boutique, FleetFlow, SpplyFlow. GitHub profile URL: https://github.com/Ayoub717542.",
    actionRequired: "Highlight HealthCare and FleetFlow as primary featured projects."
  },
  {
    id: "demo_video",
    field: "Video Demonstrations",
    source: "Prompt Master Section 2",
    status: "incomplete",
    inconsistencyNote: "No video demo URLs provided in sources. General demo link available: https://magenta-entremet-131f7e.netlify.app/",
    actionRequired: "Flag video link as 'À compléter' or 'Available upon request'."
  },
  {
    id: "company_name",
    field: "Internship Company Name",
    source: "CV PDF",
    status: "incomplete",
    inconsistencyNote: "CV states 'Company' as placeholder for July-August 2024 frontend internship.",
    actionRequired: "Keep 'Company (IT Agency)' and label as 'À compléter' if specific company name is needed."
  }
];
