// reducers:
const showBack = (state = false, action) => {
	if (action.type === 'SHOW_BACK') return action.data || false;
	else return state;
}

const cardFilter = (state = '', action) => {
	switch (action.type) {
		case 'FILTER_CARDS': return action.data;
		default: return state;

	}
}

// state here refers to the array of cards
const cards = (state = [], action) => {
	switch (action.type) {
		case 'ADD_CARD':
			let card = Object.assign({}, action.data, {
				score: 1,
				id: +new Date
			});
			return state.concat([card]);
		case 'UPDATE_CARD':
			return state.map(card => {
				if (card.id === action.data.id) {
					return Object.assign({}, card, action.data);
				} else return card;
			});
		case 'DELETE_CARD':
			return state.filter(card => card.id != action.data);
		default:
			return state;
	}
}
// state here is array of decks
const decks = (state = [], action) => {
	switch (action.type) {
		case 'ADD_DECK':
			let deck = { name: action.data, id: +new Date };
			return state.concat([deck]);
		default:
			return state;
	}
}

const addingDeck = (state = false, action) => {
	switch (action.type) {
		case 'SHOW_ADD_DECK': return true;
		case 'HIDE_ADD_DECK': return false;
		default: return state;

	}
}

export {cards, decks, addingDeck, cardFilter, showBack};
