import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {showAddDeck} from '../actions';


const mapDispatchToProps = dispatch => ({
	showAddDeck: () => dispatch(showAddDeck())
});

const Toolbar = ({showAddDeck, deckId}) => {
	let deckTools = deckId ? (<div>
		<Link className='btn' to={`/deck/${deckId}/new`} > New Card </Link>
		<Link className='btn' to={`/deck/${deckId}/study`} > Study Deck </Link>
	</div>) : null;

	return(<div className='toolbar'>
		<div><button onClick={showAddDeck}> Add Deck </button></div>
		{deckTools}
	</div>);
}


export default connect(null, mapDispatchToProps)(Toolbar);
