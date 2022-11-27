import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Item } from './ConstData';
import { BarCharts } from '../Chart/BarChart/BarChart';
import { PercentageStackedAreaChart } from '../Chart/PercentageStackedAreaChart/PercentageStackedAreaChart';
import { SimpleRadarChart } from '../Chart/SimpleRadarChart/SimpleRadarChart';
import { LineBarAreaComposedChart } from '../Chart/LineBarAreaComposedChart/LineBarAreaComposedChart';
import { CricbuzzTable } from '../Table/CricbuzzTable';
import { SliderComp } from '../Carousel/SliderComp';

import { Card } from '../Card/Card';

import './dashboard.css';

export function Dashboard() {
    const [venue, setVenue] = useState([]);

    useEffect(() => {
        axios.get('https://frozen-harbor-02472.herokuapp.com/venue')
            .then((response) => {
                setVenue([...response.data]);
            });
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }} style={{ marginTop: '90px', marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xs={7}>
                        <Item><BarCharts /></Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item><LineBarAreaComposedChart /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><SimpleRadarChart /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><PercentageStackedAreaChart /></Item>
                    </Grid>
                    <h3 className='venue-Heading'>HOST CITIES & VENUES(MOST RUNS)</h3>
                    <Grid item xs={12} className="venue_div">
                        <SliderComp venue={venue} />
                    </Grid>
                    <h3 className='venue-Heading'>ICC Mens T20 World Cup 2022</h3>
                    <Grid item xs={12}>
                        <CricbuzzTable />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}