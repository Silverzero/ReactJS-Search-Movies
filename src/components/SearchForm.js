import React, {Component} from 'react';

const API_KEY = '5b95d4ea';

export class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputSearch: ''
        }
    }

    _handleChange = (event) => {
        this.setState({
            inputSearch: event.target.value
        })
    };

    _handleSubmit = (event) => {
        event.preventDefault();
        let inputMovie = this.state.inputSearch;
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then( resp => resp.json() )
            .then( resp => {
                const { Search } = resp;
                this.props.onResults(Search)
            })
    };


    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Search film" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}