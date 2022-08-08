import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { PERSIST_CONFIG } from './persist'
import { rootReducer } from './reducer/root-reducer'

const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer)

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
export const persistor = persistStore(store)
