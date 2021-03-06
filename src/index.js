"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
require("./index.module.scss");
require("./components/Banner/index");
require("./components/Buttons/index");
require("./components/Cards/index");
require("./components/Images/index");
require("./Layouts/Grid/index");
require("./Layouts/Seperator/index");
require("./components/Typography/index");
const homepage = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'body__background');
    element.innerHTML = `
      <ui-banner>
        <ui-image alt="blah" src="https://wallpaperheart.com/wp-content/uploads/2018/08/abstract-background-hd-11.jpg"></ui-image>
        <ui-typography>
          <h1>Brand Apps Australia</h1>
        </ui-typography>
      </ui-banner>
      <button-custom title='Press Me' action='console.log("pineapple")'>
        Hello button
      </button-custom>
      <ui-seperator></ui-seperator>
      <ui-seperator--whitespace></ui-seperator--whitespace>
      <ui-seperator></ui-seperator>
      <br>
      <grid-custom>
        <div class="col-12-xs col-6-sm col-4-lg">
          <ui-card style="height:100%;">
            <ui-image alt="blah" src="https://cdn4.vectorstock.com/i/1000x1000/54/48/color-triangular-abstract-background-vector-22655448.jpg"></ui-image>
            <ui-typography>
              <h3>Card Heading</h3>
              <p>Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. 
            </ui-typography>
          </ui-card>
        </div>
        <div class="col-12-xs col-6-sm col-4-lg">
          <ui-card>
            <ui-image alt="blah" src="https://cdn.wallpapersafari.com/35/95/MaVqzY.jpg"></ui-image>
            <ui-typography>
              <h3>Card Heading</h3>
              <p>Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. 
            </ui-typography>
          </ui-card>
        </div>
        <div class="col-12-xs col-6-sm col-4-lg"> 
          <ui-card>
            <ui-image alt="blah" src="https://static.vecteezy.com/system/resources/previews/000/101/236/non_2x/free-abstract-background-12-vector.jpg"></ui-image>
            <ui-typography>
                <h3>Card Heading</h3>
                <p>Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. Lorum Ipsom Dolor Sit. 
            </ui-typography>
          </ui-card>
        </div>
      </grid-custom>
`;
    return element;
};
document.body.appendChild(homepage());
//# sourceMappingURL=index.js.map