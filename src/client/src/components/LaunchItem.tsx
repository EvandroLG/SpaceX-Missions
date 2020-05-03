import React from "react";
import { Link } from "react-router-dom";

import ILaunch from "../interfaces/ILaunch";

const LaunchItem: React.FC<ILaunch> = ({
  flight_number,
  mission_name,
  launch_date_local,
  launch_success,
}) => {
  return (
    <div>
      <h4>Mission: {mission_name}</h4>
      <p>Date: {launch_date_local}</p>
      <Link to={`/launch/${flight_number}`}>Launch Details</Link>
    </div>
  );
};

export default LaunchItem;
