import Component from "another-component-framework";

class RepositoriesList extends Component {
    constructor(selector: string) {
        super(
            selector,
            `
            <h1>Github Repository Pages</h1>
            <div class="list-group">
                <a href="/txev-components" 
                    class="list-group-item list-group-item-action disabled">
                    TXEV/og-bot
                </a>
                <a href="/txev-components" 
                    class="list-group-item list-group-item-action disabled">
                    TXEV/txev-components
                </a>
                <a href="/txev-components-svelte" 
                    class="list-group-item list-group-item-action disabled">
                    TXEV/txev-components-svelte
                </a>
            </div>
            `
        );
    }
}

export default RepositoriesList;