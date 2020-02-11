const React = require('react');
const Layout = require('./layout.jsx');

class Index extends React.Component {
    render() {
        let {id, title, entry, shipIsBroken} = this.props.log;
        return(
            <Layout>
                <h1>Edit Page</h1>
                <form action={`/logs/${id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" value={title}/><br/>
                    Entry: <textarea name="entry" id="" cols="30" rows="10" value={entry}>{entry}</textarea> 
                    <input type="checkbox" name="shipIsBroken" checked={shipIsBroken}/>
                    <input type="submit" value="SUBMIT"/> 
                </form>
            </Layout>
        )
    }
}

module.exports = Index;