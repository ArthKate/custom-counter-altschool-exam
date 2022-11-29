import { NavLink } from "react-router-dom";
import pageNotFound from "./images/pageNotFound.jpg";


const email = "mailto:arthurkateeba@gmail.com"


const NotFound = () => {
	return (
		<div id="counterappII">
			<img src={pageNotFound} alt='404 Page' style={{margin: "auto"}} />
			<h3>This page seems is lost in the sands of time due maintenance</h3>
			<p>If it's urgent, please reach out to the maintainer at <a href={email}>email</a>&nbsp; 
			To return home.
			</p>
			<NavLink to='/CounterApp'><button>Home</button></NavLink>
			<NavLink to='/CounterAppII'><button>CounterApp2</button></NavLink>
			<NavLink to='/page-with-error'><button>Blog</button></NavLink>
		</div>
	)
}

export default NotFound