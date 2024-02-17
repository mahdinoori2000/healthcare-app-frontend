import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctor/doctorSlice';
import { createAppointment } from '../../redux/appointment/appointmentsSlice';
import cities from '../Cities';

function BookAppointment() {
  const { name, id } = useLocation()?.state?.doctor || {};
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [doctorId, setDoctorId] = useState();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedReason, setSelectedReason] = useState('');

  // Ensure fetchedDoctors is initialized as an array
  const fetchedDoctors = useSelector((state) => state.doctors.doctors.doctors) || [];

  const dispatch = useDispatch();

  const handleBookAppointment = () => {
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    const formattedDateTime = `${formattedDate}`;
    return formattedDateTime;
  };

  const handleSelectedCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleInputChange = (event) => { setSelectedReason(event.target.value); };

  const handleSelectedDoctor = (event) => {
    const doctor = event.target.value;
    const doctorObject = fetchedDoctors.find((doc) => doc.name === doctor);
    setSelectedDoctor(event.target.value);
    setDoctorId(doctorObject.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataAppointment = {
      appointment: {
        date: handleBookAppointment(),
        city: selectedCity,
        doctor_id: doctorId,
        reason: selectedReason,
      },
    };
    dispatch(createAppointment(dataAppointment));
    navigate('/doctors/my-appointments');
  };

  useEffect(() => {
    if (name) {
      setDoctorId(id);
      setSelectedDoctor(name);
    }
    dispatch(fetchDoctors());
  }, [dispatch, selectedDoctor, selectedDate, id, name]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Book Appointment</h1>
        <form className="flex flex-col gap-6">
          <FormControl className="w-full">
            <InputLabel id="demo-simple-select-helper-label">Select your doctor</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedDoctor}
              label="Select doctor"
              onChange={handleSelectedDoctor}
            >
              {Array.isArray(fetchedDoctors) && fetchedDoctors.map((doctor) => (
                <MenuItem
                  key={doctor.name}
                  value={doctor.name}
                >
                  {doctor.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="w-full">
            <InputLabel id="demo-simple-select-helper-label">Select a city</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedCity}
              label="Select doctor"
              onChange={handleSelectedCity}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="flex flex-col gap-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  className="w-full"
                  label="Select a date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </DemoContainer>
            </LocalizationProvider>
            <input
              className="w-full h-12 border border-gray-300 rounded-md pl-4"
              onChange={handleInputChange}
              value={selectedReason}
              type="text"
              placeholder="Enter the reason"
              required
            />
          </div>
          <button
            className="py-3 bg-lime-500 text-white rounded-full"
            type="submit"
            onClick={handleSubmit}
            aria-label="Next"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
