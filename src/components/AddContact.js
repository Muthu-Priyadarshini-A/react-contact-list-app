import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number);

        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkEmail) {
            return toast.error("This email already exists!");
        }

        if (checkNumber) {
            return toast.error("This number already exists!");
        }

        const data = {
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
            name,
            email,
            number
        };

        dispatch({ type: 'ADD_CONTACT', payload: data });
        toast.success("Contact added successfully!!");
        navigate('/');
    };

    return (
        <div className='container' style={{ backgroundColor: '#000000', minHeight: '100vh', minWidth: '98.9vw', paddingTop: '2px' }}>
            <h1 className='display-3 text-center  text-white'>Add Contact</h1>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5 bg-dark'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <input type='text' placeholder='Name' className='form-control'
                                value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <input type='email' placeholder='Email' className='form-control'
                                value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <input type='tel' placeholder='Phone Number' className='form-control'
                                value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <button type='submit' className='btn btn-dark btn-block'>Add Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;
