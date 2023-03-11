import { ReactNode, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Heading,
  Text,
  Spacer,
  IconButton
} from '@chakra-ui/react';
import { useModalController } from '../../../hooks/util';
import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
// import EnquireWindow from '../../enquireWindow';
import EnquireWindowMob from '../../enquireWindowMob';
import bgBox from "../../../components/careers imgs/bg-box.jpg"


export default function Nav() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isModalOpen, close, open } = useModalController();
  const [navbar, setNavbar] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [openMenuItem, setOpenMenuItem] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isInvestMenu, setIsInvestMenu] = useState(false);
  const closeEnquire = () => {
    setIsOpened(false);
  }
  const openEnquire = () => {
    setIsOpened(true);
  }
  const changeBg = () => {
    try {
      if (window.scrollY >= 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
    catch { };
  };
  window.addEventListener("scroll", changeBg);

  const handleClose = () => {
    close()
    setIsOpenMenu(false)
    setIsInvestMenu(false)
  };
  return (
    <>
      {isOpened ? <EnquireWindowMob isOpened={isOpened} onClosed={closeEnquire} /> : <></>}
      <Flex h="3.125rem"
        width="100%"
        pos="fixed"
        top="0"
        alignItems={'center'}
        justifyContent={'space-between'}
        bgColor={navbar ? "#fff" : "rgba(0,0,0,70%)"}
        transition="all 2s"
        zIndex="999"
        color={navbar ? "black" : "white"}
        boxShadow={navbar ? "2xl" : ""}
      >
        <Image _hover={{ cursor: "pointer" }} style={{ width: "11.82rem", height: "3.125rem", padding: "0.8rem" }} onClick={() => window.location.replace("/")} src="/images/logo.png" />

        <Flex alignItems={'end'}>
          <Stack direction={'row'} spacing={5}>
            <Button bg="none" _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69", background: "none" }} onClick={() => openEnquire()}>
              <MdPhone size={27} />
            </Button>


            <Button
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}
              minW={0}
              onClick={() => open()}
            >
              <HamburgerIcon _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} color={navbar ? "black" : "white"} w="4rem" h="2.125rem" ml="-2rem" mr="1rem" />
            </Button>
          </Stack>
          {isModalOpen ?
            <Flex style={{ position: "absolute", top: "0", left: "0", zIndex: "999" }}>
              <div style={{ width: "30vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.7)", }} onClick={() => close()}>
              </div>
              <div style={{ backgroundColor: "#FFFFFF" ,overflow:"scroll"}}>
                <div style={{ width: "70vw", color: "black", padding: "1rem", position: 'relative' }}>
                  <button style={{ align: "right", backgroundColor: "white", border: "none", position: 'absolute', right: "2rem", top: "2rem" }} onClick={() => close()}><span style={{ fontWeight: "400", fontSize: "0.9375rem", position: "relative", bottom: "0.8rem" }}>X</span></button>
                  <br />
                  <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                    <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                      <Link href="/about-us" style={{ textDecoration: "none" }}>ABOUT US</Link>
                    </Heading>
                  </div>
                  <hr />
                  <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                    <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                      <Link href="/expertise" style={{ textDecoration: "none" }}>EXPERTISE</Link>
                    </Heading>
                  </div>
                  <hr />
                  {/* <Menu> */}
                  <Menu>
                    <Text  className="slide-arrow-btn" _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} _active={{ bgColor: "inherit" }} bgColor="inherit" fontSize="0.875rem" fontFamily="avenir">

                      <Link style={{ textDecoration: "none" }} fontWeight="bold" fontSize="0.875rem" fontFamily="avenir">PROJECTS</Link>
                      <IconButton bg="none" _hover={{ background: "none" }} position="relative" left="9rem" onClick={() => setIsOpenMenu(true)}><BsArrowRight size="1.4rem" /></IconButton>
                    </Text>

                    {isOpenMenu && <Text padding="1rem" boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="0.875rem" bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`} height="55.5rem" width="18.1rem" position="relative" bottom="10.6rem" bgRepeat="no-repeat" bgPos="center" bgSize="cover" border="none" borderRadius="none">


                      <button style={{ align: "right", backgroundColor: "white", border: "none", position: 'absolute', right: "2rem", top: "2rem" }} onClick={handleClose} ><span style={{ fontWeight: "400", fontSize: "0.9375rem", position: "relative", right: "1rem" }}>X</span></button>
                      <Flex marginTop="2rem" color="#DFBD69" position="relative" right="1rem">
                        <Button bg="none"  paddingBottom="1rem" _hover={{ background: "none" }} paddingRight="1rem" onClick={() => setIsOpenMenu(false)}><BsArrowLeft size="2rem" /></Button>
                        <Text fontSize="0.93rem" fontFamily="avenir">PROJECTS </Text>
                      </Flex>


                      <Text borderBottom="1px solid lightgray" height="2.3rem" pt="0.5rem" mr="1.5rem" fontWeight="bold" _hover={{ bgColor: "rgba(0,0,0,0)", cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}>
                        <Link href="/arete-homes" style={{ textDecoration: "none" }}>ARETE HOMES</Link>
                      </Text>
                      <Text borderBottom="1px solid lightgray" height="2.3rem" pt="0.5rem" mr="1.5rem" fontWeight="bold" _hover={{ bgColor: "rgba(0,0,0,0)", fontSize: "0.875rem", cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}>
                        <Link href="/sky-high" style={{ textDecoration: "none" }}>SKY HIGH</Link>
                      </Text>
                      <Text borderBottom="1px solid lightgray" height="2.3rem" pt="0.5rem" mr="1.5rem" fontWeight="bold" _hover={{ bgColor: "rgba(0,0,0,0)", fontSize: "0.875rem", cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}>
                        <Link href="/commercial-properties" onClick={() => window.localStorage.setItem('commercialPage', true)} style={{ textDecoration: "none" }}>ARETE PLAZA</Link>
                      </Text>
                      <Text borderBottom="1px solid lightgray" height="2.3rem" pt="0.5rem" mr="1.5rem" fontWeight="bold" _hover={{ bgColor: "rgba(0,0,0,0)", fontSize: "0.875rem", cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}>
                        <Link href="/commercial-properties" onClick={() => window.localStorage.setItem('commercialPage', false)} style={{ textDecoration: "none" }}>ARETE MALL</Link>
                      </Text>
                      <Text fontWeight="bold" fontSize="0.875rem" height="2.3rem" pt="0.5rem" mr="1.5rem" _hover={{ bgColor: "rgba(0,0,0,0)", cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}>
                        <Link style={{ textDecoration: "none" }}>POONERI GYMKHANA CLUB</Link>
                      </Text>
                    </Text>}
                  </Menu>
                  <hr />
                  <Menu>
                    <Text  className="slide-arrow-btn" _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} _active={{ bgColor: "inherit" }} bgColor="inherit" fontSize="0.875rem" fontFamily="avenir">

                      <Link style={{ textDecoration: "none" }} fontWeight="bold" fontSize="0.875rem" fontFamily="avenir">INVESTS</Link>
                      <IconButton bg="none" _hover={{ background: "none" }} position="relative" left="10rem" onClick={() => { setIsInvestMenu(true) }}><BsArrowRight size="1.4rem" /></IconButton>
                    </Text>

                    {isInvestMenu && <Text padding="1rem" boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="0.875rem" bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`} height="57rem" width="18.1rem" position="relative" bottom="13.1rem" bgRepeat="no-repeat" bgPos="center" bgSize="cover" border="none" borderRadius="none">
                      <button style={{ align: "right", backgroundColor: "white", border: "none", position: 'absolute', right: "2rem", top: "2rem" }} onClick={handleClose}><span style={{ fontWeight: "400", fontSize: "0.9375rem", position: "relative", right: "1rem" }}>X</span></button>

                      <Flex marginTop="2rem" color="#DFBD69" position="relative" right="1rem">
                        <Button bg="none" paddingBottom="1rem" _hover={{ background: "none" }} onClick={() => setIsInvestMenu(false)}><BsArrowLeft size="2rem" /></Button>
                        <Text fontSize="0.93rem" fontFamily="avenir">INVESTS</Text>
                      </Flex>        <Text borderBottom="1px solid lightgray" height="2.3rem" pt="0.5rem" mr="1.5rem" fontWeight="bold" _hover={{ bgColor: "rgba(0,0,0,0)", cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}>
                        <Link href="/why-invest" style={{ textDecoration: "none" }}>WHY INVEST</Link>
                      </Text>
                      <Text borderBottom="1px solid lightgray" height="2.3rem" pt="0.5rem" mr="1.5rem" fontWeight="bold" _hover={{ bgColor: "rgba(0,0,0,0)", cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}>
                        <Link href="/arete-homes-invest" onClick={() => window.localStorage.setItem('areteInvest', true)} style={{ textDecoration: "none" }}>8% ROI ON HOMES</Link>
                      </Text>
                      <Text height="2.3rem" pt="0.5rem" mr="1.5rem" fontWeight="bold" fontSize="0.875rem" _hover={{ bgColor: "rgba(0,0,0,0)", cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }}>
                        <Link href="/sky-high-invest" style={{ textDecoration: "none" }}>7% ROI ON HOMES</Link>
                      </Text>
                    </Text>}
                  </Menu>
                  <hr />
                  <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                    <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                      <Link href="" style={{ textDecoration: "none" }}>PGC MEMBERSHIP</Link>
                    </Heading>
                  </div>
                  <br />
                  <br />
                </div>
                <div style={{ backgroundImage: `url(${bgBox})`, marginTop: "5rem", height: "100%" }} >
                  <div style={{ width: "80vw", color: "black", paddingTop: "2.5rem", paddingLeft: "1.5rem", paddingRight: "2rem", position: 'relative' }}>
                    <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                      <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                        <Link href="/serviced-apartments" style={{ textDecoration: "none" }}>SERVICED HOUSING</Link>
                      </Heading>

                    </div>
                    <hr />
                    <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                      <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                        <Link href="/channel-partner" style={{ textDecoration: "none" }}>CHANNEL PARTNER LOGIN</Link>
                      </Heading>
                    </div>

                    <hr />
                    <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                      <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                        <Link href="/news-and-media" style={{ textDecoration: "none" }}>NEWS & MEDIA</Link>
                      </Heading>
                    </div>

                    <hr />
                    <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                      <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                        <Link href="/refer-and-earn" onClick={() => window.localStorage.setItem('referEarnPage', true)} style={{ textDecoration: "none" }}>REFER & EARN</Link>
                      </Heading>
                    </div>

                    <hr />
                    <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                      <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                        <Link href="/contact-us" style={{ textDecoration: "none" }}>CONTACT US</Link>
                      </Heading>
                    </div>

                    <hr />
                    <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                      <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                        <Link href="/careers" style={{ textDecoration: "none" }}>CAREERS</Link>
                      </Heading>
                    </div>
                    <hr />

                    <div style={{ height: "2.5rem", paddingTop: "0.5rem" }}>
                      <Heading _hover={{ cursor: "pointer", color: navbar ? "#B88746" : "#DFBD69" }} as="span" fontSize="0.875rem" fontFamily="avenir">
                        <Link href="/blog" style={{ textDecoration: "none" }}>BLOG</Link>
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
            : <></>}
          {
            isModalOpen && openMenuItem ?
              <Flex style={{ position: "absolute", top: "0", left: "0", zIndex: "999" }}>
                <div style={{ width: "30vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.7)", }} onClick={() => close()}>
                  <button onClick={() => setOpenMenuItem(false)}>Back</button>
                </div>
              </Flex>
              : <></>
          }

          {/* <Menu>
                <MenuList alignItems={'right'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}

        </Flex>
      </Flex>

    </>
  );
}