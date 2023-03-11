import React, { useLayoutEffect } from "react";
import AboutBanner from "../components/mob/why-invest/aboutBanner";
import Ourclients from "../components/mob/why-invest/Ourclients";
import DropDown from "../components/mob/sky-high/DropDown";
import { revealAgain, revealOnce } from "../hooks/util";
import PrimeRealtyCap from "../components/mob/why-invest/PrimeRelatyCap";
import Advantages from "../components/mob/why-invest/Advantages";
import SmartLiving from "../components/mob/why-invest/SmartLiving";
import LogoSlider from "../components/mob/why-invest/partners";
import OurInvestors from "../components/mob/why-invest/ourInvestors";
const WhyInvestScMob =()=>{
    useLayoutEffect(()=>{
        window.addEventListener("scroll", revealAgain);
        window.addEventListener("scroll", revealOnce);
        return()=>{
          window.removeEventListener("scroll", revealAgain);
          window.removeEventListener("scroll", revealOnce);
        }
      });
      return (<>
        <AboutBanner/>
        <Ourclients/>
        <Advantages/>
        <PrimeRealtyCap/>
        <SmartLiving/>
        <LogoSlider/>
        <OurInvestors/>
        <DropDown/>
      </>)
}
export default WhyInvestScMob;