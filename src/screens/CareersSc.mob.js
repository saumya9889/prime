import React from "react";
import Buildchng from "../components/mob/careers/Buildchng";
import FirstSec from "../components/mob/careers/firstSec";
import ImgSlider from "../components/mob/careers/ImgSlider";
import Jobopp from "../components/mob/careers/Jobopp";
import Lifeatls from "../components/mob/careers/Lifeatls";
import OurEmp from "../components/mob/careers/OurEmp";
import ResForm from "../components/mob/careers/ResForm";
import SectionC from "../components/mob/careers/SectionC";

const MobCareersSc = () => {
  return (
    <>
      <FirstSec />
      <Lifeatls />
      {/* <ImgSlider /> */}
      {/* <SectionC/> */}
      <Buildchng />
      <OurEmp />
      <Jobopp />
      {/* <ResForm /> */}
    </>
  );
};

export default MobCareersSc;
