import { Flex, Spinner } from '@chakra-ui/react'
import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const loginComponent = React.lazy(() => import('./views/login/login.container'))

const layoutComponent = React.lazy(() =>
	import('./components/layout/Layout').then((module) => ({
		default: module.Layout,
	}))
)

export const App = () => (
	<BrowserRouter>
		<React.Suspense
			fallback={
				<Flex
					height={'100vh'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Spinner
						thickness={'3px'}
						speed={'0.65s'}
						emptyColor={'gray.200'}
						color={'blue.500'}
						size={'md'}
					/>
				</Flex>
			}
		>
			<Routes>
				<Route
					path={'/login'}
					element={React.createElement(loginComponent)}
				/>
				<Route
					path={'/*'}
					children
					element={React.createElement(layoutComponent)}
				/>
			</Routes>
		</React.Suspense>
	</BrowserRouter>
)
