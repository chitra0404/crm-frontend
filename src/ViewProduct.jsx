import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Base_Url } from '../config/api';







function ViewProduct() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
         axios.get(`${Base_Url}/product/getproducts`)
            .then(res => {
                
                setProduct([product,...res.data.products]);
                console.log("Use data:", product);
                localStorage.setItem("data",JSON.stringify(res.data));
            })
    }, []);


  return (
    <div>
    <h2 className="bg-warning">ProductDetails</h2>
 
    <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
                <th >ProductId</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Description</th>
                <th>status</th>




                <th></th>
            </tr>
        </thead>
        <tbody>
            {
    product.map((item, index) => (
                // update===item.id?<EditList item={item} user={user} setUser={setUser} handleEdit={handleEdit}  />:
                <tr  className="table-success" key={index}> 
                    <td >{item.product_id}</td>
                    <td>{item.product_name}</td>
                    <td>{item.product_type}</td>
                    <td>{item.product_price}</td>
                    <td>{item.product_stock}</td>
                    <td>{item.product_desc}</td>
                    <td>{item.product_status}</td>


                </tr>
            ))}
           
        </tbody>
    </table>
    
    </div>
  )
}

export default ViewProduct