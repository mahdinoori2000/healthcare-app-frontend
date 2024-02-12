import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './doctorDetails.module.css';

function DoctorDetails() {
  const { doctors } = useSelector((state) => state.doctors);
  const { id } = useParams();
  const doctor = doctors.doctors.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className="mt-20">
        <img src={doctor.image_url} alt={doctor.name} />
        <button type="button" aria-label="back" onClick={() => navigate(-1)}><FaArrowLeft /></button>
      </div>
      <div>
        <h2>{doctor.name}</h2>
        <p>{doctor.bio}</p>
        <p>{doctor.specialization}</p>
        <button type="button">Reserver</button>
      </div>
    </section>
  );
}

export default DoctorDetails;
