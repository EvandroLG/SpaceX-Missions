import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Launch from "./components/Launch";
import Launches from "./components/Launches";
import "./App.css";

import { apolloClientUrl } from "./config";

const client = new ApolloClient({
  uri: apolloClientUrl,
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <h1>SpaceX</h1>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
