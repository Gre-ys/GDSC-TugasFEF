import React from 'react';

const Wishlist = (props) =>{
	return(
		<>
			<div className='row d-flex justify-content-end'>
				<div className='col col-md-7'>
					<h2>Wishlist Movie</h2>
				</div>
			</div>
			<div className='row d-flex justify-content-center m-auto' style={{width: `70%`}}>
					{props.wishlist.map((movie, index)=>(
						<div className='col col-md-4 mb-1 d-flex justify-content-center' key={movie.imdbID}>
							<div className="card" style={{width: `15rem`}} key={movie.imdbID}>
							  <img src={movie.Poster} className="card-img-top" alt={movie.Title}></img>
							  <div className="card-body">
								<h5 className="card-title">{movie.Title}</h5>
									<button type='button' className='btn btn-outline-danger' onClick={() => props.removeWishlist(movie)}>Remove From Wishlist</button>
							  </div>
							</div>
						</div>
					))}
		</div>
		</>
	);
};
export default Wishlist;