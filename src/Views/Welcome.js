import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Footer from '../Components/Footer';

const Welcome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let api = process.env.REACT_APP_BREAKINGBAD
      const response = await axios.get(api)
      setData(response.data)
    }
    getData()
  }, [])
  console.log('data', data);
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