import ConfigureFormFields from '.././configureFormFields';
import { deepClone } from '../../utils/commonMethods';
import Button from 'react-bootstrap/esm/Button';

function FormTypeConfig({ newFormData, setNewFormData, constructNewField }) {


  function updateFormData(prop, value, fieldId = null) {
    let data = deepClone(newFormData);
    if (fieldId === null) {
      data[prop] = value
    } else {
      data.fields[fieldId][prop] = value;
    }
    setNewFormData(data);
  }

  function deleteField(form) {
    form.fields.pop();
    return {...form, fields: form.fields};
  }

  return (
    <>
      <ConfigureFormFields updateFormData={updateFormData} form={newFormData} />
      <div className='d-flex justify-content-center gap-2'>
        <Button variant="secondary" onClick={() => setNewFormData(constructNewField(newFormData))}>Create</Button>
        <Button variant="danger" onClick={() => setNewFormData(deleteField(newFormData))}>Delete</Button>
      </div>
    </>
  )
}

export default FormTypeConfig;