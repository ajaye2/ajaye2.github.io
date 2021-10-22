import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abubakarr Jaye | Machine Learning Engineer | Economist', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Abubakarr Jaye',
  subtitle: 'Machine Learning Engineer | Economist',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.',
  paragraphTwo: 'My hobbies involve dancing, riding quad bikes, listening to music and spending quality time with friends and family. ',
  paragraphThree: 'Fun Fact: I lived in Wales, Llantwit Major, for two years.',
  resume: 'https://drive.google.com/file/d/1Sg5hUcw2h1PtRZVhe4i_X1-VK_jcxC4r/view?usp=sharing', // if no resume, the button will not show up
};

// WORK EXPERIENCE DATA
export const workExperienceData = [
  {
    id: nanoid(),
    img: 'LUMNIS Logo.png',
    title: 'LUMNIS | Founder',
    info: 'Leading a team of 3, using NLP and deep learning to generate multi-asset class portfolios.',
    info2: 'Utilized unique financial meta-labeling method proposed by Marcos Lopez De Prado to develop random forest classifier to determine the direction of an asset.',
    info3: 'Implemented a LSTM neural network for financial sentiment analysis using TensorFlow Keras in python.',
    info4: 'Implemented time series neural network for predicting the ranking of assets.',
    info5: 'Built a simple attention model to determine the direction of an asset using TensorFlow Keras.'
  },
  {
    id: nanoid(),
    img: 'jpm_chase.jpg',
    title: 'JPMORGAN CHASE | SWE',
    info: 'Used React, and JavaScript to build client onboarding notification settings UI for JP Morgan EWallet team.',
    info2: 'Built UI and backend software (API) for viewing and editing client notification configurations using spring boot and react.',
  },
  {
    id: nanoid(),
    img: 'NSBE.jpg',
    title: 'NSBE | Public Relations Chair',
    info:  'Raised $26750 for the NSBE UIUC chapter. About 70% more than the historical average.',
    info2: 'Started initiative aimed at encouraging minorities to work towards managerial positions.',
    info3: 'Managed to organize an event with the CEO of Y-Combinator who gave a talk about minorities in entrepreneurship'
  },
  {
    id: nanoid(),
    img: 'JJ_JUICE.jpg',
    title: 'JJ JUICE | Founder ',
    info:  'Founded a beverage business aimed at processing local super fruits: Baobab, Ginger and Roselle-Hibiscus',
    info2: 'Improved sales by an average of 50% every month. Sold 4000 bottles per month.',
    info3: 'Supplied hundreds of bottles to a combination of 35 restaurants, supermarkets and hotels on a weekly basis increasing brand recognition and customer base.'
  },
  {
    id: nanoid(),
    img: 'KIDS4KIDS.png',
    title: 'KIDS4KIDS | Founder ',
    info:  'Co-founded charity organization aimed at empowering children through education and technology.',
    info2: 'Coordinated fund raising and directed the Bakau Newtown School computer lab project.',
    info3: 'Raised $3000 and 10 computers.'
  }
];

// CERTIFICATES DATA
export const certificatesData = [
  {
    id: nanoid(),
    title: 'Custom Models, Layers, and Loss Functions with TensorFlow',
    info: 'DeepLearning.AI',
    info2: '2021-08',
    url: 'https://www.coursera.org/account/accomplishments/certificate/JGKCYYUGGACV',
  },
  {
    id: nanoid(),
    title: 'Building Full-Stack Apps with React and Spring',
    info: 'Linkedin',
    info2: '2021-06',
    url: 'https://www.linkedin.com/in/abubakarr-jaye-506b83165/',
  },
  {
    id: nanoid(),
    title: 'Learning Spring with Spring Boot',
    info: 'Linkedin',
    info2: '2021-06',
    url: 'https://www.linkedin.com/in/abubakarr-jaye-506b83165/',
  },
  {
    id: nanoid(),
    title: 'Apache Kafka Essential Training: Getting Started',
    info: 'Linkedin',
    info2: '2021-06',
    url: 'https://www.linkedin.com/in/abubakarr-jaye-506b83165/',
  },
  {
    id: nanoid(),
    title: 'Sequences, Time Series and Prediction',
    info: 'Coursera',
    info2: '2020-12',
    url: 'https://www.coursera.org/account/accomplishments/certificate/5QGRE484H4GR',
  },
  {
    id: nanoid(),
    title: 'Natural Language Processing in TensorFlow',
    info: 'Coursera',
    info2: '2020-12',
    url: 'https://www.coursera.org/account/accomplishments/certificate/WFMXXWLXKLM8',
  },
  {
    id: nanoid(),
    title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
    info: 'Coursera',
    info2: '2020-11',
    url: 'https://www.coursera.org/account/accomplishments/certificate/WC3RUSVDYFH6',
  },
  {
    id: nanoid(),
    title: 'Building Interactive JavaScript Websites Course',
    info: 'Codecademy',
    info2: '2020-07',
    url: 'https://www.codecademy.com/profiles/abujaye2000/certificates/36ae898a1d1c8524815305b2d1d2ebab',
  },
  {
    id: nanoid(),
    title: 'Artificial Intelligence for Trading',
    info: 'Udacity',
    info2: '2020-06',
    url: 'https://confirm.udacity.com/HHMTM9VE',
  },
  {
    id: nanoid(),
    title: 'Analyze Financial Data with Python Skill Path ',
    info: 'Codecademy',
    info2: '2020-06',
    url: 'https://www.codecademy.com/profiles/abujaye2000/certificates/5d8a2f26510e9000118ef3b8',
  },
  {
    id: nanoid(),
    title: 'Learn Data Analysis with Pandas Course',
    info: 'Codecademy',
    info2: '2020-06',
    url: 'https://www.codecademy.com/profiles/abujaye2000/certificates/95dd3ed417d7d6c449afffc6401b310a',
  }
];

// EDUCATION DATA
export const educationData = [
  {
    id: nanoid(),
    img: 'UIUC.jpg',
    title: 'University of Illinois at Urbana-Champaign',
    info: 'GPA: 3.81/4.0 | Dean\'s List [Spring 2020]',
    info2: 'Relevant Coursework Completed: Data Structures and Algorithms; Computer Architecture; Intermediate Microeconomics, Numerical Methods in Economics; Machine Learning; Deep Learning; Analysis of Data; Macro-econometric Policy Analysis; Intro to Algorithms and Models of Computation; Systems Programming; Database Systems; International Economics',
  },
  {
    id: nanoid(),
    img: 'UWC.jpg',
    title: 'UWC Atlantic College, Wales',
    info: 'International Baccalaureate',
    info2: 'Math | Chemistry | Physics | Economics | English A | French ab',
  }

];


// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];


// BLOGS DATA
export const blogsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  
 
];


// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ajaye2@illinois.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'facebook',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abubakarr-jaye-506b83165/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ajaye2',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
