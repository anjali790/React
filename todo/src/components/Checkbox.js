import React, { Component } from "react";

export class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: "",
        }
    }


    handleSelect = (event) => {
        console.log(event.target.value);
        this.setState({
            checkbox: event.target.value,
        });
    };



    render() {
        return (
            <>
                <div className="checkboxes">
                    <div>
                        <label htmlFor="first">
                            <input type="checkbox" id="first" onClick={this.handleSelect}/>First checkbox</label>
                    </div>
                    <div>
                        <label htmlFor="second">
                            <input type="checkbox" id="second"  onClick={this.handleSelect}/>Second checkbox</label>
                    </div>
                    <div>
                        <label htmlFor="third">
                            <input type="checkbox" id="third"  onClick={this.handleSelect} />Third checkbox</label>
                    </div>
                </div>
            </>
        )
    }
}