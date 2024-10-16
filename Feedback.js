import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Feedback = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/feedback/")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);  

    const deleteoffer = (id) => {
        axios.delete(`http://localhost:4000/feedback/${id}`)
            .then((res) => {
                alert("Offer deleted successfully.");
                setData(data.filter(feedback => feedback._id !== id));  
            })
            .catch((err) => {
                alert("Failed to delete the offer. Please try again.");
            });
    };

    return (
        <div>
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Available Feedback</h2>
                            <div className="table-responsive">
                                <table className="table table-hover table-striped shadow-lg">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Adress</th>
                                            <th scope="col">Rate ur service</th>
                                            <th scope="col" className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((feedback) => (
                                                <tr key={feedback._id}>
                                                    <td>{feedback.name}</td>
                                                    <td>{feedback.phone}</td>
                                                    <td>{feedback.email}</td>
                                                    <td>{feedback.address}</td>
                                                    <td>{feedback.ratesus}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-danger"
                                                            style={{ borderRadius: '20px' }}
                                                            onClick={() => deleteoffer(feedback._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No Feed available</td>
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
    );
};


export default Feedback
