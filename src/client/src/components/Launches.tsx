import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import ILaunch from "../interfaces/ILaunch";
import LaunchItem from "./LaunchItem";

const query = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, data } = useQuery(query);

  return (
    <>
      <h1>Launches</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.launches.map((launch: ILaunch, i: number) => (
          <LaunchItem key={i} {...launch} />
        ))
      )}
    </>
  );
};

export default Launches;
