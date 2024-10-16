import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditOffer = () => {
    const [offername, setOffername] = useState("");
    const [couponcode, setCouponcode] = useState("");
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // Fetching offers on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:4000/addoffer");
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
            await axios.delete(`http://localhost:4000/addoffer/${id}`);
            setData(data.filter(offer => offer._id !== id));
            alert("Offer deleted successfully.");
        } catch (err) {
            console.error("Failed to delete data", err);
            alert("Failed to delete offer.");
        }
    };

    // Editing an offer
    const editOffer = (offer) => {
        setEditingId(offer._id);
        setOffername(offer.offername);
        setCouponcode(offer.couponcode);
    };

    // Updating an offer
    const updateOffer = async () => {
        try {
            await axios.put(`http://localhost:4000/addoffer/${editingId}`, { offername, couponcode });
            setData(data.map(offer => (offer._id === editingId ? { ...offer, offername, couponcode } : offer)));
            setEditingId(null);
            setOffername("");
            setCouponcode("");
            alert("Offer updated successfully.");
        } catch (err) {
            console.error("Failed to update offer", err);
            alert("Failed to update offer.");
        }
    };

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Available Offers</h2>
                            <div className="table-responsive">
                                <table className="table table-hover table-striped shadow-lg">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Offer Name</th>
                                            <th scope="col">Coupon Code</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((offer) => (
                                                <tr key={offer._id}>
                                                    <td>{offer.offername}</td>
                                                    <td>{offer.couponcode}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-danger"
                                                            style={{ borderRadius: '10px', marginRight: '5px' }}
                                                            onClick={() => deleteOffer(offer._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            className="btn btn-dark"
                                                            style={{ borderRadius: '10px' }}
                                                            onClick={() => editOffer(offer)}
                                                        >
                                                            Update
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No offers available</td>
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
                                            value={offername}
                                            onChange={(e) => setOffername(e.target.value)}
                                        />
                                        <InputField
                                            label="Coupon Code"
                                            value={couponcode}
                                            onChange={(e) => setCouponcode(e.target.value)}
                                        />
                                        <button type="submit" className="btn btn-success">Save Changes</button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary ml-3"
                                            onClick={() => {
                                                setEditingId(null);
                                                setOffername("");
                                                setCouponcode("");
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

export default EditOffer;
