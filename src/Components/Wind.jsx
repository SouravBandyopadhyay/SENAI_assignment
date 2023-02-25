import { Box, HStack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import GaugeChart from "react-gauge-chart";
import { BiWind } from "react-icons/bi";
const Wind = () => {
  return (
    <Box
      border="transparent"
      bgColor="white"
      boxShadow={"md"}
      borderRadius="xl"
      p={2}
    >
      <HStack justifyContent="space-between" padding={1}>
        <Text fontWeight="bold" fontSize="lg">
          Wind
        </Text>
        <Icon as={BiWind} boxSize={6} color={"blue.300"} />
      </HStack>
      <GaugeChart
        nrOfLevels={5}
        textColor="#191825"
        colors={["#2d74da", "#1f57a4", "#25467a"]}
        id="gauge-chart1"
        percent={0.08}
        formatTextValue={(value) => value + " km/hr"}
      />
    </Box>
  );
};

export default Wind;
