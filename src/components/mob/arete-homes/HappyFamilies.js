import { Flex, Box, Text, Icon, IconButton } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { useInView } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import vid1 from "./vid1.mp4"
import vid2 from "./vid2.mp4"
import vid3 from "./vid3.mp4"
import vid4 from "./vid4.mp4"


const LastSec = () => {
  const [slider, setSlider] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  const settings2 = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1rem"
      mt="3.125rem"
      pt="1.875rem"
      pb="3.125rem"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        textAlign="center"
        mb="1.875rem"
      >
        200+ HAPPY FAMILIES & COUNTING...
      </Text>
      <Box
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
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
        {/* Slider */}{" "}
        <Icon
          pos="absolute"
          left="-0.5%"
          top="0"
          w="4.375rem"
          h="3.125rem"
          as={ImQuotesLeft}
          color="#DFBD69"
        />
        <Icon
          mr="4"
          color="#DFBD69"
          pos="absolute"
          right="-1rem"
          bottom="10%"
          zIndex="10"
          w="4.375rem"
          h="3.125rem"
          as={ImQuotesRight}
        />
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {testimonial.map((prime) => (
            <Flex w="100%" direction="row">
              <Flex w="100%" pos="relative">
                <Flex
                  direction="column"
                  w="100%"
                  fontFamily="veralaRound"
                  mt="3.125rem"
                >
                  <Text textAlign="center" fontSize="1rem" pb="0.938rem">
                    {prime.text}
                  </Text>
                  <Text textAlign="center" fontSize="1rem">{prime.title}</Text>
                  <Text textAlign="center" fontSize="1rem" textTransform="uppercase">
                    {prime.subTitle}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
      <Box
        mt="1rem"
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
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
        <link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
        <Slider {...settings2} ref={(slider) => setSlider(slider)}>
          {vids.map((prime) => (
            <video
            width="100%"
            height="100%"
            controls
            crossOrigin="use-credentials"
            src={prime.src} />
          ))}
        </Slider>
      </Box>
      <Flex w="100%" h="3.125rem" mt="1rem" pos="relative">
          <IconButton
              h="3.125rem"
              w="3.125rem"
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#B88746"
              borderWidth="2px"
              borderRadius="full"
              bottom="-5"
              right="30%"
              // transform={"translateX(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <AiOutlineRight color="#B88746" size="2.5rem" />
            </IconButton>
            <IconButton
              h="3.125rem"
              w="3.125rem"
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#B88746"
              borderWidth="2px"
              bottom="-5"
              left="30%"
              // transform={"translate(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
               <AiOutlineLeft color="#B88746" size="2.5rem" />
            </IconButton>
            </Flex>
    </Flex>
  );
};

export default LastSec;
const vids=[{src:vid1,},{src:vid2,},{src:vid3,},{src:vid4,},];
const testimonial = [
  {
    text: "A wonderful project and well-designed especially for sports lovers, Arete homes covers the need of all type of people from Childers to adults also old age people, It fulfilled all requirements of a common man, Fantastically designed & developed sport arena, security, parking facilities, power backup enough space between each blocks, drainage & treatment system, entertainment zones, meditation center, groceries, fitness gym, etc. Excellent club house facilities for great relaxation. Overall Arete homes give us a PEACE OF MIND.",
    title: "MR. SADAGOPAN SATHISH ",
    subTitle: "TOWER A5-808",
  },
  {
    text: "We own a 2BHK lifestyle apartment at Arete homes, a luxury project by Prime Lifespace at Ponneri. The apartment worth every penny and the construction quality is very good. The through bred professional marketing team of Arete homes was very helpful in not only securing home loan but also assisting us throughout the home buying till the end. The ethical work of Arete homes that timely delivery has impressed us immensely. I will surely recommend prospective home buyer to buy homes at Arete homes.",
    title: "MR. MOHAMMED ASATHULLAH",
    subTitle: "TOWER A3-608",
  },
  {
    text: "I feel happy to be a part of Arete Homes. A best project in a beautiful environment but still at an affordable rate in north chennai. I appreciate the team Arete for their wonderful work very professional proficient and easy to approach.",
    title: "MR. BINDU DILIP ",
    subTitle: "TOWER A5-702",
  },
  {
    text: "We had visited the Arete Township and are very much impressed by the development being implemented to make living a great experience. the dren planned on top of parking. Spaces for conducting functions and above all a unique meditation hall.",
    title: "MR. NILAKANTAN  ",
    subTitle: "TOWER A3-407 & 408",
  },
  {
    text: "I have been associated with this locality from my childhood, and I must say that I am really elated to see this area develop. This is the 1st township of Ponneri and the quality of the project beyond excellence, combined this with the upcoming future developments this is the best investment destination of Chennai. The customer service provided by the Arete team is warm and welcoming. Really can’t wait to start living here!",
    title: "MR. THIYAGARAJAN ",
    subTitle: "TOWER A3-107",
  },
  {
    text: "I am really satisfied that I have purchased an apartment in this area. The general mindset that north Chennai is not a good investment is false as this area is seeing Huge development and Arete Homes is at the center of all these developments. There is excellent connectivity in terms of NH -5 which connects to Andhra Pradesh, Outer Ring Road which connects to Airport and south Chennai , and the suburban Railway station which connects to all parts of Chennai . I am sure once this project is completed it will of Chennai. I am sure once this project is completed it will be landmark for ponneri and we all stand tall with pride !",
    title: "MR. KARTHIKEYAN ",
    subTitle: "TOWER A7- 1116 & 1117",
  },
  
  {
    text: "I am glad and proud to be the part of one of the finest project - ARETE HOMES from Prime Lifespace. Finding a home that meets the expectation of all the family was never been possible and my struggle just ended fine once we visited Arete homes. The strategic location, transparency & prompt response from the builder at various stages, quality of construction and accessories used are the key highlights of Arete homes. I am very much happy and satisfied that I invested in Arete Homes.",
    title: "MR. MADHAN.K",
    subTitle: "TOWER A4-207",
  },
 {
    text: "We just want to take a moment to express how delighted we are to own at Arete Homes in Ponneri. The apartment is custom designed to meet our needs and lifestyle. And Arete Homes succeeded admirable in meeting that goal. What impressed us is their flexibility in making changes to our plans and were always courteous when we made requests. The finish and workmanship of the construction are very good. Thank you, Mr. Suresh Kumar and Arete Homes.",
    title: "MR. G.KANNAN",
    subTitle: "TOWER A4-105",
  },
];
