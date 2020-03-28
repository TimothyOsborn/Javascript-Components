"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
class FlexGrid extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        setTimeout(() => {
            this.innerHTML = `
        <div class="flex-grid">
          ${this.innerHTML}
        </div>
        `;
        });
    }
}
customElements.define('grid-custom', FlexGrid);
//# sourceMappingURL=index.js.map