import { Box, Flex, Image, Divider, Heading, Text } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnImg = motion(Image);
const MtnFlx = motion(Flex);
const MtnTxt = motion(Text);
const MtnHd = motion(Heading);

const PLSGreen = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateImg = useAnimation();
  const animateFlx = useAnimation();
  const animateHd = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateImg.start({ opacity: 1, x: 0 });
      animateFlx.start({ opacity: 1, y: 0 });
      animateHd.start({ opacity: 1 });
    }
  }, [isInView, animateImg, animateFlx, animateHd]);

  return (
    <>
      <Flex
        ref={ref}
        w="100%"
        h="60%"
        direction="column"
        px="1rem"
        pb="3.125rem"
        pos="relative"
        bgColor="white"
        zIndex="10"
        
      >
        <Flex bgColor="white" direction="column" mt="-1.875rem" w="100%">
          <MtnHd
          initial={{ opacity: 0 }}
          animate={animateHd}
          transition={{ duration: 2, type: "just" }}
          pt="1.875rem"
          pb="1.562rem"
          fontFamily="goudy"
          fontWeight="400"
          fontSize="2.125rem"
          textAlign="center"
        >
          PLS GREEN POWER PVT LTD
        </MtnHd>
        <MtnTxt
          textAlign="center"
          initial={{ opacity: 0 }}
          animate={animateHd}
          transition={{ duration: 2, type: "just" }}
          pb="0.937rem"
          fontFamily="veralaRound"
          fontSize="1rem"
        >
          We provide solutions in the power sector including conventional and
          non conventional energy sector. We are committed for more than 2
          decades to provide technically best and cost effective solutions to
          our esteemed customers. We are enriched with the experience of
          configuring and devising plant preventive maintenance.
        </MtnTxt>
        <MtnTxt
          textAlign="center"
          initial={{ opacity: 0 }}
          animate={animateHd}
          transition={{ duration: 2, type: "just" }}
          fontFamily="veralaRound"
          fontSize="1rem"
          lineHeight="1.5rem"
        >
          Establishing IMS System for major power sector including ISO 9001,
          14001, 18001, ISO 17025 for laboratory Accreditation & safety norms.
          We also have our expertise in customization & development of ABT
          systems for operation of the plant in ABT regime and reduction in
          penalties like UI charges etc.
        </MtnTxt>
        </Flex>
      </Flex>
      <Flex
        ref={ref}
        w="100%"
        h="75vh"
        bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
        pos="relative"
        align="center"
        justify="center"
        direction="column"
      >
        <Flex w="100%" h="100%" justify="flex-end" pos="relative">
            <MtnFlx
            
            pos="absolute"
            left="0"
            top="3rem"
            className="discobal-slidein-top reveal"
              w="12%"
              initial={{ opacity: 0, y: -100 }}
              animate={animateFlx}
              transition={{ duration: 2, type: "just" }}
              direction="row"
              align="center"
              justify="flex-start"
            >{/*
              <Divider
                orientation="vertical"
                w="1rem"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="4px solid rgba(255, 255, 255, .7)"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="0.5"
                // _hover={{
                //   width: "1.562rem",
                //   height: "1.562rem",
                // }}
                // transition="all .5s"
  />*/}
            </MtnFlx>
            <MtnFlx
              w="100%"
              h="100%"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: "just" }}
              direction="column"
              pt="1.875rem"
              zIndex="10"
            >
              <Heading
                fontFamily="goudy"
                fontSize="2.125rem"
                fontWeight="400"
                textAlign="center"
                pb="0.937rem"
              >
                OUR PROJECT
              </Heading>
              <Text
                textAlign="center"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Execution of a solar power plant of 5 <br />
                MegaWatt at Telangana, Mothkur <br />
                Village, Nalagonda.
              </Text>
            </MtnFlx>
          </Flex>
        <Flex w="100%" h="100%" pos="relative" direction="column" left="0" align="flex-start">
          <MtnImg
            pos="absolute"
            className="fadein1s reveal"
            boxShadow="dark-lg"
            src="/images/energy/ourPro1.jpeg"
            objectSize="cover"
            bottom="50%"
            h="80%"
            w="80%"
          />
          <MtnImg
            className="fadein1nh reveal"
            boxShadow="dark-lg"
            src="/images/energy/ourPro2.jpeg"
            h="80%"
            w="80%"
            pos="absolute"
            right="0"
            bottom="0"
          />
          
        </Flex>
      </Flex>
    </>
  );
};

export default PLSGreen;
