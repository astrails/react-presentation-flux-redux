
import webpack            from 'webpack';
import path               from 'path';
import htmlWebpackPlugin  from 'html-webpack-plugin';
import webpackMerge       from 'webpack-merge';
import autoprefixer       from 'autoprefixer';

const ROOT_PATH           = path.resolve(__dirname);
const APP_PATH            = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH          = path.resolve(ROOT_PATH, 'dist');
const TEST_PATH           = path.resolve(ROOT_PATH, 'test');

const TARGET = process.env.npm_lifecycle_event;


const APP_CONFIG = {
  entry: path.resolve(APP_PATH, 'index.js'),
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  }
};

process.env.BABEL_ENV = TARGET;

let config;

const COMMON = {
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel!eslint',
      include: APP_PATH,
    }, {
      test: /\.css$/,
      loader: 'style!css',
      include: path.resolve(ROOT_PATH, 'node_modules', 'normalize.css')
    }, {
      test: /\.(sass|scss)$/,
      loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap&outputStyle=expanded&indentedSyntax'
    }]
  },
  eslint: {
    configFile: path.resolve(ROOT_PATH, '.eslintrc'),
    emitError: false
  },
  postcss: () => { return [autoprefixer]; },
  resolve: {
    extensions: ['', '.js', '.jsx', 'sass'],
    modulesDirectories: ["node_modules"],
    alias: {
      components: path.resolve(APP_PATH, 'components'),
      containers: path.resolve(APP_PATH, 'containers'),
      api:        path.resolve(APP_PATH, 'api'),
      reduxx:     path.resolve(APP_PATH, 'reduxx'),
      constants:  path.resolve(APP_PATH, 'constants'),
      config:     path.resolve(APP_PATH, 'config'),
    }
  }
};

const DEV_SERVER = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallbacks: true,
    hot: true,
    port: 8000,
    inline: true,
    progress: true
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "App"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};

const PROD_BUILD = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
};

if (TARGET === 'start' || !TARGET) {
  config = webpackMerge({...APP_CONFIG, ...COMMON}, DEV_SERVER);
} else if(TARGET === 'test') {
  // TODO
} else if (TARGET === 'build') {
  config = webpackMerge({...APP_CONFIG, ...COMMON}, PROD_BUILD);
}

export default config;
