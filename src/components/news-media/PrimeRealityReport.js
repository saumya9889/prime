import {
  Flex,
  Text,
  Box,
  Divider,
  IconButton,
  Image,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import { useInView } from "framer-motion";

import oct2022 from "../news-and-media/PRIME-REALTY-REPORT/OCTOBER  2022.jpg";
import aug2022 from "../news-and-media/PRIME-REALTY-REPORT/AUGUST 2022.PNG";
//import feb2020 from "../news-and-media/PRIME-REALTY-REPORT/February 2020.PNG";
import jan2020 from "../news-and-media/PRIME-REALTY-REPORT/JANUARY NEWSLETTER 2020.PNG";
import april2019 from "../news-and-media/PRIME-REALTY-REPORT/APRIL 2019.PNG";
import may2019 from "../news-and-media/PRIME-REALTY-REPORT/MAY 2019.PNG";
import june2019 from "../news-and-media/PRIME-REALTY-REPORT/JUNE 2019.PNG";
import july2019 from "../news-and-media/PRIME-REALTY-REPORT/JULY 2019.PNG";
import spet2019 from "../news-and-media/PRIME-REALTY-REPORT/SEPTEMBER 2019.PNG";
import oct2019 from "../news-and-media/PRIME-REALTY-REPORT/OCTOBER 2019.PNG";
import nov2019 from "../news-and-media/PRIME-REALTY-REPORT/NOVEMBER 2019.PNG";
import dec2019 from "../news-and-media/PRIME-REALTY-REPORT/DECEMBER 2019.PNG";
import pdfOct2022 from "../news-and-media/PRIME-REALTY-REPORT/OCTOBER 2022.pdf";
import pdfAug2022 from "../news-and-media/PRIME-REALTY-REPORT/august 2022.pdf";
//import pdfFeb2022 from "../news-and-media/press/"
import pdfJan2020 from "../news-and-media/PRIME-REALTY-REPORT/january 2020.pdf";
import pdfApr2019 from "../news-and-media/PRIME-REALTY-REPORT/april 2019.pdf";
import pdfMay2019 from "../news-and-media/PRIME-REALTY-REPORT/may 2019.pdf";
import pdfJun2019 from "../news-and-media/PRIME-REALTY-REPORT/june 2019.pdf";
import pdfJul2019 from "../news-and-media/PRIME-REALTY-REPORT/july 2019.pdf";
import pdfSep2019 from "../news-and-media/PRIME-REALTY-REPORT/september 2019.pdf";
import pdfOct2019 from "../news-and-media/PRIME-REALTY-REPORT/october 2019.pdf";
import pdfNov2019 from "../news-and-media/PRIME-REALTY-REPORT/november 2019.pdf";
import pdfDec2019 from "../news-and-media/PRIME-REALTY-REPORT/december 2019.pdf";
const LastSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);
  const settings = {
    draggable: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const redirect =(loc) =>{
    console.log(loc.target.id)
    window.open(`${loc.target.id}`);
  }

  console.log(primeReport)
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      pt="1.875rem"
      px="6.25rem"
      pb="5rem"
      align="center"
      justify="center"
      pos="relative"
      overflow="hidden"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
        pb="1.875rem"
      >
        PRIME REALTY REPORT
      </Text>
      <Box
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
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {primeReport.map((prime,index) => (
            <Flex w="100%" h="100%" align="center" pos="relative" key={index}>
              <Flex w="50%" h="100%">
                <Flex w="100%">
                  <Image
                    _hover={{cursor:"pointer"}} id={prime.location?prime.location:"no ID"} onClick={prime.location?(prime)=>redirect(prime):()=>console.log("no content")}
                    boxShadow="2px 4px 6px rgba(0,0,0, .2)"
                    key={index}
                    w="100%"
                    height="25rem"
                    // position="relative"
                    objectFit="cover"
                    src={prime.img}
                  />
                </Flex>
                <Flex
                  transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                  transition="all 2s 2s"
                  h="100%"
                  direction="column"
                  justify="flex-start"
                  align="center"
                  px="1.562rem"
                >
                  <Divider
                    h="9.375rem"
                    orientation="vertical"
                    border="3px solid"
                    borderColor="#DFBD69"
                    bgColor="#DFBD69"
                  />
                  <Box
                    height="1.875rem"
                    width="1.875rem"
                    backgroundColor="#DFBD69"
                    border="3px solid white"
                    boxShadow="0px 0px 0px 3px #B88746"
                    borderRadius="50%"
                    my="1"
                  />
                </Flex>
              </Flex>
              <Flex
                pos="absolute"
                right="0"
                top="39%"
                w="50%"
                h="100%"
                direction="column"
                justify="flex-end"
              >
                <Flex
                  transition="all 2s 2s"
                  w="100%"
                  h="100%"
                  justify="space-between"
                >
                  <Flex direction="column" w="100%" h="100%">
                    <Heading fontFamily="avenir" fontSize="2.125rem">
                      {prime.month}
                    </Heading>
                    <Text fontFamily="veralaRound" fontSize="1.25rem">
                      Company Newsletter
                    </Text>
                    <Text _hover={{cursor:"pointer"}} id={prime.location?prime.location:"no ID"} onClick={prime.location?(prime)=>redirect(prime):()=>console.log("no content")} fontFamily="veralaRound" fontSize="1.25rem">
                      READ NOW
                    </Text>
                  </Flex>
                  <Flex direction="column" textAlign="right" w="100%" h="100%">
                    <Heading fontFamily="avenir" fontSize="1.25rem" mt="0.7rem" pb="0.625rem">
                    {prime.month==="APRIL 2019"?<>NEXT</>:<>PREVIOUS</>} NEWSLETTER
                    </Heading>
                    <Heading fontFamily="avenir" fontSize="1.5rem">
                      {prime.prevmonth}
                    </Heading>
                  </Flex>
                </Flex>
              </Flex>
              <IconButton
                transition="all 2s 2s"
                pos="absolute"
                aria-label="left-arrow"
                variant="outline"
                borderColor="#B88746"
                border="2px solid"
                borderRadius="full"
                // position="absolute"
                bottom="0"
                right="5%"
                transform={"translateX(-50%)"}
                mx="0.312rem"
                zIndex={2}
                onClick={() => {
                  slider?.slickPrev();
                }}
              >
                <AiOutlineLeft color="#B88746" size="1.875rem" />
              </IconButton>
              {/* Right Icon */}
              <IconButton
                transition="all 2s 2s"
                pos="absolute"
                aria-label="right-arrow"
                borderRadius="full"
                variant="outline"
                borderColor={prime.month==="APRIL 2019"?"grey":"#B88746"}
                border="2px solid"
                // position="absolute"
                // right={side}
                // top={top}
                bottom="0"
                right="0"
                // transform={"translate(0%, -50%)"}
                mx="0.312rem"
                zIndex={2}
                onClick={prime.month==="APRIL 2019"?() => {
                  slider?.slickNext();
                }:()=>{}}
              >
                <AiOutlineRight color={prime.month==="APRIL 2019"?"grey":"#B88746"} size="1.875rem" />
              </IconButton>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

export default LastSec;
const primeReport = [
  {
    img: oct2022,
    month: "OCTOBER 2022",
    prevmonth: "AUGUST 2022",
    location:pdfOct2022,
  },
  {
    img: aug2022,
    month: "AUGUST 2022",
    prevmonth: "FEBRUARY 2020",
    location:pdfAug2022,
  },
  {
    img: "/images/news-and-media/PRIME-REALTY-REPORT/FEBRUARY 2020.PNG",
    month: "FEBRUARY 2020",
    prevmonth: "JANUARY 2020",
    location:null,
  },
  {
    img: jan2020,
    month: "JANUARY 2020",
    prevmonth: "DECEMBER 2019",
    location:pdfJan2020,
  },
  {
    img: dec2019,
    month: "DECEMBER 2019",
    prevmonth: "NOVEMBER 2019",
    location:pdfDec2019,
  },
  {
    img: nov2019,
    month: "NOVEMBER 2019",
    prevmonth: "OCTOBER 2019",
    location:pdfNov2019,
  },
  {
    img: oct2019,
    month: "OCTOBER 2019",
    prevmonth: "SEPTEMBER 2019",
    location:pdfOct2019,
  },  
  {
    img: spet2019,
    month: "SEPTEMBER 2019",
    prevmonth: "JULY 2019",
    location:pdfSep2019,
  },
  {
    img: july2019,
    month: "JULY 2019",
    prevmonth: "JUNE 2019",
    location:pdfJul2019,
  },
  {
    img: june2019,
    month: "JUNE 2019",
    prevmonth: "MAY 2019",
    location:pdfJun2019,
  },
  {
    img: may2019,
    month: "MAY 2019",
    prevmonth: "APRIL 2019",
    location:pdfMay2019,
  },
  {
    img: april2019,
    month: "APRIL 2019",
    prevmonth: "MAY 2019",
    location:pdfApr2019,
  },
];
