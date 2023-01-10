import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ConfigureJSONAccordion from './configureJSONAccordion';
import CreateFormFields from './createFormFields';
import Preview from './preview';

export default function ConfigureModal(props) {

  let { showConfigureModal, closeModalHandling, formsData = [] }  = props;

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
          <Tab eventKey="create" title="Create Form/field">
            <CreateFormFields formsData={formsData} />
          </Tab>
          <Tab eventKey="edit" title="Edit form/field">
            <ConfigureJSONAccordion formsData={formsData} />
          </Tab>
          <Tab eventKey="preview" title="Preview Forms" className='modal-height overflow-hidden'>
            <Preview data={formsData} />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  </div>
  )
}
