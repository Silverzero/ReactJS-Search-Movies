import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Movie extends Component {
    static propTypes = {
        title:  PropTypes.string.isRequired,
        year:   PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }

    render() {
        const {id, poster, title, year} = this.props
        return(
            <a href={`/detail/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                        <img
                            src={poster}
                            alt={title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>

                </div>
            </a>
        )
    }
}
