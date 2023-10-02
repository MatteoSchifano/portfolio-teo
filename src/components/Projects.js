import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
  Center,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState } from "react";
import ProjectsArray from "./ProjectsArray";
import { BsGlobe2 } from "react-icons/bs";
import {FaGithub} from "react-icons/fa"

export default function Projects({ color }) {
  const projects = ProjectsArray();

  const options = ["All", "Work", "School", "Internship"];

  const [selected, setSelected] = useState("All");

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          pb={{ base: 8, md: 14 }}
        >
          <Stack align="center" direction="row" p={2}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option) => (
                <Button
                  colorScheme={selected === option ? `${color}` : "gray"}
                  onClick={() => handleSelected(option)}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            {projects
              .filter((project) => {
                if (selected === "All") return project;

                return project.tags.includes(selected);
              })
              .map((project) => (
                <Fade key={project.name} bottom>
                  <Card
                    key={project.name}
                    direction={{
                      base: "column",
                    }}
                    overflow="hidden"
                  >
                    <Image objectFit="cover" height={250} src={project.image} />

                    <Stack>
                      <CardBody align="left">
                        <Heading size="md">{project.name}</Heading>

                        <Text py={2}>{project.description}</Text>

                        <HStack py={2}>
                          <a href={project.link}>
                            <Button
                              leftIcon={<BsGlobe2 />}
                              color={`${color}.400`}
                            >
                              See project
                            </Button>
                          </a>
                        </HStack>
                        {project.github && (
                          <HStack py={2}>
                            <a href={project.github}>
                              <Button
                                leftIcon={<FaGithub />}
                                color={`${color}.400`}
                              >
                                Github
                              </Button>
                            </a>
                          </HStack>
                        )}
                        <HStack pt={4} spacing={2}>
                          {project.badges.map((badge) => (
                            <Badge key={badge.id} colorScheme={badge.color}>
                              {badge.name}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
          </Stack>
          {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Other Projects
          </Text>
          */}
          {/* <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others
              .filter((other) => {
                if (selected === "All") {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              })
              .map((other) => (
                <Fade bottom>
                  <Card key={other.name}>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm">{other.name}</Heading>

                        <Text fontSize="sm" py={2}>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              color={`${color}.400`}
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap" pt={4} spacing={2}>
                          {other.badges.map((badge) => (
                            <Badge
                              my={2}
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid> */}
        </Stack>
      </Container>
    </>
  );
}
