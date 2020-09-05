import React, { useState, useEffect } from 'react';
// import ReCaptcha from '../Components/ReCaptcha';
import axios from 'axios';

const Welcome = () => {

  const [ data, setData ] = useState([]);

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
        Welcome to our app 
        {/* <ReCaptcha
          sitekey="your_site_key"
          action='action_name'
        /> */}
      {data.map((item) => { 
        return<p> nombre: {item.name} </p>
        })}
    </div>
  )
}

export default Welcome;
