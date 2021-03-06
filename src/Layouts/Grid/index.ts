import './index.scss';

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
