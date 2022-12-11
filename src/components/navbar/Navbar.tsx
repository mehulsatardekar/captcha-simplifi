import React from "react";

import { LogoText } from "../index";
import { Link } from 'react-router-dom'
import {
    headerStyleProps,
    logoTextProps,
} from "./styles/navbar-style-props";

import {
    Flex,
    Box,
    IconButton,
    useColorMode,

} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useDarkModeTheme } from "../../contexts";

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const {
        colorProp: { bodybg, cardBg, cardText, cardLightText },
    } = useDarkModeTheme();

    return (
        <Flex as="header" bg={cardBg}  {...headerStyleProps}>
            <Link to="/">
                <LogoText {...logoTextProps} size={"1.7rem"} />
            </Link>
            <Box display="flex" gap="15px">
                <IconButton aria-label='theme switch' icon={(colorMode === 'light') ? <MoonIcon /> : <SunIcon />} bg={bodybg} onClick={toggleColorMode} />
            </Box>

        </Flex>
    );
};

export const Navbar = React.memo(Nav);