// get all the exported image in assets
import { 
  css,
  wastenot, 
  dulay, 
  kribot, 
  talksphere,
  html,
  python,
  sql,
  c,
  java,
  php,
  dart,
  react,
  node,
  three,
  figma,
  mobile,
  web,
  ui,
  fullstack
} from '../assets'

// used in About.jsx, array of experiences
const experiences = [
  {
    title: "Mobile Application Developer",
    school: "Pangasinan State University Urdaneta Campus",
    icon: mobile,
    date: "August 2022 - May 2023",
    points: [
      "I learned the tools used to develop a mobile application for Android, which are the Dart language and Flutter framework, which allowed me to build cross-platform apps.",
      "I understood that creating user-friendly interfaces, designing layouts, and optimizing the user experience are essential skills in mobile app development.",
      "I learned how to integrate APIs (application programming interfaces) to access data and services from third-party providers, which is crucial for many app functionalities.",
      "I learned that databases like SQLite or Firebase help you manage and manipulate data efficiently.",
    ],
  },
  {
    title: "Web Developer",
    school: "Pangasinan State University Urdaneta Campus",
    icon: web,
    date: "August 2021 - May 2022",
    points: [
      "I learned that in web development, it teaches you the basics of programming languages like HTML, CSS, and JavaScript, which are the building blocks of the web.",
      "I learned that as you build websites and web applications, you'll encounter various challenges that require creative problem-solving and honing your analytical skills.",
      "I learned that understanding web development involves learning about user interface (UI) and user experience (UX) design principles, which will help create visually appealing and user-friendly websites.",
      "I learned how to use version control systems like Git, which allows multiple developers to collaborate on projects efficiently and manage changes to code.",
    ],
  },
  {
    title: "UI/UX Designer",
    school: "Pangasinan State University Urdaneta Campus",
    icon: ui,
    date: "August 2021 - May 2022",
    points: [
      "I learned how to prioritize the needs and preferences of my users throughout the design process, ensuring that the final product is intuitive and user-friendly.",
      "I developed an understanding of design fundamentals such as layout, color theory, typography, and visual hierarchy, which are essential for creating aesthetically pleasing interfaces.",
      "I somehow became proficient in creating wireframes and prototypes to quickly iterate and test different design solutions before committing to a final design.",
      "I learned various methods for gathering insights about user behavior and preferences, including interviews, surveys, usability testing, and analytics analysis.",
    ],
  },
  {
    title: "Full Stack Developer",
    school: "Pangasinan State University Urdaneta Campus",
    icon: fullstack,
    date: "August 2020 - Present",
    points: [
      "I gained proficiency in languages and frameworks like HTML, CSS, and JavaScript (for the front end) and languages like Python, Java, or Node.js (for the back end).",
      "I learned how to design and interact with databases, including SQL databases like MySQL and NoSQL databases like MongoDB.",
      "I gained some experience in integrating third-party APIs into my applications, allowing them to interact with services like payment gateways, social media platforms, or mapping services.",
      "I developed skills in writing unit tests, integration tests, and debugging techniques to ensure the reliability and stability of my applications.",
    ],
  },
];

// used in About.jsx, array of technologies or skills
const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C#",
    icon: c,
  },
  {
    name: "Java Script",
    icon: java,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "Figma",
    icon: figma,
  }
];

// used in Projects.jsx, array of projects
const projects = [
  {
    id: 1,
    title: "KriyaBot",
    description: "A support messaging chatbot for Kriya.",
    img: kribot,
    points: [
      "React JS",
      "BotSonic",
      "Tailwind"
    ],
    features: [
      "Suggested Questions/FAQ",
      "Pre-written Responses"
    ]
  },
  {
    id: 2,
    title: "WasteNot",
    description: "A mobile application that aims to reduce food waste.",
    img: wastenot,
    points: [
      "Dart",
      "Flutter",
      "Firebase"
    ],
    features: [
      "Capture expiration",
      "Expiration reminder"
    ]
  },
  {
    id: 3,
    title: "TalkSphere",
    description: "A web application that let's people talk to one another and communicate.",
    img: talksphere,
    points: [
      "Node JS",
      "SQL",
      "CSS",
      "Bootstrap",
    ],
    features: [
      "Communicate with other users",
      "Comment, post, and reply"
    ]
  },
  {
    id: 4,
    title: "Dulay Party Needs Website",
    description: "A web application created for the Dulay Party Needs store.",
    img: dulay,
    points: [
      "Laravel",
      "SQL",
      "CSS",
      "Bootstrap",
    ],
    features: [
      "Inventory system",
      "Ordering system"
    ]
  },
]

export { experiences, technologies, projects }