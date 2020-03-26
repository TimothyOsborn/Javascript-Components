import './index.scss';

class FlexGrid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    setTimeout(() => {
      this.innerHTML = `
        <div class="flex-grid">
<<<<<<< HEAD
          ${this.innerHTML}
=======
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="fill">
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="fill">
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="fill">
            </div>
          </div>
>>>>>>> Added a little nonresponsive css to layout
        </div>
        `;
    });
  }
}

customElements.define('grid-custom', FlexGrid);
