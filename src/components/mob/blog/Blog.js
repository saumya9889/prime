import {
  Text,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Button,
  Icon,
  Select,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  VStack,
  StackDivider,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import React, { useLayoutEffect } from "react";
// images
import banner1 from "./construction-silhouette.jpg";
import banner2 from "./01.jpg";
import banner3 from "./couple.jpg";
import coinJar from "./coinjar.jpg";
import hall from "./orangecouch.jpg";
import key from "./keys.jpg";
import kidbed from "./breakfastinbed.jpg";
import sunlight from "./meditate.jpg";
import spacejoy from "./boxes.jpg";
import bgBox from "../../careers imgs/bg-box.jpg"
//"../careers imgs/bg-box.jpg";
// icons
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
//animation
import "./bloganimation.css"
import "./blogstyle.css"
import GetInTouch from "./GetInTouch";
import { Link } from "react-router-dom";
const Blog = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try{

    for (var i = 0; i <= reveals.length; i++) {
      
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i]
        ? reveals[i].getBoundingClientRect().top
        : null;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }catch(e){
    
  }
  }
  useLayoutEffect(()=>{
    window.addEventListener("scroll", reveal);
    return()=>{window.removeEventListener("scroll", reveal);}
  });
  const redirect =(loc) =>{
    window.open(`${loc.target.id}`);
  }
  return (
    <>
      {/* banner sec */}
      <Flex w="100%" h="100%" pos="relative" direction="column" overflow="hidden">
        <Image
          animation="blog-banner-left 1 2s linear"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="40%"
          src={banner1}
        />
        <Image
          animation="blog-banner-right 1 2s linear"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="70%"
          src={banner2}
        />
        <Image
          animation="blog-banner-left 1 2s linear"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="60%"
          src={banner3}
        />
        <Heading
          top="47%"
          left="50%"
          transform="translate(-50%,-50%)"
          pos="absolute"
          textAlign="center"
          fontFamily="avenir"
          fontSize="2.5rem"
          animation="fadein 1 1s linear"
        >
          BLOG
        </Heading>
      </Flex>
      {/* banner sec */}
      <Flex
        direction="column"
        w="100%"
        h="100%"
        px="1rem"
        pb="3.125rem"
        gap="1.875rem"
      >
        <Flex zIndex="2" pt="1.875rem" mt="-1.875rem" w="100%" h="100%" direction="column" align="center" background="white">
        <Flex h="100%" justify="flex-end" pb="0.938rem">
          <Icon id="https://youtube.com/@PrimeLifespace" onClick={(e)=>redirect(e)} as={AiOutlineYoutube}  w="2.563rem" h="2.1rem" />
          <Icon id="https://instagram.com/prime_lifespace?igshid=YmMyMTA2M2Y=" onClick={(e)=>redirect(e)} as={AiOutlineInstagram} w="1.875rem" h="1.875rem" />
          <Icon id="https://www.facebook.com/primelifespacearetehomes" onClick={(e)=>redirect(e)} as={RiFacebookCircleLine} w="1.875rem" h="1.875rem" />
          <Icon id="https://www.linkedin.com/company/prime-lifespace-consultancy-pvt-ltd/" onClick={(e)=>redirect(e)} as={AiOutlineLinkedin} w="1.875rem" h="1.875rem" />
        
      </Flex>
      <Flex w="100%" direction="column" mb="0.938rem" pb="0.938rem" boxShadow="2xl" background="white">
        <Text fontFamily="veralaRound" fontSize="1rem" pb="0.625rem">
          Category
        </Text>
        <Select
          placeholder="ALL"
          fontSize="1.125rem"
          fontWeight="bold"
          fontFamily="avenir"
          bgColor="gray.200"
          borderRadius="none"
        >
          <option value="Home Buying Journey">Home Buying Journey</option>
          <option value="Real Estate Investments">
            Real Estate Investments
          </option>
          <option value="NRI Corner">NRI Corner</option>
          <option value="Commercial Property">Commercial Property</option>
          <option value="Residential Property">Residential Property</option>
          <option value="Real Estate Trends">Real Estate Trends</option>
        </Select>
      </Flex>
          <Grid
            h="100%"
            templateColumns="repeat(2, 1fr)"
            gap="1.563rem"
            pb="1.563rem"
          >
            <GridItem pos="relative" colSpan={2}>
            <Heading
              zIndex="2"
              pos="absolute"
              top="0"
              w="6rem"
              px="0.632rem"
              fontSize="14px"
              p="10px"
              color="white"
              fontFamily="avenir"
              bgGradient="linear(to-r, #B88746 ,#DFBD69)"
              textTransform="uppercase"
            >
              Featured
            </Heading>
              <Flex w="100%" h="100%" box-shadow="0px 10px 20px rgba(0, 0, 0, 0.25)" direction="column">
                <Flex w="100%" h="100%" overflow="hidden">
                  <Image
                    className="blog-image-left reveal"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="80%"
                    src={coinJar}
                  />
                </Flex>
                <Flex
                  overflow="hidden"
                  w="100%"
                  h="33.5rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  pos="relative"
                >
                  <Text
                    fontFamily="goudy"
                    fontSize="1.5rem"
                    pb="1.563rem"
                    px="0.6rem"
                    pt="1rem"
                    textTransform="uppercase"
                  >
                    Why investing in residential property, a must for better
                    future?
                  </Text>
                  <Flex
                    className="blog-text-right reveal"
                    pos="absolute"
                    w="100%"
                    bgColor="#DFBD69"
                    p="0.8rem"
                    boxShadow="xl"
                    top="8.5rem"
                    right="0"
                  >
                    <Text pos="relative" fontFamily="veralaRound" fontSize="1rem">
                      Real estate investments in India are hands-down the safest
                      option. We are all trying to secure our future and looking
                      for the best options possible to multiply our savings and
                      wealth...
                      <br/>
                      <Text fontSize="1rem" textAlign="right">READ MORE</Text>
                    </Text>
                  </Flex>
                  
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              {" "}
              <Flex
                w="100%"
                h="31.563rem"
                boxShadow="xl"
                direction="column"
                pos="relative"
                overflow="hidden"
              >
                <Flex w="100%" h="100%" box-shadow="0px 10px 20px rgba(0, 0, 0, 0.25)">
                  <Image
                    className="blog-image-down reveal"
                    w="100%"
                    h="20.375rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={sunlight}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  color="white"
                >
                  <Flex
                    h="15rem"
                    pos="absolute"
                    bgColor="black"
                    p="1.563rem"
                    boxShadow="xl"
                    bottom="1.563rem"
                    left="1.563rem"
                    right="1.563rem"
                  >
                    <Text fontFamily="goudy" fontSize="1.125rem">
                      <Text
                        fontFamily="goudy"
                        fontSize="1rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        Arete Homes, A Smart Township Lifestyle you wished for!
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="0.9rem"
                      >
                        Prime Lifespace Developers presents the Largest Smart
                        Township Of North Channai, Arete...
                        <br/>
                        <Text fontSize="1rem" textAlign="right">READ MORE</Text>
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              {" "}
              <Flex
                w="100%"
                h="31.563rem"
                boxShadow="xl"
                direction="column"
                pos="relative"
                overflow="hidden"
              >
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-down reveal"
                    w="100%"
                    h="20.375rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={spacejoy}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  pos="relative"
                  color="white"
                >
                  <Flex
                    h="13.5rem"
                    pos="absolute"
                    bgColor="black"
                    p="1.563rem"
                    boxShadow="xl"
                    bottom="1.563rem"
                    left="1.563rem"
                    right="1.563rem"
                  >
                    <Text fontFamily="goudy" fontSize="1.125rem">
                      <Text
                        fontFamily="goudy"
                        fontSize="1rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        RELOCATING TO CHENNAI FOR WORK OR EDUCATION?
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="0.9rem"
                      >
                        It’s time to pack up and find the right home for rent In
                        Chennai. We are here to guide you.........
                        <br/>
                        <br/>
                        <Text fontSize="1rem" textAlign="right">READ MORE</Text>
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex w="100%" h="100%" boxShadow="xl" overflow="hidden" direction="column">
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-left reveal"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="80%"
                    src={hall}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="35.5rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  pos="relative"
                >
                  <Text
                    fontFamily="goudy"
                    fontSize="1.5rem"
                    pb="1.563rem"
                    px="1rem"
                    pt="1rem"
                    textTransform="uppercase"
                  >
                    WHY SHOULD YOU CHOOSE FLAT OVER INDEPENDENT HOUSES?
                  </Text>
                  <Flex
                    className="blog-text-right reveal blog-community-wrap"
                    pos="absolute"
                    w="100%"
                    bgColor="black"
                    color="white"
                    p="1rem"
                    boxShadow="xl"
                    bottom="1rem"
                    right="0"
                  >
                    <Text fontFamily="veralaRound" fontSize="1rem">
                      With modernisation making life simpler and unfolding the
                      chapters of growth for every citizen, its time to
                      understand the advantages of apartments in gated community...…
                      <br/>
                      <br/>
                      <Text fontSize="1rem" textAlign="right">READ MORE</Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              {" "}
              <Flex
                w="100%"
                h="31.563rem"
                boxShadow="xl"
                direction="column"
                pos="relative"
                overflow="hidden"
              >
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-down reveal"
                    w="100%"
                    h="20.375rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={key}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  color="white"
                >
                  <Flex
                    h="15rem"
                    pos="absolute"
                    bgColor="black"
                    p="1.563rem"
                    boxShadow="xl"
                    bottom="1.563rem"
                    left="1.563rem"
                    right="1.563rem"
                  >
                    <Text fontFamily="goudy" fontSize="1.125rem">
                      <Text
                        fontFamily="goudy"
                        fontSize="1rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        LOOKING FOR HOME FOR SALE IN CHENNAI? FOLLOW THESE 5
                        STEPS TO BUY ONE
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="0.9rem"
                      >
                        Purchasing a home is regarded as a major milestone in
                        one’s life. Home ownership is associated with ........
                        <br/>
                        <br/>
                        <Text fontSize="1rem" textAlign="right">READ MORE</Text>
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              {" "}
              <Flex
                w="100%"
                h="31.563rem"
                boxShadow="xl"
                direction="column"
                pos="relative"
                overflow="hidden"
              >
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-down reveal"
                    w="100%"
                    h="20.375rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={kidbed}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  pos="relative"
                  color="white"
                >
                  <Flex
                    h="15rem"
                    pos="absolute"
                    bgColor="black"
                    p="1.563rem"
                    boxShadow="xl"
                    bottom="1.563rem"
                    left="1.563rem"
                    right="1.563rem"
                  >
                    <Text fontFamily="goudy" fontSize="1.125rem">
                      <Text
                        fontFamily="goudy"
                        fontSize="1rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        Amenities to ensure when buying a rented properties for
                        sale
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="0.9rem"
                      >
                        In today’s time, living a ahealthy lifestyle with a
                        rational and serene mindset is a luxuiry and is
                        consid.....
                        <br/>
                        <br/>
                        <Text fontSize="1rem" textAlign="right">READ MORE</Text>
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
          {/*<Button
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            LOAD MORE
          </Button>*/}
        </Flex>
        <GetInTouch />
        {/*<Flex w="90%" h="50%" direction="column" bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover">
          <BlogForm />
        </Flex>*/}
      </Flex>
    </>
  );
};

export default Blog;

const BlogForm = () => {
  return (
    <>
      {/* get in touch*/}
      <Flex
        direction="column"
        w="100%"
        h="100%"
        pb="1.875rem"
        px="1rem"
      >
        {" "}
        <Text
          fontFamily="goudy"
          fontSize="1.5rem"
          pb="1.563rem"
          
        >
          GET IN TOUCH
        </Text>
        <form>
          <FormControl isRequired>
            {" "}
            <HStack w="100%" justify="space-between" pb="0.938rem">
              <FormLabel fontFamily="avenir" fontSize="0.875rem" fontWeight="bold">
                NAME
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="veralaRound"
                lineHeight="1.5rem"
                w="13.125rem"
                h="2.188rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl isRequired>
            {" "}
            <HStack w="100%" justify="space-between" pb="0.938rem">
              <FormLabel fontFamily="avenir" fontSize="0.875rem" fontWeight="bold">
                PHONE
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="veralaRound"
                lineHeight="1.5rem"
                w="13.125rem"
                h="2.188rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl>
            <HStack w="100%" justify="space-between" pb="0.938rem">
              <FormLabel fontFamily="avenir" fontSize="0.875rem" fontWeight="bold">
                EMAIL
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="veralaRound"
                lineHeight="1.5rem"
                w="13.125rem"
                h="2.188rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl>
            <HStack w="100%" align="flex-start" justify="space-between">
              <FormLabel fontFamily="avenir" fontSize="0.875rem" fontWeight="bold">
                MESSAGE
              </FormLabel>
              <Textarea
                fontSize="1rem"
                fontFamily="veralaRound"
                lineHeight="1.5rem"
                w="13.125rem"
                h="4.375rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>
          </FormControl>
          <Button
            mx="6.875rem"
            mt="1.563rem"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            fontFamily="avenir"
            p="0.938rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            SUBMIT NOW
          </Button>
        </form>
      </Flex>
    </>
  );
};
