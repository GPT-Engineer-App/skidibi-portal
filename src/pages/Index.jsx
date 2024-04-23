import { Box, Container, Heading, Text, Image, VStack, Link } from "@chakra-ui/react";
import { FaHeart, FaInfoCircle, FaMusic } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to the World of Skibidi!
        </Heading>
        <Image src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYW5jaW5nJTIwcGVvcGxlfGVufDB8fHx8MTcxMzg3NzU2Mnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Dancing People" />
        <Text fontSize="xl" textAlign="center">
          Dive into the energetic and eccentric dance phenomenon that has taken the world by storm.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            <FaMusic /> The Music
          </Heading>
          <Text mt={4}>Skibidi is not just a dance; it's a musical style characterized by its upbeat and catchy rhythms. Originating from the viral hit by Little Big, Skibidi challenges everyone to break out in dance with its irresistible hook.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            <FaHeart /> Why We Love It
          </Heading>
          <Text mt={4}>The Skibidi dance is more than just fun; it's a way to express joy and freedom through movement. It's a universal language that connects people across different cultures and backgrounds.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            <FaInfoCircle /> Learn More
          </Heading>
          <Text mt={4}>
            Interested in learning the Skibidi dance or exploring more about its origins? Check out the official{" "}
            <Link href="https://www.youtube.com/watch?v=mDFBTdToRmw" isExternal color="teal.500">
              Skibidi music video
            </Link>{" "}
            and join the global dance craze!
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
