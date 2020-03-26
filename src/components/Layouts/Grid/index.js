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
        <div class="flex-grid--nonresponsive">
          <div class="col-4">
            <div class="fill">
            </div>
          </div>
          <div class="col-6">
            <div class="fill">
            </div>
          </div>
          <div class="col-12">
            <div class="fill">
            </div>
          </div>
        </div>
        <div class="flex-grid">
          <div class="col-3">
            <div class="fill">
            </div>
          </div>
          <div class="col-3">
            <div class="fill">
            </div>
          </div>
          <div class="col-3">
            <div class="fill">
            </div>
          </div>
        </div>
        `;
        });
    }
}
customElements.define('grid-custom', FlexGrid);
//# sourceMappingURL=index.js.map