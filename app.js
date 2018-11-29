const config = require('./config');
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const hbsHelpers = require('handlebars-helpers')();

// Make path absolut
config.paths.website = path.join(__dirname, config.paths.website);
config.paths.static = path.join(__dirname, config.paths.static);
config.paths.partials = path.join(__dirname, config.paths.partials);

// ------------------ HANDLEBARS ------------------
const hbsInstance = hbs.create();
hbsInstance.registerPartials(config.paths.partials);
app.engine('hbs', hbsInstance.__express);
app.set('view engine', 'hbs');

// Register handlebars helpers
for (let key in hbsHelpers) {
    hbsInstance.registerHelper(key, hbsHelpers[key]);
}

// Custom helper to slice arrays
hbsInstance.registerHelper('arrSlice', function (array, start, end) {
    if (!array || !Array.isArray(array)) {
        return [];
    }
    return array.slice(start, end);
});
// ------------------ HANDLEBARS ------------------


// ------------------ STATIC FILES ------------------
app.use('/static/', express.static(config.paths.static));
app.use((req, res, next) => {
    if (req.path.indexOf('/static/') === 0) {
        return res.status(404).send();
    }

    return next();
});
// ------------------ STATIC FILES ------------------

app.use((req, res, next) => {
    res.data = {};
    return next();
});

// ------------------ CONTROLLERS ------------------
app.get('/', require('./controllers/home'));
app.get('/pagina/:page', require('./controllers/home'));
app.get('/categoria/:genre', require('./controllers/genre'));
app.get('/categoria/:genre/pagina/:page', require('./controllers/genre'));
app.get('/castellano/ver-online/:year/:movie', require('./controllers/movie'));
app.get('/latino/pelicula-completa/:year/:movie', require('./controllers/movie'));
app.get('/busqueda/', require('./controllers/search'));
app.get('/busqueda/pagina/:page', require('./controllers/search'));

// ------------------ CONTROLLERS ------------------

// ------------------ COMPILE AND SEND ------------------
app.use((req, res, next) => {
    const finalPath = `${config.paths.website}${res.data.path}`;
    // Compile code and send
    res.render(finalPath, res.data.context, (err, page) => {
        if (err) {
            return res.status(500).send(err.toString());
        } else {
            return res.send(page);
        }
    });
});
// ------------------ COMPILE AND SEND ------------------

app.listen(config.port, function () {
    console.log(`Listening on ${config.port}`);
});