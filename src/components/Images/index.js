"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./image.module.scss");
class ImageElement extends HTMLElement {
    constructor() {
        super();
        setTimeout(() => {
            this.alt = this.getAttribute('alt');
            this.src = this.getAttribute('src');
            this.classes = this.getAttribute('classes');
            this.arias = this.getAttribute('arias');
        });
    }
    connectedCallback() {
        setTimeout(() => {
            this.innerHTML = `
        <div class="container-image ${this.classes !== null ? this.classes : ''}">
          <img src="${this.src}" alt="${this.alt}" ${this.arias}/>
        </div>
        `;
        });
    }
}
customElements.define('ui-image', ImageElement);
//# sourceMappingURL=index.js.map