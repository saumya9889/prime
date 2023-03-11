import React, { useLayoutEffect } from "react";
import AboutBanner from "../components/AboutUs/aboutBanner";
import Award from "../components/AboutUs/award";
import BoardofDirectors from "../components/AboutUs/BoardofDirectors";
import LeaderShip from "../components/AboutUs/LeaderShip";
import Passionatwork from "../components/AboutUs/Passionatwork";
import Whoweare from "../components/AboutUs/Whoweare";
import DropDown from "../components/sky-high/DropDown";
import { revealAgain, revealOnce } from "../hooks/util";
const AboutUsSc =()=>{
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
        <Passionatwork/>
        <BoardofDirectors/>
        <LeaderShip/>
        <Award/>
        <DropDown/>
      </>
      )
}
export default AboutUsSc;