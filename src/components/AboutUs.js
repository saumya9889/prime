import { Button, Flex, Heading, Text, Divider, Box, Link } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnHead = motion(Heading);
const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);
const MtnBtn = motion(Button);

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateHead = useAnimation();
  const animateLeft = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateHead.start({
        opacity: 1,
        y: 0,
      });
      animateLeft.start({
        opacity: 1,
        x: 0,
      });
    }
  }, [isInView, animateHead, animateLeft]);

  
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      s
      align="center"
      justify="center"
      bgColor="gray.900"
      color="white"
      pt="5rem"
      pb="1.875rem"
      px="6.2rem"
      direction="column" 
    >
      <Flex w="100%" h="100%" direction="column" align="center">
        <MtnHead
          initial={{ y: -50, opacity: 0 }}
          animate={animateHead}
          transition={{ duration: 2, type: "just" }}
          fontFamily="goudy"
          fontWeight="400"
          fontSize="2.5rem"
        >
          ABOUT US 
        </MtnHead>
        <Flex w="100%" h="100%" align="center" direction="column">
          <MtnHead
            initial={{ opacity: 0 }}
            animate={animateHead}
            transition={{ duration: 2, type: "just" }}
            pt="1.562rem"
            fontSize="2.125rem"
            fontFamily="avenir"
          >
            BRIGHT IDEAS - SMART SOLUTIONS
          </MtnHead>
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateHead}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            pt="2.125rem"
            fontSize="1rem"
            fontFamily="veralaRound"
          >
            Prime LifeSpace is a brand built on trust, transparency & quality in
            real estate industry. It has established its credentials in
            development of residential integrated townships & consulting
            services. Both these segments are equally important to us. Prime
            LifeSpace group luxuriates the highest brand esteem in Mumbai &
            Chennai for its fusion of luxuries & affordability in the projects
            of exceptional quality with a passion for delivering finest homes.
          </MtnTxt>
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateHead}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            pt="0.938rem"
            fontSize="1rem"
            fontFamily="veralaRound"
          >
            Prime LifeSpace, as the name suggests, is a pre-eminent real estate consultancy & development firm, with 30+ years of experience in the industry.
Our brand is built on trust, transparency & quality in the real estate industry. We have established credentials in development of residential integrated townships & consulting services. Both these segments are equally important to us.
Prime LifeSpace consultancy firm offers an end-to-end solution in the Real Estate Space. The team has excelled in providing deep expertise to biggest corporates like Blackstone for Chandigarh Elante Mall, L&T for Seawood Project, Sunteck for Naigaon Project etc. Also, structured various eminent Joint Ventures, Mergers like L&T GeoTech with Sharaf Foundation.
          </MtnTxt>
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateHead}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            pt="0.938rem"
            fontSize="1rem"
            fontFamily="veralaRound"
          >
            Prime LifeSpace developers are renowned creators of smart integrated townships that provide more than just spaces to live in. The townships resemble improvement in quality of living, empowerment of communities and valuable experience of lifetime. Our properties are now fetching highest rental returns in the country. An investment choice for right value of money for the investors.
          </MtnTxt>
        </Flex>
        <Flex w="100%" pt="0.938rem">
          <Flex direction="column" w="25%">
            <MtnFlx
              initial={{ opacity: 0, x: -30 }}
              animate={animateLeft}
              transition={{ delay: 2, duration: 2, type: "just" }}
              align="center"
            >
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Flex
                h="1.875rem"
                pos="relative"
                align="center"
                justify="center"
                direction="column"
              >
                <Box
                  pos="absolute"
                  height="1.875rem"
                  width="1.875rem"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="0.5"
                />
                <Box
                  pos="absolute"
                  height="1.375rem"
                  width="1.375rem"
                  backgroundColor="#DFBD69"
                  borderRadius="50%"
                  my="0.5"

                />
              </Flex>
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <MtnFlx
              initial={{ opacity: 0}}
              animate={animateLeft}
              transition={{ delay: 2, duration: 2, type: "just" }}
              direction="column"
              pt="0.938rem"
            >
              <Heading
                fontSize="1.5rem"
                fontFamily="avenir"
              >
                30+ years
              </Heading>
              <MtnFlx
                initial={{ opacity: 0}}
                animate={animateLeft}
                transition={{ delay: 2, duration: 2, type: "just" }}
                fontSize="1.125rem"
                fontFamily="veralaRound"
              >
                Of Building Trust
              </MtnFlx>
            </MtnFlx>
          </Flex>
          <Flex direction="column" w="50%">
            <MtnFlx
              initial={{ opacity: 0, x: -100 }}
              animate={animateLeft}
              transition={{ delay: 4, duration: 2, type: "just" }}
              align="center"
            >
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Flex
                h="1.875rem"
                pos="relative"
                align="center"
                justify="center"
                direction="column"
              >
                <Box
                  pos="absolute"
                  height="1.875rem"
                  width="1.875rem"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="0.5"
                />
                <Box
                  pos="absolute"
                  height="1.375rem"
                  width="1.375rem"
                  backgroundColor="#DFBD69"
                  borderRadius="50%"
                  my="0.5"
                />
              </Flex>
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <Flex direction="column" pt="0.938rem" w="100%" align="center">
              <Flex direction="column" align="flex-start">
                <MtnHead
                  initial={{ opacity: 0}}
                  animate={animateLeft}
                  transition={{ delay: 4, duration: 2, type: "just" }}
                  fontSize="1.5rem"
                  fontFamily="avenir"
                  textAlign="left"
                >
                  
                  <Text
                    as="span"
                    fontSize="1.25rem"
                    textTransform="lowercase"
                    fontFamily="avenir"
                  >
                    approx.
                  </Text>
                   1 Million sqft.{" "}
                </MtnHead>
                <MtnTxt
                  initial={{ opacity: 0}}
                  animate={animateLeft}
                  transition={{ delay: 4, duration: 2, type: "just" }}
                  fontSize="1.125rem"
                  textAlign="left"
                  fontFamily="veralaRound"
                >
                  Development
                </MtnTxt>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" w="25%">
            <MtnFlx
              initial={{ opacity: 0, x: -100 }}
              animate={animateLeft}
              transition={{ delay: 6, duration: 2, type: "just" }}
              align="center"
            >
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Flex
                h="1.875rem"
                pos="relative"
                align="center"
                justify="center"
                direction="column"
              >
                <Box
                  pos="absolute"
                  height="1.875rem"
                  width="1.875rem"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="0.5"
                />
                <Box
                  pos="absolute"
                  height="1.375rem"
                  width="1.375rem"
                  backgroundColor="#DFBD69"
                  borderRadius="50%"
                  my="0.5"
                />
              </Flex>
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <Flex direction="column" pt="0.938rem">
              <MtnHead
                initial={{ opacity: 0}}
                animate={animateLeft}
                transition={{ delay: 6, duration: 2, type: "just" }}
                fontSize="1.5rem"
                fontFamily="avenir"
              >
                100+
              </MtnHead>
              <MtnTxt
                initial={{ opacity: 0}}
                animate={animateLeft}
                transition={{ delay: 6, duration: 2, type: "just" }}
                fontSize="1.125rem"
                fontFamily="veralaRound"
              >
                Happy Consultancy Clients
              </MtnTxt>
            </Flex>
          </Flex>
        </Flex>
        <Link textDecoration="none" _hover={{textDecoration:"none"}} href="/about-us">
        <MtnBtn
          initial={{ opacity: 0}}
          animate={animateHead}
          transition={{ delay:6, duration: 2, type: "just" }}
          mt="1.562rem"
          // mb="3.125rem"
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
          Know More
        </MtnBtn>
        </Link>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
