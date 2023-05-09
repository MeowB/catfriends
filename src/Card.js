import './Card.css'

const Card = ({name, email, id}) => {
	return (
		<div className='card bg-light-green dib br3 pa3 ma2 grow bw2 tc'>
			<img alt="robots" src={`https://robohash.org/${id}?set=set4`} />
			<div className=''>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;