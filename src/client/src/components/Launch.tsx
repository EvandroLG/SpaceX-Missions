import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps, Link } from "react-router-dom";

const query = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
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

type PropType = RouteComponentProps<{ flight_number: string }>;

const Launch = ({ match }: PropType) => {
  const { loading, data } = useQuery(query, {
    variables: { flight_number: parseInt(match.params.flight_number, 10) },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const {
    mission_name,
    flight_number,
    launch_success,
    rocket: { rocket_id, rocket_type, rocket_name },
  } = data.launch;

  return (
    <div>
      <h1>{mission_name}</h1>
      <Link to="/">Back</Link>

      <h3>Launch Details</h3>
      <ul>
        <li>
          <strong>Launch Success:</strong> {launch_success}
        </li>

        <li>
          <strong>Flight number:</strong> {flight_number}
        </li>
      </ul>

      <h3>Rocket Details</h3>
      <ul>
        <li>
          <strong>Rocket ID:</strong> {rocket_id}
        </li>

        <li>
          <strong>Rocket Name:</strong> {rocket_name}
        </li>

        <li>
          <strong>Rocket Type:</strong> {rocket_type}
        </li>
      </ul>
    </div>
  );
};

export default Launch;
