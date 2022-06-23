import React,{ useState} from "react";
import Modal from 'react-bootstrap/Modal';

const MovieList = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true); 
	
	
  return (
    <>
		<div className='row d-flex justify-content-center m-auto' style={{width: `70%`}}>
					{props.movies.map((movie, index)=>(
						<div className='col col-md-4 mb-1 d-flex justify-content-center' key={movie.imdbID}>
							<div className="card" style={{width: `15rem`}} key={movie.imdbID}>
							  <img src={movie.Poster} className="card-img-top" alt={movie.Title}></img>
							  <div className="card-body">
								<h5 className="card-title">{movie.Title}</h5>
									<button type='button' className='btn btn-outline-dark' onClick={() => props.addWishlist(movie)}>Add To Wishlist</button>
									<button type="button" className="btn btn-primary col" onClick={() =>{
										handleShow(); 
										fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=ef76f349`)
										.then((response) => response.json())
										.then((response) => {
											if(response){
												props.setDetailMovie(response);
											}
										});
										}}>Detail</button>
							  </div>
							</div>
						</div>
					))}
		</div>
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				 <Modal.Title>Detail Movie</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<img src={props.detailMovie.Poster} className="card-img-top" alt={props.detailMovie.Title}></img>
				 <ul>
                    <li>Title: {props.detailMovie.Title}</li>
                    <li>Year: {props.detailMovie.Year}</li>
                    <li>Type: {props.detailMovie.Type}</li>
                    <li>Genre: {props.detailMovie.Genre}</li>
                    <li>Actors: {props.detailMovie.Actors}</li>
                    <li>Language: {props.detailMovie.Language}</li>
                    <li>Rated: {props.detailMovie.Rated}</li>
                    <li>Writer: {props.detailMovie.Writer}</li>
                    <li>imdbRating: {props.detailMovie.imdbRating}</li>
                    <li>Plot: {props.detailMovie.Plot}</li>
                </ul>
			</Modal.Body>
		</Modal>
	</>
  );
};

export default MovieList;
