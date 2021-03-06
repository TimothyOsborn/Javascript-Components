"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./banner.module.scss");
class BannerElement extends HTMLElement {
    connectedCallback() {
        this.classList.add('ui-banner__container');
        setTimeout(() => (this.innerHTML = `
        <div class="ui-banner__container">
          ${this.innerHTML}
        </div>
        `));
    }
}
customElements.define('ui-banner', BannerElement);
//# sourceMappingURL=index.js.map