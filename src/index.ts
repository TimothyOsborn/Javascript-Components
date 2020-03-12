import * as _ from 'lodash';

const homepage = () => {
  const element = document.createElement('div');
  element.innerHTML = `
    <h1>Using JS Entry Point</h1>
    <h3>${_.join(['Hello', 'World'], ' ')}
    `;
  return element;
};

document.body.appendChild(homepage());
