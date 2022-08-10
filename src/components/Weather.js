

import { Component } from "react";
export default class Weather extends Component {
    render() {
        console.log(this.props.weatherInformation)
        return (
            <>
                {
                    this.props.weatherInformation.map(item =>
                        <li>{item.date}:{item.description}</li>

                    )
                }
            </>
        )
    }
}
