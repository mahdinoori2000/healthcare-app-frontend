import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MyAppointments from './pages/MyAppointments';
import AddDoctor from './pages/AddDoctor';
import BookAppointment from './pages/BookAppointment';
import DeleteDoctor from './pages/DeleteDoctor';
import DoctorDetails from './pages/DoctorDetails';
import SplashScreen from './components/splashScreen/SplashScreen';
import Login from './components/login/login';
import Register from './components/register/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/delete-doctor" element={<DeleteDoctor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
