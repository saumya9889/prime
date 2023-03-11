import {
  Flex,
  Image,
  Text,
  Box,
  Divider,
  Heading,
  Button,
  VStack,
  UnorderedList,
  ListItem,
  IconButton,
  FormControl,
  HStack,
  FormLabel,
  Input,
  Checkbox,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import smartInvest from "../Invest imgs/INTRO1.jpg";
import floorPlan from "../Invest imgs/FLOOR PLAN-sky high.jpg";
import locationImg from "../Invest imgs/connectivity-removebg-preview.png";
import foreignInvest from "../Invest imgs/invest-removebg-preview.png";
import socialFabric from "../Invest imgs/social1-removebg-preview.png";
import roiImg from "../Invest imgs/roi.jpg";
// icons
import floorplana6 from "../Invest imgs/arete homes TOWER A6-2.png"
import rentalYield from "../Invest imgs/renta;l yield.svg";
import rentalIncome from "../Invest imgs/rental income.svg";
import rentalyears from "../Invest imgs/rental income years.svg";
import interestRate from "../Invest imgs/interest rate.svg";
import pmay from "../Invest imgs/pmay.svg";
import tax from "../Invest imgs/tax saving.svg";
import institute from "../Invest imgs/institutes.svg";
import company from "../Invest imgs/companies.svg";
import industry from "../Invest imgs/industrial park.svg";
import port from "../Invest imgs/port.svg";
import locationadv from "../commercial-properties imgs/Asset 1-100.jpg";
import DropDown from "./DropDown";

import areteInto1 from "../Invest imgs/arete homes - intro1.jpeg";
import twoBhkFloor from "../Invest imgs/arete homes Tower A6-1.jpg";
import snarttwobhk from "../Invest imgs/INTRO1.jpg";
import ModalWindwow from "../modalWindow";
import ModalImage from "../modalImage";
import { useInView } from "framer-motion";
import adani from "./tenLogo/ADANI.png";
import bhel from "./tenLogo/BHEL.jpg";
import godrej from "./tenLogo/godrej.png";
import hero from "./tenLogo/HERO.jpg";
import keller from "./tenLogo/Keller.png";
import kelloggs from "./tenLogo/Kelloggs.png";
import kobelco from "./tenLogo/KOBELCO.png";
import linde from "./tenLogo/LINDE.png";
import lnt from "./tenLogo/LnT.png";
import siemens from "./tenLogo/SIEMENS.png";
import velammal from "./tenLogo/VELAMMAL.png";
import yanmar from "./tenLogo/YANMAR.png";

const tenantsGrid = [
    {img:siemens,title:"SIEMENS"},
    {img:keller,title:"KELLER"}
    ,{img:kobelco,title:"KOBELCO"}
    ,{img:adani,title:"adani"}
    ,{img:yanmar,title:"Yanmar"}
    ,{img:hero,title:"Hero"}
    ,{img:lnt,title:"L & T"}
    ,{img:bhel,title:"bhel"}
    ,{img:velammal,title:"The Velammal"}
    ,{img:linde,title:"Linde"}
    ,{img:godrej,title:"godrej"}
    ,{img:kelloggs,title:"Kelloggs"}];

const SkyhighInvest = () => {
  const [active, setActive] = useState(window.localStorage.getItem('areteInvest')?JSON.parse(window.localStorage.getItem('areteInvest')):false);
  useEffect(() => {
    window.localStorage.setItem('areteInvest', JSON.stringify(active));
  }, [active]);
  useEffect(() => {
    const data = window.localStorage.getItem('areteInvest');
    if ( data !== null ) setActive(JSON.parse(data));
  }, []);
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
   
  }
  const open =() =>{
    setIsOpen(true);
  }
  return (
    <>
        {isOpen?<ModalWindwow modalTitle={"ARATE HOMES"} modalImage={areteInto1} isOpen={isOpen} onClose={()=>close()} />:<></>}

      {" "}
      <Flex w="100%" h="100%" direction="column" align="center">
        <Flex w="100%">
          <Button
             ml="6.25rem"
            w="100%"
            bgColor="white"
            bgGradient={active ? "linear(to-b, #B88746 ,#DFBD69)" : "white"}
            border="1px solid #B88746"
            color={active ? "white" : "black"}
            mr="0.625rem"
            p="1.563rem"
            borderRadius="none"
            fontSize="1.25rem"
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
            2 BHK - 1025 SQFT.
          </Button>
          <Button
             mr="6.25rem"
            ml="0.625rem"
            w="100%"
            bgColor="white"
            color={active ? "black" : "white"}
            p="1.563rem"
            border="1px solid #B88746"
            bgGradient={active ? "none" : "linear(to-b, #B88746 ,#DFBD69)"}
            borderRadius="none"
            fontSize="1.25rem"
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
            3 BHK - 1787 SQFT.
          </Button>
        </Flex>
        {active===true ? <Twobhk /> : <Threebhk />}
      </Flex>
      <Text fontSize="0.625rem" pb="1.25rem" textTransform="uppercase">
        Terms & Conditions* : Assured Rent for 3 years from possession • Tax
        saving subject to yearly income • Appreciation - 5% is considered
        (considering Ination) • PMAY subject to eligibility
      </Text>
      <DropDown />
    </>
  );
};

const Twobhk = () => {

  const easyPayRef = useRef(null);
  const easyPayInView = useInView(easyPayRef, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const fModelRef = useRef(null);
  const fModelInView = useInView(fModelRef, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const [slider, setSlider] = useState(null);
  
  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    // className: "center",
    centerMode: false,
    infinite: true,
    autoplay: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }
  const [isImageOpen, setIsImageOpen]= useState(false);
  const closeImage =() =>{
    setIsImageOpen(false);
  }
  const openImage =() =>{
    setIsImageOpen(true);
  }
  return (
    <>
      {isOpen?<ModalWindwow modalTitle={"ARETE HOMES"} modalImage={areteInto1} isOpen={isOpen} onClose={()=>close()} />:<></>}
      {/* Smart invest */}
      <Flex
         px="6.25rem"
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        pt="2.5rem"
        pb="5rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          SMART INVESTMENT
        </Text>
        <Flex w="100%" h="100%">
          <Flex w="100%" h="100%">
            <Image onClick={()=>open()} src={areteInto1} className="expandcar reveal" filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
          </Flex>
          <Flex w="100%" h="100%" overflow="hidden">
            {" "}
            <Flex
              className="discobal-slidein-top reveal"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.563rem"
            >
              <Divider
                h="5.5rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              overflow="x-hidden"
              w="100%"
              h="27rem"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading fontSize="1.5rem" pb="0.938rem">
                    ARETE HOMES
                  </Heading>
                  <Heading fontSize="1.25rem" pb="0.938rem">
                    2 BHK - 1025 SQFT.
                  </Heading>
                  <Heading
                    fontSize="2.125rem"
                    pb="0.625rem"
                    bgGradient="linear(to-b, #B88746, #DFBD69)"
                    bgClip="text"
                  >
                    ₹52 LAKHS
                  </Heading>
                  <Text fontFamily="veralaRound" fontSize="1rem" pb="1.563rem">
                    Fully Furnished With White Goods
                  </Text>
              <Flex w="100%" gap="2.938rem" pb="1rem" className="fadein revealOnce">
                <Flex w="100%" direction="column" align="center">
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalYield}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    8 %
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Rental Yield
                  </Text>
                </Flex>
                <Flex w="100%" direction="column" align="center">
                  {" "}
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalIncome}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    ₹ 32,000
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Rental Income per month
                  </Text>
                </Flex>
                <Flex w="100%" direction="column" align="center">
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalyears}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    3 YEARS
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Assured Rental Income
                  </Text>
                </Flex>
              </Flex>
              <Heading
                pb="1rem"
                className="fadein-2sdelay revealOnce"
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.5rem"
              >
                ASSURED RENT `{">"}` EMI
              </Heading>
              <Button
                className="fadein revealOnce"
                alignSelf="center"
                w="fit-content"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                mr="0.625rem"
                p="1rem"
                fontSize="1rem"
                fontFamily="avenir"
                fontWeight="bold"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
                onClick={open}
              >
                I AM INTERESTED
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* easy payment plan sec */}
      <Flex ref={easyPayRef}  px="6.25rem" w="100%" h="100%" direction="column" align="center" pb="5rem" overflow="hidden">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          EASY PAYMENT PLAN
        </Text>
        <Flex w="100%" h="100%" gap="1.25rem">
          <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            fontFamily="avenir"
            p="1.875rem"
            _hover={{boxShadow:"2xl"}}
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
          >
            <Heading align="center" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
              PRINCIPAL INSTALLMENT
            </Heading>
            <Flex w="100%" gap="0.625rem" align="flex-end">
              <Text w="60%" fontSize="1rem" fontFamily="veralaRound"  opacity={easyPayInView?1:0} transitionDelay={"1.50s"}>
                Principal
                <br /> Amount
              </Text>
              <Text w="100%" fontSize="1rem" fontFamily="veralaRound" opacity={easyPayInView?1:0} transitionDelay={"2s"}>
                Home Loan Amount
              </Text>
            </Flex>
            <Flex w="100%" h="0.938rem" my="1rem">
              <Flex bgColor="#B88746" w="50%" opacity={easyPayInView?1:0} transitionDelay={"1.50s"}/>
              <Divider
                opacity={easyPayInView?1:0} transitionDelay={"2s"}
                mt="-0.4rem"
                h="1.563rem"
                orientation="vertical"
                border="1px solid"
                borderColor="#B88746"
                bgColor="#B88746"
              />
              <Flex w="100%" h="100%" opacity={easyPayInView?1:0} transitionDelay={"2s"}>
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
              </Flex>
            </Flex>
            <Flex w="100%" gap="0.625rem" pb="1.875rem">
              <Heading  opacity={easyPayInView?1:0} transitionDelay={"1.50s"} w="60%" fontSize="1rem" fontFamily="veralaRound">
                ₹ 10 LAKHS
              </Heading>
              <Heading  className="fadein-2sdelay revealOnce" w="100%" fontSize="1rem" fontFamily="veralaRound">
                ₹ 42 LAKHS
              </Heading>
            </Flex>
            <Divider
              opacity={easyPayInView?1:0} transitionDelay={"3s"}
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />
            <Flex w="100%" justify="space-between" pb="1rem" opacity={easyPayInView?1:0} transitionDelay={"3s"}>
              <Text fontSize="1rem" fontFamily="veralaRound">
                Total Investment
              </Text>
              <Heading fontSize="1.5rem">₹ 52,00,000</Heading>
            </Flex>
            <Flex w="100%" justify="space-between" pb="1.25rem" opacity={easyPayInView?1:0} transitionDelay={"3s"}>
              <Text fontSize="1rem" fontFamily="veralaRound">
                Assured Rent Per Month
              </Text>
              <Heading fontSize="1.5rem">₹ 32,000</Heading>
            </Flex>{" "}
            <Heading
              opacity={easyPayInView?1:0} transitionDelay={"3s"}
              w="100%"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.125rem"
            >
              ASSURED RENT `{">"}` EMI
            </Heading>
          </Flex>
          <Flex
            w="100%"
            h="24.375rem"
            direction="column"
            p="1.875rem"
            align="center"
            fontFamily="avenir"
            _hover={{boxShadow:"2xl"}}
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
          >
            <Heading fontSize="1.5rem" pb="1.875rem" className="fadein revealOnce">
              HOME LOAN
            </Heading>
            <Flex w="100%" gap="2.938rem" pb="1.875rem" className="fadein revealOnce">
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalIncome}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  ₹ 42 LAKHS
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  Loan Amount
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                {" "}
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalyears}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  25 YEARS
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  Tenure
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={interestRate}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  6.7% p.a.
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  Interest Rate
                </Text>
              </Flex>
            </Flex>
            <Divider
              opacity={easyPayInView?1:0} transitionDelay={"3s"}
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />{" "}
            <Flex w="100%" justify="space-between" pb="1.25rem" opacity={easyPayInView?1:0} transitionDelay={"3s"}>
              <Text fontSize="1rem" fontFamily="veralaRound">
                EMI Per Month
              </Text>
              <Heading fontSize="1.5rem">₹ 27,510</Heading>
            </Flex>
            <Button
              opacity={easyPayInView?1:0} transitionDelay={"3s"}
              alignSelf="center"
              w="fit-content"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              mr="0.625rem"
              p="1rem"
              fontSize="1rem"
              fontFamily="avenir"
              fontWeight="bold"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              GET HOME LOAN
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* FINANCIAL MODEL sec */}
      <Flex
        ref={fModelRef}
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        pb="3.125rem"
        px="6.25rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          FINANCIAL MODEL
        </Text>
        <Flex w="100%" h="100%" overflow="hidden">
          <Flex
          overflow="hidden"
            w="38%"
            h="100%"
            direction="column"
            fontFamily="avenir"
            align="center"
          >
            <Heading textAlign="center" pb="3.125rem" fontSize="1.5rem" className="fadein revealOnce">
              INCOME ON THE INVESTMENT
            </Heading>
            <Flex w="100%" align="center" justify="flex-start" className="fadein revealOnce">
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalIncome}
                mr="0.625rem"
              />
              <Heading color="#D4AD4B" fontSize="1.25rem">
              RENTAL INCOME ₹4 LAKHS
              </Heading>
            </Flex>
            <Text color="#B88746"  w="5rem" fontSize="1.563rem" opacity={fModelInView?1:0}>
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start" opacity={fModelInView?1:0} transitionDelay={"2s"}>
              {" "}
              <Image w="3.125rem" h="3.125rem" src={tax} mr="0.625rem" />
              <Heading color="#B78C23" fontSize="1.25rem">
              TAX SAVINGS UPTO ₹2 LAKH
              </Heading>
            </Flex>
            <Text color="#B88746" w="5rem" fontSize="1.563rem" opacity={fModelInView?1:0} transitionDelay={"2s"}>
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start" opacity={fModelInView?1:0} transitionDelay={"4s"}>
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalYield}
                mr="0.625rem"
              />
              <Heading color="#B88746" fontSize="1.25rem">
                APPRECIATION EXPECTED 5% PER YEAR
              </Heading>
            </Flex>
            <Text  w="5rem" color="#B88746" fontSize="1.563rem" opacity={fModelInView?1:0} transitionDelay={"4s"}>
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start" opacity={fModelInView?1:0} transitionDelay={"6s"}>
              {" "}
              <Image w="3.125rem" h="3.125rem" src={pmay} mr="0.625rem" />
              <Heading color="#8D6229" fontSize="1.25rem">
              PMAY BENIFIT ₹2.67 LAKHS
              </Heading>
            </Flex>
          </Flex>
          <Flex
            className="discoballmultistep reveal"
            w="10%"
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="1.563rem"
          >
            <Divider
              h="29.25rem"
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Flex
            w="52%"
            h="100%"
            align="center"
            justify="flex-end"
            fontFamily="avenir"
            direction="column"
          >
            <Heading
              opacity={fModelInView?1:0}
              w="100%"
              textAlign="center"
              fontSize="1.5rem"
              pb="1.563rem"
            >
              INCOME GROWTH JOURNEY
            </Heading>
            <Flex w="100%" h="100%" gap="0.938rem" pb="0.625rem">
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹11 L
                </Heading>
                <Flex h="6.875rem" bgColor="#8D6229" opacity={fModelInView?1:0} transitionDelay={"6s"}/>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="6.25rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹8 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="6.25rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                  ₹8 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="6.25rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹8 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="6.25rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹8.5 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="7.5rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹8.5 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="7.5rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
            </Flex>
            <Divider border="1px solid" borderColor="#B88746" opacity={fModelInView?1:0}/>
            <Flex
              opacity={fModelInView?1:0}
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              align="center"
              justify="space-between"
              px="0.938rem"
            >
              <Text>YEAR 1</Text>
              <Text>YEAR 2</Text>
              <Text>YEAR 3</Text>
              <Text>YEAR 4</Text>
              <Text>YEAR 5</Text>
              <Text>YEAR 6</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex h="100%" align="center"my="1rem" p="1rem" boxShadow="2xl" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover" opacity={fModelInView?1:0} transitionDelay={"6.5s"}>
          <Heading
            letterSpacing="2px"
            w="100%"
            fontFamily="avenir"
            textAlign="center"
            fontSize="1.5rem"
            bgGradient="linear(to-b, #B88746,#DFBD69)"
            bgClip="text"
          >
            TOTAL INCOME IN 6 YEARS{" "}
            <Text as={"span"} fontSize="1rem">
              APPROX.
            </Text>{" "}
            ₹52.5 LAKHS
          </Heading>
        </Flex>
      </Flex>
      {/* location */}
      {isImageOpen?<ModalImage modalImage={locationadv} isOpen={isImageOpen} onClose={()=>closeImage()} />:<></>}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        pt="1.875rem"
        pb="3.125rem"
        px={{ base: "0.938rem", lg: "6.25rem" }}
      >
        <Text
          px={{ base: "10rem", lg: "0" }}
          textAlign="center"
          fontFamily="goudy"
          pb="1.563rem"
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          className="slidein-top revealOnce"
        >
          LOCATION ADVANTAGE
        </Text>
        <Heading align="center" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
        Arete Homes Is The Largest Smart Township Of Premium Housing & Modern Lifestyle Within 30KM Radius Catering To 12 LAKH+ Individuals, Students, Immigrants.
        </Heading>
        <Flex
          w="100%"
          h="100%"
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
          pb="3.125rem"
        >
          <Flex
            display={{ base: "grid", lg: "flex" }}
            w={{ base: "100%", lg: "40%" }}
            h="100%"
            wrap="wrap"
            alignSelf={{ base: "none", lg: "center" }}
            justify={{ base: "flex-start", lg: "flex-start" }}
            gap={{ base: "1.125rem", lg: "0" }}
          >
            <SimpleGrid columns={{ base: "2", lg: "1" }}>
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Box
                  w={"5rem"}
                  h={"5rem"}
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    w={"5rem"}
                    h={"5rem"}
                    src={institute}
                  />
                </Box>
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    100+
                  </Heading>
                  <Text
                    display={{ base: "none", lg: "flex" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    EDUCATIONAL <br /> INSTITUTES
                  </Text>
                  <Text
                    display={{ base: "flex", lg: "none" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    EDUCATIONAL <br /> INSTITUTES
                  </Text>
                </VStack>
              </Flex>
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Image
                  w={{ base: "3.125rem", lg: "5rem" }}
                  h={{ base: "3.125rem", lg: "5rem" }}
                  src={company}
                  mr="1rem"
                />
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    2000+
                  </Heading>
                  <Text
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    COMPANIES NEARBY
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Box
                  direction="column"
                  w={"5rem"}
                  h={"5rem"}
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    w={"5rem"}
                    h={"5rem"}
                    src={industry}
                  />
                </Box>
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    2
                  </Heading>
                  <Text
                    display={{ base: "none", lg: "flex" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    LARGE INDUSTRIAL PARKS
                  </Text>
                  <Text
                    display={{ base: "flex", lg: "none" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    LARGE <br />
                    INDUSTRIAL <br />
                    PARKS
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Image
                  w={{ base: "3.125rem", lg: "5rem" }}
                  h={{ base: "3.125rem", lg: "5rem" }}
                  src={port}
                  mr="1rem"
                />
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    3
                  </Heading>
                  <Text
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    MAJOR PORTS, SEZ
                  </Text>
                </VStack>
              </Flex>{" "}
            </SimpleGrid>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            overflow="hidden"
            // w="10%"
            h="100%"
            px="1.875rem"
          >
            <Flex
              className="discobal-slidein-top reveal"
              direction="column"
              justify="center"
              align="center"
              w="100%"
              h="100%"
            >
              <Divider
                h="2rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Image
              onClick={()=>{openImage()}}
              _hover={{ cursor: "pointer" }}
              className="Arete-Plaza-LocationAdv-Image reveal"
              boxShadow="2xl"
              w="100%"
              h={{ base: "20.625rem", lg: "29.25rem" }}
              objectFit="cover"
              objectPosition="center"
              src={locationadv}
            />
          </Flex>
        </Flex>
        <Flex w="100%" direction={{ base: "column", lg: "row" }}>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="0"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left1 revealOnce"
            >
              <Divider
                h={{ base: "1.6rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="0"
              w="100%"
              className="fadein revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                5 MINS
              </Heading>{" "}
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Velammal International School</ListItem>
                <ListItem pb="0.625rem">Origin By Mahindra</ListItem>
                <ListItem>Ponneri Railway Station</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="1"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left2 revealOnce"
            >
              <Divider
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "5.3rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="1"
              w="100%"
              className="fadein-2sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                10 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Connect To Outer Ring Road</ListItem>
                <ListItem pb="0.625rem">Siruvapuri Murugan Temple</ListItem>
                <ListItem pb="0.625rem">VELS Medical Hospital</ListItem>
                <ListItem>R.K.M. Engineering College</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="2"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left3 revealOnce"
            >
              <Divider
                h={{ base: "1.8rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "3.7rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="2"
              w="100%"
              className="fadein-4sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                20 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Gummidipoondi SIPCOT</ListItem>
                <ListItem pb="0.625rem">Amazon</ListItem>
                <ListItem pb="0.625rem">Minjur</ListItem>
                <ListItem>Pulicat Lake</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="3"
              className="discoball-slidein-left4 revealOnce"
              direction={{ base: "column", lg: "row" }}
            >
              <Divider
                h={{ base: "0.55rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                display={{ base: "none", lg: "flex" }}
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="3"
              w="100%"
              className="fadein-6sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                30 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Sri City</ListItem>
                <ListItem pb="0.625rem">Kattupalli Adani Port</ListItem>
                <ListItem>Chennai Port</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* TENANTS */}
      <Flex
        overflow="hidden"
        w="100%"
        pt="1.875rem"
        pb="1.875rem"
        direction="column"
        align="center"
        bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
      >
        <Text fontFamily="goudy" pb="1.875rem" fontSize="2.5rem" className="slidein-top revealOnce">
          TENANTS
        </Text>
        <Flex w="100%" justify="center" overflow="hidden">
            <TestimonialCarousel />
          <Flex
            pt
            className="slidein-top revealOnce"
            w="5rem"
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="1.562rem"
          >
            <Divider
              h="7rem"
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Flex w="30%" direction="column" justify="center" overflow="hidden">
            <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem" className="fadein revealOnce">
              Arete Serviced Apartments company providing safe, hygienic and
              premium co-living spaces to students, working professionals and
              organizations.
            </Text>
            <SimpleGrid className="fadein revealOnce" columns={3}>
              <GridItem borderLeft="1px solid #B88746" borderTop="1px solid #B88746">
                <Image p={"0.9rem"} mt="0.5rem" h="3.125rem" w="10rem" src={tenantsGrid[0].img} alt={tenantsGrid[0].title}/>
              </GridItem>
              <GridItem borderLeft="1px solid #B88746" borderTop="1px solid #B88746">
                <Image p={"0.9rem"} h="4rem" w="10rem" src={tenantsGrid[1].img} alt={tenantsGrid[1].title}/>
              </GridItem>
              <GridItem borderLeft="1px solid #B88746" borderTop="1px solid #B88746" borderRight="1px solid #B88746">
                <Image mt="0.5rem" p={"0.9rem"} h="3.125rem" w="10rem" src={tenantsGrid[2].img} alt={tenantsGrid[2].title}/>
              </GridItem>
              <GridItem>
                <Image borderLeft="1px solid #B88746" borderTop="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[3].img} alt={tenantsGrid[3].title}/>
              </GridItem>
              <GridItem>
                <Image borderLeft="1px solid #B88746" borderTop="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[4].img} alt={tenantsGrid[4].title}/>
              </GridItem>
              <GridItem>
                <Image borderLeft="1px solid #B88746" borderTop="1px solid #B88746" borderRight="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[5].img} alt={tenantsGrid[5].title}/>
              </GridItem>
              <GridItem  borderLeft="1px solid #B88746" borderTop="1px solid #B88746">
                <Image p={"0.9rem"} ml="1.3rem" h="5rem" w="5.5rem" src={tenantsGrid[6].img} alt={tenantsGrid[6].title}/>
              </GridItem>
              <GridItem borderLeft="1px solid #B88746" borderTop="1px solid #B88746">
                <Image p={"0.9rem"} ml="1.3rem" h="5rem" w="6rem" src={tenantsGrid[7].img} alt={tenantsGrid[7].title}/>
              </GridItem>
              <GridItem>
                <Image borderLeft="1px solid #B88746" borderTop="1px solid #B88746" borderRight="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[8].img} alt={tenantsGrid[8].title}/>
              </GridItem>
              <GridItem>
                <Image borderBottom="1px solid #B88746" borderLeft="1px solid #B88746" borderTop="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[9].img} alt={tenantsGrid[9].title}/>
              </GridItem>
              <GridItem>
                <Image borderBottom="1px solid #B88746" borderLeft="1px solid #B88746" borderTop="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[10].img} alt={tenantsGrid[10].title}/>
              </GridItem>
              <GridItem>
                <Image borderBottom="1px solid #B88746" borderLeft="1px solid #B88746" borderTop="1px solid #B88746" borderRight="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[11].img} alt={tenantsGrid[11].title}/>
              </GridItem>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      {/* Floor plan */}
      <Flex  px="6.25rem" w="100%" h="100%" align="center" pt="3.125rem" pb="3.125rem" direction="column" overflow="hidden">
        <Text
          className="slidein-top revealOnce"
          w="100%"
          align="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          textTransform="uppercase"
          pb="1.875rem"
          
        >
          FLOOR PLAN
        </Text>
        <Flex w="100%" h="100%" gap="1.563rem">
    <Flex w="58%">
      <Box
      className="expandcar revealOnce"
      position={"relative"}
      width={"full"}
      height="100%"
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings2} ref={(slider) => setSlider(slider)}>
          <Flex
            w="100%"
            height={"100%"}
          >
            <Image w="100%" h="100%" src={twoBhkFloor} />
          </Flex>
          <Flex
            w="100%"
            height={"100%"}
          >
            <Image w="100%" h="100%" src={floorplana6} />
          </Flex>
      </Slider>
      <IconButton
              className="fadein revealOnce"
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              borderRadius="full"
              bottom="0"
              right="50%"
              // transform={"translateX(-50%)"}
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>01</Text>
            </IconButton>

            {/* Right Icon */}
            <IconButton
              className="fadein revealOnce"
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              bottom="0"
              left="50%"
              // transform={"translate(-50%)"}
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>02</Text>
            </IconButton>
      </Box>
    </Flex>
    
          <Flex w="42%" h="100%" alignSelf="center" direction="column" className="fadein revealOnce">
            {" "}
            <Heading
              fontSize="1.5rem"
              textTransform="uppercase"
              fontFamily="avenir"
              pb="0.938rem"
            >
              SMART HOMES THAT ARE VASTU COMPLIANT
            </Heading>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              border="1px solid #B88746"
            >
              <Text
                w="100%"
                textAlign="center"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
                fontFamily="veralaRound"
                fontSize="1.25rem"
                p="0.938rem"
                color="white"
                borderBottom="1px solid #B88746"
              >
                TOWER DETAILS
              </Text>
              <Flex
                w="100%"
                pt="0.938rem"
                pb="1.875rem"
                px="1.875rem"
                direction="column"
                gap="1.875rem"
              >
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    TYPE OF UNITS
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    2 BHK(C), 2 BHK(L), 3 BHK
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    SALEABLE AREA
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    1008-1748 SQFT.
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    FLOORS
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    10
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    NO. OF FLATS ON EACH FLOOR
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    8
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* why invest */}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        px="6.25rem"
        py="3.125rem"
        align="center"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          WHY INVEST?
        </Text>
        <Flex w="100%" h="100%" gap="0.938rem">
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            _hover={{boxShadow:"2xl"}}
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
              CONNECTIVITY
            </Heading>{" "}
            <Flex w="100%" h="100%" direction="column" justify="space-between" className="fadein-2sdelay revealOnce">
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="1rem"
                pb="0.625rem"
              >
                <ListItem>
                  Peripheral Ring Road - Pass Through Arete Homes
                </ListItem>
                <ListItem>Outer Ring Road</ListItem>
                <ListItem>Railway Network - Large Ponneri Station</ListItem>
              </UnorderedList>
              <Image
                justifySelf="flex-end"
                h="11.25rem"
                src={locationImg}
                objectFit="contain"
                objectPosition="50% 80%"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            _hover={{boxShadow:"2xl"}}
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
              FOREIGN INVESTMENTS
            </Heading>
            <Flex w="100%" h="100%" direction="column" justify="space-between" className="fadein-2sdelay revealOnce">
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="1rem"
                pb="0.625rem"
              >
                <ListItem>
                  JICA Japan International Cooperation Agency chose Ponneri to
                  manage, design and develop as a ‘Smart City’ in 3 phases.
                </ListItem>
              </UnorderedList>
              <Image
                justifySelf="flex-end"
                h="11.25rem"
                src={foreignInvest}
                objectFit="contain"
                objectPosition="50% 80%"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            justify="space-between"
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            _hover={{boxShadow:"2xl"}}
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
              SOCIAL FABRIC
            </Heading>
            <Flex w="100%" h="100%" direction="column" justify="space-between" className="fadein-2sdelay revealOnce">
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              pb="0.625rem"
            >
              <ListItem>Nearby Stores - Revathi, Saravana etc.</ListItem>
              <ListItem>Nearby Restaurants- A2B, Royal Kitchen</ListItem>
              <ListItem> Nearby Cinemas - PVR, PGC theater</ListItem>
              <ListItem>
                Nearby Attractions - Pulicat Lake, Shri Lakshmi Golden Temple
              </ListItem>
            </UnorderedList>
            <Image
              w="100%"
              h="11.25rem"
              justifySelf="flex-end"
              src={socialFabric}
              objectFit="contain"
              objectPosition="50% 80%"
            />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/*more amenities*/}
      <MoreAmenities />
      {/* our investors */}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        py="3.125rem"
        px="6.25rem"
        direction="column"
        align="center"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          OUR INVESTORS
        </Text>
        {/* carousel */}
        <Box
        transition="all 2s 2s"
        position={"relative"}
        height={"100%"}
        width={"100%"}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          bottom="35%"
          left="5rem"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            
          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="5rem"
          bottom="35%"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
        <Flex key={""} px="6.25rem" align="center" justify="center" pos="relative" h="25rem" w="100%">
          <embed
            style={{height:"25rem",width:"80%",alignSelf:"center",position:"absolute",left:"10%"}}
            src={"https://www.youtube.com/embed/SP4Emn7CRJ4"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
          </Flex>
          <Flex key={""} px="6.25rem" align="center" justify="center" pos="relative" h="25rem" w="100%">
          <embed
            style={{height:"25rem",width:"80%",alignSelf:"center",position:"absolute",left:"10%"}}
            src={"https://www.youtube.com/embed/GB-_iFNmVwo"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
          </Flex>
          <Flex key={""} px="6.25rem" align="center" justify="center" pos="relative" h="25rem" w="100%">
          <embed
            style={{height:"25rem",width:"80%",alignSelf:"center",position:"absolute",left:"10%"}}
            src={"https://www.youtube.com/embed/1vfQI3QG-Zs"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
          </Flex>
          </Slider>
          </Box>
      </Flex>
      <Flex w="100%" h="100%" px="6.25rem" gap="3.125rem" pb="3.125rem" overflow="hidden">
        <Flex pt="1.875rem" w="60%" h="100%" direction="column" align="center" className="fadein revealOnce">
          <Text fontFamily="goudy" fontSize="2.125rem" pb="1.875rem">
            7% ROI ON ARETE HOMES
          </Text>
          <Flex w h="100%" gap="1.875rem" justify="center" align="center">
            <Image className="expandcar revealOnce" w="20.75rem" h="15.313rem" src={snarttwobhk} />
            <Flex
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading fontSize="1.25rem" pb="0.938rem">
                2 BHK - 690 SQFT.
              </Heading>
              <Heading fontSize="1.5rem">₹34 LAKHS</Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
                Fully Furnished With White Goods
              </Text>
              <Heading fontSize="1.5rem">₹20,000</Heading>
              <Text
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Rental Income per month
              </Text>
            </Flex>
          </Flex>
          <Button
            mt="1.25rem"
            alignSelf="center"
            w="fit-content"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            mr="0.625rem"
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            fontWeight="bold"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            VIEW DETAILS
          </Button>
        </Flex>
        <Flex
          pt="1.875rem"
          className="fadein revealOnce"
          w="40%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
        >
          <Text
            fontSize="2.125rem"
            fontFamily="goudy"
            textTransform="uppercase"
            pb="1.563rem"
          >
            SCHEDULE A VISIT
          </Text>
          <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
            GET AN EXPERT OPINION
          </Heading>{" "}
          <form>
            <Flex pb="1.875rem" w="100%" align="center" justify="center" direction="column">
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" ml="4.5rem">
                  <Checkbox
                    ml="0.85rem"
                    value="yes"
                    fontFamily="veralaRound"
                    fontSize="1rem"
                    size="lg"
                  >
                    Book a visit
                  </Checkbox>
                </HStack>
              </FormControl>
              <Button
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                p="0.938rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
                
              >
                SCHEDULE A CALL
              </Button>{" "}
            </Flex>
          </form>
        </Flex>
        
      </Flex>
    </>
  );
};

const Threebhk = () => {
  const easyPayRef = useRef(null);
  const easyPayInView = useInView(easyPayRef, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const fModelRef = useRef(null);
  const fModelInView = useInView(fModelRef, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const [slider, setSlider] = useState(null);
  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    // className: "center",
    centerMode: false,
    infinite: true,
    autoplay: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }
  const [isImageOpen, setIsImageOpen]= useState(false);
  const closeImage =() =>{
    setIsImageOpen(false);
  }
  const openImage =() =>{
    setIsImageOpen(true);
  }
  return (
    <>
      {isOpen?<ModalWindwow modalTitle={"ARETE HOMES"} modalImage={smartInvest} isOpen={isOpen} onClose={()=>close()} />:<></>}
      {/* Smart invest */}
      <Flex
         px="6.25rem"
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        pt="2.5rem"
        pb="5rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          SMART INVESTMENT
        </Text>
        <Flex w="100%" h="100%">
          <Flex w="100%" h="100%">
            <Image onClick={()=>open()} src={areteInto1} className="expandcar reveal" filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
          </Flex>
          <Flex w="100%" h="100%" overflow="hidden">
            {" "}
            <Flex
              className="discobal-slidein-top reveal"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.563rem"
            >
              <Divider
                h="5.5rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              overflow="x-hidden"
              w="100%"
              h="27rem"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading fontSize="1.5rem" pb="0.938rem">
                    ARETE HOMES
                  </Heading>
                  <Heading fontSize="1.25rem" pb="0.938rem">
                    3 BHK - 1787 SQFT.
                  </Heading>
                  <Heading
                    fontSize="2.125rem"
                    pb="0.625rem"
                    bgGradient="linear(to-b, #B88746, #DFBD69)"
                    bgClip="text"
                  >
                    ₹85 LAKHS
                  </Heading>
                  <Text fontFamily="veralaRound" fontSize="1rem" pb="1.563rem">
                    Fully Furnished With White Goods
                  </Text>
              <Flex w="100%" gap="2.938rem" pb="1rem" className="fadein revealOnce">
                <Flex w="100%" direction="column" align="center">
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalYield}
                    mb="0.625rem"
                    
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    HIGH
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Rental Yield
                  </Text>
                </Flex>
                <Flex w="100%" direction="column" align="center">
                  {" "}
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalIncome}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    ₹ 48,000
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Rental Income per month
                  </Text>
                </Flex>
                <Flex w="100%" direction="column" align="center">
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalyears}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    3 YEARS
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Assured Rental Income
                  </Text>
                </Flex>
              </Flex>
              <Heading
                pb="1rem"
                className="fadein-2sdelay revealOnce"
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.5rem"
              >
                ASSURED RENT `{">"}` EMI
              </Heading>
              <Button
                className="fadein revealOnce"
                alignSelf="center"
                w="fit-content"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                mr="0.625rem"
                p="1rem"
                fontSize="1rem"
                fontFamily="avenir"
                fontWeight="bold"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                I AM INTERESTED
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* easy payment plan sec */}
      <Flex ref={easyPayRef}  px="6.25rem" w="100%" h="100%" direction="column" align="center" pb="5rem" overflow="hidden">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          EASY PAYMENT PLAN
        </Text>
        <Flex w="100%" h="100%" gap="1.25rem">
          <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            fontFamily="avenir"
            p="1.875rem"
            _hover={{boxShadow:"2xl"}}
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
          >
            <Heading align="center" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
              PRINCIPAL INSTALLMENT
            </Heading>
            <Flex w="100%" gap="0.625rem" align="flex-end">
              <Text w="60%" fontSize="1rem" fontFamily="veralaRound"  opacity={easyPayInView?1:0} transitionDelay={"1.50s"}>
                Principal
                <br /> Amount
              </Text>
              <Text w="100%" fontSize="1rem" fontFamily="veralaRound" opacity={easyPayInView?1:0} transitionDelay={"2s"}>
                Home Loan Amount
              </Text>
            </Flex>
            <Flex w="100%" h="0.938rem" my="1rem">
              <Flex bgColor="#B88746" w="50%" opacity={easyPayInView?1:0} transitionDelay={"1.50s"}/>
              <Divider
                opacity={easyPayInView?1:0} transitionDelay={"2s"}
                mt="-0.4rem"
                h="1.563rem"
                orientation="vertical"
                border="1px solid"
                borderColor="#B88746"
                bgColor="#B88746"
              />
              <Flex w="100%" h="100%" opacity={easyPayInView?1:0} transitionDelay={"2s"}>
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
              </Flex>
            </Flex>
            <Flex w="100%" gap="0.625rem" pb="1.875rem">
              <Heading  opacity={easyPayInView?1:0} transitionDelay={"1.50s"} w="60%" fontSize="1rem" fontFamily="veralaRound">
              ₹ 25 LAKHS
              </Heading>
              <Heading  className="fadein-2sdelay revealOnce" w="100%" fontSize="1rem" fontFamily="veralaRound">
              ₹ 60 LAKHS
              </Heading>
            </Flex>
            <Divider
              opacity={easyPayInView?1:0} transitionDelay={"3s"}
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />
            <Flex w="100%" justify="space-between" pb="1rem" opacity={easyPayInView?1:0} transitionDelay={"3s"}>
              <Text fontSize="1rem" fontFamily="veralaRound">
                Total Investment
              </Text>
              <Heading fontSize="1.5rem">₹ 85,00,000</Heading>
            </Flex>
            <Flex w="100%" justify="space-between" pb="1.25rem" opacity={easyPayInView?1:0} transitionDelay={"3s"}>
              <Text fontSize="1rem" fontFamily="veralaRound">
                Assured Rent Per Month
              </Text>
              <Heading fontSize="1.5rem">₹ 48,000</Heading>
            </Flex>{" "}
            <Heading
              opacity={easyPayInView?1:0} transitionDelay={"3s"}
              w="100%"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.125rem"
            >
              ASSURED RENT `{">"}` EMI
            </Heading>
          </Flex>
          <Flex
            w="100%"
            h="24.375rem"
            direction="column"
            p="1.875rem"
            align="center"
            fontFamily="avenir"
            _hover={{boxShadow:"2xl"}}
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
          >
            <Heading fontSize="1.5rem" pb="1.875rem" className="fadein revealOnce">
              HOME LOAN
            </Heading>
            <Flex w="100%" gap="2.938rem" pb="1.875rem" className="fadein revealOnce">
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalIncome}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                ₹62 LAKHS
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  Loan Amount
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                {" "}
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalyears}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  25 YEARS
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  Tenure
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={interestRate}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  6.7% p.a.
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  Interest Rate
                </Text>
              </Flex>
            </Flex>
            <Divider
              opacity={easyPayInView?1:0} transitionDelay={"3s"}
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />{" "}
            <Flex w="100%" justify="space-between" pb="1.25rem" opacity={easyPayInView?1:0} transitionDelay={"3s"}>
              <Text fontSize="1rem" fontFamily="veralaRound">
                EMI Per Month
              </Text>
              <Heading fontSize="1.5rem">₹41,265</Heading>
            </Flex>
            <Button
              opacity={easyPayInView?1:0} transitionDelay={"3s"}
              alignSelf="center"
              w="fit-content"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              mr="0.625rem"
              p="1rem"
              fontSize="1rem"
              fontFamily="avenir"
              fontWeight="bold"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              onClick={open}
            >
              GET HOME LOAN
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* FINANCIAL MODEL sec */}
      <Flex
        ref={fModelRef}
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        pb="3.125rem"
        px="6.25rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          FINANCIAL MODEL
        </Text>
        <Flex w="100%" h="100%" overflow="hidden">
          <Flex
          overflow="hidden"
            w="38%"
            h="100%"
            direction="column"
            fontFamily="avenir"
            align="center"
          >
            <Heading textAlign="center" pb="3.125rem" fontSize="1.5rem" className="fadein revealOnce">
              INCOME ON THE INVESTMENT
            </Heading>
            <Flex w="100%" align="center" justify="flex-start" className="fadein revealOnce">
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalIncome}
                mr="0.625rem"
              />
              <Heading color="#D4AD4B" fontSize="1.25rem">
              RENTAL INCOME ₹5.7 LAKHS
              </Heading>
            </Flex>
            <Text color="#B88746"  w="5rem" fontSize="1.563rem" opacity={fModelInView?1:0}>
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start" opacity={fModelInView?1:0} transitionDelay={"2s"}>
              {" "}
              <Image w="3.125rem" h="3.125rem" src={tax} mr="0.625rem" />
              <Heading color="#B78C23" fontSize="1.25rem">
              TAX SAVINGS UPTO ₹2 LAKH
              </Heading>
            </Flex>
            <Text color="#B88746" w="5rem" fontSize="1.563rem" opacity={fModelInView?1:0} transitionDelay={"2s"}>
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start" opacity={fModelInView?1:0} transitionDelay={"4s"}>
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalYield}
                mr="0.625rem"
              />
              <Heading color="#B88746" fontSize="1.25rem">
              APPRECIATION EXPECTED 5% PER YEAR
              </Heading>
            </Flex>
            <Text  w="5rem" color="#B88746" fontSize="1.563rem" opacity={fModelInView?1:0} transitionDelay={"4s"}>
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start" opacity={fModelInView?1:0} transitionDelay={"6s"}>
              {" "}
              <Image w="3.125rem" h="3.125rem" src={pmay} mr="0.625rem" />
              <Heading color="#8D6229" fontSize="1.25rem">
              PMAY BENIFIT ₹2.67 LAKHS
              </Heading>
            </Flex>
          </Flex>
          <Flex
            className="discoballmultistep reveal"
            w="10%"
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="1.563rem"
          >
            <Divider
              h="29.25rem"
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Flex
            w="52%"
            h="100%"
            align="center"
            justify="flex-end"
            fontFamily="avenir"
            direction="column"
          >
            <Heading
              opacity={fModelInView?1:0}
              w="100%"
              textAlign="center"
              fontSize="1.5rem"
              pb="1.563rem"
            >
              INCOME GROWTH JOURNEY
            </Heading>
            <Flex w="100%" h="100%" gap="0.938rem" pb="0.625rem">
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹14 L
                </Heading>
                <Flex h="6.875rem" bgColor="#8D6229" opacity={fModelInView?1:0} transitionDelay={"6s"}/>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="6.25rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹12 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="6.25rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹12 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="6.25rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹12.4 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="7.5rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹12.4 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="7.5rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem" opacity={fModelInView?1:0} transitionDelay={"6s"}>
                ₹12.4 L
                </Heading>
                <Flex h="5rem" bgColor="#B88746" opacity={fModelInView?1:0} transitionDelay={"4s"}/>
                <Flex h="3.125rem" bgColor="#B78C23" opacity={fModelInView?1:0} transitionDelay={"2s"}/>
                <Flex h="7.5rem" bgColor="#D4AD4B" opacity={fModelInView?1:0}/>
              </Flex>
            </Flex>
            <Divider border="1px solid" borderColor="#B88746" opacity={fModelInView?1:0}/>
            <Flex
              opacity={fModelInView?1:0}
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              align="center"
              justify="space-between"
              px="0.938rem"
            >
              <Text>YEAR 1</Text>
              <Text>YEAR 2</Text>
              <Text>YEAR 3</Text>
              <Text>YEAR 4</Text>
              <Text>YEAR 5</Text>
              <Text>YEAR 6</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex h="100%" align="center"my="1rem" p="1rem" boxShadow="2xl" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover" opacity={fModelInView?1:0} transitionDelay={"6.5s"}>
          <Heading
            letterSpacing="2px"
            w="100%"
            fontFamily="avenir"
            textAlign="center"
            fontSize="1.5rem"
            bgGradient="linear(to-b, #B88746,#DFBD69)"
            bgClip="text"
          >
            TOTAL INCOME IN 6 YEARS{" "}
            <Text as={"span"} fontSize="1rem">
              APPROX.
            </Text>{" "}
            ₹76 LAKHS
          </Heading>
        </Flex>
      </Flex>
      {/* location */}
      {isImageOpen?<ModalImage modalImage={locationadv} isOpen={isImageOpen} onClose={()=>closeImage()} />:<></>}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        pt="1.875rem"
        pb="3.125rem"
        px={{ base: "0.938rem", lg: "6.25rem" }}
      >
        <Text
          px={{ base: "10rem", lg: "0" }}
          textAlign="center"
          fontFamily="goudy"
          pb="1.563rem"
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          className="slidein-top revealOnce"
        >
          LOCATION ADVANTAGE
        </Text>
        <Heading align="center" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
        Arete Homes Is The Largest Smart Township Of Premium Housing & Modern Lifestyle Within 30KM Radius Catering To 12 LAKH+ Individuals, Students, Immigrants.
        </Heading>
        <Flex
          w="100%"
          h="100%"
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
          pb="3.125rem"
        >
          <Flex
            display={{ base: "grid", lg: "flex" }}
            w={{ base: "100%", lg: "40%" }}
            h="100%"
            wrap="wrap"
            alignSelf={{ base: "none", lg: "center" }}
            justify={{ base: "flex-start", lg: "flex-start" }}
            gap={{ base: "1.125rem", lg: "0" }}
          >
            <SimpleGrid columns={{ base: "2", lg: "1" }}>
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Box
                  w={"5rem"}
                  h={"5rem"}
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    w={"5rem"}
                    h={"5rem"}
                    src={institute}
                  />
                </Box>
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    100+
                  </Heading>
                  <Text
                    display={{ base: "none", lg: "flex" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    EDUCATIONAL <br /> INSTITUTES
                  </Text>
                  <Text
                    display={{ base: "flex", lg: "none" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    EDUCATIONAL <br /> INSTITUTES
                  </Text>
                </VStack>
              </Flex>
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Image
                  w={{ base: "3.125rem", lg: "5rem" }}
                  h={{ base: "3.125rem", lg: "5rem" }}
                  src={company}
                  mr="1rem"
                />
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    2000+
                  </Heading>
                  <Text
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    COMPANIES NEARBY
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Box
                  direction="column"
                  w={"5rem"}
                  h={"5rem"}
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    w={"5rem"}
                    h={"5rem"}
                    src={industry}
                  />
                </Box>
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    2
                  </Heading>
                  <Text
                    display={{ base: "none", lg: "flex" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    LARGE INDUSTRIAL PARKS
                  </Text>
                  <Text
                    display={{ base: "flex", lg: "none" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    LARGE <br />
                    INDUSTRIAL <br />
                    PARKS
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Image
                  w={{ base: "3.125rem", lg: "5rem" }}
                  h={{ base: "3.125rem", lg: "5rem" }}
                  src={port}
                  mr="1rem"
                />
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    3
                  </Heading>
                  <Text
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    MAJOR PORTS, SEZ
                  </Text>
                </VStack>
              </Flex>{" "}
            </SimpleGrid>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            overflow="hidden"
            // w="10%"
            h="100%"
            px="1.875rem"
          >
            <Flex
              className="discobal-slidein-top reveal"
              direction="column"
              justify="center"
              align="center"
              w="100%"
              h="100%"
            >
              <Divider
                h="2rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Image
              onClick={()=>{openImage()}}
              _hover={{ cursor: "pointer" }}
              className="Arete-Plaza-LocationAdv-Image reveal"
              boxShadow="2xl"
              w="100%"
              h={{ base: "20.625rem", lg: "29.25rem" }}
              objectFit="cover"
              objectPosition="center"
              src={locationadv}
            />
          </Flex>
        </Flex>
        <Flex w="100%" direction={{ base: "column", lg: "row" }}>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="0"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left1 revealOnce"
            >
              <Divider
                h={{ base: "1.6rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="0"
              w="100%"
              className="fadein revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                5 MINS
              </Heading>{" "}
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Velammal International School</ListItem>
                <ListItem pb="0.625rem">Origin By Mahindra</ListItem>
                <ListItem>Ponneri Railway Station</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="1"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left2 revealOnce"
            >
              <Divider
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "5.3rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="1"
              w="100%"
              className="fadein-2sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                10 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Connect To Outer Ring Road</ListItem>
                <ListItem pb="0.625rem">Siruvapuri Murugan Temple</ListItem>
                <ListItem pb="0.625rem">VELS Medical Hospital</ListItem>
                <ListItem>R.K.M. Engineering College</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="2"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left3 revealOnce"
            >
              <Divider
                h={{ base: "1.8rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "3.7rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="2"
              w="100%"
              className="fadein-4sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                20 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Gummidipoondi SIPCOT</ListItem>
                <ListItem pb="0.625rem">Amazon</ListItem>
                <ListItem pb="0.625rem">Minjur</ListItem>
                <ListItem>Pulicat Lake</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="3"
              className="discoball-slidein-left4 revealOnce"
              direction={{ base: "column", lg: "row" }}
            >
              <Divider
                h={{ base: "0.55rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                display={{ base: "none", lg: "flex" }}
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="3"
              w="100%"
              className="fadein-6sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                30 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Sri City</ListItem>
                <ListItem pb="0.625rem">Kattupalli Adani Port</ListItem>
                <ListItem>Chennai Port</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* TENANTS */}
      <Flex
        overflow="hidden"
        w="100%"
        pt="1.875rem"
        pb="1.875rem"
        direction="column"
        align="center"
        bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
      >
        <Text fontFamily="goudy" pb="1.875rem" fontSize="2.5rem" className="slidein-top revealOnce">
          TENANTS
        </Text>
        <Flex w="100%" justify="center" overflow="hidden">
            <TestimonialCarousel />
          <Flex
            pt
            className="slidein-top revealOnce"
            w="5rem"
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="1.562rem"
          >
            <Divider
              h="9.375rem"
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Flex w="30%" direction="column" justify="center" overflow="hidden">
            <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem" className="fadein revealOnce">
              Arete Serviced Apartments company providing safe, hygienic and
              premium co-living spaces to students, working professionals and
              organizations.
            </Text>
            <SimpleGrid className="fadein revealOnce" columns={3}>
              <GridItem borderLeft="1px solid #B88746" borderTop="1px solid #B88746">
                <Image p={"0.9rem"} mt="0.5rem" h="3.125rem" w="10rem" src={tenantsGrid[0].img} alt={tenantsGrid[0].title}/>
              </GridItem>
              <GridItem borderLeft="1px solid #B88746" borderTop="1px solid #B88746">
                <Image p={"0.9rem"} h="4rem" w="10rem" src={tenantsGrid[1].img} alt={tenantsGrid[1].title}/>
              </GridItem>
              <GridItem borderLeft="1px solid #B88746" borderTop="1px solid #B88746" borderRight="1px solid #B88746">
                <Image mt="0.5rem" p={"0.9rem"} h="3.125rem" w="10rem" src={tenantsGrid[2].img} alt={tenantsGrid[2].title}/>
              </GridItem>
              <GridItem>
                <Image borderLeft="1px solid #B88746" borderTop="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[3].img} alt={tenantsGrid[3].title}/>
              </GridItem>
              <GridItem>
                <Image borderLeft="1px solid #B88746" borderTop="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[4].img} alt={tenantsGrid[4].title}/>
              </GridItem>
              <GridItem>
                <Image borderLeft="1px solid #B88746" borderTop="1px solid #B88746" borderRight="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[5].img} alt={tenantsGrid[5].title}/>
              </GridItem>
              <GridItem  borderLeft="1px solid #B88746" borderTop="1px solid #B88746">
                <Image p={"0.9rem"} ml="1.3rem" h="5rem" w="5.5rem" src={tenantsGrid[6].img} alt={tenantsGrid[6].title}/>
              </GridItem>
              <GridItem borderLeft="1px solid #B88746" borderTop="1px solid #B88746">
                <Image p={"0.9rem"} ml="1.3rem" h="5rem" w="6rem" src={tenantsGrid[7].img} alt={tenantsGrid[7].title}/>
              </GridItem>
              <GridItem>
                <Image borderLeft="1px solid #B88746" borderTop="1px solid #B88746" borderRight="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[8].img} alt={tenantsGrid[8].title}/>
              </GridItem>
              <GridItem>
                <Image borderBottom="1px solid #B88746" borderLeft="1px solid #B88746" borderTop="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[9].img} alt={tenantsGrid[9].title}/>
              </GridItem>
              <GridItem>
                <Image borderBottom="1px solid #B88746" borderLeft="1px solid #B88746" borderTop="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[10].img} alt={tenantsGrid[10].title}/>
              </GridItem>
              <GridItem>
                <Image borderBottom="1px solid #B88746" borderLeft="1px solid #B88746" borderTop="1px solid #B88746" borderRight="1px solid #B88746" p={"0.9rem"} h="5rem" w="10rem" src={tenantsGrid[11].img} alt={tenantsGrid[11].title}/>
              </GridItem>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      {/* Floor plan */}
      <Flex  px="6.25rem" w="100%" h="100%" align="center" pt="3.125rem" pb="3.125rem" direction="column" overflow="hidden">
        <Text
          className="slidein-top revealOnce"
          w="100%"
          align="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          textTransform="uppercase"
          pb="1.875rem"
          
        >
          FLOOR PLAN
        </Text>
        <Flex w="100%" h="100%" gap="1.563rem">
        <Flex w="58%">
      <Box
      className="expandcar revealOnce"
      position={"relative"}
      width={"full"}
      height="100%"
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings2} ref={(slider) => setSlider(slider)}>
          <Flex
            w="100%"
            height={"100%"}
          >
            <Image w="100%" h="100%" src={twoBhkFloor} />
          </Flex>
          <Flex
            w="100%"
            height={"100%"}
          >
            <Image w="100%" h="100%" src={floorplana6} />
          </Flex>
      </Slider>
      <IconButton
              className="fadein revealOnce"
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              borderRadius="full"
              bottom="0"
              right="50%"
              // transform={"translateX(-50%)"}
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>01</Text>
            </IconButton>

            {/* Right Icon */}
            <IconButton
              className="fadein revealOnce"
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              bottom="0"
              left="50%"
              // transform={"translate(-50%)"}
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>02</Text>
            </IconButton>
      </Box>
    </Flex>
          <Flex w="42%" h="100%" alignSelf="center" direction="column" className="fadein revealOnce">
            {" "}
            <Heading
              fontSize="1.5rem"
              textTransform="uppercase"
              fontFamily="avenir"
              pb="0.938rem"
            >
              SMART HOMES THAT ARE VASTU COMPLIANT
            </Heading>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              border="1px solid #B88746"
            >
              <Text
                w="100%"
                textAlign="center"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
                fontFamily="veralaRound"
                fontSize="1.25rem"
                p="0.938rem"
                color="white"
                borderBottom="1px solid #B88746"
              >
                TOWER DETAILS
              </Text>
              <Flex
                w="100%"
                pt="0.938rem"
                pb="1.875rem"
                px="1.875rem"
                direction="column"
                gap="1.875rem"
              >
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    TYPE OF UNITS
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    2 BHK(C), 2 BHK(L), 3 BHK
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    SALEABLE AREA
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    1008-1748 SQFT.
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    FLOORS
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    10
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    NO. OF FLATS ON EACH FLOOR
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    8
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* why invest */}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        px="6.25rem"
        py="3.125rem"
        align="center"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          WHY INVEST?
        </Text>
        <Flex w="100%" h="100%" gap="0.938rem">
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            _hover={{boxShadow:"2xl"}}
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
              CONNECTIVITY
            </Heading>{" "}
            <Flex w="100%" h="100%" direction="column" justify="space-between" className="fadein-2sdelay revealOnce">
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="1rem"
                pb="0.625rem"
              >
                <ListItem>
                  Peripheral Ring Road - Pass Through Arete Homes
                </ListItem>
                <ListItem>Outer Ring Road</ListItem>
                <ListItem>Railway Network - Large Ponneri Station</ListItem>
              </UnorderedList>
              <Image
                justifySelf="flex-end"
                h="11.25rem"
                src={locationImg}
                objectFit="contain"
                objectPosition="50% 80%"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            _hover={{boxShadow:"2xl"}}
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
              FOREIGN INVESTMENTS
            </Heading>
            <Flex w="100%" h="100%" direction="column" justify="space-between" className="fadein-2sdelay revealOnce">
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="1rem"
                pb="0.625rem"
              >
                <ListItem>
                  JICA Japan International Cooperation Agency chose Ponneri to
                  manage, design and develop as a ‘Smart City’ in 3 phases.
                </ListItem>
              </UnorderedList>
              <Image
                justifySelf="flex-end"
                h="11.25rem"
                src={foreignInvest}
                objectFit="contain"
                objectPosition="50% 80%"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            justify="space-between"
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            _hover={{boxShadow:"2xl"}}
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem" className="fadein revealOnce">
              SOCIAL FABRIC
            </Heading>
            <Flex w="100%" h="100%" direction="column" justify="space-between" className="fadein-2sdelay revealOnce">
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              pb="0.625rem"
            >
              <ListItem>Nearby Stores - Revathi, Saravana etc.</ListItem>
              <ListItem>Nearby Restaurants- A2B, Royal Kitchen</ListItem>
              <ListItem> Nearby Cinemas - PVR, PGC theater</ListItem>
              <ListItem>
                Nearby Attractions - Pulicat Lake, Shri Lakshmi Golden Temple
              </ListItem>
            </UnorderedList>
            <Image
              w="100%"
              h="11.25rem"
              justifySelf="flex-end"
              src={socialFabric}
              objectFit="contain"
              objectPosition="50% 80%"
            />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/*more amenities*/}
      <MoreAmenities />
      {/* our investors */}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        py="3.125rem"
        px="6.25rem"
        direction="column"
        align="center"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          OUR INVESTORS
        </Text>
        {/* carousel */}
        <Box
        transition="all 2s 2s"
        position={"relative"}
        height={"100%"}
        width={"100%"}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          bottom="35%"
          left="5rem"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            
          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="5rem"
          bottom="35%"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Flex key={""} px="6.25rem" align="center" justify="center" pos="relative" h="25rem" w="100%">
          <embed
            style={{height:"25rem",width:"80%",alignSelf:"center",position:"absolute",left:"15%"}}
            src={"https://www.youtube.com/embed/Psmw1t_S6-c"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
          </Flex>
          </Slider>
          </Box>
      </Flex>
      <Flex w="100%" h="100%" px="6.25rem" gap="3.125rem" pb="3.125rem" overflow="hidden">
        <Flex pt="1.875rem" w="60%" h="100%" direction="column" align="center" className="fadein revealOnce">
          <Text fontFamily="goudy" fontSize="2.125rem" pb="1.875rem">
            7% ROI ON ARETE HOMES
          </Text>
          <Flex w h="100%" gap="1.875rem" justify="center" align="center">
            <Image className="expandcar revealOnce" w="20.75rem" h="15.313rem" src={snarttwobhk} />
            <Flex
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading fontSize="1.25rem" pb="0.938rem">
                2 BHK - 690 SQFT.
              </Heading>
              <Heading fontSize="1.5rem">₹34 LAKHS</Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
                Fully Furnished With White Goods
              </Text>
              <Heading fontSize="1.5rem">₹20,000</Heading>
              <Text
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Rental Income per month
              </Text>
            </Flex>
          </Flex>
          <Button
            mt="1.25rem"
            alignSelf="center"
            w="fit-content"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            mr="0.625rem"
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            fontWeight="bold"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            VIEW DETAILS
          </Button>
        </Flex>
        <Flex
          pt="1.875rem"
          className="fadein revealOnce"
          w="40%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
        >
          <Text
            fontSize="2.125rem"
            fontFamily="goudy"
            textTransform="uppercase"
            pb="1.563rem"
          >
            SCHEDULE A VISIT
          </Text>
          <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
            GET AN EXPERT OPINION
          </Heading>{" "}
          <form>
            <Flex pb="1.875rem" w="100%" align="center" justify="center" direction="column">
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" ml="4.5rem">
                  <Checkbox
                    ml="0.85rem"
                    value="yes"
                    fontFamily="veralaRound"
                    fontSize="1rem"
                    size="lg"
                    
                  >
                    Book a visit
                  </Checkbox>
                </HStack>
              </FormControl>
              <Button
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                p="0.938rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SCHEDULE A CALL
              </Button>{" "}
            </Flex>
          </form>
        </Flex>
        
      </Flex>
    </>
  );
};

const TestimonialCarousel = () => {
  const [slider, setSlider] = useState(null);
  const tenantsImg = [{img:roiImg}, {img:areteInto1}];
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Flex w="50%">
    <Box
      className="expandcar revealOnce"
      position={"relative"}
      width={"full"}
      height={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {tenantsImg.map((tes) => (
          <Flex
            align="flex-start"
            justify="space-between"
            flexDirection="column"
            w="100%"
            key={tes.img}
            height={"100%"}
          >
            <Image w="100%" h="26rem" src={tes.img} />
          </Flex>
        ))}
      </Slider>
      <IconButton
        className="fadein revealOnce"
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              borderRadius="full"
              bottom="0"
              right="50%"
              // transform={"translateX(-50%)"}
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>01</Text>
            </IconButton>

            {/* Right Icon */}
            <IconButton
              className="fadein revealOnce"
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              bottom="0"
              left="50%"
              // transform={"translate(-50%)"}
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>02</Text>
            </IconButton>
    </Box>
    </Flex>
  );
};



export default SkyhighInvest;

const gymclubimgs = [
  {img:"/images/arete-homes/PGC-ACTIVITY AREA.jpeg",title:"ACTIVITY AREA"},
  {img:"/images/arete-homes/PGC-BANQUET HALL.jpg",title:"BANQUET HALL"},
  {img:"/images/arete-homes/PGC-CAFETERIA.jpg",title:"CAFETERIA"},
  {img:"/images/arete-homes/PGC-GRAND ENTRANCE.jpg",title:"GRAND ENTRANCE"},
  {img:"/images/arete-homes/PGC-GYM.jpg",title:"GYM"},
  {img:"/images/arete-homes/PGC-multi sports arena.jpg",title:"MULTI SPORTS ARENA"},
  {img:"/images/arete-homes/PGC-SQUASH COURT.jpg",title:"SQUASH COURT"},
  {img:"/images/arete-homes/PGC-SWIMMING POOL.jpg",title:"SWIMMING POOL"},
];

const MoreAmenities = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    draggable: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Flex
      overflow="hidden"
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      py="1.875rem"
      px="1.562rem"
    >
      <Text fontFamily="goudy" fontSize="2.5rem" pb="1.562rem" className="slidein-top revealOnce">
        MORE AMENITIES
      </Text>
      <Box
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="4.687rem"
        pr="4.687rem"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {gymclubimgs.map((prime) => (
            <Flex w="100%" align="center" direction="column">
              <Image
                key={prime}
                w="100%"
                height="15.437rem"
                pr="0.937rem"
                mb="0.938rem"
                position="relative"
                objectPosition="center"
                backgroundRepeat="no-repeat"
                objectFit="fill"
                src={prime.img}
              />
              <Heading textAlign="center" fontSize="1.5rem" fontFamily="avenir">
                {prime.title}
              </Heading>
            </Flex>
          ))}
        </Slider>
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          top="45%"
          left="0"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="0"
          top="45%"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            slider?.slickNext();
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
      </Box>
    </Flex>
  );
};
