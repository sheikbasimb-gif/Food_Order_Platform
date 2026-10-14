import axios from 'axios';

// Base Axios Instance pointing to Spring Boot Backend API
const API_BASE_URL = '/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Health check API service call
 */
export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('Failed to reach backend health endpoint:', error);
    return {
      success: false,
      message: 'Backend API is unreachable',
    };
  }
};
