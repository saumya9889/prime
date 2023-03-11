import React, { useLayoutEffect } from "react";
import Banner from "../components/invest/Banner";
import SkyhighInvest from "../components/invest/SkyhighInvest";
import { revealAgain, revealOnce } from "../hooks/util";

const SkyhighInvestSc = () => {
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

export default SkyhighInvestSc;
