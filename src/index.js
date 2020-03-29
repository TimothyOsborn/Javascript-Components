"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
require("./index.scss");
require("./index.module.scss");
require("./components/Banner/index");
require("./components/Buttons/index");
require("./components/Layouts/Grid/index");
<<<<<<< HEAD
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
=======
require("./components/Layouts/Seperator/index");
>>>>>>> adjusted button styles to be more subtle, added margin to separator. TODO add style guide and git commit message structure
const homepage = () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <button-custom title='Press Me' action='console.log("pineapple")'>
        Hello button
      </button-custom>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <ui-seperator></ui-seperator>
      <ui-seperator-whitespace></ui-seperator-whitespace>
=======
>>>>>>> adjusted button styles to be more subtle, added margin to separator. TODO add style guide and git commit message structure
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