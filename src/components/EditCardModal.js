import {Link} from 'react-router';
import {connect} from 'react-redux'

import {updateCard, deleteCard} from '../actions';
import CardModal from './CardModal';

const mapStateToProps = (state, router) => ({
	card: state.cards.filter(c => c.id === parseInt(router.params.cardId, 10))[0]
});

const mapDispatchToProps = dispatch => ({
	onSave: card => dispatch(updateCard(card)),
	onDelete: cardId => dispatch(deleteCard(cardId))
});


export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
