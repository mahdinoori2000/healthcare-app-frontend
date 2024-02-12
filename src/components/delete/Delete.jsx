import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './delete.css';
import { NavLink } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctor/doctorSlice';

function Delete() {
  const dispatch = useDispatch();
  const { doctors } = useSelector((store) => store.doctors);
  console.log('Doctors', doctors);

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
          <div>
            <table className="delete-table">
              <thead>
                <tr className="table-head">
                  <th>Doctor Image</th>
                  <th>Doctor Name</th>
                  <th>Doctor `&apos;` specialization</th>
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
                        <button type="button">Delete</button>
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
