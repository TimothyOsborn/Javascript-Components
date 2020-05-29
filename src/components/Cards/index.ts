import './card.module.scss';

class CardElement extends HTMLElement {
  onClick: string;

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
