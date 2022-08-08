import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios'
import { store } from '../../store'
import { appSlice } from '../../store/reducer/app'

export default class ApiService {
	protected apiGet<T>(url: string, params: unknown = {}, hasToken = false): Promise<T> {
		return this.apiRun<T>('get', url, null, params, hasToken)
	}

	protected apiPost<T>(
		url: string,
		body: unknown = null,
		params: unknown = {},
		hasToken = false
	): Promise<T> {
		return this.apiRun<T>('post', url, body, params, hasToken)
	}

	protected apiPut<T>(
		url: string,
		body: unknown = null,
		params: unknown = {},
		hasToken = false
	): Promise<T> {
		return this.apiRun<T>('put', url, body, params, hasToken)
	}

	protected apiDelete<T>(
		url: string,
		params: unknown = {},
		hasToken = false
	): Promise<T> {
		return this.apiRun<T>('delete', url, null, params, hasToken)
	}

	private apiRun<T>(
		method: Method,
		url: string,
		body: unknown = null,
		params: unknown = {},
		hasToken = false
	): Promise<T> {
		return new Promise<T>((resolve, reject) => {
			const API_URL = 'http://localhost:8080'

			const config: AxiosRequestConfig = {
				url,
				method,
				baseURL: `${API_URL}`,
				params,
				headers: this.appendHeaders(hasToken),
				timeout: 60000,
			}
			store.dispatch(appSlice.actions.CHANGE_SPINNER_STATE(true))

			if (body) {
				config.data = body
			}

			axios(config)
				.then(({ data }) => {
					resolve(data)
				})
				.catch((error) => {
					reject(error)
				})
				.finally(() => {
					store.dispatch(appSlice.actions.CHANGE_SPINNER_STATE(false))
				})
		})
	}

	// eslint-disable-next-line class-methods-use-this
	private appendHeaders(hasToken = false): AxiosRequestHeaders {
		const headers: AxiosRequestHeaders = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}

		if (hasToken) {
			// const sessionReducer = store.getState().session
			// headers.Authorization = `Bearer ${sessionReducer.session.token}`
		}

		return headers
	}
}
