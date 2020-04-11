export default response => {
  if (response.status && status >= 400) {
    throw response.message || "something went wrong";
  }
  return;
};
