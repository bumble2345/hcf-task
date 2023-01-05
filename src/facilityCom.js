import React, { useState, useEffect } from "react";
import "./index.css";
import FloorComp from "./floorComp.js";

const FacilityComp = ({ facilityName, facilityId, floorData, SectorData }) => {
    
  return <>
  <h1 >{facilityName}</h1>
  {floorData.map((item)=> item.facility === facilityId ? <>{item.floor_name}<FloorComp SectorData={SectorData} floorId ={item.id}/></> : '')}
  </>;
};

export default FacilityComp;
