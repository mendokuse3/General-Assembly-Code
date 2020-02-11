const React = require('react');

class Layout extends React.Component {
  render() {
    return (
     
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <title>Fruits CRUD</title>
                <link rel="stylesheet" href="css/style.css"/>
            </head>
            <body>
                {this.props.children}
            </body>
            </html>
        
    );
  }
}

module.exports = Layout;
