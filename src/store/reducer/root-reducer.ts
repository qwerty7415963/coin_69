import { combineReducers } from '@reduxjs/toolkit'
import { SideBarSlice } from '../../components/layout/store'
import { appSlice } from './app'
import { sessionSlice } from './session'

export const rootReducer = combineReducers({
	// here we will be adding reducers
	app: appSlice.reducer,
	session: sessionSlice.reducer,
	sideBar: SideBarSlice.reducer,
})
