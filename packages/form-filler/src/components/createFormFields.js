import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/esm/Button';
import Preview from './preview';
import FormTypeConfig from './editFields/formTypeConfig';
import FieldTypeConfig from './editFields/fieldTypeConfig';
import { createForm, createField } from '../utils/networkCalls';
import { useNotifyContext } from '../contexts/notify';

const fieldHashTemplate = {
  selector: '',
  value: '',
  type: 'input'
};

export default function CreateFormFields({ formsData, closeModal, refetchFormData }) {

  let [creationType, setCreationType] = useState('form');

  let [newFormData, setNewFormData] = useState(() => {
    return constructFormTemplate()
  });

  let notify = useNotifyContext();


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

  async function createEntity() {
    try {
      let msg = creationType === 'form' ? await createForm(newFormData) : await createField(newFormData);
      notify({ type: 'success', msg});
      refetchFormData();
      closeModal()
    } catch(err) {
      notify({ type: 'danger', msg: err.msg })
    }
  }

  useEffect(() => {
    let data = creationType === 'form' ? constructFormTemplate() : {...fieldHashTemplate, formId: formsData?.[0]._id}
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

  return (
  <>
    <div className='row p-3 modal-body-data overflow-scroll'>
      <div className='col-lg-6 overflow-scroll'>
        <form className='row p-2'>
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

        </form>
      </div>
      
      <div className='col-lg-6 p-0'>
        <Preview data={newFormData} />
      </div>
    </div>
    <hr />
    <div className='d-flex gap-2'>
      <Button variant="secondary" onClick={closeModal}>Close</Button>
      <Button variant="primary" onClick={() => createEntity()}>Create Form</Button>
    </div>
    </>
  )
}
