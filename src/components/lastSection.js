import { Flex, Text, Icon, Avatar } from "@chakra-ui/react";
import React, { useState } from "react";
import ImgCarousel from "./layouts/Img-Carousel";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import AksahayOberoi from "../components/homepage-imgs/akshay oberoi.jpg"
import AnujPuri from "../components/homepage-imgs/anuj puri.jfif"
import ShrikantJoshi from "../components/homepage-imgs/Shrikant_Joshi.jpg"
import BabulalVarma from "../components/homepage-imgs/Mr.-Babulal-Varma.jpg"
import ShrikantBhasi from "../components/homepage-imgs/Shrikant_Bhasi_1.png"
import VijayKethan from "../components/homepage-imgs/Vijay.jpg"
import MitheshKothari from "../components/homepage-imgs/mitesh kothari.webp"
import HomePageVedios from "./homepage-imgs/homepage_vedio.mp4?autoplay=0&muted=0"
import "./lastSection.css";

const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);

const LastSection = () => {
  const testimonial = [
    {
      name: "Shrikant Joshi",
      title: "CEO-L&T Realty",
      avtr: ShrikantJoshi,
      text: "Prime Lifespace has played a significant role in the joint venture formation to one of our biggest project CRESCENT Bay at Parel. I highly recommend Prime Lifespace & wish them success.",
    },
    {
      name: "Anuj Puri",
      title: "Chairman-JLL Industries",
      avtr: AnujPuri,
      text: "Prime Lifespace’s launch of primelifespace.com dedicated to connecting Indian end users to properties that meet their budgets & requirements is laudable.",
    },
    {
      name: "Babulal Verma",
      title: "MD-Omkar Realtors",
      avtr: BabulalVarma,
      text: "Prime Lifespace has made significant contributions in the development and growth of L&T realty. I highly recommend Prime Lifespace.",
    },
    {
      name: "Akshay Oberoi",
      title: "Bollywood Actor",
      avtr: AksahayOberoi,
      text: "Prime Lifespace team presents a professional outlook on real estate issues and gives the right solution. They helped me find a perfect home. I highly recommend them.",
    },
    {
      name: "Shrikant Bhasi",
      title: "Managing Director, Carnival Motion Pictures",
      avtr: ShrikantBhasi,
      text: "Looking for a home? Do rely on Prime Lifespace to get you best deals on location, floor choice and advantage of price.",
    },
    {
      name: "Vijay Khetan",
      title: "Managing Director, Vijaykhetan Group ",
      avtr: VijayKethan,
      text: "Prime Lifespace as a company has a excellent knowledge of real estate and understands the best options & the future for individual, commercial as well as residential properties. I definitely recommend them.",
    },
    {
      name: "Mitesh Kothari",
      title: "Deputy Managing Director, Pan Parag India",
      avtr: MitheshKothari,
      text: "Prime Lifespace has a team of professionals with heart and vision which makes a client extremely comfortable. Though professional, you always feel at home and have a family bonding with them.",
    },
  ];
  const ref = useRef(null);
  const [testIndex,setTestIndex] =useState(0);
  const [test,setTest] =useState(testimonial[0]);
  const isInView = useInView(ref, { once: true });
  const animateFade = useAnimation();
  useEffect(() => {
    const testInitialize = setTimeout(() => {
      if(testIndex===testimonial.length-1){setTestIndex(0);setTest(testimonial[0]);}
      else{setTestIndex(testIndex+1);setTest(testimonial[testIndex+1]);}
    }, 5000);
    return ()=>{clearTimeout(testInitialize)};
  });
  useEffect(() => {
    if (isInView) {
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateFade]);

  return (
    <Flex
      ref={ref}
      w="100%"
      minH="100vh"
      direction="column"
      align="center"
      justify="center"
      pt="1.875rem"
      px="100px"
      pb="100px"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Flex w="100%" pos="relative" pb="270px">
        <Flex
          bgGradient="linear(to-r, #B88746 ,#DFBD69)"
          pl="25px"
          py="50px"
          pr="100px"
        >
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ duration: 2, type: "just"}}
            fontSize="40px"
            fontFamily="goudy"
            fontWeight="400"
            color="#fff"
          >
            Hear What <br /> People Has To <br /> Say About Us.
          </MtnTxt>
        </Flex>
        <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ duration: 2, type: "just" }}
          w="70%"
          h="80%"
          pos="absolute"
          left="24%"
          top="10%"
        >
          <video
            width="100%"
            height="100%"
            src={HomePageVedios}
            title="See what our customer speaks about Arete Homes!"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
            allowFullScreen
            muted={true}
            autoPlay
            controls
          ></video>
        </MtnFlx>
      </Flex>
      <Flex w="100%" h="80%" marginBottom="-5rem">
        <MtnFlx
          className="slide-animation"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 2, type: "just", }}
          
          w="100%"
          h="100%"
          pos="relative"
          align="flex-start"
          justify="space-between"
          pb="-2rem"
        >
          <Icon
            pos="absolute"
            left="-1%"
            top="0"
            w="70px"
            h="50px"
            as={ImQuotesLeft}
            color="#DFBD69"
          />
          {test?(
          <>
          <Flex
            alignItems="flex-start"
            justifyContent="flex-end"
            flexDirection="column"
            w="100%"
            h="20rem"
            pr="1.563rem"
            py="0.313rem"
            mt="3.125rem"
            
            key={testIndex!==0?testimonial[testIndex-1].name:testimonial[testimonial.length-1].name}
          >
            <div style={{height:"15rem"}}>
              <Text fontSize="1rem" fontFamily="veralaRound">
              {testIndex!==0?testimonial[testIndex-1].text:testimonial[testimonial.length-1].text}
            </Text>
            </div>
            
            <Flex
              w="100%"
              h="15rem"
              align="center"
              justify="flex-start"
              alignSelf="flex-end"
              justifySelf="flex-end"
            >
              <Avatar
                h="5rem"
                w="5rem"
                mr="0.625rem"
                src={testIndex!==0?testimonial[testIndex-1].avtr:testimonial[testimonial.length-1].avtr}
                alt={testIndex!==0?testimonial[testIndex-1].name:testimonial[testimonial.length-1].name}
              />
              <Flex direction="column">
                <Text
                  fontSize="1.125rem"
                  fontFamily="veralaRound"
                  fontWeight={400}
                >
                  {testIndex!==0?testimonial[testIndex-1].name:testimonial[testimonial.length-1].name}
                </Text>
                <Text
                  fontFamily="veralaRound"
                  fontWeight={400}
                  fontSize="1rem"
                  color="black"
                >
                  {testIndex!==0?testimonial[testIndex-1].title:testimonial[testimonial.length-1].title}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            alignItems="flex-start"
            justifyContent="flex-end"
            flexDirection="column"
            w="100%"
            h="20rem"
            pr="1.563rem"
            py="0.313rem"
            mt="3.125rem"
            key={test.name}
          >
            <div style={{height:"15rem"}}>
            <Text fontSize="1rem" fontFamily="veralaRound">
              {test.text}
            </Text>
            </div>
            <Flex
              w="100%"
              h="15rem"
              align="center"
              justify="flex-start"
              alignSelf="flex-end"
              justifySelf="flex-end"
            >
              <Avatar
                h="5rem"
                w="5rem"
                mr="0.625rem"
                src={test.avtr}
                alt={test.name}
              />
              <Flex direction="column">
                <Text
                  fontSize="1.125rem"
                  fontFamily="veralaRound"
                  fontWeight={400}
                >
                  {test.name}
                </Text>
                <Text
                  fontFamily="veralaRound"
                  fontWeight={400}
                  fontSize="1rem"
                  color="black"
                >
                  {test.title}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            alignItems="flex-start"
            justifyContent="flex-end"
            flexDirection="column"
            w="100%"
            h="20rem"
            pr="1.563rem"
            py="0.313rem"
            mt="3.125rem"
            key={testIndex!==testimonial.length-1?testimonial[testIndex+1].name:testimonial[0].name}
          >
            <div style={{height:"15rem"}}>
            <Text fontSize="1rem" fontFamily="veralaRound">
              {testIndex!==testimonial.length-1?testimonial[testIndex+1].text:testimonial[0].text}
            </Text>
            </div>
            <Flex
              w="100%"
              h="15rem"
              align="center"
              justify="flex-start"
              alignSelf="flex-end"
              justifySelf="flex-end"
            >
              <Avatar
                h="5rem"
                w="5rem"
                mr="0.625rem"
                src={testIndex!==testimonial.length-1?testimonial[testIndex+1].avtr:testimonial[0].avtr}
                alt={testIndex!==testimonial.length-1?testimonial[testIndex+1].name:testimonial[0].name}
              />
              <Flex direction="column">
                <Text
                  fontSize="1.125rem"
                  fontFamily="veralaRound"
                  fontWeight={400}
                >
                  {testIndex!==testimonial.length-1?testimonial[testIndex+1].name:testimonial[0].name}
                </Text>
                <Text
                  fontFamily="veralaRound"
                  fontWeight={400}
                  fontSize="1rem"
                  color="black"
                >
                  {testIndex!==testimonial.length-1?testimonial[testIndex+1].title:testimonial[0].title}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          </>
        ):<></>}
          {/*<ImgCarousel testimonial={testimonial} />*/}
          <Icon
            mr="4"
            color="#DFBD69"
            pos="absolute"
            right="0"
            bottom="45%"
            zIndex="10"
            w="70px"
            h="50px"
            as={ImQuotesRight}
          />
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default LastSection;


