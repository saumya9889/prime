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
import React, { useLayoutEffect } from "react";
import { TriangleDownIcon, PhoneIcon } from "@chakra-ui/icons";
// images
import img1 from "../../refer and earn imgs/1ST STEP.png";
import img2 from "../../refer and earn imgs/2ND STEP.png";
import img3 from "../../refer and earn imgs/3RD STEP.png";
import bookIll from "../../refer and earn imgs/book a visit illustration.png";
import carIll from "../../refer and earn imgs/CAR ICON.svg";
import calender from "../../refer and earn imgs/calender.svg";
import { useState } from "react";
import "./animations.css";
import "./rne.css";
import { revealOnce } from "../../../hooks/util";

const ReferTabs = () => {
  const [active, setActive] = useState(true);
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try{
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
  }catch(e)
  {
  }
  }
  useLayoutEffect(()=>{
    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll", revealOnce);
    return()=>{
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", revealOnce);
    }
  });
  return (
    <Flex w="100%" h="100%" direction="column" align="center" pos="relative" boxShadow="0 0 10px rgba(0, 0, 0, 0.5) inset" filter="drop-shadow(5px 5px 5px rgba(0,0,0,0.3)) inset" >
      <Flex w="100%" px="1rem" pos="absolute" zIndex="20">
        <Flex w="100%" background="white" mt="-1.875rem"  className="refer-btn-wrap">
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
      </Flex>
      {active ? <ReferAFriend /> : <BookAVisit />}
    </Flex>
  );
};
export default ReferTabs;
const ReferAFriend = () => {
  return (
    <>
      <Flex overflow="hidden" px="1rem" mt="2.5rem">
        <Heading
          w="100%"
          className="slidein-top revealOnce"
          textAlign="center"
          fontWeight="400"
          fontSize="2.125rem"
          fontFamily="goudy"
          pt="1.875rem"
          pb="1.875rem"
        >
          HOW IT WORKS?
        </Heading>
      </Flex>
      <Flex w="100%" px="1rem" direction={{base:"column",lg:"row"}} pb="3.125rem">
        <Flex
          w="100%"
          h="100%"
          direction="row"
          overflow="hidden"
        >
          <Flex className="fadein revealOnce" direction="column">
          <Heading fontFamily="avenir" fontSize="1rem">
            STEP 1
          </Heading>{" "}
          <Flex
            w="100%"
            align="center"
            pb="0.313rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="60%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.25rem"
              width="1.25rem"
              mr="0.15rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Text pb="1.875rem" width="70%" fontFamily="veralaRound" fontSize="1rem">
            Fill up the form on website & submit the details of as many friends
            & family members you would like to refer.
          </Text>
          </Flex>
          <Image className="fadein reveal" w="40%" h="10rem" src={img1} />
        </Flex>
        <Flex w="100%" direction="row" overflow="hidden">
        <Image w="40%" h="10rem" src={img2} className="fadein reveal"/>
        <Flex className="fadein revealOnce" direction="column">
          <Heading fontFamily="avenir" fontSize="1rem" textAlign="right">
            STEP 2
          </Heading>
          <Flex
            w="100%"
            align="right"
            pb="0.313rem"
            ml="3.6rem"
            className="slideleftdisco reveal"
          >
            <Box
              height="1.25rem"
              width="1.25rem"
              mr="0.3rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
             mt="0.7rem"
              w="60%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
          </Flex>{" "}
          <Text pb="1.875rem" width="70%" ml="3.6rem" fontFamily="veralaRound" fontSize="1rem" textAlign="right">
            Your provided referral will be contacted by our team and complete
            assistance will be provided in the booking process.
          </Text>
          </Flex>
        </Flex>
        <Flex w="100%" direction="row" overflow="hidden">
        <Flex className="fadein revealOnce" direction="column">
          <Heading fontFamily="avenir" fontSize="1rem">
            STEP 3
          </Heading>
          <Flex
            w="100%"
            align="center"
            pb="0.313rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="60%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.25rem"
              width="1.25rem"
              mr="0.16rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>{" "}
          <Text pr="0.2rem" width="70%" fontFamily="veralaRound" fontSize="1rem">
            Every time your referral becomes a successful booking, you’ll earn
            rewards upto Rs 1 Lakh.
          </Text>
          </Flex>
          <Image w="40%" h="10rem" src={img3} className="fadein reveal"/>
        </Flex>
      </Flex>
      <Flex bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'>
      <Flex
        px="1rem"
        w="100%"
        h="100%"
        pt="1.875rem"
        direction="column"
        pb="5rem"
        overflow="hidden"
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
            className="slidein-top revealOnce"
            textAlign="center"
            fontFamily="goudy"
            fontSize="2.125rem"
          >
            REFER & EARN
          </Text>
          <Flex w="100%" h="100%" direction="column" gap="1.875rem" pb="1.563rem" className="fadein-2sdelay revealOnce">
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <Text pt="1.563rem" pb="0.938rem" fontFamily="veralaRound" fontSize="1.25rem">
                YOUR DETAILS
              </Text>{" "}
              <FormControl isRequired>
                <HStack
                  w="100%"
                  h="100%"
                  justify="space-between"
                  align="center"
                >
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
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
                    >
                      <Radio
                        borderRadius="none"
                        value="yes"
                        size="md"
                        mr="3.125rem"
                      >
                        YES
                      </Radio>
                      <Radio borderRadius="none" value="no" size="md">
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
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
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
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    h="2.5rem"
                    w="11.75rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    PROJECT REFERRED
                  </FormLabel>
                  <Select
                    textAlign="center"
                    style={{paddingTop:"0.3rem"}}
                    fontFamily="veralaRound"
                    fontSize="0.875rem"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#D9D9D9"
                    // placeholder="SELECT PROJECT"
                    textTransform="uppercase"
                    variant="flushed"
                    borderBottom="2px solid white"
                    icon={
                      <TriangleDownIcon width="1.25rem" height="0.625rem" />
                    }
                    borderRadius="none"
                  >
                    <option style={{ color: "black", width:"5rem"}} >
                      <Text pt="0.2rem">Select Project</Text>
                    </option>
                    <option style={{ color: "black", width:"5rem" }}>
                      <Text>Arete Homes</Text>
                    </option>
                    <option style={{ color: "black", width:"5rem" }}>
                      <Text>Sky High Tower</Text>
                    </option>
                    <option style={{ color: "black", width:"5rem" }}>
                      <Text>Ponneri Gymkhana Club</Text>
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
              <Text pb="0.938rem" fontFamily="veralaRound" fontSize="1.25rem">
                REFERRAL DETAILS
              </Text>{" "}
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
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
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="0.875rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    REQUIREMENTS
                  </FormLabel>
                  <Textarea
                    fontSize="0.875rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="3.5rem"
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
      </Flex>
    </>
  );
};

const BookAVisit = () => {
  return (
    <>
    
      <Flex
        zIndex="1"
        w="100%"
        h="100%"
        bgColor="white"
        pos="relative"
        overflow="hidden"
        pb="3.125rem"
      >
        
        <Flex
          overflow="hidden"
          w={{base:"100%",lg:"60%"}}
          h="100%"
          direction="column"
          align="center"
          px="1rem"
          mt="4rem"
        >
          <Text
            pt="1.875rem"
            className="serv-text-up revealOnce"
            transition="all 1s"
            textAlign="center"
            fontFamily="goudy"
            fontSize="1.5rem"
          >
            YOU ARE ONLY ONE RIDE AWAY FROM YOUR DREAM HOME
          </Text>
          <Image
          className="expandcar reveal"
          src={bookIll}
          objectFit="cover"
          
        />
          <div className="fadein revealOnce">
          <HStack w="100%" alignSelf="left" justify="center" pb="3.125rem">
            <Image alignSelf="center" src={carIll} ml="1.2rem" />
            <Heading
              textAlign="center"
              fontFamily="avenir"
              fontSize={{base:"1rem"}}
              bgGradient="linear(to-l, #B88746, #DFBD69)"
              bgClip="text"
              pr="1.2rem"
              fontWeight="700"
            >
              FREE PICK UP - DROP SERVICE AVAILABLE
            </Heading>
            </HStack>
            <Text
              textAlign="center"
              fontFamily="goudy"
              fontSize="1.5rem"
              pb="0.938rem"
            >
              GET IN TOUCH WITH US
            </Text>
            <Flex w="100%" direction="column" align="center" justify="center" gap="1.875rem">
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
        pb="3.125rem"
        overflow="hidden"
        bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")' 
      >
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft:"1rem",
            paddingRight:"1rem"
          }}
        >
          <Text
            className="slidein-top revealOnce"
            textAlign="center"
            fontFamily="goudy"
            fontSize="2.125rem"
            pb="1.875rem"
          >
            BOOK YOUR<br/>FREE SITE VISIT
          </Text>
          <Flex w="100%" h="100%" direction="column" pb="1.563rem" className="fadein-2sdelay revealOnce">
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
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
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
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                   fontSize="1rem"
                   fontFamily="veralaRound"
                   w="11.75rem"
                   h="2.5rem"
                   bgColor="#E5E5E5"
                   borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                   fontSize="1rem"
                   fontFamily="veralaRound"
                   w="11.75rem"
                   h="2.5rem"
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
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    DATE
                  </FormLabel>
                  <Image
                    h="2.5rem"
                    bgColor="#C1C1C1"
                    src={calender}
                    right="0%"
                    zIndex="2"
                    p="0.625rem"
                    pos="absolute"
                  />
                  <Input
                    type="date"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                    textTransform="uppercase"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    TIME
                  </FormLabel>
                  <select
                    style={{
                      position: "absolute",
                      right: "0px",
                      zIndex: "2",
                      height:"2.5rem",
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
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    PICKUP LOCATION
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                <HStack w="100%" align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    NO. OF PERSONS
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
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