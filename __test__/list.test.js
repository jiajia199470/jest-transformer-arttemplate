const render = require('../example/list');
describe('测试解析 tpl 文件', () => {

    it(' 测试 列表是否被正常渲染', () => {

        const data = {
            title: '列表',
            list: ['列表项1', '列表项2'],
        }

        const html = render(data);
        document.body.innerHTML = html;
        expect(document.getElementsByClassName('title')[0].innerHTML).toBe('列表');
        expect(document.getElementsByTagName('li').length).toBe(2);
        expect(document.getElementsByClassName('li-1').length).toBe(1);

    })
})