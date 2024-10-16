import axios from 'axios';
import React, { useState } from 'react'

const Addcaterogy = () => {
    const [name,setName]=useState("");
    const [des,setDes]=useState("");
    const Addedcaterogy= async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:4000/addcat",{name,des});
            alert("Added caterogy")
            setName("");
            setDes("");
        }
        catch(err){
            alert("Fail to add data")
        }
    }
  return (
    <div>
      <section>

        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-4 py-5'>
                <form onSubmit={Addedcaterogy}>
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Name" 
                                            className="form-control p-3" 
                                            value={name} 
                                            onChange={(e) => setName(e.target.value)} 
                                        />
                                        </div>
                                        <div className="mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Description" 
                                            className="form-control p-3" 
                                            value={des} 
                                            onChange={(e) => setDes(e.target.value)} 
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

export default Addcaterogy
