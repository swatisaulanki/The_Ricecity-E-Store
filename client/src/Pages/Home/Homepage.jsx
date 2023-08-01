import React from 'react'
import {

  Card,
  SimpleGrid,
  CardBody,
  Text,
  CardHeader,
  Button,
  Heading,
  CardFooter,
  Flex,
  Box
  
} from '@chakra-ui/react'
const Homepage = () => {
  return (
    <>
    <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(250px, 1fr))' h='380'  m='auto' ml='250px'>
  <Card>
    <CardHeader>
      <Heading size='md'>Free Delivery all over Gondia</Heading>
    </CardHeader>
    <CardBody>
      <Text>Get Free Delivery for Cart Value More Then Rs. 100</Text>
    </CardBody>
    <CardFooter>
    <Flex justifyContent="center">
    <Button colorScheme="teal" margin="14" textAlign="center">Shop Now</Button>
    </Flex>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>Delivery With in 4Hr All over Gondia.</Heading>
    </CardHeader>
    <CardBody>
      <Text>Max to Max we take 4hr To delivered Poduct in Your Hand</Text>
    </CardBody>
    <CardFooter>
    <Flex justifyContent="center">
      <Button colorScheme="teal" margin="14" textAlign="center">Shop Now</Button>
    </Flex>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>Support Local Go hard</Heading>
    </CardHeader>
    <CardBody>
      <Text>Your Local Ecommerce Site</Text>
    </CardBody>
    <CardFooter>
    <Flex justifyContent="center">
    <Button colorScheme="teal" margin="14" textAlign="center">Check Out</Button>

    </Flex>
    </CardFooter>
  </Card>




  

</SimpleGrid>


</>
  )
}

export default Homepage
