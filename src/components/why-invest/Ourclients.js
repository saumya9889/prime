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
        <Flex w="100%" ref={ref} direction="column" h="100%" px="100px" pt="3.125rem" pb="1.875rem" mb="5rem" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover" overflow="hidden">
        <Center pb="1.875rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem" overflow="hidden">HIGHER RENTALS IN RESIDENTIAL PROPERTIES</Center>
        <Flex w="100%" overflow="hidden">
        <Box
        position={"relative"}
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
            <Flex
              w="100%"
            direction="column"
            align="center"
            justify="center" 
            >
            <Image
              className="expandcar reveal"
              w="100%"
              height="30rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"
              src={client[0].img}
              overflow="visible"
              marginRight="1.6rem"
            />
            </Flex>
      </Box>
      <Flex
            className="slidein-top reveal"
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 2, type: "just" }}
            direction="column"
            align="center"
            px="1.563rem"
            overflow="hidden"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="3.5rem"
             
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
            <Flex direction="column" w="50%" overflow="hidden">
            <Heading pt="4rem" fontFamily="avenir" overflow="hidden" pb="1rem" fontSize="1.5rem" className="fadein-2sdelay revealOnce">CHENNAI’S HIGHEST 
            RENTAL INCOME PROPERTY</Heading>
            <Text fontFamily="varela round" fontSize="1rem" className="fadein-2sdelay revealOnce">The real estate sector around the world functions on the principle that the rental value of the property determines the end value or purchase value of the property. In countries like Dubai Rental Rates varies from 4 to 6%, UK, Singapore Rental Rates are 2 to 3% of the property value. The FD rates in these countries are ± 1% of rental return. But in India the residential sector fetches rental returns of just 2% of the property value as compared to FD rates which are around 6%.
              <br/>
              <br/>
              <Heading fontSize="1.125rem">This huge gap has now been filled with Assured Rental Yields in ‘Arete Homes’ A smart integrated township that gives up to 7-8% rental return which is higher than current FD rates. Making investments in the Residential sector is more fruitful than ever. Also, the home loan interest rates are at its lowest of 6.7% and Prime LifeSpace properties are earning a rental income higher than the EMI amount.
            </Heading>
            </Text>
            </Flex>
        </Flex>
        </Flex>
    </>); 
}
export default Ourclients;
  