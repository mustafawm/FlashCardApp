import React from 'react';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = (state, router) => ({
	deckId: router.params.deckId
});

const App = (props) => {
	return (<div className='app'>
		<Sidebar />
		<h2>Deck id is: {props.deckId}</h2>
		{props.children}
	</div>);
};

export default connect(mapStateToProps)(App);
