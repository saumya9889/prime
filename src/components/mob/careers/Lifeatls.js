import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MtnHead = motion(Heading);
const MotnTxt = motion(Text);
const MtnBx = motion(Box);

const images = [
  "/images/careers/career1.jpeg",
  "/images/careers/career2.JPG",
  "/images/careers/career3.jpeg",
  "/images/careers/career4.jpeg",
  "/images/careers/career5.jpeg",
  "/images/careers/career6.jpeg",
  "/images/careers/career7.jpeg",
];

const Lifeatls = () => {
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "2.5rem" });

  const animationHead = useAnimation();
  const animationText = useAnimation();
  const animationImg = useAnimation();

  const settings = {
    
    draggable: true,
    infinite: true,
    autoplay: true,
    /*speed: 500,*/
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    afterChange: () => {
      currentSlide===6?setCurrentSlide(0):setCurrentSlide(currentSlide++);
    },
  };

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationText.start({ opacity: 1 });
      animationImg.start({ opacity: 1, x: 0 });
    }
  }, [isInView, animationHead, animationText, animationImg]);

  return (
    <Flex
      zIndex="2"
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      textAlign="center"
      px="1rem"
      pb="1.875rem"
      bgImage='linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      
      
    >
      <Flex bg="inherit" direction="column" pt="1.875rem" mt="-1.875rem" filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))">
      <MtnHead
        initial={{ opacity: 0, y: -100 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontSize="2.125rem"
        fontFamily="goudy"
        fontWeight="400"
        pb="0.928rem"
        
        
      >
        LIFE AT<br/>PRIME LIFESPACE
      </MtnHead>
      <MotnTxt
        initial={{ opacity: 0 }}
        animate={animationText}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="1rem"
        fontFamily="veralaRound"
        pb="1.562rem"
      >
        We believe when everyone is moving forward together then success takes
        care of itself.
        <br /> Here is a glimpse of what’s it’s like to be a member of the Prime
        Lifespace Team.
      </MotnTxt>
      </Flex>
        <Box
          position={"relative"}
          height={"100%"}
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
            {images.map((prime,index) => (
              <Flex>
                <Image
                  key={prime}
                  w="100%"
                  h="15.625rem"
                  position="relative"
                  objectPosition="center top"
                  backgroundRepeat="no-repeat"
                  objectFit="cover"
                  src={prime}
                  boxShadow="md"
                />
              </Flex>
            ))}
          </Slider>
        </Box>
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
