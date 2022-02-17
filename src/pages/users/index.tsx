import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

import { getUsers, useUsers } from '../../services/hooks/useUsers';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';

export default function UserList({ users }) {
  const [page, setPage] = useState(1);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { data, isFetching, isLoading, error } = useUsers(page, {
    initialData: users,
  });

  async function handlePrefetchUser(userId: number) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const res = await api.get(`users/${userId}`);

        return res.data;
      },
      {
        staleTime: 1000 * 60 * 10, //10 minutes
      }
    );
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="10" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" overflowX="auto">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex align="center" justify="center" mt="10">
              <Spinner size="xl" color="gray.200" />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map((user) => (
                    <Tr>
                      <Td px={['3', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td px={['3', '4', '6']}>
                        <Box>
                          <Link
                            color="purple.400"
                            onMouseEnter={() => handlePrefetchUser(user.id)}
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      <Td px={['3', '4', '6']}>
                        {new Date(user.createdAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: isWideVersion ? 'long' : 'short',
                          year: isWideVersion ? 'numeric' : '2-digit',
                        })}
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
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1);

  return {
    props: {
      users,
      totalCount,
    },
  };
};
