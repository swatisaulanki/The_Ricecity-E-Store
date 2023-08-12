import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IconButton, useBreakpointValue, Image, Box, Button, Heading, Grid, GridItem, Text, HStack } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";

// Settings for the sliderr
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
  const [products, setProducts] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/CartsDatas");
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
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

      <Box py={"10px"}>
        <Heading py={"20px"}>ALL PRODUCTS</Heading>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          w={"90%"}
          m={"auto"}

          // border={"1px solid red"}
        >
          {products.map((e) => (
            <GridItem height={"300px"} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
              {/* <Link to={`/singlesale/${e.id}`}> */}
                <Box
                  key={e.id}
                  _hover={{ backgroundSize: "120%" }}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  overflow={"hidden"}
                  height={"200px"}
                  cursor={"pointer"}
                  border={"1px solid grey"}
                  m={"10px"}
                  borderRadius={"5px"}
                  backgroundImage={`url(${e.imageURL2})`}
                  transition="background-size 0.5s ease"
                >
                  <Box backgroundColor={"#a4e1f4"} fontWeight={500} color={"#E22D4A"} w={"50%"} mt={"175px"}>₹{e.pricecashback}</Box>
                </Box>
                
              {/* </Link> */}
              <Box px={"5px"}>
                <Text noOfLines={1}>{e.name}</Text>
                <HStack m={"auto"} justifyContent={"space-around"} color={"#E22D4A"}><Text fontWeight={500}><span style={{color:"#E22D4A"}}>₹</span> {e.price}</Text><Button _hover={{ backgroundColor: "#bbd9c1" }} backgroundColor={"#bbd9c1 "} >Add To Cart</Button></HStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

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
