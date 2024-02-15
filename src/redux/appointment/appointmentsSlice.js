import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const url = 'https://healthcare-ck31.onrender.com';

const createAppointment = createAsyncThunk(
  'user/createAppointment',
  async (dataAppointment) => {
    try {
      const token = Cookies.get('jwt_token');
      const response = await fetch(
        `${url}/api/v1/doctors/${dataAppointment.appointment.doctor_id}/appointments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dataAppointment),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return { error: error.message };
    }
  }
);

const fetchAppointments = createAsyncThunk(
  'doctors/fetchAppointments',
  async () => {
    try {
      const token = Cookies.get('jwt_token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(`${url}/api/v1/appointments`, {
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data.appointments;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const initialState = {
  isLoading: false,
  appointments: [],
  appointment: {},
  createAppointmentMsg: {},
  deleteAppointmentMsg: {},
  error: undefined,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createAppointmentMsg = action.payload;
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchAppointments, createAppointment };
export default appointmentSlice.reducer;
