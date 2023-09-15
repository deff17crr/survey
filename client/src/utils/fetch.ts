import {getAuthToken} from "./authToken";
import axios from "axios";

const baseUrl = 'http://localhost:8080/api';

export const fetch = (uri: string, params = {}) => {
  const authToken = getAuthToken();

  const defaults = {
    'url': (baseUrl + uri),
    'headers': {
      'Accept': 'application/ld+json',
      'AuthToken': authToken,
    },
  };

  const config = {
    ...defaults,
    ...params,
  };

  console.log(config);

  return axios.request(config);
}