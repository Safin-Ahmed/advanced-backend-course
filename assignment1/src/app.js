const express = require("express");
const cors = require("cors");
const generateRandomNumber = require("./services/random");
const generateFakeProfile = require("./services/fakeProfile");
const countChars = require("./services/chars");

// Express App
const app = express();

// Body parser middleware
app.use(express.json());
// CORS middleware
app.use(cors());

// Generate random number api route
app.get("/api/generator", (req, res) => {
  try {
    // converting query params to number
    const start = +req.query.start;
    const end = +req.query.end;

    // user input validation
    if ((!start && !end) || !start || !end) {
      throw new Error("Invalid Query Params!");
    }
    // sending response
    res.status(200).json({
      start,
      end,
      result: generateRandomNumber(start, end),
    });
  } catch (err) {
    // error handling
    res.status(422).json({
      message: "Invalid query params",
    });
  }
});

// Generate a fake profile route
app.get("/api/profile-maker", (req, res) => {
  try {
    // Extracting properties from query params
    const { properties } = req.query;
    // Spliting the properties and mapping the items to return a brand new array with lowercase property strings
    const parameters = properties.split(",").map((item) => item.toLowerCase());
    // Validations
    if (!parameters.length > 0) throw new Error("Please select a parameter");

    // Sending back response with parameters and profile
    res.status(200).json({
      parameters,
      profile: generateFakeProfile(parameters),
    });
  } catch (err) {
    // Error handling
    res.status(422).json({
      message: err.message,
    });
  }
});

// String Checker Api Route
app.get("/api/string-checker", (req, res) => {
  try {
    // extract the text from request query params to check with string checker
    const str = req.query.text?.trim();

    // Validation
    if (!str || str.length < 0) throw new Error("Invalid query params!");

    // Sending Response with result
    res.status(200).json(countChars(str));
  } catch (err) {
    // Error validation
    res.status(422).json({
      message: err.message,
    });
  }
});

// server listening for requests
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
