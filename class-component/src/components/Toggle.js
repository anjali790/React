import React, { Component } from 'react';

export class Toggle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggledOn: false,
        }
    }

    handleClick = () => {
        this.setState({
            isToggledOn: !this.state.isToggledOn,
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>{this.state.isToggledOn ? "ON" : "OFF"}</button>
            </>
        )
    }
}