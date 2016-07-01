import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {updateCard, setShowBack} from '../actions';


const MS_IN_DAY = 86400000;

const mapStateToProps = (state, router) => ({
	showBack: state.showBack,
	deckId: router.params.deckId,
	card: state.cards.filter(card => card.deckId === router.params.deckId &&
	(!card.lastStudiedOn || (new Date - card.lastStudiedOn) / MS_IN_DAY >= card.score) )[0]
});

const mapDispatchToProps = dispatch => ({
	onFlip: () => dispatch(setShowBack(true)),
	onStudied: (cardId, score) => {
		let now = new Date();
		now.setHours(0,0,0,0);
		dispatch(updateCard({id: cardId, score, lastStudiedOn: +now}));
		dispatch(setShowBack());
	}
});


const StudyModal = ({card, showBack, deckId, onFlip, onStudied}) => {
	let body = (<div className='no-cards'>
		<p>No cards to study :(</p>
	</div>);

	if(card) {
		body = (<div className='study-card'>
			<div className={showBack ? 'front hide' : 'front'}>
				<div><p>{card.front}</p></div>
				<button onClick={onFlip}> flip </button>
			</div>

			<div className={showBack ? 'back' : 'back hide'}>
				<p>{card.front}</p>
				<p>
					<button onClick={e => onStudied(card.id, Math.max(card.score -1, 1))}>
						Poorly
					</button>
					<button onClick={e => onStudied(card.id, card.score)}>
						Okay
					</button>
					<button onClick={e => onStudied(card.id, Math.min(card.score +1, 3))}>
						Great
					</button>
				</p>
			</div>
		</div>);
	}

	return (<div className='modal study-modal'>
		<Link to={`/deck/${deckId}`} className='btn close'> x </Link>
		{body}
	</div>);
}


export default connect(mapStateToProps, mapDispatchToProps)(StudyModal);
