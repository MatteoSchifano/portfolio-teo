import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  useMediaQuery,
  Button,
  ButtonGroup,
  IconButton,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState } from "react";
import ExperienceArray from "./ExperienceArray";
import { BsGlobe2 } from "react-icons/bs";

export default function Experience({ color }) {
  const experience = ExperienceArray();
  const options = ["All", "Work", "Internship", "School"];
  const [selected, setSelected] = useState("All");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [largeScreen] = useMediaQuery("(min-width: 600px)");
  const [smallScreen] = useMediaQuery("(max-width: 599px)");

  const [modal, setModal] = useState({});

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <div id="experience" style={{ paddingTop: "80px" }}>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          pb={{ base: 8, md: 14 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option) => (
                <Button
                  key={option}
                  colorScheme={selected === option ? `${color}` : "gray"}
                  onClick={() => handleSelected(option)}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            {experience
              .filter((exp) => {
                if (selected === "All") return exp;

                return exp.tags.includes(selected);
              })
              .map((exp) => (
                <Fade key={exp.company} bottom>
                  <Card key={exp.company} size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image
                            src={exp.image}
                            h={50}
                            w={50}
                            borderRadius="6px"
                          />
                          <Box px={2} align="left">
                            <HStack>
                              <Text fontWeight={600}>{exp.company}</Text>
                              <IconButton
                                variant="ghost"
                                colorScheme="teal"
                                aria-label="About Company"
                                fontSize="20px"
                                onClick={() => {
                                  onOpen();
                                  setModal(exp);
                                }}
                                icon={<InfoOutlineIcon />}
                              />
                            </HStack>
                            <Text>{exp.role}</Text>
                            {smallScreen && (
                              <Text fontWeight={300} pt={1} fontStyle="italic">
                                {exp.startDate} - {exp.endDate}
                              </Text>
                            )}
                          </Box>
                        </HStack>
                        {largeScreen && (
                          <Text px={2} fontWeight={300}>
                            {exp.startDate} - {exp.endDate}
                          </Text>
                        )}
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.points.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        {exp.badges.map((badge) => (
                          <Badge key={badge.id} colorScheme={badge.color}>
                            {badge.name}
                          </Badge>
                        ))}
                      </HStack>
                    </CardFooter>
                  </Card>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>
                        <HStack>
                          <Image
                            src={modal.image}
                            h={50}
                            w={50}
                            borderRadius="6px"
                          />
                          <Text pl={1} fontWeight={600}>
                            {modal.company}
                          </Text>
                        </HStack>
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Flex pb={2}>{modal.description}</Flex>
                      </ModalBody>
                      <ModalFooter>
                        <a href={modal.website}>
                          <Button
                            leftIcon={<BsGlobe2 />}
                            color={`${color}.400`}
                          >
                            See website
                          </Button>
                        </a>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
