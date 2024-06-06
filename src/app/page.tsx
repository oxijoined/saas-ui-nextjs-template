import { Box, Heading, Text, Button, Card, CardBody } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to my Next.js template with Chakra UI and Saas UI
      </Heading>
      <Text fontSize="lg" mb={4}>
        This is the home page of your new project.
      </Text>
      <Card>
        <CardBody>
          <Text>This is a component from the Saas UI</Text>
        </CardBody>
      </Card>
      <Button colorScheme="blue" mt={4}>
        To begin
      </Button>
    </Box>
  );
}