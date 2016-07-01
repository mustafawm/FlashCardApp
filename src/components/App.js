import React from 'react';
import {connect} from 'react-redux';

import Toolbar from './Toolbar';
import Sidebar from './Sidebar';

const mapStateToProps = (state, router) => ({
	deckId: router.params.deckId
});

const App = (props) => {
	return (<div className='app'>
		<Toolbar deckId={props.deckId}/>
		<Sidebar />
		<h2>Deck id is: {props.deckId}</h2>
		{props.children}
	</div>);
};

export default connect(mapStateToProps)(App);
