import { Flex, Text, Box, IconButton, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import { useInView } from "framer-motion";
import press1 from "../news-and-media/PRESS-RELEASE1.PNG";
import press2 from "../news-and-media/PRESS RELEASE2.png";
import press3 from "../news-and-media/PRESS-RELEASE3.PNG";
import press4 from "../news-and-media/PRESS-RELEASE4.PNG";
import press5 from "../news-and-media/PRESS-RELEASE5.PNG";
import press6 from "../news-and-media/PRESS-RELEASE6.png";
import ModalImage from "../modalImage";
import release1 from "../news-and-media/press/PRESS RELEASE1.pdf"
import release2 from "../news-and-media/press/PRESS RELEASE 2.pdf"
import release3 from "../news-and-media/press/PRESS RELEASE3.pdf"
import release4 from "../news-and-media/press/PRESS RELEASE4.pdf"
import release5 from "../news-and-media/press/PRESS RELEASE 5.pdf"
import release6 from "../news-and-media/press/PRESS RELEASE6.pdf";

const SecondSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(33.333);
  const settings = {
    draggable: false,
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
  const [isOpen,setIsOpen] = useState(false);
  const closeImage =() =>{
    setIsOpen(false);
  }
  const openImage =() =>{
    setIsOpen(true);
  }
  const redirect =(release) =>{
    window.open(`${release.target.id}`);
  }
  return (
    <>
      {isOpen?<ModalImage size="xl" modalImage={press6} isOpen={isOpen} onClose={()=>closeImage()} />:<></>}
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1.563rem"
      pt="5rem"
      direction="column"
      align="center"
      justify="center"
    >
      
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
      >
        PRESS RELEASE
      </Text>
      <Box
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        mt="1.875rem"
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
         <IconButton
          aria-label="left-arrow"
          variant="outline"
          position="absolute"
          borderRadius="50%"
          border="2px solid"
          // left={side}
          // top={top}
          left="0"
          top="40%"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          h="3.125rem"
          w="3.125rem"
          borderColor="#B88746"
          _hover={{ bgColor: "none" }}
          onClick={() => slider?.slickPrev()}
        >
          <AiOutlineLeft size="1.875rem" color="#B88746" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="outline"
          position="absolute"
          borderRadius="50%"
          // right={side}
          // top={top}
          right="0"
          border="2px solid"
          top="40%"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          h="3.125rem"
          w="3.125rem"
          borderColor="#B88746"
          _hover={{ bgColor: "none" }}
          onClick={() => slider?.slickNext()}
        >
          <AiOutlineRight size="1.875rem" color="#B88746" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {pressRelease.map((prime, index) => (
            <Flex px="0.625rem" key={index}>
              <Image
                _hover={{cursor:"pointer"}}
                id={prime.location}
                onClick={prime.title===""?()=>openImage():(prime)=>redirect(prime)}
                boxShadow="2px 4px 6px rgba(0,0,0, .2)"
                key={prime}
                w="100%"
                h="18.75rem"
                position="relative"
                objectPosition="center top"
                backgroundRepeat="no-repeat"
                objectFit="cover"
                src={prime.img}
                
              />
              <Flex pt="1.562rem" pb="3.125rem" w="100%" align="center" justify="space-between">
                <Text fontFamily="avenir" fontWeight="bold" fontSize="1.5rem">
                  {prime.title}
                </Text>
                <Text fontFamily="veralaRound" fontSize="1.25rem">
                  {prime.date}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
      
    </Flex>
    </>
  );
};

export default SecondSec;

const ImgBar = ({ slide }) => {
  let barFillWidth = "0%";
  if (slide > 0) {
    barFillWidth = slide + slide + "%";
  }

  return (
    <Flex
      ml="1"
      mr="1"
      w="6.25rem"
      h="0.312rem"
      borderRadius="0.937rem"
      align="center"
      justify="flex-start"
    >
      <Flex
        borderRadius="25px"
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

const pressRelease = [
  {
    title: "DECCAN CHRONICLE",
    date: "29 AUG 2022",
    img: press1,
    location: release1
  },
  {
    title: "DECCAN CHRONICLE",
    date: "18 SEPT 2022",
    img: press2,
    location: release2
  },
  {
    title: "THE ECONOMIC TIMES",
    date: "26 JULY 2021",
    img: press3,
    location: release3
  },
  {
    title: "THE ECONOMIC TIMES",
    date: "26 MARCH 2021",
    img: press4,
    location: release4
  },
  {
    title: "NARDECO",
    date: "JULY 2021",
    img: press5,
    location: release5
  },
  {
    title: "TIMES REALTY MAGZINE",
    date: "2018",
    img: press6,
    location: release6
  },
];
