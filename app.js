const express = require('express');
const app = express();
const port = 3001;
//requiring all the data base functions and models into one object.
const db = require('./db/index.js');

//syncing the database with the program.
db.sequelize.sync();

//setting view agent to PUG
//app.set('view engine', 'pug');
app.set('views', './views');

//sets a static folder called static with everything from public
app.use('/static', express.static('public'));

//this is for form data. It specifies the type of message that is expected to be recieved.
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}));

//defining all of the routing in a seperate file and then passing requests through middleware.
const mainRoutes = require('./routes/index');

//passing requests to the router.
app.use(mainRoutes);

//if nothing catches the reqeust we create a 404 error.
app.use((req, res, next) => {
    const err = new Error('NOT FOUND');
    err.status = 404;
    next(err);
});

//basic error handling
app.use((err, req, res, next) => {
    res.status = err.status;
    res.send(`${err.status} error`)
});

app.listen(port, () => {
    console.log('Now listening at local host');
});