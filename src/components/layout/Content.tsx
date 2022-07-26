import { Route, Routes } from 'react-router-dom'
import { routes } from '../../routes/routes'

interface ComponentProps {
	any?: any
}

export type ContentProps = ComponentProps

export const Content: React.FC<ContentProps> = () => {
	return (
		<Routes>
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
