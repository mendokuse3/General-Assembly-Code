const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>The Captains Log</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }

}

module.exports = Layout;