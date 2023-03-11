import { Box } from "@chakra-ui/react";
import React, { useLayoutEffect } from "react";
import MainSec from "../components/MainSec";
import AboutUs from "../components/AboutUs";
import Invest from "../components/Invest";
import OurProjects from "../components/OurProjects";
import SmartLiving from "../components/SmartLiving";
import Ponneri from "../components/Ponneri";
import Allia from "../components/Alia";
import LastSection from "../components/lastSection";
import { revealAgain, revealOnce } from "../hooks/util";

const HomeSc = () => {
  useLayoutEffect(()=>{
    window.addEventListener("scroll", revealAgain);
    window.addEventListener("scroll", revealOnce);
    return()=>{
      window.removeEventListener("scroll", revealAgain);
      window.removeEventListener("scroll", revealOnce);
    }
  });
  return (
    <Box>
      <MainSec />
      <AboutUs />
      <Invest />
      <OurProjects />
      <SmartLiving />
      <Ponneri />
      <Allia />
      <LastSection />
    </Box>
  );
};

export default HomeSc;
