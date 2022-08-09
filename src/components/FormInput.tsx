import React, {
	ChangeEventHandler,
	HTMLInputTypeAttribute,
	useMemo,
	useState,
} from 'react'
import {
	FormControl,
	FormControlProps,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { usernameValidationRegex } from '../core/data/validate'

interface ComponentProps extends FormControlProps {
	label: string
	value: string
	inputType: HTMLInputTypeAttribute | undefined
	onInputChange: (data: string) => void
	required?: boolean
}

type FormInputProps = ComponentProps

export const FormInput: React.FC<FormInputProps> = (props) => {
	const [inputValue, setInputValue] = useState<string>(props.value)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [isFocus, setIsFocus] = useState<boolean>(false)

	const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
		props.onInputChange(e.currentTarget.value)
	}

	const isError = useMemo(() => {
		if (isFocus) {
			if (inputValue === '') {
				setErrorMessage(`Must input ${props.label} value`)
				return true
			}
			// if (usernameValidationRegex.test(inputValue) && props.inputType === 'text') {
			// 	setErrorMessage(`Input ${props.label} value not valid `)
			// 	return true
			// }
		}
		return false
	}, [inputValue, isFocus])

	return (
		<FormControl
			isRequired={props.required}
			isInvalid={isError}
		>
			<FormLabel>{props.label}</FormLabel>
			<Input
				value={inputValue}
				onChange={onInputChange}
				borderColor={'gray.300'}
				type={props.inputType}
				onFocus={() => setIsFocus(true)}
			/>
			{isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
		</FormControl>
	)
}
