import apiAuth from '../axios/auth'

export async function fetchProducts() {
	try {
		const request = await apiAuth.get('products/')
		return request.data
	} catch (err) {
		console.log('Failed to fetch products data', err)
	}
}
