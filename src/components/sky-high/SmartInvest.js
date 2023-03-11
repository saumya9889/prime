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
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const redirect =(loc) =>{
    window.location.replace(`${loc.target.id}`);
  }
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      pt="1.875rem"
      pb="3.125rem"
      align="center"
      justify="center"
      direction="column"
    >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="0.937rem"
      >
        SMART INVEST
      </Text>
      <Heading
        opacity={isInView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="avenir"
        fontSize="2.125rem"
        textAlign="center"
        mb="1.563rem"
      >
        AN EXCELLENT INVESTMENT OPPORTUNITY IN A <br />
        LIFETIME GROWING ASSET
      </Heading>
      <Flex w="100%" h="100%" overflow="hidden">
        <Flex
          w="50%"
          className="expandcar reveal"
          h="100%"
          pos="relative"
        >
          <Image
            
            h="31.25rem"
            w="100%"
            objectPosition="center top"
            objectFit="cover"
            src="/images/sky-high/SMART INVEST.jpg"
          />
          <Image
            pos="absolute"
            h="14.062rem"
            bottom="0.937rem"
            right="0.937rem"
            src="/images/sky-high/SMART INVEST ASSET.png"
          />
        </Flex>
        <Flex
          overflow="hidden"
          transform={isInView ? "none" : "translateY(-50px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          h="100%"
          direction="column"
          justify="flex-start"
          align="center"
          px="1.562rem"
        >
          <Divider
            className="slidein-top reveal"
            h="3.5rem"
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
          />
          <Box
            className="slidein-top reveal"
            height="1.875rem"
            width="1.875rem"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </Flex>
        <Flex
          w="50%"
          pr="6.25rem"
          direction="column"
          align="center"
          justify="center"
        >
          <Heading
            transform={isInView ? "none" : "translateX(-50px)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            w="100%"
            fontSize="1.5rem"
            textAlign="left"
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
              fontFamily="avenir"
              fontWeight="bold"
              fontSize="1.125rem"
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
                  For 3 Years
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
            <Text fontFamily="veralaRound" fontSize="24px" mb="0.938rem">
              Income growth journey
            </Text>
            <Button
              id="/sky-high-invest"
              onClick={(e)=>redirect(e)}
              w="9.125rem"
              h="3.187rem"
              fontSize="1rem"
              fontFamily="avenir"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
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
