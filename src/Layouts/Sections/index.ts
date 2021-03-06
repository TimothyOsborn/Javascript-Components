import './index.module.scss';

class Section extends HTMLElement {
  connectedCallback() {
    setTimeout(() => {
      this.innerHTML = `
        <div class="section">
          ${this.innerHTML}
        </div>
        `;
    });
  }
}

customElements.define('ui-section', Section);
