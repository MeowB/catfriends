import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
	return (
		<ul>
		{
			cats.map((user) => {
				return (
					<Card 
						key={user.id} 
						id={user.id} 
						name={user.name} 
						email={user.email}
					/>
				)
			})
		}
		</ul>
	);
}

export default CardList