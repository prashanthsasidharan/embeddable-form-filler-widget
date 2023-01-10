import React, { useState, useEffect, useRef } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Preview from './preview';
import Button from 'react-bootstrap/Button';
import { deepClone, areObjectsEqual } from '../utils/commonMethods';
import ConfigureFormFields from './configureFormFields';

export default function ConfigureJSONAccordion({formsData = []}) {

let [previewForm, setPreviewForm] = useState({});

let [formEditData, setFormsEditData] = useState(() => {
  // deep cloned to prevent formsData binding with formEditData as it is getting mutated
  return deepClone(formsData);
});
let activeItemId = useRef(0);

useEffect(() => {
  setPreviewForm(formEditData[activeItemId.current]);
}, [formEditData])

async function postFormChanges() {
  console.log(formsData, formEditData, areObjectsEqual(formsData, formEditData));
  if (areObjectsEqual(formsData, formEditData)) {
    return;
  }

  let res = await fetch('/filler', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formEditData)
  });

  let {data} = await res.json();

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

  return (
    <>
    <div className='row p-3 modal-height overflow-hidden'>
      <div className='col-6 overflow-scroll' style={{height: 'inherit'}}>
        <Accordion defaultActiveKey="0">

          {formEditData.map((form, index) => (
            <Accordion.Item key={index} eventKey={index}>
              <Accordion.Header className="bg-secondary" onClick={() => {activeItemId.current = index; setPreviewForm(form)}}>
                  {formsData[index].name}
              </Accordion.Header>

              <Accordion.Body>
                <ConfigureFormFields form={form} updateFormData={updateFormData} />
              </Accordion.Body>
            </Accordion.Item>
          ))}

      </Accordion>  
      </div>
      
      <div className='col-6' style={{height: 'inherit'}}>
        <Preview data={previewForm} />
      </div>
    </div>
    <hr />
    <div className='d-flex gap-2'>
      <Button variant="secondary">Close</Button>
      <Button variant="primary" onClick={() => postFormChanges()}>Save changes</Button>
    </div>
    </>
  )
}
