'use client'

import { Bell, LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '../ui/drawer'
import { signOut } from 'next-auth/react'
import { useSessionValidation } from '@/lib/hooks/useSessionValidation'
// import {
// 	Tooltip,
// 	TooltipContent,
// 	TooltipProvider,
// 	TooltipTrigger,
// } from '../ui/tooltip'

export default function Header() {
	const _ = useSessionValidation()

	return (
		<header className='sticky top-0 z-10 flex h-[57px] items-center justify-between gap-1 border-b bg-background px-4'>
			<h1 className='text-xl font-semibold'>Drifti</h1>
			<section className='flex gap-4'>
				<Drawer>
					<DrawerTrigger asChild>
						<Button
							variant='ghost'
							size='icon'
							className='ml-auto gap-1.5 text-sm'
						>
							<Bell className='size-5' />
						</Button>
					</DrawerTrigger>
					<DrawerContent className='max-h-[80vh]'>
						<DrawerHeader>
							<DrawerTitle>Notificaciones</DrawerTitle>
							<DrawerDescription>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</DrawerDescription>
						</DrawerHeader>

						<div className='grid w-full items-start gap-6 overflow-auto p-4 pt-0'>
							<h1>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Cumque atque ut aspernatur
								dolorem, inventore doloremque, aperiam odio
								fugiat saepe impedit, tempore voluptatibus ex
								voluptatum ducimus adipisci ipsam mollitia
								deserunt ad.
							</h1>
						</div>
					</DrawerContent>
				</Drawer>
				{/* <TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild></TooltipTrigger>
						<TooltipContent
							side='right'
							sideOffset={5}
						></TooltipContent>
					</Tooltip>
				</TooltipProvider> */}
				<Button
					onClick={() => signOut()}
					variant='ghost'
					size='icon'
					className='ml-auto gap-1.5 text-sm'
				>
					<LogOut className='size-5' />
				</Button>
			</section>
		</header>
	)
}
