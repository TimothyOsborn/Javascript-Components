class BannerElement extends HTMLElement {
    constructor() {
        super();
        setTimeout(() => {
            this.initialHTML = this.innerHTML;
            this.initialText = this.innerText;
        });
    }
    static get observedAttributes() {
        return ['cat'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('in attributechangedcallback', name, oldValue, newValue);
        if (name === 'cat' && oldValue !== null && oldValue !== newValue) {
            console.log('checking before clearing', this.innerHTML, this.innerText);
            this.innerHTML = '';
            this.connectedCallback();
            console.log('checking after clearing', this.innerHTML, this.innerText);
        }
    }
    connectedCallback() {
        setTimeout(() => (this.innerHTML = `
        <div class="container">
          <h3>${this.getAttribute('cat')}</h3>
          <h2>${this.initialText}</h2>
          <h1>${this.initialHTML}</h1>
        </div>
        `));
    }
}
customElements.define('banner-custom', BannerElement);
//# sourceMappingURL=index.js.map