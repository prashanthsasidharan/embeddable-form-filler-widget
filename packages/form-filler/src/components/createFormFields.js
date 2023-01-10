import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/esm/Button';
import Preview from './preview';
import FormTypeConfig from './editFields/formTypeConfig';
import FieldTypeConfig from './editFields/fieldTypeConfig';


const fieldHashTemplate = {
  selector: '',
  value: '',
  type: 'input'
};

export default function CreateFormFields({ formsData }) {

  let [creationType, setCreationType] = useState('form');

  let [newFormData, setNewFormData] = useState(() => {
    return constructFormTemplate()
  });

  function constructFormTemplate() {
    return constructNewField({
      name: '',
      selector: '',
      fields : []
    })
  }

  function constructNewField(form) {
    form.fields.push(fieldHashTemplate)
    return {...form};
  }

  useEffect(() => {
    let data = creationType === 'form' ? constructFormTemplate() : {...fieldHashTemplate}
    setNewFormData(data)
  }, [creationType])

  function updateFieldTypeData({prop, value, resetData = false}) {
    if (resetData) {
      setNewFormData(fieldHashTemplate);
      return;
    }
    let data = {...newFormData};
    data[prop] = value;
    setNewFormData(data)
  }


  function postNewForm() {
    fetch('/filler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFormData)
    })
  }

  return (
  <>
    <div className='row p-3 modal-height overflow-hidden'>
      <div className='col-6 overflow-scroll' style={{height: 'inherit'}}>
        <div className='row p-2'>
          <label className="col-6">Create Mode</label>
          <select className="col-6" onChange={(e) => setCreationType(e.target.value)}>
            {['form', 'field'].map((fieldType) => <option>{fieldType}</option>)}
          </select>

          <div className='my-4'>
            {
              creationType === 'form' ? 
              <FormTypeConfig newFormData={newFormData} constructNewField={constructNewField} setNewFormData={setNewFormData} /> : 
              <FieldTypeConfig newFieldData={newFormData} formsData={formsData} updateFieldTypeData={updateFieldTypeData} />
            }
          </div>

        </div>
      </div>
      
      <div className='col-6' style={{height: 'inherit'}}>
        <Preview data={newFormData} />
      </div>
    </div>
    <hr />
    <div className='d-flex gap-2'>
      <Button variant="secondary">Close</Button>
      <Button variant="primary" onClick={() => postNewForm()}>Save changes</Button>
    </div>
    </>
  )
}
