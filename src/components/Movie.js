import { Component } from "react";
import SingleMovie from "./SingleMovie";

export default class Movie extends Component {
    render() {
        // console.log( this.props.weatherInformation)
        return (


            this.props.movie.map(item =>
                <SingleMovie movieData={item}></SingleMovie>
            )
        )
    }
}