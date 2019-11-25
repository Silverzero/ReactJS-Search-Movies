import React, {Component} from 'react';
import {Title} from "../components/Title";
import {SearchForm} from "../components/SearchForm";
import {MoviesList} from "../components/MoviesList";

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { results: []}
    }

    _handleResults = (results) => {
        this.setState({ results })
    };

    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.results.length === 0 ? 'Sin resultados' : <MoviesList movies={this.state.results}/> }
            </div>
        )
    }
}