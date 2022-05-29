import axios from "axios";
import { BASE_URL } from "../Utils/Constants";

export default axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
});