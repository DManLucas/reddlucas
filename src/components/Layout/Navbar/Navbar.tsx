import { Flex } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image'
import { Show, Hide } from '@chakra-ui/react'
import logo from "../../../../public/images/redditFace.svg"
import logoText from "../../../../public/images/redditText.svg"
import SearchInput from './SearchInput';
import RightContent from './RightContent/RightContent';

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
            {/* <Directory /> */}
            <SearchInput/>            
            <RightContent/>
        </Flex>
    )
}
export default Navbar;