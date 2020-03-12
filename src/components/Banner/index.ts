class BannerElement extends HTMLElement {
  initialHTML: string;
  initialText: string;

  constructor() {
    super();
    setTimeout(() => {
      this.initialHTML = this.innerHTML;
      this.initialText = this.innerText;
    });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log('in attributechangedcallback', name, oldValue, newValue);
    if (name === 'cat' && oldValue !== null && oldValue !== newValue) {
      console.log('checking before clearing', this.innerHTML, this.innerText);
      this.innerHTML = '';
      this.connectedCallback();
      console.log('checking after clearing', this.innerHTML, this.innerText);
    }
  }

  connectedCallback() {
    setTimeout(
      () =>
        (this.innerHTML = `
<<<<<<< HEAD
        <div class="container">
          <h3>${this.getAttribute('cat')}</h3>
          <h2>${this.initialText}</h2>
          <h1>${this.initialHTML}</h1>
          <h4>${this.hasAttribute('dog') ? 'pineapple' : 'pizza'}</h4>
=======
        <div>
          <h3>${this.getAttribute('cat')}</h3>
          <h2>${this.initialText}</h2>
          <h1>${this.initialHTML}</h1>
>>>>>>> added sample test html against banner component
        </div>
        `),
    );
  }
}

customElements.define('banner-custom', BannerElement);
