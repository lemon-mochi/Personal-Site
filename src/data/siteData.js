// Central content for the site. Add a new project, skill, or link here
// and it will automatically render in the right place.

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/lemon-mochi',
    icon: '/logos/github-mark-white.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gen-blaine-48aa881a4/',
    icon: '/logos/LI-In-Bug.png',
  },
  {
    label: 'Email (personal)',
    href: 'mailto:genwblaine@gmail.com',
    icon: '/logos/email-or-envelope-with-at-sign-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector.jpg',
  },
  {
    label: 'Email (SFU)',
    href: 'mailto:gwb2@sfu.ca',
    icon: '/logos/SFU_block_colour_rgb.png',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

export const aboutText = `As a computing science major at Simon Fraser University, hailing from Burnaby, British Columbia,
my academic journey intertwines a fascination with artificial intelligence, machine learning,
and computer hardware. Complemented by a deep-seated interest in mathematics, I'm pursuing a
minor in the subject. My proficiency spans a diverse array of programming languages including C,
C++, Java, Python, SQL, x86-64 assembly, Haskell, and LaTex, honed through both coursework and
personal projects. Additionally, I thrive in collaborative settings, having actively engaged in
group computing assignments as part of my academic endeavors. From October 2024, I have begun
volunteering at Atria community as a software engineer, where I am working on the backend of a
web app in a group. Through this experience, I have strengthened my git skills, and have gained
experience using Python and django, jira, and got experience using basic agile principles.`;

export const skillGroups = [
  {
    category: 'Programming Languages',
    items: ['C', 'C++', 'Java', 'Python', 'SQL', 'Haskell', 'x86-64 assembly', 'LaTeX'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['Git', 'Docker', 'React', '.NET MAUI'],
  },
  {
    category: 'Data Analysis',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
  },
  {
    category: 'Databases',
    items: ['Microsoft SQL Server', 'pymssql', 'django'],
  },
];

// Each project can optionally include a `gallery` array of image paths.
// Projects without a gallery just render as a link + description.
export const projects = [
  {
    title: 'Nim Game',
    href: 'https://nim-game-eight.vercel.app/',
    description: 'Play the classical mathematical game Nim, or a variant, Wythoff\'s game against another person or a computer.',
    gallery: [
      '/nim_game1.png',
      '/nim_game2.png',
      '/nim_game3.png',
      '/nim_game4.png',
    ]
  },
  {
    title: 'FinSight AI',
    href: 'https://github.com/lemon-mochi/finsight-ai',
    description: 'RAG-powered financial document analysis.'
  },
  {
    title: 'Image processing site',
    href: 'https://image-processing-site.onrender.com/',
    description: 'Click to play around with the image functions I have written',
  },
  {
    title: 'Image functions',
    href: 'https://github.com/lemon-mochi/image-functions',
    external: true,
    description: 'A program which modifies images by modifying individual pixels. Implemented using Java.',
    gallery: [
      '/img_func1.PNG',
      '/img_func2.PNG',
      '/img_func3.PNG',
      '/img_func4.PNG',
      '/img_func5.PNG',
      '/img_func6.PNG',
      '/img_func7.PNG',
    ],
  },
  {
    title: 'Conversion',
    href: 'https://github.com/lemon-mochi/Conversion',
    external: true,
    description: 'A tool for converting various units of measure. Implemented using Java.',
    gallery: ['/conv1.PNG', '/conv2.PNG', '/conv3.PNG', '/conv4.PNG', '/conv5.PNG', '/conv6.PNG'],
  },
  {
    title: 'Huffman audio coding',
    href: 'https://github.com/lemon-mochi/Huffman-audio-coding',
    external: true,
    description: 'Compressing audio using Huffman encoding. Implemented in C and C++',
    gallery: ['/audio1.PNG', '/audio2.PNG'],
  },
  {
    title: 'Edmonton Yelp Reviews',
    href: 'https://github.com/lemon-mochi/Edmonton-Yelp-Reviews',
    external: true,
    description: 'Uses SQL and Python to create a user-friendly database system.',
  },
  {
    title: 'Cannonball Game',
    href: 'https://github.com/lemon-mochi/Cannonball-Game',
    external: true,
    description: 'Simple game where the user controls a cannon and shoots down balloons.',
  },
  {
    title: '2D Line Rasterizer',
    href: 'https://github.com/lemon-mochi/2D-rasterizer',
    external: true,
    description: 'User friendly way of creating 2d images using rasterization.',
  },
  {
    title: 'Assembly Binary GCD',
    href: 'https://github.com/lemon-mochi/Assembly-Binary-GCD',
    external: true,
    description: 'Program that calculates the integer greatest common divisor implemented in x86-64 for efficiency.',
  },
  {
    title: 'AI Based Public Speaking Feedback System',
    href: 'https://github.com/lemon-mochi/AI-Based-Public-Speaking-Feedback-System',
    external: true,
    description: "An AI system which gives user's feedback on their public speaking",
  },
  {
    title: 'Click and Regret Minesweeper Game',
    href: 'https://github.com/lemon-mochi/Click-Regret---Minesweeper-Game',
    external: true,
    description: 'Hackathon project that I contributed to.',
  },
  {
    title: 'Hospital Simulator',
    href: 'https://github.com/lemon-mochi/Hospital-Simulator',
    external: true,
    description: 'A C program that simulates a hospital given user input',
  },
  {
    title: 'LOESS Polling Visualizer',
    href: 'https://github.com/lemon-mochi/LOESS-Polling-Visualizer',
    description: 'A program that uses LOESS to approximate election polling data',
  },
  {
    title: '3D Rasterizer',
    href: 'https://github.com/lemon-mochi/3D-Rasterizer',
    description: 'A user friendly 3D-Rasterizer for creating spheres and cubes',
  },
  {
    title: 'CRT Filter',
    href: 'https://github.com/lemon-mochi/CRT-filter',
    description: 'A program to apply a CRT filter to an image, video, or live webcam footage',
  },
  {
    title: 'Universe Simulator',
    href: 'https://github.com/lemon-mochi/Universe',
    description: 'C/C++ program that simulates the universe',
  }
];

export const education = {
  degree: 'B.Sc. in Computing Science, Simon Fraser University (SFU)',
  minor: 'Minor in Mathematics',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Artificial Intelligence',
    'Computational Data Science',
    'Software Engineering',
    'Database Systems I & II',
    'Multimedia Systems',
    'Machine Learning',
    'Affective Computing',
    'Visual Computing',
    'Natural Language Processing',
    'Computer Vision',
    'Programming Languages',
    'Computer Simulation',
    'Computer Graphics',
    'Numerical Analysis',
    'Computer Algebra',
    'Ramsey Theory',
    'Game Theory',
    'Geometry & Symmetry',
    'Linear Programming/Optimization',
    'Various electives in humanities/social sciences'

  ],
  honours: ["Dean's Honour Roll in Spring 2023 and Fall 2023 (SFU)"],
  diploma: 'Dogwood Diploma from Burnaby Mountain Secondary School with a Gold Cord',
};

export const footer = {
  year: 2026,
  name: 'Gen Blaine',
  easterEgg: {
    label: 'Top secret',
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
};