import Axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:3001';

const initialState = {
  appointment: [],
  details: [],
  status: 'idle',
  error: null,
};
export const fetchAppointments = createAsyncThunk(
  'appointment/fetchAppointments',
  async () => {
    const token = Cookies.get('jwt_token');
    try {
      const response = await Axios.get(`${BASE_URL}/api/v1/appointments`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error && error.response && error.response.data.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('network error');
      }
    }
  },
);

export const createAppointment = createAsyncThunk(
  'appointment/CreateAppointment',
  async (data) => {
    const token = Cookies.get('jwt_token');
    const url = `${BASE_URL}/api/v1/appointments`;
    try {
      const response = Axios.post(`${url}`, data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      if (err && err.response && err.response.data.err) {
        throw new Error(err.response.data.err);
      } else {
        throw new Error('network error');
      }
    }
  },
);

const appointmentsSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAppointments.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchAppointments.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.doctors = action.payload;
    });
    builder.addCase(fetchAppointments.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default appointmentsSlice.reducer;
