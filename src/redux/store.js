import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import doctorReducer from './doctor/doctorSlice';
import appointmentReducer from './appointment/appointmentsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    doctors: doctorReducer,
    appointments: appointmentReducer,
  },
});

export default store;
