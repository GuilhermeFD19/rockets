import {
  Input,
  Box,
  Button,
  Heading,
  FormControl,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../services/api";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");

  let navigate = useNavigate();

  const registerUser = async () => {
    try {
        await authLogin.post("register", {
            nome: firstName,
            idade: age,
          });
    } catch (error) {
        return alert('Não foi possível cadastrar!!')
    }
    navigate('/',{replace: true})
  };

  return (
    <Flex width="full" justifyContent="center" pt={56}>
      <Box
        p={8}
        maxWidth="500px"
        bg="gray.400"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Register</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <FormControl bg="white" rounded="10">
            <Input
              type="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Seu Nome"
            />
          </FormControl>
          <FormControl mt={6} bg="white" rounded="10">
            <Input
              type="idade"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Sua Idade"
            />
          </FormControl>
          <Button bg="green" width="full" mt={4} onClick={registerUser}>
            CADASTRAR
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
