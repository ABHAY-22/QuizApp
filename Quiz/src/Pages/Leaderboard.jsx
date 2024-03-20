import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        fetchLeaderboardData();
    }, []);

    const fetchLeaderboardData = async () => {
        try {
            const response = await fetch('http://localhost:8080/results');
            const data = await response.json();
            setLeaderboardData(data);
        } catch (error) {
            console.log('Error fetching leaderboard data:', error);
        }
    };

    return (
        <div>
            <h1>Leaderboard</h1>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Rank</Th>
                        <Th>Name</Th>
                        <Th>Score</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {leaderboardData.map((user, index) => (
                        <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.score}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
};

export default Leaderboard;
