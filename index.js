class CardOptIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h1>Hello World</h1>';
  }
}

customElements.define('card-icon', CardOptIcon);
