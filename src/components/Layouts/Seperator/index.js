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
class WhitespaceSeperator extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            this.innerHTML = `
      <div class="seperator whitespace">
      </div>
      `;
        });
    }
}
customElements.define('ui-seperator', Seperator);
customElements.define('ui-seperator-whitespace', WhitespaceSeperator);
//# sourceMappingURL=index.js.map