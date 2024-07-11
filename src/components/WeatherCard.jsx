import React, { Component } from 'react'
import './WeatherCard.css'

export default class WeatherCard extends Component {
    render() {
        return (
            <div id='maincard' style={{ color: this.props.color, borderColor: this.props.color }}>
                <div className='bigger'>{this.props.info[0]}</div>
                <div className='big'>{this.props.info[1]} °C</div>
                <img src={this.props.info[3]} alt='...' />
                <div>{this.props.info[2]}</div>
                <div>Sunrise: {this.props.info[4]}</div>
                <div>Sunset: {this.props.info[5]}</div>
            </div>
        )
    }
}