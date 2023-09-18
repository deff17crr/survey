import {getAuthToken} from "./authToken";
import axios from "axios";

const baseUrl = 'http://localhost:8080/api';

export const fetch = (uri: string, params = {}) => {
  //const authToken = getAuthToken(); or implement authentication

  const defaults = {
    'url': (baseUrl + uri),
    'headers': {
      'Accept': 'application/ld+json',
    },
  };

  const config = {
    ...defaults,
    ...params,
  };

  return axios.request(config);
}