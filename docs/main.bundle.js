(()=>{"use strict";const s=class{constructor(s,t){this.selector=s,this.html=t,this.build()}getHtml(){return this.html}setHtml(s){this.html=s}getSelector(){return this.selector}setSelector(s){this.selector=s}rebuild(){this.build()}build(){let s=document.querySelectorAll(this.selector);for(let t=0;t<s.length;t++)s[t].innerHTML=this.html}};const t=class extends s{constructor(s){super(s,'\n            <nav class="navbar border-bottom">\n                <a class="navbar-brand"> <h2>TXEV</h2> </a>\n                <ul class="nav">\n                    <li class="nav-item">\n                        <a href="#repositories" class="nav-link">Repositories</a>\n                    </li>\n                    <li class="nav-item">\n                        <a href="#" class="nav-link">To Main Site</a>\n                    </li>\n                    <li class="nav-item">\n                        <a href="#" class="nav-link">To Gitlab Pages</a>\n                    </li>\n                </ul>\n            </nav>\n            ')}};const e=class extends s{constructor(s){super(s,'\n            <h1>Github Repository Pages</h1>\n            <div class="list-group">\n                <a href="/txev-components" \n                    class="list-group-item list-group-item-action disabled">\n                    TXEV/og-bot\n                </a>\n                <a href="/txev-components" \n                    class="list-group-item list-group-item-action disabled">\n                    TXEV/txev-components\n                </a>\n                <a href="/txev-components-svelte" \n                    class="list-group-item list-group-item-action disabled">\n                    TXEV/txev-components-svelte\n                </a>\n            </div>\n            ')}},n=()=>{new t("#navbar"),new e("#repositories")};console.log("Hello World"),n()})();