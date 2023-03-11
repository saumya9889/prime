import { Box, Center, Divider, Flex, Heading, Icon,IconButton,Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

import client1 from "./intro.jpeg"
import client2 from "./punit-chopraa.jpg"
import { useInView } from "framer-motion";


const client = [
    { id: 1, img: client1, clientName:"Board of Directors of Larsen & Tourbo and Infosys", },
    { id: 2, img: client2, clientName:"Board of Directors of Larsen & Tourbo and Carnival", },
];

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
        <Flex mt="1rem" px="1rem" w="100%" direction="column" className="about-whowe-wrapper">
      <Flex w="100%" direction="column" pt="2.5rem">
        <Flex w="100%" direction="column" pos="relative" pb="3.125rem">
            <Flex mt="-7rem" pt="1rem" direction="column" className="fadein-2sdelay revealOnce" w="100%" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")' boxShadow="2xl"
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">    
        <Text zIndex="5" bgColor="inherit" mt="-1.875rem" pt="3rem" textAlign="center" pb="1.563rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="1.5rem">HIGHER RENTALS IN RESIDENTIAL PROPERTIES</Text>
        <Flex direction="column" w="100%" overflow="hidden">
        
            <Flex direction="column" w="100%">
            <Heading textAlign="center" fontFamily="avenir" pb="1.563rem" fontSize="1.25rem" className="fadein-2sdelay revealOnce">CHENNAI’S HIGHEST 
            RENTAL <br/> INCOME PROPERTY</Heading>
            <Text textAlign="center" pb="1.563rem" pr="1rem" pl="1rem" fontFamily="varela round" fontSize="1rem" className="fadein-2sdelay revealOnce">The real estate sector around the world functions on the principle that the rental value of the property determines the end value or purchase value of the property. In countries like Dubai Rental Rates varies from 4 to 6%, UK, Singapore Rental Rates are 2 to 3% of the property value. The FD rates in these countries are ± 1% of rental return. But in India the residential sector fetches rental returns of just 2% of the property value as compared to FD rates which are around 6%.
              <br/><br/>
              <Heading fontSize="1.125rem" pr="1rem" pl="1rem" pb="1.563rem">This huge gap has now been filled with Assured Rental Yields in ‘Arete Homes’ A smart integrated township that gives up to 7-8% rental return which is higher than current FD rates. Making investments in the Residential sector is more fruitful than ever. Also, the home loan interest rates are at its lowest of 6.7% and Prime LifeSpace properties are earning a rental income higher than the EMI amount.
            </Heading>
            </Text>
            </Flex>
            </Flex>
            </Flex>
            </Flex>
            
        <Box
        position={"relative"}
        overflow={"hidden"}
        w="100%"
        
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
            <Flex
              w="100%"
            direction="column"
            align="center"
            justify="center"
            >
            <Image
              className="expandcar reveal"
              w="100%"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={client[0].img}
              
            />
            </Flex>
      </Box>
        </Flex>
        </Flex>
    </>); 
}
export default Ourclients;
  