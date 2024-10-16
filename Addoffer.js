import axios from 'axios';
import React, { useState } from 'react'

const Addoffer = () => {
    const [offername,setOffername]=useState("");
    const[couponcode,setCouponcode]=useState("");
    const addoffer=async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:4000/addoffer",{offername,couponcode})
            alert("Offer Added")
            
            setOffername("");
            setCouponcode("");
        }
        catch(err){
            alert("Fail to added data")
        }
    }
  return (
    <div>
     <section>
        <div className='container addoffer p-5'>
           <div className='row'>
            <div className='col-md-4 py-5'>
            <form onSubmit={addoffer}>
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Name" 
                                            className="form-control p-3" 
                                            value={offername} 
                                            onChange={(e) => setOffername(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Couponcode" 
                                            className="form-control p-3" 
                                            value={couponcode} 
                                            onChange={(e) => setCouponcode(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="submit" 
                                            placeholder="submit" 
                                            className='btn btn-danger'
                                        />
                                        </div>
                                        </form>
            </div>
           </div>
        </div>
     </section>
    </div>
  )
}

export default Addoffer
