import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ConfigureJSONAccordion from './configureJSONAccordion';
import CreateFormFields from './createFormFields';
import Preview from './preview';

export default function ConfigureModal(props) {

  let { showConfigureModal, closeModalHandling, formsData = [], refetchFormData }  = props;
  return (
    <div
      className="modal show large"
      style={{ display: 'block', position: 'initial' }}
    >
    <Modal size="lg"  show={showConfigureModal} onHide={closeModalHandling}>
      <Modal.Header closeButton>
        <Modal.Title>Configure Filler Data</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Tabs
          defaultActiveKey="create"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="create" title="Create">
            <CreateFormFields formsData={formsData} closeModal={closeModalHandling} refetchFormData={refetchFormData} />
          </Tab>
          <Tab eventKey="edit" title="Edit">
            <ConfigureJSONAccordion formsData={formsData} closeModal={closeModalHandling} refetchFormData={refetchFormData} />
          </Tab>
          <Tab eventKey="preview" title="Preview" className='modal-height overflow-hidden'>
            <Preview data={formsData} />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  </div>
  )
}
