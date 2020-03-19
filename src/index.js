"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
require("./index.module.css");
require("./components/Banner/index");
require("./components/Buttons/index");
const homepage = () => {
    const element = document.createElement('div');
    element.classList.add('testing-class');
    element.innerHTML = `
      <button-custom title='Press Me' action='console.log("pineapple")'>
        Hello button
      </button-custom>
    `;
    return element;
};
document.body.appendChild(homepage());
//# sourceMappingURL=index.js.map