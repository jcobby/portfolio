"use client";

import axios from "axios";
import { useFormik } from "formik";
import React, { use, useEffect } from "react";

import { useState } from "react";

function LoginComp() {
//   const [item, setItem] = useState("");
//   const [password, setPassword] = useState("");

const [details, setDetails] = useState([]);
const [reload,setReload] = useState(false);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
// submit to api endpoint

try {
    const response = await axios.post('https://6562586fee04015769a6588c.mockapi.io/api/login/credentials', {
      // Your request payload or data goes here
      values,
    //   key2: 'value2',
    });

    console.log('Response:', response.data);
    // Process the response data or perform other actions here
  } catch (error) {
    console.error('Error posting data:', error.message);
    // Handle the error, show an error message, or perform other error-handling tasks
  }
}


    },
  );

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await axios.get('https://6562586fee04015769a6588c.mockapi.io/api/login/credentials');
          console.log('Data:', response.data);
          // Process the data or perform other actions here
    setDetails(response.data)
        } catch (error) {
          console.error('Error fetching data:', error.message);
          // Handle the error, show an error message, or perform other error-handling tasks
        }
      }

      fetchData();
      setReload(false)

  },[reload])
  
  
  // Call the function

  return (
    <div className="my-40 w-1/2 translate-x-1/2">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2">
          <input
          id="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            className=""
            onChange={formik.handleChange}
          />
          <input
          id="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className=""
          />
          <button
            type="submit"
            onClick={() => {alert("Login Successful") 
            setReload(true)}}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Login
          </button>
        </div>
      </form>
      <div>
      {details ? details.map((item, index) => (
    <div key={index}>
      
      {item.values && <p>Email: {item.values.email}</p>}    </div>
  )) : null}
      </div>
    </div>
  );
}

export default LoginComp;
