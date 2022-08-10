import { Component } from "react";

export default class Movie extends Component {
    render() {
        // console.log( this.props.weatherInformation)
        return (


            this.props.movie.map(item =>
                <>
                    <p>i{item.title}</p>
                    <p>{item.released_on}</p>
                    <p>{item.popularity}</p>
                </>
            )
        )
    }
}