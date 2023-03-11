import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
//import { useInView } from "framer-motion";
import {
  Flex,
  Heading,
  Text,
  Image,
  TableContainer,
  Table,
  Button,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
} from "@chakra-ui/react";
import Slider from "react-slick";

const EightSec = () => {
  const [slider, setSlider] = useState(null);
  const settings = {
    draggable: true,
    infinite: true,
    autoplay: true,
    /*speed: 500,*/
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  /*const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });*/
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1rem"
      pt="3.125rem"
      pb="1.875rem"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      overflow="hidden"
    >
      <Text
        textAlign="center"
        className="slidein-top revealOnce"
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        lineHeight="3rem"
        textTransform="uppercase"
      >
        A delightful mix of sky residences
      </Text>
      <Heading
        textAlign="center"
        opacity={inView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="avenir"
        fontSize="1.5rem"
        py="1.562rem"
      >
        FOR CO-LIVING, STUDENT HOUSING & SERVICED APARTMENTS
      </Heading>
      <Text
      textAlign="center"
        opacity={inView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="veralaRound"
        fontSize="1rem"
        pb="1.562rem"
      >
        An unique collection of flexi-design 2 BHK sky residences, well-planned
        with convertible option, for you to customize your home & needs. The 5
        different design innovations allow variations in private or shared
        rooms, more bedrooms or spacious living, one or more bathrooms etc.
        Making it possible to fit up to 5 beds in every apartment.
      </Text>
      <Flex w="100%" h="100%" align="center" justify="center" gap="0.937rem">
      <Box
          position={"relative"}
          height={"18.75rem"}
          width={"100%"}
          overflow={"hidden"}
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
          <Flex overflow="hidden">
          <Image
            w="100%"
            h="18.75rem"
            src="/images/sky-high/FLOOR PLAN1.jpg"
            filter="auto"
            blur="2px"
          />
        </Flex>
        <Flex overflow="hidden" >
          <Image
            h="18.75rem"
            w="100%"
            src="/images/sky-high/FLOOR PLAN2.jpg"
            filter="auto"
            blur="2px"
          />
        </Flex>
          </Slider>
        </Box>
      </Flex>
      <Flex
        opacity={inView ? "1" : "0"}
        transition="all 2s 3s"
        w="100%"
        h="100%"
        align="center"
        justify="space-between"
        mt="1.563rem"
      >
        <Flex w="100%" direction="column">
        <Flex
            w="100%"
            bgGradient="linear(to-b,#DFBD69, #B88746)"
            textTransform="uppercase"
          >
            <Text
              wordBreak="break-all"
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="bold"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.625rem"
            >
              Configuration
            </Text>
            <Text
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="bold"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.625rem"
            >
              Saleable Area
            </Text>
          </Flex>
          <Flex w="100%" textTransform="uppercase">
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              border="1px solid #B88746"
              borderRight="none"
              textAlign="center"
              p="0.625rem"
            >
              SMART 2 BHK
            </Heading>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              textAlign="center"
              border="1px solid #B88746"
              p="0.625rem"
            >
              690
            </Heading>
          </Flex>
          <Flex
            w="100%"
            bgGradient="linear(to-b,#DFBD69, #B88746)"
            textTransform="uppercase"
          >
            <Text
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="bold"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.937rem"
            >
              Net Usable<br/>Area
            </Text>
            <Text
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="bold"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.937rem"
            >
              Rera Carpet Area
            </Text>
          </Flex>
          <Flex w="100%" textTransform="uppercase">
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              border="1px solid #B88746"
              borderRight="none"
              textAlign="center"
              p="0.937rem"
            >
              452
            </Heading>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              textAlign="center"
              border="1px solid #B88746"
              p="0.937rem"
            >
              447
            </Heading>
          </Flex>
        <Button
                alignSelf="center"
                mt="1.563rem"
                opacity={inView ? "1" : "0"}
                transition="all 2s 3s"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                CHECK PRICE
              </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EightSec;
