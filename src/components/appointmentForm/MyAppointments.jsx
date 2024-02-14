import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../../redux/appointment/appointmentsSlice';

function MyAppointments() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.appointments.isLoading);
  const error = useSelector((state) => state.appointments.error);
  const appointments = useSelector((state) => state.appointments.appointments);
  const fetchedDoctors = useSelector((state) => state.doctors.doctors.doctors) || [];
  const names = fetchedDoctors.map(({ id, name }) => ({ id, name }));

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-4xl md:text-6xl md:font-bold font-bold text-center mb-8">
        My Appointments
      </h1>
      <div className="flex flex-col items-center w-full md:w-5/6 bg-white text-gray-700 dark:text-gray-800 p-4 gap-8">
        {appointments?.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <div className="w-full">
            <table className="w-full text-sm table-auto">
              <thead className="text-xs bg-primary main-bg-dark dark:bg-secondary dark:text-gray-800">
                <tr>
                  <th className="text-start text-base px-2 md:px-6 py-2">Doctor Name</th>
                  <th className="text-start text-base px-2 md:px-6 py-2">Appointment Date</th>
                  <th className="text-start text-base px-2 md:px-6 py-2">City</th>
                  <th className="text-start text-base px-2 md:px-6 py-2">Reason</th>
                </tr>
              </thead>
              <tbody>
                {appointments?.map((appointment) => {
                  const name = names.find((doctor) => doctor.id === appointment.doctor_id)?.name;
                  return (
                    <tr key={appointment.id} className="bg-white border-b dark:border-gray-300">
                      <td className="text-gray-600 px-2 md:px-6 py-2 font-medium">{name}</td>
                      <td className="text-gray-600 px-2 md:px-6 py-2">{appointment.date}</td>
                      <td className="text-gray-600 px-2 md:px-6 py-2">{appointment.city}</td>
                      <td className="text-gray-600 px-2 md:px-6 py-2">{appointment.reason}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyAppointments;
