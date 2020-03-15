"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
require("./index.module.scss");
require("./components/Banner/index");
require("./components/Buttons/index");
require("./components/Layouts/Grid/index");
require("./components/Layouts/Seperator/index");
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
        <div class="col-12-xs col-6-sm col-4-lg">blah</div>
        <div class="col-12-xs col-6-sm col-4-lg">blah</div>
        <div class="col-12-xs col-6-sm col-4-lg">blah</div>
        <div class="col-12-xs col-6-sm col-4-lg">blah</div>
        <div class="col-12-xs col-6-sm col-4-lg">blah</div>
        <div class="col-12-xs col-6-sm col-4-lg">blah</div>
      </grid-custom>
    `;
    return element;
};
document.body.appendChild(homepage());
//# sourceMappingURL=index.js.map