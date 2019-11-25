import React, {Component} from 'react';
import PropTypes from 'prop-types';
const API_KEY = '5b95d4ea';

export class Detail extends Component {

    constructor(props){
        super(props);
        this.state = { movie: {} }
    }

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    };

    _fetchMovie ({ id }){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then( resp => resp.json() )
            .then( movie => {
                console.log(movie);
                this.setState({ movie })
            })
    }

    _goBack () {
        window.history.back();
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        this._fetchMovie({ id })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot} = this.state.movie;
        return (
            <div>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img
                    src={Poster}
                    alt={Title}
                />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}