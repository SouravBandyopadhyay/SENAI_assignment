import { Box, HStack, Progress, Text, Icon, Flex } from "@chakra-ui/react";
import React from "react";
import { FiSun } from "react-icons/fi";
const UVindex = () => {
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
          UV Index
        </Text>
        <Icon as={FiSun} boxSize={6} color={"blue.300"} />
      </HStack>
      <Text fontWeight="bold" fontSize="lg" marginTop={3}>
        4 medium
      </Text>
      <HStack
        justifyContent="space-between"
        margin="auto"
        fontSize={"sm"}
        marginTop={3}
      >
        <Text>0-2</Text>
        <Text>3-5</Text>
        <Text>6-7</Text>
        <Text>8-10</Text>
        <Text>11+</Text>
      </HStack>
      <Flex alignItems="center" marginTop={3} marginBottom={3}>
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={2}
          max={2}
          min={0}
          height="15px"
          flex="1"
          mr={2}
        />
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={2}
          max={2}
          min={0}
          height="15px"
          flex="1"
          mr={2}
        />
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={1}
          max={2}
          min={0}
          height="15px"
          flex="1"
          mr={2}
        />
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={0}
          max={2}
          min={0}
          height="15px"
          flex="1"
          mr={2}
        />
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={0}
          max={2}
          min={0}
          height="15px"
          flex="1"
          mr={2}
        />
      </Flex>
    </Box>
  );
};

export default UVindex;
