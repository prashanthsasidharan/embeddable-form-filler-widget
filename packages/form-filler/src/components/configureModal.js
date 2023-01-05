import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';

let obj = {name: 'prash'};

function Sonnet({}) {
  return 'lksdjflsjdflkjlk '
}
export default function ConfigureModal({showConfigureModal, closeModalHandling}) {
  return (
    <div
    className="modal show large"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal size="lg"  show={showConfigureModal} onHide={closeModalHandling}>
          <Modal.Header closeButton>
            <Modal.Title>Configure Filler Data</Modal.Title>
          </Modal.Header>

          <Modal.Body className='modal-min-height'>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                <div className='row p-3 h-100'>
                  <div className='col-6'>
                    <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header></Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>  
                  </div>
                  <div className='col-6 bg-black text-danger p-4 rounded h-100'>
                    <pre>
                      {JSON.stringify(obj, null, 2)}
                    </pre>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Sonnet />
              </Tab>
            </Tabs>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}
