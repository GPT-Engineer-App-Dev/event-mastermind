import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="header" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Event Management Platform</Heading>
        <Flex as="nav">
          <Link as={RouterLink} to="/" p={2} color="white">Home</Link>
          <Link as={RouterLink} to="/events" p={2} color="white">Events</Link>
          <Link as={RouterLink} to="/contact" p={2} color="white">Contact</Link>
        </Flex>
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Heading as="h2" size="md">Upcoming Events</Heading>
          <Text>Event listings will be displayed here.</Text>
        </VStack>
      </Box>
      <Flex as="footer" bg="gray.200" p={4} justifyContent="center">
        <Text>© 2023 Event Management Platform. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;