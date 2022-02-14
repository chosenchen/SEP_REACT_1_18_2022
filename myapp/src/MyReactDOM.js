import React from "react";

const render = (currentEle, parentEle) => {
  // console.log(currentEle, parentEle);
  const generatedEle = document.createElement(currentEle.type);

  if (currentEle.type.prototype instanceof React.Component) {
    render(new currentEle.type().render(), parentEle);
  }

  Object.keys(currentEle.props).forEach((key) => {
    if (key === "style") {
      Object.keys(currentEle.props[key]).forEach((styleProp) => {
        generatedEle.style[styleProp] = currentEle.props[key][styleProp];
      });
    } else if (key === "className") {
      generatedEle.classList.add(currentEle.props[key]);
    } else if (key.startsWith("on")) {
      generatedEle.addEventListener(
        key.substring(2).toLocaleLowerCase(),
        currentEle.props[key]
      );
    } else if (key === "children") {
      const curChildren = currentEle.props[key];

      if (typeof curChildren === "string") {
        const textNode = document.createTextNode(curChildren);
        generatedEle.appendChild(textNode);
      } else if (Array.isArray(curChildren)) {
        curChildren.forEach((child) => {
          render(child, generatedEle);
        });
      } else {
        render(curChildren, generatedEle);
      }
    } else {
      generatedEle.setAttribute("id", currentEle.props[key]);
    }
  });

  parentEle.appendChild(generatedEle);
};

const MyReactDOM = {
  render,
};

export default MyReactDOM;
