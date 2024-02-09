import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import DoctorsDetails from '../../data/DoctorsDetails';
import doctors from './doctors.module.css';

const Doctors = () => {
  const [startIndex, setStartIndex] = useState(0);

  const showNextCards = () => {
    if (startIndex + 3 < DoctorsDetails.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPrevCards = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      <div className={doctors.container}>
        <button className={doctors.btn} type="button" onClick={showPrevCards} aria-label="previous" disabled={startIndex === 0}><FaArrowLeft /></button>
        {DoctorsDetails.slice(startIndex, startIndex + 3).map((doctor) => (
          <div
            key={doctor.id}
            className={doctors.card}
          >
            <div className={doctors.image_container}>
              <img className={doctors.img} src={doctor.image_url} alt={doctor.name} />
            </div>
            <p className={doctors.name}>{doctor.name}</p>
            <p className={doctors.specialization}>{doctor.specialization}</p>
            <ul className={doctors.social_icons}>
              <li>
                <img src="https://jade-rabanadas-479b96.netlify.app/static/media/fb.6ede2e0d2f244fec1b76327b30e2d180.svg" alt="Facebook" />
              </li>
              <li>
                <img src="https://jade-rabanadas-479b96.netlify.app/static/media/x.068f9efee7b52e070424b4c2925f2960.svg" alt="Twitter" />
              </li>
              <li>
                <img src="https://jade-rabanadas-479b96.netlify.app/static/media/linkedin.6bfb62956b5c794df40ab6045a56d21d.svg" alt="LinkedIn" />
              </li>
            </ul>
          </div>
        ))}
        <button className={doctors.btn} type="button" onClick={showNextCards} aria-label="next" disabled={startIndex + 3 >= DoctorsDetails.length}><FaArrowRight /></button>
      </div>
    </>
  );
};
export default Doctors;
