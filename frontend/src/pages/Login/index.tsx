import {
  Flex,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { userLogin } from "../../services/api";

export const Login = () => {
  const { setName, setAge } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [idade, setIdade] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await userLogin.get(`/${firstName}`);
    try {
      setIdade(data.idade);
      setName(data.nome);
      setAge(data.idade);
    } catch (error) {
      console.log(error);
      return alert("Nome incorreto !!");
    }
  };

  return (
    <>
      {!idade ? (
        <Flex width="full" justifyContent="center"  pt={56}>
          <Box
            p={8}
            maxWidth="500px"
            bg="gray.400"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
            <Box textAlign="center">
              <Heading>Login</Heading>
            </Box>

            <Box my={4} textAlign="left">
              <form onSubmit={handleSubmit}>
                <FormControl bg="white" rounded="10">
                  <Input
                    type="name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Seu Nome"
                  />
                </FormControl>

                <Button bg="green" width="full" mt={4} type="submit">
                  Entrar
                </Button>
                <Button bg="green" width="full" mt={4} type="submit">
                  <Link to="/register">Registre-se</Link>
                </Button>
                
              </form>
            </Box>
          </Box>
        </Flex>
      ) : (
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
              <Heading>Sua idade é:</Heading>
              <Text fontSize="6xl">{idade}</Text>
            </Box>
            <Box my={4} textAlign="left">
              <Button bg="green" width="full" mt={4} type="submit">
                <Link to="/rockets">CONFIRMAR</Link>
              </Button>
              <Button bg="green" width="full" mt={4} >
                <Link to="/">Cancelar</Link>
              </Button>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
};
