import React, { useLayoutEffect } from "react";
import AretehomesInvest from "../components/mob/invest/AretehomesInvest";
import Banner from "../components/mob/invest/Banner";
import { revealAgain, revealOnce } from "../hooks/util";

const AretehomesInvestMobSc = () => {
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
      <Banner />
      <AretehomesInvest />
    </>
  );
};

export default AretehomesInvestMobSc;
