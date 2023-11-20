const ExperienceArray = () => {
  const experiences = [
    {
      company: "Coderit",
      role: "Full-Stack Developer",
      startDate: "Gen 2023",
      endDate: "Jul 2023",
      description:
        "Coderit design, develop, and maintain high-quality software that enhances your company's performance, and we train your IT staff to effectively support it.",
      image: "/assets/coderitLogo.jpg",
      website: "https://www.coderit.it/",
      tags: "Internship",
      points: [
        "My role involved full-stack development, where I crafted user-friendly interfaces (front-end) and designed robust database systems (back-end) for websites.",
        "My responsibilities included overseeing the entire web development process, from front-end UI/UX design to back-end server scripting, ensuring optimal performance and functionality.",
      ],
      badges: [
        {
          id: 1,
          name: "Internship",
          color: "blue",
        },
        {
          id: 2,
          name: "Completed",
          color: "green",
        },
      ],
    },
    {
      company: "MB Ricerche",
      role: "Full Stack Developer",
      description:
        "MB Ricerche is a small marketing company specialized in market reserch",
      image: "/assets/mbLogo.png",
      startDate: "Gen 2018",
      endDate: "Present",
      // TODO
      website: "https://mb-research.web.app/",
      tags: "Work",
      points: [
        "Engaged in software development to streamline various tasks, including crafting algorithms for text classification through machine learning.",
        "I took on the responsibility of designing and developing our company website, ensuring a user-friendly and informative online presence.",
        "Developed innovative algorithms in the field of machine learning, specializing in text classification and sentiment analysis",
      ],
      badges: [
        {
          id: 1,
          name: "CONTRACTED",
          color: "blue",
        },
        {
          id: 2,
          name: "Ongoing",
          color: "orange",
        },
      ],
    },
    {
      company: "ITS Academy Angelo Rizzoli",
      role: "Machine Learning & Artificial Intelligence Specialist",
      description:
        "ITS Accademy Angelo Rizzoli offer young people the opportunity to train as professionals and as people, thanks to an offer that currently includes 11 study paths in the fields of graphics, communication, ICT and digital transition 4.0",
      image: "/assets/itsarLogo.jpeg",
      startDate: "Oct 2021",
      endDate: "Jul 2023",
      // TODO
      website: "https://www.itsrizzoli.it/",
      tags: "School",
      points: [
        "During my undergraduate studies in Artificial Intelligence and Machine Learning, I acquired a wide range of skills. I became proficient in programming languages like Python, with a focus on applying them to AI and Machine Learning projects.",
        "My coursework also included in-depth data analysis and database management training, where I learned to extract valuable insights from complex datasets and design efficient data storage systems.",
        "As an Artificial Intelligence & Machine Learning Specialist, I honed my ability to identify strategic objectives and use machine learning tools for forecasting and optimization.",
      ],
      badges: [
        {
          id: 1,
          name: "Completed",
          color: "green",
        },
      ],
    },
  ];

  return experiences;
};

export default ExperienceArray;
