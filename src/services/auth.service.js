import env from '../environment/env'
const apiurl = env.test

/**
 * login function
 * @param {*} body 
 * @returns 
 */
const login = async (body) => {
  return await fetching(body, apiurl + "login", "POST");
};

/**
 * Register function
 * @param {*} body 
 * @returns 
 */
const register = async (body) => {
  return await fetching(body, apiurl + "register", "POST");
};

/**
 * Send a reset code to the mail given
 * @param {*} body 
 * @returns 
 */
const resetCode = async (body) => {
  return await fetching(body, apiurl + "password/email", "POST");
}

/**
 * Reset user password
 * @param {*} body 
 * @returns 
 */
const resetPassword = async (body) => {
  return await fetching(body, apiurl + "password/reset", "POST");
}

/**
 * Reusable code to fetch data
 * @param {*} body 
 * @param {*} url 
 * @param {*} method 
 * @returns 
 */
const fetching = async (body, url, method) => {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export default{
  login, register, resetCode, resetPassword
}