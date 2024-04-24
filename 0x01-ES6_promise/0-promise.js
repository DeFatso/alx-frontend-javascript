function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("data");
		}, 1000);
	});
}
export default getResponseFromAPI;
