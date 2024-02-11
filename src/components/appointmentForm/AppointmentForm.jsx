import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createAppointment } from '../../redux/appointment/appointmentsSlice';

import './AppointmentForm.css';

const AppointmentForm = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get('name');

    const data = {
      appointment: {
        name,
      },
    };
    dispatch(createAppointment(data));
    navigate('/MyAppointment');
  };
  return (
    <div className="container">
      <h1 className="title">Book Appointment</h1>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Select your doctor</label>
          <input
            type="text"
            className="name"
            name="name"
            placeholder="name"
            id="name"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
