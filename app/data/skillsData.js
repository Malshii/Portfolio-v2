export const skills = [
  {
    title: "ReactJS",
    icon: "https://cdn-icons-png.flaticon.com/512/875/875209.png",
  },
  {
    title: "Next.js",
    icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },
  {
    title: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png",
  },
  {
    title: "Bootstrap",
    icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  },
  {
    title: "Material UI",
    icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
  },
  {
    title: "WordPress",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
  },
  {
    title: "Git",
    icon: "https://cdn-icons-png.flaticon.com/512/6878/6878120.png",
  },
  {
    title: "Nodejs",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    title: "Python",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    title: "Flask",
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/flask-qvsfwhwywucb6zv0d7ce.png/flask-1byb2jlw6nwim4nx2248xg.png?_a=DATAiZAAZAA0",
  },
  {
    title: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    title: "MySQL",
    icon: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  },
  {
    title: "MongoDB",
    icon: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2415%2FPNG%2F512%2Fmongodb_original_wordmark_logo_icon_146425.png&id=146425&pack_or_individual=pack",
  },
  {
    title: "Flutter",
    icon: "https://images.icon-icons.com/2107/PNG/512/file_type_flutter_icon_130599.png",
  },
  {
    title: "Figma",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
  },
  {
    title: "Postman",
    icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    title: "Java",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    title: "C",
    icon: "https://cdn-icons-png.flaticon.com/512/9313/9313197.png",
  },
  {
    title: "HTML",
    icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
  },
  {
    title: "CSS",
    icon: "https://cdn-icons-png.flaticon.com/512/5815/5815166.png",
  },
  {
    title: "Supabase",
    icon: "https://cdn.prod.website-files.com/66842e04d18971242a294872/669e87d174d190a8ba60b861_supabase-TAiY.png",
  },
  {
    title: "PHP",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
  },
  {
    title: "Spring Boot",
    icon: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/spring-boot-logo-icon-hd.png",
  },
  {
    title: "Streamlit",
    icon: "https://images.seeklogo.com/logo-png/44/2/streamlit-logo-png_seeklogo-441815.png",
  },
  {
    title: "Selenium",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
  },
  {
    title: "Unity",
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/brands/unity-3pd9m9p8w1sm9x4gne7nqj.png/unity-qbnpgvdrvim8s7g12gq5q3.png?_a=DATAiZAAZAA0",
  },
];

export const skillsByCategory = {
  "Programming Languages": skills.filter((skill) =>
    ["Java", "Python", "C", "JavaScript", "PHP"].includes(skill.title),
  ),
  "Machine Learning & AI": skills.filter((skill) =>
    ["Streamlit"].includes(skill.title),
  ),
  "Frontend Development": skills.filter((skill) =>
    [
      "ReactJS",
      "Next.js",
      "Flutter",
      "WordPress",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "WebFlow",
      "FlutterFlow",
    ].includes(skill.title),
  ),
  "Backend Development": skills.filter((skill) =>
    ["Nodejs", "Spring Boot", "Flask"].includes(skill.title),
  ),
  "Database & Cloud": skills.filter((skill) =>
    ["MySQL", "MongoDB", "Supabase"].includes(skill.title),
  ),
  "Other Skills": skills.filter((skill) =>
    ["Git", "Selenium", "Unity", "Figma", "Postman"].includes(skill.title),
  ),
};

export const categoryLabels = ["All", ...Object.keys(skillsByCategory)];
