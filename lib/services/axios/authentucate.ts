import { api } from './auth'

export async function authenticate(
	credentials: Record<'username' | 'password', string> | undefined
) {
	try {
		const response = await api.post('login/', {
			username: credentials?.username,
			password: credentials?.password,
		})
		const user = response.data
		return user ? user : null
	} catch (err) {
		console.error('Cannot singn in:', err)
	}
}
