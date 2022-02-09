import { Box, Button, HStack } from '@chakra-ui/react';

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorSheme="pink"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
          _hover={{
            bg: 'pink.600',
          }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorSheme="pink"
          bg="gray.700"
          _hover={{
            bg: 'gray.500',
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorSheme="pink"
          bg="gray.700"
          _hover={{
            bg: 'gray.500',
          }}
        >
          3
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorSheme="pink"
          bg="gray.700"
          _hover={{
            bg: 'gray.500',
          }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}
