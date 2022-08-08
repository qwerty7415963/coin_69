import { toast } from 'react-toastify'
import { ApiResult } from '../data-transfer/api-result'

export const catchHandle = (e: any): void => {
	const { message }: ApiResult = e

	try {
		if (e.response.status) {
			switch (e.response.status) {
				case 401: {
					toast.warning('Login session expired')

					break
				}
				default: {
					toast.warning(message)
				}
			}
		}
	} catch {
		toast.warning(message)
	}
}
