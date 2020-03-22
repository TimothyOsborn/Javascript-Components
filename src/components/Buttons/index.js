"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./buttons.module.css");
class ButtonElement extends HTMLElement {
    constructor() {
        super();
        setTimeout(() => {
            this.title = this.getAttribute('title');
            this.onClick = this.getAttribute('action');
            this.addEventListener('click', () => this.onClickHandler());
        });
    }
    static get observedAttributes() {
        return ['title'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title' && oldValue !== null && oldValue !== newValue) {
            this.connectedCallback();
        }
    }
    onClickHandler() {
        eval(this.onClick);
    }
    connectedCallback() {
        setTimeout(() => {
            this.innerHTML = `
        <div class="container-button">
          <div class="inner button-title">
            ${this.title}
          </div>
        </div>
        `;
        });
    }
}
customElements.define('button-custom', ButtonElement);
//# sourceMappingURL=index.js.map