import React from 'react'

//class component to implement error boundary component
export default class CounterErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hasError: '', counter: 0}
		// this.onClick = this.onClick.bind(this)
	}
	//update state so that when component renders, fallback UI when an error is thrown.
	static getDerivedStateFromError(error) {
		return { 
			hasError: true, 
			// setState(counter => counter + 1)
		};
	}

	componentDidCatch(error ,errorInfo) {
		//display error information to the error reporting service.
		this.setState({
			error: error,
			errorInfo: errorInfo
		});
	}

	render() {
		if(this.state.counter === 11) {
			//return custom fallback UI
			return<h1 style={{color: 'red'}}>Oops I have crashed</h1>
		}
		return this.props.children;
	}
}