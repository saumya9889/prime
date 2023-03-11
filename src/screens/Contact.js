import React, { useLayoutEffect } from "react";
import AddresSec from "../components/contactus/AddresSec";
import ContactMain from "../components/contactus/contact-main";
import GetInTouch from "../components/contactus/GetInTouch";
import ProSites from "../components/contactus/ProSites";
import SideVector from "../components/contactus/side-vector";
import { revealOnce } from "../hooks/util";

const Contact = () => {
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
          reveals[i].classList.remove("active");
        }
      }
    } catch (e) {}
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll", revealOnce);
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", revealOnce);
    };
  });
  return (
    <>
      <SideVector />
      <ContactMain />
      <AddresSec />
      <ProSites />
      <GetInTouch />
    </>
  );
};

export default Contact;
