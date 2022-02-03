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

const createFirstForm = (data) => {
  const form = createElem('form', {
    className: 'field',
  })

  const labelTour = createElem('label', {
    className: 'field__label',
    for: 'tour',
    textContent: 'Выбрать тур',
  })

  const select = createElem('select', {
    className: 'field__select',
    id: 'tour',
    name: 'tour',
  })

  const options = data.map(item => createElem('option', {
    value: item.id,
    textContent: item.tour
  }))

  select.append(...options)

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

  form.append(labelTour, select, label, input, button)

  return form
}

const start = (app, title, data) => {
  const h1 = createTitle(title)
  const main = createMain()
  const firstForm = createFirstForm(data)

  main.append(firstForm)
  app.append(h1, main)

  return {
    main, firstForm, h1
  }
}

export default start