import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {showAddDeck, filterCards } from '../actions';

// Properties:
// func(): showAddDeck, onFilter
// Int: deckId (from <App>)

const mapDispatchToProps = dispatch => ({
	showAddDeck: () => dispatch(showAddDeck()),
	onFilter: query => dispatch(filterCards(query))
});

const Toolbar = ({showAddDeck, deckId, onFilter}) => {
	let deckTools = deckId ? (<div>
		<Link className='btn' to={`/deck/${deckId}/new`} > New Card </Link>
		<Link className='btn' to={`/deck/${deckId}/study`} > Study Deck </Link>

		<input type='search' className='search' placeholder='Search this deck'
			onChange={e => onFilter(e.target.value)} />
	</div>) : null;

	return(<div className='toolbar'>
		<div><button onClick={showAddDeck}> Add Deck </button></div>
		{deckTools}
	</div>);
}


export default connect(null, mapDispatchToProps)(Toolbar);
