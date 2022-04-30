module.exports = {
  siteTitle: 'Kelvin Rimui',
  siteDescription: `Kelvin Rimui portfolio`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Kelvin Rimui',
  twitterUsername: '@rimui09',
  githubUsername: 'rimuikelvin09',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Developer,Tech enthusiasist and sports fanatic.I am a 4th year undergraduate at St.pauls university 
  studying Bachelors in Business and Information Technology. I have acquired a variety of development skills over the course
  of my campus life as well as collaborative and leadership qualities. My most outsanding strength is the ability to solve problems
  irregardless of its complexity which is fueled by my willingness to learn and my open minded approach towards any task at hand. `,
  skills: [
    {
      name: 'Computer Hardware',
      level: 99,
    },
    {
      name: 'HTML/CSS',
      level: 98,
    },
    {
      name: 'React-JS',
      level: 97,
    },
    {
      name: 'Linux Terminal',
      level: 97,
    },
    {
      name: 'Git',
      level: 95,
    },
    {
      name: 'Python',
      level: 90,
    },
    {
      name: 'Wordpress',
      level: 85,
    },


    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'St.Pauls university',
      begin: {
        month: 'Nov',
        year: '2020',
      },
      duration: 2022,
      occupation: 'Freelance developer',
      description:
        'I decided to sharpen my skills acquired in the university classrooms by doing freelance jobs that included web development and hardware maintenance within the school community as well as outside the school community',
    },
    {
      company: 'Benchmark Building Solutions Company ltd',
      begin: {
        month: 'Jan',
        year: '2022',
      },
      duration: null,
      occupation: 'ICT co-ordinator',
      description:
        'I created and maintained the company website as well as maintained the company software and hardware sytems.',
    },
  ],
  portfolio: [
    {
      image: '/images/BBS.png',
      description: 'Benchmark Building Solutions',
      url: 'https://benchmarkbuildingsolutions.com/',
    },
    {
      image: '/images/my-portfolio.png',
      description: 'My portfolio',
      url: 'git',
    },
    {
      image: '/images/felix.png',
      description: 'Felix car blog',
      url: 'https://magirioncars.netlify.app/',
    },
    /* more portfolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/@rimui09',
    linkedin: 'https://www.linkedin.com/in/Rimui-Kelvin',
    github: 'https://github.com/rimuikelvin09',
    instagram: 'rimui09',
    email: 'rimuikelvin4@gmail.com',
  },

  siteUrl: 'https://rimuikelvin09.github.io/My-portfolio/',
  pathPrefix: '/My-portfolio', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: '183344612 ',
  background_color: 'rgba(255, 255, 255, 1)',
  theme_color: '  #670089  ',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/icon.jpg',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
  ],
}
