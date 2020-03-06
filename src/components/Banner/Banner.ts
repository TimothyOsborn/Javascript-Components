class BannerElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p>Please do something!</p>';
  }
}

customElements.define('banner-custom', BannerElement);
