import {
  Button,
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Image,
  Stack,
  HStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import React, { useEffect, useLayoutEffect } from "react";
import { TriangleDownIcon, PhoneIcon } from "@chakra-ui/icons";
// images
import img1 from "../refer and earn imgs/1ST STEP.png";
import img2 from "../refer and earn imgs/2ND STEP.png";
import img3 from "../refer and earn imgs/3RD STEP.png";
import bookIll from "../refer and earn imgs/book a visit illustration.png";
import carIll from "../refer and earn imgs/CAR ICON.svg";
import calender from "../refer and earn imgs/calender.svg";
import { useState } from "react";
import "./animations.css";
import "./rne.css";

const ReferTabs = ({active, setActive}) => {
  // const [active, setActive] = useState(window.localStorage.getItem('referEarnPage')?JSON.parse(window.localStorage.getItem('referEarnPage')):false);
  // useEffect(() => {
  //   window.localStorage.setItem('referEarnPage', JSON.stringify(active));
  // }, [active]);
  // useEffect(() => {
  //   const data = window.localStorage.getItem('referEarnPage');
  //   if ( data !== null ) setActive(JSON.parse(data));
  // }, []);
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try {
      for (var i = 0; i <= reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i]
          ? reveals[i].getBoundingClientRect().top
          : null;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
        }
      }
    } catch (e) {}
  };
  const revealAgain = () => {
    var reveals = document.querySelectorAll(".revealAgain");
    try {
      for (var i = 0; i <= reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i]
          ? reveals[i].getBoundingClientRect().top
          : null;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    } catch (e) {}
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll",revealAgain);
    return()=>{
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll",revealAgain);
    }
  });
  return (
    <Flex w="100%" h="100%" direction="column" align="center">
      <Flex w="100%" px={{ base: "1rem", lg: "6.25rem" }}>
        <Button
          w="100%"
          bgColor="white"
          bgGradient={active ? "linear(to-b, #B88746 ,#DFBD69)" : "white"}
          border="1px solid #B88746"
          color={active ? "white" : "black"}
          mr="0.625rem"
          p="1.563rem"
          borderRadius="none"
          fontSize="1rem"
          fontFamily="avenir"
          fontWeight="bold"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
            color: "white",
          }}
          onClick={() => {
            setActive(true);
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          REFER A FRIEND
        </Button>
        <Button
          ml="0.625rem"
          w="100%"
          bgColor="white"
          color={active ? "black" : "white"}
          p="1.563rem"
          border="1px solid #B88746"
          bgGradient={active ? "none" : "linear(to-b, #B88746 ,#DFBD69)"}
          borderRadius="none"
          fontSize="1rem"
          fontFamily="avenir"
          fontWeight="bold"
          onClick={() => {
            setActive(false);
          }}
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
            color: "white",
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          BOOK A VISIT
        </Button>
      </Flex>
      {active ? <ReferAFriend /> : <BookAVisit />}
    </Flex>
  );
};

export default ReferTabs;

const ReferAFriend = () => {
  return (
    <>
      <Flex overflow="hidden" mt="3.125rem">
        <Heading
          w="100%"
          className="serv-text-up reveal"
          textAlign="center"
          fontWeight="400"
          fontSize="2.5rem"
          fontFamily="goudy"
          pb="1.875rem"
        >
          HOW IT WORKS?
        </Heading>
      </Flex>
      <Flex
        w="100%"
        columnGap="1.25rem"
        pb="3.125rem"
        direction={{ base: "column", lg: "row" }}
        px="6.25rem"
      >
        <Flex
          w="100%"
          h="100%"
          direction="column"
          overflow="hidden"
        >
          <Heading fontFamily="avenir" fontSize="1.5rem" className="fadein reveal">
            STEP 1
          </Heading>{" "}
          <Flex
            w="100%"
            align="center"
            py="0.625rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="89%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.9rem"
              mr="0.15rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Flex h="8rem">
          <Text fontFamily="veralaRound" fontSize="1.25rem" className="fadein reveal">
            Fill up the form on website & submit the details of as many friends
            & family members you would like to refer.
          </Text>
          </Flex>
          <Image alignSelf="center" w="16rem" h="16rem" src={img1} className="fadein reveal"/>
        </Flex>
        <Flex w="100%" direction="column" overflow="hidden">
          <Heading
            fontFamily="avenir"
            fontSize="1.5rem"
            className="fadein-2sdelay reveal"
          >
            STEP 2
          </Heading>
          <Flex
            w="100%"
            align="center"
            py="0.625rem"
            className="sliderightdisco-2sdelay reveal"
          >
            <Divider
              w="89%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.9rem"
              mr="0.3rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Flex h="8rem">
          <Text
            fontFamily="veralaRound"
            fontSize="1.25rem"
            className="fadein-2sdelay reveal"
          >
            Your provided referral will be contacted by our team and complete assistance will be provided in the booking process.
          </Text>
          </Flex>
          <Image
            alignSelf="center"
            w="16rem"
            h="16rem"
            src={img2}
            className="fadein-2sdelay reveal"
          />
        </Flex>
        <Flex w="100%" direction="column" overflow="hidden">
          <Heading
            fontFamily="avenir"
            fontSize="1.5rem"
            className="fadein-4sdelay reveal"
          >
            STEP 3
          </Heading>
          <Flex
            w="100%"
            align="center"
            py="0.625rem"
            className="sliderightdisco-4sdelay reveal"
          >
            <Divider
              w="89%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.9rem"
              mr="0.16rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Flex h="8rem">
          <Text
            fontFamily="veralaRound"
            fontSize="1.25rem"
            className="fadein-4sdelay reveal"
          >
            Every time your referral becomes a successful booking, you’ll earn rewards upto Rs 1 Lakh.
          </Text>
          </Flex>
          <Image
            alignSelf="center"
            w="16rem"
            h="16rem"
            src={img3}
            className="fadein-4sdelay reveal"
          />
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        pt="1.875rem"
        direction="column"
        pb="5rem"
        overflow="hidden"
        bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        px="6.25rem"
      >
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            className="serv-text-up reveal"
            textAlign="center"
            fontFamily="goudy"
            fontSize="2.5rem"
            pb="1.875rem"
          >
            REFER & EARN
          </Text>
          <Flex
            w="100%"
            h="100%"
            direction="row"
            gap="6.25rem"
            pb="1.563rem"
            className="fadein reveal"
          >
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <Text pb="1.563rem" fontFamily="veralaRound" fontSize="1.25rem">
                YOUR DETAILS
              </Text>{" "}
              <FormControl isRequired>
                <HStack
                  w="100%"
                  h="100%"
                  justify="space-between"
                  align="center"
                  pb="1.563rem"
                >
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    ARE YOU A RESIDENT WITH US?
                  </FormLabel>
                  <RadioGroup>
                    <HStack
                      w="100%"
                      h="100%"
                      justify="space-between"
                      align="center"
                      fontFamily="veralaRound"
                      fontSize="18px"
                    >
                      <Radio
                        borderRadius="none"
                        value="yes"
                        size="lg"
                        mr="3.125rem"
                      >
                        YES
                      </Radio>
                      <Radio borderRadius="none" value="no" size="lg">
                        NO
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </HStack>
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PROJECT REFERRED
                  </FormLabel>
                  <Select
                    fontFamily="veralaRound"
                    fontSize="1rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#D9D9D9"
                    placeholder="SELECT PROJECT"
                    textTransform="uppercase"
                    borderBottom="2px solid white"
                    icon={
                      <TriangleDownIcon width="1.25rem" height="0.625rem" />
                    }
                    borderRadius="none"
                  >
                    <option style={{ color: "black" }}>Arete Homes</option>
                    <option style={{ color: "black" }}>Sky High Tower</option>
                    <option style={{ color: "black" }}>
                      Ponneri Gymkhana Club
                    </option>
                  </Select>
                </HStack>{" "}
              </FormControl>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <Text pb="1.563rem" fontFamily="veralaRound" fontSize="1.25rem">
                REFERRAL DETAILS
              </Text>{" "}
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    REQUIREMENTS
                  </FormLabel>
                  <Textarea
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="18.75rem"
                    h="6.25rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>
              </FormControl>
            </Flex>
          </Flex>
          <Button
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            fontFamily="avenir"
            p="1rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            GET AN INSTANT CALL BACK
          </Button>
        </form>
      </Flex>
    </>
  );
};

const BookAVisit = () => {
  return (
    <>
      <Flex
        w="100%"
        h="79vh"
        bgColor="white"
        pos="relative"
        overflow="hidden"
        pb="3.125rem"
      >
        <Image
          w="45%"
          className="expandcar revealAgain"
          src={bookIll}
          pos="absolute"
          objectFit="cover"
          left="0"
          top="5%"
          bottom={{ base: "10rem", lg: "0" }}
        />
        <Flex
          overflow="hidden"
          pos="absolute"
          w={{ base: "100%", lg: "60%" }}
          h="100%"
          direction="column"
          align="center"
          top={{ base: "5%", lg: "20%" }}
          right="0"
          bottom="0"
          pr="6.25rem"
        >
          <Text
            className="serv-text-up reveal"
            textAlign="center"
            fontFamily="goudy"
            fontSize={{ base: "2rem", lg: "2.5rem" }}
            pb="1.875rem"
          >
            YOU ARE ONLY ONE RIDE <br/> AWAY FROM YOUR DREAM HOME
          </Text>
          <div className="fadein reveal">
            <HStack w="100%" align="center" justify="center" pb="3.125rem">
              <Image src={carIll} />
              <Heading
                textAlign="center"
                fontFamily="avenir"
                fontSize={{ base: "1rem", lg: "1.5rem" }}
                bgGradient="linear(to-l, #B88746, #DFBD69)"
                bgClip="text"
              >
                FREE PICK UP - DROP SERVICE AVAILABLE
              </Heading>
            </HStack>
            <Heading
              textAlign="center"
              fontFamily="goudy"
              fontSize="1.5rem"
              pb="0.938rem"
            >
              GET IN TOUCH WITH US
            </Heading>
            <Flex w="100%" align="center" justify="center" gap="3.125rem">
              <Flex w="100%" direction="column" align="center">
                <EmailIcon h="18px" w="28px" mb="0.625rem" />
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  sales@primelifespace.com
                </Heading>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                <PhoneIcon h="18px" w="28px" mb="0.625rem" />
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  +91-9003199000
                </Heading>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        pt="1.875rem"
        direction="column"
        pb="5rem"
        overflow="hidden"
        bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        px="6.25rem"
        
      >
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
          }}
          
        >
          <Text
            className="serv-text-up reveal"
            textAlign="center"
            fontFamily="goudy"
            fontSize="2.5rem"
            pb="1.875rem"
          >
            BOOK YOUR FREE SITE VISIT
          </Text>
          <Flex
            w="100%"
            h="100%"
            direction="row"
            gap="6.25rem"
            pb="1.563rem"
            className="fadein reveal"
          >
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FormControl isRequired pos="relative">
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    DATE
                  </FormLabel>
                  <Input
                    type="date"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    textTransform="uppercase"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                  <Image
                    bgColor="#C1C1C1"
                    src={calender}
                    right="0%"
                    zIndex="2"
                    p="0.625rem"
                    pos="absolute"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired pos="relative">
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                    type="time"
                  >
                    TIME
                  </FormLabel>
                  <select
                    style={{
                      position: "absolute",
                      right: "0px",
                      zIndex: "2",
                      height: "3.125rem",
                      padding: "0.625rem",
                      backgroundColor: "#C1C1C1",
                      fontWeight: "bold",
                    }}
                    fontFamily="veralaRound"
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                  <Input
                    type="time"
                    min="01:00"
                    max="12:00"
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PICKUP LOCATION
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                <HStack w="100%" align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NO. OF PERSONS
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>
              </FormControl>
            </Flex>
          </Flex>
          <Button
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            fontFamily="avenir"
            p="1rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            BOOK A SITE VISIT
          </Button>
        </form>
      </Flex>
    </>
  );
};
