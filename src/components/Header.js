import React from 'react';

const Header = (props) => {
	return(
	<>
		<div className='row d-flex justify-content-center'>
			<div className='col col-md-2'>
				<h1>MyMovies - test</h1>
			</div>
		</div>
		<div className='row d-flex justify-content-center'>
			<div className='col col-md-1'>
				<button type='button' className='btn btn-outline-dark' onClick={() => props.setPageWishlist(true)}>Wishlist</button>
			</div>
			<div className='col col-md-4 mb-3 '>
				<input type="text" className='form-control' onChange={(event)=>{props.setPageWishlist(false); props.setSearch(event.target.value)}}></input>
			</div>
		</div>
	</>
	);
};
export default Header;