import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const useSessionValidation = () => {
    const { data: session } = useSession()
	const router = useRouter()

	useEffect(() => {
		const path = session?.user.tokens.access ? '/admin' : '/'
        console.log('path', path)
		router.push(path, { scroll: false })
	}, [session])

    return session?.user
}