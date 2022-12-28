import React from 'react';

export function Dummy(props) {
    if (props.country === "russia") {
        throw new Error("Error in Dummy");
    }

    return (
        <p>{props.country}</p>
    )
}
