# Requeriments

- Node.js 8.x or higher


# Installation
Simply run
```
    npm install
```

# Configuring
Go ahead and edit config.js file to your preferences. Here is explained what does each config means:

``` js
module.exports = {
    port: 3000, // Port where HTTP Server will run
    paths: { // Contains the relative paths to website files
        website: './public/example.website', // Website base path
        static: './public/example.website/static', // Static files path
        partials: './public/example.website/templates', // Partial paths
    },
};
```

# Running
Just run
```
    node app.js
```

You should take care of is that if you edit a template file (a partial), the file changes won't be reflected until server is restarted. That's because Handlebars load partials files on app start.

# Guide
- You can have a look at the example provided to see how you should build your templates and how to use handlebars helpers.  
- It's really important to make use of handlebars "partials" whenever it's possible (ie. header, footer), to prevent copying and pasting the same code along multiple templates.
- You can also have a look at the example provided to make use of current implementations.
- Note that links are provided by the backend (for example, movie links, genre links, etc)
- Note that the HEAD section is fixed and the data is provided by the backend (take a look at head.hbs template). You can use the same, and change just CSS or things that you need.
- Note that PAGINATION is a template, because it's used the sameway on the whole page. You can take a look and use that code too, replacing markup you need to make it look the way you need.
- Note that HEADER and FOOTER links are also provided by the backend (take a look at header.hbs and footer.hbs).
- Note that SEARCH FORM ACTION is defined by backend too.
- It's really important to follow this guidelines, because we build our sites dynamically and we can change links, titles, etc changing configuration without  editing site's templates.

# What you need to do
## Routes
You have to develop/design the source files of the pages we asked.
The webserver has the following routes defined:

- HOME. -> accesible at `/` and `/pagina/:page`
    - Home file must be named **home.hbs**
- GENRE DETAIL -> accesible at `/categoria/:genre` and `/categoria/:genre/pagina/:page`
    - Genre file must be named **category.hbs**
- MOVIE DETAIL -> accesible at `/castellano/ver-online/:year/:movie` and `/latino/pelicula-completa/:year/:movie`
    - Home file must be named **movie.hbs**
- SEARCH PAGE -> accesible at `/busqueda/` and `/busqueda/pagina/:page`
    - Home file must be named **search.hbs**

## Files
- If you do not name the files as is asked, the webserver will not render the view.
- You need to locate ALL static files (ie.  images, css, js, etc) inside /static/ folder. You can make use of folders inside of it (ie. /static/css/styles.css).

## Routes context
On each route you will have a different context used to compile the view.  
You can have a look at the context object on `/controllers/{route}.js`  
Nevertheless, there's a lot of data repeated on all routes (i.e. featured movies).

# What you can't do
- You can not change handlebars compiling context on any route.
You need to be able to build and render the views with the data provided.
If you feel that there is some data missing, you can get in touch with us.


