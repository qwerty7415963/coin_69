import { Box } from '@chakra-ui/react'
import React from 'react'
import { FormInput } from '../../components/FormInput'

interface ComponentProps {
	any?: any
}

export type BybitProps = ComponentProps

export const Bybit: React.FC<BybitProps> = () => {
	return (
		<Box>
			<Box>{/* <FormInput label={'Symbol'} /> */}</Box>
		</Box>
	)
}
