import './App.css';
import DashboardLayout from './pages/Dashboard/DashboardLayout/DashboardLayout';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Shared/Login/PrivateRoute/PrivateRoute';
import IsAdmin from './pages/Dashboard/IsAdmin/IsAdmin';
import AddPrograms from './pages/Dashboard/AddPrograms/AddPrograms';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import BookNow from './pages/BookNow/BookNow';
import ManageAllBooking from './pages/Dashboard/ManageAllBooking/ManageAllBooking';
import ManageAllPrograms from './pages/Dashboard/ManageAllPrograms/ManageAllPrograms';
import Signup from './pages/Shared/SignUp/SignUp';
import Programs from './pages/Home/Programs/Programs';
import ProgramSection from './pages/ProgramSection/ProgramSection';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/programs" element={<ProgramSection />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/bookNow/:id" element={<PrivateRoute><BookNow></BookNow></PrivateRoute>} />
            <Route path="dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
              <Route path='admin' element={<IsAdmin></IsAdmin>} />
              <Route path='manageAllPrograms' element={<ManageAllPrograms></ManageAllPrograms>} />
              <Route path='addProgram' element={<AddPrograms></AddPrograms>} />
              <Route path='myBooking' element={<MyOrders></MyOrders>} />
              <Route path='manageAllBooking' element={<ManageAllBooking></ManageAllBooking>} />
              <Route path='tax' element={<Footer></Footer>} />
            </Route>
            <Route path='/login' element={<Login></Login>} />
            <Route path='*' element={<NotFound></NotFound>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
