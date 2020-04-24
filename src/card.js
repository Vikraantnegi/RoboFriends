import React from 'react';

const Card = (props) => {
	return(
		<div className="bg-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robo" src={`https://robohash.org/${props.id}?size=200x200`} />
			<div className="tc">
				<h2>{props.username}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card; 