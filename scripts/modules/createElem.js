const createElem = (tag, attr) => {
  const element = document.createElement(tag)
  Object.assign(element, attr)
  return element
}

export default createElem