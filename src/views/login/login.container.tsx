import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogInVM } from '../../core/view-models/auth-model/sign-in.model'
import { routePath } from '../../routes/routes'
import { AppState } from '../../store'
import { SessionState } from '../../store/reducer/session'
import { Login } from './login.component'
import { onThunkLogin } from './store'

const LoginContainer = () => {
	const navigate = useNavigate()

	const { loggedIn }: SessionState = useSelector((state: AppState) => state.session)

	const onLogin = (data: LogInVM) => {
		onThunkLogin(data)
	}

	useEffect(() => {
		if (loggedIn) {
			navigate(routePath.pancake)
		}
	}, [loggedIn])

	return <Login onLogin={onLogin} />
}

export default LoginContainer as React.FC
