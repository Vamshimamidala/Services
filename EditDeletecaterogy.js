import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditDeleteCategory = () => {
    const [data, setData] = useState([]);  
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [editingId, setEditingId] = useState(null);  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/addcat`);
                setData(response.data);
            } catch (err) {
                alert("Error fetching categories");
            }
        };

        fetchData();
    }, []);

    const deletecat = async (aid) => {
        try {
            await axios.delete(`http://localhost:4000/addcat/${aid}`);
            alert("Category deleted successfully");
            setData(data.filter(addCaterogy => addCaterogy._id !== aid));  
        } catch (err) {
            alert("Failed to delete the category");
        }
    };

    const editcat = (cat) => {
        
        setEditingId(cat._id);  
        setName(cat.name);
        setDes(cat.des);
    };

    const updatecat = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/addcat/${editingId}`, { name, des });
            alert("Category updated successfully");
            
            
            setData(data.map(cat => (cat._id === editingId ? { ...cat, name, des } : cat)));
            setEditingId(null);  
            setName("");
            setDes("");
        } catch (err) {
            console.error(err);
            alert("Failed to update the category");
        }
    };

    return (
        <div>
            <section className="py-5" style={{ backgroundColor: '#f7f7f7' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Available Categories</h2>
                            <div className="table-responsive">
                                <table className="table table-hover table-striped shadow-lg">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((addcat) => (
                                                <tr key={addcat._id}>
                                                    <td>{addcat.name}</td>
                                                    <td>{addcat.des}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-danger"
                                                            style={{ borderRadius: '10px' }}
                                                            onClick={() => deletecat(addcat._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-dark"
                                                            style={{ borderRadius: '10px' }}
                                                            onClick={() => editcat(addcat)}
                                                        >
                                                            Update
                                                        </button>
                                                    </td>
                                                     
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No categories available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {editingId && (
                                <div className="mt-5">
                                    <h4 className="text-center mb-3">Edit Category</h4>
                                    <form onSubmit={(e) => { e.preventDefault(); updatecat(); }}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="des">Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="des"
                                                value={des}
                                                onChange={(e) => setDes(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-success">Save Changes</button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary ml-3"
                                            onClick={() => {
                                                setEditingId(null);  
                                                setName("");
                                                setDes("");
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EditDeleteCategory;
