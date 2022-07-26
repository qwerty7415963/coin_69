import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SessionVM } from '../../../core/view-models/session/session.model'
import { UserVM } from '../../../core/view-models/user-model/user.model'

interface SessionState {
	loggedIn: boolean
	token: string
	user: UserVM
}

const initialState: SessionState = {
	loggedIn: false,
	token: '',
	user: new UserVM(),
}

export const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		UPDATE_SESSION(state, action: PayloadAction<SessionVM>) {
			state.loggedIn = true
			state.token = action.payload.token
			state.user = action.payload.user
		},
	},
})
