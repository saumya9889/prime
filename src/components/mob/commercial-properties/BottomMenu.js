import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsChatRightText } from "react-icons/bs";

const BottomMenu = () => {
  return (
    <Flex
      pos="fixed"
      bottom="0"
      display={{ base: "flex", lg: "none" }}
      w="100%"
      gap="2px"
      zIndex="99"
    >
      <Flex
        as={Button}
        borderRadius="none"
        _hover={{ bgGradient: "linear(to-b,#B88746,  #DFBD69)" }}
        w="100%"
        bgGradient="linear(to-b,#B88746,  #DFBD69)"
        p="0.625rem"
        color="white"
        align="center"
        justify="center"
      >
        <BiEdit size="1.25rem" />{" "}
        <Heading fontSize="0.75rem" pl="0.313rem">
          ENQUIRE
        </Heading>
      </Flex>
      <Flex
        as={Button}
        borderRadius="none"
        _hover={{ bgGradient: "linear(to-b,#B88746,  #DFBD69)" }}
        w="100%"
        bgGradient="linear(to-b,#B88746,  #DFBD69)"
        p="0.625rem"
        color="white"
        align="center"
        justify="center"
      >
        <IoLogoWhatsapp
          size="1.25rem"
          color="#25D366"
          style={{ backgroundColor: "#fff", borderRadius: "50%" }}
        />{" "}
        <Heading pl="0.313rem" fontSize="0.75rem">
          WHATSAPP
        </Heading>
      </Flex>
      <Flex
        as={Button}
        borderRadius="none"
        _hover={{ bgGradient: "linear(to-b,#B88746,  #DFBD69)" }}
        w="100%"
        bgGradient="linear(to-b,#B88746,  #DFBD69)"
        p="0.625rem"
        color="white"
        align="center"
        justify="center"
      >
        <BsChatRightText size="1.25rem" />{" "}
        <Heading fontSize="0.75rem" pl="0.313rem">
          CHAT
        </Heading>
      </Flex>
    </Flex>
  );
};

export default BottomMenu;
