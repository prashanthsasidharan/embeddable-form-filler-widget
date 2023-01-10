const BASE_URL = 'https://embeddable-form-filler.up.railway.app/filler/form';

async function getForms() {
  let res = await fetch(`${BASE_URL}/`)
  let { data } = await res.json();
  return data;
}

async function editForm(formEditData) {
  let res = await fetch(`${BASE_URL}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formEditData)
  });

  let { data } = await res.json();
}

async function createForm(newForm) {
  let res = await fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newForm)
  });

  let { data } = await res.json();
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

  let { data } = await res.json();
}


export { getForms, editForm, createForm, createField };