import React from "react";
import Slider from "react-slick";
import { IconButton, useBreakpointValue, Image, Box, Button } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Cartpage from "../Cart/Cartpage";
import { Link } from "react-router-dom";

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
      imageUrl: "./Images/logo3.png",
    },
    {
      imageUrl: "./Images/logo4.png",
    },
    {
      imageUrl: "./Images/logo1.png",
    },
    {
      imageUrl: "./Images/logo2.png",
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
              <Image src={card.imageUrl} w={"full"} />
            </Box>
          ))}
        </Slider>
      </Box>

      <Cartpage/>

      <Link to={"/store"}><Button backgroundColor={"#5cb85c"} borderRadius={"0px"} fontWeight={600} fontSize={"20px"} p={"30px"}>Load More</Button></Link>
      {/* <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        h="380"
        m="auto"
        ml="250px"
      >
        <Card>
          <CardHeader>
            <Heading size="md">Free Delivery all over Gondia</Heading>
          </CardHeader>
          <CardBody>
            <Text>Get Free Delivery for Cart Value More Then Rs. 100</Text>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="center">
              <Button colorScheme="teal" margin="14" textAlign="center">
                Shop Now
              </Button>
            </Flex>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Delivery With in 4Hr All over Gondia.</Heading>
          </CardHeader>
          <CardBody>
            <Text>Max to Max we take 4hr To delivered Poduct in Your Hand</Text>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="center">
              <Button colorScheme="teal" margin="14" textAlign="center">
                Shop Now
              </Button>
            </Flex>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Support Local Go hard</Heading>
          </CardHeader>
          <CardBody>
            <Text>Your Local Ecommerce Site</Text>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="center">
              <Button colorScheme="teal" margin="14" textAlign="center">
                Check Out
              </Button>
            </Flex>
          </CardFooter>
        </Card>
      </SimpleGrid> */}

      
    </div>
  );
};

export default Homepage;
