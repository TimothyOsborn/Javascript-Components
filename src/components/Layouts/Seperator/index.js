"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.module.scss");
class Seperator extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            this.innerHTML = `
        <div class="seperator">
        </div>
        `;
        });
    }
}
customElements.define('ui-seperator', Seperator);
//# sourceMappingURL=index.js.map