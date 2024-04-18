import { authenticate } from '@/lib/services/axios/authentucate'
import NextAuth, { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
	// Configure one or more authentication providers
	secret: process.env.JWT_SECRET,
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'demo',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				const response = await authenticate(credentials)
				return response
			},
		}),
	],
	session: { strategy: 'jwt' },
	callbacks: {
		async jwt({ token, user, account }) {
			return { ...token, ...user }
		},
		async session({ session, token, user }) {
			session.user = token as any
			return session
		},
	},
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
