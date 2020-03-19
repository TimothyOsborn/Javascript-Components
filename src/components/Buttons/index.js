"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
require("./buttons.module.scss");
=======
require("./buttons.module.css");
>>>>>>> Working on Button Component, will start branching for next component
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