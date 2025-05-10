import React, { useState, useEffect } from 'react';
import { useClient } from 'use-client';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

const Navigation = () => {
    const client = useClient();
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (client.isMobile) {
            setMenuOpen(false); // Close the menu on mobile viewport
        }
    }, [client.isMobile]);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <Flex alignItems="center" justifyContent="space-between" p={4}>
            <Text fontSize="xl">Logo</Text>
            {client.isMobile ? (
                <IconButton
                    aria-label="Menu"
                    icon={isMenuOpen ? <FiX /> : <FiMenu />}
                    onClick={handleMenuToggle}
                />
            ) : (
                <Box display={{ base: 'none', md: 'block' }}>
                    <Flex>
                        <Text mx={4}>Home</Text>
                        <Text mx={4}>About</Text>
                        <Text mx={4}>Services</Text>
                        <Text mx={4}>Contact</Text>
                    </Flex>
                </Box>
            )}
            {client.isMobile && isMenuOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Box position="absolute" top={0} left={0} right={0} p={4} bg="white" zIndex={10}>
                        <Flex direction="column">
                            <Text my={2}>Home</Text>
                            <Text my={2}>About</Text>
                            <Text my={2}>Services</Text>
                            <Text my={2}>Contact</Text>
                        </Flex>
                    </Box>
                </motion.div>
            )}
        </Flex>
    );
};

export default Navigation;
