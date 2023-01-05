import React, { useState, useEffect } from "react";
import "./index.css";

const FloorComp = ({ floorId, SectorData }) => {
  return (
    <>
      {SectorData.map((item) =>
        item.floor === floorId ? <li key={item.id}>{item.sector_name}</li> : ""
      )}
    </>
  );
};

export default FloorComp;
