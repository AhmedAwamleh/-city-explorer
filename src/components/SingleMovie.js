import { Component } from "react";

export default class SingleMovie extends Component {
    render() {
        return (
            <>
                <p>i{this.props.movieData.title}</p>
                <p>{this.props.movieData.released_on}</p>
                <p>{this.props.movieData.popularity}</p>
            </>
        )
    }
}