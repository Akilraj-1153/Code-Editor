import axios from "axios";

// Create an Axios instance with the base URL
const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (servercode, serverlang, serverversion,serverInput) => {
  try {
    const response = await API.post("/execute", {
      language: serverlang,
      version: serverversion,
      files: [
        {
          content: servercode,
        },
      ],
      stdin: serverInput,
    });
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
};
