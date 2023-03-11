import { Flex, Heading, Image, Text, Divider, Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import problemSolving from "../careers imgs/problem solving_15_11zon.jpg"

const MtnFlx = motion(Flex);
const MtnImg = motion(Image);
const MtnHead = motion(Heading);

const Buildchng = () => {
  const [currImg, setCurrImg] = useState(null);
  const [currSrc, setCurrSrc] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pRef = useRef(null);
  const pIsInView = useInView(pRef, { once: true });
  const rRef = useRef(null);
  const rIsInView = useInView(rRef, { once: true });
  const iRef = useRef(null);
  const iIsInView = useInView(iRef, { once: true });
  const mRef = useRef(null);
  const mIsInView = useInView(mRef, { once: true });
  const eRef = useRef(null);
  const eIsInView = useInView(eRef, { once: true });
  const animationImg = useAnimation();
  const imgData = [
    { src: "" },
    { src: "/images/careers/problem solving.jpg" },
    { src: "/images/careers/reliability.jpg" },
    { src: "/images/careers/innovation.jpg" },
    { src: "/images/careers/management.jpg" },
    { src: "/images/careers/engagement.jpg" },
  ];
  const animationHead = useAnimation();
  const animationDvd = useAnimation();
  const animationLtr = useAnimation();
  const animationRightTxt = useAnimation();
  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationDvd.start({ opacity: 1, y: 0 });
      animationLtr.start({ opacity: 1, x: 0 });
      animationRightTxt.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);
  /*
  useEffect(() => {
    animationImg.start({ scale: 1, opacity: 1 });
  }, [currImg]);
  useEffect(() => {
    if (pIsInView) {
      console.log("p is visible");
      setCurrImg(0);
      setCurrSrc(imgData[0].src);
    }
  }, [pIsInView]);
  useEffect(() => {
    if (rIsInView) {
      console.log("r is visible");
      setCurrImg(1);
      setCurrSrc(imgData[1].src);
    }
  }, [rIsInView]);
  useEffect(() => {
    if (iIsInView) {
      console.log("i is visible");
      setCurrImg(2);
      setCurrSrc(imgData[2].src);
    }
  }, [iIsInView]);
  useEffect(() => {
    if (mIsInView) {
      console.log("m is visible");
      setCurrImg(3);
      setCurrSrc(imgData[3].src);
    }
  }, [mIsInView]);
  useEffect(() => {
    if (eIsInView) {
      console.log("e is visible");

      setCurrImg(4);
      setCurrSrc(imgData[4].src);
    }
  }, [eIsInView]);
  */
  return (
    <AnimatePresence>
      <Flex
        ref={ref}
        direction="column"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        overflow="hidden"
        pt="3.125rem"
        mb="4.375rem"
      >
        <MtnHead
          initial={{ opacity: 0, y: -50 }}
          animate={animationHead}
          transition={{ duration: 1, type: "just" }}
          fontSize="2.5rem"
          fontWeight="400"
          fontFamily="goudy"
        >
          BUILDING CHANGE
        </MtnHead>
        <Flex
          align="center"
          mt="3.125rem"
          justify="center"
          w="100%"
          h="100%"
          pos="relative"
        >
          <Flex w="60%" h="100%" direction="column" ml="100px" align="left">
          <SimpleGrid
                        columns={3}
                        w="100%"
                        overflow="hidden"
                        spacing="0.938rem">
                            <GridItem opacity={isInView?1:0} transition={"all 2s 6s"}  pos="relative" maxWidth="15.75rem" h="27.5rem" rowSpan={2}>
                            <Image
                              h="100%"
                              w="100%"
                              alt="IMAGE"
                              src="/images/careers/management.jpg"
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Heading
                                    textAlign="center"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="45%"
                                    left="52%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                MANAGEMENT SKILLS
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem opacity={isInView?1:0} transition={"all 2s 2s"} pos="relative" maxWidth="32.8rem" h="12.75rem" colSpan={2}>
                            <Image
                              h="100%"
                              w="100%"
                              alt="IMAGE"
                              src="/images/careers/reliability.jpg"  
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Heading
                                    textAlign="center"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="45%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                RELIABILITY
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem opacity={isInView?1:0} transition={"all 2s"} pos="relative" maxWidth="15.75rem" h="13.75rem">
                            <Image
                              h="100%"
                              w="100%"
                              alt="IMAGE"
                              src="/images/careers/problem solving.jpg"
                               
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Heading
                                    textAlign="center"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="30%"
                                    left="54%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                PROBLEM SOLVING SKILLS
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem opacity={isInView?1:0} transition={"all 2s 8s"} pos="relative" maxWidth="15.75rem" h="27.5rem"  rowSpan={2}>
                            <Image
                              h="100%"
                              w="100%"
                              alt="IMAGE"
                              src="/images/careers/engagement.jpg"
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Heading
                                    textAlign="center"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="45%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                 ENGAGEMENT 
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem opacity={isInView?1:0}  transition={"all 2s 4s"} pos="relative" maxWidth="32.8rem" h="12.75rem" colSpan={2}>
                            <Image
                              h="100%"
                              w="100%"
                              alt="IMAGE"
                              src="/images/careers/innovation.jpg"
                              
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Heading
                                    textAlign="center"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="45%"
                                    left="52%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                INNOVATIVE THINKING
                                </Heading>
                                </Box>
                            </GridItem>
                </SimpleGrid>
          </Flex>
          <Flex
              direction="column"
              align="center"
              overflow="hidden"
              h="41.25rem"
              alignItems="flex-start"
            >
              <Flex opacity={isInView?1:0} transform={isInView?"translateY(0)":"translateY(-50)"} transition={"all 2s"} direction="column" w="5rem" px="2.1rem" align="center" overflow="hidden">
              <Divider
                className="slideTop reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="2.5rem"
              />
              <Box
                className="slideTop reveal"
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
              />
              <Divider
                className="slideTop reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="3.5rem"
              />
              </Flex>
              <Flex opacity={isInView?1:0} transition={"all 2s 2s"} direction="column" w="5rem" px="2.1rem" align="center" overflow="hidden">
              <Divider
                className="slideTop2 reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="2.5rem"
              />
              <Box
                className="slideTop2 reveal"
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
              />
              <Divider
                className="slideTop2 reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="3.5rem"
              />
              </Flex>
              <Flex opacity={isInView?1:0} transition={"all 2s 4s"} direction="column" w="5rem" px="2.1rem" align="center" overflow="hidden">
              <Divider
                className="slideTop3 reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="2.5rem"
              />
              <Box
                className="slideTop3 reveal"
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
              />
              <Divider
                className="slideTop3 reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="2.5rem"
              />
              </Flex>
              <Flex opacity={isInView?1:0} transition={"all 2s 6s"} direction="column" w="5rem" px="2.1rem" align="center" overflow="hidden">
              <Divider
                className="slideTop4 reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="2.5rem"
              />
              <Box
                className="slideTop4 reveal"
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
              />
              <Divider
                className="slideTop4 reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="1.5rem"
              />
              </Flex>
              <Flex opacity={isInView?1:0} transition={"all 2s 8s"} direction="column" h="7.875rem"  w="5rem" px="2.1rem" align="center" overflow="hidden">
              <Divider
                className="slideTop5 reveal"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="4.5rem"
              />
              <Box
                className="slideTop5 reveal"
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
              />
              </Flex>
            </Flex>
          <Flex
            direction="column"
            w="40%"
            h="80%"
            align="flex-start"
            pr="100px"
            overflow="hidden"
          >
            <Flex direction="row" align="center" justify="center" >
              <MtnHead
                ref={pRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ duration: 2, type: "just" }}
                fontSize="6.875rem"
                fontWeight="400"
                fontFamily="goudy"
                color="#D9D9D9"
                pr="2.812rem"
              >
                P
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="1.25rem" pb="0.625rem" fontFamily="avenir">
                  PROBLEM SOLVING SKILLS
                </Heading>
                <Text
                  fontSize="1rem"
                  lineHeight="1.5rem"
                  fontFamily="veralaRound"
                >
                  We believe to nurture problem solvers, who lead better.
                </Text>
              </MtnFlx>
            </Flex>
            <Flex direction="row" align="center" justify="center">
              <MtnHead
                ref={rRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 2, duration: 2, type: "just" }}
                fontSize="6.875rem"
                fontWeight="400"
                fontFamily="goudy"
                color="#D9D9D9"
                pr="2rem"
              >
                R
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 2, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="1.25rem" pb="0.625rem" fontFamily="avenir">
                  RELIABILITY
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  We believe transperancy is the first step to any beginning.
                </Text>
              </MtnFlx>
            </Flex>
            <Flex direction="row" align="center" justify="center">
              <MtnHead
                ref={iRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 4, duration: 2, type: "just" }}
                fontSize="6.875rem"
                fontWeight="400"
                fontFamily="goudy"
                color="#D9D9D9"
                pr="3.437rem"
                pl="0.937rem"
              >
                I
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 4, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="1.25rem" pb="0.625rem" fontFamily="avenir">
                  INNOVATIVE THINKING
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  We encourage innovative ideas and improvising new things.
                </Text>
              </MtnFlx>
            </Flex>
            <Flex direction="row" align="center" justify="center" >
              <MtnHead
                ref={mRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 6, duration: 2, type: "just" }}
                fontSize="6.875rem"
                fontWeight="400"
                fontFamily="goudy"
                color="#D9D9D9"
                pr="1.375rem"
                ml={""/*"-0.75rem"*/}
              >
                M
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 6, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="1.25rem" pb="0.625rem" fontFamily="avenir">
                  MANAGEMENT SKILLS
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  We believe transperancy is the first step to any beginning.
                </Text>
              </MtnFlx>
            </Flex>
            <Flex direction="row" align="center" justify="center">
              <MtnHead
                ref={eRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 8, duration: 2, type: "just" }}
                fontSize="6.875rem"
                fontWeight="400"
                fontFamily="goudy"
                color="#D9D9D9"
                pr="42px"
              >
                E
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 8, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="1.25rem" pb="0.625rem" fontFamily="avenir">
                  ENGAGEMENT
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Team work is the secret to achieve uncommon results.
                </Text>
              </MtnFlx>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </AnimatePresence>
  );
};

export default Buildchng;
