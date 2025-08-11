import axios from 'axios';


const API = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api',
});


API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
}, (error) => {
  return Promise.reject(error);
});


API.interceptors.response.use(
  (response) => response.data, 
  (error) => {
    
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);


export const login = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    return response; 
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const register = async (userData) => {
  try {
    const response = await API.post('/auth/register', userData);
    return response; 
  } catch (error) {
    throw error.response?.data || error;
  }
};
export const getWeatherStatus = async () => {
    const token = localStorage.getItem('token');
    return axios.get('/api/weather', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
};

export const getProtectedData = () => API.get('/some-protected-route');
export const getAdminPolicies = () => API.get('/admin/policies');
export const getAdminFarmers = () => API.get('/admin/farmers');
export const uploadFarmersCsv = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return API.post('/admin/upload-farmers', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
};
export const getFarmerDashboard = () => API.get('/farmer/my-dashboard');
