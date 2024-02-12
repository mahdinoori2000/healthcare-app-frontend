import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchDoctors, deleteDoctor } from '../../redux/doctor/doctorSlice';
import './delete.css';

function Delete() {
  const dispatch = useDispatch();
  const { doctors } = useSelector((store) => store.doctors);
  const [message, setMessage] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteDoctor(id));
    setMessage('Doctor has been deleted successfully');
    setTimeout(() => {
      setMessage('');
      dispatch(fetchDoctors());
    }, 1000);
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div>
      {doctors.doctors.length === 0 ? (
        <div>
          <p>
            There are no doctors added yet!
            <NavLink to="/doctors/add-doctor">Click here to add</NavLink>
          </p>
        </div>
      ) : (
        <div>
          {message !== '' ? <p className="message">{message}</p> : null}
          <div className="table-container">
            <table className="delete-table">
              <thead>
                <tr className="table-head">
                  <th>Doctor Image</th>
                  <th>Doctor Name</th>
                  <th>Doctor &apos;s specialization</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {doctors.doctors.map(
                  ({
                    id, name, image_url: imageURl, specialization,
                  }) => (
                    <tr key={id}>
                      <td>
                        <div className="img-container">
                          <img className="img" src={imageURl} alt={name} />
                        </div>
                      </td>
                      <td>{name}</td>
                      <td>{specialization}</td>
                      <td>
                        <button type="button" onClick={() => handleDelete(id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Delete;
