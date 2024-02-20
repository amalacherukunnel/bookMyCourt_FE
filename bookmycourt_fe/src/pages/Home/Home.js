import React, { useEffect, useState } from 'react';
import MainNavBar from '../../components/NavBar/MainNavBar';
import axiosInstance from '../../config/AxiosInstance';
import CourtCards from '../../components/courtCards/CourtCards';

function Home() {
  const [courtData, setCourtData] = useState([]);

  useEffect(() => {
    getCourtsData();
  }, []);

  const getCourtsData = () => {
    axiosInstance.get('/users/getCourtsData')
      .then((res) => {
        setCourtData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MainNavBar />
      <div className="container-fluid">
        <div className="row gap-2 p-2">
          {courtData.map((court) => <CourtCards key={court._id} court={court} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
