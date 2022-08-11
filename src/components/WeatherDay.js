import { Component } from "react";

export default class WeatherDay extends Component {
    render() {
        return (
            <li>{this.props.dayData.date}:{this.props.dayData.descripion}</li>
        )
    }

}