import { Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Show, Hide } from "@chakra-ui/react";
import logo from "../../../public/images/redditFace.svg";
import logoText from "../../../public/images/redditText.svg";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/Firebase/clientApp";
import Directory from "./Directory/Directory";

const Navbar: React.FC = () => {
  const [user, error, loading] = useAuthState(auth);
  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
    >
      <Flex align="center" width={{base: '40px', md: 'auto'}} mr={{base: 0, md: 2}}>
        <Image src={logo} alt="Logo" width="35" />
        <Hide breakpoint="(max-width: 600px)">
          <Image src={logoText} alt="Logo text" width="70" />
        </Hide>
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
