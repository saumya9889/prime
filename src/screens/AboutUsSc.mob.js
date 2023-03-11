import React, { useLayoutEffect } from "react";
import AboutBanner from "../components/mob/AboutUs/aboutBanner";
import Award from "../components/mob/AboutUs/award";
import BoardofDirectors from "../components/mob/AboutUs/BoardofDirectors";
import LeaderShip from "../components/mob/AboutUs/LeaderShip";
import Passionatwork from "../components/mob/AboutUs/Passionatwork";
import Whoweare from "../components/mob/AboutUs/Whoweare";
import DropDown from "../components/mob/sky-high/DropDown";
import { revealAgain, revealOnce } from "../hooks/util";
const AboutUsScMob =()=>{
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
      </>)
}
export default AboutUsScMob;