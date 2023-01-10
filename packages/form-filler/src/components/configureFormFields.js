import React from 'react'

export default function ConfigureFormFields({ form, updateFormData}) {
  return (
    <fieldset>
      <div className='row'>
        <label htmlFor={'FormName'} className="col-6">FormName</label>
        <input id={'FormName'} defaultValue={form.name} className="col-6" onInput={(e) => updateFormData('name', e.target.value)} />
      </div>

      <div className='row'>
        <label htmlFor={'FormSelector'} className="col-6">FormSelector</label>
        <input id={'FormSelector'} defaultValue={form.selector} className="col-6"  onInput={(e) => updateFormData('selector', e.target.value)} />
      </div>
      <hr />
      {form?.fields?.map((field, index) => (
        <div key={index}>
          <div className='row'>
            <label htmlFor={index} className="col-6">Selector</label>
            <input id={index} defaultValue={field.selector} className="col-6" onInput={(e) => updateFormData('selector', e.target.value, index)} />
          </div>
          <div className='row'>
            <label htmlFor={index} className="col-6">Value</label>
            <input id={index} defaultValue={field.value} className="col-6" onInput={(e) => updateFormData('value', e.target.value, index)} />
          </div>
          <div className='row'>
            <label htmlFor={index} className="col-6">Type</label>
            <select className="col-6" onChange={(e) => updateFormData('type', e.target.value, index)}>
              {['input', 'select'].map((fieldType) => <option>{fieldType}</option>)}
            </select>
          </div>
            <hr />
        </div>
      ))}
    </fieldset>
  )
}
