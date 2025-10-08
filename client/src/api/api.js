const URL = 'https://ecommerce-project-technexus-api.onrender.com';

export const fetchProducts = async () => {
	try {
		const response = await fetch(URL);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log('error');
	}
};
