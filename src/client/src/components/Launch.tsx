import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps } from "react-router-dom";

const query = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = ({ match }: RouteComponentProps<{ flight_number: string }>) => {
  const { loading, data } = useQuery(query, {
    variables: { flight_number: match.params.flight_number },
  });

  return (
    <>
      <h1>Launch</h1>
      {loading ? <p>Loading...</p> : console.log(data)}
    </>
  );
};

export default Launch;
