import React, { useState } from 'react';
import Modal from 'react-modal';

import './AppModal.scss';

export default function AppModal(props) {
    return (
        <div>
            <Modal
                isOpen={props.appModal}
                contentLabel="New App Modal"
            >
                <h3 className="modal-heading">Add New Application
                <button className="modal-close" onClick={() => props.toggleAppModal(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </h3>
                <div className="modal-content">
                    <form className="modal-content-form">
                        <div className="modal-inputs">
                            <label>Position Title</label>
                            <input type="text" name="position-title" placeholder="Position Title" className="form-input"></input>
                            <label>Company</label>
                            <input type="text" name="company-name" placeholder="Company Name" className="form-input"></input>
                        </div>
                        <div className="modal-button">
                            <button type="submit">+ Add</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>

    )
}