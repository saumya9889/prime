import { Button } from "@chakra-ui/react";
import React from "react";

import { BsDownload } from "react-icons/bs";

const DownloadBtn = () => {
  return (
    <Button
      pos="fixed"
      bottom="3.1rem"
      left="1rem"
      borderRadius="50%"
      h="3.125rem"
      w="3.125rem"
      zIndex="99"
      bgGradient="linear(to-b, #B88746 ,#DFBD69)"
      color="black"
      _hover={{
        bgGradient: "linear(to-b, #DFBD69, #B88746)",
      }}
      _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
    >
      <BsDownload size="2.5rem" />
    </Button>
  );
};

export default DownloadBtn;
