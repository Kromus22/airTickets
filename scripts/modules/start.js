import createElem from "./createElem.js"

const createTitle = (title) => {
  const h1 = createElem('h1', {
    className: 'title',
    textContent: title
  })

  return h1
}

const createMain = () => {
  const main = createElem('main', {
    className: 'person-data',
  })

  return main
}

const createFirstForm = () => {
  const form = createElem('form', {
    className: 'field',
  })

  const label = createElem('label', {
    className: 'field__label',
    textContent: 'Укажите количество человек (max: 6)',
  })

  const input = createElem('input', {
    className: 'field__input',
    id: 'count',
    name: 'count',
    type: 'number',
    placeholder: '#',
    min: '1',
    max: '6',
    required: true,
  })

  const button = createElem('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  })

  form.append(label, input, button)

  return form
}

const start = (app, title) => {
  const h1 = createTitle(title)
  const main = createMain()
  const firstForm = createFirstForm()

  main.append(firstForm)
  app.append(h1, main)

  return {
    main, firstForm
  }
}

export default start