import { Box, Button, Center, Divider, Flex, GridItem, Heading, Icon,IconButton,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";

import roiImg from "../Invest imgs/roi.jpg";
import snarttwobhk from "../Invest imgs/INTRO1.jpg";

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
      centerMode:true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    };
    return(<><Flex
        overflow="hidden"
        w="100%"
        h="100%"
        mt="5rem"
        pb="3.125rem"
        direction="column"
        align="center"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          OUR INVESTORS
        </Text>
        {/* carousel */}
        <Box
        alignSelf="center"
        className="expandcar reveal"
        transition="all 2s 2s"
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
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          bottom="35%"
          left="5rem"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider.prev()
          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="5rem"
          bottom="35%"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            slider.next()
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Flex key={""} px="6.25rem" align="center" justify="center" pos="relative" h="25rem" w="600px">
          <embed
            style={{height:"25rem",width:"80%",alignSelf:"center",position:"absolute",left:"10%"}}
            src={"https://www.youtube.com/embed/SP4Emn7CRJ4"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </embed>
          </Flex>
          <Flex key={""} px="6.25rem" align="center" justify="center" pos="relative" h="25rem" w="600px">
          <embed
            style={{height:"25rem",width:"80%",alignSelf:"center",position:"absolute",left:"10%"}}
            src={"https://www.youtube.com/embed/GB-_iFNmVwo"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </embed>
          
          </Flex>
          <Flex key={""} px="6.25rem" align="center" justify="center" pos="relative" h="25rem" w="600px">
          <embed
            style={{height:"25rem",width:"80%",alignSelf:"center",position:"absolute",left:"10%"}}
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
          <Flex w="100%" mt="5rem" overflow="hidden">
            <Text w="100%" textAlign="center" fontFamily="goudy" fontSize="2.5rem" className="slidein-top revealOnce">
              INVEST IN RENT GENERATING ASSETS
            </Text>
          </Flex>
          <Flex mt="1.875rem" px="6.25rem" gap="2.2rem">
          <Flex boxShadow="2xl" px="1rem" py="1.875rem" w="50%" h="100%" direction="column" align="center" className="fadein revealOnce" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
          <Text fontFamily="goudy" fontSize="1.875rem" pb="1.875rem">
            8% ROI ON ARETE HOMES
          </Text>
          <Flex w h="100%" gap="1.875rem" justify="center" align="center">
            <Image className="expandcar revealOnce" w="200px" h="150px" src={roiImg} />
            <Flex
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading fontSize="1.25rem" pb="0.938rem">
                2 BHK - 1025 SQFT.
              </Heading>
              <Heading fontSize="1.5rem">₹52 LAKHS</Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
                Fully Furnished With White Goods
              </Text>
              <Heading fontSize="1.5rem">₹32,000</Heading>
              <Text
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Rental Income per month
              </Text>
            </Flex>
          </Flex>
          <Button
            mt="1.25rem"
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
            mb="1rem"
          >
            VIEW DETAILS
          </Button>
        </Flex>
        <Flex boxShadow="2xl" px="1rem" py="1.875rem" w="50%" h="100%" direction="column" align="center" className="fadein revealOnce" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
          <Text fontFamily="goudy" fontSize="1.875rem" pb="1.875rem">
            7% ROI ON SKY HIGH TOWER
          </Text>
          <Flex w h="100%" gap="1.875rem" justify="center" align="center">
            <Image className="expandcar revealOnce" w="200px" h="150px" src={snarttwobhk} />
            <Flex
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading fontSize="1.25rem" pb="0.938rem">
                2 BHK - 690 SQFT.
              </Heading>
              <Heading fontSize="1.5rem">₹34 LAKHS</Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
                Fully Furnished With White Goods
              </Text>
              <Heading fontSize="1.5rem">₹20,000</Heading>
              <Text
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Rental Income per month
              </Text>
            </Flex>
          </Flex>
          <Button
            mt="1.25rem"
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
            mb="1rem"
          >
            VIEW DETAILS
          </Button>
        </Flex>
        </Flex>
      </Flex>
      </>);
}
export default OurInvestors;