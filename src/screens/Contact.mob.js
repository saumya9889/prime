import React, { useLayoutEffect } from "react";
import AddresSec from "../components/mob/contactus/AddresSec";
import ContactMain from "../components/mob/contactus/contact-main";
import GetInTouch from "../components/mob/contactus/GetInTouch";
import ProSites from "../components/mob/contactus/ProSites";
import SideVector from "../components/mob/contactus/side-vector";
import { revealAgain, revealOnce } from "../hooks/util";

const MobContact = () => {
  useLayoutEffect(() => {
    window.addEventListener("scroll", revealAgain);
    window.addEventListener("scroll", revealOnce);
    return () => {
      window.removeEventListener("scroll", revealAgain);
      window.removeEventListener("scroll", revealOnce);
    };
  });
  return (
    <>
      {/*<SideVector />*/}
      <ContactMain />
      <AddresSec />
      <ProSites />
      <GetInTouch />
    </>
  );
};

export default MobContact;
