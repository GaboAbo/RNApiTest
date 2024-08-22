import axios from "axios";

export default class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getAll(endpoint) {
    try {
      const response = await axios.get(`${this.baseURL}${endpoint}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}`, error);
      throw error;
    }
  }

  async getById(endpoint, id) {
    try {
      const response = await axios.get(`${this.baseURL}${endpoint}/${id}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint} with the ID ${id}`, error);
      throw error;
    }
  }

  async create(endpoint, data) {
    try {
      const response = await axios.post(`${this.baseURL}${endpoint}/`, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating the ${endpoint} instance`, error);
      throw error;
    }
  }

  async update(endpoint, id, data) {
    try {
      const response = await axios.put(
        `${this.baseURL}${endpoint}/${id}/`,
        data,
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating the ${endpoint} instance`, error);
      throw error;
    }
  }

  async delete(endpoint, id) {
    try {
      const response = await axios.delete(`${this.baseURL}${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting the ${endpoint} instance`, error);
      throw error;
    }
  }
}
