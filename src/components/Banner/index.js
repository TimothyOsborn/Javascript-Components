class BannerElement extends HTMLElement {
    connectedCallback() {
        setTimeout(() => (this.innerHTML = `
        <div>
          <h2>${this.innerText}</h2>
          <h1>${this.innerHTML}</h1>
        </div>
        `));
    }
}
customElements.define('banner-custom', BannerElement);
//# sourceMappingURL=index.js.map