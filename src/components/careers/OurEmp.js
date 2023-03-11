import { Flex, Heading, Text, Avatar, Stack, Icon } from "@chakra-ui/react";
//import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
// import Slider from "react-slick";
import ImgCarousel from "../layouts/Img-Carousel";
import Desapan from "./Desapan.JPG";
import manoj from "./manoj.JPG";
import shailaja from "./shailaja.JPG";
import shruthi from "./shruthi.JPG";
import sridhar from "./sridhar.JPG";
import suresh from "./suresh.JPG";


//const Heading = motion(Heading);
//const Flex = motion(Flex);

const OurEmp = () => {
  const ref = useRef(null);
  /*
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationTest = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationTest.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animationHead, animationTest]);
  */
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Flex
      overflow="hidden"
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      px="6.25rem"
      align="flex-start"
      justify="center"
    >
      <Heading
        className="serv-text-up reveal"
        w="100%"
        textAlign="center"
        fontSize="2.5rem"
        fontFamily="goudy"
        fontWeight="400"
        // pb="25px"
      >
        OUR HAPPY EMPLOYEES
      </Heading>
      <Flex
        w="100%"
        h="full"
        className="fadein reveal"
        pos="relative"
        align="flex-start"
        justify="space-between"
      >
        <Icon
          pos="absolute"
          left="-1%"
          top="0"
          w="4.375rem"
          h="3.125rem"
          as={ImQuotesLeft}
          color="#DFBD69"
        />
        <ImgCarousel testimonial={testimonial} />
        <Icon
          mr="4"
          color="#DFBD69"
          pos="absolute"
          right="0"
          bottom="20%"
          zIndex="10"
          w="4.375rem"
          h="3.125rem"
          as={ImQuotesRight}
        />
      </Flex>
    </Flex>
  );
};

export default OurEmp;

const testimonial = [
  {
    name: "Suresh",
    title: "Sales Team",
    text: "I have associated with Arete Homes for more than a year. I handle sales and marketing for the project and it has been a great journey till date. I love working here since I am given complete freedom to work as per my comfort, and the management gives me complete flexibility to explore avenues . This in turn helps me to evolve in my career and it is a great experience.",
    avtr:suresh,
  },
  {
    name: "Shailaja",
    title: "Sales and Admin Team",
    text: "I have been with this company for close to a few years now and what this organization brings to my table is a great opportunity to explore the various aspects of real estate development. With such a visionary project in hand, I can proudly say that such an association with Prime Lifespace has been fruitful and full of challenges that I enjoy on a day to day basis.",
    avtr:shailaja,
  },
  {
    name: "Sridhar",
    title: "Sales Team",
    text: "I have been associated with this organization since the beginning of Arete Homes Project. Even today I am motivated and really amazed to see the energy here day in and day out. This is a visionary project and the satisfaction I get to serve the needs of our clients is immense. The organization has taught me a lot about team spirit, and how a quality product never fails.",
    avtr:sridhar,
  },
  {
    name: "Desapan",
    title: "Accounts Team",
    text: "I have been associated with this company for close to 3 years and what this organization brings to my table is a great opportunity to explore the various aspects of real estate development with such a visionary project in hand, I can proudly say that my association with prime Life space has been fruitful and full of challenges that I enjoy on a day basis.",
    avtr:Desapan,
  },
  {
    name: "Shruti",
    title: "Marketing Team",
    text: "I have been associated with this company for close to 5 years and what this organization brings to my table is a great opportunity to explore the various aspects of real estate development .with such a visionary in hand I can proudly say that my association with prime Lifespace has been fruitful & full of challenges that I enjoy on a day to day basis.",
    avtr:shruthi,
  },
  {
    name: "Manoj",
    title: "Sales Team",
    text: "I am a long standing employee of Prime Lifespace and I have been handling Sales at Arete Homes. I have seen the project grow from the time of its inception and I’m happy to say that two towers have been handed over. Being a resident of Ponneri, I feel really proud to see the area got the much needed attention it deserves. ",
    avtr:manoj,
  },
];
