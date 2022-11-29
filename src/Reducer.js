import './Action'

const reducer = (state, action) => {
	switch(action.type) {
		case 'increment':
			return {state.count + 1};
		case 'decrement':
			return {state.count -1};
		case 'reset':
			return {initialState};
		default: 
			return state;
	}
}