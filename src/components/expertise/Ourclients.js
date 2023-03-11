import { Box, Center, Divider, Flex, Heading, Icon,IconButton,Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import client1 from "./our clients1.jpeg"
import client2 from "./our clients2.jpeg"
import { useInView } from "framer-motion";

import ommetal from "./1.png";
import sharaf from "./2.png";
import lnt from "./3.png";
import raheja from "./4.png";
import sunteck from "./5.png";
import callison from "./6.png";
import omkar from "./7.png";
import wadhwa from "./8.png";
import ellora from "./9.png";
import hk from "./10.png";
import della from "./11.png";
import blackstone from "./12.png";

const client = [
    { id: 1, img: client1, clientName:"Board of Directors of Larsen & Tourbo and Infosys", },
    { id: 2, img: client2, clientName:"Board of Directors of Larsen & Tourbo and Carnival", },
];

const logos = [
   ommetal,
   sharaf,
   lnt,
   raheja,
   sunteck,
   callison,
   omkar,
   wadhwa,
   ellora,
   hk,
   della,
   blackstone
  ];
  
const LogoSlider = () => {
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
        mt="1rem"
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

const Ourclients =()=>{
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      setCurrentSlide(currentSlide++);
    },
  };
    return (<>
        <Flex w="100%" ref={ref} direction="column" h="100%"overflow="hidden"  px="100px" mb="5rem">
        <Heading textAlign="center" pb="3.125rem" className="slidein-top revealOnce" fontFamily="avenir" fontSize="2.125rem">OUR CLIENTS</Heading>
        <Flex w="100%" overflow="hidden">
        <Box
        className="expandcar revealOnce"
        position={"relative"}
        overflow={"hidden"}
        w="50%"
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
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {client.map((prime) => (
            <Flex
              w="100%"
             key={prime.id}
            direction="column"
            align="center"
            justify="center">
            <Image
              w="100%"
              height="26.875rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime.img}
            />
            <Text
                  textAlign="left"
                  fontFamily="varela Round"
                  fontSize="1.125rem"
                  py="1rem"
                >
                {prime.clientName}
              </Text>
            </Flex>
          ))}
        </Slider>
      </Box>
      <Flex
            className="slidein-top reveal"
            transition="all 2s 2s"
            direction="column"
            align="center"
            px="1.562rem"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="4.80rem"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </Flex>
            <Flex direction="column" w="50%">
            <Heading  mt="5.50rem" fontFamily="avenir" pb="1rem" fontSize="1.5rem" className="fadein revealOnce">“With our mantra : Analyze, Identify, Advise, Execute, we thrive on sharing the knowledge to help you make a success story”</Heading>
            <Text  fontFamily="varela round" fontSize="1rem" className="fadein revealOnce">A Civil Engineer and MBA with over 30 Years of 
            The team has excelled in providing deep expertise to biggest corporates like Blackstone for Chandigarh Elante Mall, Larsen & Toubro for Seawood Project, Sunteck for Naigaon Project etc. Also, the group has structured various eminent Joint Ventures, Mergers like L&T Ge Tech with Sharaf Foundation.
            </Text>
            </Flex>
        </Flex>
            <LogoSlider />
        </Flex>
    </>); 
}
export default Ourclients;
  