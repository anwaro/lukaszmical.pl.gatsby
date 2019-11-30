module.exports = {
    siteMetadata: {
        title: 'lukaszmical.pl',
        description: 'Welcome to lukaszmical.pl - Łukasz Micał - personal page',
        author: '@LukaszMical',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-ts',
            options: {
                tsLoader: {
                    logLevel: 'warn',
                },
                forkTsCheckerPlugin: {
                    eslint: true,
                },
                fileName: 'types/graphql-types.ts',
                codegen: true,
                codegenDelay: 250,
                alwaysCheck: false,
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
    ],
};
