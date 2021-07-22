function BindHoradricHelperHtmlTags(configList) {
  const createTag = ({ reference, type, props }) => {
    const propsString = Object.keys(props).reduce((acc, val) => acc += `${val}="${props[val]}" `, "");

    return `<poe-${type} reference=${reference} ${propsString}></poe-${type}>`
  }

  configList.forEach((config) => {
    const divs = document.querySelectorAll(`div[data-hh-reference='${config.reference}']`);

    [].forEach.call(divs, (div) => {
      div.innerHTML = createTag(config);
    });
  });
};