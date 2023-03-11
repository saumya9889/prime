import { Flex, Heading, Image, Divider, Box, Button, Text, Spacer, IconButton } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import pgclogo from "../../arete-homes imgs/Asset 1.png"
import ponneri from "../../homepage-imgs/1 - PGC entrance art.png";
import multiSports from "../../homepage-imgs/2 - Multi Sports Arena.jpg";
import swim from "../../homepage-imgs/3 - Swimming Pool High Res.tif";
import hall from "../../homepage-imgs/4-PGC Banquet Hall .jpg";
import golf from "../../homepage-imgs/5 - Open Golf Putting Area.png";
import bar from "../../homepage-imgs/6-PGC Sports Bar.jpg";
import gym from "../../homepage-imgs/7 - gym.tif";
//import pgclogo from "/arete-homes imgs/Asset 1.png";

const Ponneri = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const [assetIndex, setAssetIndex] = useState(0);
  const assets = [
    { title: "ONE CLUB MANY FACETS", img: ponneri, },
    { title: "MULTI SPORTS ARENA", img: multiSports, },
    { title: "SWIMMING POOL", img: swim, },
    { title: "BANQUET HALL", img: hall, },
    { title: "OPEN GOLF PUTTING AREA", img: golf, },
    { title: "SPORTS BAR", img: bar, },
    { title: "GYM", img: gym, },
  ]
  const nextHandle = () => {
    if (assetIndex === 6) {
      setAssetIndex(0);
    }
    else {
      setAssetIndex(assetIndex + 1);
    }
  }
  const prevHandle = () => {
    if (assetIndex === 0) {
      setAssetIndex(6);
    }
    else {
      setAssetIndex(assetIndex - 1);
    }

  }
  useEffect(() => {
    setTimeout(() => {
      nextHandle();
    }, 3000);
    return () => {
      clearTimeout();
    }
  });
  /*useEffect(() => {
    if (isInView) {
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateY.start({
        y: 0,
        opacity: 1,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY, animateFade]);*/
  return (
    <Flex ref={ref} w="100%" h="100%" py="1.875rem" mt="3.125rem" pl="100px"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover" className="ponner-wrapper">
      <Flex w="100%" h="100%" direction="column">
        <Flex ml="20%" w="100%" className="poinner-heading" align="center" justify="flex-start" pb="1.875rem" overflow="hidden">
          {/* <Image src="/images/logo.png" /> */}
          <Heading
            className="slidein-top revealOnce"
            fontSize="40px"
            fontWeight="400"
            fontFamily="goudy"
            pr="10px"
          >
            <Flex >
              <Image src={pgclogo} h="2.5rem" w="2.5rem" ml="1rem" />
              <Spacer w="3.5rem" pos="relative">
                <Text pos="absolute" className="pvt-wrap" bottom="0.3rem" as="span" fontSize="1.5rem">
                  PVT.
                </Text>
              </Spacer>
              PONNERI GYMKHANA CLUB
            </Flex>
          </Heading>
        </Flex>
        <Flex w="100%" h="100%" className="poinner-grid-wrap">
          <Flex
            w="60%"
            h="100%"
            className="poinner-grid-img"
          >
            <Image className="expandcar reveal" w="100%" h="25rem" src={assets[assetIndex].img} />{" "}
          </Flex>
          <Flex align="flex-start" pr="100px" overflow="hidden" className="poinner-grid-right">
            <Flex
              className="slidein-top reveal"
              transition={"all 2s 2s"}
              h="100%"
              direction="column"
              align="center"
              px="1.563rem"
            >
              <Divider

                h="8.375rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="30px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              pos="relative"
              className="fadein revealOnce fadein-wrap"
              w="100%"
              h="25rem"
              direction="column"
              align="flex-start"
              justify="center"
            >
              <Heading fontSize="1.5rem" fontFamily="avenir" mb="25px">
                {assets[assetIndex].title}
              </Heading>
              <Button
                className="fadein revealOnce"
                w="206px"
                h="51px"
                p="16px"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="16px"
                fontFamily="avenir"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                BECOME A MEMBER
              </Button>
              <div className="carausel-btn-wrap">
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
                }}
              >
                <AiOutlineRight color="#B88746" size="2.5rem" />
              </IconButton></div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Ponneri;
