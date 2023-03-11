import {
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  Divider,
  Box,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnHd = motion(Heading);
const MtnFlx = motion(Flex);
const MtnDvdr = motion(Divider);

const OneStop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateHd = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateHd.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animateHd]);

  return (
    <Flex
      ref={ref}
      w="100%"
      minH="100%"
      align="center"
      justify="center"
      pt="5rem"
      pb="3.125rem"
      px="6.25rem"
      direction="column"
      pos="relative"
      bgColor="white"
    >
      <MtnHd
        initial={{ opacity: 0, y: -50 }}
        animate={animateHd}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        w="100%"
        fontSize="2.5rem"
        fontWeight="400"
        pb="1.875rem"
        textAlign="center"
      >
        ONE STOP SOLUTION FOR POWER SECTOR
      </MtnHd>
      <Flex direction="column" w="100%" h="100%">
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          {" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 1, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            
            pt="1.562rem"
          >
            <Flex w="100%" pb="0.937rem" align="center" justify="center">
              <Image
                w="5rem"
                h="5rem"
                src="/images/energy-page/financial-and-ppa.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="1.5rem"
              textTransform="uppercase"
              mb="0.937rem"
            >
              FINANCIAL & PPA SUPPORT
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="400"
            >
              <ListItem pb="0.625rem">Project Financing</ListItem>
              <ListItem>Power Purchase Agreements</ListItem>
            </UnorderedList>
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={animateHd}
            transition={{ delay: 1, duration: 2, type: "just" }}
            direction="column"
            align="center"
            w="100%"
            h="100%"
          >
            <MtnDvdr
              initial={{ opacity: 0, y: -50 }}
              animate={animateHd}
              transition={{ duration: 2, type: "just" }}
              orientation="vertical"
              h="2.5rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid #fff"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <MtnDvdr
              initial={{ opacity: 0, y: -100 }}
              animate={animateHd}
              transition={{ delay: 2, duration: 2, type: "just" }}
              display="flex"
              orientation="vertical"
              h="9.475rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 1, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="1.562rem"
            pt="1.562rem"
          >
            <Flex w="100%" pb="0.937rem" align="center" justify="center">
              <Image
                w="5rem"
                h="5rem"
                src="/images/energy-page/liaisoning.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="1.5rem"
              textTransform="uppercase"
              mb="0.937rem"
            >
              LIAISONING & APPROVALS
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="400"
            >
              <ListItem>
                Liaisoning for all Govt. Approvals for Project Sanctions
              </ListItem>
            </UnorderedList>
          </MtnFlx>
        </Flex>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          {" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="1.562rem"
            pt="1.562rem"
          >
            <Flex w="100%" pb="0.937rem" align="center" justify="center">
              <Image
                w="5rem"
                h="5rem"
                src="/images/energy-page/engineering-design.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="1.5rem"
              textTransform="uppercase"
              mb="0.937rem"
            >
              Engineering, Design & due diligence
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="400"
            >
              <ListItem pb="0.625rem">
                Material Procurement and Negotiation on behalf of client
              </ListItem>
              <ListItem pb="0.625rem">Project & Site Management</ListItem>
              <ListItem pb="0.625rem">
                Plant Commissioning & Synchronisation
              </ListItem>
              <ListItem pb="0.625rem">Performance Test</ListItem>
              <ListItem pb="0.625rem">Technology Assessment</ListItem>
              <ListItem>
                Independent Technical & Commercial Due diligence
              </ListItem>
            </UnorderedList>
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={animateHd}
            transition={{ delay: 3, duration: 2, type: "just" }}
            direction="column"
            align="center"
            w="100%"
            h="100%"
          >
            <MtnDvdr
              initial={{ opacity: 0, y: -50 }}
              animate={animateHd}
              transition={{ delay: 1, duration: 2, type: "just" }}
              orientation="vertical"
              h="2.5rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid #fff"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <MtnDvdr
              initial={{ opacity: 0, y: -50 }}
              animate={animateHd}
              transition={{ delay: 4, duration: 2, type: "just" }}
              display="flex"
              orientation="vertical"
              h="23.085rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="1.562rem"
            pt="1.562rem"
          >
            <Flex w="100%" pb="0.937rem" align="center" justify="center">
              <Image
                w="5rem"
                h="5rem"
                src="/images/energy-page/feasibility.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="1.5rem"
              textTransform="uppercase"
              mb="0.937rem"
            >
              FEASIBILITY STUDY
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="400"
            >
              <ListItem pb="0.625rem">Site Selection</ListItem>
              <ListItem pb="0.625rem">Resource Analysis</ListItem>
              <ListItem pb="0.625rem">Technical Review</ListItem>
              <ListItem pb="0.625rem">Environment Impact Analysis</ListItem>
              <ListItem pb="0.625rem">
                Identification & Selection of Technology
              </ListItem>
              <ListItem pb="0.625rem">Site Visits</ListItem>
              <ListItem>Detail Project Reports</ListItem>
            </UnorderedList>
          </MtnFlx>
        </Flex>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          {" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 4, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="1.562rem"
            pt="1.562rem"
          >
            <Flex w="100%" pb="0.937rem" align="center" justify="center">
              <Image
                w="5rem"
                h="5rem"
                src="/images/energy-page/o-m-consultancy.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="1.5rem"
              textTransform="uppercase"
              mb="0.937rem"
            >
              O & M+ CONSULTANCY
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="400"
            >
              <ListItem pb="0.625rem">
                Plant AMC for Operation & Maintenance
              </ListItem>
              <ListItem>Specification and Tender Assessment</ListItem>
            </UnorderedList>
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={animateHd}
            transition={{ delay: 4, duration: 2, type: "just" }}
            direction="column"
            align="center"
            w="100%"
            h="100%"
          >
            <MtnDvdr
              initial={{ opacity: 0, y: -50 }}
              animate={animateHd}
              transition={{ delay: 1, duration: 2, type: "just" }}
              orientation="vertical"
              h="2.5rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid #fff"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 4, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="1.562rem"
            pt="1.562rem"
          >
            <Flex w="100%" pb="0.937rem" align="center" justify="center">
              <Image
                w="5rem"
                h="5rem"
                src="/images/energy-page/procurement.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="1.5rem"
              textTransform="uppercase"
              mb="0.937rem"
            >
              PROCUREMENT & CONSTRUCTION
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="400"
            >
              <ListItem pb="0.625rem">Project Design and Optimization</ListItem>
              <ListItem pb="0.625rem">
                Detail Technology Assessment, Selection and Specification
                Preparation
              </ListItem>
              <ListItem>
                Preparation of Layout Drawings, Erection Documents etc
              </ListItem>
            </UnorderedList>
          </MtnFlx>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OneStop;
