import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    const data = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const dataJson = await data.json();
    return dataJson;
  } catch (err) {
    throw err;
  }
};
