import { Component } from "react";

export default class DisplayedInfo extends Component {
    render() {
        return (
            <>
                <p>City Name:{this.props.cityInfo.display_name}</p>
                <p>Late:{this.props.cityInfo.latitude}</p>
                <p>long:{this.props.cityInfo.longitude}</p>


            </>
        )
    }
}