/* eslint-disable eqeqeq */
import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Icon,
  Button,
  RadioGroup,
  Radio,
  Select,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import "./drop.css";
import React, { useRef, useState, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";
import { TriangleDownIcon } from "@chakra-ui/icons";
import DropMenu from "./DropMenu";
// import Select from "react-select";

// const MtnHd = motion(Heading);
const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);

const ChannelForm = () => {
  const [dis, setDis] = useState(false);
  const redirect =() =>{
    window.open(``);
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateFlx = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateFlx.start({ opacity: 1 });
    }
  }, [isInView, animateFlx]);

  const track = () => {
    if (window.scrollY > 400) {
      setDis(true);
    } else {
      setDis(false);
    }
  };

  window.addEventListener("scroll", track);

  const [initialValues, setValues] = useState({
    companyName: "",
    nameOfOwner: "",
    individual: false,
    proprietoship: false,
    partnership: false,
    privateLtdCo: false,
    publicLtdCo: false,
    llp: false,
    officeAdd: "",
    mobileNo: "",
    website: "",
    email: "",
    yourFocusLocationArea: "",
    residential: false,
    commercial: false,
    retail: false,
    industrialLand: false,
    others: false,
    othersTxt: "",
    gstNo: "",
    reraNo: "",
    identityDoc: "",
    name1: "",
    designation1: "",
    name2: "",
    designation2: "",
  });

  const [brokerAssoc, setBrokerAssoc] = useState("");
  const [validForm, setValidForm] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (nameOfOwner != "" || officeAdd != "" || mobileNo != "" || email != "") {
      setValidForm(!validForm);
    }
    else{
      redirect();
    }
  };

  const onChange = (e) =>
    setValues({ ...initialValues, [e.target.name]: e.target.value });

  const {
    companyName,
    nameOfOwner,
    individual,
    proprietoship,
    partnership,
    privateLtdCo,
    publicLtdCo,
    llp,
    officeAdd,
    mobileNo,
    website,
    email,
    yourFocusLocationArea,
    residential,
    commercial,
    retail,
    industrialLand,
    others,
    othersTxt,
    gstNo,
    reraNo,
    identityDoc,
    name1,
    designation1,
    name2,
    designation2,
  } = initialValues;

  const options = [
    { value: "ARETE HOMES", label: "ARETE HOMES" },
    { value: "SKY HIGH TOWER", label: "SKY HIGH TOWER" },
    { value: "PGC", label: "PGC" },
    { value: "ARETE PLAZA", label: "ARETE PLAZA" },
    { value: "ARETE MALL", label: "ARETE MALL" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      position: "absolute",
      borderBottom: "2px dotted green",
      color: state.isSelected ? "yellow" : "black",
      backgroundColor: state.isSelected ? "green" : "white",
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
    }),
  };
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        pos="relative"
        direction="column"
        align="center"
        justify="center"
        px="1rem"
        bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
        className="about-whowe-wrapper"
      >
        <Flex bg="inherit" pt="1.875rem" mt="-1.875rem" direction="column">
        <Heading
          pos={dis ? "static" : "fixed"}
          fontSize="1.25rem"
          fontFamily="avenir"
          textTransform="uppercase"
          textAlign="center"
          zIndex="10"
          color={dis ? "black" : "white"}
          transition="ease-in-out .2s"
        >
          where opportunities pave the way for <br />
          incredible rewards
        </Heading>
        <MtnTxt
          ref={ref}
          initial={{ opacity: 0 }}
          animate={animateFlx}
          transition={{ duration: 2, type: "just" }}
          // px="2.5rem"
          pt={dis ? "1.563rem" : "9.375rem"}
          fontFamily="veralaRound"
          fontSize="1rem"
                mb="1.875rem"
          textAlign="center"
          className="channel-text"
        >
          Your association with us is extremely valuable to us. We support our
          Channel Partners to catalyst their growth with ours. Join our network
          and scale to greater heights as we bring to you various reward wining
          sources from our projects. So come, to be introduced to an achiever's
          destination reserved for those who make success happen.
          <Text pt="0.938rem">
            Please fill in the details below for all your marketing
            requirements.
          </Text>
        </MtnTxt>
        </Flex>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={(e) => {
            onSubmit(e);
          }}
          className="channel-text"
        >
          <FormControl ref={ref} align="center">
            <MtnFlx
              initial={{ opacity: 0 }}
              animate={animateFlx}
              transition={{ duration: 2, type: "just" }}
              w="100%"              
            >
              {/* top - left */}
              <Flex w="100%" direction="column">
                <Flex justify="space-between" mb="0.463rem" >
                  <FormLabel
                    overflow="hidden"
                    fontSize="0.875rem"
                    fontFamily="avenir"
                    h="2.5rem"
                    fontWeight="700"
                    htmlFor="companyName"
                  >
                    COMPANY/
                    <br />
                    INDIVIDUAL NAME
                  </FormLabel>
                  <Input
                    id="companyName"
                    name="companyName"
                    onChange={(e) => onChange(e)}
                    value={companyName}
                    type="text"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <FormControl isRequired>
                  <Flex justify="space-between" mb="0.938rem">
                    <FormLabel
                      fontSize="0.875rem"
                      fontFamily="avenir"
                      pt="2"
                      fontWeight="700"
                      htmlFor="nameOfOwner"
                    >
                      NAME OF OWNER
                    </FormLabel>
                    <Input
                      id="nameOfOwner"
                      name="nameOfOwner"
                      onChange={(e) => onChange(e)}
                      value={nameOfOwner}
                      type="text"
                      fontSize="1rem"
                      fontFamily="veralaRound"
                      w="11.75rem"
                      h="2.5rem"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                      isRequired
                    />
                  </Flex>
                </FormControl>
                {/* left-bottom */}
                <FormControl isRequired>
                  <FormLabel
                    fontSize="0.875rem"
                    fontFamily="avenir"
                    fontWeight="700"
                  >
                    ENTITY
                  </FormLabel>
                  <Flex
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    justify="space-between"
                  >
                    <Stack direction="column">
                      <Checkbox
                        size="md"
                        name="individual"
                        value={individual}
                        checked={individual}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            individual: !individual,
                          });
                        }}
                      >
                        Individual
                      </Checkbox>
                      <Checkbox
                        size="md"
                        name="Proprietorship"
                        value={proprietoship}
                        checked={proprietoship}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            proprietoship: !proprietoship,
                          });
                        }}
                      >
                        Proprietorship
                      </Checkbox>
                      <Checkbox
                        size="md"
                        name="Partnership"
                        value={partnership}
                        checked={partnership}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            partnership: !partnership,
                          });
                        }}
                      >
                        Partnership
                      </Checkbox>
                    </Stack>
                    <Stack direction="column">
                      <Checkbox
                        size="md"
                        name="Private Ltd. Co."
                        value={privateLtdCo}
                        checked={privateLtdCo}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            privateLtdCo: !privateLtdCo,
                          });
                        }}
                      >
                        Private Ltd. Co.
                      </Checkbox>
                      <Checkbox
                        size="md"
                        name="Public Ltd. Co."
                        value={publicLtdCo}
                        checked={publicLtdCo}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            publicLtdCo: !publicLtdCo,
                          });
                        }}
                      >
                        Public Ltd. Co.
                      </Checkbox>
                      <Checkbox
                        size="md"
                        name="LLP"
                        value={llp}
                        checked={llp}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            llp: !llp,
                          });
                        }}
                      >
                        LLP
                      </Checkbox>
                    </Stack>
                  </Flex>
                </FormControl>
                <Flex w="100%" direction="column" mr="2.813rem" mt="1.563rem">
                  <FormControl isRequired>
                  <Flex align="center" justify="space-between" mb="0.938rem">
                      <FormLabel
                        pt="2"
                        fontSize="0.875rem"
                        fontFamily="avenir"
                        fontWeight="700"
                        htmlFor="officeAdd"
                      >
                        OFFICE ADDRESS
                      </FormLabel>
                      <Input
                        id="officeAdd"
                        name="officeAdd"
                        onChange={(e) => onChange(e)}
                        value={officeAdd}
                        type="text"
                        fontSize="1rem"
                        fontFamily="veralaRound"
                        w="11.75rem"
                        h="2.5rem"
                        bgColor="#E5E5E5"
                        borderRadius="none"
                        isRequired
                      />
                    </Flex>
                  </FormControl>
                  <FormControl isRequired>
                  <HStack w="100%" justify="space-between" pb="15px">
                      <FormLabel
                        pt="2"
                        fontSize="0.875rem"
                        fontFamily="avenir"
                        fontWeight="700"
                        htmlFor="mobileNo"
                      >
                        MOBILE NO.
                      </FormLabel>
                      <Input
                        type="number"
                        id="mobileNo"
                        name="mobileNo"
                        value={mobileNo}
                        onChange={(e) => {
                          if (e.target.value.length > 10) {
                            alert("Enter a valid phone number");
                          } else {
                            setValues({
                              ...initialValues,
                              mobileNo: e.target.value,
                            });
                          }
                        }}
                        fontSize="1rem"
                        fontFamily="avenir"
                        w="11.75rem"
                        h="2.5rem"
                        bgColor="#E5E5E5"
                        borderRadius="none"
                        isRequired
                      />
                    </HStack>
                  </FormControl>
                  <Flex align="center" justify="space-between" mb="0.938rem">
                    <FormLabel
                      pt="2"
                      fontSize="0.875rem"
                      fontFamily="avenir"
                      fontWeight="700"
                      htmlFor="website"
                    >
                      WEBSITE
                    </FormLabel>
                    <Input
                      id="website"
                      name="website"
                      value={website}
                      onChange={(e) => onChange(e)}
                      type="url"
                      fontSize="1rem"
                      fontFamily="veralaRound"
                      w="11.75rem"
                      h="2.5rem"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </Flex>
                  <FormControl isRequired>
                    <Flex align="center" justify="space-between" mb="0.938rem">
                      <FormLabel
                        pt="2"
                        fontSize="0.875rem"
                        fontFamily="avenir"
                        fontWeight="700"
                        htmlFor="email"
                      >
                        EMAIL
                      </FormLabel>
                      <Input
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        type="email"
                        fontSize="1rem"
                        fontFamily="veralaRound"
                        w="11.75rem"
                        h="2.5rem"
                        bgColor="#E5E5E5"
                        borderRadius="none"
                        isRequired
                      />
                    </Flex>
                  </FormControl>
                </Flex>
              </Flex>
              
            </MtnFlx>
            {/* top-right */}
            <Flex w="100%" direction="column">
                <Flex justify="space-between" mb="0.938rem">
                  <FormLabel
                    fontSize="0.875rem"
                    fontFamily="avenir"
                    fontWeight="700"
                    htmlFor="yourFocusLocationArea"
                  >
                    YOUR FOCUS <br />
                    LOCATION/ AREA
                  </FormLabel>
                  <Input
                    id="yourFocusLocationArea"
                    name="yourFocusLocationArea"
                    value={yourFocusLocationArea}
                    onChange={(e) => onChange(e)}
                    type="text"
                    size="lg"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <FormControl isRequired>
                  <FormLabel
                    fontSize="0.875rem"
                    fontWeight="bold"
                    fontFamily="avenir"
                    textAlign="left"
                  >
                    EXPERTISE
                  </FormLabel>
                  <Flex
                    w="100%"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    align="center"
                    justify="space-between"
                    mt="0.938rem"
                    mb="0.938rem"
                  >
                    <Stack direction="column">
                      <Checkbox
                        size="md"
                        name="Residential"
                        value={residential}
                        checked={residential}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            residential: !residential,
                          });
                        }}
                      >
                        Residential
                      </Checkbox>
                      <Checkbox
                        size="md"
                        name="Retail"
                        value={retail}
                        checked={retail}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            retail: !retail,
                          });
                        }}
                      >
                        Retail
                      </Checkbox>
                      <Checkbox
                        size="md"
                        name="Others"
                        value={others}
                        checked={others}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            others: !others,
                          });
                        }}
                      >
                        Others
                      </Checkbox>
                    </Stack>
                    <Stack direction="column">
                      <Checkbox
                        size="md"
                        name="Commercial"
                        value={commercial}
                        checked={commercial}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            commercial: !commercial,
                          });
                        }}
                      >
                        Commercial
                      </Checkbox>
                      <Checkbox
                        size="md"
                        name="Industrial Land"
                        value={industrialLand}
                        checked={industrialLand}
                        onChange={(e) => {
                          setValues({
                            ...initialValues,
                            industrialLand: !industrialLand,
                          });
                        }}
                      >
                        Industrial Land
                      </Checkbox>
                      <Spacer/>
                      <Spacer/>
                      <Spacer/>
                      <Spacer/>
                    </Stack>
                  </Flex>
                </FormControl>
                <Input
                  type="text"
                  name="others"
                  value={othersTxt}
                  onChange={(e) => onChange(e)}
                  fontSize="1rem"
                  fontFamily="veralaRound"
                  w="100%"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
                <Flex w="100%" direction="column" mt="0.938rem">
                  <Flex align="center" justify="space-between" pb="0.938rem">
                    <FormLabel
                      fontSize="0.875rem"
                      fontFamily="avenir"
                      fontWeight="700"
                      htmlFor="gstNo"
                    >
                      GST No.
                    </FormLabel>
                    <Input
                      id="gstNo"
                      name="gstNo"
                      value={gstNo}
                      onChange={(e) => onChange(e)}
                      type="text"
                      fontSize="1rem"
                      fontFamily="veralaRound"
                      w="11.75rem"
                      h="2.5rem"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </Flex>
                  <Flex align="center" justify="space-between" pb="0.938rem">
                    <FormLabel
                      pt="2"
                      fontSize="0.875rem"
                      fontFamily="avenir"
                      fontWeight="700"
                      htmlFor="reraNo"
                    >
                      RERA No.
                    </FormLabel>
                    <Input
                      id="reraNo"
                      name="reraNo"
                      value={reraNo}
                      onChange={(e) => onChange(e)}
                      type="text"
                      fontSize="1rem"
                      fontFamily="veralaRound"
                      w="11.75rem"
                      h="2.5rem"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </Flex>
                  <RadioGroup onChange={setBrokerAssoc} value={brokerAssoc}>
                    <FormLabel
                      fontWeight="bold"
                      htmlFor="brokerAssoc"
                      fontSize="0.875rem"
                      fontFamily="avenir"
                      mt="0.625rem"
                      textAlign="center"
                      pb="0.938rem"
                    >
                      AFFILIATION TO ANY BROKER ASSOCIATION
                    </FormLabel>{" "}
                    <Flex
                      justify="space-between"
                      fontFamily="veralaRound"
                      fontSize="1.25rem"
                      pr="8rem"
                    >
                      <Radio value="yes" size="md">
                        Yes
                      </Radio>
                      <Radio value="no" size="md">
                        No
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </Flex>
              </Flex>
            {/* left-bottom */}
            <Flex
              w="100%"
              pb="0.938rem"
              mt="0.938rem"
              align="flex-start"
              justify="center"
            >
              <FormLabel
                pl="0.625rem"
                fontSize="0.875rem"
                fontFamily="avenir"
                fontWeight="700"
                htmlFor="identityDoc"
              >
                IDENTITY <br />
                DOCUMENT
              </FormLabel>
              <Flex direction="column" align="flex-start">
                <Input
                  id="identityDoc"
                  name="identityDoc"
                  fontSize="0.875rem"
                  value={identityDoc}
                  onChange={(e) => {
                    setValues(...initialValues, {
                      identityDoc: e.target.files,
                    });
                  }}
                  type="file"
                  w="13.75rem"
                  h="2.5rem"
                  p="0.3rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
                {/*<Text
                  fontSize="1rem"
                  fontFamily="veralaRound"
                  pt="0.938rem"
                  pb="0.938rem"
                >
                  <Icon as={BsUpload} mr="0.875rem" />
                  Upload File
                </Text>*/}
              </Flex>
            </Flex>

            <Flex direction="column" w="100%" align="center">
              <Heading
                fontSize="1rem"
                fontFamily="avenir"
                pb="0.938rem"
              >
                AUTHORISED SIGNATORIES
              </Heading>
              <Flex w="100%" direction="column" mt="0.938rem">
                  <Flex align="center" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontSize="0.875rem"
                    fontFamily="avenir"
                    fontWeight="700"
                    htmlFor="name1"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    id="name1"
                    name="name1"
                    value={name1}
                    onChange={(e) => onChange(e)}
                    type="text"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex mb="0.938rem" justify="space-between" align="left">
                  <FormLabel
                    fontSize="0.875rem"
                    fontFamily="avenir"
                    pt="2"
                    fontWeight="700"
                    htmlFor="designation1"
                  >
                    DESIGNATION
                  </FormLabel>
                  <Input
                    id="designation1"
                    name="designation1"
                    value={designation1}
                    onChange={(e) => onChange(e)}
                    type="text"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </Flex>
              <Flex w="100%" direction="column">
                  <Flex align="center" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontSize="0.875rem"
                    fontFamily="avenir"
                    fontWeight="700"
                    htmlFor="name2"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    id="name2"
                    name="name2"
                    value={name2}
                    onChange={(e) => onChange(e)}
                    type="text"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between">
                  <FormLabel
                    fontSize="0.875rem"
                    fontFamily="avenir"
                    pt="2"
                    fontWeight="700"
                    htmlFor="designation2"
                  >
                    DESIGNATION
                  </FormLabel>
                  <Input
                    id="designation2"
                    name="designation2"
                    value={designation2}
                    onChange={(e) => onChange(e)}
                    type="text"
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    w="11.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                </Flex>
            </Flex>
            <Button
              type="submit"
              mt="1.563rem"
              mb="3.125rem"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              fontSize="1rem"
              fontFamily="avenir"
              px="1rem"
              py="0.938rem"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              SEND MESSAGE
            </Button>
          </FormControl>
        </form>
      </Flex>
      <Flex
        
        pos="relative"
        w="100%"
        align="center"
        justify="center"
        bgColor="#B88746"
        color="white"
        h="4.375rem"
        fontSize="1rem"
        fontFamily="avenir"
      >
        <Flex
          w="full"
          pos="relative"
          align="center"
          justify="flex-start"
          fontFamily="avenir"
          fontSize="1rem"
          mx="0.625rem"
        >
          {" "}
          <Select
            w="10.75rem"
            placeholder="SELECT PROJECT"
            fontSize="0.875rem"
            fontFamily="avenir"
            bgColor="transparent"
            borderRadius="none"
            borderTop="0"
            borderLeft="0"
            borderRight="0"
            borderBottom="3px  solid"
            icon={<TriangleDownIcon width="18px" height="18px" />}
          >
            <option style={{ color: "black" }}>ARETE HOMES</option>
            <option style={{ color: "black" }}>SKY HIGH TOWER</option>
            <option style={{ color: "black" }}>PGC</option>
            <option style={{ color: "black" }}>ARETE PLAZA</option>
            <option style={{ color: "black" }}>ARETE MALL</option>
          </Select>
          {/*<DropMenu />*/}
        </Flex>
        {/* {validForm ? ( */}
        <Flex
          w="100%"
          align="center"
          justify="flex-start"
          cursor="pointer"
          fontFamily="avenir"
          fontWeight="bold"
          fontSize="0.875rem"
        >
          <Icon
            as={AiOutlineDownload}
            h="1.875rem"
            w="1.875rem"
          />
          DOWNLOAD CP-BROCHURE
        </Flex>
        
      </Flex>
    </>
  );
};

export default ChannelForm;
