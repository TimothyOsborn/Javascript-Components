const CardWithIcon = () => {
  return `<h1>Hello World</h1>`;
};

CardWithIcon.refs = {};

document.addEventListener("DOMContentLoaded", () => {
  new CardWithIcon(document.getElementById("CardWithIcon"));
});
