import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import AppContext from '../../context/AppContext';
import { addJob } from '../../helpers/DBHelper';

import './AppModal.scss';

export default function AppModal() {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [jobError, setJobError] = useState(''); 
  const { toggleAppModal, appModal, setApps, test } = useContext(AppContext);

  return (
    <div>
      <Modal isOpen={appModal} contentLabel="New App Modal">
        <h3 className="modal-heading">
          Add New Application
          <button className="modal-close" onClick={() => toggleAppModal(false)}>
            <i className="fas fa-times" />
          </button>
        </h3>
        <div className="modal-content">
          <form className="modal-content-form">
            <div className="modal-inputs">
              <label>Position</label>
              <input
                type="text"
                name="position-position"
                placeholder="Position position"
                className="form-input"
                value={position}
                onChange={e => setPosition(e.target.value)}
              />
              <label>Company</label>
              <input
                type="text"
                name="company-name"
                placeholder="Company Name"
                className="form-input"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </div>
            <div className="modal-button">
              <button onClick={handleSubmit} type="submit">
                + Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    addJob(position, company).then(({ data }) => {
      if (data.error) {
        setJobError(data.error);
      } else {
        setJobError('');
        toggleAppModal(false);
        setPosition('');
        setCompany('');
        setApps(data);
      }
    });
  }
}