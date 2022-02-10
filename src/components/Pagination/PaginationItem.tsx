import { Button } from '@chakra-ui/react';

type PaginationItemProps = {
  isCurrent?: boolean;
  number: number;
};

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent)
    return (
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
        {number}
      </Button>
    );

  return (
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
      {number}
    </Button>
  );
}
