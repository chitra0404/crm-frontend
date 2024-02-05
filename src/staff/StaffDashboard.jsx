import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import PieChart from '../chart/PieChart';
import BarChart from '../chart/BarChart';

function StaffDashboard() {
  const navigate=useNavigate();
 
  return (
    <div>
      
        <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid"> 
    <nav className="navbar navbar-light" >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/staf">Dashboard</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/getproducts">viewProducts</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/addlead">LeadDetails</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/getreq">Ticket History</Link></a>
        </li>
        </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/request">Ticket Creation</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/update">Editlead</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/updateorder">updateOrderStatus</Link></a>
        </li>
        </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/addproduct">product Creation</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/emp">employeeDetails</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/cancelreq">cancelRequest</Link></a>
        </li>
        </ul>
    </div>
    
    </div>
       
         
  
    </div>
  </div>
  </div>
</nav>
  </nav>
  </div>
</nav>
<div className="row">
            
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4 bg-success p-2 text-dark bg-opacity-25">
                        <div className="card-header py-3 bg-success p-2 text-dark bg-opacity-25">
                            <h6 className="m-0 font-weight-bold text-primary bg-success p-2 text-dark bg-opacity-25">Visitor & Borrower</h6>
                        </div>
                        <div className="card-body bg-success p-2 text-dark bg-opacity-25">
                            <div className="chart-bar bg-success p-2 text-dark bg-opacity-25">
                                <BarChart />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-7">
                    <div className="card shadow mb-4 bg-success p-2 text-dark bg-opacity-25">
                        <div className="card-header py-3 bg-success p-2 text-dark bg-opacity-25">
                            <h6 className="m-0 font-weight-bold text-primary bg-success p-2 text-dark bg-opacity-25">Male & Female</h6>
                        </div>
                        <div className="card-body bg-success p-2 text-dark bg-opacity-25">
                             <div className="chart-bar bg-success p-2 text-dark bg-opacity-25">
                                <PieChart />
                            </div> 

                        </div>
                    </div>

                </div>

            </div>
        </div>
  

  )
}

export default StaffDashboard;