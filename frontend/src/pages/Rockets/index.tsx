import {
  Box,
  Image,
  List,
  ListItem,
  Text,
  Button,
  Grid,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { rockets } from "../../services/api";
import { launches } from "../../services/api";

type launchType = {
  mission_name: string;
  rocket: {
    rocket_id: string;
  };
};
type rocketType = {
  rocket_id: string;
  rocket_name: string;
  flickr_images: string[];
  mission_name: string;
  first_flight: string;
  active: boolean;
};

export const Rockets = () => {
    let navigate = useNavigate();
    
    const [rocketsList, setRocketsList] = useState<rocketType[]>([]);
  const { name } = useContext(AuthContext);
  const launchRocket = (rocket_id: string) => {
    navigate('/rocketselect', {state: {rocket_id: rocket_id}, replace: true});

  }

  useEffect(() => {
    const getRockets = async () => {
      const allRockets = await rockets.get(``);
      const allLaunches = await launches.get(``);

      const allRocketsList: rocketType[] = [];
      allRockets.data.forEach((rocket: rocketType) => {
        const launch: launchType = allLaunches.data.find(
          (launch: launchType) => launch.rocket.rocket_id === rocket.rocket_id
        );

        allRocketsList.push({
          rocket_id: rocket.rocket_id,
          rocket_name: rocket.rocket_name,
          flickr_images: rocket.flickr_images,
          mission_name: launch?.mission_name,
          first_flight: rocket.first_flight,
          active: rocket.active,
        });
      });
      setRocketsList(allRocketsList);
    };
    getRockets();
  }, []);

  return (
    <div>
      <Text fontSize="5xl" pl={9} pt={8} fontWeight="bold">
        Olá {name}, Selecione o lançamento
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
        p={10}
        pt={"32"}
        justifyItems={"center"}
      >
        {rocketsList.map((rocket, index) => {
          return (
            <Box
              transform="scale(1.0)"
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              key={index}
              bg={"gray.400"}
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
              alignItems="space-between"
            >
              <Grid templateRows={"40% 5% 35% 20%"} gap="10px">
                <Image
                  src={rocket.flickr_images[0]}
                  alt="rockets"
                  roundedTop="lg"
                  height="200px"
                  w={"full"}
                />
                <Text pl={5} fontSize={"xl"} fontWeight={700}>
                  {rocket.rocket_name}
                </Text>

                <Box bg={"gray.400"} px={6} py={10}>
                  <List spacing={3}>
                    <Text>Missão: {rocket.mission_name}</Text>
                    <ListItem>.</ListItem>
                    <ListItem>.</ListItem>
                    <ListItem>
                      Ano de lançamento: {rocket.first_flight}
                    </ListItem>
                  </List>

                  <Button  
                    mt={4}
                    w={"full"}
                    bg={"green.400"}
                    color={"white"}
                    rounded={"xl"}
                    type='submit'
                    boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                    _hover={{
                      bg: "green.500",
                    }}
                    _focus={{
                      bg: "green.500",
                    }}
                    onClick={() => launchRocket(rocket.rocket_id)}
                  >
                    Lançar Foguete
                  </Button>
                </Box>
              </Grid>
            </Box>
          );
        })}
      </Grid>
    </div>
  );
};
