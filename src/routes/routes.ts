import React from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { BybitContainer } from '../views/bybit/bybit.container'
import { PancakeContainer } from '../views/pancake/pancake.container'

export interface Route {
	name?: string
	icon?: any
	path?: string
	exact?: boolean
	element?: React.FC
}

export const routes: Route[] = [
	{ path: '/', exact: true },

	{
		name: 'Pancake',
		icon: FaAddressBook,
		path: '/pancake',
		exact: false,
		element: PancakeContainer,
	},
	{
		name: 'Bybit',
		icon: FaAddressBook,
		path: '/bybit',
		exact: false,
		element: BybitContainer,
	},
]
