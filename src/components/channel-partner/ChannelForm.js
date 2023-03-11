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
    { value: "ARETE HOMES", label: "ARETE HOMES", pdf:"Channel Partner Brochure - Arete Homes.pdf" },
    { value: "SKY HIGH TOWER", label: "SKY HIGH TOWER", pdf:"Channel Partner Brochure - SKY HIGH Tower Arete Homes" },
    { value: "PGC", label: "PGC", pdf:"" },
    { value: "ARETE PLAZA", label: "ARETE PLAZA", pdf:""},
    { value: "ARETE MALL", label: "ARETE MALL", pdf:""},
  ];
  const [selectedOption, setSelectedOption]=useState(null)
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

  const downloadPDF = () =>{
    console.log(selectedOption)
    if(selectedOption === "ARETE HOMES"){
      fetch("Channel Partner Brochure - Arete Homes.pdf").then(response=>{
      response.blob().then(blob=>{
        const fileURL = window.URL.createObjectURL(blob);
        let alink=document.createElement("a");
        alink.href = fileURL;
        alink.download = "Channel Partner Brochure - Arete Homes.pdf"
        alink.click();
      })
    })
    }else if(selectedOption === "SKY HIGH TOWER"){
      fetch("Channel Partner Brochure - SKY HIGH Tower Arete Homes.pdf").then(response=>{
        response.blob().then(blob=>{
          const fileURL = window.URL.createObjectURL(blob);
          let alink=document.createElement("a");
          alink.href = fileURL;
          alink.download = "Channel Partner Brochure - SKY HIGH Tower Arete Homes.pdf"
          alink.click();
        })
      })
    }
    
  }
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        pos="relative"
        direction="column"
        align="center"
        justify="center"
        pt="3.125rem"
        px="6.25rem"
        bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        {" "}
        <Heading
          pos={dis ? "static" : "fixed"}
          fontSize="2.5rem"
          fontFamily="avenir"
          lineHeight="3.563rem"
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
          // px="3.125rem"
          pt={dis ? "1.563rem" : "9.375rem"}
          fontFamily="veralaRound"
          fontSize="1rem"
          lineHeight="1.5"
          mb="1.875rem"
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
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <FormControl ref={ref} align="center">
            <MtnFlx
              initial={{ opacity: 0 }}
              animate={animateFlx}
              transition={{ duration: 2, type: "just" }}
              w="100%"
            >
              {/* top - left */}
              <Flex w="100%" direction="column" pr="2.813rem">
                <Flex justify="space-between" mb="0.938rem">
                  <FormLabel
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
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
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="21.25rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <FormControl isRequired>
                  <Flex justify="space-between" mb="0.938rem">
                    <FormLabel
                      pt="4"
                      fontSize="1rem"
                      fontFamily="avenir"
                      lineHeight="1.5rem"
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
                      fontFamily="avenir"
                      w="21.25rem"
                      h="3.125rem"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                      isRequired
                    />
                  </Flex>
                </FormControl>
                {/* left-bottom */}
                <FormControl isRequired>
                  <FormLabel
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    fontWeight="700"
                  >
                    ENTITY
                  </FormLabel>
                  <Flex
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    justify="space-between"
                  >
                    <VStack align="flex-start">
                      <Checkbox
                        size="lg"
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
                        size="lg"
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
                        size="lg"
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
                    </VStack>
                    <VStack align="flex-start" pr="10">
                      <Checkbox
                        size="lg"
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
                        size="lg"
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
                        size="lg"
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
                    </VStack>
                  </Flex>
                </FormControl>
                <Flex w="100%" direction="column" mr="2.813rem" mt="1.563rem">
                  <FormControl isRequired>
                    <Flex align="center" justify="space-between" mb="0.938rem">
                      <FormLabel
                        pt="2"
                        fontSize="1rem"
                        fontFamily="avenir"
                        lineHeight="1.5rem"
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
                        fontFamily="avenir"
                        w="21.25rem"
                        h="3.125rem"
                        bgColor="#E5E5E5"
                        borderRadius="none"
                        isRequired
                      />
                    </Flex>
                  </FormControl>
                  <FormControl isRequired>
                    <Flex align="center" justify="space-between" mb="0.938rem">
                      <FormLabel
                        pt="2"
                        fontSize="1rem"
                        fontFamily="avenir"
                        lineHeight="1.5rem"
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
                        w="21.25rem"
                        h="3.125rem"
                        bgColor="#E5E5E5"
                        borderRadius="none"
                        isRequired
                      />
                    </Flex>
                  </FormControl>
                  <Flex align="center" justify="space-between" mb="0.938rem">
                    <FormLabel
                      pt="2"
                      fontSize="1rem"
                      fontFamily="avenir"
                      lineHeight="1.5rem"
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
                      fontFamily="avenir"
                      w="21.25rem"
                      h="3.125rem"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </Flex>
                  <FormControl isRequired>
                    <Flex align="center" justify="space-between" mb="0.938rem">
                      <FormLabel
                        pt="2"
                        fontSize="1rem"
                        fontFamily="avenir"
                        lineHeight="1.5rem"
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
                        fontFamily="avenir"
                        w="21.25rem"
                        h="3.125rem"
                        bgColor="#E5E5E5"
                        borderRadius="none"
                        isRequired
                      />
                    </Flex>
                  </FormControl>
                </Flex>
              </Flex>
              {/* top-right */}
              <Flex w="100%" direction="column">
                <Flex justify="space-between" mb="0.938rem">
                  <FormLabel
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
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
                    fontFamily="avenir"
                    w="21.25rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <FormControl isRequired>
                  <FormLabel
                    fontSize="1rem"
                    fontWeight="bold"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
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
                    <VStack align="flex-start">
                      <Checkbox
                        size="lg"
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
                        size="lg"
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
                        size="lg"
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
                    </VStack>
                    <VStack align="flex-start" pr="10">
                      <Checkbox
                        size="lg"
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
                        size="lg"
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
                    </VStack>
                  </Flex>
                </FormControl>
                <Input
                  type="text"
                  name="others"
                  value={othersTxt}
                  onChange={(e) => onChange(e)}
                  fontSize="1rem"
                  fontFamily="avenir"
                  w="100%"
                  h="3.125rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
                <Flex w="100%" direction="column" mt="1.563rem">
                  <Flex align="center" justify="space-between" pb="0.938rem">
                    <FormLabel
                      fontSize="1rem"
                      fontFamily="avenir"
                      lineHeight="1.5rem"
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
                      fontFamily="avenir"
                      w="21.25rem"
                      h="3.125rem"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </Flex>
                  <Flex align="center" justify="space-between" pb="0.938rem">
                    <FormLabel
                      pt="2"
                      fontSize="1rem"
                      fontFamily="avenir"
                      lineHeight="1.5rem"
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
                      fontFamily="avenir"
                      w="21.25rem"
                      h="3.125rem"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </Flex>
                  <RadioGroup onChange={setBrokerAssoc} value={brokerAssoc}>
                    <FormLabel
                      fontWeight="bold"
                      htmlFor="brokerAssoc"
                      fontSize="1rem"
                      fontFamily="avenir"
                      mt="0.625rem"
                      textAlign="left"
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
                      <Radio value="yes" size="lg">
                        Yes
                      </Radio>
                      <Radio value="no" size="lg">
                        No
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </Flex>
              </Flex>
            </MtnFlx>
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
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
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
                  value={identityDoc}
                  onChange={(e) => {
                    setValues(...initialValues, {
                      identityDoc: e.target.files,
                    });
                  }}
                  type="file"
                  w="22.063rem"
                  h="3.125rem"
                  p="2"
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

            <Flex direction="column" w="100%" align="center" px="12.625rem">
              <Heading
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                pb="0.938rem"
              >
                AUTHORISED SIGNATORIES
              </Heading>
              <Flex>
                <Flex
                  mr="3.125rem"
                  mb="0.938rem"
                  justify="space-between"
                  align="center"
                >
                  <FormLabel
                    pl="0.625rem"
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
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
                    fontFamily="avenir"
                    w="15rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex mb="0.938rem" justify="space-between" align="center">
                  <FormLabel
                    pl="0.625rem"
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
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
                    fontFamily="avenir"
                    w="15rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </Flex>
              <Flex>
                <Flex mr="3.125rem" justify="space-between" align="center">
                  <FormLabel
                    pl="0.625rem"
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
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
                    fontFamily="avenir"
                    w="15rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex justify="space-between" align="center">
                  <FormLabel
                    pl="0.625rem"
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
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
                    fontFamily="avenir"
                    w="15rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </Flex>
            </Flex>
            <Button
              type="submit"
              mt="1.563rem"
              mb="5rem"
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
          justify="flex-end"
          pr="3.125rem"
          fontFamily="avenir"
          fontSize="1rem"
        >
          {" "}
          <Select
            w="18.75rem"
            placeholder="SELECT PROJECT"
            fontSize="1.125rem"
            fontFamily="veralaRound"
            bgColor="transparent"
            borderRadius="none"
            borderTop="0"
            borderLeft="0"
            borderRight="0"
            borderBottom="3px solid"
            icon={<TriangleDownIcon width="18px" height="18px" />}
            onChange={(e)=>setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            <option style={{ color: "black" }} value="ARETE HOMES">ARETE HOMES</option>
            <option style={{ color: "black" }} value="SKY HIGH TOWER">SKY HIGH TOWER</option>
            <option style={{ color: "black" }} value="PGC">PGC</option>
            <option style={{ color: "black" }} value="ARETE PLAZA">ARETE PLAZA</option>
            <option style={{ color: "black" }} value="ARETE MALL">ARETE MALL</option>
          </Select>
          {/*<DropMenu />*/}
          
        </Flex>
        {/* {validForm ? ( */}
        <Flex
          w="100%"
          align="center"
          justify="flex-start"
          pl="3.125rem"
          cursor="pointer"
          fontFamily="avenir"
          fontWeight="bold"
          fontSize="1.25rem"
        >
          <Icon
            as={AiOutlineDownload}
            h="1.875rem"
            w="1.875rem"
            mr="0.625rem"
            onClick={downloadPDF}
          />
          DOWNLOAD CP-BROCHURE
        </Flex>
        {/* ) : (
          ""
        )} */}
      </Flex>
    </>
  );
};

export default ChannelForm;
