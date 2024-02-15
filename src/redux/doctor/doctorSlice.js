import Axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const BASE_URL = 'https://healthcare-ck31.onrender.com';

const initialState = {
  doctors: [],
  details: [],
  status: 'idle',
  error: null,
};

export const fetchDoctors = createAsyncThunk(
  'doctors/fetchDoctors',
  async () => {
    const token = Cookies.get('jwt_token');
    try {
      const response = await Axios.get(`${BASE_URL}/api/v1/doctors`, {
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

export const createDoctor = createAsyncThunk(
  'doctor/CreateDoctor',
  async (data) => {
    const token = Cookies.get('jwt_token');
    const url = `${BASE_URL}/api/v1/doctors`;
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

export const deleteDoctor = createAsyncThunk('doctor/delete', async (id) => {
  const token = Cookies.get('jwt_token');
  const url = `${BASE_URL}/api/v1/doctors/${id}`;
  try {
    const response = Axios.delete(`${url}`, {
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
});

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.doctors = action.payload;
    });
    builder.addCase(fetchDoctors.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default doctorsSlice.reducer;
