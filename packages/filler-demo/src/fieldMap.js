/*
// script to retreive all the data-fields. Run this in browser console
var arr = []
document.querySelectorAll('[data-field]').forEach((f) => {
var typeSelector = f.attributes['data-field'].ownerElement.nodeName === 'Z-INPUT' ? ' input' : '';
arr.push({ selector: `[data-field="${f.attributes['data-field'].value}"]${typeSelector}`, value: 'Test' })

})
console.log(arr);
*/

// import { hsbcBankKey } from './constants';


let HSBCRegFieldMap = [
  {
    selector: '[data-field="email"]',
    value: 'PC000016677'
  },
  {
    selector: '[data-field="credential_field_1"] input',
    value: 'fcecbb8285ee421abe84724942807c09'
  },
  {
    selector: '[data-field="credential_field_2"] input',
    value: '794F7f1e6cE7482dbCa67Af7e49377F0'
  },
  {
    selector: '[data-field="credential_field_3"] input',
    value: '111111',
    type: 'secret-pin'
  },
  {
    selector: '[data-field="credential_field_4"] input',
    value: '111111',
    type: 'secret-pin'
  },
  {
    selector: '[data-field="credential_field_5"]',
    value: '2000000000009',
    type: 'select'
  },
  // {
  //   selector: '[data-field="request_file"]',
  //   value: new File([hsbcBankKey], 'bankKey.txt', {type: 'text/plain'}),
  //   type: 'file-upload'
  // },
  {
    selector: '[data-field="terms"]',
    type: 'checkbox'
  }
];


const FormsMap = [
  {
    name: 'hsbcRegForm',
    selector: '[data-form="payments"]',
    fields: HSBCRegFieldMap
  }
];

export default FormsMap;
