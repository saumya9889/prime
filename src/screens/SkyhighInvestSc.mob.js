import React, { useLayoutEffect } from "react";
import Banner from "../components/mob/invest/Banner";
import SkyhighInvest from "../components/mob/invest/SkyhighInvest";
import { revealAgain, revealOnce } from "../hooks/util";

const SkyhighInvestMobSc = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try{

    for (var i = 0; i <= reveals.length; i++) {
      
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i]
        ? reveals[i].getBoundingClientRect().top
        : null;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }catch(e){
    
  }
  }
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
      <Banner />
      <SkyhighInvest />
    </>
  );
};

export default SkyhighInvestMobSc;
