const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    path = require('path');
    
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', ejs);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('../views/login.ejs');
});

require('./app/routes')(app, express);
