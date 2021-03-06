import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
	<MovieWrapper>
		<Link to={`${movie.id}`}>
			<Overdrive id={movie.id} duration="350">
				<Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
			</Overdrive>
		</Link>
	</MovieWrapper>
);

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string,
	}).isRequired,
};

export default Movie;

export const Poster = styled.img`
	box-shadow: 0px 8px 29px #00000038;
	border-radius: 2px;
`;

export const MovieWrapper = styled.div`
	transition: all 0.3s;
	&:hover {
		transform: scale(1.08);
	}
`;
