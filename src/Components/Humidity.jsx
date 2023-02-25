import {
  Box,
  HStack,
  Text,
  Icon,
  Progress,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { BiDroplet } from "react-icons/bi";
const Humidity = () => {
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
          Humidity
        </Text>
        <Icon as={BiDroplet} boxSize={6} color={"blue.300"} />
      </HStack>
      <Text fontWeight="bold" fontSize="lg" marginTop={3}>
        82% bad
      </Text>
      <HStack marginTop={3} justifyContent="space-between" fontSize="sm">
        <Text>good</Text>
        <Text>normal</Text>
        <Text>bad</Text>
      </HStack>
      <Flex alignItems="center">
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={100}
          height="15px"
          flex="1"
          mr={2}
        />
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={100}
          height="15px"
          flex="1"
          mr={2}
        />
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={46}
          height="15px"
          flex="1"
        />
      </Flex>
    </Box>
  );
};

export default Humidity;
