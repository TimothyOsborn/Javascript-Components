"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
require("./index.module.scss");
require("./components/Banner/index");
require("./components/Buttons/index");
require("./components/Layouts/Grid/index");
const homepage = () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <button-custom title='Press Me' action='console.log("pineapple")'>
        Hello button
      </button-custom>
      <br>
      <grid-custom>
        Blah
      </grid-custom>
    `;
    return element;
};
document.body.appendChild(homepage());
//# sourceMappingURL=index.js.map