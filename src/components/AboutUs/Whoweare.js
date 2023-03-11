import { Box, Center, Divider, Flex, Heading, Icon,Image, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import rajeev from "./rajeev1.jpeg"
import missionSvg from "./MISSION.svg";
import visionSvg from "./VISION.svg"

const Whoweare =()=>{
      return (<>
      <Flex direction="column">
      <Flex direction="column" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
      <Flex><Image opacity="0" h="2.5rem" w="100%"/></Flex>
      <Flex direction="column" overflow="hidden" px="100px" pt="2.5rem">
        <Center pb="1.875rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem">WHO WE ARE</Center>
        <Center pb="1.875rem" textAlign="center" className="fadein-2sdelay revealOnce" fontFamily="varela round" fontSize="1rem">Prime LifeSpace, as the name suggests, is a pre-eminent real estate consultancy & development firm, with 30+ years of experience in the industry.
Our brand is built on trust, transparency & quality in the real estate industry. We have established credentials in development of residential integrated townships & consulting services. Both these segments are equally important to us.<br/>
Prime LifeSpace consultancy firm offers an end-to-end solution in the Real Estate Space. The team has excelled in providing deep expertise to biggest corporates like Blackstone for Chandigarh Elante Mall, L&T for Seawood Project, Sunteck for Naigaon Project etc. Also, structured various eminent Joint Ventures, Mergers like L&T GeoTech with Sharaf Foundation.<br/>
Prime LifeSpace developers are renowned creators of smart integrated townships that provide more than just spaces to live in. The townships resemble improvement in quality of living, empowerment of communities and valuable experience of lifetime. Our properties are now fetching highest rental returns in the country. An investment choice for right value of money for the investors.</Center>
        </Flex>
        </Flex>
        <Flex overflow="hidden" pt="3.125rem" pb="6.875rem" pl="6rem" >
            <Flex direction="column" w="45%" className="fadein-2sdelay revealOnce">
                <Center><Text pb="1rem" fontFamily="goudy" fontSize="2.5rem">MISSION</Text></Center>
                <Center><Image h="5rem" w="5rem" src={missionSvg} pb="1.125rem" /></Center>
                <Flex direction="column">
                    <Heading pb="1rem" fontFamily="avenir" fontSize="1.125rem" textAlign="center">
                    BRIGHT IDEAS, SMART SOLUTIONS</Heading>
                    <Text fontFamily="varela round" fontSize="1rem" textAlign="center">
                    Our motto to fulfill your needs through modern and <br/>
                    innovative ideas. Further, transform potential opportunities<br/>
                    into high yielding investments
                    </Text>
                </Flex>
            </Flex>
            <Flex
            className="slidein-top reveal"
            transition="all 2s 2s"
            direction="column"
            align="center"
            px="1.562rem"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="5.50rem"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </Flex>
            <Flex className="fadein-2sdelay revealOnce" direction="column" w="45%">
                <Center><Text pb="1rem" fontFamily="goudy" fontSize="2.5rem">VISION</Text></Center>
                <Center><Image h="5rem" w="5rem" src={visionSvg} pb="1.125rem" /></Center>
                <Flex direction="column">
                    <Heading pb="1rem" fontFamily="avenir" fontSize="1.125rem" textAlign="center">INDIA'S MOST ADMIRED & IMPACTFUL<br/>
                    REAL ESTATE COMPANY</Heading>
                    <Text pb="1.125rem" fontFamily="varela round" fontSize="1rem" textAlign="center">
                    We aim to make a positive difference through our work,<br/>
                    with a vision of creating self-reliant townships where<br/>
                    people experience excellence, happiness and prosperity.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
        <Flex  pos="relative" pb="5rem"  px="100px" >
            <Flex w="100%" h="344px"  bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
            <Flex direction="column" className="fadein-2sdelay revealOnce" w="55%" >
            <Text  pt="3.125rem" pb="0.625rem" fontFamily="goudy" fontSize="2.5rem" textAlign="center">MR. RAJEEV AJMERA</Text>
            <Heading pb="1.125rem" fontFamily="avenir" fontSize="1.25rem" textAlign="center">CHAIRMAN & MANAGING DIRECTOR</Heading>
                    
                    <Text pos="relative" fontSize="1.125rem" textAlign="center" >
                    <Icon
                        mt=".625rem"
                        ml="1.875rem"
                        pos="absolute"
                        left="0"
                        top="-25%"
                        as={ImQuotesLeft}
                        w="4.375rem"
                        h="3.125rem"
                        color="#DFBD69" />
                      <Text fontFamily="varela Round" ml="-1rem" pt="1rem">We EXCEL in boosting livability quotient,<br/>
                    attract global fund & investors & create<br/>
                    positive impact on society that endeavors.</Text>
                    
                    <Icon
                      mr="3.125rem"
                        pos="absolute"
                        right="0"
                        bottom="-25%"
                        color="#DFBD69"
                        w="4.375rem"
                        h="3.125rem"
                        mb="-0.625rem"
                        as={ImQuotesRight} />
                    </Text>
            </Flex>
            <Image filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))" pos="absolute" right="130px" top="-8%" className="image-sliedright revealOnce" src={rajeev} objectFit="cover" w="448px" h="404px" alt="IMAGE"/>
        </Flex>
        </Flex>
        </Flex>
      </>)
}
export default Whoweare;