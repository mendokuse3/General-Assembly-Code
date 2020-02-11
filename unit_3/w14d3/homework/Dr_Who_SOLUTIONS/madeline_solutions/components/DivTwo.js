class DivTwo extends React.Component {
	render() {
		return (
			<div>
				<DivThree tardis={this.props.tardis} changeIt={this.props.changeIt} />
				<DivThree tardis={this.props.tardis} changeIt={this.props.changeIt} />
			</div>
		);
	}
}
