import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  VStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import areteHomes from "../../arete-homes imgs/BANNER2.jpg";
import investImg from "../../invest.png";
import skyHigh from "../../sky-high imgs/BANNER2.png";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { ImLocation } from "react-icons/im";

const MtnHead = motion(Heading);
const MtnFlx = motion(Flex);
const settings = {
  draggable: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};
const Invest = () => {
  const [slider, setSlider] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateY = useAnimation();
  const animateX = useAnimation();
  const animateFade = useAnimation();
  const [assetIndex,setAssetIndex] = useState(0);
  const assets = [
    {title:"8% ROI ON HOMES",room:"2 BHK",price:"Rs. 52 Lakhs",rent:"Rs. 32,000*",sqrft:"1085 sqft.",img:investImg,link:"/arete-homes-invest"},
    {title:"7% RENTAL INCOME",room:"2 BHK",price:"Rs. 34 Lakhs",rent:"Rs. 20,000*",sqrft:"690 sqft.",img:areteHomes,link:"/arete-homes-invest"},
    {title:"HIGHEST ROI ON HOMES",room:"3 BHK",price:"Rs. 85 Lakhs",rent:"Rs. 48,000*",sqrft:"1787 sqft.",img:skyHigh,link:"/arete-homes-invest"},
  ]
  const nextHandle=()=>{
    if(assetIndex===2){
      setAssetIndex(0);
    }
    else{
      setAssetIndex(assetIndex+1);
    }
  }
  const prevHandle=()=>{
    if(assetIndex===0){
      setAssetIndex(2);
    }
    else{
      setAssetIndex(assetIndex-1);
    }

  }
  const addAutoClicker=()=>{
    setTimeout(()=>{
      nextHandle();
    },3000);
  }
  useEffect(() => {
    addAutoClicker();
    return()=>{
      clearTimeout();
    }
  });
  useEffect(() => {
    if (isInView) {
      animateY.start({
        opacity: 1,
        y: 0,
      });
      animateX.start({
        opacity: 1,
        x: 0,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY, animateFade]);

  /*return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="3.125rem"
      pb="3.125rem"
      px="1rem"
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
      <MtnHead
        textAlign="center"
        initial={{ opacity: 0, y: -50 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
      >
        INVEST IN RENT GENERATING ASSETS
      </MtnHead>
      <Flex w="100%" pt="1.875rem" overflow="hidden">
        <MtnFlx
          transition={{ delay: 1.5, duration: 2, type: "just" }}
          w="47.5%"
          align="center"
          justify="center"
        >
          <Image className="expandcar reveal" w="608px" h="500px" src={assets[assetIndex].img} />
        </MtnFlx>
        <MtnFlx
          className="slidein-top reveal"
          h="145px"
          w="5%"
          direction="column"
          align="center"
          px="2.5rem"
        >
          <Divider
             h="5.5rem"
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
          />
          <Box
            height="1.875rem"
            width="1.875rem"
            backgroundColor="#DFBD69"
            border="3px solid #fff"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </MtnFlx>
        <MtnFlx
          pos="relative"
          initial={{ opacity: 0 }}
          animate={animateFade}
          transition={{duration: 2, type: "just" }}
          w="47.5%"
          direction="column"
          justify="center"
          align="flex-start"
        >
          <MtnHead
            initial={{ opacity: 0}}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            w="100%"
            fontFamily="avenir"
            fontSize="34px"
            textAlign="left"
          >
            {assets[assetIndex].title}
          </MtnHead>
          <Flex
            mt="1.563rem"
            w="100%"
            alignSelf="flex-start"
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
            direction="column"
          >
            <Flex w="100%" border="1px solid #B88746">
              {" "}
              <Text
                textAlign="center"
                border="1px solid #B88746"
                borderLeft="none"
                borderBottom="none"
                w="30%"
                fontFamiily="veralaRound"
                fontSize="1rem"
                px="0.625rem"
                py="0.938rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                color="white"
              >
                SMART HOME
              </Text>{" "}
              <Text
                textAlign="center"
                border="1px solid #B88746"
                borderLeft="none"
                borderBottom="none"
                w="40%"
                fontFamiily="veralaRound"
                fontSize="1rem"
                px="0.625rem"
                py="0.938rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                color="white"
              >
                PRICE
              </Text>{" "}
              <Text
                textAlign="center"
                border="1px solid #B88746"
                borderLeft="none"
                borderBottom="none"
                borderRight="none"
                w="30%"
                fontFamiily="veralaRound"
                fontSize="1rem"
                px="0.625rem"
                py="0.938rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                color="white"
              >
                RENTAL INCOME
              </Text>
            </Flex>

            <Flex w="100%" borderBottom="1px solid #B88746" borderLeft="1px solid #B88746" borderRight="1px solid #B88746">
              <VStack
                w="30%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                {assets[assetIndex].room}
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  1085 SQFT.
                </Text>
              </VStack>
              <VStack
                w="40%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                {assets[assetIndex].price}
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Fully Furnished With White Goods
                </Text>
              </VStack>
              <VStack w="30%" align="flex-start" px="1.25rem" py="1.25rem">
                <Heading fontFamily="avenir" fontSize="1.25rem">
                {assets[assetIndex].rent}
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Per Month
                </Text>
              </VStack>
            </Flex>
          </Flex>
          <Button
            mt="1rem"
            w="152px"
            h="51px"
            fontSize="1rem"
            fontFamily="avenir"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            VIEW DETAILS
          </Button>
          <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          bottom="-1.5rem"
          left="0"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            clearTimeout();
            prevHandle();
            addAutoClicker();
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
          left="4rem"
          bottom="-1.5rem"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            clearTimeout();
            nextHandle();
            addAutoClicker();
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
        </MtnFlx>
      </Flex>
    </Flex>
  );*/

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      py="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        textAlign="center"
        pb="1.563rem"
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
      >
        INVEST IN RENT GENERATING ASSETS
      </Text>
      <Box
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        align="center"
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
          {assets.map((prime) => (
            <Flex
              w="100%"
             key={prime.id}
            direction="column"
            align="center"
            justify="center">
                <Heading
                  mb="1.563rem"
                  h="5.5rem"
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s 2s"
                  fontFamily="avenir"
                  fontSize="2.125rem"
                  py="1.563rem"
                >
                {prime.title}
              </Heading>
              <Flex 
                direction="row" >
            <Image
              className="expandcar reveal"
              w="100%"
              height="18.75rem"
              px="0.312rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime.img}
            />
            </Flex>
            <Flex
            pt="1.563rem"
            px=".312rem"
            w="100%"
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            alignSelf="flex-start"
            direction="column"
          >
            {" "}
            <Heading
              w="100%"
              textAlign="center"
              border="1px solid #B88746"
              borderLeft="none"
              borderBottom="none"
              fontFamiily="veralaRound"
              fontSize="1rem"
              fontWeight="bold"
              px="0.625rem"
              py="0.938rem"
              bgGradient="linear(to-b,#B88746, #DFBD69)"
              color="white"
            >
              SMART {prime.room} - {prime.sqrft}
            </Heading>{" "}
            <Flex w="100%" borderTop="none" border="1px solid #B88746">
              <VStack
                w="100%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                {prime.price}
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Fully Furnished With White Goods
                </Text>
              </VStack>
              <VStack
                w="100%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                {prime.rent}
                  <Text as="span" fontWeight="400" fontSize="1rem">
                    p.m.
                  </Text>
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Rental Income For 3 Years
                </Text>
              </VStack>
            </Flex>
          </Flex>
          <Button
          mt="3.125rem"
          alignSelf="center"
          w="9.125rem"
          p="1rem"
          h="3.187rem"
          fontFamily="avenir"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="1rem"
          textTransform="uppercase"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          <Link textDecoration="none" href="/about-us">
          VIEW DETAILS
          </Link>
        </Button>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

export default Invest;
