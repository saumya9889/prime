import { Flex, Text, FormLabel, Checkbox, Image, Button, HStack, FormControl, Input, VStack, Icon, Heading } from "@chakra-ui/react";
import Modal from 'react-bootstrap/Modal';
import { BsFillTelephoneFill, BsCurrencyDollar } from "react-icons/bs";
import carIll from "./refer and earn imgs/CAR ICON.svg";
import React from "react";
import call from "./callback.svg";
import free from "./free.svg";
import unmatched from "./unmatched.svg";

const EnquireWindow = ({ isOpened, onClosed }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <Modal size="lg" blockScrollOnMount={false} trapFocus={false} autoFocus={false} returnFocusOnClose={false} show={isOpened} onHide={onClosed} className="enquiry-wrapper">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body returnFocusOnClose={false}>
          <Flex direction="column">
            <Flex className="modal-content-grid">
              <Flex w="50%" align="center" className="modal-left-item" direction="column" gap="1rem" h="50%">
                <Image px="2rem" src="/images/logo.png" ml="20rem" className="desktop-logo" />
                <div className="left-grid">
                  <Flex direction="column" w="12rem" align="flex-start" >
                    <Image h="3.125rem" mb=".625rem" ml="25%" src={call} />
                    <Heading mr="0.9rem" bgClip="text" bgGradient="linear(to-b,#B88746, #DFBD69)" w="100%" fontSize="1rem" fontFamily="avenir">INSTANT CALL BACK</Heading>
                  </Flex>
                  <Flex direction="column" w="12rem" align="flex-start">
                    <Image h="3.125rem" mb=".625rem" ml="25%" src={free} />
                    <Heading ml="0.5rem" bgClip="text" bgGradient="linear(to-b,#B88746, #DFBD69)" w="100%" fontSize="1rem" fontFamily="avenir">FREE SITE VISIT</Heading>
                  </Flex>
                  <Flex direction="column" w="12rem" align="flex-start">
                    <Image h="3.125rem" mb=".625rem" ml="25%" src={unmatched} />
                    <Heading mr="0.9rem" bgClip="text" bgGradient="linear(to-b,#B88746, #DFBD69)" w="100%" fontSize="1rem" fontFamily="avenir">UNMATCHED PRICE</Heading>
                  </Flex>
                </div>
              </Flex>
              <Flex boxShadow="2xl" w="50%" className="modal-right-item" align="center" justify="center" direction="column" pb="1rem" mt="5rem" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
                bgRepeat="no-repeat"
                bgPos="center"
                bgSize="cover">
                <form>
                  <Text textAlign="center" fontFamily="veralaRound" fontSize="1rem" pt="1rem">Register here & avail best offers! demo</Text>
                  <FormControl isRequired>
                    {" "}
                    <HStack w="100%" justify="space-between" pb="0.938rem">
                      <FormLabel

                        fontFamily="avenir"
                        fontSize="1rem"
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
                        fontSize="1rem"
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
                        fontSize="1rem"
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
                        fontSize="1rem"
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
                    fontSize="1rem"
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

export default EnquireWindow;