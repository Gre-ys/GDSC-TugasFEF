import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Wishlist from './components/Wishlist';
import 'dotenv/config';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [wishlist, setWishlist] = useState([]);
	const [search, setSearch] = useState('');
	const [detailMovie, setDetailMovie] = useState([]);
	const [pageWishlist, setPageWishlist] = useState(false);
	
	const getDataMovies = (search) => {
		fetch(`http://www.omdbapi.com/?s=${search}&apikey=ef76f349`)
			.then((response) => response.json())
			.then((response) => {
				if(response.Search){
					setMovies(response.Search);
				}
			});
	};
	
	useEffect(() => {
		const movieWishlist = JSON.parse(
			localStorage.getItem('react-movie-app')
		);

		if (movieWishlist) {
			setWishlist(movieWishlist);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app', JSON.stringify(items));
	};
	
	useEffect(() => {
			getDataMovies(search);
		},[search]);
	
	const addWishlist = (movie) => {
		const newWishlist = [...wishlist, movie];
		setWishlist(newWishlist);
		saveToLocalStorage(newWishlist);
	};

	const removeWishlist = (movie) => {
		const newWishlist = wishlist.filter(
			(list) => list.imdbID !== movie.imdbID
		);
		setWishlist(newWishlist);
		saveToLocalStorage(newWishlist);
	};
	
	if(pageWishlist === true){
		return (
			<>
				<Header setSearch={setSearch} setPageWishlist={setPageWishlist}/>
				<Wishlist wishlist={wishlist} removeWishlist={removeWishlist}/>
			</>
		);
	}else{
		return (
			<>
				<Header setSearch={setSearch} setPageWishlist={setPageWishlist}/>
				<MovieList movies={movies} detailMovie={detailMovie} setDetailMovie={setDetailMovie} addWishlist={addWishlist}/>
			</>
		);
	}
};

export default App;