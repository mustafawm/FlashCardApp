import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {addDeck, showAddDeck, hideAddDeck} from '../actions';

// this component receives the following:
// Arr: decks, bool: addingDeck
// func: addIt, hideAddingBox, showAddingBox

const mapStateToProps = state => ({
	decks: state.decks,
	addingDeck: state.addingDeck
});
const mapDispatchToProps = dispatch => ({
	addIt: name => {dispatch(addDeck(name))},
	showAddingBox: () => {dispatch(showAddDeck())},
	hideAddingBox: () => {dispatch(hideAddDeck())}
});


const Sidebar = React.createClass({

	componentDidUpdate() {
		let el = ReactDOM.findDOMNode(this.refs.add);
		if (el) el.focus();
	},

	render() {
		return(<div className='sidebar'>
			<button onClick={this.props.showAddingBox} >
				Add deck
			</button>

			<ul>
				{this.props.decks.map((deck, i) =>
					<li key={i}>
						<Link to={`/deck/${deck.id}`}> {deck.name} </Link>
					</li>
				)}
			</ul>
			{this.props.addingDeck && <input ref='add' onKeyPress={this.createIt}/>}
		</div>);
	},

	createIt(e) {
		if (e.which != 13) return;
		let name = ReactDOM.findDOMNode(this.refs.add).value;
		this.props.addIt(name);
		this.props.hideAddingBox();
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
