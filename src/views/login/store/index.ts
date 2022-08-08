import { Action, AnyAction, Dispatch } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { catchHandle } from '../../../core/lib/catch-helper'
import { AuthService } from '../../../core/service/auth.service'
import { LogInVM } from '../../../core/view-models/auth-model/sign-in.model'
import { SessionVM } from '../../../core/view-models/session/session.model'
import { AppDispatch, store } from '../../../store'
import { UPDATE_SESSION } from '../../../store/reducer/session'

export const onThunkLogin = async (loginData: LogInVM) => {
	try {
		const authService = new AuthService()
		const res = await authService.login(loginData)
		if (res.success) {
			store.dispatch(
				UPDATE_SESSION({
					...res.data,
				})
			)
		} else {
			toast.warning(res.message)
		}
	} catch (e) {
		catchHandle(e)
	}
}
