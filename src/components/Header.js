import React, { useState, useRef } from "react";
import { Button, Flex, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import styled from 'styled-components';
import { useModalController } from "../hooks/util";
import { HamburgerIcon } from "@chakra-ui/icons";
import EnquireWindow from "./enquireWindow";
import bgBox from "../components/careers imgs/bg-box.jpg";
const StyledHeader = styled.div`
    background-color: rgba(0,0,0,0.2);
    .collapsible-list-button{
      display:flex;
      cursor: pointer;
      width: 100%;
    }
    .collapsible-list-button:hover{
      border:none;
    }
    .collapsible-content{
      display: none;
      list-style-type: none;
    }
    .collapsible-content1{
      display: none;
      list-style-type: none;
    }
    .collapsible-content2{
      display: none;
      list-style-type: none;
    }
    .collapsible-content3{
      display: none;
      list-style-type: none;
      top:65%;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.8);
      z-index: 1;
    }
    .collapsible-content4{
      display: none;
      list-style-type: none;
    }
    .collapsible-content5{
      display: none;
      list-style-type: none;
    }
  `
const Header = () => {
  const [isOpened, setIsOpened]= useState(false);
  const closeEnquire =() =>{
    setIsOpened(false);
  }
  const openEnquire =() =>{
    setIsOpened(true);
  }
  const {isModalOpen,close,open} = useModalController();
  const [navbar, setNavbar] = useState(false);
  // const {isOpen, onOpen,onClose} = useDisclosure();
  const changeBg = () => {
    try{
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  catch{};
  };

  window.addEventListener("scroll", changeBg);
  const timerRef = useRef();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isMenuTwoOpen, setIsMenuTwoOpen]=useState(false)
  const [isHambergerMenuOne, setIsHambergerMenu] = useState(false)
  const [isHambergerMenuTwo, setIsHambergerMenuTwo] = useState(false)
  const btnMouseEnterEvent = () => {
    setIsOpenMenu(true)
  };

  const btnMouseLeaveEvent = () => {
    timerRef.current = window.setTimeout(() => {
      setIsOpenMenu(false);
    }, 150);
  };

  const menuListMouseEnterEvent = () => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setIsOpenMenu(true);
    
  };

  const menuListMouseLeaveEvent = () => {
    setIsOpenMenu(false)
    
  };
  const btnMouseTwoEnterEvent = () => {
    setIsMenuTwoOpen(true);
    
  };

  const btnMouseTwoLeaveEvent = () => {
    timerRef.current = window.setTimeout(() => {
      setIsMenuTwoOpen(false);
      
    }, 150);
  };

  const menuListMouseTwoEnterEvent = () => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setIsMenuTwoOpen(true);
    
  };

  const menuListMouseTwoLeaveEvent = () => {
    setIsMenuTwoOpen(false)
    
  };

  const btnMouseHambergerOneEnterEvent = () => {
    setIsHambergerMenu(true);
  };

  const btnMouseHambergerOneLeaveEven = () => {
    timerRef.current = window.setTimeout(() => {
      setIsHambergerMenu(false);
      
    },0);
  };

  const menuListMouseHamberOneEnterEvent = () => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setIsHambergerMenu(true);
    
  };

  const menuListMouseHamberOneLeaveEvent = () => {
    setIsHambergerMenu(false)
    
  };

  const btnMouseHambergerTwoEnterEvent = () => {
    setIsHambergerMenuTwo(true);
  };

  const btnMouseHambergerTwoLeaveEvent = () => {
    timerRef.current = window.setTimeout(() => {
      setIsHambergerMenuTwo(false);
    },0);
  };

  const menuListMouseHamberTwoEnterEvent = () => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setIsHambergerMenuTwo(true);
    
  };

  const menuListMouseHamberTwoLeaveEvent = () => {
    setIsHambergerMenuTwo(false)
    
  };

  return (
    <StyledHeader>
    {isOpened?<EnquireWindow isOpened={isOpened} onClosed={()=>closeEnquire()} />:<></>}
    <Flex
      pos="fixed"
      top="0"
      w="100%"
      h="4.375rem"
      bgColor={navbar ? "#fff" : "rgba(0,0,0,70%)"}
      transition="all 2s"
      align="center"
      justify="center"
      zIndex="999"
      color={navbar ? "black" : "white"}
      boxShadow={navbar ? "2xl" : ""}
    >
      {" "}
      <Flex w="20%"></Flex>
      <Flex alignItems={"center"} w="50%" justifyContent={"center"}>
        <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}} as="span" fontSize="1rem" fontFamily="avenir" px="2rem">
          <Link href="/expertise" style={{textDecoration:"none"}}>EXPERTISE</Link>
        </Heading>
        <Menu isOpen={isOpenMenu} _focusVisible={{boxShadow:"none", outline:"none",}}>
          
        <MenuButton _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _active={{bgColor:"inherit"}} _focusVisible={{boxShadow:"none", outline:"none",}} bgColor="inherit" mr="1rem" as={Button} fontSize="1rem" fontFamily="avenir" pr="7.2rem" px="2rem" onMouseEnter={btnMouseEnterEvent} onMouseLeave={btnMouseLeaveEvent}>
          <Link style={{textDecoration:"none"}}>PROJECTS</Link>
        </MenuButton>
        <MenuList p="0.5rem" boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="1rem" mt=".5rem" _focusVisible={{boxShadow:"none", outline:"none",}} bgColor={navbar ? "#fff" : "rgba(0,0,0,70%)"} border="none" borderRadius="none" onMouseEnter={menuListMouseEnterEvent} onMouseLeave={menuListMouseLeaveEvent}>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}}>
            <Link href="/arete-homes" style={{textDecoration:"none"}}>ARETE HOMES</Link>
        </MenuItem>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}}>
            <Link href="/sky-high" style={{textDecoration:"none"}}>SKY HIGH TOWER</Link>
        </MenuItem>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}}>
            <Link href="/commercial-properties" onClick={()=>window.localStorage.setItem('commercialPage',true)} style={{textDecoration:"none"}}>ARETE PLAZA</Link>
        </MenuItem>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}}>
            <Link href="/commercial-properties" onClick={()=>window.localStorage.setItem('commercialPage',false)} style={{textDecoration:"none"}}>ARETE MALL</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}}>
            <Link style={{textDecoration:"none"}}>POONERI GYMKHANA CLUB</Link>
        </MenuItem>
        </MenuList>
        </Menu>
        <Flex minW="18.75rem" minH="3.75rem" px="1rem" align="center">
          <Image _hover={{cursor:"pointer"}} onClick={()=>window.location.replace("/")} src="/images/logo.png" />
        </Flex>
        <Flex align="center">
        <Menu isOpen={isMenuTwoOpen}>
        <MenuButton _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _active={{bgColor:"inherit"}} _focusVisible={{boxShadow:"none", outline:"none",}} bgColor="inherit" as={Button} fontSize="1rem" fontFamily="avenir" pl="3.4rem" px="2rem" onMouseEnter={btnMouseTwoEnterEvent} onMouseLeave={btnMouseTwoLeaveEvent}>
          INVEST
        </MenuButton>
        <MenuList p="0.5rem" boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="1rem" mt=".5rem" bgColor={navbar ? "#fff" : "rgba(0,0,0,70%)"} border="none" borderRadius="none" _focusVisible={{boxShadow:"none", outline:"none",}} onMouseEnter={menuListMouseTwoEnterEvent} onMouseLeave={menuListMouseTwoLeaveEvent}>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}}>
            <Link href="/why-invest" style={{textDecoration:"none"}}>WHY INVEST</Link>
        </MenuItem>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}}>
            <Link href="/arete-homes-invest" onClick={()=>window.localStorage.setItem('areteInvest',true)} style={{textDecoration:"none"}}>8% ROI ON HOMES</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _focusVisible={{boxShadow:"none", outline:"none",}}>
            <Link href="/sky-high-invest" style={{textDecoration:"none"}}>7% ROI ON HOMES</Link>
        </MenuItem>
        </MenuList>
        </Menu>
        <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="2rem">
          <Link href="/serviced-apartments" style={{textDecoration:"none"}}>HOUSING</Link>
        </Heading>
      </Flex>
      </Flex>
      <Flex w="25%" justify="flex-end" align="center">
        <Heading as="span" ml="3rem" fontFamily="avenir">
          <Button
            onClick={(e)=>{e.preventDefault(); openEnquire()}}
            h="3.125rem"
            my="1rem"
            
            p="6"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            ENQUIRE
          </Button>
        </Heading>
        <button style={{marginRight:"50px"}} onClick={()=>open()} >
        <HamburgerIcon _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} mr="-5rem" my="1rem" w="5rem" h="3.125rem"/>
        </button>
        {isModalOpen?
        <Flex style={{position:"absolute",top:"0",left:"0",zIndex:"999", paddingBottom:"0"}}>
          <div style={{width:"80vw",height:"100vh",backgroundColor: "rgba(0,0,0,0.7)",}} onClick={()=>close()}>
          </div>
          <div style={{backgroundColor:"#FFFFFF"}}>
          <div style={{width:"20vw",color:"black",paddingTop:"2.5rem",paddingLeft:"1.5rem",paddingRight:"2rem",position:'relative'}}>
              <button style={{fontSize:"2rem", marginLeft:"auto", height:"2rem",width:"2.2rem",align:"right",backgroundColor:"white",border:"none",position:'absolute',right:"2rem", top:"1rem", marginBottom:"1rem"}} onClick={()=>close()}><span style={{fontWeight:"500", fontSize:"1.5rem", position:"relative", bottom:"0.8rem"}}>X</span></button>
              <br/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
                <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/about-us" style={{textDecoration:"none"}}>ABOUT US</Link>
              </Heading>
              </div>
              <hr/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/expertise" style={{textDecoration:"none"}}>EXPERTISE</Link>
              </Heading>
              </div>
              <hr/>
              <Menu isOpen={isHambergerMenuOne}>
              
        <MenuButton _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _active={{bgColor:"inherit"}} bgColor="inherit" as={Button} fontSize="1rem" fontFamily="avenir" px="-1rem" onMouseEnter={btnMouseHambergerOneEnterEvent} onMouseLeave={btnMouseHambergerOneLeaveEven}>
                <Link style={{textDecoration:"none"}}>PROJECTS</Link>
        </MenuButton>
       
        <MenuList padding="1rem" boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="1rem" mt="-2.8rem" mr="8vw" bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`} bgRepeat="no-repeat" bgPos="center" bgSize="cover"  border="none" borderRadius="none" onMouseEnter={menuListMouseHamberOneEnterEvent} onMouseLeave={menuListMouseHamberOneLeaveEvent}>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/arete-homes" style={{textDecoration:"none"}}>ARETE HOMES</Link>
        </MenuItem>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/sky-high" style={{textDecoration:"none"}}>SKY HIGH TOWER</Link>
        </MenuItem>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/commercial-properties" onClick={()=>window.localStorage.setItem('commercialPage',true)} style={{textDecoration:"none"}}>ARETE PLAZA</Link>
        </MenuItem>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/commercial-properties" onClick={()=>window.localStorage.setItem('commercialPage',false)} style={{textDecoration:"none"}}>ARETE MALL</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link style={{textDecoration:"none"}}>PONNERI GYMKHANA CLUB</Link>
        </MenuItem>
        </MenuList>
              </Menu>
              <hr/>
              <Menu isOpen={isHambergerMenuTwo}>
        <MenuButton _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _active={{bgColor:"inherit"}} bgColor="inherit" as={Button} fontSize="1rem" fontFamily="avenir" px="-1rem" onMouseEnter={btnMouseHambergerTwoEnterEvent} onMouseLeave={btnMouseHambergerTwoLeaveEvent}>
          INVEST
        </MenuButton>
        <MenuList padding="1rem" boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`} bgRepeat="no-repeat" bgPos="center" bgSize="cover" width="5rem" fontSize="1rem" mt="-2.8rem" mr="6vw" border="none" borderRadius="none" onMouseEnter={menuListMouseHamberTwoEnterEvent} onMouseLeave={menuListMouseHamberTwoLeaveEvent}>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/why-invest" style={{textDecoration:"none"}}>WHY INVEST</Link>
        </MenuItem>
        <MenuItem borderBottom="1px solid lightgray" fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/arete-homes-invest" onClick={()=>window.localStorage.setItem('areteInvest',true)} style={{textDecoration:"none"}}>8% ROI ON HOMES</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/sky-high-invest" style={{textDecoration:"none"}}>7% ROI ON HOMES</Link>
        </MenuItem>
        </MenuList>
              </Menu>
              <hr/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
                <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="" style={{textDecoration:"none"}}>PGC MEMBERSHIP</Link>
              </Heading>
              </div>
              
              <hr/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
                 <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/serviced-apartments" style={{textDecoration:"none"}}>SERVICED HOUSING</Link>
              </Heading>
              </div>
              </div>
              <div  style={{backgroundImage:`url(${bgBox})`, height:"50%", position:"relative",
            top:"1rem"}}>
              <div style={{width:"20vw",color:"black",paddingTop:"0.5rem",paddingLeft:"1.5rem",paddingRight:"2rem",position:'relative'}}>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
                <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/channel-partner" style={{textDecoration:"none"}}>CHANNEL PARTNER</Link>
              </Heading>
              </div>
              
              <hr/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
                <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/news-and-media" style={{textDecoration:"none"}}>NEWS & MEDIA</Link>
              </Heading>
              </div>
              
              <hr/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
                <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/refer-and-earn" onClick={()=>window.localStorage.setItem('referEarnPage',true)} style={{textDecoration:"none"}}>REFER & EARN</Link>
              </Heading>
              </div>
              
              <hr/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
                <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/green-power" onClick={()=>window.localStorage.setItem('referEarnPage',true)} style={{textDecoration:"none"}}>GREEN POWER</Link>
              </Heading>
              </div>

              <hr/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
                <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/contact-us" style={{textDecoration:"none"}}>CONTACT US</Link>
              </Heading>
              </div>
              
              <hr/>
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
               <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/careers" style={{textDecoration:"none"}}>CAREERS</Link>
              </Heading> 
              </div>
              <hr/>
              
              <div style={{height:"2.5rem", paddingTop:"0.5rem"}}>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir">
                <Link href="/blog" style={{textDecoration:"none"}}>BLOG</Link>
              </Heading>
              </div>
              </div>
              </div>
          </div>
        </Flex>
        :<></>}
      </Flex>
    </Flex>
    </StyledHeader>
  );
};

export default Header;
