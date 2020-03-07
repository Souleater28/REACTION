const createFetchOptions = (method, headers, body) => {
  const result = {};

  result["method"] = method || "GET";

  if (headers) {
    result["headers"] = headers;
  }

  if (body) {
    result["body"] = JSON.stringify(body);
  }

  return result;
};

const fetchErrorHandler = result => {
  if (result.status && result.status >= 400) {
    throw { error: result.message } || "something went wrong";
  }
  return result;
};

export default (url, headers, body, method) => {
  return fetch(url, createFetchOptions(method, headers, body))
    .then(response => response.json())
    .then(result => fetchErrorHandler(result));
};
