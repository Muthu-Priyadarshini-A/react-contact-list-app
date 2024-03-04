import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    };

    return (
        <div className='container-fluid bg-dark' style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '50px' }}>
            <div className='container bg-dark'>
                <div className='row'>
                    
                    <div className='col-md-10 mx-auto bg-dark'>
                        <table className='table table-hover bg-body-info table-striped table-dark'>
                            <thead className=' bg-dark text-center'>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Number</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, id) => (
                                    <tr key={id} className='text-center'>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-small btn-secondary me-2'>Edit</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
