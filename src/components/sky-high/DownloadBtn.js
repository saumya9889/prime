import { Button } from "@chakra-ui/react";
import React, {useState} from "react";
import ModalWindwow from "../modalWindow";

import { BsDownload } from "react-icons/bs";
import areteInto1 from "../Invest imgs/arete homes - intro1.jpeg";

const DownloadBtn = () => {
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
    fetch("Channel Partner Brochure - Arete Homes.pdf").then(response=>{
      response.blob().then(blob=>{
        const fileURL = window.URL.createObjectURL(blob);
        let alink=document.createElement("a");
        alink.href = fileURL;
        alink.download = "Channel Partner Brochure - Arete Homes.pdf"
        alink.click();
      })
    })
  }
  const open =() =>{
    setIsOpen(true);
  }
  return (
    <>
    {isOpen?<ModalWindwow modalTitle={"ARATE HOMES"} modalImage={areteInto1} isOpen={isOpen} onClose={()=>close()} />:<></>}

    <Button
      pos="fixed"
      bottom="3.1rem"
      left="3.1rem"
      borderRadius="50%"
      h="5rem"
      w="5rem"
      zIndex="99"
      bgGradient="linear(to-b, #B88746 ,#DFBD69)"
      color="black"
      _hover={{
        bgGradient: "linear(to-b, #DFBD69, #B88746)",
      }}
      _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
      onClick={open}
    >
      <BsDownload size="2.5rem" />
    </Button>
    </>
  );
};

export default DownloadBtn;
