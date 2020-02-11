const { HashRouter, NavLink, Route } = ReactRouterDOM;

class TodoRouter extends React.Component {
	state = {};
	render() {
		return (
			<HashRouter>
			
				<h2 className="text-center m-3">My To Do List</h2>
				<nav className="navbar-light bg-light row">
					<NavLink to="/" className="nav-item m-2">
						Home
					</NavLink>
					<NavLink to="/list" className="nav-item m-2">
						My To Do List
					</NavLink>
				</nav>
				<Route path="/list" component={App} />
			</HashRouter>
		);
	}
}

ReactDOM.render(<TodoRouter />, document.querySelector('.container'));
