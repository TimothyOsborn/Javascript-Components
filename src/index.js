"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
require("./index.module.scss");
require("./components/Banner/index");
require("./components/Buttons/index");
require("./components/Layouts/Grid/index");
require("./components/Layouts/Seperator/index");
require("./components/Images/index");
require("./components/Typography/index");
const homepage = () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <button-custom title='Press Me' action='console.log("pineapple")'>
        Hello button
      </button-custom>
      <ui-seperator></ui-seperator>
      <ui-seperator-whitespace></ui-seperator-whitespace>
      <ui-seperator></ui-seperator>
      <br>
      <grid-custom>
        <div class="col-12-xs col-6-sm col-4-lg"><ui-image alt="blah" src="https://vignette.wikia.nocookie.net/mahousenseinegima/images/1/1a/Card_nodoka.jpg"></ui-images></div>
        <div class="col-12-xs col-6-sm col-4-lg"><ui-image alt="blah" src="https://vignette.wikia.nocookie.net/mahousenseinegima/images/1/1a/Card_nodoka.jpg"></ui-images></div>
        <div class="col-12-xs col-6-sm col-4-lg"><ui-image alt="blah" src="https://vignette.wikia.nocookie.net/mahousenseinegima/images/1/1a/Card_nodoka.jpg"></ui-images></div>
      </grid-custom>
      <ui-typography>
        <p>P style, The quick brown fox jumps over the lazy dog.</p>
        <div><p>P style, The quick brown fox jumps over the lazy dog.</p></div>
      </ui-typography>
    `;
    return element;
};
document.body.appendChild(homepage());
//# sourceMappingURL=index.js.map