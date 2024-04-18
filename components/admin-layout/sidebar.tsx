'use client'
import { FastForward } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { SIDEBAR_LINKS } from '@/config/constants/sidebar'
import { SideBarMenuItem } from '@/types/sidebar'
import BuildTooltip from '../ui/tooltip/build'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
	return (
		<aside className='inset-y fixed  left-0 z-20 flex h-full flex-col border-r'>
			<div className='border-b p-2'>
				<Button variant='outline' size='icon' aria-label='Home'>
					<Link href='/admin'>
						<FastForward className='size-5 fill-foreground' />
					</Link>
				</Button>
			</div>
			<nav className='grid gap-1 p-2'>
				{SIDEBAR_LINKS.map((link) => {
					return (
						<BuildTooltip
							key={link.title}
							trigger={SidebarItem(link)}
							content={link.title}
						></BuildTooltip>
					)
				})}
			</nav>
		</aside>
	)
}

function SidebarItem({ ...props }: SideBarMenuItem) {
	const pathname = usePathname()
	const LinkIcon = props.icon
	return (
		<Link href={props.href}>
			<Button
				className={`${
					pathname === props.href && 'bg-accent'
				} rounded-lg`}
				variant='ghost'
				size='icon'
				aria-label={props.label}
			>
				<LinkIcon className='size-5' />
			</Button>
		</Link>
	)
}
