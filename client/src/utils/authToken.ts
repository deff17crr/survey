let AUTH_TOKEN_NAME_KEY = 'AUTH_TOKEN';
let generateToken = (): string => {
  const randomAuthToken = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
  localStorage.setItem(AUTH_TOKEN_NAME_KEY, randomAuthToken);

  return randomAuthToken;
}

export const getAuthToken = (): string => {
  let token = localStorage.getItem(AUTH_TOKEN_NAME_KEY);
  if (!token) {
    token = generateToken();
  }

  return token;
}