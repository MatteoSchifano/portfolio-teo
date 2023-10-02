import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  Link,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";
import { BsDownload } from "react-icons/bs";

export default function About({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 12 }}
          pb={{ base: 8, md: 14 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.500"} fontSize={"xl"} px={4}>
          Hello, I am 21 years old and have recently specialized at Angelo Rizzoli Institute with the title of Machine Learning & Artificial Intelligence Specialist. Through various projects and collaborations with different companies in the computer and marketing sectors, I have gained significant experience in Python backend programming and ReactJS front-end development.
          </Text>
          <Center>
            <Box width="fit-content" align='center'>
              <Link href='https://drive.google.com/file/d/1lbqQ_Wr_UdOMi0yFrbgt5nsVIcD-T-mK/view?usp=sharing' textDecoration="none" isExternal>
                <Button rightIcon={<BsDownload />} color={`${color}.400`} textDecoration="none" >
                  Download Resume
                </Button>
              </Link>
            </Box>
          </Center>s
        </Stack>
      </Container>
    </>
  );
}
