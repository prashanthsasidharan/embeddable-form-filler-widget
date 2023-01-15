import React from 'react'
import { useEffect } from "react"
import FillerLogo from '../svgs/filler';

const tiltShake = [
  { transform: 'skewY(-15deg)', offset: 0 },
  { transform: 'skewY(15deg)', offset: 0.25},
  { transform: 'skewY(-15deg)', offset: 0.5},
  { transform: 'skewY(15deg)', offset: 0.75},
  { transform: 'skewY(0deg))', offset: 1}
];

export default function Filler({ formsMap = [], fillerRef = {} }) {
  let posX, posY;
  let transtionTime = 500;

  useEffect(() => {
    addDragFunctionality();
    attachFillerClickListener();
    fillerPositionUpdate();
  }, []);

  const attachFillerClickListener = () => {
    fillerRef.current.childNodes[1].addEventListener('mouseup', () => {
      isNotDragging() && _fillDummyData();
    });
  }

  const isNotDragging = () => {
    let fillerElement = fillerRef.current;
    let newPosX = fillerElement.offsetLeft;
    let newPosY = fillerElement.offsetTop;
    let xDiff = Math.abs(newPosX - posX);
    let yDiff = Math.abs(newPosY - posY);
    return xDiff<5 && yDiff<5;
  }

  const fillerPositionUpdate = () => {
    let fillerElement = fillerRef.current;
    posX = fillerElement.offsetLeft;
    posY = fillerElement.offsetTop;
  }

  const addDragFunctionality = () => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let fillerElement = fillerRef.current;
    fillerElement.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      fillerElement.style.top = (fillerElement.offsetTop - pos2) + 'px';
      fillerElement.style.left = (fillerElement.offsetLeft - pos1) + 'px';
    }

    const closeDragElement = () => {
      fillerPositionUpdate();
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }

  const inputFill = (element, value) => {
    element.value = value;
    var changeEvent = new Event('change', { bubbles: true });
    var inputEvent = new Event('input', { bubbles: true });
    element.dispatchEvent(inputEvent);
    element.dispatchEvent(changeEvent);
  }

  const findFormFieldMap = () => {
    let formFieldMap = formsMap.find((fieldsMap) => !!document.querySelector(fieldsMap.selector)) || {};
    return formFieldMap.fields || null;
  }

  const addTimedStyle = (element, prop, value) => {
    element.style[prop]= value;
    setTimeout(() => {
      element.style[prop]= null;
    }, transtionTime);
  }

  async function _fillDummyData() {
    let formFieldMap = findFormFieldMap();
    let buttonElement = fillerRef.current.childNodes[1];
    if (!formFieldMap) {
      buttonElement.animate(tiltShake, transtionTime);
      addTimedStyle(buttonElement, 'border', '2px solid red');
      return;
    }

    addTimedStyle(buttonElement, 'border', '2px solid #1BAD71');

    // filler
    formFieldMap.forEach(async (field) => {
      let element = document.querySelector(field.selector);

      if (!element) {
        console.log('Cannot find valid element for :', field);
        return;
      }

      console.log('Filling  ', { el: element, field });

      element.focus();

      setTimeout(() => {
        if (field.type === 'select') {
          element.value = field.value;
          var selectEvent = new Event('select', { bubbles: true });
          element.dispatchEvent(selectEvent);
        } else if (field.type === 'file-upload') {

          // let container = new DataTransfer();
          // container.items.add(field.value);

          // let inputElement = element.shadowRoot.querySelector('input');
          // inputElement.files = container.files;
          // inputElement.dispatchEvent(new Event('change', { bubbles: true }));
          // inputElement.dispatchEvent(new Event('input', { bubbles: true }));
        } else if (field.type === 'date') {
          element.value = field.value;

          element.dispatchEvent(new Event('select', { bubbles: true }));
          element.dispatchEvent(new Event('input', { bubbles: true }));
        } else {
          if (field.type === 'checkbox') {
            element.checked = true;
            element.dispatchEvent(new Event('change', { bubbles: true }));
          }  else {
            inputFill(element, field.value);
          }
          element.blur();
        }
      }, 0);
    });

  }

  
  return (
    <button className='filler-logo'>
      <FillerLogo />
    </button>
  )
}
