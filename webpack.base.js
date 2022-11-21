const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const postcssPxToViewport = require('postcss-px-to-viewport');
const smp = new SpeedMeasurePlugin();

const postCssOptions = {
  // Necessary for external CSS imports to work
  // https://github.com/facebook/create-react-app/issues/2677
  ident: 'postcss',
  config: false,
  plugins: [
    postcssPxToViewport({
      viewportWidth: 375, // (Number) The width of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore-'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    }),
  ],
};

const config = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // 关闭类型检查，即只进行转译
              // 类型检查交给 fork-ts-checker-webpack-plugin 在别的的线程中做
              transpileOnly: true,
            },
          },
        ],
        // loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: postCssOptions,
            },
          },
          // 'postcss-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: postCssOptions,
            },
          },
          // 'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: postCssOptions,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash:8][ext][query]',
        },
        // use: 'file-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        // 使用资源模块
        type: 'asset',
        generator: {
          filename: 'imgs/[hash:8][ext][query]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },

        // use it before webpack5
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       // 文件内容的hash,md5生成
        //       name: 'img/[name].[hash:8].[ext]',
        //       limit: 10240,
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/index.html',
    }),
    // css提取
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
    }),
    // 代码体积分析
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    // 控制台信息
    new FriendlyErrorsWebpackPlugin(),

    // fork 一个进程进行ts类型检查 // 项目的规模越大，提速越明显
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@/src': path.resolve(__dirname, 'src'),
      '@/config': path.resolve(__dirname, 'config'),
    },
  },
};

module.exports = config;
