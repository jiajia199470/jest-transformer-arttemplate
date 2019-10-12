'use strict';
// 用于解析 jest 下的 .art art-template文件,讲模版转成 js 片段
const template = require('art-template');
const precompile = require('art-template/lib/precompile.js');

module.exports = (content, filename, jestConfig)=>{
    let code = 'module.exports = function ($data) {};';
    let options = {
        sourceRoot: process.cwd(),
        filename: filename, // art 模版文件路径
        rules: []
    }
    options.rules.push(...template.defaults.rules);

    const result = precompile(options);

    code = result.toString();

    return {
        code: code
    }
};