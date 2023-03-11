import { Flex, Text, Divider, Box, Heading, IconButton } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import "./nm.css"
const FourthSec = () => {
  
  const videos=[{source:"https://www.youtube.com/embed/Psmw1t_S6-c"},{source:"https://www.youtube.com/embed/Psmw1t_S6-c"},{source:"https://www.youtube.com/embed/Psmw1t_S6-c"},{source:"https://www.youtube.com/embed/Psmw1t_S6-c"},{source:"https://www.youtube.com/embed/Psmw1t_S6-c"}]
  const [vid,setVid] = useState({id:"0",src:videos[0].source});
  const [discoHeight,setDiscoHeight] = useState("1.8");
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);
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
  const changeVid=(e)=>{
    //console.log(e.ta);
    document.getElementById(`${vid.id}`).classList.remove("bold");
    const id = e.target.id;
    document.getElementById(`${id}`).classList.add("bold");
    setVid({id:String(id),src:videos[id].source});
    switch(e.target.id){
    case "0":
      setDiscoHeight("1.8")
      break;
    case "1":
      setDiscoHeight("6.563")
      break;
    case "2":
      setDiscoHeight("15.5")
      break;
    case "3":
      setDiscoHeight("20.5")
      break;
    case "4":
      setDiscoHeight("25")
      break;
    default:
      break;
    }
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if(isInView===true){
      setTimeout(() => {
        document.getElementById("0").click();
      }, 2000);
      setTimeout(() => {
        document.getElementById("1").click();
      }, 4000);
      setTimeout(() => {
        document.getElementById("2").click();
      }, 6000);
      setTimeout(() => {
        document.getElementById("3").click();
      }, 8000);
      setTimeout(() => {
        document.getElementById("4").click();
      }, 10000);
    }
    return()=>{
      clearTimeout();
    }
},[isInView]);
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1rem"
      pt="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      {" "}
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
      >
        PRIME TALKS
      </Text>
      <Flex direction="column" w="100%" h="100%" align="flex-start" justify="flex-start" pt="1.875rem">
        <Flex
          
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          w="100%"
          h="100%"
          flex="3"
          mr="1.562rem"
          direction="column"
        >
          <Box
          position={"relative"}
          height={"100%"}
          width={"full"}
          overflow={"hidden"}
          alignContent="center"
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
            <Flex direction="column">
              <Flex boxShadow="2px 4px 6px rgba(0,0,0, .2)" h="18.75rem" w="100%">
              <embed
                height="100%"
                width="100%"
                src={"https://www.youtube.com/embed/Psmw1t_S6-c"}
                title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></embed>
              </Flex>
              <Heading pt="1rem" textAlign="center" fontFamily="varela round" fontSize="1.125rem">
              Best Realty Brand 2021 The Economic Times
          </Heading>
            </Flex>
        <Flex direction="column">
          <Flex boxShadow="2px 4px 6px rgba(0,0,0, .2)" h="18.75rem" w="100%">
          <embed
            height="100%"
            width="100%"
            src={"https://www.youtube.com/embed/q3mTlDmEPlA"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
          </Flex>
          <Heading pt="1rem" textAlign="center" fontFamily="varela round" fontSize="1.125rem">
          The Future Of Real Estate
          </Heading>
          </Flex>
          <Flex direction="column">
          <Flex boxShadow="2px 4px 6px rgba(0,0,0, .2)" h="18.75rem" w="100%">
          <embed
            height="100%"
            width="100%"
            src={"https://www.youtube.com/embed/y_cXovtyWlM"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
          </Flex>
          <Heading pt="1rem" textAlign="center" fontFamily="varela round" fontSize="1.125rem">
          Best Real Estate Investment 8% Guaranteed Rental Return At Arete
              Homes
          </Heading>
          </Flex>
          <Flex direction="column">
          <Flex boxShadow="2px 4px 6px rgba(0,0,0, .2)" h="18.75rem" w="100%">
          <embed
            height="100%"
            width="100%"
            src={"https://www.youtube.com/embed/fmLJwumDI20"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
          </Flex>
          <Heading pt="1rem" textAlign="center" fontFamily="varela round" fontSize="1.125rem">
          Sky High Tower Launch Event
          </Heading>
          </Flex>
          </Slider>
          <Flex h="3.125rem" mt="1rem" pos="relative">
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
        </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;
