class App extends React.Component {
    state = {

    }
    componentDidMount() {
        fetch('/animals').then(response => response.json()).then(response => this.setState({animals: response}))
    }
    render(){
        return (
            <div>
                <h1>Hello Animals!</h1>
                {this.state.animals && this.state.animals.map((el) => <h2>{el.name}</h2>)}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));