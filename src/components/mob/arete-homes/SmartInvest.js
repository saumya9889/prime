import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const TenthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const redirect =(loc) =>{
    window.location.replace(`${loc.target.id}`);
  }
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        mb="1.563rem"
      >
        SMART INVEST
      </Text>
      <Heading
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="1.125rem"
        textAlign="center"
        mb="1.563rem"
        px="1rem"
      >
        RETURNS HIGHER THAN YOUR IMAGINATION
      </Heading>
      <Flex w="100%" h="100%" overflow="hidden" direction="column">
        <Flex
          w="100%"
          overflow="hidden"
          pos="relative"
          justify="center"
        >
          <Image
            px="1rem"
             className="expandcar reveal"
            // pos="absolute"
            
            h="18.75rem"
            w="100%"
            objectPosition="center top"
            objectFit="cover"
            src="/images/arete-homes/SMART INVEST.jpg"
          />
          <Flex w="100%" pos="absolute" justify="center">
            <Heading
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              textAlign="center"
              fontSize="1rem"
              p="1rem"
              bgColor="#DFBD69"
            >
              START YOUR INCOME FROM DAY 1
            </Heading>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          px="1rem"
          direction="column"
          align="center"
          justify="center"
        >
          <Heading
            transform={isInView ? "translateX(0)" : "translateX(-100px)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
            w="100%"
            mt="1rem"
            fontSize="1.125rem"
            textAlign="center"
            fontFamily="avenir"
            mb="0.938rem"
          >
            EARN HIGHEST RENTAL INCOME (ROI)
          </Heading>
          <Flex
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
              SMART 2 BHK - 1085 SQFT.
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
                  Rs. 52 LAKHS
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
                  Rs. 32,000{" "}
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
          <Flex
            w="100%"
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            pb="0.938rem"
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
              SMART 3 BHK - 1787 SQFT.
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
                  Rs. 85 LAKHS
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
                  Rs. 48,000{" "}
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
          <Heading
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
            fontFamily="avenir"
            textAlign="center"
            fontSize="1.125rem"
          >
            ASSURED RENTAL INCOME FOR 3 YEARS!
          </Heading>
          <Button
                id="/arete-homes-invest"
                onClick={(e)=>redirect(e)}
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                KNOW MORE
              </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TenthSec;
