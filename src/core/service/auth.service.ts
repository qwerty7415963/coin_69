import { LoginApiResult } from '../data-transfer/auth/auth.api-result'
import { LogInVM } from '../view-models/auth-model/sign-in.model'
import ApiService from './api.service'

export class AuthService extends ApiService {
	public login(data: LogInVM) {
		return this.apiPost<LoginApiResult>(`/auth/login`, data, null, false)
	}
}
