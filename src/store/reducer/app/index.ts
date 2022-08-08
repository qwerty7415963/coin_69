import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppRootState {
	enableSpinner: boolean
}

const initialState: AppRootState = {
	enableSpinner: false,
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		CHANGE_SPINNER_STATE(state, action: PayloadAction<boolean>) {
			state.enableSpinner = action.payload
		},
	},
})
