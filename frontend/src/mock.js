// Mock data for Gokul R's Portfolio

export const personalInfo = {
  name: "Gokul R",
  title: "Full Stack Developer",
  subtitle: "Web & Mobile App Developer",
  bio: "Motivated software developer with 8 months of experience, skilled in problem-solving and coding. Passionate about learning new technologies and collaborating in team environments. Interested in entrepreneurship and exploring opportunities to start and grow innovative businesses.",
  email: "gokul363info@gmail.com",
  phone: "+91 9443914436",
  linkedin: "linkedin.com/in/gokul-becse/",
  github: "github.com/Gokul0616",
  location: "Tamil Nadu, India"
};

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "React Native", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
  ],
  backend: [
    { name: "Node.js/Express", level: 85 },
    { name: "Java Springboot", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
  ],
  other: [
    { name: "Git/GitHub", level: 85 },
    { name: "Digital Marketing", level: 70 },
    { name: "Python", level: 75 },
    { name: "Java", level: 80 },
  ]
};

export const projects = [
  {
    id: 1,
    title: "ITG - Travel Platform",
    description: "A travel package comparison and booking platform focused on cost and time efficiency for customer convenience.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    liveUrl: "https://gokul0616.github.io/ITG/",
    githubUrl: "https://github.com/Gokul0616/ITG",
    note: "Desktop optimized",
    featured: true
  },
  {
    id: 2,
    title: "BuddyPro - Professional Network",
    description: "A LinkedIn-like professional networking platform with photo and video uploads, comments, and professional networking features.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    liveUrl: "https://buddy.pro.netlify.app",
    githubUrl: "https://github.com/Gokul0616",
    note: "Mobile & Desktop optimized",
    featured: true
  },
  {
    id: 3,
    title: "Chaty - Chat Application",
    description: "A web application for chatting with features like profile image upload, chat requests, and real-time messaging.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://chaty363.netlify.app/",
    githubUrl: "https://github.com/Gokul0616",
    note: "Desktop optimized",
    featured: true
  },
  {
    id: 4,
    title: "AR/VR CCP Plugin for Photoshop",
    description: "An AR/VR-based real-time cut copy-paste application for Photoshop, allowing users to capture photos with their phone and import them wirelessly.",
    technologies: ["AR/VR", "Photoshop Plugin", "Mobile Integration"],
    paperUrl: "https://ijnrd.org/viewpaperforall.php?paper=IJNRD2305739",
    githubUrl: "https://github.com/Gokul0616",
    note: "Academic Project",
    featured: false
  },
  {
    id: 5,
    title: "VR Based Tourism",
    description: "A VR-based tourism system offering immersive virtual experiences to explore destinations and cultural sites with interactive features.",
    technologies: ["VR", "Unity", "3D Modeling"],
    githubUrl: "https://github.com/Gokul0616",
    note: "Academic Project",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    role: "React, React-Native, Java Springboot Developer",
    company: "SSB Software",
    duration: "Dec 2024 - Present",
    description: "Working on full-stack development projects using React, React Native for frontend and Java Springboot for backend services.",
    current: true
  }
];

export const education = [
  {
    id: 1,
    degree: "B.E. Computer Science",
    institution: "Prathyusha Engineering College",
    years: "2020 - 2024",
    cgpa: "8.04 CGPA"
  },
  {
    id: 2,
    degree: "Higher Secondary (HSC)",
    institution: "Cheran Matric Hr. Sec. School",
    years: "2019 - 2020",
    percentage: "69.3%"
  },
  {
    id: 3,
    degree: "Secondary School (SSLC)",
    institution: "Gurudevar Matric Hr. Sec. School",
    years: "2017 - 2018",
    percentage: "78.4%"
  }
];

export const certificates = [
  "Enhancing Soft Skills and Personality - NPTEL (2023)",
  "Full Stack Development - Infosys Springboard",
  "HTML, CSS, JavaScript - Udemy",
  "Digital Marketing Certificate - Google Skillshop"
];

export const workshops = [
  "Project Workshop at Anna University Guindy Campus",
  "3-Day TNSI Bootcamp for Entrepreneurs and Business Development at Sathyabama Institute",
  "Cyber Security Workshop at Chennai Institute of Technology"
];