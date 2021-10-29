const domTools = (() => {
  const createElement = (tag, text, ...cls) => {
    const el = document.createElement(tag);
    if (text) el.innerHTML = text;
    if (cls.length !== 0) [...cls].forEach((cl) => el.classList.add(cl));
    return el;
  };

  const appendChildren = (parent, ...children) => {
    [...children].forEach((child) => parent.appendChild(child));
  };

  return {
    createElement,
    appendChildren
  };
})();

export default domTools;
