import React,{useEffect,useState} from 'react';
import { LEAD_STATUS } from '../Data/leadstatus';

import axios from 'axios';
import { Base_Url } from '../../config/api';
import { Navigate, useNavigate } from 'react-router-dom';









function Lead() {
  
    const [lead, setLead] = useState([]);
    const navigate=useNavigate();
    

    useEffect(() => {
         axios.get(`${Base_Url}/ad/getlead`)
            .then(res => {
                
                 setLead([lead,...res.data]);
                console.log("Use data:", res.data);
                localStorage.setItem("data",JSON.stringify(res.data));
            })
    }, []);
    
    
    const updateLead = (id) => {
      const current= lead.filter( (leads) => leads.leadid=== id)
      setLead[{...current}]
      console.log(current);
      navigate('/update')
  }
    


  return (
    <div>
    <h2 className="bg-warning">LeadDetails</h2>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-primary me-md-2" type="button" onClick={()=>navigate("/addlead")} >ADD LEAD</button>
  
</div>
 
    <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
                <th >LeadId</th>
                <th>LeadName</th>
                <th>Lead_email</th>
                <th>Lead_phone</th>
                <th>LeadStatus</th>
                <th></th>
                




                <th></th>
            </tr>
        </thead>
        <tbody>
            {
    lead.map((item, index) => (
                // update===item.id?<EditList item={item} user={user} setUser={setUser} handleEdit={handleEdit}  />:
                <tr  className="table-success" key={index}> 
                    <td >{item.leadid}</td>
                    <td>{item.lead_name}</td>
                    <td>{item.lead_email}</td>
                    <td>{item.lead_phone}</td>
                    
                    <td>{item.lead_status}</td>
                 <td><button type="submit" className='btn btn-success'  onClick={ () => updateLead(item.leadid)}>Edit</button></td>
             
                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
  )
}

export default Lead;