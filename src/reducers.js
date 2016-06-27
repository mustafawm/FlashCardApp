// reducers:
// state here refers to the array of cards
const cards = (state, action) => {
	switch (action.type) {
		case 'ADD_CARD':
			let card = Object.assign({}, action.data, {
				score: 1,
				id: +new Date
			});
			return state.concat([card]);
		default:
			return state || [];
	}
}
// state here is array of decks
const decks = (state, action) => {
	switch (action.type) {
		case 'ADD_DECK':
			let deck = { name: action.data, id: +new Date };
			return state.concat([deck]);
		default:
			return state || [];
	}
}

const addingDeck = (state, action) => {
	switch (action.type) {
		case 'SHOW_ADD_DECK': return true;
		case 'HIDE_ADD_DECK': return false;
		default: return state || false;

	}
}

export {cards, decks, addingDeck};
