import React, { useLayoutEffect } from "react";
import DownloadBtn from "../components/mob/sky-high/DownloadBtn";
import DropDown from "../components/mob/sky-high/DropDown";
import EightSec from "../components/mob/sky-high/DelightfullMix";
import FifthSec from "../components/mob/sky-high/LiveLargest";
import FirstSec from "../components/mob/sky-high/HeroSec";
import FourthSec from "../components/mob/sky-high/CraftedLiving";
import LastSec from "../components/mob/sky-high/HappyFamilies";
import NinethSec from "../components/mob/sky-high/LocationAdv";
import SecondSec from "../components/mob/sky-high/AnIconic";
import SeventhSec from "../components/mob/sky-high/AwakenBanner";
import SixthSec from "../components/mob/sky-high/PonneriGymClub";
import TenthSec from "../components/mob/sky-high/SmartInvest";
import ThirdSec from "../components/mob/sky-high/ExperienceBanner";
import { revealAgain, revealOnce } from "../hooks/util";

const SkyHighScMob = () => {
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
      {" "}
      <DownloadBtn />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthSec />
      <SeventhSec />
      <EightSec />
      <NinethSec />
      <TenthSec />
      <LastSec />
      <DropDown />
    </>
  );
};

export default SkyHighScMob;
