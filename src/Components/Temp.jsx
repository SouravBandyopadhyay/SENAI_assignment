import { Box, HStack, Text, Icon, Flex, Progress } from "@chakra-ui/react";
import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
const Temp = () => {
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
          Feels Like
        </Text>
        <Icon as={FaThermometerEmpty} boxSize={6} color={"blue.300"} />
      </HStack>
      <Text fontWeight="bold" fontSize="lg" marginTop={3} >
        30°
      </Text>
      <HStack justifyContent="space-between" margin="auto" fontSize={"sm"} marginTop={3} >
        <Text>0°</Text>
        <Text>25°</Text>
        <Text>50°</Text>
      </HStack>
      <Progress marginTop={3} 
        borderRadius="md"
        hasStripe
        isAnimated="true"
        value={30}
        min={0}
        max={50}
        height="15px"
      />
    </Box>
  );
};

export default Temp;
