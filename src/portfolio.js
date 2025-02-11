const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sumanth Devadiga',
  role: 'Software Engineer',
  description:
    "Hi, I'm Sumanth Devadiga, a Computer Science Engineering student passionate about Web Development and problem-solving. With hands-on experience in Java, Python, and building web applications, I love learning new technologies and creating impactful solutions. I'm always striving to improve and contribute to meaningful projects. Explore my work and let's connect!",
  resume: 'https://drive.google.com/file/d/1C2194DDMWjBdObLboiJ5IaVYY9waBQAI/view?usp=sharing',
  social: {
    linkedin: 'https://github.com/sumanth0095',
    github: 'https://github.com/sumanth0095',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'E-Store',
    description:
      'This is the project on E-Commerce Website designed using the PHP for the Front_End and the MYSQL for database of the website',
    stack: ['PHP', 'MY SQL','XAMPP'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Travel Website',
    description:
      'This is the Front-End Design of the project built using the HTML, CSS and Tailwind for the Front-End',
    stack: ['HTMl', 'CSS', 'Tailwind'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Spam News Detection',
    description:
      'The project is based on the spam news detection built using the ptyhon to train the AI model',
    stack: ['Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Java',
  'Python',
  'SQL',
  'Machine Learning',
  'Artificial Intelligence'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sumanth.devadiga095@gmail.com',
  mobile: 8861074383
}

export { header, about, projects, skills, contact }
