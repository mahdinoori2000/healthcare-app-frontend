import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './doctorDetails.module.css';

function DoctorDetails() {
  const { doctors } = useSelector((state) => state.doctors);
  const { id } = useParams();
  const doctor = doctors.doctors.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  // export const doctorId = (id) => {
  //   {id}
  // }

  const handleSubmit = () => {
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
