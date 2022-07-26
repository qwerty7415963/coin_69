import { useNavigate } from 'react-router-dom'
import { Login } from './login.component'

export const LoginContainer = () => {
	const navigate = useNavigate()
	const onLogin = () => {
		navigate('/')
	}
	return <Login onLogin={onLogin} />
}
