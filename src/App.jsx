import { useState ,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import { Base_Url } from '../config/api';
import Register from './Register';
import AccountActivation from './AccountActivation';
import Login from './Login';
import Regis from './staff/Register';
import Account from './AccountActivation';
import Log from './staff/Login';
import Dashboard from './Dashboard';
import ViewProduct from './ViewProduct';
import CustomerDashboard from './CustomerDashboard';
import Lead from './Lead/lead';
import GetOrder from './order/GetOrder';
import EditLead from './Lead/EditLead';
import GetRequest from './request/request';
import StaffDashboard from './staff/StaffDashboard';

import UpdateOrder from './order/UpdateOrder';
import GetReq from './request/GetReq';
import ADDLead from './Lead/AddLead';
import AddProduct from './AddProduct';

import ForgotPassword from './Forgetpassword';
import PasswordUpdate from './PasswordUpdate';
import ALLReq from './request/allRequest';
import CancelRequest from './request/CancelRequest';
import GetEmp from './GetEmp';
import Contact from './contactdetails';
import StDashboard from './stDashboard';



function App() {


  return (
    <>
      <Router>
        
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Dashboard/>}></Route> 
      <Route path="/register" element={<Register/>}></Route>
        <Route path="/user/register" element={<Regis/>}></Route>
        <Route path="/user/acc/:id" element={<AccountActivation/>}></Route> 
        <Route path="/users/login" element={<Log/>}></Route>
        <Route path="/staf" element={<StaffDashboard/>}></Route>
   
        <Route path="/forgot" element={<ForgotPassword/>}></Route>
        <Route path="/reset/:id" element={<PasswordUpdate/>}></Route>
        <Route path="/emp" element={<GetEmp/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/acc/:id" element={<Account/>}></Route>
  
        


        //Customer
        
        <Route path="/cus" element={<CustomerDashboard/>}></Route>
        <Route path="/getproducts" element={<ViewProduct/>}></Route>

        <Route path="/lead" element={<Lead/>}></Route>
        <Route path="/order" element={<GetOrder/>}></Route>
        <Route path="/update" element={<EditLead/>}></Route>
        <Route path="/request" element={<GetRequest></GetRequest>}></Route>
        <Route path="/updateorder" element={<UpdateOrder/>}></Route>
        <Route path="/getreq" element={<GetReq/>}></Route>
        <Route path="/addlead" element={<ADDLead/>}></Route>
    
      <Route path="/addproduct" element={<AddProduct/>}></Route>
      <Route path="/all" element={<ALLReq/>}></Route>
      <Route path="/cancelreq" element={<CancelRequest/>}></Route>
                  
      </Routes>
    </Router>
  </>
  )
}
function Navbar() {
  const [userRole, setUserRole] = useState('');

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/cus')) {
      setUserRole('customer');
    } else if (path.startsWith('/staf')) {
      setUserRole('staff');
    }
  }, [location]);

  return (
    <>
     {userRole === 'customer' ? (
        <CustomerDashboard />
      ) : userRole === 'staff' ? (
        <StDashboard/>
      ) : null}
    </>
  );
}

export default App
