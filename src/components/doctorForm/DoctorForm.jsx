import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createDoctor } from '../../redux/doctor/doctorSlice';

import './doctorform.css';

function DoctorForm() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const specialization = formData.get('specialization');
    const bio = formData.get('bio');
    const imageUrl = formData.get('image');

    const data = {
      doctor: {
        name,
        specialization,
        bio,
        image_url: imageUrl,
      },
    };
    dispatch(createDoctor(data));
    navigate('/doctors');
  };

  return (
    <div className="container">
      <h1 className="title">You can now create a doctor</h1>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Doctors &apos;s Full Name</label>
          <input
            type="text"
            className="name"
            name="name"
            placeholder="name"
            id="name"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="specialization">Enter doctor`s specialization</label>
          <input
            type="text"
            className="specialization"
            placeholder="Enter doctor specialization"
            id="specialization"
            name="specialization"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="image">Enter image link url</label>
          <input
            type="text"
            className="image"
            placeholder="image-link"
            id="image"
            name="image"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="bio">Enter doctor bio</label>
          <textarea
            type="text"
            className="bio"
            placeholder="Enter doctor bio"
            name="bio"
            id="bio"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create a doctor
        </button>
      </form>
    </div>
  );
}

export default DoctorForm;
