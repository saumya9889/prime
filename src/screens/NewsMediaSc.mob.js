import React from "react";
import FifthSec from "../components/mob/news-media/LatestNews";
import FirstSec from "../components/mob/news-media/HeroSec";
import FourthSec from "../components/mob/news-media/PrimeTalks";
import LastSec from "../components/mob/news-media/PrimeRealityReport";
import SecondSec from "../components/mob/news-media/PressRelease";
import ThirdSec from "../components/mob/news-media/PrimeEvents";

const NewsMediaScMob = () => {
  return (
    <>
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <LastSec />
    </>
  );
};

export default NewsMediaScMob;
