import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="10" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" overflowX="auto">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['3', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th px={['3', '4', '6']}>Usuários</Th>
                <Th px={['3', '4', '6']}>Data de cadastro</Th>
                <Th px={['3', '4', '6']} width="8" />
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={['3', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={['3', '4', '6']}>
                  <Box>
                    <Text fontWeight="bold">Enzo Tinelli</Text>
                    <Text fontSize="sm" color="gray.300">
                      enzo.tinelli@unesp.br
                    </Text>
                  </Box>
                </Td>
                <Td px={['3', '4', '6']}>
                  {isWideVersion ? '08 de feveiro de 2022' : '08 de fev'}
                </Td>
                <Td px={['3', '4', '6']}>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
