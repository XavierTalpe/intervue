module.exports = {

    // Build configuration
    build: {
    },

    // Run in single page application mode so that it
    // can be rendered as a static website via nginx.
    mode: 'spa',

    plugins: [
        {src: '~/plugins/vuetify.all.js'}
    ],

    css: [
        '~/node_modules/vuetify/dist/vuetify.min.css',
        '~/assets/material-design-icons/material-icons.css',
    ],

    serverMiddleware: [],

    // Customize the progress bar color
    loading: {color: '#3650e8'},
};
