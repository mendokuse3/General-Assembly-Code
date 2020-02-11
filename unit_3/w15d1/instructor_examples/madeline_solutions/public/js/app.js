class App extends React.Component {

    state = {
      description: ''
    }
    componentDidMount() {
        fetch('/todos')
        .then(response => response.json()).then(response => this.setState({todos: response}))
    }

    onChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }
    render () {
      return (
        <div>
          <h1> To Dos </h1>
          <form>
            <label htmlFor='description'>description</label>
            <input type='text' value={this.state.description} onChange={this.onChange} id='description' />
            <input type='submit' />
          </form>
          <h2>Current To Dos</h2>
          <ul>
            {this.state.todos && this.state.todos.map((el) => {
              return <li>{el.description}</li>
            })}
          </ul>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )