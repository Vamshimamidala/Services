import axios from 'axios';
import React, { useState } from 'react'

const Addservice = () => {
    const [catname,setCatname]=useState("");
    const[subname,setSubname]=useState("");
    const[comname,setComname]=useState("");
    const [servicename,setServicename]=useState("")
    const[serivceaddress,setSerivceaddress]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[description,setDescription]=useState("");
    
    const addservice=async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:4000/service",{catname,subname,comname,servicename,serivceaddress,email,phone,description})
            alert("Service  Added")
            setCatname("")
            setSubname("");
            setComname("");
            setServicename("")
            setSerivceaddress("");
            setEmail("");
            setPhone("");
            setDescription("");

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
            <div className='col-md-7 py-5'>
            <form onSubmit={addservice}>
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="caterogy name" 
                                            className="form-control p-3" 
                                            value={catname} 
                                            onChange={(e) => setCatname(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Sub caterogy name" 
                                            className="form-control p-3" 
                                            value={subname} 
                                            onChange={(e) => setSubname(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Company name" 
                                            className="form-control p-3" 
                                            value={comname} 
                                            onChange={(e) => setComname(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Service  name" 
                                            className="form-control p-3" 
                                            value={servicename} 
                                            onChange={(e) => setServicename(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Service Address" 
                                            className="form-control p-3" 
                                            value={serivceaddress} 
                                            onChange={(e) => setSerivceaddress(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Enter your email" 
                                            className="form-control p-3" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="tel" 
                                            placeholder="Enter your phone number" 
                                            className="form-control p-3" 
                                            value={phone} 
                                            onChange={(e) => setPhone(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Descrption" 
                                            className="form-control p-3" 
                                            value={description} 
                                            onChange={(e) => setDescription(e.target.value)} 
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

 

export default Addservice