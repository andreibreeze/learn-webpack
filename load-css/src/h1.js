export default (text = 'Text generated by h1.js') => {
  const element = document.createElement('h1');

  element.innerHTML = text;

  return element;
};