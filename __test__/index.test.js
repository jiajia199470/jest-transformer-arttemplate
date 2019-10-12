const render = require('../example/index');
describe('@mfex/jest-arttemple-transformer test', () => {

    afterEach(()=>{
        if (typeof document == 'object'){
            document.body.innerHTML = '';
        }
    });

    it('测试 index.js index.art被渲染', ()=>{
        expect(document.getElementsByClassName('footer')[0].innerHTML).toBe('footer');
        expect(document.getElementsByClassName('title')[0].innerHTML).toBe('My Page');

    });

    it('测试 index.js 的 render 参数为 {title: “render”}，元素类名为 title 的文本为 render', ()=>{
        const html = render({title: 'render'});
        document.body.innerHTML = html;
        expect(document.getElementsByClassName('title')[0].innerHTML).toBe('render');
    });

    it('测试 header.art 被渲染', ()=>{
        const html = require('../example/header.art');
        const header =  html({ title: '加加'});
        expect(header).toBe('<header><h1 class="title">加加</h1></header>');
    });

});
