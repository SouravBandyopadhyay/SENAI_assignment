import {
  Box,
  HStack,
  IconButton,
  SimpleGrid,
  Switch,
  VStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import DashboardComponent from "./DashboardComponent";
import { AddIcon } from "@chakra-ui/icons";
import { FaLocationArrow } from "react-icons/fa";
export default function OverlappingBoxes() {
  return (
    <Box padding="1">
      <SimpleGrid gridTemplateColumns={["1fr", "0.4fr 1.6fr"]}>
        <Box borderRadius="md" bgColor="blue.200">
          <HStack justifyContent="space-between" marginTop={10} p={2}>
            <AddIcon boxSize={6} />
            <Switch size="md" />
          </HStack>
          <HStack marginTop={10} justifyContent="center">
            <Icon as={FaLocationArrow} color="blue.700" />
            <Text>New York, USA</Text>
          </HStack>
          <Box marginTop={20} fontSize={"xl"} fontWeight="bold">
            {" "}
            27° Sunny
          </Box>
        </Box>

        <Box borderRadius="md" bgColor="blue.50">
          <DashboardComponent />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
