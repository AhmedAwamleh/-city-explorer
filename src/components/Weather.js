

import { Component } from "react";
import WeatherDay from "./WeatherDay";
export default class Weather extends Component {
    render() {
        console.log(this.props.weatherInformation)
        return (
            <>
                {
                    this.props.weatherInformation.map(item =>
                        <WeatherDay dayData={item} />

                    )
                }
            </>
        )
    }
}
