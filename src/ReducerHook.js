import  { useReducer } from 'react'



//defining our function component to substitute useReducer hook

export default function useCustomHook(reducer, initialState) {
	//defining our state
	const [count, dispatch] = useReducer(reducer, initialState);
	//our custom hook useReducerCustomhook
	return [count, dispatch];
}
