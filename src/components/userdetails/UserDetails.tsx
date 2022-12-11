import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Text, Container } from '@chakra-ui/react'
import React from 'react'
import { useDarkModeTheme } from '../../contexts';
import { v4 as uuidv4 } from 'uuid';
import { UserDetailsType } from '../../types';


const UserDetailsTable = ({ userdetails }: UserDetailsType) => {
    const {
        colorProp: { bodybg, cardBg, cardText, cardLightText },
    } = useDarkModeTheme();
    return (
        <TableContainer bg={cardBg}>
            <Table variant='simple'>
                <TableCaption>Simplifi User Details Data</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Full Name</Th>
                        <Th>Email Address</Th>
                        <Th>Message (description)</Th>
                        <Th>Captcha code</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        userdetails.map(userdetail => (<Tr key={uuidv4()}>
                            <Td color={cardText}>{userdetail.fullname}</Td>
                            <Td color={cardText}>{userdetail.email}</Td>
                            <Td color={cardText}>{userdetail.description}</Td>
                            <Td color={cardText}>{userdetail.captcha}</Td>
                        </Tr>))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export const UserDetails = React.memo(UserDetailsTable)
