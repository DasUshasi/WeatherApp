import React, { Component } from 'react'

export default class Alert extends Component {
    constructor() {
        super()
        this.state = {
            alert: null
        }
    }
    componentDidMount() {
        this.setState({ alert: this.props.msg })
        setTimeout(() => {
            this.setState({ alert: null })
        }, 1500);
    }
    render() {
        return (
            this.state.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Error!</strong> {this.state.alert}
            </div>
        )
    }
}