import React, { useLayoutEffect } from "react";
import FifthSec from "../components/arete-homes/TownshipSec";
import FirstSec from "../components/arete-homes/HeroBanner";
import FourthSec from "../components/arete-homes/AreteHomesBanner";
import SecondSec from "../components/arete-homes/PlaceOfPurity";
import SeventhSec from "../components/arete-homes/PonneriGymClub";
import SixthSec from "../components/arete-homes/GreenSmart";
import ThirdSec from "../components/arete-homes/MasterPlan";
import EightSec from "../components/arete-homes/MivanTech";
import NinethSec from "../components/arete-homes/SmartHomes";
import TenthSec from "../components/arete-homes/FloorPlanAndPricing";
import EleventhSec from "../components/arete-homes/LocationAdv";
import TwelvethSec from "../components/arete-homes/SmartInvest";
import LastSec from "../components/arete-homes/HappyFamilies";
import DropDown from "../components/arete-homes/DropDown";
import DownloadBtn from "../components/sky-high/DownloadBtn";
import { revealAgain, revealOnce } from "../hooks/util";

const AreteHomes = () => {
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

export default AreteHomes;
