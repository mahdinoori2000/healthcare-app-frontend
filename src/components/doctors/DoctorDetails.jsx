import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './doctorDetails.module.css';
import { createAppointment } from '../../redux/appointment/appointmentsSlice';

function DoctorDetails() {
  const { doctors } = useSelector((state) => state.doctors);
  const { id } = useParams();
  const doctor = doctors.doctors.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  const [doctorId] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataAppointment = {
      appointment: {
        doctor_id: doctorId,
      },
    };
    dispatch(createAppointment(dataAppointment));
    navigate('/doctors/book-appointment');
  };

  return (
    <section className={styles.container}>
      <button className={styles.btn} type="button" aria-label="back" onClick={() => navigate(-1)}><FaArrowLeft /></button>
      <div className="mt-20">
        <img className={styles.img} src={doctor.image_url} alt={doctor.name} />
      </div>
      <div className={styles.details_container}>
        <h2 className={styles.doctor_name}>{doctor.name}</h2>
        <p>{doctor.bio}</p>
        <p>{doctor.specialization}</p>
        <button className={styles.reserve_btn} onClick={handleSubmit} type="button">Book an appointment</button>
      </div>
    </section>
  );
}

export default DoctorDetails;
