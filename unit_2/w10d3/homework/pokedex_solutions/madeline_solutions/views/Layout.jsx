const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="/css/style.css" rel="stylesheet"/>
        </head>
        <body>
          <nav>
            <a href="/">Home</a>
            <a href="/pokemon/new">Create</a>
          </nav>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
