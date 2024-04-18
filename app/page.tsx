'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useSessionValidation } from '@/lib/hooks/useSessionValidation'

export default function Home() {
	const _ = useSessionValidation()

	return (
		<main className='flex min-h-screen flex-col p-10'>
			<header className='flex justify-between'>
				<h1 className='text-5xl font-bold text-foreground'>Drifti</h1>
				<aside className='flex gap-4'>
					<Button onClick={() => signIn()}>Sign In</Button>
				</aside>
			</header>
		</main>
	)
}
