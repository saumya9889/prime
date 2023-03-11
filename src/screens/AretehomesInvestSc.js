import React, { useLayoutEffect } from "react";
import AretehomesInvest from "../components/invest/AretehomesInvest";
import Banner from "../components/invest/Banner";
import { revealAgain, revealOnce } from "../hooks/util";

const AretehomesInvestSc = () => {
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

export default AretehomesInvestSc;
