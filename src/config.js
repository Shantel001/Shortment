import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://shortment.onrender.com/api/v1/", // Replace with your API endpoint
  headers: {
    "Content-Type": "application/json",
     // 'Authorization': 'Bearer YOUR_API_TOKEN' // Replace with your API token
  },
});
