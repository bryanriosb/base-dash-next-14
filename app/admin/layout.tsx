import Sidebar from '@/components/admin-layout/sidebar'
import Header from '@/components/admin-layout/header'

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section>
			<div className='grid h-screen w-full pl-[3.5rem]'>
				<Sidebar />
				<div className='flex flex-col'>
					<Header />
					<main className='grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3'>
						{children}
					</main>
				</div>
			</div>
		</section>
	)
}
