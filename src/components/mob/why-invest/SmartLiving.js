import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  Button,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import one from "./1st.jpeg";
import two from "./CONSTRUCTION.jpg"
import three from "./3th.jpg";
import four from "./4th.jpg";
import fifth from "./5th.jpg";

const MtnHd = motion(Heading);
const MtnFlx = motion(Flex);
const MtnDvdr = motion(Divider);
const MtnCrcl = motion(Box);
const MtnTxt = motion(Text);
const MtnBtn = motion(Button);

const SmartLiving = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();

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
  }, [isInView, animateY, animateX, animateFade]);

  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      pt="1.875rem"
      pb="1.875rem"
      px="1rem"
      align="center"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
    >
      <MtnHd
        textAlign="center"
        initial={{ y: -50, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontSize="1.5rem"
        fontFamily="goudy"
        fontWeight="400"
      >
       ARETE HOMES THE PERFECT CHOICE FOR <br/> SMART INVESTMENT
      </MtnHd>
        <Flex direction="column" w="100%" h="100%" px="2" justify="flex-start">
          
          <MtnFlx
            initial={{ opacity: 0, x: 100 }}
            animate={animateX}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            align="center"
          >
            <Flex direction="column">
              <MtnTxt
                className="fadein revealOnce"
                textAlign="center"
                pt="1.875rem"
                pb="0.938rem"
                fontSize="18px"
                fontFamily="veralaRound"
              >
             Arete Homes is the largest smart township of north Chennai and all the legal documentation and RERA regulations approvals have been completed. The project is registered.
              </MtnTxt>
            </Flex>
          </MtnFlx>
          <MtnFlx
            transition={{ delay: 3.5, duration: 2, type: "just" }}
          >
            <Image className="expandcar reveal" w="570px" h="15.625rem" src={one} filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
          </MtnFlx>
          <MtnFlx
            className="fadein revealOnce"
            textAlign="center"
            align="center"
          >
            <Flex direction="column">
              <MtnTxt
                pb="0.938rem"
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 5, duration: 2, type: "just" }}
                pt="3.125rem"
                fontSize="18px"
                fontFamily="veralaRound"
              >
             The trust, goodwill and brand factor is well intact with Prime LifeSpace developers 30 years of experience in the real estate sector.
             </MtnTxt>
            </Flex>
          </MtnFlx>
          <MtnFlx
            
            transition={{ delay: 6.5, duration: 2, type: "just" }}
          >
            {" "}
            <Image
              className="expandcar reveal"
              w="570px"
              h="15.625rem"
              // mt="100px"
              src={two}
              filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"
            />
          </MtnFlx>
          <MtnFlx
            className="fadein revealOnce"
            textAlign="center"
            align="center"
          >
            <Flex direction="column">
              <MtnTxt
                pb="0.938rem"
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 5, duration: 2, type: "just" }}
                pt="3.125rem"
                fontSize="18px"
                fontFamily="veralaRound"
              >
             Arete Homes, Spread over 20.25 Acres of land, a Smart Integrated Township comprising Retail Plaza, 7 magnificent towers surrounded with amenities like Garden, Meditation Centre, kids play area, Sports Club etc. With more than 74% open space, it’s a pre-certified Platinum rated Green Building by IGBC. The smart homes are embellished with the finest features & well designed to accommodate modern fast-paced life. There is provision for curated homes services for all families, thus defining ‘Smart way of Living’.
             </MtnTxt>
            </Flex>
          </MtnFlx>
          <MtnFlx
            
            transition={{ delay: 6.5, duration: 2, type: "just" }}
          >
            {" "}
            <Image
              className="expandcar reveal"
              w="570px"
              h="15.625rem"
              // mt="100px"
              src={three}
              filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"
            />
          </MtnFlx>
          <MtnFlx
            className="fadein revealOnce"
            textAlign="center"
            align="center"
          >
            <Flex direction="column">
              <MtnTxt
                pb="0.938rem"
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 5, duration: 2, type: "just" }}
                pt="3.125rem"
                fontSize="18px"
                fontFamily="veralaRound"
              >
             Furthermore for holistic living there is a larger-than-life private club house ‘Ponneri Gymkhana Club’ that sprawls across 60,000 SQFT. Designed with international standards, PGC serves wide range of recreational, sporting & entertainment facilities like multi sports arena, squash courts, gym, pool, restaurants, banquet halls, guests & conference rooms, virtual golf – ‘Everything Under One Roof’
             </MtnTxt>
            </Flex>
          </MtnFlx>
          <MtnFlx
            transition={{ delay: 3.5, duration: 2, type: "just" }}
          >
            <Image className="expandcar reveal"  w="570px" h="15.625rem" src={four} filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
          </MtnFlx>
          <MtnFlx
            className="fadein revealOnce"
            textAlign="center"
            align="center"
          >
            <Flex direction="column">
              <MtnTxt
                pb="0.938rem"
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 5, duration: 2, type: "just" }}
                pt="3.125rem"
                fontSize="18px"
                fontFamily="veralaRound"
              >
             Arete Homes is surrounded with 3 Industrial Parks, 100+ educational Institutions and 3 Ports. This location has a rotational migrating population and is developing at a drastic speed
             </MtnTxt>
            </Flex>
          </MtnFlx>
          <MtnFlx
            transition={{ delay: 3.5, duration: 2, type: "just" }}
          >
            <Image className="expandcar reveal"  w="570px" h="15.625rem" src={fifth} filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
          </MtnFlx>
        </Flex>
    </Flex>
  );
};

export default SmartLiving;
