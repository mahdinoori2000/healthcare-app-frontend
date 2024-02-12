import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctor/doctorSlice';
import styles from './doctors.module.css';

function Doctors() {
  const [startIndex, setStartIndex] = useState(0);
  const { doctors, error, status } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const showNextCards = () => {
    if (startIndex + 3 < doctors.doctors.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPrevCards = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }

  if (doctors.length === 0) {
    return (
      <div>
        There is no doctor in the list please
        <NavLink to="/doctors/add-doctor">click here</NavLink>
        {' '}
        to create a
        doctor
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn}  ${styles.btn2}`}
        type="button"
        onClick={showPrevCards}
        aria-label="previous"
        disabled={startIndex === 0}
      >
        <FaArrowLeft />
      </button>
      {doctors.doctors.slice(startIndex, startIndex + 3).map((doctor) => (
        <div key={doctor.id} className={styles.card}>
          <div className={styles.image_container}>
            <img
              className={styles.img}
              src={doctor.image_url}
              alt={doctor.name}
            />
          </div>
          <p className={styles.name}>{doctor.name}</p>
          <p className={styles.specialization}>{doctor.specialization}</p>
          <ul className={styles.social_icons}>
            <li>
              <img
                src="https://jade-rabanadas-479b96.netlify.app/static/media/fb.6ede2e0d2f244fec1b76327b30e2d180.svg"
                alt="Facebook"
              />
            </li>
            <li>
              <img
                src="https://jade-rabanadas-479b96.netlify.app/static/media/x.068f9efee7b52e070424b4c2925f2960.svg"
                alt="Twitter"
              />
            </li>
            <li>
              <img
                src="https://jade-rabanadas-479b96.netlify.app/static/media/linkedin.6bfb62956b5c794df40ab6045a56d21d.svg"
                alt="LinkedIn"
              />
            </li>
          </ul>
        </div>
      ))}
      <button
        className={`${styles.btn}  ${styles.btn1}`}
        type="button"
        onClick={showNextCards}
        aria-label="next"
        disabled={startIndex + 3 >= doctors.doctors.length}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
export default Doctors;
