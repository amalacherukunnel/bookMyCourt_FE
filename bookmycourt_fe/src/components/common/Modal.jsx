import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Modal({ open, setOpen, children, buttonName, heading, handleSubmit }) {

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <MDBModal tabIndex='-1' open={open}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{heading}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {children}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className='btn btn-danger' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleSubmit}>{buttonName}</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
