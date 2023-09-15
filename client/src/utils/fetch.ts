import {getAuthToken} from "./authToken";
import axios from "axios";

const baseUrl = 'http://localhost:8080/api';

export const fetch = (uri: string, params = {}) => {
  const authToken = getAuthToken();
  const url = baseUrl + uri;

  const defaults = {
    'method': 'GET',
    'headers': {
      'Accept': 'application/ld+json',
      'AuthToken': authToken,
    },
  };

  const config = {
    ...defaults,
    ...params,
  };

  return axios.get(url, config);
}