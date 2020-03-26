"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
require("./index.scss");
require("./index.module.scss");
require("./components/Banner/index");
require("./components/Buttons/index");
require("./components/Layouts/Grid/index");
<<<<<<< HEAD
require("./components/Layouts/Seperator/index");
=======
require("./index.css");
require("./index.module.css");
require("./components/Banner/index");
require("./components/Buttons/index");
>>>>>>> Working on Button Component, will start branching for next component
=======
>>>>>>> Added a little nonresponsive css to layout
const homepage = () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <button-custom title='Press Me' action='console.log("pineapple")'>
        Hello button
      </button-custom>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> Working on Button Component, will start branching for next component
=======
      <br>
      <grid-custom>
        Blah
      </grid-custom>
>>>>>>> Added a little nonresponsive css to layout
    `;
    return element;
};
document.body.appendChild(homepage());
//# sourceMappingURL=index.js.map