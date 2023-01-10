const BASE_URL = 'http://localhost:3000/filler/form';


async function getForms() {
  let res = await fetch(`${BASE_URL}/`)
  let { data } = await res.json();
  return data;
}

async function editForm(formEditData) {
  try {
    let res = await fetch(`${BASE_URL}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formEditData)
    });
    let { message } = await res.json();
    return message;
  } catch(err) {
    throw err.message
  }
}

async function createForm(newForm) {
  let res = await fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newForm)
  });

  let { message } = await res.json();
  return message;
}

async function createField(newForm) {
  let { formId, ...fieldData } = newForm;
  let res = await fetch(`${BASE_URL}/fields/${formId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fieldData)
  });

  let { message } = await res.json();
  return message;
}


export { getForms, editForm, createForm, createField };