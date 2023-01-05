import React, { useState, useEffect } from "react";
import "./index.css";
import apiAuth from "./api.js";
import FacilityComp from "./facilityCom.js";

const App = () => {
  const [facilityData, setFacilityData] = useState([]);
  const [floorData, setFloorData] = useState([]);
  const [sectorData, setSectorData] = useState([]);
  const getFacilityData = () => {
    apiAuth.get("/api/facility/").then((res) => {
      setFacilityData(res.data);
    });
  };

  const getFloorData = () => {
    apiAuth.get("/api/floor/").then((res) => {
      setFloorData(res.data);
    });
  };

  const getSectorData = () => {
    apiAuth.get("/api/sector/").then((res) => {
      setSectorData(res.data);
    });
  };
  let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });

  // executes when promise is resolved successfully

  countValue
    .then()
    .then(getFloorData)
    .then(getSectorData)
    .catch(function errorValue(error) {
      console.log(error);
    });

  const floorDat = () => {
    try {
      getFloorData();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getFacilityData();
  //   getFloorData();
  //   getSectorData();
  // }, []);
  console.log(facilityData);
  return (
    <>
    <>hi this is trial</>
    <>this is test 1 branch</>
      {facilityData.map((item) => (
        <FacilityComp
          facilityName={item.facility_name}
          facilityId={item.id}
          floorData={floorData}
          SectorData={sectorData}
        />
      ))}
    </>
  );
};

export default App;
