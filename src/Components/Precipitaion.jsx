import {
  Box,
  Flex,
  HStack,
  Progress,
  Text,
  ProgressLabel,
  Icon,
} from "@chakra-ui/react";
import { BsFillCloudRainFill } from "react-icons/bs";
export default function Precipitaion() {
  return (
    <Box
      border="transparent"
      bgColor="white"
      boxShadow={"md"}
      borderRadius="xl"
      p={2}
    >
      <HStack justifyContent="space-between" padding={1} marginTop={3}>
        <Text fontWeight="bold" fontSize="lg">
          Precipitaion
        </Text>
        <Icon as={BsFillCloudRainFill} boxSize={6} color={"blue.300"} />
      </HStack>
      <Text fontWeight="bold" fontSize="lg">
        1.4 cm
      </Text>
      <HStack
        justifyContent="space-between"
        margin="auto"
        fontSize="sm"
        marginTop={3}
      >
        <Text fontSize="sm">0</Text>
        <Text>10</Text>
        <Text>20</Text>
        <Text>30</Text>
        <Text>40</Text>
        <Text>50</Text>
        <Text>60</Text>
        <Text>70</Text>
        <Text>80</Text>
        <Text>90</Text>
      </HStack>
      <Flex alignItems="center">
        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={10}
          max={10}
          min={0}
          height="15px"
          flex="1"
          mr={2}
        />

        <Progress
          borderRadius="md"
          hasStripe
          isAnimated="true"
          value={4}
          max={10}
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
          max={10}
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
          max={10}
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
          max={10}
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
          max={10}
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
          max={10}
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
          max={10}
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
          max={10}
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
          max={10}
          min={0}
          height="15px"
          flex="1"
          mr={2}
        />
      </Flex>
    </Box>
  );
}
