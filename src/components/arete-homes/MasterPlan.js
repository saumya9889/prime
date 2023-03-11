import { Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import masterplan from "./MASTER PLAN.jpg";
import ModalImage from "../modalImage";
import { BiZoomIn } from "react-icons/bi";

const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);

const ThirdSec = () => {
  const [isOpen,setIsOpen]=useState(false);  
const closeImage =() =>{
  setIsOpen(false);
}
const openImage =() =>{
  setIsOpen(true);
}
  const ref = useRef(null);
  const videoRef= useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateY = useAnimation();
  const animateScale = useAnimation();
  const stopAllYouTubeVideos = () => { 
    const iframes = document.querySelectorAll('iframe');
    Array.prototype.forEach.call(iframes, iframe => { 
      iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
    func: 'stopVideo',"args":"" }), '*');
   });
  }
  useEffect(() => {
    if (useInView) {
      animateY.start({
        y: 0,
        opacity: 1,
      });
      animateScale.start({
        scale: 1,
      });
    }
  }, [isInView, animateY, animateScale]);
  useLayoutEffect(()=>{
    console.log(videoRef.current)
    return()=>{
    }
  },[videoRef]);
  return (
    <>
    
    {isOpen?<ModalImage modalImage={masterplan} isOpen={isOpen} onClose={()=>closeImage()} />:<></>}
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="3.125rem"
      px="6.25rem"
      pb="3.125rem"
    >
      <MtnTxt
        initial={{ y: -50, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="1.875rem"
      >
        MASTER PLAN
      </MtnTxt>
      <Flex w="100%" h="100%">
        <MtnFlx
          initial={{ scale: 0.6 }}
          animate={animateScale}
          transition={{ duration: 2, type: "just" }}
          w="100%"
          h="100%"
        >
          <Image pos="relative" _hover={{cursor:"pointer"}} onClick={()=>openImage()} w="100%" h="31.25rem" src="/images/arete-homes/MASTER PLAN.jpg" />
          <Button
          onClick={()=>openImage()}
        pos="absolute"
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        w="5rem"
        h="3.187rem"
        mt="1.562rem"
        fontSize="1rem"
        fontFamily="avenir"
        bgGradient="linear(to-b, #B88746 ,#DFBD69)"
        color="white"
        _hover={{
          bgGradient: "linear(to-b, #DFBD69, #B88746)",
        }}
        _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
      >
        <Icon fontSize={"3xl"} as={BiZoomIn} />
      </Button>
        </MtnFlx>
        <MtnFlx
          ml="1.75rem"
          initial={{ scale: 0.6 }}
          animate={animateScale}
          transition={{ duration: 2, type: "just" }}
          w="100%"
          h="29.25rem"
        >
          <iframe ref={videoRef}  width="100%" height="100%" src="https://www.youtube.com/embed/qpTPxUiQqbQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </MtnFlx>
      </Flex>
    </Flex>
    </>
  );
};

export default ThirdSec;
