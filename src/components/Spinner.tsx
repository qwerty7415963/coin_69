import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { AppState } from '../store'
import { AppRootState } from '../store/reducer/app'

export const Loading: React.FC = () => {
	const { enableSpinner }: AppRootState = useSelector((state: AppState) => state.app)

	if (enableSpinner) {
		return (
			<Flex
				justifyContent={'center'}
				alignItems={'center'}
				zIndex={100}
				width={'full'}
				height={'full'}
			>
				<Spinner
					thickness={'3px'}
					speed={'0.65s'}
					emptyColor={'gray.200'}
					color={'blue.500'}
					size={'md'}
				/>
			</Flex>
		)
	}
	return <div />
}
