import Component from "another-component-framework";

/**
 * Reusable navigation bar for TXEV
 */
class Navbar extends Component {
    constructor(selector: string) {
        super(
            selector,
            `
            <nav class="navbar border-bottom">
                <a class="navbar-brand"> <h2>TXEV</h2> </a>
                <ul class="nav">
                    <li class="nav-item">
                        <a href="#repositories" class="nav-link">Repositories</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">To Main Site</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">To Gitlab Pages</a>
                    </li>
                </ul>
            </nav>
            `
        );
    }
}

export default Navbar;