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
    MunchMates,
    FileTransfer,
    Redactor,
    IRA,
    UnRedactor,
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
        "Design and production of over 200+ print/interactive projects",
        "Design for various projects including letters, reports, social media and proposals",
        "Assist with copywriting and editing various communication pieces for the department",
        "Utilize an in-house project management system to provide relevant status updates and ensure the timely completion of projects",
        "Work with the college’s Office of Communications to ensure all projects align with university branding standards and the college’s inclusive and diverse storytelling strategy",
      ],
    },
    {
      title: "Project Engineer",
      company_name: "Wipro Ltd",
      icon: Wipro,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Mar 2023",
      points: [
        "Developed queuing and messaging modules for aircraft communications, optimizing Java Spring Boot, Apache Camel, and ActiveMQ to process 10 Million+ messages monthly.",
        "Engineered a microservice with REST APIs to encrypt, decrypt, and process 100K+ JSON tokens daily, ensuring secure and efficient data transmission via the client gateway.",
        "Developed a responsive User Interface for a critical airline operations dashboard, enhancing web usability and increasing page interaction efficiency by 70% using React and adhering to User-Centered Design (UCD) principles.",
        "Configured CI/CD pipelines for legacy modules using Jenkins and Azure DevOps, automating build and deployment processes, reducing deployment time by 40% and accelerating development cycles.",
        "Collaborated with cross-functional teams to streamline development.",
        "Resolved over 100+ application defects, achieving a 35% reduction in bug rates within the development cycle and enhancing overall system stability.",
        "Played a critical role in maintaining 99% system availability post-launch, ensuring smooth transitions by proactively monitoring servers during Go Live and resolving issues swiftly.",
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
        "Designed C++ scripts for telemetry decoding, anomaly detection, and data filtering, enhancing real-time spacecraft data accuracy by 35% and reducing processing latency by 25% for Mars Orbiter tracking via IDSN.",
        "Developed a full-stack telemetry monitoring system using React.js, Node.js, and WebSockets, enabling real-time spacecraft tracking and improving operational efficiency by 40%.",
        "Developed signal processing and data compression algorithms, cutting telemetry data redundancy by 45% and improving transmission reliability by 20%, optimizing ground station storage efficiency.",
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

    {
      testimonial:
        "I have worked with Srikanth for two years and found him to be a quite dependable resource. Apart from his excellent technical and communication skills, Srikanth also has a keen eye for nuances that make him excel in complex organizational environmental / team dynamics. Excellent team player and is a real asset to any company that he works for. ",
      name: "Suresh Babu Buddolla",
      designation: "Engineering Manager",
      company: "Wipro Ltd",
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
      name: "UX Case study - MunchMates",
      description:
        " an engaging and community-driven platform where users can discover, review, and recommend local dining spots, enhancing their culinary experiences through shared insights and recommendations.",
      tags: [
        {
          name: "UX Case study",
          color: "blue-text-gradient",
        },
        {
          name: "Wireframes",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: MunchMates,
      source_code_link: "https://srikanth-ganti-user-case-study-munchmates.framer.website/",
    },
    
    {
      name: "Automatic Text Redactor",
      description:
        "Developed a Python-based tool to automatically redact sensitive information from text documents, including names and customizable keywords removing sensitive information with 90%+ precision based on user-defined rule. Leveraged NLP (SpaCy) and regular expressions to accurately detect and replace confidential data, ensuring privacy compliance, increasing detection accuracy by 20% and reducing false positives by 35%. Built a full-stack web app using React.js, Node.js, and Express to allow users to upload, process, and visualize redacted documents in real time, including redaction statistics, word frequency insights, and interactive data visualizations.",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: Redactor,
      source_code_link: "https://github.com/Srikanth-Ganti7/cis6930fa24-project1",
    },
    {
      name: "Incident Insight Analyzer - A web App",
      description:
        "This project is a web application that processes incident reports from PDFs, visualizes the data, and provides insights like clustering, bar graphs, pie charts, and statistics. The application is built using Flask and integrates with various Python libraries for data manipulation and visualization.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
           name: "Pandas",
           color: "pink-text-gradient",
       },
      ],
      image: IRA,
      source_code_link: "https://github.com/Srikanth-Ganti7/cis6930fa24-project3",
    },
    {
      name: "Unredactor: Redacted Name Prediction Tool",
      description:
        "This project implements the Unredactor, a tool designed to predict redacted names from given contexts in text data. It uses machine learning techniques, including feature extraction and classification, to achieve this goal. The core pipeline involves preprocessing data, extracting features, training a model, and making predictions.",
      tags: [
        {
          name: "Model Training & Prediction",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
           name: "Pandas",
           color: "pink-text-gradient",
       },
      ],
      image: UnRedactor,
      source_code_link: "https://github.com/Srikanth-Ganti7/cis6930fa24-project2",
    },
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
      name: "Implementation of FTP client and server with multiple threads",
      description:
        "In this project, the application will manage two primary threads: a main thread that handles incoming connections and reads messages, and a writing thread that sends messages and files to a specified port. The program's functionality includes establishing connections, exchanging messages, and transferring files between users.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Multithreading",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: FileTransfer,
      source_code_link: "https://github.com/Srikanth-Ganti7/Implementation-of-FTP-client-and-server---file-transfer-between-users",
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
        {
          name: "UI-UX",
          color: "green-text-gradient",
        },
      ],
      image: PP,
      source_code_link: "https://github.com/Srikanth-Ganti7/ProdPal",
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