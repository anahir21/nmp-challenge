import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Footer from '../Components/Footer';

const Welcome = () => {
  
  return ( 
    <div>
      <Header />
      <p>separador</p>
      <Footer />
      <Form />
    </div>
  )
}

export default Welcome;