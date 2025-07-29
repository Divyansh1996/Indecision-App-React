import React from "react";
import Modal from 'react-modal';

const OptionModals = (props) => (
       <Modal 
       isOpen={!!props.selectedOptions}
       onRequestClose={props.closeModal}
       closeTimeoutMS={200}
       className="modal"
       contentLabel = "Selected Option">
            <h3>Selected Option</h3>
            {props.selectedOptions && <p>{props.selectedOptions}</p>}
            <button onClick={props.closeModal} className="button">Okay</button>
       </Modal>
) 

export default OptionModals;