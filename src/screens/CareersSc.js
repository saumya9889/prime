import React, { useLayoutEffect } from "react";
import Buildchng from "../components/careers/Buildchng";
import FirstSec from "../components/careers/firstSec";
import ImgSlider from "../components/careers/ImgSlider";
import Jobopp from "../components/careers/Jobopp";
import Lifeatls from "../components/careers/Lifeatls";
import OurEmp from "../components/careers/OurEmp";
import ResForm from "../components/careers/ResForm";

const CareersSc = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try {
      for (var i = 0; i <= reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i]
          ? reveals[i].getBoundingClientRect().top
          : null;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
         
        }
      }
    } catch (e) {}
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  });
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

export default CareersSc;
