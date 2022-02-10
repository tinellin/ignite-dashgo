import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Abrir menu de navegação para pequenas telas"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}
      <NotificationsNav />
      <Profile showProfileData={isWideVersion} />
    </Flex>
  );
}
