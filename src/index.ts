import './index.scss';
import './index.module.scss';
import './components/Banner/index';
import './components/Buttons/index';
import './components/Layouts/Grid/index';

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
