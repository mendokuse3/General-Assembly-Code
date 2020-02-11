class DivThree extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div onClick={this.props.changeIt}>
				<h3>{this.props.tardis.name}</h3>
			</div>
		);
	}
}
