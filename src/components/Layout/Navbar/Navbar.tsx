import { Flex, Hide } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import logo from "../../../../public/images/redditFace.svg";
import logoText from "../../../../public/images/redditText.svg";
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {

    return (
        <Flex bg='white' height="44px" padding="6px 12px">
            <Flex align="center">
                <Image src={logo} alt="Logo" width="35" />
                <Hide breakpoint='(max-width: 425px)'>
                <Image src={logoText} 
                alt="Logo text" 
                width="70" />
                </Hide>
            </Flex>
            <SearchInput/>
            {/* <Directory />
            <RightContent/> */}
        </Flex>
    )
}
export default Navbar;