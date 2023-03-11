import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  Button,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnHd = motion(Heading);
const MtnFlx = motion(Flex);
const MtnDvdr = motion(Divider);
const MtnCrcl = motion(Box);
const MtnTxt = motion(Text);
const MtnBtn = motion(Button);

const SmartLiving = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateY.start({
        opacity: 1,
        y: 0,
      });
      animateX.start({
        opacity: 1,
        x: 0,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateY, animateX, animateFade]);

  return (
    // <Flex
    //   ref={ref}
    //   direction="column"
    //   w="100%"
    //   h="100%"
    //   pt="3.125rem"
    //   px="100px"
    //   align="center"
    // >
    //   <MtnHd
    //     initial={{ y: -50, opacity: 0 }}
    //     animate={animateY}
    //     transition={{ duration: 2, type: "just" }}
    //     fontSize="40px"
    //     fontFamily="goudy"
    //     fontWeight="400"
    //   >
    //     SMART LIVING
    //   </MtnHd>
    //   <Flex pt="1.875rem">
    //     <Flex direction="column" w="100%" h="100%" px="2" justify="flex-start">
    //       <MtnFlx
            
    //         transition={{ delay: 1.5, duration: 2, type: "just" }}
    //       >
    //         <Image className="expandcar reveal" w="570px" h="20.310rem" src="/images/smartliving.png" />
    //       </MtnFlx>
    //       <MtnFlx
    //         initial={{ opacity: 0, x: 100 }}
    //         animate={animateX}
    //         transition={{ delay: 3.5, duration: 2, type: "just" }}
    //         py="25%"
    //         align="center"
    //       >
    //         <Image className="expandcar reveal" h="80px" w="80px" mr="2" src="/images/managed.svg" />
    //         <Flex direction="column">
    //           <Heading fontSize="24px" fontFamily="avenir">
    //             MANAGED LIVING
    //           </Heading>
    //           <MtnTxt
    //             initial={{ opacity: 0 }}
    //             animate={animateFade}
    //             transition={{ delay: 5, duration: 2, type: "just" }}
    //             pt="0.625rem"
    //             fontSize="18px"
    //             fontFamily="veralaRound"
    //           >
    //             Premium serviced apartments in smart township living.
    //           </MtnTxt>
    //         </Flex>
    //       </MtnFlx>
    //       <MtnFlx
            
    //         transition={{ delay: 6.5, duration: 2, type: "just" }}
    //       >
    //         {" "}
    //         <Image
    //           className="expandcar reveal"
    //           w="570px"
    //           h="20.310rem"
    //           // mt="100px"
    //           src="/images/smartliving3.png"
    //         />
    //       </MtnFlx>
    //     </Flex>
    //     <Flex px="4" direction="column" align="center">
    //       <Flex w="1.875rem" h="20.310rem" direction="column" align="center">
    //         <MtnDvdr
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 1.5, duration: 2, type: "just" }}
    //           h="10rem"
    //           orientation="vertical"
    //           border="3px solid"
    //           borderColor="#DFBD69"
    //         />
    //         <MtnCrcl
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 1.5, duration: 2, type: "just" }}
    //           height="1.875rem"
    //           width="1.875rem"
    //           backgroundColor="#DFBD69"
    //           border="3px solid white"
    //           boxShadow="0px 0px 0px 3px #B88746"
    //           borderRadius="50%"
    //           my="1"
    //         />
    //         <MtnDvdr
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 3.5, duration: 2, type: "just" }}
    //           h="10rem"
    //           orientation="vertical"
    //           border="3px solid"
    //           borderColor="#DFBD69"
    //         />
    //       </Flex>
    //       <Flex w="1.875rem" h="20.310rem" direction="column" align="center">
    //         <MtnDvdr
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 3.5, duration: 2, type: "just" }}
    //           h="10rem"
    //           orientation="vertical"
    //           border="3px solid"
    //           borderColor="#DFBD69"
    //         />
    //         <MtnCrcl
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 3.5, duration: 2, type: "just" }}
    //           height="1.875rem"
    //           width="1.875rem"
    //           backgroundColor="#DFBD69"
    //           border="3px solid white"
    //           boxShadow="0px 0px 0px 3px #B88746"
    //           borderRadius="50%"
    //           my="1"
    //         />
    //         <MtnDvdr
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 6.5, duration: 2, type: "just" }}
    //           h="10rem"
    //           orientation="vertical"
    //           border="3px solid"
    //           borderColor="#DFBD69"
    //         />
    //       </Flex>
    //       <Flex w="1.875rem" h="26rem" direction="column" align="center">
    //         <MtnDvdr
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 6.5, duration: 2, type: "just" }}
    //           h="10rem"
    //           orientation="vertical"
    //           border="3px solid"
    //           borderColor="#DFBD69"
    //         />
    //         <MtnCrcl
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 6.5, duration: 2, type: "just" }}
    //           height="1.875rem"
    //           width="1.875rem"
    //           backgroundColor="#DFBD69"
    //           border="3px solid white"
    //           boxShadow="0px 0px 0px 3px #B88746"
    //           borderRadius="50%"
    //           my="1"
    //         />
    //         <MtnDvdr
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={animateY}
    //           transition={{ delay: 9.5, duration: 2, type: "just" }}
    //           h="13rem"
    //           orientation="vertical"
    //           border="3px solid"
    //           borderColor="#DFBD69"
    //         />
    //       </Flex>
    //     </Flex>

    //     <Flex direction="column" w="100%" px="2">
    //       <MtnFlx
    //         transition={{ delay: 1.5, duration: 2, type: "just" }}
    //         align="center"
    //       >
    //         <Image className="expandcar reveal" w="80px" h="20.310rem" mr="2" src="/images/co-living.svg" />
    //         <MtnFlx initial={{ opacity: 0 }}
    //             animate={animateFade}
    //             transition={{ delay: 3, duration: 2, type: "just" }} direction="column" py="10">
    //           <Heading  fontSize="24px" fontFamily="avenir">
    //             CO-LIVING FOR PROFESSIONALS
    //           </Heading>
    //           <MtnTxt
    //             pt="0.625rem"
    //             fontSize="18px"
    //             fontFamily="veralaRound"
    //           >
    //             Your home away from home.
    //           </MtnTxt>
    //         </MtnFlx>
    //       </MtnFlx>
    //       <MtnFlx
    //         transition={{ delay: 3.5, duration: 2, type: "just" }}
    //       >
    //         <Image className="expandcar reveal"  w="570px" h="20.310rem" src="/images/smartliving2.png" />
    //       </MtnFlx>
    //       <MtnFlx
    //          mt="1rem"
    //         initial={{ opacity: 0}}
    //         animate={animateX}
    //         transition={{ delay: 6.5, duration: 2, type: "just" }}
    //         align="center"
    //       >
    //         <Image  className="expandcar reveal" w="80px" h="20.310rem" mr="2" src="/images/student.svg" />
    //         <Flex direction="column">
    //           <Heading fontSize="24px" fontFamily="avenir">
    //             STUDENT HOUSING
    //           </Heading>
    //           <MtnTxt
    //             initial={{ opacity: 0 }}
    //             animate={animateFade}
    //             transition={{ delay: 8, duration: 2, type: "just" }}
    //             pt="0.625rem"
    //             fontSize="18px"
    //             fontFamily="veralaRound"
    //           >
    //             Modern student housing, co-living for professionals and serviced
    //             apartments.
    //           </MtnTxt>
    //         </Flex>
    //       </MtnFlx>
    //     </Flex>
    //   </Flex>
    //   <Flex mt="-2rem" direction="column" align="center">
    //     <MtnBtn
    //       initial={{ opacity: 0}}
    //       animate={animateY}
    //       transition={{ delay: 9.5, duration: 2, type: "just" }}
    //       w="162px"
    //       h="51px"
    //       P="16px"
    //       bgGradient="linear(to-b, #B88746 ,#DFBD69)"
    //       color="white"
    //       fontSize="16px"
    //       fontFamily="avenir"
    //       _hover={{
    //         bgGradient: "linear(to-b, #DFBD69, #B88746)",
    //       }}
    //       _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
    //     >
    //       EXPLORE NOW
    //     </MtnBtn>
    //   </Flex>
    // </Flex>

    <Flex
    ref={ref}
    w="100%"
    h="100%"
    py="3.125rem"
    direction="column"
    justify="center"
    className="smartliving-wrapper"
    >
      <MtnHd
        initial={{ y: -50, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontSize="40px"
        fontFamily="goudy"
        fontWeight="400"
        textAlign="center"
      >
        SMART LIVING  
    </MtnHd>
    <Flex pt="1.875rem">
     <Flex direction="column" w="100%" h="100%" px="2" justify="flex-start">
    <MtnFlx
            
            transition={{ delay: 1.5, duration: 2, type: "just" }}
          >
            <Image className="expandcar reveal" w="570px" h="20.310rem" src="/images/smartliving.png" />
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0, x: 100 }}
            animate={animateX}
            transition={{ delay: 3.5, duration: 2, type: "just" }}
            py="25%"
            align="center"
            className="manage-wrap"
          >
            <Image className="expandcar reveal" h="80px" w="80px" mr="2" src="/images/managed.svg" />
            <Flex direction="column">
              <Heading fontSize="24px" fontFamily="avenir">
                MANAGED LIVING
              </Heading>
              <MtnTxt
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 5, duration: 2, type: "just" }}
                pt="0.625rem"
                fontSize="18px"
                fontFamily="veralaRound"
              >
                Premium serviced apartments in smart township living.
              </MtnTxt>
            </Flex>
          </MtnFlx>
          </Flex>
          </Flex>
      </Flex>
  );
};

export default SmartLiving;
