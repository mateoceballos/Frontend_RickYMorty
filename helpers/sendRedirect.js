import axios from "axios";

// Internal function
async function sendRedirect(
  endpoint,
  data,
  method = "GET",
  headers = {
    "Content-Type": "application/json",
  }
) {
  // URL base para las peticiones al BackEnd
  const API_URL = "http://localhost:5000/";
  const url = API_URL + endpoint;

  try {
    const response = await axios({ url, data, method, headers });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default sendRedirect;
