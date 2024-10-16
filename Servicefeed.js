import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Servicefeed = () => {
     const [data,setData]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/servicefeed`);
                setData(response.data);
            } catch (err) {
                alert("Error fetching services");
            }
        };

        fetchData();
    }, []);
    const deleteservice=async(sid)=>{
     
        try {
            const response = await axios.delete(`http://localhost:4000/servicefeed/${sid}`);
            alert("Service deleted ")
            setData(data.filter(service => service._id !== sid));  
        } catch (err) {
            alert("Error fetching services");
        }
    }
  return (
    <div>
       <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Available Services</h2>
                            <div className="table-responsive">
                                <table className="table table-hover table-striped shadow-lg">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Address</th>
                                            <th scope="col" className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((service) => (
                                                <tr key={service._id}>
                                                    <td>{service.name}</td>
                                                    <td>{service.phone}</td>
                                                    <td>{service.email}</td>
                                                    <td>{service.address}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-danger"
                                                            style={{ borderRadius: '20px' }}
                                                            onClick={() => deleteservice(service._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No service available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Servicefeed