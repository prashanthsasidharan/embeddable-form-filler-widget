const BASE_PATH= '/filler/form';

async function getForms() {
  let res = await fetch(`${BASE_PATH}/`)
  let { data } = await res.json();
  return data;
}

async function editForm(formEditData) {
  try {
    let res = await fetch(`${BASE_PATH}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: decodeURIComponent(JSON.stringify(formEditData))
    });
    let { message } = await res.json();
    return message;
  } catch(err) {
    throw err.message
  }
}

async function createForm(newForm) {
  let res = await fetch(`${BASE_PATH}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: decodeURIComponent(JSON.stringify(newForm))
  });

  let { message } = await res.json();
  return message;
}

async function createField(newForm) {
  let { formId, ...fieldData } = newForm;
  let res = await fetch(`${BASE_PATH}/fields/${formId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: decodeURIComponent(JSON.stringify(fieldData))
  });

  let { message } = await res.json();
  return message;
}


export { getForms, editForm, createForm, createField };