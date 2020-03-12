"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const homepage = () => {
    const element = document.createElement('div');
    element.innerHTML = `
    <h1>Using JS Entry Point</h1>
    <h3>${_.join(['Hello', 'World'], ' ')}
    `;
    return element;
};
document.body.appendChild(homepage());
//# sourceMappingURL=index.js.map