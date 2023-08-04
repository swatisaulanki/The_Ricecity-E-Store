import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confPassword, setConfPassword] = useState("");

  return (
    <>
      <Flex minH={"50vh"} align={"center"} justify={"center"}>
        <Stack spacing={1} mx={"auto"} maxW={"lg"} py={5} px={4}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Log In
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={1}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    border={"3px solid black"}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={10} pt={2}>
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

              <Text>
                If you don't have an account?{" "}
                <Link to="/register">
                  <b>Register</b>
                </Link>
              </Text>
              <Stack pt={2}>
                <Text align={"center"}>
                  By signing an account you agree with our terms & Conditions
                  and Privacy StatementLogin
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
