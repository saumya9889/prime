import React, { useLayoutEffect } from "react";
import AboutBanner from "../components/mob/expertise/aboutBanner";
import Ourclients from "../components/mob/expertise/Ourclients";
import Consultation from "../components/mob/expertise/Consultation";
import Whoweare from "../components/mob/expertise/Whoweare";
import DropDown from "../components/sky-high/DropDown";
import { revealAgain, revealOnce } from "../hooks/util";
import OurProjects from "../components/mob/expertise/OurProjects";
import PrimeRealtyCap from "../components/mob/expertise/PrimeRelatyCap";
import PrimeAdvisors from "../components/mob/expertise/PrimeAdvisors";
const ExpertiseScMob =()=>{
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
        <AboutBanner/>
        <Whoweare />
        <Consultation />
        <Ourclients />
        <OurProjects />
        <PrimeRealtyCap />
        <PrimeAdvisors />
        <DropDown />
        </>
      )
}
export default ExpertiseScMob;