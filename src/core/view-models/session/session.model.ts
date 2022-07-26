import { UserVM } from '../user-model/user.model'

export class SessionVM {
	user: UserVM
	token: string

	constructor() {
		this.user = new UserVM()
		this.token = ''
	}
}
