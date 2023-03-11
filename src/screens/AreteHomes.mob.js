import React, { useLayoutEffect } from "react";
import FifthSec from "../components/mob/arete-homes/TownshipSec";
import FirstSec from "../components/mob/arete-homes/HeroBanner";
import FourthSec from "../components/mob/arete-homes/AreteHomesBanner";
import SecondSec from "../components/mob/arete-homes/PlaceOfPurity";
import SeventhSec from "../components/mob/arete-homes/PonneriGymClub";
import SixthSec from "../components/mob/arete-homes/GreenSmart";
import ThirdSec from "../components/mob/arete-homes/MasterPlan";
import EightSec from "../components/mob/arete-homes/MivanTech";
import NinethSec from "../components/mob/arete-homes/SmartHomes";
import TenthSec from "../components/mob/arete-homes/FloorPlanAndPricing";
import EleventhSec from "../components/mob/arete-homes/LocationAdv";
import TwelvethSec from "../components/mob/arete-homes/SmartInvest";
import LastSec from "../components/mob/arete-homes/HappyFamilies";
import DropDown from "../components/mob/arete-homes/DropDown";
import DownloadBtn from "../components/mob/sky-high/DownloadBtn";
import { revealAgain } from "../hooks/util";
const AreteHomesMob = () => {
  useLayoutEffect(()=>{
    window.addEventListener("scroll", revealAgain);
    return()=>{
      window.removeEventListener("scroll", revealAgain);
    }
  });
  return (
    <>
      <DownloadBtn />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <EightSec />
      
      <FifthSec />
      <SixthSec />
      <SeventhSec />
      <FourthSec />
      <NinethSec />
      <TenthSec />
      <EleventhSec />
      <TwelvethSec />
      <LastSec />
      <DropDown />
    </>
  );
};

export default AreteHomesMob;