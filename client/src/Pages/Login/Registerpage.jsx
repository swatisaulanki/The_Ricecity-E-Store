import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,

  Button,
  Heading,
  Text,
  
  InputGroup,
  InputRightElement,
  
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Registerpage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const[password, setPassword] = useState("")
  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(setloginEmailData(email));
  //   navigate("/login/password")
  // }

  return (
    <>
      <Flex minH={"70vh"}  align={"center"} justify={"center"}>
        {/* // bg={useColorModeValue('gray.50', 'gray.800')}> */}
        <Stack spacing={1} mx={"auto"} w={"100vw"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"}>Registeration Form</Heading>
            <Text fontSize={"lg"} color={"gray.600"}></Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>

            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="name" placeholder="Enter your name" onChange={(e) =>  setName(e.target.value)} />
              </FormControl>

              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Email Address" onChange={(e) =>  setEmail(e.target.value)} />
              </FormControl>

              <FormControl id="password" isRequired>
              <FormLabel >Password</FormLabel>
                <InputGroup>
                <Input  border={"3px solid black"} type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
              <Stack>
                
                  <Button
                   bg={"rgb(105, 138, 242 )"}
                   
                   h={"50px"}
                   w={"100%"}
                   color={"white"}
                   _hover={{
                     bg: "blue.700",
                   }}
                  >
                    Submit
                  </Button>
               
              </Stack>
             
            </Stack>

           
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
