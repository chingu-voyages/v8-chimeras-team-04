import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import AppContext from '../../context/AppContext';
import FullAppContext from '../../context/FullAppContext';

import './AppModal.scss';

export default function AppModal() {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const { toggleAppModal, appModal, setApps } = useContext(AppContext);
  const { currentUser } = useContext(FullAppContext);

  useEffect(() => {
    Modal.setAppElement('body');
  });
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

    axios.post('/addjob', { position, company, username: currentUser.username }).then(({ data }) => {
      if (data.error) {
        console.log('add job error');
      } else {
        toggleAppModal(false);
        setPosition('');
        setCompany('');
        setApps(data);
      }
    });
  }
}
