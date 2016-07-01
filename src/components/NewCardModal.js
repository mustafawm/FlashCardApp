import {connect} from 'react-redux';

import {addCard} from '../actions';

import CardModal from './CardModal';

const mapStateToProps = (state, router) => ({
	card: {deckId: router.params.deckId}
});

const mapDispatchToProps = dispatch => ({
	onSave: card => dispatch(addCard(card))
});


export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
