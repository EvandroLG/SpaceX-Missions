const express = require("express");
const cors = require("cors");
const graphqlHttp = require("express-graphql");
const schema = require("./schema");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHttp({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Server is running on port ${port}`));
