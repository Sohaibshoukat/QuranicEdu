"use client"

import React, { useMemo, useState } from 'react';
import countryList from 'react-select-country-list';
import { CoursesName } from '../../Content/index';
import {
    Alert,
    AlertIcon
} from '@chakra-ui/react'
import './style.scss';

const Index = () => {
    const options = useMemo(() => countryList().getData(), []);
    const countries = options.map((a) => a.label);

    const [showAlert, setShowAlert] = useState(false);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        country: '',
        teacherGender: '',
        course: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        gender: '',
        country: '',
        teacherGender: '',
        course: '',
    });

    const validateEmail = (email) => {
        // Basic email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        // Validate required fields
        for (const key in formData) {
            if (formData[key] === '') {
                errors[key] = 'This field is required';
            }
        }

        // Validate email format
        if (!validateEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }

        // If there are errors, update the state and don't submit the form
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        // If no errors, send the form data to your server
        try {
            // Replace this URL with your server endpoint for sending emails
            const response = await fetch('/api/sendEmail', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(
                    formData
                )
            })
            // Handle the response as needed (e.g., show a success message)
            const data = await response.json();
            if (data.success) {
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false)
                }, 3000);
            }

        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error submitting form', error);
        }
    };

    return (
        <div className="containerEnroll">
            {showAlert && (
                <div className='AlerBox'>
                    <Alert status='success' variant='subtle'>
                        <AlertIcon width="50px" />
                        Your Enrollment has been recived by us we will get back to you soon
                    </Alert>
                </div>
            )}
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <div className="Formsec">
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.name && <span className="error">{formErrors.name}</span>}
                    </div>
                    <div className="Formsec">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.email && <span className="error">{formErrors.email}</span>}
                    </div>
                    <div className="Formsec">
                        <label htmlFor="gender">Gender:</label>
                        <select
                            name="gender"
                            id="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {formErrors.gender && <span className="error">{formErrors.gender}</span>}
                    </div>
                    <div className="Formsec">
                        <label htmlFor="country">Country:</label>
                        <select
                            name="country"
                            id="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select</option>
                            {countries.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        {formErrors.country && <span className="error">{formErrors.country}</span>}
                    </div>
                    <div className="Formsec">
                        <label htmlFor="teacherGender">Teacher Gender:</label>
                        <select
                            name="teacherGender"
                            id="teacherGender"
                            value={formData.teacherGender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {formErrors.teacherGender && <span className="error">{formErrors.teacherGender}</span>}
                    </div>
                    <div className="Formsec">
                        <label htmlFor="course">Your Course:</label>
                        <select
                            name="course"
                            id="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select a Course</option>
                            {CoursesName.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        {formErrors.course && <span className="error">{formErrors.course}</span>}
                    </div>
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Index;
