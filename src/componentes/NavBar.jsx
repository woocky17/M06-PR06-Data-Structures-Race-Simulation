import { Flex, Text } from "@radix-ui/themes";
import { MdHome } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex p="4" className="border-b" justify="between" direction="row">
      <Flex gap="2" align="center">
        <Text className="font-medium">
          <Link to="/">
            <MdHome size={24} color="#000" />
          </Link>
        </Text>
        <ul className="flex space-x-8 ml-10 list-none">
          <li>
            <NavLink
              to="/Crear-Circuito"
              className="text-zinc-700 hover:text-blue-500"
            >
              Crear Circuito
            </NavLink>
          </li>
        </ul>
      </Flex>
    </Flex>
  );
};

export default NavBar;
