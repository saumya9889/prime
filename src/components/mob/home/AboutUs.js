import { Button, Flex, Heading, Text, Divider, Box, Link } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";


const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
 

  return (
    <Flex
      ref={ref}
      h="100%"
      bgColor="gray.900"
      color="white"
      pt="5rem"
      pb="1.875rem"
      px="1rem"
      direction="column"
      className="about-mob-wrapper"
    >
      <Flex direction="column">
        <Heading
          textAlign="center"
          fontFamily="goudy"
          fontWeight="400"
          fontSize="2.125rem"
        >
          ABOUT US
        </Heading>
        <Flex direction="column">
          <Heading
            textAlign="center"
            pt="1.562rem"
            fontSize="2.125rem"
            fontFamily="avenir"
          >
            BRIGHT IDEAS - SMART SOLUTIONS
          </Heading>
          <Text
            textAlign="center"
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
          </Text>
          <Text
            textAlign="center"
            pt="0.938rem"
            fontSize="1rem"
            fontFamily="veralaRound"
          >
            Prime LifeSpace consultancy firm offers an end-to-end solution in
            the Real Estate Space. The team has excelled in providing deep
            expertise to biggest corporates like Blackstone for Chandigarh
            Elante Mall, L&T for Seawood Project, Sunteck for Naigaon Project
            etc. Also, structured various eminent Joint Ventures, Mergers like
            L&T GeoTech with Sharaf Foundation.
          </Text>
          <Text
            textAlign="center"
            pt="0.938rem"
            fontSize="1rem"
            fontFamily="veralaRound"
          >
            Prime LifeSpace developers are renowned creators of smart integrated
            townships that provide more than just spaces to live in. The
            townships resemble improvement in quality of living, empowerment of
            communities and valuable experience of lifetime. Our properties are
            now fetching highest rental returns in the country. An investment
            choice for right value of money for the investors.
          </Text>
        </Flex>
        <Flex mt="3.125rem" direction="column">
          <Flex >
          <Flex pr="1.875rem">
              <Flex 
              align="center"
              justify="center"
              direction="column">
              <Divider
              opacity="0"
              orientation="vertical"
              h=".5rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid black"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              display="flex"
              orientation="vertical"
              h="3.125rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
              </Flex>
          </Flex>
          <Flex
              direction="column"
            >
              <Heading
                pb="0.625rem"
                fontSize="1.5rem"
                fontFamily="avenir"
                textTransform="uppercase"
              >
                30+ years
              </Heading>
              <Flex
                fontSize="1.125rem"
                fontFamily="veralaRound"
              >
                Of Building Trust
              </Flex>
          </Flex>
          </Flex>
          <Flex >
          <Flex pr="1.875rem">
              <Flex 
              align="center"
              justify="center"
              direction="column">
              <Divider
              orientation="vertical"
              h="1.875rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid black"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              display="flex"
              orientation="vertical"
              h="3.125rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
              </Flex>
          </Flex>
          <Flex
              direction="column"
            >
            <Heading
                  pt="1.4rem"
                  fontSize="1.5rem"
                  fontFamily="avenir"
                  textAlign="left"
                  textTransform="uppercase"
                >
                  1 Million sqft.{" "}
                  <Text
                    as="span"
                    fontSize="1.25rem"
                    textTransform="lowercase"
                    fontFamily="avenir"
                  >
                    approx.
                  </Text>
                </Heading>
                <Text
                  fontSize="1.125rem"
                  textAlign="left"
                  fontFamily="veralaRound"
                >
                  Development
                </Text>
          </Flex>
          </Flex>
          <Flex >
          <Flex pr="1.875rem">
              <Flex 
              bgColor="inherit"
              align="center"
              justify="center"
              direction="column">
              <Divider
              orientation="vertical"
              h="1.875rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              pos="relative"
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid black"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              opacity="0"
              display="flex"
              orientation="vertical"
              h="2.4rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
              </Flex>
          </Flex>
          <Flex
              direction="column"
            >
            <Heading
                pt="1.4rem"
                fontSize="1.5rem"
                fontFamily="avenir"
              >
                100+
              </Heading>
              <Text
                fontSize="1.125rem"
                fontFamily="veralaRound"
              >
                Happy Consultancy Clients
              </Text>
          </Flex>
          </Flex>
          <Button
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
          Know More
          </Link>
        </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
