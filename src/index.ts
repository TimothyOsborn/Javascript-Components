import * as _ from 'lodash';
import './index.css';
import './index.module.css';
import './components/Banner/index';

const homepage = () => {
  const element = document.createElement('div');
  element.classList.add('testing-class');
  element.innerHTML = `
    <div class="container">
      <h1>Using JS Entry Point</h1>
        <h3>${_.join(['Hello', 'World'], ' ')}
    </div>
    <banner-custom cat='cat attribute' dog>
      Hello Banner Custom
    </banner-custom>
    `;
  return element;
};

document.body.appendChild(homepage());
