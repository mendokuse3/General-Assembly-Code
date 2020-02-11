# React: Authentication with JWTs

## Learning Objectives (5 min / 0:05)
- Describe JSON web tokens (JWTs)
- Identify parts of JWTs
- Add JWT authentication with Passport to a MERN app

## Framing (20 min / 0:25)

### What is a JSON Web Token?

[Official definition](https://tools.ietf.org/html/rfc7519): compact, URL-safe means of representing claims to be transferred between two parties. 

In other words: A JSON web token is JSON-formatted data sent securely between the server and the browser via HTTP requests. 

### Authentication with JWTs

The problem that JWTs seek to overcome: HTTP is stateless, but we need a way to tell the server that a user is logged in.

When making requests or performing actions that are only for authorized users, there needs to be a way to keep track of whether a user is logged in, since that information isn't stored in HTTP by nature. 

For instance, when we implemented Passport for user authentication, we used sessions to remind the server of "logged-in status" with every request made to the server. A session is a place to store data on the browser during one request which can be read during later requests. The session is a JS object that allows us to keep track of this information. When a new user signs into an application, we create a new session in the server, and a cookie for this session is sent in a response back to the browser. In future HTTP requests from the browser, the client sends a session cookie to the server to retrieve the user from the database to then authenticate the authorized interaction with the database (e.g. saving a post, editing data).

Another approach to keeping track of a user being logged in is to use JWTs with Passport. With JWTs, the user info is embedded in a token. Upon initial log in, the server creates a JSON "token" to store the user info. These tokens are "signed" by the server, and only the server holds the private key to read the token.

#### How It Works

![JWT vs. Sessions Diagram](https://cdn-images-1.medium.com/max/1600/1*d6YcPvq7TeU0DTamj629xw.png)

1. Client browser makes a request sending user login credentials and password (only has to do this once)
2. Server validates the credentials and sends a JSON response to the client that encodes user login data
3. Client stores this JSON web token
4. When the client sends a request to a route that requires authentication, it will send this token to the API to present its authorization for access

#### Advantages of using JWTs:

- JWTs are self-contained
    - You have all the information about the user within the token. After inital request from browser, the server doesn't need to interact with the database to know who the user is. Using JWTs limit database lookups.
- JWTs are compact, and transmission through HTTP actions is fast.
- JWTs work the same for browser clients and native mobile apps.

### What does a JWT look like?

A string with three parts, each separated by dots (`.`):

    - header
    - payload
    - signature

#### Header

**Header** is a JSON object consisting of two parts: the type of token (typ) and the hashing algorithm being used on the token (alg).

```
Header example:
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

**Payload** is a JSON object containing claims. Claims refer to statements about an entity (e.g. user data). You can put as many claims into the payload as you want, though you want to be cognizant of keeping the JWT compact so as not to impact performance of HTTP actions.

```
Payload example:
{
  "sub": "1234567890",
  "name": "John Doe",
  "userId": "5z-9328477bz"
  "admin": true
}
```

There are three different types of claims: public claims, private claims, and registered claims.

Registered claims refer to claims that have predetermined key names - e.g. common fields like issuer ("iss"), subject ("sub"), and expiration time ("exp").

Public claims are claims that we create - e.g. "name", "userId", and "admin" above.

Private claims are used when JWTs are sent between two parties. Only these two parties know what the claims respresent.

#### Signature
**Signature** is encoded header and payload signed with a secret key.

The header is encoded, and the payload is encoded. They are joined together with a `.` in between. This string is then hashed with the server's secret key, using header's hashing algorithm. This produces a new string, which is added onto the `<header>.<payload>` string with another `.` between.

The signature allows the receiver to ensure that the JWT was sent from an authentic source (the holder of the secret key). This encoding does not serve to encrypt the data, but to transform the data.

> Note: [Refresher on difference between encoding, encrypting, and hashing.](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/)

#### Final product

Encoded string vs. decoded JSON:

![JWT: encoded string vs. decoded JSON](https://cdn-images-1.medium.com/max/2000/1*LAo6s2tlszZdk2x-uE1lqA.png)

### Using JWTs with Passport in a MERN app

Passport allows you to store the user object in requests instead of in session cookies. Upon the log-in request, the server will create a token and pass it to the browser in the HTTP response. The token is saved to local storage in the browser.

When the user wants to access a route that requires authorization, the client will send a JWT with the request to the server. Since the server has the secret key to decode the JWT, it can (a) verify that the JWT has the right signature to ensure that the JWT originally came from that server, and (b) verify the user and then perform the action that needed authorization.

### Additional Resources on JWTs:
- https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec
- https://jwt.io/introduction/

## We Do: Implementing Authentication with JWT

### Starter Code (15 min / 0:40)

Start out by cloning the repo for 'Walk It Out' api:

```
$ cd student_examples/
$ npm i walk-it-out-back-end
```

Take 10 min to review the starter code. Look for:

- models
- controllers
- CRUD functionality?

# Break (0:10 / 0:50)

### Config Directory (0:20 / 1:10)

```
$ mkdir config
$ touch config/config.js config/passport.js
```

The config directory is where we are going to put all the code to build out passport and our JWTs. It will look a little bit different than the passport we built out before.

To start, we need to install a few dependencies:

```
$ npm install passport passport-jwt
```

In `config.js`, we'll create a secret key for our JWTs:

```
module.exports = {  
    jwtSecret: 'JwtS3cr3tK3Y',
    jwtSession: {
        session: false
    }
}
```

Then, we will build out passport. First in `index.js`:

```
const passport = require('./config/passport')()

...

app.use(passport.initialize())
```

In `passport.js`:

```
var passport = require('passport')
var passportJWT = require('passport-jwt')
var ExtractJwt = passportJWT.ExtractJwt
var Strategy = passportJWT.Strategy 

var config = require('./config')

const mongoose = require('../models/User')
const User = mongoose.model('User')

var params = {  
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function() {  
    var strategy = new Strategy(params, (payload, callback) => {
        var user = User.findById(payload.id) || null
        if (user) {
            return callback(null, {
                id: user.id
            })
        } else {
            return callback(new Error("User not found"), null)
        }
    })
    passport.use(strategy)
    return {
        initialize: function() {
            return passport.initialize()
        },
        authenticate: function() {
            return passport.authenticate("jwt", {session: false})
        }
    }
}
```

### User Controller (0:20 / 1:30)

In order to log in (or sign up), we'll need to make post requests to the server to find (or create) the user in the database and create a JWT to represent the user is logged in. We can manage these requests in a user controller.


Then, we'll make a user controller file in the command line:

```
$ touch controllers/users.js
```

In `index.js`: 

```
const userController = require('./controllers/users.js')

...

app.use('/users', userController)
```

In `users.js`, we will start out like a typical controller:

```
const express = require('express')
const router = express.Router()


module.exports = router
```


Then we will to install another dependency:

```
$ npm install jwt-simple
```


Then, we'll require that in `users.js`:

```
const jwt = require('jwt-simple')
```

We want to bring in the passport and JWT built out in config:

```
const passport = require('../config/passport')
const config = require('../config/config')
```

In order to query the database for users and create new users, we'll need to require the User schema built out in the models folder:

```
const mongoose = require('../models/User')
const User = mongoose.model('User')
```

#### Sign Up

We will begin creating routes for requests made from the browser. First, we will build out functionality for a `post` request to `/users/signup`. The logic involved is:

- Receive sign-up form input (email and password) from the browser
- Query the database to see if another user has used that email
- If not, create an instance in the database with new user email and password
- Generate a JWT holding the user id
- Send the JWT back to the browser

In `users.js`:

```
router.post('/signup', (req, res) => {
    if (req.body.email && req.body.password) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({email: req.body.email})
            .then((user) => {
                if (!user) {
                    User.create(newUser)
                        .then(user => {
                            if (user) {
                                var payload = {
                                    id: newUser.id
                                }
                                var token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            } 
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})
```

#### Testing Sign Up with Postman (0:05 / 1:35)

Download Postman on Mac or Linux by going to getpostman.com and just downloading it.

To verify that this post request will work, let's use our nifty tool, Postman. Start up the server with `nodemon`.

In Postman:

- Uhoose POST verb
- Url: `http://localhost:3001/users/signup`
- Headers: 
    - Key: 'Content-Type'
    - Value: 'application/json'
- Body:
    - Raw
    - JSON (application/json)
    ```
{
            "email": "arthurisfly@email.com",
            "password": "thanapplepie"
        }
        ```

Hit "SEND"!

Then, scroll down to see the server response. You should see a JSON object with a token value.

![First](https://progressandfortune.com/smac_images/1.png)
![Second](https://progressandfortune.com/smac_images/2.png)
![Third](https://progressandfortune.com/smac_images/3.png)

# Break (0:10 / 1:45)

#### Log In (0:15 / 2:00)

In the user controller, we will create a method to handle `post` requests to create a token when a user logs in. It will:

- Receive sign-up form input (email and password) from the browser
- Query the database for that user
- Verify the password sent from the browser matches the password in the database
- Generate a JWT holding the user id
- Send the JWT back to the browser

In `/controllers/users.js`:

```
router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            if (user.password === req.body.password) {
                var payload = {
                    id: user.id
                }
                var token = jwt.encode(payload, config.jwtSecret)
                res.json({
                    token: token
                })
            } else {
                res.sendStatus(401)
            }
        } else {
            res.sendStatus(401)
        } 
    })
    } else {
        res.sendStatus(401)
    }
})
```

#### Testing Log In with Postman (0:05 / 2:05)

In Postman:

- Uhoose POST verb
- Url: `http://localhost:3001/users/login`
- Headers: 
    - Key: 'Content-Type'
    - Value: 'application/json'
- Body:
    - Raw
    - JSON (application/json)
    - ```
        {
            "email": "meg@email.com",
            "password": "meg123"
        }
        ```

Hit "SEND"!

Once again, you should see a JSON object with a token value sent in a response.

![First](https://progressandfortune.com/smac_images/4.png)
![Second](https://progressandfortune.com/smac_images/5.png)


### Additional Resources on using JWTs in MERN apps

- https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
- https://hptechblogs.com/using-json-web-token-react/
- https://blog.jscrambler.com/implementing-jwt-using-passport/
- [FAQs: Authentication with tokens (vs cookies)](https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies/#token-oauth)
- [Using bcrypt](https://jonathas.com/token-based-authentication-in-nodejs-with-passport-jwt-and-bcrypt/)
