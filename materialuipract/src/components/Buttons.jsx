import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function Buttons() {
    return (
        <>
            <Stack spacing={2} direction="row">
                <button variant="text">Text</button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </>
    )
}
