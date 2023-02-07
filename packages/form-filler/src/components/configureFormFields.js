import React from 'react'

export default function ConfigureFormFields({ form, updateFormData}) {
  return (
    <>
      <div className='row'>
        <label htmlFor={'FormName'} className="col-5">FormName</label>
        <input id={'FormName'} defaultValue={form.name} className="col-7" onInput={(e) => updateFormData('name', e.target.value)} />
      </div>

      <div className='row'>
        <label htmlFor={'FormSelector'} className="col-5">FormSelector</label>
        <input id={'FormSelector'} defaultValue={form.selector} className="col-7"  onInput={(e) => updateFormData('selector', e.target.value)} />
      </div>
      <hr />
      {form?.fields?.map((field, index) => (
        <>
          {field && (
            <>
              <div key={index}>
              <div className='row'>
                <label htmlFor={index} className="col-5">Selector</label>
                <input id={index} defaultValue={field.selector} className="col-7" onInput={(e) => updateFormData('selector', e.target.value, index)} />
              </div>
              <div className='row'>
                <label htmlFor={index} className="col-5">Value</label>
                <input id={index} defaultValue={field.value} className="col-7" onInput={(e) => updateFormData('value', e.target.value, index)} />
              </div>
              <div className='row'>
                <label htmlFor={index} className="col-5">Type</label>
                <select className="col-7" onChange={(e) => updateFormData('type', e.target.value, index)}>
                  {['input', 'select'].map((fieldType, index) => <option key={index}>{fieldType}</option>)}
                </select>
              </div>
              </div>
              <hr />
            </>
          )}
        </>
      ))}
    </>
  )
}
