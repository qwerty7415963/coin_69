import { Navigate, Route, Routes } from 'react-router-dom'
import { routePath, routes, RouteVM } from '../../routes/routes'

interface ComponentProps {
	any?: any
}

export type ContentProps = ComponentProps

export const Content: React.FC<ContentProps> = () => {
	return (
		<Routes>
			<Route
				path={'/'}
				element={
					<Navigate
						to={routePath.pancake}
						replace
					/>
				}
			/>
			{routes.map((route, idx) => {
				return (
					route.element && (
						<Route
							key={idx}
							path={route.path}
							element={<route.element />}
						/>
					)
				)
			})}
		</Routes>
	)
}
