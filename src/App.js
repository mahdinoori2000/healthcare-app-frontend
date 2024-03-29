import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyAppointments from './pages/MyAppointments';
import AddDoctor from './pages/AddDoctor';
import DoctorsPage from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';
import DeleteDoctor from './pages/DeleteDoctor';
import DoctorDetailsPage from './pages/DoctorDetails';
import SplashScreen from './components/splashScreen/SplashScreen';
import Login from './components/login/login';
import Register from './components/register/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/layout';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/doctors" element={<Layout />}>
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
            <Route path="/doctors/book-appointment" element={<BookAppointment />} />
            <Route path="/doctors/my-appointments" element={<MyAppointments />} />
            <Route path="/doctors/add-doctor" element={<AddDoctor />} />
            <Route path="/doctors/delete-doctor" element={<DeleteDoctor />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
