import { Flex, Text, Avatar, Stack, Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const ImgCarousel = (props) => {
  const { testimonial } = props;
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Flex w="100%" h="100%">
      <Box
        position={"relative"}
        height={"full"}
        width={"full"}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings} style={{ display: "flex" }}>
          {testimonial.map((tes) => (
            <Flex
              align="flex-start"
              justify="space-between"
              flexDirection="column"
              w="100%"
              pr="25px"
              py="5px"
              mt="50px"
              key={tes.name}
              height={"100%"}
              position="relative"
            >
              <Text textAlign="center" fontSize="16px" fontFamily="veralaRound">
                {tes.text}
              </Text>
              <Flex w="100%" pt="25px" align="center" justify="center">
                <Avatar
                  h="80px"
                  w="80px"
                  mr="10px"
                  src={tes.avtr}
                  alt={tes.name}
                />
                <Stack spacing={-1}>
                  <Text
                    fontSize="18px"
                    fontFamily="veralaRound"
                    fontWeight={400}
                  >
                    {tes.name}
                  </Text>
                  <Text
                    fontFamily="veralaRound"
                    fontWeight={400}
                    fontSize="16px"
                    color="black"
                  >
                    {tes.title}
                  </Text>
                </Stack>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

export default ImgCarousel;
