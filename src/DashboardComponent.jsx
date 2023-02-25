import { Box, HStack, Text, Icon, Avatar } from "@chakra-ui/react";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import StackComponent from "./StackComponent";
import TempChart from "./Components/Tempchart";
const DashboardComponent = () => {
  return (
    <Box padding="4">
      <HStack justifyContent="space-between">
        <Box textAlign="left" fontWeight="bold" fontSize="lg">
          <Text>Welcome Isabella!</Text>
          <Text fontWeight="400">Check out Today's Weather Information</Text>
        </Box>
        <HStack
          justifyContent="space-between"
          margin="auto"
          alignContent="center"
        >
          <Icon as={HiDotsHorizontal} boxSize={6} />
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </HStack>
      </HStack>
      <Box marginTop={2}>
        <TempChart />
        <StackComponent />
      </Box>
    </Box>
  );
};

export default DashboardComponent;
