import React, { useState, useEffect, useRef } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Preview from '../preview';
import Button from 'react-bootstrap/Button';
import { deepClone, areObjectsEqual } from '../../utils/commonMethods';
import ConfigureFormFields from '../configureFormFields';
import { editForm } from '../../utils/networkCalls';
import { useNotifyContext } from '../../contexts/notify';

export default function EditTab({formsData = [], closeModal, refetchFormData}) {
let [previewForm, setPreviewForm] = useState({});

let [formEditData, setFormsEditData] = useState(() => {
  // deep cloned to prevent formsData binding with formEditData as it is getting mutated
  return deepClone(formsData);
});
let activeItemId = useRef(0);

let notify = useNotifyContext();

useEffect(() => {
  setPreviewForm(formEditData[activeItemId.current]);
}, [formEditData])

async function postEditChanges() {
  if (areObjectsEqual(formsData, formEditData)) {
    notify({
      type: 'danger',
      msg: 'No changes made'
    })
    return;
  }
  try {
    let msg = await editForm(formEditData);
    notify({ type: 'success', msg});
    refetchFormData();
    closeModal();
  } catch(err) {
    notify({ type: 'danger', msg: err.msg })
  }
}

function updateFormData(prop, value, fieldId = null) {
  let data = [...formEditData];
  let form = data[activeItemId.current];
  if (fieldId === null) {
    form[prop] = value
  } else {
    form.fields[fieldId][prop] = value;
  }
  setFormsEditData(data);
}

function accordionItemHandler(index, form) {
  activeItemId.current = index;
  setPreviewForm(form)
};

  return (formsData.length ? (
        <>
          <div className='row p-3 modal-body-data overflow-scroll'>
          <div className='col-lg-6 overflow-scroll'>
            <Accordion defaultActiveKey="0">
    
              {formEditData.map((form, index) => (
                <Accordion.Item key={index} eventKey={index}>
                  <Accordion.Header className="bg-secondary" onClick={() => accordionItemHandler(index, form)}>
                      {formsData[index].name}
                  </Accordion.Header>
    
                  <Accordion.Body>
                    <form>
                      <ConfigureFormFields form={form} updateFormData={updateFormData} />
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
    
          </Accordion>  
          </div>
          
          <div className='col-lg-6 p-0'>
            <Preview data={previewForm} />
          </div>
        </div>
        <hr />
        <div className='d-flex gap-2'>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={() => postEditChanges()}>Save changes</Button>
        </div>
        </>
      ) : <p className='d-flex justify-content-center align-items-center p-3 modal-body-data overflow-hidden'>
          No forms are available for editing, so create a new form first
      </p>
  )
}
