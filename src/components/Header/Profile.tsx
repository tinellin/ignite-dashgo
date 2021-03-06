import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" textAlign="right">
      {showProfileData && (
        <Box mr="4">
          <Text>Enzo Tinelli</Text>
          <Text color="gray.300" fontSize="small">
            enzo.tinelli@unesp.br
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Enzo Tinelli" />
    </Flex>
  );
}
