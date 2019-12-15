import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {  
	return (
	  <div>
		{
		  robots.map((user, i) => {
			return (
			  <Card 
		  		key={i} 
		  		id={robots[i].id} 
		  		name={robots[i].name} 
		  		email={robots[i].email}
			  />
	   		);
		  }) //when doing a loop, it always needs a unique key. In this case, it's "i". But in the future, key prop should have something that doesn't change. For ex, index (or "i" in our case) could change if array items get moved. So a better key in this case would be something unique like id.	
		}
	  </div>
	);
}

export default CardList;