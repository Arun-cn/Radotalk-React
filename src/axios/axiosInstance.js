import axios from 'axios';

const axiosInstance = axios.create({
      baseURL: 'http://localhost:3000', // Replace this with your chat API endpoint
        timeout: 5000, // Adjust timeout as needed
          headers: {
                'Content-Type': 'application/json',
                    // Add any additional headers you need for authentication or other purposes
          }
        });

        // Add a request interceptor to include the JWT token in the headers if available
        axiosInstance.interceptors.request.use(
              config => {
                    const token = localStorage.getItem('jwtToken'); // Assuming you store the JWT token in local storage
                        if (token) {
                          ui
                                  config.headers.Authorization = `Bearer ${token}`;
                        }
                            return config;
                    },
                      error => {
                            return Promise.reject(error);
                      });

                      export default axiosInstance;
