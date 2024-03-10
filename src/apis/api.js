import axios from "axios";
import { getToken } from "./token";

export const baseUrl = `http://localhost:8000/api/v1/`;

export const baseUrlClient = `http://localhost:3000/`;

const headers = {
  Authorization: `Bearer ${getToken()}`,
  "Content-Type": "application/json",
};

export const post = async (url, data) => {
  try {
    const res = await axios.post(baseUrl + url, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });
    return { statusCode: res.status, data: res.data };
  } catch (error) {
    // console.log(error)
    throw error;
  }
};

export const patch = async (url, data) => {
  try {
    const res = await axios.patch(baseUrl + url, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });
    return { statusCode: res.status, data: res.data };
  } catch (error) {
    // console.log(error)
    throw error;
  }
};

export const get = async (url) => {
  try {
    const res = await axios.get(baseUrl + url, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });
    return { statusCode: res.status, data: res.data };
  } catch (error) {
    // console.log(error)
    throw error;
  }
};

export const deletethis = async (url) => {
  try {
    const res = await axios.delete(baseUrl + url, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });
    return { statusCode: res.status, data: res.data };
  } catch (error) {
    // console.log(error)
    throw error;
  }
};
