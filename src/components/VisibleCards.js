import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';


const mapStateToProps = (state, router) => ({
	cards: state.cards.filter(card => card.deckId === router.params.deckId)
});

const Cards = ({cards, children}) => {
	return(<div className='main'>
		{cards.map(card => <Card card={card} key={card.id} />)}

		{children}
	</div>);
};



export default connect(mapStateToProps)(Cards);
