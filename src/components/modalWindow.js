import { Flex,Heading,Text,FormLabel,Checkbox, Image, Button, HStack, FormControl, Input, VStack, Icon } from "@chakra-ui/react";
import Modal from 'react-bootstrap/Modal';
import React from "react";
import call from "./callback.svg";
import free from "./free.svg";
import unmatched from "./unmatched.svg";

const ModalWindwow = ({modalTitle,modalImage,isOpen,onClose}) => {
  return (
    <>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
      />
      <Modal width="28.7rem" height="27.75" blockScrollOnMount={false} trapFocus={false} autoFocus={false} returnFocusOnClose={false} show={isOpen} onHide={onClose}>
          <Modal.Header style={{height:"0.9rem"}} closeButton>
            <Modal.Title style={{fontSize:"1rem",fontWeight:"bold"}}>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body returnFocusOnClose={false}>
            <Flex direction="column">
            <Image h="11.1875rem" width="27.5" src={modalImage} alt="IMG"  />
            <Flex mt="1rem">
            <Flex w="40%" align="center" direction="column" gap="0.5rem" ml="0.8rem">
              <Image height="2.5rem" width="14rem" ml="16rem" mb="2rem" src="/images/logo.png"/>
              <Flex direction="column" w="12rem" align="flex-start" ml="20%">
                <Image h="1.875rem" w="1.875rem" mb=".625rem" ml="25%" src={call} />
                <Heading mr="0.9rem" bgClip="text" bgGradient="linear(to-b,#B88746, #DFBD69)" w="100%"  fontSize="0.725rem" fontFamily="avenir">INSTANT CALL BACK</Heading>
              </Flex>
              <Flex direction="column" w="12rem" align="flex-start" ml="20%">
                <Image h="1.875rem" w="1.875rem" mb=".625rem" ml="25%" src={free} />
                <Heading ml="0.5rem" bgClip="text" bgGradient="linear(to-b,#B88746, #DFBD69)" w="100%"  fontSize="0.725rem" fontFamily="avenir">FREE SITE VISIT</Heading>
              </Flex>
              <Flex direction="column" w="12rem" align="flex-start" ml="20%">
              <Image h="1.875rem" w="1.875rem" mb=".625rem" ml="25%" src={unmatched} />
              <Heading mr="0.9rem" bgClip="text" bgGradient="linear(to-b,#B88746, #DFBD69)" w="100%"  fontSize="0.725rem" fontFamily="avenir">UNMATCHED PRICE</Heading>
              </Flex>
            </Flex>
            <Flex boxShadow="2xl" w="65%" p="0.9rem"  align="center" justify="center" direction="column" pb="1rem" ml="-1.5rem" mr="3rem"  mt="2.5rem" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover">
              <form>
              <Text textAlign="center" fontFamily="veralaRound" fontSize="1rem">Register here & avail best offers!</Text>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="10.75rem"
                    h="2rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="10.75rem"
                    h="2rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    
                    fontFamily="avenir"
                    fontSize="0.875rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="10.75rem"
                    h="2rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%">
                  <Checkbox
                    ml="17%"
                    value="yes"
                    fontFamily="veralaRound"
                    fontSize="0.875rem"
                    size="lg"
                  >
                   Get latest updates
                  </Checkbox>
                </HStack>
              </FormControl>
              <Button
                ml="18%"
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="0.75rem"
                fontFamily="avenir"
                p="0.938rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SCHEDULE A CALL
              </Button>
            </form>
            </Flex>
            </Flex>
            </Flex>
          </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindwow;