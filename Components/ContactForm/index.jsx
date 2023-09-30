"use client"
import React, { useState } from 'react';
import './style.scss';
import {
  Alert,
  AlertIcon
} from '@chakra-ui/react'

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Send the message to the specified email address using your backend logic.
    // You can use Axios or fetch to make an API request to your server here.
    try {
      // Replace this with your actual API call to send the message
      // Example using fetch:
      const response = await fetch('/api/MessageEmail', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data.success) {
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
        }, 5000);
      }
    } catch (error) {
      setError('An error occurred while sending the message.');
    }
  };

  return (
    <div className='SectionContainer'>
      {showAlert && (
        <div className='AlerBox'>
          <Alert status='success' variant='subtle'>
            <AlertIcon width="50px" />
            Your Message Have Been Send Succefully we will Get back to you soon
          </Alert>
        </div>
      )}
      <div className='Content'>
        <h2>Ask A Question</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name='Message'
            id='Message'
            cols='30'
            rows='6'
            placeholder='Enter Your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className='submit' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
