import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Indesign,
    Photoshop,
    Illustrator,
    Python,
    UF,
    Wipro,
    GangesValleySchool,
    ISRO,
    CG,
    PP,
    ADS,
    SKK,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX Enthusiast",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: creator ,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Illustrator",
      icon: Illustrator,
    },
    // {
    //   name: "Indesign",
    //   icon: Indesign,
    // },
    {
      name: "Photoshop",
      icon: Photoshop,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Communications Assistant - OPS",
      company_name: "University of Florida - Office of Advancement",
      icon: UF,
      iconBg: "#383E56",
      date: "Dec 2023 - Present",
      points: [
        "Design and production of various print or interactive projects",
        "Design for various projects including letters, reports, social media and proposals",
        "Assist with copywriting and editing various communication pieces for the department",
        "Utilize an in-house project management system to provide relevant status updates and ensure the timely completion of projects",
        "Work with the college’s Office of Communications to ensure all projects align with university branding standards and the college’s storytelling strategy",
      ],
    },
    {
      title: "Project Engineer",
      company_name: "Wipro Ltd",
      icon: Wipro,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Mar 2023",
      points: [
        "Developed, created, and track solutions to more than 50 application errors and defects reported using Java, SQL, Gradle tool, establishing API endpoint connections, and Spring Implementation.",
        "Collaborated with Dev and Infra team, covering 14 tools and 9 modules in project to improve business processes by conducting training sessions on module inter reliability and checking business feature validations.",
        "Alleviated message transmission process by implementing a route definition this decreased the message transfer time by 50% which is crucial in airlines domain.",
        "Modified the module to migrate from SVN repository to GIT repository and integrated azure pipelines to enhance reliability.",
      ],
    },
    {
      title: "Freelance Graphic Designer",
      company_name: "Ganges Valley School",
      icon: GangesValleySchool,
      iconBg: "#383E56",
      date: "Dec 2020 - Jun 2022",
      points: [
        "Create designs, concepts, and sample layouts based on knowledge of layout principles and esthetic design concepts.",
        "Impressed with my commitment and Ideas, the contract was extended to grade 3 for an additional 6 books.",
        "Emphasized Inclusive and Diverse Character Representation: One of my primary focuses in my work is ensuring that the content I create is representative and inclusive. By featuring diverse characters in the materials, I contribute to fostering a sense of belonging and understanding among the students.",
      ],
    },
    {
      title: "Implant Trainee - Internship",
      company_name: "ISRO - Indian Space Research Organisation",
      icon: ISRO,
      iconBg: "#E6DEDD",
      date: "Jun 2019 - Jun 2019",
      points: [
        "Telemetry Tracking operations, Spacecraft Operations, Scheduling Operations, Flight Dynamics Operations, Computer network support and communication network support. As a part of the Implant Training, we were exposed to the operations of ISTRAC/ISRO and witnessed the workings of numerous satellites.",
        "Analyzed the working of Bangalore Ground Station, Indian Deep Space Network(IDSN), storage facility at IDSN, India's Largest Satellite antennas (32- meter and 18- meter deep space antennas) and also the live tracking of MOM(Mars Orbiter Mission).",
        "Visiting and observing the inner workings of Mission Analysis Room and Mission Control Center.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "His commitment to code and design skills are top-notch. He is a great asset to any team.",
      name: "Rama Chandra Kashyap",
      designation: "Programmer Analyst",
      company: "Value Momentum",
      //image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "3D Gator Habitat mapping",
      description:
        "Developed a 3D graphics rendering application using OpenGL, emphasizing parallax and normal mapping for realistic textures and light interactions, with features for real-time object manipulation and in-depth exploration of advanced 3D graphics principles.",
      tags: [
        {
          name: "OpenGL",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: CG,
      //source_code_link: "https://github.com/",
    },
    {
      name: "Productivity Pal",
      description:
        "an innovative application designed to enhance personal productivity by integrating task management with mental health considerations. Productivity Pal offers a holistic solution by incorporating features such as mood and progress tracking, achievement badges, and mindfulness practices.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Flutter",
          color: "green-text-gradient",
        },
        {
          name: "HCI",
          color: "pink-text-gradient",
        },
      ],
      image: PP,
      source_code_link: "https://github.com/",
    },
    {
      name: "Library Management - Redblack Trees Implementation",
      description:
        "Library System employs a Red-Black Tree data structure to ensure optimized search, insert, and delete operations, which are critical for maintaining an extensive library catalog. Additionally, a priority-queue system based on Binary Min-heaps is integrated to handle customer reservations efficiently, respecting both timeliness and priority.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: ADS,
      source_code_link: "https://github.com/Srikanth-Ganti7/GatorLibrary-System-with-Red-Black-Tree-and-Min-Heap-Implementation/tree/main",
    },

    {
      name: "Super Kung-Fu Kitty",
      description:
        "A Platformer game in the likes of space invaders. Implemented using C# in Unity and deployed to simmer.io",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: SKK,
      source_code_link: "https://simmer.io/@pineapple_MS/super-kung-fu-kitty",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };