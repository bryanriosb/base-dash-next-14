import { SideBarMenuItem } from '@/types/sidebar'
import {
    CircleUserRound,
	LayoutDashboard,
	LifeBuoy,
	Package,
	ShoppingCart,
	SquareUser,
	UsersRound,
} from 'lucide-react'


export const SIDEBAR_LINKS: SideBarMenuItem[] = [
	{
		href: '/admin',
		title: 'Tablero',
		label: 'Dashboard',
		icon: LayoutDashboard,
	},
	{
		href: '/admin/products',
		title: 'Producto',
		label: 'Product',
		icon: Package,
	},
	{
		href: '/admin/orders',
		title: 'Ordenes',
		label: 'Orders',
		icon: ShoppingCart,
	},
	{
		href: '/admin/customers',
		title: 'Clientes',
		label: 'Customers',
		icon: UsersRound,
	}
]
