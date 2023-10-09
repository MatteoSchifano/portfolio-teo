import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  Wrap,
  HStack,
  Image,
} from "@chakra-ui/react";

export default function Skills({ color }) {
  const frontendTechnologies = [
    {
      name: "React",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    },
    {
      name: "Javascript",
      logoUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },

    {
      name: "HTML5",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      logoUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
  ];

  const databaseTechnologies = [
    {
      name: "MySQL",
      logoUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      logoUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "Firebase",
      logoUrl: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
  ];

  const backendTechnologies = [
    {
      name: "Python",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Flask",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
  ];

  const otherSkills = [
    {
      name: "R",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    },
    {
      name: "Tensorflow",
      logoUrl: "https://icon.icepanel.io/Technology/svg/TensorFlow.svg",
    },
    {
      name: "Keras",
      logoUrl: "https://icon.icepanel.io/Technology/svg/Keras.svg",
    },
    {
      name: "Numpy",
      logoUrl: "https://icon.icepanel.io/Technology/svg/NumPy.svg",
    },
    {
      name: "Pandas",
      logoUrl: "https://icon.icepanel.io/Technology/png-shadow-512/Pandas.png",
    },
    {
      name: "Scikit-Learn",
      logoUrl: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg",
    },
    {
      name: "Hugginface",
      logoUrl:
        "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    },
  ];

  const trasversalSkills = [
    {
      name: "Docker",
      logoUrl: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    },
    {
      name: "Git",
      logoUrl: "https://icon.icepanel.io/Technology/svg/Git.svg",
    },
    {
      name: "GitHub",
      logoUrl: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
    },
    {
      name: "Kubernetes",
      logoUrl: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
    },
  ];

  // TODO: Add link to documentation for every skill
  return (
    <div id="skills" style={{ paddingTop: "80px" }}>
      <Container maxW={"3xl"}>
        <Stack as={Box} spacing={{ base: 8, md: 4 }} pb={{ base: 4, md: 8 }}>
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Skills</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack pl={4} spacing={{ base: 8, md: 4 }}>
            <Text fontWeight={600}>Web Development</Text>
            <Wrap spacing={4}>
              {frontendTechnologies.map((technology) => (
                <Box key={technology.name} align="center">
                  <Image
                    src={technology.logoUrl}
                    alt={technology.name}
                    boxSize="40px"
                  />
                  <Text color={"gray.500"}>{technology.name}</Text>
                </Box>
              ))}
            </Wrap>

            {/* <Text fontWeight={600}>Mobile Development</Text>
            <Wrap spacing={4} >
              {mobileTechnologies.map((technology) => (
                <Box key={technology.name} align="center">
                  <Image src={technology.logoUrl} alt={technology.name} boxSize="40px" />
                  <Text color={"gray.500"}>{technology.name}</Text>
                </Box>
              ))}
            </Wrap> */}
            <Text fontWeight={600}>Back End Development</Text>
            <Wrap spacing={4}>
              {backendTechnologies.map((technology) => (
                <Box key={technology.name} align="center">
                  <Image
                    src={technology.logoUrl}
                    alt={technology.name}
                    boxSize="40px"
                  />
                  <Text color={"gray.500"}>{technology.name}</Text>
                </Box>
              ))}
            </Wrap>
            <Text fontWeight={600}>Databases</Text>
            <Wrap spacing={4}>
              {databaseTechnologies.map((technology) => (
                <Box key={technology.name} align="center">
                  <Image
                    src={technology.logoUrl}
                    alt={technology.name}
                    boxSize="40px"
                  />
                  <Text color={"gray.500"}>{technology.name}</Text>
                </Box>
              ))}
            </Wrap>
            <Text fontWeight={600}>Trasversal Skills</Text>
            <Wrap spacing={4}>
              {trasversalSkills.map((skill) => (
                <Box key={skill.name} align="center">
                  <Image src={skill.logoUrl} alt={skill.name} boxSize="40px" />
                  <Text color={"gray.500"}>{skill.name}</Text>
                </Box>
              ))}
            </Wrap>
            <Text fontWeight={600}>Other Skills and Knowledge</Text>
            <Wrap spacing={4}>
              {otherSkills.map((skill) => (
                <Box key={skill.name} align="center">
                  <Image src={skill.logoUrl} alt={skill.name} boxSize="40px" />
                  <Text color={"gray.500"}>{skill.name}</Text>
                </Box>
              ))}
            </Wrap>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
