const React = require('react');
const Layout = require('./layout.jsx');

class New extends React.Component {
    render() {
        return(
                <Layout>
                    <h1>THE CAPTAINS LOG - CREATE NEW</h1>
                        <form action="/logs/" method="POST">
                            <input type="text" name="title" placeholder="title"/>
                            <textarea name="entry" id="" cols="30" rows="10"></textarea>
                            <input type="checkbox" name="shipisbroken"/>
                            <input type="submit" value="SUBMIT"/>
                        </form>
            </Layout>
        )
    }
}

module.exports = New;