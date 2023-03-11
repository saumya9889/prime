import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
//import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import career1 from "../careers imgs/career1_2_11zon.jpeg";
import career2 from "../careers imgs/career2_4_11zon.jpg";
import career3 from "../careers imgs/career3_5_11zon.jpeg";
import career4 from "../careers imgs/career4_6_11zon.jpeg";
import career5 from "../careers imgs/career5_7_11zon.jpeg";
import career6 from "../careers imgs/career6_8_11zon.jpeg";
import career7 from "../careers imgs/EVENTS10_11zon.jpeg";

//const Heading = motion(Heading);
//const Text = motion(Text);
//const Box = motion(Box);

const images = [career1, career2, career3, career4, career5, career6, career7];

const Lifeatls = () => {
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "2.5rem" });

  //const animationHead = useAnimation();
  //const animationText = useAnimation();
  //const animationImg = useAnimation();

  const settings = {
    draggable: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    afterChange: () => {
      setCurrentSlide(currentSlide++);
    },
  };
/*
  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationText.start({ opacity: 1 });
      animationImg.start({ opacity: 1, x: 0 });
    }
  }, [isInView, animationHead, animationText, animationImg]);
*/
  return (
    <Flex
      overflow="hidden"
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      textAlign="center"
      px="1.562rem"
      pt="5rem"
      pb="1.875rem"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Heading
        className="serv-text-up reveal"
        fontSize="2.5rem"
        fontFamily="goudy"
        fontWeight="400"
        pb="1.563rem"
      >
        LIFE AT PRIME LIFESPACE
      </Heading>
      <Text
        className="fadein reveal"
        fontSize="1rem"
        fontFamily="veralaRound"
        pb="1.563rem"
      >
        We believe when everyone is moving forward together then success takes
        care of itself.
        <br /> Here is a glimpse of what’s it’s like to be a member of the Prime
        Lifespace Team.
      </Text>
      <Flex w="100%" h="100%">
        {" "}
        <Box
          position={"relative"}
          height={"100%"}
          width={"full"}
          overflow={"hidden"}
          pl="4.687rem"
          pr="3.437rem"
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
            {images.map((prime) => (
              <Flex pr="20px">
                <Image
                  key={prime}
                  w="100%"
                  h="25rem"
                  position="relative"
                  objectPosition="center top"
                  backgroundRepeat="no-repeat"
                  objectFit="cover"
                  src={prime}
                  boxShadow="2px 4px 6px rgba(0,0,0, .2)"
                />
              </Flex>
            ))}
          </Slider>
          <IconButton
            aria-label="left-arrow"
            variant="outline"
            borderColor="#B88746"
            border="3px solid"
            borderRadius="full"
            position="absolute"
            top="50%"
            left="0"
            h="3.125rem"
            w="3.125rem"
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => {
              slider?.slickPrev();
              setCurrentSlide(currentSlide--);
            }}
          >
            <AiOutlineLeft color="#B88746" size="2.5rem" />
          </IconButton>

          <IconButton
            aria-label="right-arrow"
            borderRadius="full"
            variant="outline"
            borderColor="#B88746"
            border="3px solid"
            position="absolute"
            transform={"translate(0%, -50%)"}
            zIndex={2}
            right="0"
            top="50%"
            h="3.125rem"
            w="3.125rem"
            onClick={() => {
              slider?.slickNext();
              // setCurrentSlide(currentSlide++);
            }}
          >
            <AiOutlineRight color="#B88746" size="2.5rem" />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Lifeatls;

const ImgBar = ({ slide }) => {
  let barFillWidth = "0%";
  if (slide > 0) {
    barFillWidth = slide * 14.28 + "%";
  }
  console.log(barFillWidth);
  return (
    <Flex
      ml="1"
      mr="1"
      w="6.25rem"
      h="5px"
      borderRadius="15px"
      align="center"
      justify="flex-start"
    >
      <Flex
        color="black"
        bgColor="#B88746"
        style={{ width: barFillWidth }}
        p="1"
        justifyContent="center"
        transition="all .3s"
      ></Flex>
    </Flex>
  );
};
