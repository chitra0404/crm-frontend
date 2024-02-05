import React,{useEffect,useState} from 'react';
;

import axios from 'axios';
import { Base_Url } from '../config/api';
import { Navigate, useNavigate } from 'react-router-dom';









function GetEmp() {
  
    const [emp, setEmp] = useState([]);
    const navigate=useNavigate();
    

    useEffect(() => {
         axios.get(`${Base_Url}/user/`)
            .then(res => {
                 setEmp([emp,...res.data.message]);
                console.log("Use data:", res.data.message);
                localStorage.setItem("data",JSON.stringify(res.data));
            })
    }, []);
    
    

    


  return (
    <div>
    <h2 className="bg-warning align-middle">employeeDetails</h2>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-primary me-md-2" type="button" onClick={()=>navigate("/user/register")} >ADD LEAD</button>
  
</div>
 
    <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
                <th >Emp_id</th>
                <th>EmpName</th>
                <th>Empemail</th>
                <th>Emp_role</th>
              
                <th></th>
                




                <th></th>
            </tr>
        </thead>
        <tbody>
            {
    emp.map((item, index) => (
                // update===item.id?<EditList item={item} user={user} setUser={setUser} handleEdit={handleEdit}  />:
                <tr  className="table-success" key={index}> 
                    <td >{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    
                    
                 
             
                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
  )
}

export default GetEmp;