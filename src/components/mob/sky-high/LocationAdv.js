/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  Box,
  UnorderedList,
  ListItem,
  Image,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { useInView } from "framer-motion";

const NinethSec = () => {
  const gMap=()=>{
    window.open("https://www.google.com/maps/place/Prime+LifeSpace+-+Arete+Homes,+Apartments+for+Sale,+Rent+in+Ponneri,+North+Chennai/@13.309566,80.170749,9z/data=!4m5!3m4!1s0x0:0xcf7f977ed8629c08!8m2!3d13.3095658!4d80.1707491?hl=en");
  };
  const [location,setLocation]= useState("default");
  const changeLocation=(ev)=>{
    setLocation(ev.target.id);
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1rem"
      pt="3.125rem"
      pb="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        textAlign="center"
        transform={isInView ? "translate(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        textTransform="uppercase"
      >
        LOCATION ADVANTAGE
      </Text>
      <Heading
        textAlign="center"
        transform={isInView ? "translate(0)" : "translateY(50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="1.125rem"
        pt="1.563rem"
        pb="1.563rem"
      >
        PONNERI - A SMART CITY BY JICA
      </Heading>
      <Flex direction="column" w="100%" h="100%" align="flex-start" justify="flex-start">
        <Flex
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >
          <SimpleGrid
            w="100%"
            h="100%"
            mb="1.563rem"
            columns={3}
            gap="1rem"
          >
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)} 
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="temples"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/TEMPLES.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                TEMPLES
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="hospital"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/HOSPITAL.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                HOSPITALS
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="education"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/INSTITUTES.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px" textAlign="center">
                EDUCATIONAL <br />
                INSTITUTES
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="entertainment"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/SOCIAL FABRIC.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                SOCIAL
                <br /> FABRIC
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="itpark"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/INDUSTRY.svg"
                />
              </Box>
              <Heading textAlign="center" fontFamily="avenir" fontSize="14px">
                INDUSTRIAL <br />
                PARKS
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image id="ports" w="30px" h="30px" src="/images/arete-homes/PORT.svg" />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                PORTS
              </Heading>
            </VStack>
          </SimpleGrid>
          <Flex
            transform={isInView ? "scale(1)" : "scale(0.6)"}
            transition="all 2s"
            w="100%"
            h="100%"
            mb="15px"
          >
            {location==="default"?<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608248.2710182373!2d80.01102171706503!3d13.341951137783246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527f20d7084cd7%3A0xcf7f977ed8629c08!2sPrime%20LifeSpace%20-%20Arete%20Homes%2C%20Apartments%20for%20Sale%2C%20Rent%20in%20Ponneri%2C%20North%20Chennai!5e0!3m2!1sen!2sin!4v1673605589759!5m2!1sen!2sin"
          class="gmap_iframe"
              width="100%"
              height="350"
              frameBorder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0">
        </iframe>:<></>}
            {location==="temples"?<iframe src="https://www.google.com/maps/d/embed?mid=1SLUxNBnv1ngRxRWQjM6aqzGaqju0OV0&hl=en&ehbc=2E312F"
            class="gmap_iframe"
            width="100%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
            </iframe>:<></>}
            {location==="ports"?<iframe src="https://www.google.com/maps/d/embed?mid=1kok6j573KVL_Dhk2UU5kkbQ2nTiilyg&hl=en&ehbc=2E312F"
            class="gmap_iframe"
            width="100%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
            </iframe>:<></>}
            {location==="itpark"?<iframe src="https://www.google.com/maps/d/embed?mid=1iIxPSzS9nTmK4SlzmPcJaCK3mWhEEWQ&hl=en&ehbc=2E312F" 
            class="gmap_iframe"
            width="100%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
          </iframe>:<></>}
          {location==="hospital"?<iframe src="https://www.google.com/maps/d/embed?mid=1RbraLY35qn-_srxzJjXk4AYl3aTWiTM&hl=en&ehbc=2E312F"
          class="gmap_iframe"
          width="100%"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0">
        </iframe>:<></>}
        {location==="education"?<iframe src="https://www.google.com/maps/d/embed?mid=1WZ4D6cZM0aMphZYfhXsKKY0debNhDdo&hl=en&ehbc=2E312F" 
        class="gmap_iframe"
        width="100%"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>:<></>}
        {location==="entertainment"?<iframe src="https://www.google.com/maps/d/embed?mid=1nyO5GwDVSgvp_yPCc3cGU5zapiLYYg0&hl=en&ehbc=2E312F"
        class="gmap_iframe"
        width="100%"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>:<></>}
          </Flex>
          
          <Flex w="100%" h="100%">
              <Button
                onClick={()=>gMap()}
                w="100%"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SHOW LOCATION ON GOOGLE MAPS
              </Button>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          <Flex h="100%" direction="column" pr="1rem">
          <Flex
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="4.7rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="7.7rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="6.7rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="6.3rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 8s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="4.5rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 10s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="1.1rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
          </Flex>
          <Flex
            mt="2rem"
            h="100%"
            direction="column"
            align="flex-start"
            justify="space-between"
            pr="0.938rem"
          >
            <Heading
              pt="3.425rem"
              transform={isInView ? "none" : "translateX(-100px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              5 Mins
            </Heading>
            <Heading
              pt="8.5rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              10 Mins
            </Heading>
            <Heading
              pt="7.2rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              20 Mins
            </Heading>
            <Heading
              pt="7rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              30 Mins
            </Heading>
            <Heading
              pt="5.5rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 8s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              40 Mins
            </Heading>
            <Heading
              pt="2.1rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 10s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              2 Hours
            </Heading>
          </Flex>
          <Flex w="65%" h="100%" direction="column" gap="1.875rem">
            <UnorderedList
              pt="1.875rem"
              transform={isInView ? "none" : "translateX(-100px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="0.75rem"
            >
              <ListItem pb="0.312rem" pt="2.2rem">
                Walk to Velammal International School{" "}
              </ListItem>
              <ListItem pb="0.312rem">Drive To Origin by Mahindra </ListItem>
              <ListItem>Drive To Ponneri Railway Station</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="0.75rem"
            >
              <ListItem pb="0.312rem" pt="3.9rem">Connect To Outer Ring Road</ListItem>
              <ListItem pb="0.312rem">
                Drive To Siruvapuri Murugan Temple{" "}
              </ListItem>
              <ListItem>Vels Medical Hospital</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="0.75rem"
            >
              <ListItem pb="0.312rem" pt="2.7rem">Drive To Redhills</ListItem>
              <ListItem pb="0.312rem">Pulicat Lake </ListItem>
              <ListItem>Drive To Gummidipoondi Sipcot</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="0.75rem"
            >
              <ListItem pb="0.312rem" pt="2.5rem">Drive To Sri City</ListItem>
              <ListItem pb="0.312rem">Drive To Adani Port</ListItem>
              <ListItem>Drive To Ponneri Railway Station</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 8s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="0.75rem"
            >
              {" "}
              <ListItem pt="2.3rem">Drive To Chennai Airport</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 10s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="0.75rem"
            >
              {" "}
              <ListItem pt="0.5rem">Drive T0 Tirupati</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NinethSec;
