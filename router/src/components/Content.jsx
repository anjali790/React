import React from 'react'
import { useParams } from 'react-router-dom'

export function Content() {
    const {id} = useParams();
    console.log("ID", id);

    return (
        <>
            <p>This is the for content {id}</p>
        </>
    )
}