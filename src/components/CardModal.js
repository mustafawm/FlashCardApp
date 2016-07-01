import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';


const CardModal = React.createClass({
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.front).focus();
	},

	render() {
		let {card, onDelete} = this.props;

		return(<div className='modal'>
		<h1>{ onDelete ? 'Edit' : 'New' } Card </h1>

		<label>Card front</label>
		<textarea ref='front' defaultValue={card.front}></textarea>

		<label>Card back</label>
		<textarea ref='back' defaultValue={card.back}></textarea>
		<p>
			<button onClick={this.saveCard}> save </button>
			<Link to={`/deck/${card.deckId}`} className='btn'> cancel </Link>

			{onDelete ? (<button onClick={this.deleteCard} className='delete'> delete </button>) : null}
		</p>
		</div>);
	},

	saveCard() {
		let front = ReactDOM.findDOMNode(this.refs.front).value;
		let back = ReactDOM.findDOMNode(this.refs.back).value;

		this.props.onSave(Object.assign({}, this.props.card, {front, back}));
		browserHistory.push(`/deck/${this.props.card.deckId}`);
	},

	deleteCard() {
		this.props.onDelete(this.props.card.id);
		browserHistory.push(`/deck/${this.props.card.deckId}`);
	}
});


export default CardModal;
