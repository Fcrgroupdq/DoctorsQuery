'use client'

import React  from 'react';
import { useEffect,useState } from 'react';
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import HospitalCart from './hospitalCart'
import SearchSection from '../doctors/searchSection'

const HospitaltopSection = () => {
  const [hospital, setHospital] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true; // To track whether the component is mounted or not
    setLoading(true);
    axios.get(`https://gold-walkingstick-cuff.cyclic.app/hospital`, {
      headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGIxMzVhNjE2ODI3MTI1YTZkODBlYzMiLCJpYXQiOjE2OTE5ODU2NjJ9.QMLluG2_p6ycE8VN5OWNp5NPFYTcAHafLqig3TX-N78",
      },
    })
      .then(res => {
        if (isMounted) {
          setHospital(res.data);
          setLoading(false);
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  function getLocationFromChild(lat, lon) {
    alert(`lat: ${lat}, lon: ${lon}`)
  }

  if (loading) {
    return <ChakraProvider>
      <div style={{ width: '30px', margin: "auto", marginTop: "8px" }}>
        <Spinner />
      </div>
    </ChakraProvider>
  }

  return (
    <div>
      <SearchSection getLocationFromChild={getLocationFromChild} />
      {
        hospital.map(item => <HospitalCart key={Math.random()} data={item} />)
      }
    </div>
  )
}

export default HospitaltopSection
