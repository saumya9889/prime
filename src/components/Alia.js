import {
  Flex,
  Heading,
  Image,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";

const MtnFlx = motion(Flex);

const Allia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateX = useAnimation();
  const animateY = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateY.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY]);

  return (
    <Flex ref={ref} direction="column" align="center" pt="3.125rem">
      <Flex w="100%" px="100px">
        <MtnFlx
          initial={{ opacity: 0, x: -50 }}
          animate={animateX}
          transition={{ duration: 2, type: "just" }}
          w="30%"
          h="100%"
          direction="column"
          pt="20px"
        >
          <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
            India’s Best <br /> Realty Brand
          </Heading>
          <Flex justify="center" align="center">
            <Divider
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="30px"
              width="35px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
        </MtnFlx>
        <MtnFlx
          initial={{ y: 50, opacity: 0 }}
          animate={animateY}
          transition={{ delay: 1.5, duration: 2, type: "just" }}
          w="100%"
          h="100%"
          align="center"
          pb="3.125rem"
        >
          <Flex h="100%" direction="column" align="center">
            <Image
              w="100%"
              h="200px"
              pl="2.563rem"
              pb="15px"
              src="/images/award1.png"
            />
            <Text fontFamily="veralaRound" fontSize="16px" textAlign="center">
              Times Realty Icon
              <Text fontSize="18px" pt="10px">
                "The Best <br /> Upcoming Township"
              </Text>
            </Text>
          </Flex>
          <Flex h="100%" direction="column" align="center">
            <Image
              w="100%"
              h="200px"
              px="2.563rem"
              pb="15px"
              src="/images/award2.png"
            />
            <Text fontFamily="veralaRound" fontSize="16px" textAlign="center">
              The Economic Times
              <Text fontSize="18px" pt="10px">
                "Best Realty<br/>Brand 2020-21"
              </Text>
            </Text>
          </Flex>
          <Flex h="100%" direction="column" align="center">
            <Image w="100%" h="200px" pb="15px" src="/images/award3.png" />
            <Text fontFamily="veralaRound" fontSize="16px" textAlign="center">
              FICCI
              <Text fontSize="18px" pt="10px">
                "Best Gated Community
                <br /> Of the Year 2021"
              </Text>
            </Text>
          </Flex>
        </MtnFlx>
      </Flex>
      <Flex w="100%" direction="column" align="center" justify="center" pb="3.125rem">
        <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
          OUR ALLIANCES
        </Heading>
        <MtnFlx
          initial={{ x: "100vw", opacity: 0 }}
          animate={animateX}
          transition={{ delay: 3, duration: 2, type: "just" }}
          w="100%"
          pt="1.875rem"
          px="100px"
        >
          <LogoSlider logos={logos} />
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default Allia;

const logos = [
  "/images/alliances.png",
  "/images/5.png",
  "/images/alliances3.png",
  "/images/alliances4.png",
];

const LogoSlider = ({ logos }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Box
      position={"relative"}
      height={"full"}
      width={"full"}
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

      <Slider {...settings}>
        {logos.map((icon) => (
          <Flex
            align="flex-start"
            justify="space-between"
            flexDirection="column"
            w="100%"
            key={icon}
            height={"100%"}
            position="relative"
          >
            <Image src={icon} />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};
