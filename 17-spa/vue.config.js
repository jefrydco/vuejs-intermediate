const path = require('path');

module.exports = {
  runtimeCompiler: true,
  transpileDependencies: ["@inkline/inkline"],
  pluginOptions: {
    'style-resources-loader': {
        'preProcessor': 'scss',
        'patterns': [
            path.resolve(__dirname, 'src/css/inkline/config/index.scss'),
            path.resolve(__dirname, 'src/assets/variables.scss'),
        ]
    }
}
}
