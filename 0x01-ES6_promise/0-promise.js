function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 1000);
  });
}
export default getResponseFromAPI;
