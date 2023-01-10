import { useEffect, useState } from "react";

function FieldTypeConfig({ newFieldData, formsData, updateFieldTypeData }) {
  let formNames = formsData.map((form) => form.name) || [];
  let [selectedForm, setSelectedForm] = useState(formNames?.[0]);

  useEffect(() => {
    updateFieldTypeData({resetData: true})
  }, [selectedForm])

  return (
    <>
      {formNames.length ? (
        <>
          <div className='row'>
            <label className="col-6">Select form</label>
            <select className="col-6" onChange={(e) => setSelectedForm(e.target.selectedIndex)}>
              {formNames.map((name, index) => {
                return <option key={index}>{name}</option>
              })}
            </select>
          </div>

          <div className="mt-4">
            <div className='row'>
              <label htmlFor="selector" className="col-6">Selector</label>
              <input id="selector" value={newFieldData.selector} className="col-6" onInput={(e) => updateFieldTypeData({prop: 'selector', value: e.target.value})} />
            </div>
            <div className='row'>
              <label htmlFor="value" className="col-6">Value</label>
              <input id="value" value={newFieldData.value} className="col-6" onInput={(e) => updateFieldTypeData({prop: 'value', value: e.target.value})} />
            </div>
            <div className='row'>
              <label className="col-6">Type</label>
              <select className="col-6" selected={newFieldData.type} onChange={(e) => updateFieldTypeData({prop: 'type', value: e.target.value})}>
                {['input', 'select'].map((fieldType) => <option>{fieldType}</option>)}
              </select>
            </div>
          </div>
        </>
      ): <div className="m-4 p-3 rounded bg-secondary">No Forms available</div>}
    </>
  )
}

export default FieldTypeConfig;