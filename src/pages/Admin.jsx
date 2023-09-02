
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  ChakraProvider,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import DoctorView from "../components/admin/DoctorView";
import { useState } from "react";
import HospitalView from "../components/admin/HospitalView";
import ExploreView from "../components/admin/ExploreView";
import FavouritesView from "../components/admin/FavouritesView";
import SettingsView from "../components/admin/SettingsView";

const LinkItems = [
  { name: "Doctor", icon: FiHome, viewName: "DoctorView" },
  { name: "Hospital", icon: FiTrendingUp, viewName: "TrendingView" },
  { name: "Appointment", icon: FiCompass, viewName: "ExploreView" },
  { name: "Favourites", icon: FiStar, viewName: "FavouritesView" },
  { name: "Settings", icon: FiSettings, viewName: "SettingsView" },
];

const SidebarContent = ({ setActiveView, onClose, ...rest }) => {
  console.log(setActiveView)
  return (
    <ChakraProvider>
      <Box
        transition="3s ease"
        bg={useColorModeValue("red.50", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            viewName={link.viewName}
            setActiveView={setActiveView}
          >
            {link.name}
          </NavItem>
        ))}
      </Box>
    </ChakraProvider>
  );
};

const NavItem = ({ icon, viewName, setActiveView, children, ...rest }) => {
  return (
    <ChakraProvider>
      <Box
        as="a"
        // href="/hospitals"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => setActiveView(viewName)}
      >
        {" "}
        {/* Move the onClick handler here */}
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <ChakraProvider>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Logo
        </Text>

        <HStack spacing={{ base: "0", md: "6" }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
{/*                 <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem> */}
                <MenuItem><a href="#">Home</a></MenuItem>
               
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeView, setActiveView] = useState("DoctorView");

  function setView(val){
    setActiveView(val)
  }

  let activeComponent;
  switch (activeView) {
    case "DoctorView":
      activeComponent = <DoctorView />;
      break;
    case "TrendingView":
      activeComponent = <HospitalView />;
      break;
    case "ExploreView":
      activeComponent = <ExploreView />;
      break;
    case "FavouritesView":
      activeComponent = <FavouritesView />;
      break;
    case "SettingsView":
      activeComponent = <SettingsView />;
      break;
    default:
      activeComponent = null;
  }

  return (
    <ChakraProvider>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          setActiveView={setActiveView}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent setActiveView={setActiveView} onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {activeComponent}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default SidebarWithHeader;
