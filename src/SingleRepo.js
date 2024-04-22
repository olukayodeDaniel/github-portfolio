import React from 'react';
import { Box, Heading, Text, CloseButton } from '@chakra-ui/react';

function SingleRepo({ repo, onClose }) {
  return (
    <Box bg="gray.800" p={4} borderRadius="lg" position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)">
      <CloseButton onClick={onClose} />
      <Heading as="h3" size="md" color="white" mb={2}>
        {repo.name}
      </Heading>
      <Text color="white">{repo.description}</Text>
      {/* Display other repo details here (language, stars, etc.) */}
    </Box>
  );
}

export default SingleRepo;
