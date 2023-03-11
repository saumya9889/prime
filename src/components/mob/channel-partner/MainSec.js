import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MtnHd = motion(Heading);

const MainSec = () => {
  const [dis, setDis] = useState(false);
  const track = () => {
    if (window.scrollY > 20) {
      setDis(true);
    } else {
      setDis(false);
    }
  };

  window.addEventListener("scroll", track);

  return (
    <Flex
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      pos="relative"
      overflow="hidden"
    >
      <video
        autoPlay
        muted
        // loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width:"100%",
          height:"100vh",
          objectFit:"cover"
          // zIndex: -1,
        }}
      >
        <source
          src="/images/channel-partner/handshake-done.mp4"
          type="video/mp4"
        />
        {/* <source src="/images/energy/solar1.mp4" type="video/mp4" /> */}
      </video>
      <MtnHd
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "just" }}
        pos={dis ? "static" : "fixed"}
        fontSize="1.25rem"
        fontFamily="avenir"
        textTransform="uppercase"
        textAlign="center"
        zIndex="10"
        color={dis ? "black" : "white"}
        px="1rem"
      >
        where opportunities pave the way for <br />
        incredible rewards
      </MtnHd>
    </Flex>
  );
};

export default MainSec;
