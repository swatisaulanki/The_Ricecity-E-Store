import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Cartpage = () => {
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

  return (
    <>
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
                <HStack m={"auto"} justifyContent={"space-around"} color={"#E22D4A"}><Text fontWeight={500}><span style={{color:"#E22D4A"}}>₹</span> {e.price}</Text><Button _hover={{ backgroundColor: "#bbd9c1" }} backgroundColor={"#bbd9c1 "} color={"white"} >Add To Cart</Button></HStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Cartpage;
