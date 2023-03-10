import { Box, List, UnorderedList } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const MAIN_COLOR = '#789BFB';

  return (
    <Box as="nav" maxW="1280px" mx="auto">
      <UnorderedList
        h="65px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx="60px"
      >
        <List
          px="7"
          fontWeight="bold"
          color={location.pathname === '/main' ? MAIN_COLOR : 'black'}
        >
          <NavLink to="/main">main</NavLink>
        </List>
        <List
          px="7"
          fontWeight="bold"
          color={location.pathname === '/reservations' ? MAIN_COLOR : 'black'}
        >
          <NavLink to="/reservations">cart</NavLink>
        </List>
      </UnorderedList>
    </Box>
  );
};

export default Nav;
