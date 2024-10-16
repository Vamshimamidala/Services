import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Editservice = () => {
  const [catname,setCatname]=useState("");
  const[subname,setSubname]=useState("");
  const[comname,setComname]=useState("");
  const [servicename,setServicename]=useState("")
  const[serivceaddress,setSerivceaddress]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[description,setDescription]=useState("");
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // Fetching offers on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:4000/service");
                setData(res.data);
            } catch (err) {
                console.error("Failed to fetch data", err);
                alert("Failed to load offers. Please try again.");
            }
        };
        fetchData();
    }, []);

    // Deleting an offer
    const deleteOffer = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/service/${id}`);
            setData(data.filter(offer => offer._id !== id));
            alert("Offer deleted successfully.");
        } catch (err) {
            console.error("Failed to delete data", err);
            alert("Failed to delete offer.");
        }
    };

    // Editing an service
    const editOffer = (service) => {
        setEditingId(service._id);
        setCatname(service.catname)
            setSubname(service.subname);
            setComname(service.comname);
            setServicename(service.servicename)
            setSerivceaddress(service.serivceaddress);
            setEmail(service.email);
            setPhone(service.phone);
            setDescription(service.description);
        
    };

    // Updating an service
    const updateOffer = async () => {
        try {
            await axios.put(`http://localhost:4000/service/${editingId}`, {catname,subname,comname,servicename,serivceaddress,email,phone,description });
            setData(data.map(service => (service._id === editingId ? { ...service, catname,subname,comname,servicename,serivceaddress,email,phone,description } : service)));
            setEditingId(null);
            setCatname("")
            setSubname("");
            setComname("");
            setServicename("")
            setSerivceaddress("");
            setEmail("");
            setPhone("");
            setDescription("");
            alert("Service  updated successfully.");
        } catch (err) {
            console.error("Failed to update offer", err);
            alert("Failed to update service.");
        }
    };

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Available Services</h2>
                            <div className="table-responsive">
                                <table className="table table-hover table-striped shadow-lg">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">category Name</th>
                                            <th scope="col">subcaterogy Name</th>
                                            <th scope="col">Company name</th>
                                            <th scope="col">Service name</th>
                                            <th scope="col">Service Address</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Description</th>
                                             
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((service) => (
                                                <tr key={service._id}>
                                                    <td>{service.catname}</td>
                                                    <td>{service.subname}</td>
                                                    <td>{service.comname}</td>
                                                    <td>{service.servicename}</td>
                                                    <td>{service.serivceaddress}</td>
                                                    <td>{service.email}</td>
                                                    <td>{service.phone}</td>
                                                    <td>{service.description}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-danger"
                                                            style={{ borderRadius: '10px', marginRight: '5px' }}
                                                            onClick={() => deleteOffer(service._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            className="btn btn-dark"
                                                            style={{ borderRadius: '10px' }}
                                                            onClick={() => editOffer(service)}
                                                        >
                                                            Update
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No Service available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Edit Form */}
                            {editingId && (
                               <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4 py-4'>
                                    <div className="mb-4">
                                    <h4 className="text-center mb-3">Edit Offer</h4>
                                    <form onSubmit={(e) => { e.preventDefault(); updateOffer(); }}>
                                        <InputField
                                            label="Offer Name"
                                            value={catname}
                                            onChange={(e) => setCatname(e.target.value)}
                                        />
                                        <InputField
                                            label="Coupon Code"
                                            value={subname}
                                            onChange={(e) => setSubname(e.target.value)}
                                        />
                                        <InputField
                                            label="Coupon Code"
                                            value={comname}
                                            onChange={(e) => setComname(e.target.value)}
                                        />
                                         <InputField
                                            label="Coupon Code"
                                            value={servicename}
                                            onChange={(e) => setServicename(e.target.value)}
                                        />
                                        <InputField
                                            label="Coupon Code"
                                            value={serivceaddress}
                                            onChange={(e) => setSerivceaddress(e.target.value)}
                                        />
                                        <InputField
                                            label="Coupon Code"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <InputField
                                            label="Coupon Code"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <InputField
                                            label="Coupon Code"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <button type="submit" className="btn btn-success">Save Changes</button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary ml-3"
                                            onClick={() => {
                                                setEditingId(null);
                                                setCatname("")
                                                setSubname("");
                                                setComname("");
                                                setServicename("");
                                                setSerivceaddress("");
                                                setEmail("");
                                                setPhone("");
                                                setDescription("");
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </form>
                                </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

 
const InputField = ({ label, value, onChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            type="text"
            className="form-control"
            value={value}
            onChange={onChange}
            required
        />
    </div>
);

 

export default Editservice