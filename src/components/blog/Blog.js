import {
  Text,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Button,
  Select,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Link,
  Box,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React, { useLayoutEffect } from "react";
// images
import banner1 from "../blog imgs/construction-silhouette.jpg";
import banner2 from "../blog imgs/01.jpg";
import banner3 from "../blog imgs/gbxKKSknbsLcPco4c7DY0ZuVuLyKknpc2jQxX_2+3nG4ELLS9EqbFkW7dW+4VH9vgrzx8gzr96H8JiJgGW5cStbzqK4aTqzUsloK8ifacDydK0axPFhWiGZAVcLoHdn+XP8CQgud2V9fnNlK46S0632AgHrrCVyFnFSm3qQfx0kcJCh9NZcy0Ka_g.jpg";
import coinJar from "../blog imgs/towfiqu-barbhuiya-joqWSI9u_XM-unsplash.jpg";
import hall from "../blog imgs/spacejoy-q3Qd86sfaoU-unsplash.jpg";
import key from "../blog imgs/maria-ziegler-jJnZg7vBfMs-unsplash.jpg";
import kidbed from "../blog imgs/toa-heftiba-bcLE7reXFLM-unsplash.jpg";
import sunlight from "../blog imgs/jared-rice-NTyBbu66_SI-unsplash.jpg";
import spacejoy from "../blog imgs/boxes.jpg";
import bgBox from "../careers imgs/bg-box.jpg";
// icons
import yt from "../blog imgs/youtube.svg";
import yyt from "../blog imgs/1.svg";
import insta from "../blog imgs/insta.svg";
import yinsta from "../blog imgs/2.svg";
import linkedIn from "../blog imgs/linkedin.svg";
import yfb from "../blog imgs/face.svg";
import fb from "../blog imgs/face1.svg";
import yLinked from "../blog imgs/4.svg";
import { RiFacebookCircleLine } from "react-icons/ri";
//animation
import "./bloganimation.css";
import "./blogstyle.css";
const Blog = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try {
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
    } catch (e) {}
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  });
  return (
    <>
      {/* banner sec */}
      <Flex w="100%" h="100vh" pos="relative" overflow="hidden">
        <Image
          animation="blog-banner-down 1 2s linear"
          w="33%"
          h="100%"
          objectFit="cover"
          objectPosition="40%"
          src={banner1}
          opacity="1"
        />
        <Image
          animation="blog-banner-up 1 2s linear"
          w="34%"
          h="100%"
          objectFit="cover"
          objectPosition="70%"
          src={banner2}
          opacity="1"
        />
        <Image
          animation="blog-banner-down 1 2s linear"
          w="33%"
          h="100%"
          objectFit="cover"
          objectPosition="60%"
          src={banner3}
          opacity="1"
        />
        <Heading
          top="45%"
          left="50%"
          transform="translate(-50%,-50%)"
          pos="absolute"
          textAlign="center"
          fontFamily="avenir"
          fontSize="3rem"
          animation="fadein 1 1s linear"
          color="white"
        >
          BLOG
        </Heading>
      </Flex>
      {/* banner sec */}
      <Flex
        w="100%"
        h="100%"
        px="6.25rem"
        pt="1.563rem"
        pb="5rem"
        gap="1.875rem"
      >
        <Flex w="66%" h="100%" direction="column" align="center">
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
              <Flex w="100%" h="100%" boxShadow="xl" overflow="hidden">
                <Flex w="100%" h="100%">
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
                  w="100%"
                  h="30.688rem"
                  align="center"
                  // justify="center"
                  direction="column"
                  pos="relative"
                >
                  <Text
                    fontFamily="goudy"
                    fontSize="1.5rem"
                    pb="1.563rem"
                    px="1.563rem"
                    pt="3rem"
                    textTransform="uppercase"
                  >
                    Why investing in residential property, a must for better
                    future?
                  </Text>
                  <Flex
                    className="blog-text-right reveal"
                    pos="absolute"
                    w="110%"
                    bgColor="#DFBD69"
                    p="3.125rem"
                    boxShadow="0px 10px 20px rgba(0,0,0,0.25)"
                    bottom="2rem"
                    right="0"
                  >
                    <Text fontFamily="veralaRound" fontSize="1.125rem">
                      Real estate investments in India are hands-down the safest
                      option. We are all trying to secure our future and looking
                      for the best options possible to multiply our savings and
                      wealth...
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
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
                    h="14rem"
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
                        fontSize="1.25rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        Arete Homes, A Smart Township Lifestyle you wished for!
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="1rem"
                      >
                        Prime Lifespace Developers presents the Largest Smart
                        Township Of North Chennai...
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
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
                    h="14rem"
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
                        fontSize="1.25rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        RELOCATING TO CHENNAI FOR WORK OR EDUCATION?
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="1rem"
                      >
                        It’s time to pack up and find the right home for rent In
                        Chennai. We are here to guide you.........
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex w="100%" h="100%" boxShadow="xl" overflow="hidden">
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
                  h="30.688rem"
                  align="center"
                  // justify="center"
                  direction="column"
                  pos="relative"
                >
                  <Text
                    fontFamily="goudy"
                    fontSize="1.5rem"
                    pb="1.563rem"
                    px="1.563rem"
                    pt="3rem"
                    textTransform="uppercase"
                  >
                    WHY SHOULD YOU CHOOSE FLAT OVER INDEPENDENT HOUSES?
                  </Text>
                  <Flex
                    className="blog-text-right reveal"
                    pos="absolute"
                    w="110%"
                    bgColor="black"
                    color="white"
                    p="3.125rem"
                    boxShadow="xl"
                    bottom="2rem"
                    right="0"
                  >
                    <Text fontFamily="veralaRound" fontSize="1.125rem">
                      With modernisation making life simpler and unfolding the
                      chapters of growth for every citizen, its time to
                      understand the advantages of apartments in gated
                      community...…
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
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
                    h="14rem"
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
                        fontSize="1.25rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        LOOKING FOR HOME FOR SALE IN CHENNAI? FOLLOW THESE 5
                        STEPS TO BUY ONE
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="1rem"
                      >
                        Purchasing a home is regarded as a major milestone in
                        one’s...
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
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
                    h="14rem"
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
                        fontSize="1.25rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        Amenities to ensure when buying a rented properties for
                        sale
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="1rem"
                      >
                        In today’s time, living a ahealthy lifestyle with a
                        rational and serene mindset is a luxury and.....
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
          <Button
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
          </Button>
        </Flex>
        <Flex w="34%" h="100%" direction="column">
          <BlogForm />
        </Flex>
      </Flex>
    </>
  );
};

export default Blog;

const BlogForm = () => {
  return (
    <>
      <Flex h="100%" justify="flex-end" pb="0.938rem" gap="0.625rem">
        <Link href="https://youtube.com/@PrimeLifespace" isExternal>
          <Box pos="relative">
            <Image src={yt} />
            <Image
              src={yyt}
              pos="absolute"
              top="0"
              left="2%"
              opacity="0"
              _hover={{ opacity: 1 }}
            />
          </Box>
        </Link>
        <Link
          href="https://instagram.com/prime_lifespace?igshid=YmMyMTA2M2Y="
          isExternal
        >
          <Box pos="relative">
            <Image src={insta} />{" "}
            <Image
              src={yinsta}
              pos="absolute"
              top="0"
              left="1%"
              opacity="0"
              _hover={{ opacity: 1 }}
            />
          </Box>
        </Link>
        <Link
          href="https://www.facebook.com/primelifespacearetehomes"
          isExternal
        >
          <Box pos="relative">
            <Image src={fb} />
            <Image
              src={yfb}
              pos="absolute"
              top="0%"
              left="0%"
              bottom="0"
              right="0"
              opacity="0"
              _hover={{ opacity: 1 }}
            />
          </Box>
        </Link>
        <Link
          href="https://www.linkedin.com/company/prime-lifespace-consultancy-pvt-ltd/"
          isExternal
        >
          <Box pos="relative">
            <Image src={linkedIn} />
            <Image
              src={yLinked}
              pos="absolute"
              top="0"
              left="1%"
              opacity="0"
              _hover={{ opacity: 1 }}
            />
          </Box>
        </Link>
      </Flex>
      <Flex w="100%" direction="column" pb="0.938rem">
        <Text fontFamily="veralaRound" fontSize="1rem" pb="0.625rem">
          Category
        </Text>
        <Select
          placeholder="ALL"
          fontSize="1.125rem"
          fontFamily="avenir"
          bgColor="gray.200"
          borderRadius="none"
                 
        >
                  <option value="Home Buying Journey" style={{
                      "&:hover": {
                          backgroundColor: "#DFBD69",
                      },
                  }}>Home Buying Journey</option>
          <option value="Real Estate Investments">
            Real Estate Investments
          </option>
          <option
            value="NRI Corner"
          >
            NRI Corner
          </option>
          <option value="Commercial Property">Commercial Property</option>
          <option value="Residential Property">Residential Property</option>
          <option value="Real Estate Trends">Real Estate Trends</option>
        </Select>
      </Flex>
      {/* get in touch*/}
      <Flex
        direction="column"
        w="100%"
        h="100%"
        px="0.938rem"
        pt="1.563rem"
        pb="1.875rem"
        align="center"
        justify="center"
        bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        {" "}
        <Heading
          fontFamily="goudy"
          fontWeight="400"
          fontSize="1.5rem"
          pb="1.563rem"
        >
          GET IN TOUCH
        </Heading>
        <form>
          <FormControl isRequired>
            {" "}
            <Flex w="100%" justify="space-between" pb="0.938rem">
              <FormLabel fontFamily="avenir" fontSize="1rem" fontWeight="bold">
                NAME
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w="13.125rem"
                h="2.188rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </Flex>{" "}
                  </FormControl><FormControl>
                      <Flex w="100%" justify="space-between" pb="0.938rem">
                          <FormLabel fontFamily="avenir" fontSize="1rem" fontWeight="bold">
                              EMAIL
                          </FormLabel>
                          <Input
                              fontSize="1rem"
                              fontFamily="avenir"
                              lineHeight="1.5rem"
                              w="13.125rem"
                              h="2.188rem"
                              bgColor="#E5E5E5"
                              borderRadius="none"
                          />
                      </Flex>{" "}
                  </FormControl>
          <FormControl isRequired>
            {" "}
            <Flex w="100%" justify="space-between" pb="0.938rem">
              <FormLabel fontFamily="avenir" fontSize="1rem" fontWeight="bold">
                PHONE NO.
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w="13.125rem"
                h="2.188rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </Flex>{" "}
          </FormControl>
          <FormControl>
            <Flex w="100%" align="flex-start" justify="space-between">
              <FormLabel fontFamily="avenir" fontSize="1rem" fontWeight="bold">
                MESSAGE
              </FormLabel>
              <Textarea
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w="13.125rem"
                h="4.375rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </Flex>
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
            ENQUIRE NOW
          </Button>
        </form>
      </Flex>
      <Flex w="100%" h="100%" direction="column" pt="1.563rem">
        <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
          POPULAR BLOGS
        </Heading>
        <VStack
          divider={<StackDivider borderColor="#B88746" />}
          spacing={"0.938rem"}
          align="flex-start"
        >
          <Box pl="1rem">
            <Text fontFamily="veralaRound" fontSize="1rem">
              <ul listStylePosition="outside">
              <li>
              Why should you choose flat over independent house?
              </li>
              </ul>
            </Text>
          </Box>
          <Box pl="1rem">
            
            <Text fontFamily="veralaRound" fontSize="1rem">
              <ul listStylePosition="outside">
              <li>
              Why investing in residential property, a must for better future?
              </li>
              </ul>
            </Text>
            
          </Box>
          <Box pl="1rem">
              <Text fontFamily="veralaRound" fontSize="1rem">
              <ul>
              <li listStylePosition="outside">
              Amenities to ensure when buying a rented properties for sale
              </li>
              </ul>
            </Text>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};
