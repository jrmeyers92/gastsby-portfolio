import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jake Meyers Portfolio', // e.g: 'Name | Developer'
  lang: 'En', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jake Meyers',
  subtitle: "I'm a Front-End Web Developer",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    "Greetings, I'm a Web Developer specalizing in the Front-End. I am proficient using HTML, CSS, and JavaScript, React, Sass, Git and more. ",
  paragraphTwo:
    "I enjoy teaching myself new technologies and computer science concepts. I'm currently reading Grokking Algorithms and playing around with the D3 library. ",
  paragraphThree:
    'When not coding, you can find me playing with my dog, camping or backpacking, mountain biking, going on float trips, or hanging out with friends and family. ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ExpenseTracker.png',
    title: 'Expense Tracker',
    info:
      'Used React (including UseContext, UseReducer, UseState, UseEffect, and custom hooks) and Material UI to create an expense tracker app.',
    info2: 'User is able to add and remove income and expenses throughout different categories.',
    url: 'https://react-expense-tracker-1.netlify.app/',
    repo: 'https://github.com/jrmeyers92/expense-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'InstagramClone.png',
    title: 'Instagram Clone',
    info: 'Used React, React Router DOM, Material UI, and Firebase to create an Instagram clone.',
    info2:
      'User is able to create an account, post pictures with captions, and view posts from other users.',
    url: '',
    repo: 'https://github.com/jrmeyers92/instagram-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RaftingCompany.jpg',
    title: 'White Water Rafting Co.',
    info:
      'Utilized JavaScript, SASS, and HTML to create a landing page for a white water rafting company.',
    info2: '',
    url: 'https://raftingcompany.netlify.app/',
    repo: 'https://github.com/jrmeyers92/RaftingCompany', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'JakeRMeyers92@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jakemeyers92',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/jrmeyers92',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/jake-meyers-477b7a52',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jrmeyers92',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
