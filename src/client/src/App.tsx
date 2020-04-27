import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Launches from "./components/Launches";
import "./App.css";

import { apolloClientUrl } from "./config";

const client = new ApolloClient({
  uri: apolloClientUrl,
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <h1>SpaceX</h1>
      <Launches />
    </div>
  </ApolloProvider>
);

export default App;
