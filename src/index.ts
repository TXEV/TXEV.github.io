import "./index.scss";

import { Navbar, RepositoriesList } from "./ts/ACFComponents";

/**
 * Website's entry point
 */
const main = (): void => {
    console.log("Hello World");
    render();
}

const render = (): void => {
    new Navbar("#navbar");
    new RepositoriesList("#repositories");
}

main();
