import {
  Box,
  Image,
  List,
  Text,
  Button,
  Grid,
  Heading,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { rockets } from "../../services/api";

type rocketType = {
  rocket_id: string;
  rocket_name: string;
  cost_per_launch: number;
  flickr_images: string[];
  engines: {
    type: string;
  };
  active: boolean;
};

interface CustomizedState {
  rocket_id: string;
}

export const RocketSelect = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { name } = useContext(AuthContext);
  const { rocket_id } = state;
  const [rocket, setRocket] = useState<rocketType | null>(null);

  useEffect(() => {
    const getRocket = async () => {
      const { data } = await rockets.get(`/${rocket_id}`);
      setRocket(data);
    };
    getRocket();
  }, []);

  return (
    <div>
      <Text fontSize="5xl" m={24} fontWeight="bold">
        {name}, Selecione o Lucro e data do Lançamento.
      </Text>
      {rocket && (
        <>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={{ base: "8", sm: "12", md: "16" }}
            mr={40}
            justifyItems={"center"}
          >
            <Box
              bg={"gray.400"}
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
              alignItems="space-between"
            >
              <Grid templateRows={"40% 5% 35% 20%"} gap="5px">
                <Image
                  src={rocket.flickr_images[0]}
                  alt="rockets"
                  roundedTop="lg"
                  height="200px"
                  w={"full"}
                />
                <Text
                  p={2}
                  fontSize={"2xl"}
                  alignItems="center"
                  fontWeight={700}
                >
                  Foguete: {rocket?.rocket_name}
                </Text>

                <Box bg={"gray.400"} px={4} m="10" py={4}>
                  <List fontSize={22} fontWeight="semibold" spacing={3}>
                    <Text>Motor: {rocket?.engines.type}</Text>
                    <Text>Custo: {rocket?.cost_per_launch}</Text>
                    <Text>{rocket?.active ? "Ativo" : "Inativo"}</Text>
                  </List>
                </Box>
              </Grid>
            </Box>
            <Box
              p={8}
              w={"full"}
              h={"full"}
              maxWidth="500px"
              bg="gray.400"
              borderWidth={1}
              borderRadius={8}
              boxShadow="lg"
            >
              <Box textAlign="center">
                <Heading>Data e Lucro</Heading>
              </Box>
              <Box my={4} textAlign="left">
                <FormControl bg="white" rounded="10">
                  <Input
                    type="name"
                    h={20}
                    placeholder="Informe a % de Lucro desejado"
                  />
                </FormControl>
                <FormControl mt={6} bg="white" rounded="10">
                  <Input
                    type="idade"
                    h={20}
                    placeholder="Selecione a data de lançamento"
                  />
                </FormControl>
                <Button bg="green" h={20} w={"full"} mt={37}>
                  <Link to={"/rocketslist"}>Realizar Lançamento</Link>
                </Button>
                <Button bg="green" h={20} w={"full"} mt={4}>
                  <Link to={"/rockets"}>Cancelar</Link>
                </Button>
              </Box>
            </Box>
          </Grid>
        </>
      )}
    </div>
  );
};
