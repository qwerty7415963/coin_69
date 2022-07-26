import { combineReducers } from 'redux'
import { SideBarSlice } from '../../components/layout/store'
import { sessionSlice } from './session'
export const rootReducer = combineReducers({
	// here we will be adding reducers
	session: sessionSlice.reducer,
	sideBar: SideBarSlice.reducer,
})
