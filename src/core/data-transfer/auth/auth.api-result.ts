import { SessionVM } from '../../view-models/session/session.model'
import { ApiResult } from '../api-result'

export class LoginApiResult extends ApiResult {
	data: SessionVM

	constructor() {
		super()
		this.data = new SessionVM()
	}
}
