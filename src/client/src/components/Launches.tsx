import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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
  console.log(data);

  return (
    <div>
      <h1>Launches</h1>
      {loading ? <p>Loading...</p> : <div>test</div>}
    </div>
  );
};

export default Launches;
