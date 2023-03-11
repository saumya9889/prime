import {
    Button,
    Divider,
    Flex,
    Heading,
    Text,
    Image,
    Box,
    ListItem,
    IconButton,
    Link
} from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import areteHomes from "./arete-homes imgs/arate-homes.jpeg";
import skyHigh from "./homepage-imgs/PROJECT2.png";
import nakshatra from "./homepage-imgs/project6.png";
import iLand from "./homepage-imgs/project7.png";
import areteMall from "./commercial-properties imgs/Arete Mall.jpg";
import aretePlaza from "./homepage-imgs/project4.png";
import ponneri from "./homepage-imgs/project3.png";

const MtnDvdr = motion(Divider);
const MtnFlx = motion(Flex);
const MtnHd = motion(Heading);
const MtnLI = motion(ListItem);
const MtnBtn = motion(Button);

const OurProjects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [projIndex, setProjIndex] = useState(0);
    const projects = [
        { title: "ARETE HOMES", list: true, status: "READY TO MOVE IN", imgF: areteHomes, imgB: skyHigh, text: '6 Towers, 2, 2.5, 3 BHK Smart Residencies, 70% Open Space', link:"/arete-homes" },
        { title: "SKY HIGH TOWER", list: true, status: "UNDER CONSTRUCTION", imgF: skyHigh, imgB: areteHomes, text: '18 Storey Tall, Sky Residencies 2 BHK, G+1 Retail Plaza', link:"/sky-high" },
        { title: "NAKSHATRA", list: false, status: "COMPLETED", imgF: nakshatra, imgB: skyHigh, text: "Pune", link:"" },
        { title: "I - LAND", list: false, status: "COMPLETED", imgF: iLand, imgB: skyHigh, text: "Pune", link:""},
        { title: "ARETE MALL", list: false, status: "COMING SOON", imgF: areteMall, imgB: skyHigh, text: "",link:"/commercial-properties" },
        { title: "ARETE PLAZA", list: false, status: "UNDER CONSTRUCTION", imgF: aretePlaza, imgB: areteMall, text: "20 Retail Spcaes in the Tallest Tower of North Chennai.", link:"/commercial-properties"},
        { title: "PONNERI GYMKHANA CLUB", list: false, status: "READY TO USE", imgF: ponneri, imgB: aretePlaza, text: "PGC is 60,000 sqft. World Class Private Club for Sports, Business and Celebration.", link:"" },
    ];   
    const [isList, setIsList] = useState(true);
    const animateX = useAnimation();
    const animateY = useAnimation();
    const animateFade = useAnimation();
    const nextHandle = () => {
        if (projIndex === 6) {
            setIsList(true);
            setProjIndex(0);
        }
        else if (projIndex === 5) {
            setIsList(true);
            setProjIndex(projIndex + 1);
        }
        else {
            setIsList(false);
            setProjIndex(projIndex + 1);
        }
    }
    const prevHandle = () => {
        if (projIndex === 0) {
            setIsList(true);
            setProjIndex(6);
        }
        else if (projIndex === 1) {
            setIsList(true);
            setProjIndex(projIndex - 1);
        }
        else {
            setIsList(false);
            setProjIndex(projIndex - 1);
        }
    }
    useEffect(() => {
        console.log(isList);
        console.log(projects[projIndex].p1)
    }, [isList]);
    useEffect(() => {
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
    }, [isInView, animateX, animateY, animateFade]);
    const [slider, setSlider] = useState(null);
    const settings = {
        // className: "center",
        centerMode: false,
        autoplay: true,
        infinite: true,
        draggable: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Flex
            ref={ref}
            w="100%"
            minh="100%"
            direction="column"
            align="center"
            pt="1.875rem"
            pb="1.875rem"
            pl="100px"
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
        >
            
            <Flex w="100%" h="100%" align="center" justify="center">
                <Flex h="100%" align="center" justify="center">
                    <Text fontFamily="goudy" fontSize="40px" textAlign="center">
          <Divider
                      width="5.7rem"
                      orientation="horizontal"
                      borderBottom="3px solid #DFBD69"
                      position="relative"
                      top="2rem"
                      left="5rem"

                /> 
                        <Divider
                            width="5.7rem"
                            orientation="horizontal"
                            borderBottom="3px solid #DFBD69"
                            position="relative"
                            top="2rem"
                            right="5.8rem"
                            
                        />
                        OUR PROJECTS
                    </Text>
                </Flex>
            </Flex>
            <Box
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
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    <Flex pos="relative" align="flex-start" justify="space-between" pr="100px">
                        <Flex pos="relative" m="0" w="20%" pt="4.125rem" direction="column" justify="center" h="30rem">
                            <MtnHd
                                initial={{ x: -500 }}
                                animate={animateX}
                                transition={{ duration: 2, type: "just" }}
                                pb="15px"
                                fontFamily="avenir"
                                fontSize="1.5rem"
                                w="100%"
                                textAlign="left"
                            >
                                {projects[projIndex].title}
                            </MtnHd>
                            <Text fontFamily="varela round" fontSize="18px">{projects[projIndex].text}</Text>
                            <Link _hover={{textDecoration:"none"}} href={projects[projIndex].title}>
                            <MtnBtn
                                initial={{ opacity: 0 }}
                                animate={animateX}
                                transition={{ delay: 2.5, duration: 2, type: "just" }}
                                mt="25px"
                                w="160px"
                                h="51px"
                                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                                color="white"
                                fontSize="16px"
                                fontFamily="avenir"
                                _hover={{
                                    bgGradient: "linear(to-b, #DFBD69, #B88746)",
                                }}
                                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
                            >
                                VIEW PROJECT  
                            </MtnBtn>
                            </Link>
                            <IconButton
                                aria-label="left-arrow"
                                variant="outline"
                                borderColor="#B88746"
                                border="3px solid"
                                borderRadius="full"
                                position="absolute"
                                bottom="-1rem"
                                left="0"
                                h="3.125rem"
                                w="3.125rem"
                                transform={"translate(0%, -50%)"}
                                zIndex={2}
                                onClick={() => {
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
                                border="3px solid"
                                position="absolute"
                                transform={"translate(0%, -50%)"}
                                zIndex={2}
                                left="5rem"
                                bottom="-1rem"
                                h="3.125rem"
                                w="3.125rem"
                                onClick={() => {
                                    nextHandle();
                                }}
                            >
                                <AiOutlineRight color="#B88746" size="2.5rem" />
                            </IconButton>
                        </Flex>
                        <MtnFlx
                            w="5rem"
                            initial={{ opacity: 0, y: -100 }}
                            animate={animateY}
                            transition={{ duration: 2, type: "just" }}
                            h="100%"
                            direction="column"
                            align="center"
                            justify="flex-start"
                            pt="25px"
                            px="1.563rem"
                            pos="absolute"
                            top="0"
                            left="28%"
                        >
                            <Divider
                                h="6.5rem"
                                orientation="vertical"
                                border="3px solid"
                                borderColor="#DFBD69"
                                bgColor="#DFBD69"
                            />{" "}
                            <Box
                                height="30px"
                                width="30px"
                                backgroundColor="#DFBD69"
                                border="3px solid white"
                                boxShadow="0px 0px 0px 3px #B88746"
                                borderRadius="50%"
                                my="1"
                            />
                        </MtnFlx>
                        <Flex
                            pos="absolute"
                            zIndex={90}
                            right="0"
                            top="0"
                            w="65%"
                            direction="column"
                            align="flex-start"
                            pt="25px"
                            pr="50px"
                        >
                            <MtnFlx
                                initial={{ opacity: 0 }}
                                animate={animateX}
                                transition={{ duration: 1, type: "just" }}
                            >
                                <Text
                                    fontSize="14px"
                                    p="10px"
                                    color="white"
                                    fontFamily="avenir"
                                    bgGradient="linear(to-r, #B88746 ,#DFBD69)"
                                    textTransform="uppercase"
                                    fontWeight="bold"
                                >
                                    {projects[projIndex].status}
                                </Text>
                            </MtnFlx>
                            <MtnFlx
                                initial={{ x: 1000 }}
                                animate={animateX}
                                transition={{ duration: 2, type: "just" }}
                                pos="relative"
                                w="100%"
                                h="100%"
                                pr="100px"
                            >
                                <Image
                                    animation="fadein 1 2s"
                                    zIndex="3"
                                    // pos="absolute"
                                    w="100%"
                                    h="25.25rem"
                                    src={projects[projIndex].imgF}
                                />
                                <Image
                                    animation="fadein 1 2s"
                                    pos="absolute"
                                    w="100%"
                                    h="21.875rem"
                                    pr="150px"
                                    left="100px"
                                    top="25px"
                                    opacity=".5"
                                    src={projects[projIndex].imgB}
                                />
                            </MtnFlx>
                            
                        </Flex>
                    </Flex>
                </Slider>
            </Box>
            
        </Flex>
    );
};

export default OurProjects;


