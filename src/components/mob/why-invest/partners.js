import { Box, Center, Divider, Flex, Heading, Icon,IconButton,Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
       centerMode:true,
       speed: 500,
       autoplaySpeed: 3000,
       slidesToShow: 1,
       slidesToScroll: 1,
       pauseOnHover: false,
     };
   
     return (
        <Flex direction="column" overflow="hidden">
        <Center px="1rem" mt="3.125rem" pb="1.875rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem">OUR TENANTS</Center>
       <Box
         position={"relative"}
         h="8rem"
         w="100vw"
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
       </Flex>
     );
   };
   export default LogoSlider;