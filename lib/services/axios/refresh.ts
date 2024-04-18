import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { api } from './auth'

export interface TokensResponse {
	access: string
}

export async function refreshToken(): Promise<TokensResponse | undefined> {
	try {
		const session = await getServerSession(authOptions)

		const refresh = session?.user.tokens.refresh
		if (refresh) {
			const request = await api.post('auth/refresh/', { refresh })
			const accessToken = request.data.access
			const response: TokensResponse = { access: accessToken }
			return response
		}
	} catch (err) {
		console.error(err)
	}
}
