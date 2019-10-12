<h1 class="title">{{title}}</h1>

<ul class="list">

    {{each list value i}}

        <li {{ if i==0}} class="li-1"{{/if}}>索引 {{i + 1}} ：{{value}}</li>

    {{/each}}

</ul>