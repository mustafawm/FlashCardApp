import React from 'react';
import {connect} from 'react-redux';
import fuzzysearch from 'fuzzysearch';

import Card from './Card';


const matches = (filter, card) =>
	fuzzysearch(filter, card.front) || fuzzysearch(filter, card.back);

const mapStateToProps = (state, router) => ({
	cards: state.cards.filter(card => card.deckId === router.params.deckId
										&& matches(state.cardFilter, card))
});

const Cards = ({cards, children}) => {
	return(<div className='main'>
		{cards.map(card => <Card card={card} key={card.id} />)}

		{children}
	</div>);
};



export default connect(mapStateToProps)(Cards);
