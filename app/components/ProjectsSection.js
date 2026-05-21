import React from "react";
import PrimaryButton from "./PrimaryButton";

const techIconMap = {
  reactjs: "https://cdn-icons-png.flaticon.com/512/875/875209.png",
  redux:
    "https://cdn.iconscout.com/icon/free/png-256/free-redux-logo-icon-svg-download-png-3030243.png",
  python:
    "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
  mysql: "https://img.icons8.com/fluency/256/mysql-logo.png",
  bootstrap:
    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  "spring boot": "https://img.icons8.com/color/48/000000/spring-logo.png",
  php: "https://img.icons8.com/offices/256/php-logo.png",
  "soap api": "https://img.icons8.com/fluency/96/api-settings.png",
  git: "https://cdn-icons-png.flaticon.com/512/6878/6878120.png",
  "microsoft azure":
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  "node.js": "https://img.icons8.com/color/48/000000/nodejs.png",
  nodejs: "https://img.icons8.com/color/48/000000/nodejs.png",
  flutter: "https://img.icons8.com/color/48/000000/flutter.png",
  materialui: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
  "material ui": "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
  aws: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
  tensorflow:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1280px-Tensorflow_logo.svg.png",
  streamlit:
    "https://images.seeklogo.com/logo-png/44/2/streamlit-logo-png_seeklogo-441815.png",
  flask: "https://cdn.worldvectorlogo.com/logos/flask.svg",
  colab:
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
  "vs code": "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
  material: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
  firebase: "https://img.icons8.com/color/48/000000/firebase.png",
};

const normalizeTech = (tech) =>
  tech
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim();

const getTechList = (project) => {
  const techLine = project.details.find((line) =>
    line.toLowerCase().startsWith("technologies:"),
  );
  if (!techLine) return [];
  return techLine
    .replace(/^Technologies:\s*/i, "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const getTechIcon = (tech) => techIconMap[normalizeTech(tech)] || null;
const getProjectIcons = (project) => {
  if (project.stack?.length) return project.stack;
  return getTechList(project)
    .map((tech) => getTechIcon(tech))
    .filter(Boolean);
};

// Project data moved inside the file
const projectSections = [
  {
    heading: "Research Experience",
    projects: [
      {
        title:
          "Breast Cancer Classification with Localization and Subtype Identification (Final Year Project) (Group)",
        details: [
          "Technologies: Python, Tensorflow, Streamlit, Flask, ReactJS, MaterialUI, GIT, AWS, Colab, VS code",
          "To achieve accurate and unified breast cancer classification across various imaging modalities [Ultrasound, Mammogram, MRI, Histopathalogy].",
        ],
        nested: {
          label: "Key Contributions",
          points: [
            "Contribute to ultrasound image modality.",
            "Successfully combined five breast ultrasound datasets to overcome limitations of small dataset sizes.",
            "Employed various CNN architectures, transfer learning techniques, and ensemble models for robust model development.",
            "Developed a comprehensive web-based diagnosis tool capable of classification, localization, and diagnosis identification in breast cancer imaging.",
            "Innovated a novel approach in subtype identification and localization for breast cancer.",
          ],
        },
      },
    ],
  },
  {
    heading: "Projects",
    subHeading: "Industry Projects",
    projects: [
      {
        title: "Tender Automation System | 2026",
        org: "GDC Consultants Ltd.",
        details: [
          "Designed and developed a web-based system to automate tender document preparation and submission",
          "Implemented role-based functionality for Proposal Creators and Administrators",
          "Built features for tender creation, editing, tracking, and document generation (Word/PDF)",
          "Developed smart filtering system for project and staff selection, improving efficiency",
          "Automated proposal generation using templates and centralized company data",
          "Integrated dynamic forms adapting to tender types (EOI, RFQ, RFP)",
          "Utilized Redux for stable state management and efficient data flow",
          "Technologies: ReactJS, Redux, Python, MySQL, Git, Microsoft Azure",
        ],
      },
      {
        title: "GDC Properties Platform | 2026",
        org: "GDC Consultants Ltd.",
        details: [
          "Developed a full-stack property management system supporting tenants, landlords, and administrators",
          "Implemented authentication, role-based dashboards, and property listing management",
          "Built property search, booking system, and rental application workflows",
          "Designed rent payment system with payment gateway integration and payout management",
          "Developed rental appraisal workflow with admin assessment and PDF report generation",
          "Integrated financial tracking and reporting features",
          "Implemented Redux for centralized state management across complex user modules",
          "Technologies: ReactJS, Redux, Node.js, MySQL, Payment Gateway Integration, Git, Microsoft Azure",
        ],
      },
      {
        title: "Projex System | 2025",
        org: "GDC Consultants Ltd.",
        details: [
          "Contributed to frontend development and backend API integration for the Projex system",
          "Developed responsive and reusable UI components using ReactJS",
          "Integrated frontend with backend services using REST APIs (Python-based backend)",
          "Handled dynamic data interaction and UI updates for system functionality",
          "Utilized Redux for efficient state management and seamless UI updates",
          "Technologies: ReactJS, Redux, Python, MySQL, Microsoft Azure, Git",
        ],
      },
    ],
  },
  {
    subHeading: "Key Projects",
    projects: [
      {
        title: "Seguros Mobile application | 2023 (Group)",
        details: [
          "Platform to manage insurance policies",
          "Contributed to the development of mobile and web applications, including the activation of the recurring charges screen and integration of APIs on the payment card screen.",
          "Technologies: Flutter, ReactJS, MaterialUI, SOAP API, Git, AWS",
        ],
      },
      {
        title: "Clinical Management System | 2021 - 2022 (Group)",
        liveLabel: "chamal-medicare",
        details: [
          "Developed a full-stack clinical system to streamline workflows and improve service efficiency",
          "Implemented user registration, authentication, and password management (bcrypt, formik)",
          "Built lab report generation and data visualization features (Chart.js)",
          "Integrated email and SMS notification systems (Nodemailer)",
          "Improved system efficiency and reduced manual workload in clinical operations",
          "Technologies: ReactJS, Material UI, Node.js, MongoDB, Netlify, Heroku, Git",
        ],
      },
      {
        title:
          "Web-Based Human Resource Portal for AIESEC in Sri Lanka | 2020 - 2021 (Group)",
        liveLabel: "aiesec-village.web.app",
        liveUrl: "https://aiesec-village.web.app",
        details: [
          "Developed a responsive HR portal with features including profiles, blog system, and live dashboards",
          "Built frontend components and enhanced user experience using ReactJS",
          "Collaborated in a team-based environment following Agile practices",
          "Technologies: ReactJS, Material UI, Firebase, Git",
        ],
      },
    ],
  },
  {
    subHeading: "Additional Projects",
    projects: [
      {
        title: "PawprintID | 2023",
        details: [
          "Created a platform to easily store and share pets' medical history whenever needed.",
          "Contributed to the development of websites including the home page, CMS admin panels for resources and contact us pages.",
          "Developed both web and mobile applications including surgery and treatment screens and the view data condition screen.",
          "Technologies: ReactJS, Bootstrap, Flutter, MySQL, NodeJS, AWS",
        ],
      },
      {
        title: "iRQ Mobile Application | 2023",
        details: [
          "Comprehensive wellness and HR management platform.",
          "Contributed to the development of multiple screens, including home, team, and risk prevention screens.",
          "Technologies: Flutter",
        ],
      },
      {
        title: "Grocery Mobile Application | 2023",
        details: [
          "User-friendly app to streamline grocery shopping.",
          'Developed the "view grocery store(s)" screen for a seamless user experience in accessing store options.',
          "Technologies: Flutter",
        ],
      },
      {
        title: "Sortifyd Mobile Application | 2023",
        details: [
          "App designed to help organize family activities and tasks.",
          "Developed key functionality including login, registration, and password management screens.",
          "Technologies: Flutter",
        ],
      },
      {
        title: "Employee Management System | 2022",
        details: [
          "Purpose: Management of employees within an organization.",
          "Specifically designed for use by organizational managers.",
          "Authentication: Secure login with username and password.",
          "Features developed: [Create, View, Edit, and Delete of employees, managers and departments]",
          "Technologies: Spring Boot, MySQL",
        ],
      },
      {
        title: "Inventory Management System | 2021 - 2022",
        details: [
          "This system only has an admin section. The admin section is where all product editing, updating, and management take place.",
          "This system's design is straightforward so that the user encounters no difficulties while working on it.",
          "Technologies: PHP, MySQL",
        ],
      },
    ],
  },
];

export default function ProjectsSection({ showAll = false }) {
  // Define the 3 featured projects for the landing page
  const featuredTitles = [
    "Breast Cancer Classification with Localization and Subtype Identification (Final Year Project) (Group)",
    "Tender Automation System | 2026",
    "GDC Properties Platform | 2026",
    "Projex System | 2025",
  ];

  // Helper to flatten all projects
  const getAllProjects = () =>
    projectSections.flatMap((section) =>
      section.projects.map((project) => ({ ...project, section })),
    );

  let sectionsToShow;
  if (showAll) {
    // Show all sections and all projects
    sectionsToShow = projectSections;
  } else {
    // Only show the 3 featured projects as cards (no section headings)
    const allProjects = getAllProjects();
    const featuredProjects = allProjects.filter((p) =>
      featuredTitles.includes(p.title),
    );
    sectionsToShow = [
      {
        heading: null,
        subHeading: null,
        projects: featuredProjects,
      },
    ];
  }

  return (
    <section className="projects-section section-reveal" id="projects">
      <div className="projects-container">
        <h2 className="about-title">
          {showAll ? "All Projects" : "Portfolio"}
        </h2>
        {sectionsToShow.map((section, idx) => (
          <div
            key={`${section.heading || "section"}-${section.subHeading || "main"}-${idx}`}
            className="mb-14"
          >
            {section.heading && (
              <h2 className="text-xl md:text-2xl font-semibold border-b border-white/20 pb-1 mb-2 text-white">
                {section.heading}
              </h2>
            )}
            {section.subHeading && (
              <h3 className="text-lg text-[var(--text-muted)] mb-3 font-medium">
                {section.subHeading}
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.projects.map((project) => (
                <div
                  key={project.title}
                  className="glass-card border border-[var(--glass-border)] rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col h-full backdrop-blur-md bg-[var(--glass-bg)]"
                  style={{ boxShadow: "0 2px 24px 0 rgba(193,55,51,0.10)" }}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="font-bold text-lg text-white mb-2 flex items-center">
                      {project.title}
                      {project.org && (
                        <span className="ml-2 font-normal italic text-[var(--text-muted)]">
                          ({project.org})
                        </span>
                      )}
                    </div>
                    {getProjectIcons(project).length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1 mb-2">
                        {getProjectIcons(project).map((icon) => (
                          <img
                            key={`${project.title}-${icon}`}
                            src={icon}
                            alt="tech"
                            className="w-8 h-8 rounded bg-white p-1 border border-white/10 shadow"
                          />
                        ))}
                      </div>
                    )}
                    {project.liveUrl && (
                      <div className="mb-2 text-sm">
                        <strong className="text-[var(--electric-cyan)]">
                          Live:
                        </strong>{" "}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--electric-cyan)] underline hover:text-white"
                        >
                          {project.liveLabel || project.liveUrl}
                        </a>
                      </div>
                    )}
                    <ul className="list-disc ml-5 mt-2 text-[var(--soft-white)] text-[15px] space-y-1">
                      {project.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                      {project.nested && (
                        <li>
                          {project.nested.label}:
                          <ul className="list-disc ml-5 mt-1 text-[var(--text-muted)] text-xs space-y-1">
                            {project.nested.points.map((subItem) => (
                              <li key={subItem}>{subItem}</li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {!showAll && (
          <div className="flex justify-center mt-10">
            <PrimaryButton href="/projects">View All Projects</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}
