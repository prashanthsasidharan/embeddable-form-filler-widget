import React, { useState } from 'react'
import ConfigureModal from './configureModal';
import ReactDOM from 'react-dom';

export default function ConfigureFillerData({formsData, refetchFormData}) {
  let [showConfigureModal, setConfigureModalState] = useState(false);

  function closeModalHandling() {
    refetchFormData();
    setConfigureModalState(false);
  }

  return (
    <>
      <button className="d-block" onClick={() => setConfigureModalState(true)}>Edit</button>
      {showConfigureModal && ReactDOM.createPortal(
        <ConfigureModal
          closeModalHandling={closeModalHandling}
          showConfigureModal={showConfigureModal}
          formsData={formsData}
        />, document.querySelector('#filler-modal-wrapper'))}
    </>
  )
}
