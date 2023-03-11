import React, { useLayoutEffect } from "react";

import EnergyMain from "../components/mob/energy/EnergyMain";
import GetInTouch from "../components/mob/energy/GetInTouch-energy";
import OneStop from "../components/mob/energy/OneStop";
import PLSGreen from "../components/mob/energy/PLSGreen";
import { revealAgain } from "../hooks/util";

const MobEnergySc = () => {
  useLayoutEffect(() => {
    window.addEventListener("scroll", revealAgain);
    return()=>{window.removeEventListener("scroll", revealAgain);}
  });
  return (
    <>
      <EnergyMain />
      <PLSGreen />
      <OneStop />
      <GetInTouch />
    </>
  );
};

export default MobEnergySc;
