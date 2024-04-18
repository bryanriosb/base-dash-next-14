import axios, { AxiosInstance } from 'axios'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { selectedEnvironment } from '.'
import { refreshToken } from './refresh'

const config = {
	baseURL: selectedEnvironment.BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
}

// Request to api without authentication
export const api: AxiosInstance = axios.create(config)

// Request to api with authentication and refresh token
const apiAuth: AxiosInstance = axios.create(config)

apiAuth.interceptors.request.use(
	async (request) => {
		const session = await getServerSession(authOptions)
		request.headers[
			'Authorization'
		] = `Bearer ${session?.user.tokens.access}`
		return request
	},
	(err) => err
)

apiAuth.interceptors.response.use(
	async (response) => {
		return response
	},
	async (error) => {
		const originalRequest = error.config
		const session = await getServerSession(authOptions)

		if (error.response.status === 401 && !originalRequest.sent) {
			originalRequest.sent = true

			try {
				const tokens = await refreshToken()
				if (tokens && session) {
					session.user.tokens.access = tokens.access

					const authorization = `Bearer ${tokens.access}`
					originalRequest.headers['Authorization'] = authorization

					// Retry the original request with new authorization
					return axios(originalRequest)
				}
			} catch (refreshError) {
				console.error('Error refreshing token:', refreshError)
				return Promise.reject(error)
			}
		}

		return Promise.reject(error)
	}
)

export default apiAuth
