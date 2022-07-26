import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { LoginContainer } from './views/login/login.container'

export const App = () => (
	<BrowserRouter>
		<Routes>
			<Route
				path="/login"
				element={<LoginContainer />}
			></Route>
			<Route
				path="/*"
				children
				element={<Layout></Layout>}
			></Route>
		</Routes>
	</BrowserRouter>
)
