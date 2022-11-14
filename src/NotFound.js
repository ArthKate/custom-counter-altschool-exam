import { NavLink } from "react-router-dom"

const email = 'mailto:arthurkateeba@gmail.com'


const NotFound = () => {
	return (
		<div><h1>404 Error</h1>
			<h3>Oops! This page seems is lost in the sands of time due maintenance</h3>
			<p>If it's urgent, please reach out to the maintainer at <a href={email}>email</a>&nbsp; 
			To return home.
			</p>
			<NavLink to='/CounterApp'><button>Home</button></NavLink>
			<NavLink to='/Blog'><button>Blog</button></NavLink>
		</div>
	)
}

export default NotFound