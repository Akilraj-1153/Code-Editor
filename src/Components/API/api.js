const axios = require("axios"); // legacy way

// Create an Axios instance with the base URL
const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

// Function to get runtimes
const getRuntimes = async () => {
  try {
    const response = await API.get("/runtimes");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching runtimes:", error);
  }
};

getRuntimes();
