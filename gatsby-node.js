require('source-map-support').install();
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017',
    },
});

exports.createPages = require('./src/utils/createProjectsPages').createPages;

exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                }
            ],
        },
    })
};

