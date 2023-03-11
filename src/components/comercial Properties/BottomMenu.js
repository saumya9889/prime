import { Button, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsChatRightText } from "react-icons/bs";
import EnquireWindow from "../enquireWindow";

const BottomMenu = () => {
  const [isOpened, setIsOpen] = useState(false);
  const handleEnquiry = () => setIsOpen(true);
  const handleEnquiryClose = () => setIsOpen(false);
  return (
    <>
      <EnquireWindow isOpened={isOpened} onClosed={handleEnquiryClose} />
      <Flex
        pos="fixed"
        bottom="0"
        display={{ base: "flex", lg: "none" }}
        w="100%"
        gap="2px"
        zIndex="99"
        className="bottom-menu-wrapper"
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
          <Heading fontSize="0.75rem" pl="0.313rem" onClick={handleEnquiry}>
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
          <a href="https://wa.me/9834383810"
            target="_blank" className="whatsapp-wrap">
            <IoLogoWhatsapp
              size="1.25rem"
              color="#25D366"
              style={{ backgroundColor: "#fff", borderRadius: "50%" }}
            />{" "}
            <Heading pl="0.313rem" fontSize="0.75rem" >
              WHATSAPP
            </Heading></a>
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
    </>
  );
};

export default BottomMenu;
