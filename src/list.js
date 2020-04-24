import React from 'react';
import Card from './card';

const List = ({robots}) => { 
	return (
			<div>
				{
		    	robots.map((user, i) => {
				return (<Card 
					key = {i} 
					id={robots[i].id} 
					username={robots[i].username} 
					email={robots[i].email}/>
					);	
				})
			}
		</div>
	);
}

export default List;