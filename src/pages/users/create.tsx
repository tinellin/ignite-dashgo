import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="10" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome completo" />
              <Input type="email" name="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input type="password" name="password" label="Senha" />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirmação de senha"
              />
            </SimpleGrid>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
