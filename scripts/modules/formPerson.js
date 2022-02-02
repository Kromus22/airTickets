import createElem from "./createElem.js"

const createFormPerson = (n) => {
  const form = createElem('form', {
    className: 'person',
  })

  const title = createElem('h2', {
    className: 'person__title',
    textContent: `Пассажир #${n + 1}`,
  })

  const fieldName = createElem('div', {
    className: 'field',
  })

  const labelName = createElem('label', {
    className: 'field__label',
    for: `name${n}`,
    textContent: 'ФИО',
  })

  const inputName = createElem('input', {
    className: 'field__input',
    id: `name${n}`,
    name: 'name',
    type: 'text',
    placeholder: 'Введите Ваше ФИО',
    required: true,
  })

  fieldName.append(labelName, inputName)

  const fieldTicket = createElem('div', {
    className: 'field',
  })

  const labelTicket = createElem('label', {
    className: 'field__label',
    for: `ticket${n}`,
    textContent: 'Номер билета (10 цифр)',
  })

  const inputTicket = createElem('input', {
    className: 'field__input',
    id: `ticket${n}`,
    name: 'ticket',
    type: 'text',
    placeholder: 'Номер билета',
    minLength: 10,
    maxLength: 10,
    required: true,
  })

  fieldTicket.append(labelTicket, inputTicket)

  const button = createElem('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  })

  form.append(title, fieldName, fieldTicket, button)

  return form
}

const getFormPerson = (count) => {
  const forms = []
  if (count > 6) count = 6
  for (let i = 0; i < count; i++) {
    forms.push(createFormPerson(i))
  }
  return forms
}

export default getFormPerson