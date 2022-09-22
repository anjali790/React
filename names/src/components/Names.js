import React, { Component } from "react";

export class Names extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {
                    id: 1,
                    name: 'shubro',
                },
                {
                    id: 2,
                    name: 'anjali',
                },
                {
                    id: 3,
                    name: 'aarav',
                },
                {
                    id: 4,
                    name: 'ekta',
                },
            ],
        };
    }
    render() {
        console.log(this.props.children);
        return (
            <>
            {this.props.children}
            {this.props.children}


            {this.state.names.map((personNames)=>(
                <p key={personNames.id}>{personNames.name} {personNames.id}</p>
            ))}
            </>
        )
    }
}