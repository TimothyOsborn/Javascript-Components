"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./typography.module.scss");
class TypographyElement extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            this.innerHTML = `
        <div class="ui-typography__container">
          ${this.innerHTML}
        </div>
        `;
        });
    }
}
customElements.define('ui-typography', TypographyElement);
//# sourceMappingURL=index.js.map