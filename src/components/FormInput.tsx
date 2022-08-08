import React, { ChangeEventHandler, useState } from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

interface ComponentProps {
	label: string
}

type FormInputProps = ComponentProps

export const FormInput: React.FC<FormInputProps> = (props) => {
	const [inputValue, setInputValue] = useState<string>('')

	const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value)
	}

	return (
		<FormControl>
			<FormLabel>{props.label}</FormLabel>
			<Input
				type={'text'}
				value={inputValue}
				onChange={onInputChange}
			/>
		</FormControl>
	)
}
