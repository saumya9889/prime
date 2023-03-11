import React, { useState } from "react";
import { Flex, Divider, Box, Icon, Text, Link } from "@chakra-ui/react";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const MtnFlx = motion(Flex);
const MtnIcn = motion(Icon);

const SideVector = () => {
  const [dis, setDis] = useState(true);
  const track = () => {
    if (window.scrollY > 1900) {
      setDis(false);
    } else {
      setDis(true);
    }
  };

  window.addEventListener("scroll", track);

  return (
    <AnimatePresence>
      {dis && (
        <MtnFlx
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          display="flex"
          transition="all 2s"
          h="100%"
          w="100%"
          // bgColor="blackAlpha.300"
          zIndex="99"
        >
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "just", ease: "linear" }}
            h="100%"
            direction="row"
            align="center"
            justify="flex-start"
            color="black"
            pos="fixed"
            px="1rem"
            bottom="-20rem"
          >
            <Divider
              w="25vw"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
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
            <Flex
              ml="2rem"
              // initial={{ opacity: 1, top: -200 }}
              // animate={{ opacity: 1, top: 0 }}
              // transition={{ ease: "linear", delay: 2, duration: 2 }}
              // pos="absolute"
              direction="row"
              overflow="hidden"
              align="center"
            >
              <Icon
                as={RiInstagramFill}
                h="3.125rem"
                w="3.125rem"
                _hover={{
                  color: "#B88746",
                }}
                transition="linear 200ms"
              />

              <Icon
                as={RiLinkedinBoxFill}
                h="3.125rem"
                w="3.125rem"
                _hover={{ color: "#B88746" }}
                transition="linear 200ms"
              />

              <Icon
                as={RiFacebookCircleFill}
                h="3.125rem"
                w="3.125rem"
                borderRadius="50%"
                _hover={{ color: "#B88746" }}
                transition="linear 200ms"
              />
              <Icon
                as={RiYoutubeFill}
                h="3.125rem"
                w="3.125rem"
                _hover={{ color: "#B88746" }}
                transition="linear 200ms"
              />
            </Flex>
          </MtnFlx>
        </MtnFlx>
      )}
    </AnimatePresence>
  );
};

export default SideVector;
