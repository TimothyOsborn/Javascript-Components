import './buttons.module.css';

class ButtonElement extends HTMLElement {
  onClick: string;
  title: string;
  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();
    setTimeout(() => {
      this.title = this.getAttribute('title');
      this.onClick = this.getAttribute('action');
      this.addEventListener('click', () => this.onClickHandler());
    });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
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
