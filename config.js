module.exports = {
    port: 3000, // Port where HTTP Server will run
    paths: { // Contains the relative paths to website files
        website: './public/example.website', // Website base path
        static: './public/example.website/static', // Static files path
        partials: './public/example.website/templates', // Partial paths
    },
};