import { Box, Button, Center, Divider, Flex, GridItem, Heading, Icon,IconButton,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";

import roiImg from "../../Invest imgs/roi.jpg";
import snarttwobhk from "../../Invest imgs/INTRO1.jpg";

const OurInvestors=()=>{
    const redirectAreteInvest =(loc) =>{
        window.localStorage.setItem('areteInvest',true)
        window.location.replace(`${loc.target.id}`);
      }
    const redirect =(loc) =>{
        window.location.replace(`${loc.target.id}`);
      }
    const [slider, setSlider] = useState(null);

    const settings = {
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
    };
    return(<><Flex
        overflow="hidden"
        w="100%"
        h="100%"
        py="3.125rem"
        direction="column"
        align="center"
      >
        <Text fontFamily="goudy" px="1rem" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          OUR INVESTORS
        </Text>
        {/* carousel */}
        <Box
        alignSelf="center"
        className="expandcar reveal"
        position={"relative"}
        height={"100%"}
        width={"100%"}
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
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Flex px="1rem" align="center" justify="center" pos="relative" h="18.75rem" w="100%">
          <embed
            style={{height:"18.75rem",width:"100%"}}
            src={"https://www.youtube.com/embed/SP4Emn7CRJ4"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </embed>
          </Flex>
          <Flex px="1rem" align="center" justify="center" pos="relative" h="18.75rem" w="100%">
          <embed
            style={{height:"18.75rem",width:"100%"}}
            src={"https://www.youtube.com/embed/GB-_iFNmVwo"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </embed>
          </Flex>
          <Flex px="1rem" align="center" justify="center" pos="relative" h="18.75rem" w="100%">
          <embed
            style={{height:"18.75rem",width:"100%"}}
            src={"https://www.youtube.com/embed/1vfQI3QG-Zs"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </embed>
          </Flex>
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
              border="3px solid"
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
              border="3px solid"
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
            <Flex w="100%" overflow="hidden">
            <Text textAlign="center" fontFamily="goudy" fontSize="2.5rem" mt="3.125rem" className="slidein-top revealOnce">
              INVEST IN RENT GENERATING ASSETS
            </Text>
            </Flex>
          <Flex direction="column" mt="1.875rem" px="1rem" gap="2rem">
          <Flex boxShadow="2xl" px="1rem" py="1.875rem" w="100%" h="100%" direction="column" align="center" className="fadein revealOnce" bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
          <Text textAlign="center" fontFamily="goudy" fontSize="1.5rem" pb="1.563rem">
            8% ROI ON ARETE HOMES
          </Text>
          <Flex direction="column" w="100%" h="100%" gap="1.875rem" justify="center" align="center">
            <Image className="expandcar revealOnce"  w="100%" h="150px" src={roiImg} />
            <Flex
              w="100%"
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading textAlign="center" fontSize="1.25rem" pb="0.938rem">
                2 BHK - 1025 SQFT.
              </Heading>
              <Flex w="100%">
                <Flex direction="column">
                <Heading fontSize="1.25rem">₹52 LAKHS</Heading>
                              <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
                                Fully Furnished With White Goods
                              </Text>
                </Flex>
                <Flex direction="column">
              <Heading fontSize="1.25rem">₹32,000</Heading>
                            <Text
                              fontFamily="veralaRound"
                              fontSize="1rem"
                            >
                              Rental Income Per Month
                            </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Button
            alignSelf="center"
            w="fit-content"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            mr="0.625rem"
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            fontWeight="bold"
            id="/arete-homes-invest"
            onClick={(e)=>redirectAreteInvest(e)}
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            VIEW DETAILS
          </Button>
        </Flex>
        <Flex boxShadow="2xl" mt="2rem"px="1rem" py="1.875rem" w="100%" h="100%" direction="column" align="center" className="fadein revealOnce" bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
          <Text textAlign="center" fontFamily="goudy" fontSize="1.5rem" pb="1.563rem">
            7% ROI ON SKY HIGH TOWER
          </Text>
          <Flex direction="column" w="100%" h="100%" gap="1.875rem" justify="center" align="center">
            <Image className="expandcar revealOnce"  w="100%" h="150px" src={snarttwobhk} />
            <Flex
              w="100%"
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading textAlign="center" fontSize="1.25rem" pb="0.938rem">
                2 BHK - 690 SQFT.
              </Heading>
              <Flex w="100%">
                <Flex direction="column">
                <Heading fontSize="1.25rem">₹34 LAKHS</Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
                Fully Furnished With White Goods
              </Text>
                </Flex>
                <Flex direction="column">
                <Heading fontSize="1.25rem">₹20,000</Heading>
              <Text
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Rental Income Per Month
              </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Button
            alignSelf="center"
            w="fit-content"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            mr="0.625rem"
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            fontWeight="bold"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            id="/sky-high-invest"
            onClick={(e)=>redirect(e)}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            VIEW DETAILS
          </Button>
        </Flex>
        </Flex>
      </Flex>
      </>);
}
export default OurInvestors;