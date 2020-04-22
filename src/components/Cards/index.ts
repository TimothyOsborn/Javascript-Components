import './card.module.scss';

class CardElement extends HTMLElement {
  onClick: string;
  title: string;
  image: string | object | null;
  content: string;

  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();
    setTimeout(() => {
      this.title = this.getAttribute('title');
      this.onClick = this.getAttribute('action');
      this.addEventListener('click', () => this.onClickHandler());
      this.content = this.getAttribute('content');
      this.image = this.getAttribute('image');
    });
  }

  onClickHandler() {
    eval(this.onClick);
  }

  connectedCallback() {
    setTimeout(() => {
      this.innerHTML = `
        <div class="card">
          <div class="inner button-title">
            ${this.title}
          </div>
        </div>
        `;
    });
  }
}

customElements.define('ui-card', CardElement);
