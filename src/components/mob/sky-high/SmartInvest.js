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
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const TenthSec = () => {
  const redirect =(loc) =>{
    window.location.replace(`${loc.target.id}`);
  }
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      pt="1.875rem"
      align="center"
      justify="center"
      direction="column"
    >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        mb="0.937rem"
      >
        SMART INVEST
      </Text>
      <Heading
        opacity={isInView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="avenir"
        fontSize="1.125rem"
        textAlign="center"
        mb="1.563rem"
        px="1rem"
      >
        AN EXCELLENT INVESTMENT OPPORTUNITY IN A
        LIFETIME GROWING ASSET
      </Heading>
      <Flex w="100%" h="100%" overflow="hidden" direction="column">
        <Flex
          w="100%"
          className="expandcar reveal"
          h="100%"
          pos="relative"
        >
          <Image
            px="1rem"
            h="18.75rem"
            w="100%"
            objectPosition="center top"
            objectFit="cover"
            src="/images/sky-high/SMART INVEST.jpg"
          />
          <Image
            pos="absolute"
            h="8rem"
            bottom="0.937rem"
            right="0.937rem"
            src="/images/sky-high/SMART INVEST ASSET.png"
          />
        </Flex>
        <Flex
          px="1rem"
          w="100%"
          direction="column"
          align="center"
          justify="center"
        >
          <Heading
            mt="1rem"
            transform={isInView ? "none" : "translateX(-50px)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            w="100%"
            fontSize="1.5rem"
            textAlign="center"
            fontFamily="avenir"
            mb="0.938rem"
          >
            EMI = RENT
          </Heading>
          <Flex
            w="100%"
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            pb="0.938rem"
            alignSelf="flex-start"
            direction="column"
          >
            {" "}
            <Text
              w="100%"
              textAlign="center"
              border="1px solid #B88746"
              borderLeft="none"
              borderBottom="none"
              fontFamiily="veralaRound"
              fontWeight="bold"
              fontSize="1rem"
              px="0.625rem"
              py="0.938rem"
              bgGradient="linear(to-b,#B88746, #DFBD69)"
              color="white"
            >
              SMART 2 BHK - 690 SQFT.
            </Text>{" "}
            <Flex w="100%" borderTop="none" border="1px solid #B88746">
              <VStack
                w="100%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  Rs. 34 LAKHS
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
                  Rs. 20,000{" "}
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
            opacity={isInView ? "1" : "0"}
            transition="all 2s 3s"
            w="100%"
            align="center"
            direction="column"
          >
            <Heading fontFamily="avenir" fontSize="1.25rem" mb="0.937rem">
              2 YEAR DOWNPAYMENT PLAN
            </Heading>
            <Text
              textAlign="center"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              Rental income + TAx savings + PMAY Benefits + Appreciation{" "}
            </Text>
            <Text textAlign="center" fontWeight="bold" fontSize="1.875rem">
              &#8595;
            </Text>
            <Text fontFamily="veralaRound" fontWeight="bold" fontSize="1.25rem">
              Income growth journey
            </Text>
            <Button
                id="/sky-high-invest"
                onClick={(e)=>redirect(e)}
                alignSelf="center"
                mt="1.563rem"
                transition="all 2s 3s"
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
    </Flex>
  );
};

export default TenthSec;
