import { createSlice } from '@reduxjs/toolkit'

export interface SideBarState {
	isFullWidth: boolean
	fullWidth: number
	minWidth: number
}

const initialState: SideBarState = {
	isFullWidth: true,
	fullWidth: 320,
	minWidth: 0,
}

export const SideBarSlice = createSlice({
	name: 'sideBar',
	initialState,
	reducers: {
		CHANGE_SIDE_BAR_STATE(state) {
			state.isFullWidth = !state.isFullWidth
		},
	},
})
