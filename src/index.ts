<<<<<<< HEAD
import './index.scss';
import './index.module.scss';
import './components/Banner/index';
import './components/Buttons/index';
import './components/Layouts/Grid/index';
import './components/Layouts/Seperator/index';

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
=======
import * as _ from 'lodash';
import './index.css';
import './index.module.css';

const homepage = () => {
  const element = document.createElement('div');
  element.classList.add('testing-class');
  element.innerHTML = `
    <h1>Using JS Entry Point</h1>
    <h3>${_.join(['Hello', 'World'], ' ')}
>>>>>>> Added initial webpack config and testing
    `;
  return element;
};

document.body.appendChild(homepage());
