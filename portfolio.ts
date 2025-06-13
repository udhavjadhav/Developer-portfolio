import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Udhav Jadhav',
  title: "Hi, I'm Udhav Jadhav",
  description:
    'Highly skilled and experienced Full Stack Developer with a strong background in building dynamic and responsive web applications. Proficient in both frontend and backend technologies, including React.js, React Native, JavaScript, HTML, CSS, Material-UI, Bootstrap, Node.js, MongoDB, MySQL, Git, and GitHub. Passionate about delivering high-quality code and creating user-friendly interfaces across the entire development stack.',
  resumeLink:
    'https://drive.google.com/file/d/1Cw6ZaxvkD2WoxQRrOhfNtJi1Xslr4qAE/view?usp=drivesdk',
};

export const openSource = {
  githubUserName: 'udhavjadhav',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/udhavjadhav/',
  github: 'https://github.com/udhavjadhav',
  instagram: 'https://www.instagram.com/theudhavjadhav',
  facebook: 'https://www.facebook.com/profile.php?id=100009816224032',
  twitter: 'https://twitter.com/theudhavjadhav',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Frontend Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single Page Applications (SPAs) and Progressive Web Applications (PWAs) using React.js'
        ),
        emoji('⚡ Creating user-friendly web applications using React.js'),
        emoji('⚡ Developing mobile applications with React Native'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Bootstrap',
          iconifyTag: 'logos:bootstrap',
        },
        {
          skillName: 'MUI',
          iconifyTag: 'logos:material-ui',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
   
    {
      title: 'Bankend Development',
      lottieAnimationFile: '/lottie/skills/backend.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experienced in developing and building effective applications using Node.js and Express.js.'
        ),
        emoji("⚡ Skilled in creating and integrating RESTful APIs."),
        emoji(
          '⚡ Experienced in utilizing version control systems such as Git and GitHub to manage codebase changes, collaborate with teams, and maintain project history.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Node JS',
          iconifyTag: 'logos:nodejs',
        },
        // {
        //   skillName: 'Nest JS',
        //   iconifyTag: 'logos:nestjs',
        // },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm',
        },
        {
          skillName: 'Git',
          iconifyTag: 'logos:git',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
      ],
    },
    {
      title: 'Databases',
      lottieAnimationFile: '/lottie/skills/database.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Proficient in working with relational and NoSQL databases, including MySQL and MongoDB.'
        ),
        emoji(
          '⚡ Experienced in developing and deploying full-stack applications utilizing MySQL and MongoDB for data storage.'
        ),
      ],
      softwareSkills: [
        // {
        //   skillName: 'SQL',
        //   iconifyTag: 'ph:file-sql',
        // },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        // {
        //   skillName: 'SQLite3',
        //   iconifyTag: 'logos:sqlite',
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '60',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "MGM'S College of CS and IT, Nanded",
    subHeader: "Master's of Science in Software Engineering",
    duration: 'September 2020 - September 2022',
    desc: 'Participated in extra curriculum activities.',
    grade: 'Grade A+',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    schoolName: "MGM'S College of CS and IT, Nanded",
    subHeader: "Bachelor's of Science in Computer Science",
    duration: 'June 2016 - June 2019',
    desc: 'Participated in extra curriculum activities.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Developer',
    company: 'Senwell Solutions',
    companyLogo: 'https://senwellsys.com/logo.png',
    date: 'JAN 2023 – JUL 2023',
    desc: 'I worked as a Frontend Web Developer, designing web-based admin dashboards for multiple applications using React.js, Next.js, Redux, Material-UI, Chart.js, and various other libraries',
  },
    {
    role: 'Full Stack Developer',
    company: 'Frugal Innovations Pvt. Ltd',
    companyLogo: 'FIPL',
    date: 'DEC 2023 – Current',
    desc: 'I am currently working as a Full Stack Developer, designing web-based transport projects using AngularJS, ReactJS, HTML, CSS, Material UI, Node.js, MongoDB, MySQL, and various other libraries.',
  }
  ];

  export const projects: ProjectType[] = [
    {
      name: 'Developer Portfolio',
      desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
      github: 'https://github.com/udhavjadhav/developer-portfolio',
      link: 'https://udhavjadhav.vercel.app',
    },
    {
      name: 'Breathing App',
      desc: 'Breathing App, It is used to listen all type of meditation songs like relaxation, mental health, nature sounds,sky walk etc.',
      github: 'https://github.com/udhavjadhav/Breathing-app',
      link: 'https://breathlly.netlify.app',
    },
    {
      name: 'Shopping Cart (AJIO)',
      desc: 'Shopping Cart (AJIO), A E-commerce web application.',
      github: 'https://github.com/udhavjadhav/Shopping-Cart',
    },
    {
      name: 'Shopify',
      desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
      github: 'https://github.com/udhavjadhav/E-Commerce',
      link: 'https://shopifffy.netlify.app',
    },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Udhav Jadhav',
  description: 'A passionate Full Stack Developer.',
  author: 'Udhav Jadhav',
  image: 'https://avatars.githubusercontent.com/u/72942660?v=4',
  url: 'https://udhavjadhav.vercel.app',
  keywords: [
    'Udhav',
    'Udhav Jadhav',
    '@theudhavjadhav',
    'udhavjadhav',
    'Portfolio',
    'Udhav Portfolio ',
    'Udhav Jadhav Portfolio',
  ],
};
