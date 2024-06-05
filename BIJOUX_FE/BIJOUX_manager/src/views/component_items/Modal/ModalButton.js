import React, { Children, useState } from 'react';
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from '@coreui/react';
import './modal.css'

const Modal_Button = (props) => {
    const [visible, setVisible] = useState(false);
    const handleClose = () => {
      setVisible(false);
    };
    
    return (
      <>
        <CButton className="w-100 h-100 px-1" style={{border:'none'}}  color={props.color} onClick={() => setVisible(!visible)} disabled={props.disabled}>
          {props.content}
        </CButton>
        <CModal size='xl' className='custom-modal' backdrop="static"  visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>{props.title}</CModalTitle>
          </CModalHeader>
          <CModalBody>

            { React.isValidElement(props.children) ? React.cloneElement(props.children, { onClose: handleClose }): props.children}
            
          </CModalBody>
        </CModal>
      </>
    )
  }

  export default Modal_Button