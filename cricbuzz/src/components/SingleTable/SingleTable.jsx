import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './singleTable.css';

export function SingleTable() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('https://frozen-harbor-02472.herokuapp.com/table')
            .then((response) => {
                setTableData([...response.data]);
            });
    }, []);

    const data = ["MATCHES", "INNS", "RUNS", "AVG", "SR", "FOURS", "SIXES"];

    return (
        <TableContainer component={Paper} style={{ marginTop: '90px', marginLeft: '10px', marginRight: '10px', marginBottom: '20px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='table_head'>
                    <TableRow>
                        <TableCell className='player_img'>PLAYER</TableCell>
                        <TableCell className='player_name'>NAME</TableCell>
                        {data.map((item) => {
                            return <TableCell align='right'>{item}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map(({ match, inns, runs, avg, sr, fours, sixes, name, imgUrl }) => (
                        <TableRow
                            key={name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={imgUrl} alt="" />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell align="right">{match}</TableCell>
                            <TableCell align="right">{inns}</TableCell>
                            <TableCell align="right">{runs}</TableCell>
                            <TableCell align="right">{avg}</TableCell>
                            <TableCell align="right">{sr}</TableCell>
                            <TableCell align="right">{fours}</TableCell>
                            <TableCell align="right">{sixes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}