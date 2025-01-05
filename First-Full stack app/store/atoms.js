const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); // Enable CORS for all routes

const posts = []; // Initialize posts as an empty array

// Your Amadeus API credentials
const client_id = 'put your api id here'; // Replace with your actual client_id 
const client_secret = 'put your api secret here'; // Replace with your actual client_secret 

const getToken = async () => {
  try {
    const response = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token', // Token endpoint
      new URLSearchParams({
        grant_type: 'client_credentials', // The type of authentication you are using
        client_id: client_id, // Your client_id
        client_secret: client_secret, // Your client_secret
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set the correct content type
        },
      }
    );

    // Get the access token from the response
    return response.data.access_token;
  } catch (error) {
    console.error('Error generating token:', error.message);
    return null;
  }
};

const fetchData = async () => {
  const token = await getToken(); // Wait for the token to be generated
  if (!token) {
    console.error("Failed to get token");
    return;
  }

  try {
    // Replace with your actual Amadeus API endpoint and add the necessary headers (Authorization token)
    const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=PAR&chainCodes=EM', {
      headers: {
        'Authorization': `Bearer ${token}`, // Replace with your token
      }
    });

    // Example of how to handle the data, assuming the response structure is like below
    response.data.data.forEach((item) => {
      posts.push({
        id: item.hotelId, // Using hotelId from Amadeus API
        heading: item.name, // Hotel name as the heading
        text: `Chain Code: ${item.chainCode}, IATA Code: ${item.iataCode}`, // Including additional details (chainCode, iataCode)
        latitude: item.geoCode.latitude, // Latitude from geoCode
        longitude: item.geoCode.longitude, // Longitude from geoCode
        country: item.address.countryCode, // Country code from address
        lastUpdated: item.lastUpdate, // Description of the hotel
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

// Call fetchData to get the posts when server starts
fetchData();

// Route to return posts data
app.get("/api/posts", (req, res) => {
  res.json(posts); // Send the posts array as JSON
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
