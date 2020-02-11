const component = require('./component');

const wrapper = () => {
	return `
        <!DOCTYPE html >
        <html>
            <head>
                <title> Madelines doing it </title>
            </head>
            <body>
                <h1> BONJOUR LE MONDE! </h1>
                ${component.component()}

            </body>
        </html>
    
    `;
};

module.exports.wrapper = wrapper;
