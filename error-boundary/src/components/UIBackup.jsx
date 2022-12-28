import React, { Component } from 'react'

export class UIBackup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        }
    }

    render() {
        if (this.state.hasError) {
            return <div>something went wrong</div>
        } else {
            return <>{this.props.children}</>
        }
    }
}