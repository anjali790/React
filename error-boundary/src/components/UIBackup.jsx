import React, { Component } from 'react'

export class UIBackup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    // static getDerivedStateFromError() {
    //     return {
    //         hasError: true,
    //     }
    // }

    componentDidCatch(error, errormsg) {
        // You can also log the error to an error reporting service
        console.log(error, "something went wrong comp did catch error");
      }

    render() {
        if (this.state.hasError) {
            return <div>something went wrong</div>
        } else {
            return <>{this.props.children}</>
        }
    }
}