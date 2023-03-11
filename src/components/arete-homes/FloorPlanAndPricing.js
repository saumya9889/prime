import {
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import React from "react";
import { useState } from "react";

import soldout from "../arete-homes imgs/SOLD OUT ASSET.png";

// tower a3
import towerA3_1 from "../arete-homes imgs/Tower A3-1.jpg";
import towerA3_2 from "../arete-homes imgs/TOWER A3-2.png";
import towerA3_3 from "../arete-homes imgs/TOWER A3-3.jpg";
import towerA3_4 from "../arete-homes imgs/TOWER A3-4.jpg";

// tower a4
import towerA4_1 from "../arete-homes imgs/Tower A4-1.jpg";
import towerA4_2 from "../arete-homes imgs/TOWER A4-2.png";
import towerA4_3 from "../arete-homes imgs/TOWER A4-3.jpg";
import towerA4_4 from "../arete-homes imgs/TOWER A4-4.jpg";

// tower a5
import towerA5_1 from "../arete-homes imgs/Tower A5-1.jpg";
import towerA5_2 from "../arete-homes imgs/TOWER A5-2.png";
import towerA5_3 from "../arete-homes imgs/TOWER A5-3.jpg";
import towerA5_4 from "../arete-homes imgs/TOWER A5-4.jpg";

// tower a5
import towerA6_1 from "../arete-homes imgs/Tower A6-1.jpg";
import towerA6_2 from "../arete-homes imgs/TOWER A6-2.png";
import towerA6_3 from "../arete-homes imgs/TOWER A6-3.jpg";
import towerA6_4 from "../arete-homes imgs/TOWER A6-4.jpg";

import ModalWindwow from "../modalWindow";
import areteInto1 from "../Invest imgs/arete homes - intro1.jpeg";

const settings = {
  infinite: true,
  autoplay: true,
  dots: true,
  speed: 500,
  fade: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

const TenthSec = () => {
  const [tower, setTower] = useState("TOWER A3")
  const handleClick=(event)=>{
    setTower(String(event.target.innerText));
  }
  const renderTower=()=>{
    switch (tower){
    case "TOWER A3":
        return <TowerA3/>;
        break;
    case "TOWER A4":
        return <TowerA4/>;
        break;
    case "TOWER A5":
      return <TowerA5/>;
        break;
    case "TOWER A6":
      return <TowerA6/>;
        break;
    default:
        return <></>
        break;
}
  }
  return (
    <Flex
      w="100%"
      pt="3.125rem"
      px="6.25rem"
      h="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontFamily="goudy" fontSize="2.5rem" mb="1.563rem">
        FLOOR PLAN AND PRICING
      </Text>
      <Heading fontFamily="avenir" fontSize="2.125rem" mb="1.563rem">
        SMART HOMES THAT ARE VASTU COMPLIANT
      </Heading>
      <Flex w="100%" h="100%" pb="0.938rem" justify="center">
        {" "}
        <Button
          onClick={(e)=>handleClick(e)}
          borderRadius="none"
          border="1px solid #DFBD69"
          fontSize="1.25rem"
          p="0.937rem"
          fontFamily="avenir"
          mr="0.625rem"
          bgColor={tower==="TOWER A3"?"#DFBD69":"white"}
          color="black"
          _hover={{
            bgColor: "#DFBD69",
          }}
          _active={{ bgColor: "#DFBD69" }}
        >
          TOWER A3
        </Button>
        <Button
          onClick={(e)=>handleClick(e)}
          borderRadius="none"
          border="1px solid #DFBD69"
          bgColor={tower==="TOWER A4"?"#DFBD69":"white"}
          p="0.937rem"
          fontSize="20px"
          fontFamily="avenir"
          mr="0.625rem"
          color="black"
          _hover={{
            bgColor: "#DFBD69",
          }}
          _active={{ bgColor: "#DFBD69" }}
        >
          TOWER A4
        </Button>
        <Button
          onClick={(e)=>handleClick(e)}
          borderRadius="none"
          border="1px solid #DFBD69"
          bgColor={tower==="TOWER A5"?"#DFBD69":"white"}
          fontSize="1.25rem"
          p="0.937rem"
          fontFamily="avenir"
          mr="0.625rem"
          color="black"
          _hover={{
            bgColor: "#DFBD69",
          }}
          _active={{ bgColor: "#DFBD69" }}
        >
          TOWER A5
        </Button>
        <Button
          onClick={(e)=>handleClick(e)}
          borderRadius="none"
          border="1px solid #DFBD69"
          bgColor={tower==="TOWER A6"?"#DFBD69":"white"}
          p="0.937rem"
          fontSize="1.25rem"
          fontFamily="avenir"
          color="black"
          _hover={{
            bgColor: "#DFBD69",
          }}
          _active={{ bgColor: "#DFBD69" }}
        >
          TOWER A6
        </Button>
      </Flex>
      <Flex w="100%" h="100%" gap="1.563rem">
        {renderTower()}
      </Flex>
    </Flex>
  );
};

export default TenthSec;

// const towers = [
//   {
//     towerA3: {
//       typeOf: "2 BHK(C), 2 BHK(L), 2.5 BHK",
//       saleable: "1025-1421 SQFT.",
//       floors: "10",
//       noOfFlats: "8",
//       imgs: [towerA3_1, towerA3_2, towerA3_3, towerA3_4],
//     },
//     towerA4: {
//       typeOf: "2 BHK(C), 2 BHK(L), 3 BHK",
//       saleable: "1025-1787 SQFT.",
//       floors: "10",
//       noOfFlats: "8",
//       imgs: [towerA4_1, towerA4_2, towerA4_3, towerA4_4],
//     },
//     towerA5: {
//       typeOf: "2 BHK(C), 2 BHK(L), 3 BHK",
//       saleable: "1017-1748 SQFT.",
//       floors: "10",
//       noOfFlats: "8",
//       imgs: [towerA5_1, towerA5_2, towerA5_3, towerA5_4],
//     },
//     towerA6: {
//       typeOf: "2 BHK(C), 2 BHK(L), 3 BHK",
//       saleable: "1008-1748 SQFT.",
//       floors: "10",
//       noOfFlats: "8",
//       imgs: [towerA6_1, towerA6_2, towerA6_3, towerA6_4],
//     },
//   },
// ];

const TowerA3 = () => {
  const imgs = [towerA3_1, towerA3_2, towerA3_3, towerA3_4];
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }

  return (
    <>
        {isOpen?<ModalWindwow modalTitle={"ARATE HOMES"} modalImage={areteInto1} isOpen={isOpen} onClose={()=>close()} />:<></>}

      <Flex w="60%" h="100%">
        <Box
          position={"relative"}
          height={"full"}
          width={"full"}
          overflow={"hidden"}
          boxShadow="dark-lg"
        >
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          <Slider {...settings}>
            {imgs.map((tes) => (
              <Image
                filter="auto"
                blur="5px"
                w="100%"
                h="24.563rem"
                src={tes}
                objectFit="cover"
                objectPosition="center"
              />
            ))}
          </Slider>
        </Box>
      </Flex>
      <Flex
        pos="relative"
        w="40%"
        h="100%"
        border="1px solid #B88746"
        align="center"
        direction="column"
      >
        <Image
          pos="absolute"
          src={soldout}
          w="7.5rem"
          h="7.5rem"
          left="0"
          top="0"
        />
        <Text
          w="100%"
          textAlign="center"
          borderBottom="1px solid #B88746"
          bgGradient="linear(to-b, #DFBD69, #B88746)"
          fontSize="1.25rem"
          fontFamily="veralaRound"
          color="white"
          p="0.938rem"
        >
          TOWER DETAILS
        </Text>
        <Flex
          w="100%"
          h="20.963rem"
          direction="column"
          pt="1.563rem"
          px="0.938rem"
          gap="1.25rem"
          align="center"
        >
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              TYPE OF UNITS
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              2 BHK(C), 2 BHK(L), 2.5 BHK
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              SALEABLE AREA
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              1025-1421 SQFT.
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              FLOORS
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              10
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              NO. OF FLATS ON EACH FLOOR
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              8
            </Heading>
          </HStack>{" "}
          <Button
            bgGradient="linear(to-b,#B88746,#DFBD69)"
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            color="white"
            _hover={{
              bgGradient: "linear(to-b,#DFBD69,#B88746)",
            }}
            _active={{ bgGradient: "linear(to-b,#B88746,#DFBD69)" }}
            onClick={open}
          >
            CHECK PRICE
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const TowerA4 = () => {
  const imgs = [towerA4_1, towerA4_2, towerA4_3, towerA4_4];
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }

  return (
    <>
            {isOpen?<ModalWindwow modalTitle={"ARATE HOMES"} modalImage={areteInto1} isOpen={isOpen} onClose={()=>close()} />:<></>}

      <Flex w="60%" h="100%">
        <Box
          position={"relative"}
          height={"full"}
          width={"full"}
          overflow={"hidden"}
          boxShadow="dark-lg"
        >
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          <Slider {...settings}>
            {imgs.map((tes) => (
              <Image
                filter="auto"
                blur="5px"
                w="100%"
                h="24.563rem"
                src={tes}
                objectFit="cover"
                objectPosition="center"
              />
            ))}
          </Slider>
        </Box>
      </Flex>
      <Flex
        pos="relative"
        w="40%"
        h="100%"
        border="1px solid #B88746"
        align="center"
        direction="column"
      >
        <Image
          pos="absolute"
          src={soldout}
          w="7.5rem"
          h="7.5rem"
          left="0"
          top="0"
        />
        <Text
          w="100%"
          textAlign="center"
          borderBottom="1px solid #B88746"
          bgGradient="linear(to-b, #DFBD69, #B88746)"
          fontSize="1.25rem"
          fontFamily="veralaRound"
          color="white"
          p="0.938rem"
        >
          TOWER DETAILS
        </Text>
        <Flex
         w="100%"
         h="20.963rem"
         direction="column"
         pt="1.563rem"
         px="0.938rem"
         gap="1.25rem"
         align="center"
        >
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              TYPE OF UNITS
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              2 BHK(C), 2 BHK(L), 3 BHK
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              SALEABLE AREA
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              1025-1787 SQFT.
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              FLOORS
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              10
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              NO. OF FLATS ON EACH FLOOR
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              8
            </Heading>
          </HStack>{" "}
          <Button
            bgGradient="linear(to-b,#B88746,#DFBD69)"
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            color="white"
            _hover={{
              bgGradient: "linear(to-b,#DFBD69,#B88746)",
            }}
            _active={{ bgGradient: "linear(to-b,#B88746,#DFBD69)" }}
            onClick={open}
          >
            CHECK PRICE
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const TowerA5 = () => {
  const imgs = [towerA5_1, towerA5_2, towerA5_3, towerA5_4];
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }

  return (
    <>
     {isOpen?<ModalWindwow modalTitle={"ARATE HOMES"} modalImage={areteInto1} isOpen={isOpen} onClose={()=>close()} />:<></>}

      <Flex w="60%" h="100%">
        <Box
          position={"relative"}
          height={"full"}
          width={"full"}
          overflow={"hidden"}
          boxShadow="dark-lg"
        >
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          <Slider {...settings}>
            {imgs.map((tes) => (
              <Image
                filter="auto"
                blur="5px"
                w="100%"
                h="24.563rem"
                src={tes}
                objectFit="cover"
                objectPosition="center"
              />
            ))}
          </Slider>
        </Box>
      </Flex>
      <Flex
        pos="relative"
        w="40%"
        h="100%"
        border="1px solid #B88746"
        align="center"
        direction="column"
      >
        <Text
          w="100%"
          textAlign="center"
          borderBottom="1px solid #B88746"
          bgGradient="linear(to-b, #DFBD69, #B88746)"
          fontSize="1.25rem"
          fontFamily="veralaRound"
          color="white"
          p="0.938rem"
        >
          TOWER DETAILS
        </Text>
        <Flex
          w="100%"
          h="20.963rem"
          direction="column"
          pt="1.563rem"
          px="0.938rem"
          gap="1.25rem"
          align="center"
        >
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              TYPE OF UNITS
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              2 BHK(C), 2 BHK(L), 3 BHK
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              SALEABLE AREA
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              1017-1748 SQFT.
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              FLOORS
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              10
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              NO. OF FLATS ON EACH FLOOR
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              8
            </Heading>
          </HStack>{" "}
          <Button
            bgGradient="linear(to-b,#B88746,#DFBD69)"
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            color="white"
            _hover={{
              bgGradient: "linear(to-b,#DFBD69,#B88746)",
            }}
            _active={{ bgGradient: "linear(to-b,#B88746,#DFBD69)" }}
          onClick={open}
          >
            CHECK PRICE
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const TowerA6 = () => {
  const imgs = [towerA6_1, towerA6_2, towerA6_3, towerA6_4];
 
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }
  return (
    <>
    {isOpen?<ModalWindwow modalTitle={"ARATE HOMES"} modalImage={areteInto1} isOpen={isOpen} onClose={()=>close()} />:<></>}

      <Flex w="60%" h="100%">
        <Box
          position={"relative"}
          height={"full"}
          width={"full"}
          overflow={"hidden"}
          boxShadow="dark-lg"
        >
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          <Slider {...settings}>
            {imgs.map((tes) => (
              <Image
                filter="auto"
                blur="5px"
                w="100%"
                h="24.563rem"
                src={tes}
                objectFit="cover"
                objectPosition="center"
              />
            ))}
          </Slider>
        </Box>
      </Flex>
      <Flex
        pos="relative"
        w="40%"
        h="100%"
        border="1px solid #B88746"
        align="center"
        direction="column"
      >
        <Text
          w="100%"
          textAlign="center"
          borderBottom="1px solid #B88746"
          bgGradient="linear(to-b, #DFBD69, #B88746)"
          fontSize="1.25rem"
          fontFamily="veralaRound"
          color="white"
          p="0.938rem"
        >
          TOWER DETAILS
        </Text>
        <Flex
          w="100%"
          h="20.963rem"
          direction="column"
          pt="1.563rem"
          px="0.938rem"
          gap="1.25rem"
          align="center"
        >
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              TYPE OF UNITS
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              2 BHK(C), 2 BHK(L), 3 BHK
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              SALEABLE AREA
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              1008-1748 SQFT.
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              FLOORS
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              10
            </Heading>
          </HStack>
          <HStack w="100%" gap="3.125rem">
            <Text w="40%" fontFamily="veralaRound" fontSize="1rem">
              NO. OF FLATS ON EACH FLOOR
            </Text>
            <Heading w="60%" fontFamily="avenir" fontSize="1.25rem">
              8
            </Heading>
          </HStack>{" "}
          <Button
            bgGradient="linear(to-b,#B88746,#DFBD69)"
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            color="white"
            _hover={{
              bgGradient: "linear(to-b,#DFBD69,#B88746)",
            }}
            _active={{ bgGradient: "linear(to-b,#B88746,#DFBD69)" }}
            onClick={open}
          >
            CHECK PRICE
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
