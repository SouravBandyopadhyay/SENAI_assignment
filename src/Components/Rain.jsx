import { Box, HStack, Text, Icon, Progress } from "@chakra-ui/react";
import React from "react";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
const Rain = () => {
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
          Chance of Rain
        </Text>
        <Icon as={BsFillCloudRainHeavyFill} boxSize={6} color={"blue.300"} />
      </HStack>
      <Text fontWeight="bold" fontSize="lg" marginTop={3}>
        42%
      </Text>
      <HStack
        justifyContent="space-between"
        margin="auto"
        fontSize={"sm"}
        marginTop={3}
      >
        <Text>0%</Text>
        <Text>25%</Text>
        <Text>50%</Text>
        <Text>75%</Text>
        <Text>100%</Text>
      </HStack>
      <Progress
        borderRadius="md"
        hasStripe
        isAnimated="true"
        value={82}
        marginTop={3}
      />
    </Box>
  );
};

export default Rain;
