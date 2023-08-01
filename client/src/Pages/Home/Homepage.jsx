import React from 'react'
import Slider from "react-slick";
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Image,
  } from "@chakra-ui/react";
  import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Homepage = () => {
    const [slider, setSlider] = React.useState(0);

    const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const images = [
    {
      imageUrl:
        "./Images/logo3.png",
    },
    {
      imageUrl:
        "./Images/logo4.png",
    },
    {
      imageUrl:
        "./Images/logo1.png",
    },
    {
      imageUrl:
        "./Images/logo2.png",
    },
  ];
  return (
    <div>
        <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
        mt={"10px"}
      >
        {/* CSS files for react-slick */}
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
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {images.map((card, index) => (
            <Box
              key={index}
              w={"full"}
              height={"600px"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              zIndex={2}
            //   backgroundImage={`url(${card.imageUrl})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              {/* <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  color={"white"}
                  maxW={"lg"}
                  position="absolute"
                  // border={"1px solid red"}
                  top="80%"
                  transform="translate(0, -50%)"
                >
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }}>
                    {card.subtitle}
                  </Text>
                </Stack>
              </Container> */}
              <Image src={card.imageUrl} w={"full"}/>
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  )
}

export default Homepage