import React from "react";
import FifthSec from "../components/news-media/LatestNews";
import FirstSec from "../components/news-media/HeroSec";
import FourthSec from "../components/news-media/PrimeTalks";
import LastSec from "../components/news-media/PrimeRealityReport";
import SecondSec from "../components/news-media/PressRelease";
import ThirdSec from "../components/news-media/PrimeEvents";

const NewsMediaSc = () => {
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

export default NewsMediaSc;
