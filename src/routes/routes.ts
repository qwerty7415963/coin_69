import React from 'react'
import { FaAddressBook } from 'react-icons/fa'

export interface RouteVM {
	name?: string
	icon?: any
	path?: string
	exact?: boolean
	element?: React.FC
}

const pancakeComponent = React.lazy(() =>
	import('../views/pancake/pancake.container').then((module) => ({
		default: module.PancakeContainer,
	}))
)

const bybitComponent = React.lazy(() =>
	import('../views/bybit/bybit.container').then((module) => ({
		default: module.BybitContainer,
	}))
)

export const routePath = {
	login: '/login',
	pancake: '/pancake',
	bybit: '/bybit',
}

export const routes: RouteVM[] = [
	{ path: '/', exact: true },

	{
		name: 'Pancake',
		icon: FaAddressBook,
		path: routePath.pancake,
		exact: false,
		element: pancakeComponent,
	},
	{
		name: 'Bybit',
		icon: FaAddressBook,
		path: routePath.bybit,
		exact: false,
		element: bybitComponent,
	},
]
