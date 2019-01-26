const chalk = require('chalk');

const buildTip = (env_name) => {
  if (env_name === 'test') {
    console.log(chalk.blue('\n>>>>>  您正在进行单元测试，具体信息如下：\n'));
  } else {
    console.log(chalk.blue('\n>>>>>  您正在运行/打包【' + chalk.bold.magenta(env_name) + '】应用，具体配置信息如下：\n'));
    console.log(chalk.yellow(chalk.bold.magenta('当前环境变量：') + process.env.NODE_ENV));
    console.log(chalk.yellow(chalk.bold.magenta('当前应用版本：') + process.env.VUE_APP_ENV));
    console.log(chalk.blue(''));
  }
}

switch (process.env.VUE_APP_ENV) {
  case 'development':
    buildTip('测试版');
    break;
  case 'staging':
    buildTip('预发布版');
    break;
  case 'production':
    buildTip('正式版');
    break;
  default:
    buildTip('test');
    break;
}

module.exports = {
  //基本路径
  publicPath: process.env.BASE_URL,
  //生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  lintOnSave: false,
  // webpack配置
  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
};