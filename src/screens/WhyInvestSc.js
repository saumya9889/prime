import React, { useLayoutEffect } from "react";
import AboutBanner from "../components/why-invest/aboutBanner";
import Ourclients from "../components/why-invest/Ourclients";
import DropDown from "../components/sky-high/DropDown";
import { revealAgain, revealOnce } from "../hooks/util";
import PrimeRealtyCap from "../components/why-invest/PrimeRelatyCap";
import Advantages from "../components/why-invest/Advantages";
import SmartLiving from "../components/why-invest/SmartLiving";
import LogoSlider from "../components/why-invest/partners";
import OurInvestors from "../components/why-invest/ourInvestors";
const WhyInvestSc =()=>{
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
export default WhyInvestSc;