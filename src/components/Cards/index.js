"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./card.module.scss");
class CardElement extends HTMLElement {
    constructor() {
        super();
        setTimeout(() => {
            if (this.hasAttribute('action')) {
                this.onClick = this.getAttribute('action');
                this.addEventListener('click', () => this.onClickHandler());
            }
        });
    }
    onClickHandler() {
        eval(this.onClick);
    }
    connectedCallback() {
        setTimeout(() => {
            this.innerHTML = `
        <div class="ui-card__container">
          ${this.innerHTML}
        </div>
        `;
        });
    }
}
customElements.define('ui-card', CardElement);
//# sourceMappingURL=index.js.map