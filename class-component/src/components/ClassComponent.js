import React, { Component } from 'react';

export class ClassComponent extends Component {
    render() {
        const { name } = this.props
        return (
            <>
                <h1>My name is {name}</h1>
            </>
        )
    }
}