import { Box } from "@chakra-ui/react";
import React, { useLayoutEffect } from "react";
import MainSec from "../components/mob/home/MainSec";
import AboutUs from "../components/mob/home/AboutUs";
import Invest from "../components/mob/home/Invest";
import OurProjects from "../components/mob/home/OurProjects";
import SmartLiving from "../components/mob/home/SmartLiving";
import Ponneri from "../components/mob/home/Ponneri";
import Allia from "../components/mob/home/Alia";
import LastSection from "../components/mob/home/lastSection";
import { revealAgain, revealOnce } from "../hooks/util";

const HomeScMob = () => {
  useLayoutEffect(()=>{
    window.addEventListener("scroll", revealAgain);
    window.addEventListener("scroll", revealOnce);
    return()=>{
      window.removeEventListener("scroll", revealAgain);
      window.removeEventListener("scroll", revealOnce);
    }
  });
  return (
    <> 
    
      <MainSec width="100%"/>
      <AboutUs />
      <Invest />
      <OurProjects />
      <SmartLiving />
      <Ponneri />
      <Allia />
      <LastSection />
    </>
  );
};

export default HomeScMob;
