import React, { Component } from 'react'

export default class Time extends Component {
    constructor() {
        super()
        this.state = {
            date: "",
            time: ""
        }
    }
    async componentDidMount() {
        let timeurl = 'https://api.ipgeolocation.io/timezone?apiKey=' + this.props.key_ipgeolocation + '&lat=' + this.props.lat + '&long=' + this.props.lon
        try {
            let data = await fetch(timeurl)
            let parsedData = await data.json()
            this.setState({
                date: parsedData.date,
                time: parsedData.time_24
            })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                Date: {this.state.date}<br></br>
                Time: {this.state.time}
            </div>
        )
    }
}