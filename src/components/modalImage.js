import { Flex,Text,FormLabel,Checkbox, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Button, HStack, FormControl, Input, VStack } from "@chakra-ui/react";
import React from "react";

const ModalImage = ({size,modalImage,isOpen,onClose}) => {
  return (
    <>
      <Modal  size={size?size:"5xl"} trapFocus={false} blockScrollOnMount={false} returnFocusOnClose={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalCloseButton />
            <Image src={modalImage}  alt="IMG" />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalImage;