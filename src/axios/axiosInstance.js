import axios from 'axios';

const axiosInstance = axios.create({
      baseURL: 'http://localhost:3000', // Replace this with your chat API endpoint
        timeout: 5000, // Adjust timeout as needed
          headers: {
                'Content-Type': 'application/json',
                    // Add any additional headers you need for authentication or other purposes
          }
        });
 export default axiosInstance;
