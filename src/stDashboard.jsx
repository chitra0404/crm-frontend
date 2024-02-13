import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



function StDashboard() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('loggedInUser');
    navigate("/");
  }
  return (
    <div>
      
        <nav className="navbar fixed-top navbar-light bg-primary">
        <div className="container-fluid"> 
    <nav className="navbar navbar-light" >
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link  className='text-white' to="/staf">Dashboard</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/getproducts">viewProducts</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/addlead">LeadDetails</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/getreq">Ticket History</Link></a>
        </li>
        </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/request">Ticket Creation</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link  className='text-white' to="/update">Editlead</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/updateorder">updateOrderStatus</Link></a>
        </li>
        </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarScroll">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/addproduct">product Creation</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link  className='text-white' to="/emp">employeeDetails</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to="/cancelreq">cancelRequest</Link></a>
        </li>
        </ul>
    </div>
    <div className="collapse navbar-collapse bg-primary" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><button  onClick={handleLogout}>logout</button></a>
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
</div>
)}

export  default StDashboard;