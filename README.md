[![build status](http://std.mama.cn/mfex/jest-transformer-arttemplate/badges/master/build.svg)](http://std.mama.cn/mfex/jest-transformer-arttemplate/commits/master)[![coverage report](http://std.mama.cn/mfex/jest-transformer-arttemplate/badges/master/coverage.svg)](http://std.mama.cn/mfex/jest-transformer-arttemplate/commits/master)

# jest-transformer-arttemplate

Jest doesn't handle non JavaScript assets by default.

You can use this module to avoid errors when importing 'art-template' file assets;

使 jest 支持解析 artTemplate 文件,可将模板转换成为 js 

## Usage

一、安装

```shell
npm install --save-dev @mfex/jest-transformer-arttemplate
```

二、配置
In your Jest config, add jest-transformer-arttemplate to transform 'art-template' file assets:
在 jest.config.js 中添加以下配置：

1、支持解析 art 文件
```js
module.exports = {
  // ..
  moduleFileExtensions: [
    'js',
    'art'
  ], // 需要解析的文件类型
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.art$': '@mfex/jest-transformer-arttemplate',
  } // 解析文件对应使用的转换工具。
}

```

2、同时支持多个文件类型模版（如 .html 或 .tpl ）, 需要在同时在 moduleFileExtensions: 与 transform  增加多一个文件类型 
```js
module.exports = {
  // ..
  moduleFileExtensions: [
    'js',
    'art',
    'html',
    'tpl'
  ], // 需要解析的文件类型
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(art|html|tpl)$': '@mfex/jest-transformer-arttemplate',
  } // 解析文件对应使用的转换工具。
}

```

## 测试和语法检测
```bash
npm run test
```
