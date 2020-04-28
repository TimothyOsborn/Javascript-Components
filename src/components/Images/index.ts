import './image.module.scss';

class ImageElement extends HTMLImageElement {
  alt: string;
  src: string;
  classes: string;
  arias: string;

  constructor() {
    super();
    setTimeout(() => {
      this.alt = this.getAttribute('alt');
      this.src = this.getAttribute('src');
      this.classes = this.getAttribute('classes');
      this.arias = this.getAttribute('arias');
    });
  }

  connectedCallback() {
    setTimeout(() => {
      this.innerHTML = `
        <div class="ui-image__container ${
          this.classes !== null ? this.classes : ''
        }">
          <img src="${this.src}" alt="${this.alt}" ${this.arias}/>
        </div>
        `;
    });
  }
}

customElements.define('ui-image', ImageElement);
