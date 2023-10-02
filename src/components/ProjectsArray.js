

const ProjectsArray = () => {

  const projects = [
    {
      "name": "NeedAI",
      "tags": "Internship",
      "description": "NeedAI is a platform that leverages artificial intelligence to help users identify the best dropshipping products tailored to their specific needs, enabling them to establish and run an e-commerce business.",
      "image": "/assets/NA logo.png",
      "badges": [

        // {
        //   id: 1,
        //   name: "Completed",
        //   color: "green"
        // },
        {
          id: 2,
          name: "API rest",
          color: "blue"
        },
        {
          id: 3,
          name: "React JS",
          color: "blue"
        },
        {
          id: 3,
          name: "Python Flask",
          color: "blue"
        },
        {
          id: 4,
          name: "Mongo DB",
          color: "blue"
        }
      ],
      "link": "https://need-ai.web.app/",

    },

    {
      "name": "Data Analysis Heart Disease",
      "tags": "School",
      "description": "Create EDA analysis for Heart Disease Dataset using differet algorithms of machine learning to classificate data",
      "image": "/assets/hd-dataset-cover.jpg",
      "badges": [

        {
          id: 1,
          name: "Completed",
          color: "green"
        },
        {
          id: 2,
          name: "R",
          color: "blue"
        },
        {
          id: 3,
          name: "EDA analysis",
          color: "blue"
        },
        {
          id: 3,
          name: "Machine Learning",
          color: "blue"
        }
      ],
      "link": "https://github.com/MatteoSchifano/Data-Analysis-Heart-Disease-dataset",
    },

    {
      "name": "Phishing Analysis with Machine Learning Models",
      "tags": "School",
      "description": "This project aims to develop a machine learning model and compare various types of classifiers to detect and predict phishing attacks",
      "image": "/assets/phishing.png",
      "badges": [

        {
          id: 1,
          name: "Completed",
          color: "green"
        },
        {
          id: 2,
          name: "Jupiter Notebook",
          color: "blue"
        },
        {
          id: 3,
          name: "EDA analysis",
          color: "blue"
        },
        {
          id: 3,
          name: "Machine Learning",
          color: "blue"
        }
      ],
      "link": "https://github.com/MatteoSchifano/Phishing-URL-Classification",
    }

  ]

  return projects;
};

export default ProjectsArray;
