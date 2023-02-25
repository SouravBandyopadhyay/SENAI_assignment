import {
  Box,
  HStack,
  SimpleGrid,
  Text,
  Icon,
  Progress,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Precipitaion from "./Components/Precipitaion";
import Humidity from "./Components/Humidity";
import Wind from "./Components/Wind";
import UVindex from "./Components/UVindex";
import Temp from "./Components/Temp";
import Rain from "./Components/Rain";
const StackComponent = () => {
  return (
    <Box bgColor={"bg"}>
      <Text
        marginTop="10"
        marginBottom={"5"}
        fontWeight="bold"
        fontSize={"lg"}
        textAlign={"start"}
      >
        More Details of today's weather
      </Text>
      <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr 1fr"]} gap={2}>
        <Humidity />
        <Wind />
        <Precipitaion />
        <UVindex />
        <Temp />
        <Rain />
      </SimpleGrid>
    </Box>
  );
};

export default StackComponent;
