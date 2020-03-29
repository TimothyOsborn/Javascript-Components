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
      <br>
      <grid-custom>
        <div class="col-12-xs col-6-sm col-4-lg">blah</div>
      </grid-custom>
    `;
  return element;
};

document.body.appendChild(homepage());
