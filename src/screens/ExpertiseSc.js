import React, { useLayoutEffect } from "react";
import AboutBanner from "../components/expertise/aboutBanner";
import Ourclients from "../components/expertise/Ourclients";
import Consultation from "../components/expertise/Consultation";
import Whoweare from "../components/expertise/Whoweare";
import DropDown from "../components/sky-high/DropDown";
import { revealAgain, revealOnce } from "../hooks/util";
import OurProjects from "../components/expertise/OurProjects";
import PrimeRealtyCap from "../components/expertise/PrimeRelatyCap";
import PrimeAdvisors from "../components/expertise/PrimeAdvisors";
const ExpertiseSc =()=>{
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
        <Whoweare/>
        <Consultation/>
        <Ourclients/>
        <OurProjects/>
        <PrimeRealtyCap/>
        <PrimeAdvisors/>
        <DropDown/>
      </>)
}
export default ExpertiseSc;