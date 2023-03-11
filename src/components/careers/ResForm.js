import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";

//const Heading = motion(Heading);
//const Text = motion(Text);
//const VStack = motion(VStack);

const ResForm = () => {
  const ref = useRef(null);
  /*
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationFade.start({ opacity: 1 });
    }
  }, [isInView, animationHead, animationFade]);
  */
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
      overflow="hidden"
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      pt="1.875rem"
      mb="1.563rem"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Heading
        className="serv-text-up reveal"
        fontFamily="goudy"
        fontWeight="400"
        fontSize="2.5rem"
      >
        SEND YOUR RESUME
      </Heading>
      <Text
        className="fadein reveal"
        fontSize="1rem"
        fontFamily="veralaRound"
        py="1.563rem"
        textAlign="center"
      >
        Work with us, send your resume and our team will get back to you.
      </Text>
      <Container minW="container.sm">
        <form onSubmit={submitHandler}>
          <FormControl align="center" justify="center">
            <VStack
              w="90%"
              className="fadein reveal"
              align="center"
            >
              <FormControl isRequired>
                <Flex
                  w="100%"
                  align="center"
                  justifyContent="space-between"
                  pb="0.438rem"
                >
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="1rem"
                    htmlFor="name"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={onChange}
                    fontFamily="veralaRound"
                    w="21.875rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </FormControl>
              <Flex
                w="100%"
                align="center"
                justify="space-between"
                pb="0.438rem"
              >
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="1rem"
                  htmlFor="email"
                >
                  EMAIL
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  w="21.875rem"
                  h="2.5rem"
                  fontFamily="veralaRound"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <FormControl isRequired>
                <Flex
                  w="100%"
                  align="center"
                  justify="space-between"
                  pb="0.438rem"
                >
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="1rem"
                    htmlFor="phoneNo"
                  >
                    PHONE NO.
                  </FormLabel>
                  <Input
                    type="number"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={onChange}
                    w="21.875rem"
                    h="2.5rem"
                    fontFamily="veralaRound"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </FormControl>
              <Flex
                w="100%"
                align="center"
                justify="space-between"
                pb="0.438rem"
              >
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="1rem"
                  htmlFor="areaOfInterest"
                >
                  AREA OF <br/>INTEREST
                </FormLabel>
                <Input
                  type="text"
                  id="areaOfInterest"
                  value={areaOfInterest}
                  onChange={onChange}
                  fontFamily="veralaRound"
                  w="21.875rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <FormControl isRequired>
                <Flex
                  w="100%"
                  align="center"
                  justify="space-between"
                  pb="0.438rem"
                >
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="1rem"
                    htmlFor="resume"
                  >
                    RESUME
                  </FormLabel>
                  <Input
                    type="file"
                    id="resume"
                    value={resume}
                    onChange={onChange}
                    fontFamily="veralaRound"
                    p="1"
                    w="21.875rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </FormControl>
            </VStack>
            {/*<Text ml="-10" fontSize="1rem" fontFamily="veralaRound">
              <Icon as={BsUpload} mr="10px" />
              Upload File
            </Text>*/}
            <Button
              type="submit"
              mt="1.563rem"
              mb="3.125rem"
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
