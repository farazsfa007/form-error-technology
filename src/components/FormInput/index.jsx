import React, { useState } from 'react';
import './index.css'

function FormInput() {
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const validate = () => {
        if (!form.name || !form.email) return 'Name and Email are required';
        if (!/\S+@\S+\.\S+/.test(form.email)) return 'Invalid email format';
        return '';
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        setSuccess('');
        const validationError = validate();
        if (validationError) return setError(validationError);

        try {
        const res = await fetch('http://localhost:5000/webhook/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Submission failed');
        setSuccess('Lead submitted!');
        setForm({ name: '', email: '', company: '', message: '' });
        } catch {
        setError('Submission failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name*" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email*" value={form.email} onChange={handleChange} required />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
        <button type="submit">Submit</button>
        {error && <div style={{color:'red'}}>{error}</div>}
        {success && <div style={{color:'green'}}>{success}</div>}
        </form>
    );
}

export default FormInput