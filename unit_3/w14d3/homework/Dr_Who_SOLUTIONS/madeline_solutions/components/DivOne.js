class DivOne extends React.Component {
	render() {
		return (
			<div>
				<DivTwo tardis={this.props.tardis} changeIt={this.props.changeIt} />
			</div>
		);
	}
}
