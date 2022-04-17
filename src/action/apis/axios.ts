import axios from "axios";
import { apiConfig } from "../../config";

const baseURL = apiConfig.API_URL

const axiosInstance = axios.create({
    baseURL
  });
 

  axiosInstance.get('/foo-bar')

  export default axiosInstance;
