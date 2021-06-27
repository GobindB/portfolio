const cors = require('cors');
const express = require('express');
const session = require('express-session');

const request = require('request');
const fetch = require('node-fetch');

//*******************************//
//           App config          //
//*******************************//

const app = express();

app.use(express.json());

// enable this if you run behind a proxy (e.g. nginx)
app.set('trust proxy', 1);

// Resource: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors
// adding cors to prevent pesky cross origin erros when developing 
app.use(cors({
origin: true,
credentials: true
}));

const port = 3030;
const activePort = process.env.PORT || port;

app.get('/favicon.ico', (req, res) => {
    res.send('');
})

app.listen(activePort);
console.log('Server started on port ', activePort);