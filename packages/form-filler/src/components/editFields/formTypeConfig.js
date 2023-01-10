import ConfigureFormFields from '.././configureFormFields';
import { deepClone } from '../../utils/commonMethods';

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
        <button onClick={() => setNewFormData(constructNewField(newFormData))}>Create</button>
        <button onClick={() => setNewFormData(deleteField(newFormData))}>Delete</button>
      </div>
    </>
  )
}

export default FormTypeConfig;