import React, { Component } from "react";

export class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
        }
    }


    handleSelect = (event) => {
        console.log(event.target.value);
        this.setState({
            country: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.country);
    }



    render() {
        return (
            <>
                <div>
                    <select onChange={this.handleSelect} value={this.state.country} name="countries" id="countries">
                        <option>India</option>
                        <option>USA</option>
                        <option>Australia</option>
                        <option>Russia</option>
                        <option>Japan</option>
                    </select>
                </div>
            </>
        )
    }
}