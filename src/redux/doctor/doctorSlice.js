import Axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:3001';

const initialState = {
  doctors: [],
  details: [],
  status: 'idle',
  error: null,
};

export const fetchDoctors = createAsyncThunk('doctors/fechDoctors', async () => {
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
