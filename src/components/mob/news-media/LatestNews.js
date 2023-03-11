import {
  Flex,
  Text,
  Box,
  useBreakpointValue,
  IconButton,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import { useInView } from "framer-motion";
// images
import hindu from "../../news-and-media/THE-HINDU.png";
import news2 from "../../news-and-media/NEWS2.jpg";
import news4 from "../../news-and-media/NEWS4.jpg";
import businessStd from "../../news-and-media/BUSINESS-STANDARD.png";
import news7 from "../../news-and-media/NEWS7.jpg";
import news8 from "../../news-and-media/NEWS8.jpg";
import news9 from "../../news-and-media/NEWS9.jpg";
import news10 from "../../news-and-media/NEWS10.jpg";
import ModalImage from "../../modalImage";
const primeReport = [
  {
    type:'link',
    img: hindu,
    text: "INVESTING IN NORTH CHENNAI : WHAT YOU DIDN’T KNOW",
    location:"https://www.thehindu.com/real-estate/investing-in-north-chennai-what-you-didnt-know/article22021305.ece"
  },
  {
    img: news2,
    text: "NORTH CHENNAI : YOUR BEST BET",
    location: "news2"
  },
  {
    type:'link',
    img: hindu,
    text: "CHENNAI PERIPHERAL RING ROAD WORK GETS A BOOST",
    location:"https://www.thehindu.com/news/cities/chennai/peripheral-ring-road-work-gets-a-boost/article29719879.ece"
  },
  {
    img: news4,
    text: "NORTH CHENNAI - TURNING TO WORLD CLASS ECONOMIC ZONE",
    location: "news4"
  },
  {
    type:'link',
    img: businessStd,
    text: "TATA PROJECTS WINS RS 2,100 CR CHENNAI PERIPHERAL RING ROAD PROJECT PHASE-1",
    location:"https://www.business-standard.com/article/companies/tata-projects-wins-rs-2-100-cr-chennai-peripheral-ring-road-project-phase-1-121092700779_1.html"
  },
  {
    type:'link',
    img: hindu,
    text: "RS. 13,314 CRORE INFRASTRUCTURE UPGRADE FOR PONNERI",
    location:"https://www.thehindubusinessline.com/news/national/13314crore-infrastructure-upgrade-for-ponneri/article7703205.ece"
  },
  {
    img: news7,
    text: "PONNERI TO DEVELOP AS A MEGA ENGINEERING HUB",
    location: "news7"
  },
  {
    img: news8,
    text: "PONNERI - THE ULTIMATE REAL ESTATE DESTINATION OF NORTH CHENNAI",
    location: "news8"
  },
  {
    img: news9,
    text: "INDUSTRIAL PARKS ON AN UPSWING",
    location: "news9"
  },
  {
    img: news10,
    text: "POURING INVESTMENTS IN NORTH CHENNAI",
    location: "news10"
  },
];
const FifthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const settings = {
    centerMode: true,
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const settings2 = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);

  // const top = useBreakpointValue({ base: "90%", md: "50%" });
  // const side = useBreakpointValue({ base: "30%", md: "40px" });
  const [isOpen,setIsOpen] = useState(false);
  const [modalImage,setModalImage]=useState()
  const closeImage =() =>{
    setIsOpen(false);
  }
  const openImage =(data) =>{
    let image=primeReport.filter(report=>report.location===data.target.id);
    setModalImage(image[0].img)
    setIsOpen(true);
  }
  const redirect =(loc) =>{
    window.open(`${loc.target.id}`);
  }
  return (
    <>
      {isOpen?<ModalImage size="xl" modalImage={modalImage} isOpen={isOpen} onClose={()=>closeImage()} />:<></>}
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      mt="3.125rem"
      mb="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
      >
        LATEST NEWS
      </Text>
      <Box
        transform={isInView ? "translateY(0)" : "translateY(100px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        position={"relative"}
        height={"18.75rem"}
        width={"full"}
        mt="1.875rem"
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
          {primeReport.map((prime, index) => (
            <Box
              key={index}
              w="100%"
              px="0.312rem"
              height="18.75rem"
              position="relative"
            >
              <Image
                id={prime.location}
                _hover={{cursor:"pointer"}}
                onClick={prime.type==="link"?(prime)=>redirect(prime):(data)=>openImage(data)}
                w="100%"
                h="18.75rem"
                src={prime.img}
                // objectFit="contain"
                objectFit="cover"
                objectPosition="center top"
              />
              <Flex
                boxShadow="Dark-lg"
                spacing={6}
                w={"90%"}
                h="9.375rem"
                position="absolute"
                right="0"
                bottom="-6rem"
                mr="0.937rem"
                bgGradient="linear(to-b, #B88746, #DFBD69)"
                transform="translate(0, -50%)"
              >
                <Text
                  fontSize={{ base: "md", lg: "1.25rem" }}
                  fontWeight="bold"
                  fontFamily="avenir"
                  color="white"
                  p="1.562rem"
                >
                  {prime.text}
                </Text>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
    </>
  );
};
export default FifthSec;


