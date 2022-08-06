import { getAuthenticationDetails, updateAuthenticationDetails } from "../models/authModels.js";

// Get auth details
export const getAuthentication = (req, res) => {
  getAuthenticationDetails((err, results) => {
    if (err) res.send(err);

    res.json(results);
  })
}

// Update auth details
export const updateAuthentication = (req, res) => {
  const data = req.body;
  updateAuthenticationDetails(data, (err, results) => {
    if (err) res.send(err);

    res.json(results);
  })
}