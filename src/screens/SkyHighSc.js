import React, { useLayoutEffect } from "react";
import DownloadBtn from "../components/sky-high/DownloadBtn";
import DropDown from "../components/sky-high/DropDown";
import EightSec from "../components/sky-high/DelightfullMix";
import FifthSec from "../components/sky-high/LiveLargest";
import FirstSec from "../components/sky-high/HeroSec";
import FourthSec from "../components/sky-high/CraftedLiving";
import LastSec from "../components/sky-high/HappyFamilies";
import NinethSec from "../components/sky-high/LocationAdv";
import SecondSec from "../components/sky-high/AnIconic";
import SeventhSec from "../components/sky-high/AwakenBanner";
import SixthSec from "../components/sky-high/PonneriGymClub";
import TenthSec from "../components/sky-high/SmartInvest";
import ThirdSec from "../components/sky-high/ExperienceBanner";
import { revealAgain, revealOnce } from "../hooks/util";

const SkyHighSc = () => {
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

export default SkyHighSc;
