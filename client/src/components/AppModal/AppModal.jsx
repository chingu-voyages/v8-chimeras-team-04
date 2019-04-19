import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import './AppModal.scss';

export default function AppModal({ toggleAppModal, appModal }) {
	const [title, setTitle] = useState('');
	const [company, setCompany] = useState('');
	const [jobError, setJobError] = useState('');

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
							<label>Position Title</label>
							<input
								type="text"
								name="position-title"
								placeholder="Position Title"
								className="form-input"
								value={title}
								onChange={e => setTitle(e.target.value)}
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

		axios.post('/addjob', { title, company }).then(({ data }) => {
			if (data.error) {
				setJobError(data.error);
			} else {
				setJobError('');
				toggleAppModal(false);
				setTitle('');
				setCompany('');
			}
		});
	}
}
