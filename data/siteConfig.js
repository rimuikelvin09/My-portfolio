module.exports = {
  siteTitle: 'RIMUI09',
  siteDescription: `Kelvin Rimui portfolio`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Kelvin Rimui',
  twitterUsername: '@rimui09',
  githubUsername: 'rimuikelvin09',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Developer,Tech enthusiasist and sports fanatic.I am a 4th year undergrad at St.pauls university 
  studying Bachelors in Business and Information Technology. I have acquired front end developing skills over the course
  of my campus life some of them being<strong> Javascript, React, HTML & CSS.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 95,
    },
    {
      name: 'CSS',
      level: 95,
    },
    {
      name: 'React-JS',
      level: 90,
    },
    {
      name: 'Python',
      level: 80,
    },
    {
      name: 'Linux OS',
      level: 90,
    },
    {
      name: 'Git',
      level: 90,
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
      occupation: 'Freelance web  developer',
      description:
        'After a few weeks of studying frontend developing i decided to start practicing with small freelance jobs so that i can build on my new found knowledge.',
    },
    {
      company: 'Benchmark Building Solutions Company ltd',
      begin: {
        month: 'Jan',
        year: '2022',
      },
      duration: null,
      occupation: 'ICT Director',
      description:
        'I created and maintained the company website as well as maintain the company IT systems.',
    },
  ],
  portfolio: [
    {
      image: '/images/sample-portfolio.png',
      description: 'sample portfolio',
      url: 'https://sample-portfolio-001.netlify.app/',
    },
    {
      image: '/images/my-portfolio.png',
      description: 'My portfolio',
      url: 'https://rimuikelvin09.github.io/My-portfolio/',
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
    email: 'rimuikelvin4@gmail.com',
  },
  siteUrl: 'https://rimuikelvin09.github.io/My-portfolio/',
  pathPrefix: '/My-portfolio', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: '183344612 ',
  background_color: 'rgba(255, 255, 255, 1)',
  theme_color: '  #230af5  ',
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
