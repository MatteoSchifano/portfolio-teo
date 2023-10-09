import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  Button,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export default function Contact({ color }) {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false); // Stato per gestire il messaggio di successo
  // const [formData, setFormData] = useState({
  //   user_name: "",
  //   user_email: "",
  //   message: "",
  // });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2hixryj",
        "template_sje00c2",
        form.current,
        "53HQMTQot2k1HTgpG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSuccess(true); // Imposta il messaggio di successo a true
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  return (
    <div id="contact" style={{ paddingTop: "80px" }}>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                05
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's get in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.contact}
            </Text>
            <Text
              color={`${color}.500`}
              fontWeight={600}
              fontSize={"lg"}
              px={4}
            >
              {profile.email}
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin
                  style={{ cursor: "pointer" }}
                  onClick={linkedin}
                  size={28}
                />
                <FaGithub
                  style={{ cursor: "pointer" }}
                  onClick={github}
                  size={28}
                />
                <FaEnvelope
                  style={{ cursor: "pointer" }}
                  onClick={email}
                  size={28}
                />
              </HStack>
            </Center>
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text>Name</Text>
              <Input type="text" name="user_name" />

              <Text>Email</Text>
              <Input type="email" name="user_email" />

              <Text>Message</Text>
              <Textarea name="message" />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  mt: 2,
                  backgroundColor: "#048a93",
                  "&:hover": {
                    backgroundColor: "#0d9d90",
                  },
                }}
              >
                Send
              </Button>
            </form>
            {isSuccess && (
              <Box
                mt={4}
                p={2}
                bgColor="green.100"
                color="green.800"
                borderRadius="md"
                textAlign="center"
              >
                Message sent successfully!
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
