import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";

const MtnHead = motion(Heading);
const MtnText = motion(Text);
const MtnStk = motion(VStack);

const ResForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationFade.start({ opacity: 1 });
    }
  }, [isInView, animationHead, animationFade]);

  const [borderClr, setbordorClr] = useState(null);

  const [formData, setFormData] = useState({
    nmae: "",
    email: "",
    phoneNo: "",
    areaOfInterest: "",
    resume: "",
  });

  const { name, email, phoneNo, areaOfInterest, resume } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    if (name === "" || email === "" || phoneNo === "") {
      setbordorClr(true);
    } else {
      setbordorClr(false);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      pt="1.875rem"
      mb="25px"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <MtnHead
        initial={{ opacity: 0, y: -50 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="2.125rem"
      >
        SEND YOUR RESUME
      </MtnHead>
      <MtnText
        initial={{ opacity: 0 }}
        animate={animationFade}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="1rem"
        fontFamily="veralaRound"
        py="1rem"
        px="1rem"
        textAlign="center"
      >
        Work with us, send your resume and our team will get back to you.
      </MtnText>
      <Container w="100%">
        <form onSubmit={submitHandler} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <FormControl align="center" justify="center">
            <MtnStk
              w="100%"
              initial={{ opacity: 0 }}
              animate={animationFade}
              transition={{ delay: 1, duration: 2, type: "just" }}
              align="center"
              justify="center"
            >
              <FormControl isRequired>
                <Flex
                  pos="relative"
                  w="100%"
                  align="center"
                  justifyContent="space-between"
                  pb="0.463rem"
                >
                  <HStack align="flex-start" justify="space-between" pb="7px">
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="0.875rem"
                    pl="1rem"
                    htmlFor="name"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    pos="absolute"
                    right="1rem"
                    type="text"
                    id="name"
                    value={name}
                    onChange={onChange}
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                  </HStack>
                </Flex>
              </FormControl>
              <Flex w="100%" align="center" justify="space-between" pb="15px">
              <HStack align="flex-start" justify="space-between">
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="0.875rem"
                  pl="1rem"
                  htmlFor="email"
                >
                  EMAIL
                </FormLabel>
                <Input
                  pos="absolute"
                  right="1rem"
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  fontSize="1rem"
                  fontFamily="veralaRound"
                  w="11.75rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
                </HStack>
              </Flex>
              <FormControl isRequired>
                <Flex w="100%" align="center" justify="space-between" pb="15px">
                <HStack align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="0.875rem"
                    pl="1rem"
                    htmlFor="phoneNo"
                  >
                    PHONE NO.
                  </FormLabel>
                  <Input
                    pos="absolute"
                    right="1rem"
                    type="number"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={onChange}
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                  </HStack>
                </Flex>
              </FormControl>
              <Flex w="100%" align="center" justify="space-between">
              <HStack align="flex-start" justify="space-between">
                <FormLabel
                  w="6rem"
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="0.875rem"
                  pl="1rem"
                  htmlFor="areaOfInterest"
                >
                  AREA OF INTEREST
                </FormLabel>
                <Input
                  pos="absolute"
                  right="1rem"
                  type="text"
                  id="areaOfInterest"
                  value={areaOfInterest}
                  onChange={onChange}
                  fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                />
                </HStack>
              </Flex>
              
                <Flex w="100%" align="center" justify="space-between" pb="15px">
                <FormControl isRequired>
                <HStack align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="0.875rem"
                    pl="1rem"
                    htmlFor="resume"
                  >
                    RESUME
                  </FormLabel>
                  <Input
                    pos="absolute"
                    right="1rem"
                    type="file"
                    id="resume"
                    value={resume}
                    onChange={onChange}
                    p="0.3rem"
                    fontSize="0.875rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                  </HStack>
                  </FormControl>
                </Flex>
                
            </MtnStk>
            <Button
                  alignSelf="center"
                  type="submit"
                  mt="25px"
                  mb="50px"
                  bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                  color="white"
                  fontSize="1rem"
                  fontFamily="avenir"
                  _hover={{
                    bgGradient: "linear(to-b, #DFBD69, #B88746)",
                  }}
                  _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
                >
                  SUBMIT NOW
              </Button>
          </FormControl>
        </form>
      </Container>
    </Flex>
  );
};

export default ResForm;
