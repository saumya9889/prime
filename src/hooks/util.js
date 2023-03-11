import React, { useState } from "react";
export const useModalController=()=>{
  const [isModalOpen,setIsOpen] = useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }
  return {isModalOpen,close,open}
}
export const revealAgain = () => {
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
  export const revealOnce = () => {
    var reveals = document.querySelectorAll(".revealOnce");
    try {
      for (var i = 0; i <= reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i]
          ? reveals[i].getBoundingClientRect().top
          : null;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    } catch (e) {}
  };