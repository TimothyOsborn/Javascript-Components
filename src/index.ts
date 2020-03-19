import './index.css';
import './index.module.css';
import './components/Banner/index';
import './components/Buttons/index';

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
