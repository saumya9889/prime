import {
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Radio,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import styled from 'styled-components';
import DropDown from "./sky-high/DropDown";

const FooterMob = () => {
  return (
    <>
      {/*<DropDown />*/}
      <Flex
        pos="relative"
        direction="column"
        bgColor="black"
        color="white"
        justify="center"
        px="1rem"
      >
        <Flex direction="column" pt="10" pb="1.125rem" pos="relative">
          <Flex direction="column" w="100%">
            <Image w="12.5rem" src="/images/logo.png" />
            <Flex align="left" py="6">
              <Icon mt="1" w="8" h="6" color="#DFBD69" as={ImLocation} />
              <Text fontSize="1rem" fontFamily="veralaRound">
                Prime Expat Infra No. 33,Mandapam Road,<br />Kilpauk,Chennai -
                600010.
              </Text>
            </Flex>
            <VStack align="left">
              <Heading fontSize="1rem" fontFamily="avenir lt 65 medium" fontWeight="600">
                GET IN TOUCH :
              </Heading>

              <Flex align="center">
              <a  href="mailto:sales@primelifespace.com"  style={{ textDecoration: "none", color: "#fff" }}>
                <Icon as={MdEmail} w="8" h="6" color="#DFBD69" />
                <Link fontSize="1.03rem" fontFamily="veralaRound">
                  sales@primelifespace.com
                </Link>
                </a>
              </Flex>
              <Flex align="center">
                <a href="https://wa.me/9003199000"
                  style={{ textDecoration: "none", color: "#fff" }}
                  target="_blank" className="whatsapp-wrap">
                  <Icon as={BsWhatsapp} w="8" h="6" color="#DFBD69" />
                  <Link fontSize="1rem" fontFamily="veralaRound">
                    +91 9003199000
                  </Link>
                </a>
              </Flex>
              <Flex align="center">
               <a  href="tel:7338808775"  style={{ textDecoration: "none", color: "#fff" }}>
                <Icon as={BsFillTelephoneFill} w="8" h="6" color="#DFBD69" />
                <Link fontSize="1rem" fontFamily="veralaRound">
                  +91 7338808775
                </Link>
                </a>
              </Flex>
            </VStack>
          </Flex>
          <Flex w="100%">

            <VStack
              align="flex-start"
              fontFamily="veralaRound"
              mt="1rem"
            >
              <Heading fontSize="1rem" fontFamily="veralaRound" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
                Who we are
              </Heading>
              <Link href="/about-us" style={{ textDecoration: "none" }} fontSize="1rem">ABOUT US</Link>
              <Link href="/expertise" style={{ textDecoration: "none" }} fontSize="1rem">EXPERTISE</Link>
              <Link style={{ textDecoration: "none" }} fontSize="1rem">GREEN POWER</Link>
            </VStack>
            <Spacer />
            <VStack mt="1rem" align="flex-spaceBetween">
              <Heading fontSize="1rem" fontFamily="veralaRound" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
                Services
              </Heading>
              <Link href="/serviced-apartments" style={{ textDecoration: "none" }} fontFamily="veralaRound" fontWeight="400" fontSize="1rem">
                SERVICED HOUSING
              </Link>
              <Link style={{ textDecoration: "none" }} fontFamily="veralaRound" fontWeight="400" fontSize="1rem">
                PGC MEMBERSHIP
              </Link>
            </VStack>
          </Flex>
          <Flex w="100%"  >
            <VStack
              align="flex-start"
              fontFamily="veralaRound"
              mt="1rem"
            >
              <Heading fontSize="1rem" fontFamily="veralaRound" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
                Projects
              </Heading>
              <Link style={{ textDecoration: "none" }} href="/arete-homes" fontSize="1rem">ARETE HOMES</Link>
              <Link style={{ textDecoration: "none" }} href="/sky-high" fontSize="1rem">SKY HIGH TOWER</Link>
              <Link style={{ textDecoration: "none" }} href="/commercial-properties" fontSize="1rem">COMMERCIAL <br /> PROPERTIES</Link>
            </VStack>
            <Spacer />

            <VStack
              alignItems="flex-start"
              fontFamily="veralaRound"
              fontWeight="400"
              pt="1rem"
            >
              <Heading fontSize="1rem" fontFamily="veralaRound" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
                Invest
              </Heading>
              <Link href="/why-invest" style={{ textDecoration: "none" }} fontSize="1rem">WHY INVEST</Link>
              <Link href="/arete-homes-invest" onClick={() => window.localStorage.setItem('areteInvest', true)} style={{ textDecoration: "none" }} fontSize="1rem">8% ROI ON HOMES</Link>
              <Link href="/sky-high-invest" style={{ textDecoration: "none" }} fontSize="1rem">7% ROI ON HOMES</Link>
            </VStack>
          </Flex>
          <Flex w="100%">
            <VStack
              align="flex-start"
              fontFamily="veralaRound"
              fontWeight="400"
              pt="1rem"
              mr="6.5rem"
            >
              <Heading fontSize="1rem" fontFamily="veralaRound" borderBottom="1px solid #DFBD69" textColor={"#DFBD69"}>
                Helpful Links
              </Heading>
              <Link style={{ textDecoration: "none" }} href="/channel-partner" fontSize="1rem">CHANNEL<br />PARTNER LOGIN</Link>
              <Link style={{ textDecoration: "none" }} href="/contact-us" fontSize="1rem">CONTACT US</Link>
              <Link style={{ textDecoration: "none" }} href="/careers" fontSize="1rem">CAREERS</Link>
            </VStack>

            <VStack alignItems="flex-start"
              fontFamily="veralaRound"
              fontWeight="400"
              pt="1rem"
            >
              <Heading opacity="0" fontSize="1rem" fontFamily="veralaRound" textColor={"#DFBD69"}>
                Helpful Links
              </Heading>
              <Link style={{ textDecoration: "none", }} href="/news-and-media" fontSize="1rem">NEWS & MEDIA</Link>
              <Link style={{ textDecoration: "none" }} href="/refer-and-earn" onClick={() => window.localStorage.setItem('referEarnPage', true)} fontSize="1rem">REFER & EARN</Link>
              <Link style={{ textDecoration: "none" }} href="/blog" fontSize="1.19rem">BLOG</Link>
            </VStack>
          </Flex>
        </Flex>
        <Flex align="center" w="100%" border="none">
          <Divider borderBottom="2x solid gray">
          </Divider>
          <Spacer />
          <HStack className="social-wrap">
            <Link href="https://instagram.com/prime_lifespace?igshid=YmMyMTA2M2Y=" isExternal>
              <Icon w="14" h="14" px="1" as={AiFillInstagram} _hover={{ color: "#B88746" }} transition="linear 200ms" />
            </Link>
            <Link href="https://www.linkedin.com/company/prime-lifespace-consultancy-pvt-ltd/" isExternal>
              <Icon w="14" h="14" px="1" as={AiFillLinkedin} _hover={{ color: "#B88746" }} transition="linear 200ms" />
            </Link>
            <Link href="https://www.facebook.com/primelifespacearetehomes" isExternal>
              <Icon w="12" h="12" px="1" as={BsFacebook} _hover={{ color: "#B88746" }} transition="linear 200ms" />
            </Link>
            <Link href="https://youtube.com/@PrimeLifespace" isExternal>
              <Icon w="14" h="14" px="1" as={AiFillYoutube} _hover={{ color: "#B88746" }} transition="linear 200ms" />
            </Link>
          </HStack>
          <Divider borderBottom="2x solid gray">
          </Divider>
        </Flex>
        <Flex align="center">
          <Text mb="3.5rem" ml="5rem">2022. PRIMELIFESPACE PVT. LTD.</Text>
        </Flex>

      </Flex>

    </>
  );
};

export default FooterMob;
